/* Minimal multi-sheet .xlsx writer. No dependencies, no CDN — a real Excel
   workbook is a ZIP of XML, and stored (uncompressed) entries are legal ZIP.
   Keeping this local means the export still works on a bad connection. */

const CRC=(()=>{const t=new Uint32Array(256);
  for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}
  return b=>{let c=0xFFFFFFFF;for(let i=0;i<b.length;i++)c=t[(c^b[i])&0xFF]^(c>>>8);return (c^0xFFFFFFFF)>>>0}})();

const enc=s=>new TextEncoder().encode(s);
const xml=s=>String(s==null?'':s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;').replace(/'/g,'&apos;')
  .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,'');

function col(n){let s='';n++;while(n>0){const m=(n-1)%26;s=String.fromCharCode(65+m)+s;n=(n-m-1)/26}return s}

function sheetXml(rows){
  const body=rows.map((row,r)=>{
    const cells=(row||[]).map((v,c)=>{
      if(v===null||v===undefined||v==='')return '';
      const ref=col(c)+(r+1);
      if(typeof v==='number'&&isFinite(v))return `<c r="${ref}"><v>${v}</v></c>`;
      return `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${xml(v)}</t></is></c>`;
    }).join('');
    return `<row r="${r+1}">${cells}</row>`;
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${body}</sheetData></worksheet>`;
}

function zip(files){
  const chunks=[],central=[],names=[];let off=0;
  const u16=n=>[n&255,(n>>8)&255], u32=n=>[n&255,(n>>8)&255,(n>>16)&255,(n>>24)&255];
  // DOS timestamp. A zero date is month 0 / day 0, which strict readers reject.
  const now=new Date();
  const dtime=(now.getHours()<<11)|(now.getMinutes()<<5)|(now.getSeconds()>>1);
  const ddate=((now.getFullYear()-1980)<<9)|((now.getMonth()+1)<<5)|now.getDate();
  for(const f of files){
    const name=enc(f.name), data=enc(f.data), crc=CRC(data);
    const head=Uint8Array.from([0x50,0x4b,0x03,0x04,...u16(20),...u16(0),...u16(0),
      ...u16(dtime),...u16(ddate),...u32(crc),...u32(data.length),...u32(data.length),
      ...u16(name.length),...u16(0)]);
    chunks.push(head,name,data);
    central.push(Uint8Array.from([0x50,0x4b,0x01,0x02,...u16(20),...u16(20),...u16(0),...u16(0),
      ...u16(dtime),...u16(ddate),...u32(crc),...u32(data.length),...u32(data.length),
      ...u16(name.length),...u16(0),...u16(0),...u16(0),...u16(0),...u32(0),...u32(off)]));
    names.push(name);
    off+=head.length+name.length+data.length;
  }
  const dir=[];
  central.forEach((c,i)=>{dir.push(c,names[i])});
  let dsize=0; dir.forEach(d=>dsize+=d.length);
  const end=Uint8Array.from([0x50,0x4b,0x05,0x06,...u16(0),...u16(0),
    ...u16(files.length),...u16(files.length),...u32(dsize),...u32(off),...u16(0)]);
  return new Blob([...chunks,...dir,end],
    {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
}

/** sheets: [{name, rows:[[cell,...],...]}] -> Blob */
export function workbook(sheets){
  const safe=sheets.map((s,i)=>({
    name:(s.name||('Sheet'+(i+1))).replace(/[\\\/\?\*\[\]:]/g,' ').slice(0,31),
    rows:s.rows||[]}));
  const files=[
    {name:'[Content_Types].xml', data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
${safe.map((s,i)=>`<Override PartName="/xl/worksheets/sheet${i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}
</Types>`},
    {name:'_rels/.rels', data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`},
    {name:'xl/workbook.xml', data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>${safe.map((s,i)=>`<sheet name="${xml(s.name)}" sheetId="${i+1}" r:id="rId${i+1}"/>`).join('')}</sheets>
</workbook>`},
    {name:'xl/_rels/workbook.xml.rels', data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${safe.map((s,i)=>`<Relationship Id="rId${i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i+1}.xml"/>`).join('')}
</Relationships>`},
    ...safe.map((s,i)=>({name:`xl/worksheets/sheet${i+1}.xml`, data:sheetXml(s.rows)}))
  ];
  return zip(files);
}
