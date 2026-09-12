import {TASKS, SCHOOLS, MONEY, MONEY_DATES, CONTACTS, PARENT, VERIFY, GLOSSARY} from './data.js';
import {ESSAYS} from './essays.js';
import {workbook} from './xlsx.js';

/* ---------- storage ---------- */
const KEY='callboard.v2';
let S={done:{},ans:{},drafts:{}};
try{Object.assign(S, JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
S.done=S.done||{}; S.ans=S.ans||{}; S.drafts=S.drafts||{};
const stateEl=()=>document.getElementById('saveState');
let flash;
function save(){
  try{
    localStorage.setItem(KEY,JSON.stringify(S));
    const el=stateEl(); if(!el)return;
    el.textContent='Saved '+new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});
    el.className='ok'; clearTimeout(flash);
    flash=setTimeout(()=>{el.className=''; el.textContent='Saved to this device';},2500);
  }catch(e){ const el=stateEl(); if(el)el.textContent='COULD NOT SAVE — download a backup'; }
}
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const words=t=>t&&t.trim()?t.trim().split(/\s+/).length:0;

/* ---------- dates ---------- */
const FMT=s=>new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'}).toUpperCase();
const LEFT=s=>Math.round((new Date(s+'T12:00:00')-new Date())/864e5);
const heat=t=>{const n=LEFT(t.d);return n<=4?'hot':n<=11?'soon':''};
const openTasks=()=>TASKS.filter(t=>!S.done[t.id]).sort((a,b)=>a.p-b.p||a.d.localeCompare(b.d));

/* ---------- today ---------- */
function strip(t,why){
  const n=LEFT(t.d);
  // The steps sit OUTSIDE the <label>. Inside it, tapping "show me how"
  // would toggle the checkbox.
  const steps=(t.how&&t.how.length)?`<details class="how"><summary>Show me exactly how</summary>
      <ol>${t.how.map(x=>`<li>${x}</li>`).join('')}</ol></details>`:'';
  return `<div class="call ${heat(t)}${S.done[t.id]?' off':''}" data-id="${t.id}">
    <div class="slot"><b>${FMT(t.d)}</b>${n<0?'overdue':n===0?'today':(t.m||n+' days')}</div>
    <div><label class="tick"><input type="checkbox" data-id="${t.id}"${S.done[t.id]?' checked':''}>
    <span><h3>${t.t}</h3>${why&&t.w?`<div class="why">${esc(t.w)}</div>`:''}
    <div class="who">${esc(t.s)}</div></span></label>${steps}</div></div>`;
}
function drawToday(){
  const o=openTasks();
  document.getElementById('board').innerHTML = o.length
    ? o.slice(0,3).map(t=>strip(t,1)).join('')
    : '<p style="padding:26px 0"><strong>Nothing called.</strong> Everything is struck.</p>';
  document.getElementById('hdrToday').textContent =
    o.length>=3?"You're called for three things":o.length?`You're called for ${o.length}`:'Nothing called';
}
function drawTally(){
  const n=TASKS.filter(t=>S.done[t.id]).length;
  document.getElementById('tally').textContent=`${n} of ${TASKS.length} struck · ${TASKS.length-n} to go`;
  const nx=openTasks()[0];
  document.getElementById('nextUp').textContent=nx?`NEXT: ${FMT(nx.d)}`:'ALL CLEAR';
}
function markTask(id,on){
  document.querySelectorAll(`.call[data-id="${id}"]`).forEach(c=>c.classList.toggle('off',on));
  document.querySelectorAll(`input[data-id="${id}"]`).forEach(i=>{if(i.checked!==on)i.checked=on});
}

/* ---------- full run ---------- */
let filter='all';
function drawRun(){
  const list=TASKS.filter(t=>filter==='all'||t.s===filter).sort((a,b)=>a.d.localeCompare(b.d));
  let out='',last='';
  list.forEach(t=>{ if(t.d!==last){out+=`<div class="day">${FMT(t.d)}</div>`;last=t.d} out+=strip(t,0); });
  document.getElementById('runList').innerHTML=out;
  const groups=[...new Set(TASKS.map(t=>t.s))];
  document.getElementById('chips').innerHTML=['all',...groups]
    .map(g=>`<button data-f="${esc(g)}" aria-pressed="${filter===g}">${g==='all'?'Everything':esc(g)}</button>`).join('');
}

/* ---------- essays: progress ---------- */
function essayProgress(e){
  const total=e.gather.length+1+e.sharpen.length;
  let n=0;
  e.gather.forEach((q,i)=>{ if((S.ans[e.key+'.g'+i]||'').trim())n++; });
  if((S.drafts[e.key]||'').trim())n++;
  e.sharpen.forEach((q,i)=>{ if((S.ans[e.key+'.s'+i]||'').trim())n++; });
  return {n,total,pct:Math.round(n/total*100)};
}
function drawEssayList(){
  document.getElementById('essayList').innerHTML=ESSAYS.map(e=>{
    const p=essayProgress(e), n=LEFT(e.due);
    const st=p.pct===0?'Not started':p.pct===100?'Complete':`${p.pct}% through`;
    return `<button class="pick" data-essay="${e.key}">
      <div class="t">${esc(e.title)}</div>
      <div class="s">${esc(e.school)} · ${e.limit} words · due ${FMT(e.due)}${n<0?' · OVERDUE':n<=7?` · ${n} days`:''}</div>
      <div class="bar"><i style="width:${p.pct}%"></i></div>
      <div class="pct">${st} — ${p.n} of ${p.total} steps</div></button>`;
  }).join('');
}

/* ---------- essays: the guided walk ---------- */
let cur=null, step='gather', gi=0;
function openEssay(key){
  cur=ESSAYS.find(e=>e.key===key); step='gather';
  gi=cur.gather.findIndex((q,i)=>!(S.ans[cur.key+'.g'+i]||'').trim());
  if(gi<0)gi=cur.gather.length-1;
  document.getElementById('essayHome').hidden=true;
  const w=document.getElementById('essayWalk'); w.hidden=false;
  drawWalk(); window.scrollTo(0,0);
}
function closeEssay(){
  cur=null;
  document.getElementById('essayWalk').hidden=true;
  document.getElementById('essayHome').hidden=false;
  drawEssayList(); window.scrollTo(0,0);
}
function material(){
  const rows=cur.gather.map((q,i)=>{
    const a=(S.ans[cur.key+'.g'+i]||'').trim();
    return a?`<dt>${esc(q.q)}</dt><dd>${esc(a)}</dd>`:'';
  }).filter(Boolean).join('');
  return rows?`<div class="material"><h4>Your raw material</h4><dl>${rows}</dl></div>`
    :`<div class="material"><h4>Your raw material</h4><p>Nothing yet — go back to Gather.
       You can't draft from an empty page, which is the entire point.</p></div>`;
}
function drawWalk(){
  const e=cur, w=document.getElementById('essayWalk');
  const tabs=[['gather','Gather',`1 · ${e.gather.length} questions`],
              ['choose','Choose','2 · what to use'],
              ['draft','Draft',`3 · ${e.limit} words`],
              ['sharpen','Sharpen',`4 · ${e.sharpen.length} checks`]];
  let mid='';
  if(step==='gather'){
    const q=e.gather[gi], id=e.key+'.g'+gi;
    const filled=e.gather.map((x,i)=>(S.ans[e.key+'.g'+i]||'').trim()?'filled':'');
    mid=`<div class="qcard">
      <div class="qnum">Question ${gi+1} of ${e.gather.length}</div>
      <p class="qtext">${esc(q.q)}</p>
      ${q.h?`<p class="qhint">${esc(q.h)}</p>`:''}
      <textarea id="gq" data-ans="${id}" placeholder="Type badly and fast. Nobody reads this but you.">${esc(S.ans[id]||'')}</textarea>
      <div class="qnav">
        <button class="btn" id="gPrev"${gi===0?' disabled':''}>Back</button>
        <button class="btn go" id="gNext">${gi===e.gather.length-1?'Done gathering':'Next question'}</button>
        <span class="dots">${filled.map((f,i)=>`<i class="${i===gi?'on':f}"></i>`).join('')}</span>
      </div></div>
      <p class="tag" style="margin-top:14px">These answers are notes, not writing. Short and ugly is correct.</p>`;
  }
  if(step==='choose'){
    mid=`${material()}
      <div class="qcard"><div class="qnum">Now pick</div>
      <p class="qtext">${esc(e.choose.lead)}</p>
      ${e.choose.body.map(b=>`<p>${b}</p>`).join('')}
      <div class="qnav"><button class="btn go" data-step="draft">Start the draft</button>
      <button class="btn" data-step="gather">Add more material</button></div></div>`;
  }
  if(step==='draft'){
    const d=S.drafts[e.key]||'', wc=words(d);
    mid=`${material()}
      <div class="qcard"><div class="qnum">Shape it like this</div>
      <ol class="shape">${e.shape.map(s=>`<li>${s}</li>`).join('')}</ol></div>
      <textarea class="draft" id="draftBox" data-draft="${e.key}"
        placeholder="Write it here. Pull straight from your material above — that's what it's for.">${esc(d)}</textarea>
      <div class="count${wc>e.limit?' over':''}" id="draftCount">${wc} / ${e.limit} words</div>
      <div class="qnav"><button class="btn go" data-step="sharpen">Now sharpen it</button></div>`;
  }
  if(step==='sharpen'){
    const d=S.drafts[e.key]||'';
    mid=`<div class="promptbox"><strong>Your draft</strong><div class="printed" style="display:block;margin-top:8px">${esc(d)||'<em>No draft yet — go back to step 3.</em>'}</div>
      <cite>${words(d)} of ${e.limit} words</cite></div>
      ${e.sharpen.map((q,i)=>{const id=e.key+'.s'+i;return `<div class="qcard" style="margin-bottom:12px">
        <div class="qnum">Check ${i+1}</div><p class="qtext">${esc(q.q)}</p>
        ${q.h?`<p class="qhint">${esc(q.h)}</p>`:''}
        <textarea data-ans="${id}" placeholder="Answer honestly, then go fix the draft.">${esc(S.ans[id]||'')}</textarea></div>`}).join('')}
      <div class="qnav"><button class="btn" data-step="draft">Back to the draft</button></div>`;
  }
  w.innerHTML=`<button class="btn" id="essayBack">← All essays</button>
    <h2 style="margin-top:18px">${esc(e.title)}</h2><div class="rule"></div>
    <div class="promptbox">${esc(e.prompt)}<cite>${esc(e.meta)}</cite></div>
    <p>${esc(e.why)}</p>
    <details><summary>What they're really asking</summary><div class="inner"><p>${esc(e.asking)}</p>
      <p><strong>How this goes wrong:</strong> ${esc(e.failure)}</p></div></details>
    <div class="steps" role="tablist">${tabs.map(([k,l,s])=>
      `<button role="tab" aria-selected="${step===k}" data-step="${k}">${l}<span class="n">${s}</span></button>`).join('')}</div>
    ${mid}`;
  const ta=w.querySelector('#gq'); if(ta)ta.focus();
}

/* ---------- static tables ---------- */
function drawStatic(){
  document.getElementById('parentList').innerHTML=PARENT.map(p=>
    `<div class="call"><div class="slot"><b>${esc(p.due)}</b></div>
     <div><h3>${esc(p.t)}</h3><div class="why">${esc(p.w)}</div></div></div>`).join('');
  document.getElementById('verifyList').innerHTML=VERIFY.map(v=>
    `<details><summary>${esc(v.t)}</summary><div class="inner"><p>${esc(v.w)}</p>
     <p class="tag">Confirm with: ${esc(v.c)}</p></div></details>`).join('');
  document.getElementById('glossary').innerHTML=GLOSSARY.map(g=>
    `<div class="term"><dt>${esc(g.t)}</dt><dd>${esc(g.d)}</dd></div>`).join('');
  document.getElementById('schoolList').innerHTML=SCHOOLS.map(s=>
    `<details><summary>${esc(s.n)} <span class="tag">· ${esc(s.due)} · ${esc(s.plan)}</span></summary>
     <div class="inner"><ul>${s.b.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>
     <a class="btn" href="${s.url}" target="_blank" rel="noopener">Open ${esc(s.n)} →</a></div></details>`).join('');
  document.getElementById('moneyTable').innerHTML=
    `<thead><tr><th>School</th><th>Sticker</th><th>Free-tuition rule</th><th>Meets need</th></tr></thead><tbody>`+
    MONEY.map(m=>`<tr><td>${esc(m.n)}</td><td>${esc(m.sticker)}</td><td>${esc(m.rule)}</td><td>${esc(m.need)}</td></tr>`).join('')+'</tbody>';
  document.getElementById('moneyDates').innerHTML=
    `<thead><tr><th>Date</th><th>What</th></tr></thead><tbody>`+
    MONEY_DATES.map(m=>`<tr><td>${esc(m.d)}</td><td>${esc(m.w)}</td></tr>`).join('')+'</tbody>';
  document.getElementById('contactTable').innerHTML=
    `<thead><tr><th>Where</th><th>Contact</th><th>For</th></tr></thead><tbody>`+
    CONTACTS.map(c=>`<tr><td>${esc(c.w)}</td><td>${esc(c.c)}</td><td>${esc(c.f)}</td></tr>`).join('')+'</tbody>';
}

/* ---------- events ---------- */
document.addEventListener('change',ev=>{
  const cb=ev.target.closest('input[type=checkbox][data-id]');
  if(cb){ S.done[cb.dataset.id]=cb.checked; save(); markTask(cb.dataset.id,cb.checked);
          drawTally(); if(!document.getElementById('today').hidden)drawToday(); }
});
document.addEventListener('input',ev=>{
  const t=ev.target;
  if(t.dataset.ans){ S.ans[t.dataset.ans]=t.value; save(); return; }
  if(t.dataset.draft){
    S.drafts[t.dataset.draft]=t.value; save();
    const e=ESSAYS.find(x=>x.key===t.dataset.draft), wc=words(t.value);
    const c=document.getElementById('draftCount');
    if(c){ c.textContent=`${wc} / ${e.limit} words`; c.classList.toggle('over',wc>e.limit); }
  }
});
document.addEventListener('click',ev=>{
  const tab=ev.target.closest('nav button');
  if(tab){
    document.querySelectorAll('nav button').forEach(b=>b.setAttribute('aria-selected',b===tab));
    document.querySelectorAll('main section').forEach(s=>s.hidden=s.id!==tab.dataset.t);
    if(tab.dataset.t==='today')drawToday();
    if(tab.dataset.t==='essays'&&!cur)drawEssayList();
    window.scrollTo(0,0); return;
  }
  // Buttons inside a section that jump to another tab ("Go to Save & Print").
  const jump=ev.target.closest('button[data-t]');
  if(jump){
    const nb=document.querySelector(`nav button[data-t="${jump.dataset.t}"]`);
    if(nb){nb.click();return;}
  }
  const pick=ev.target.closest('[data-essay]'); if(pick){openEssay(pick.dataset.essay);return;}
  if(ev.target.id==='essayBack'){closeEssay();return;}
  if(ev.target.id==='gNext'){
    if(gi<cur.gather.length-1){gi++} else {step='choose'} drawWalk(); window.scrollTo(0,0); return;
  }
  if(ev.target.id==='gPrev'){ if(gi>0)gi--; drawWalk(); return; }
  const st=ev.target.closest('[data-step]');
  if(st&&cur){ step=st.dataset.step;
    if(step==='gather'){gi=Math.min(gi,cur.gather.length-1)}
    drawWalk(); window.scrollTo(0,0); return; }
  const ch=ev.target.closest('#chips button'); if(ch){filter=ch.dataset.f;drawRun();return;}
});

/* ---------- backup ---------- */
/* Two ways to hand over a file. A plain <a download> works on a normal web
   page but does nothing inside the Claude artifact viewer, which mediates
   saves through its own permission prompt. Try that first, fall back to the
   anchor everywhere else. */
async function download(blob,name){
  try{
    const dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null;
    if(dl){ await dl.save({filename:name, data:blob}); return; }
  }catch(err){
    if(err && err.code==='declined') return;           // viewer said no; not an error
    // anything else: fall through to the ordinary download
  }
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
const stamp=()=>new Date().toISOString().slice(0,10);
function backup(){
  download(new Blob([JSON.stringify(S,null,2)],{type:'application/json'}),
    `callboard-backup-${stamp()}.json`);
}
document.getElementById('dlBackup').onclick=backup;
document.getElementById('quickSave').onclick=backup;
document.getElementById('upBackup').onclick=()=>document.getElementById('fileIn').click();
document.getElementById('fileIn').onchange=ev=>{
  const f=ev.target.files[0]; if(!f)return;
  const r=new FileReader();
  r.onload=()=>{ try{
      const d=JSON.parse(r.result);
      if(!d||typeof d!=='object')throw 0;
      S={done:d.done||{},ans:d.ans||{},drafts:d.drafts||{}};
      save(); drawToday(); drawTally(); drawRun(); drawEssayList();
      if(cur)drawWalk();
      alert('Restored. Everything is back.');
    }catch(err){ alert("That file didn't look like a Callboard backup. Nothing was changed."); } };
  r.readAsText(f); ev.target.value='';
};
const savePage=document.getElementById('savePage');
if(savePage)savePage.onclick=()=>download(
  new Blob(['<!doctype html>\n'+document.documentElement.outerHTML],{type:'text/html'}),
  'callboard.html');

document.getElementById('wipe').onclick=()=>{
  if(!confirm('Erase every answer and draft on this device? This cannot be undone.'))return;
  if(!confirm('Really sure? Download a backup first if you have not.'))return;
  S={done:{},ans:{},drafts:{}}; save();
  drawToday(); drawTally(); drawRun(); drawEssayList(); if(cur)closeEssay();
};

/* ---------- excel ---------- */
document.getElementById('xlsx').onclick=()=>{
  const sheets=[];
  const add=(rows,name)=>sheets.push({name,rows});

  add([['Task','School','Due','Status','Why it matters'],
    ...TASKS.slice().sort((a,b)=>a.d.localeCompare(b.d))
      .map(t=>[t.t,t.s,t.d,S.done[t.id]?'DONE':'open',t.w])],'Checklist');

  const er=[['Essay','School','Word limit','Due','Step','Question','Her answer']];
  ESSAYS.forEach(e=>{
    e.gather.forEach((q,i)=>er.push([e.title,e.school,e.limit,e.due,'Gather '+(i+1),q.q,S.ans[e.key+'.g'+i]||'']));
    er.push([e.title,e.school,e.limit,e.due,'DRAFT',e.prompt,S.drafts[e.key]||'']);
    e.sharpen.forEach((q,i)=>er.push([e.title,e.school,e.limit,e.due,'Sharpen '+(i+1),q.q,S.ans[e.key+'.s'+i]||'']));
  });
  add(er,'Essay work');

  add([['Essay','School','Limit','Words written','Draft'],
    ...ESSAYS.map(e=>[e.title,e.school,e.limit,words(S.drafts[e.key]||''),S.drafts[e.key]||''])],'Drafts');

  add([['School','Plan','Deadline','Notes','Link'],
    ...SCHOOLS.map(s=>[s.n,s.plan,s.due,s.b.join(' | '),s.url])],'Schools');

  add([['School','Sticker cost','Free-tuition rule','Meets full need'],
    ...MONEY.map(m=>[m.n,m.sticker,m.rule,m.need]),[],
    ['Money deadlines'],...MONEY_DATES.map(m=>[m.d,m.w]),[],
    ['FAFSA Notre Dame','001840'],['CSS Notre Dame','1841'],['CSS Holy Cross','3282']],'Money');

  add([['Where','Contact','For'],...CONTACTS.map(c=>[c.w,c.c,c.f])],'Contacts');

  download(workbook(sheets),`college-applications-${stamp()}.xlsx`);
};

/* ---------- print ---------- */
function mirrorDrafts(){
  document.querySelectorAll('.printed[data-mirror]').forEach(n=>n.remove());
  document.querySelectorAll('textarea').forEach(ta=>{
    const d=document.createElement('div');
    d.className='printed'; d.dataset.mirror='1';
    d.textContent=ta.value||'(blank)';
    ta.after(d);
  });
}
document.getElementById('printAll').onclick=()=>{
  mirrorDrafts();
  document.querySelectorAll('main section').forEach(s=>s.dataset.wasHidden=s.hidden?'1':'');
  document.querySelectorAll('main section').forEach(s=>s.hidden=false);
  document.querySelectorAll('details').forEach(d=>{d.dataset.wasOpen=d.open?'1':'';d.open=true});
  window.print();
};
document.getElementById('printWeek').onclick=()=>{
  document.querySelectorAll('main section').forEach(s=>{s.dataset.wasHidden=s.hidden?'1':'';s.hidden=s.id!=='today'});
  window.print();
};
window.addEventListener('afterprint',()=>{
  document.querySelectorAll('main section').forEach(s=>{
    if(s.dataset.wasHidden!==undefined)s.hidden=s.dataset.wasHidden==='1'; delete s.dataset.wasHidden;});
  document.querySelectorAll('details').forEach(d=>{
    if(d.dataset.wasOpen!==undefined)d.open=d.dataset.wasOpen==='1'; delete d.dataset.wasOpen;});
  document.querySelectorAll('.printed[data-mirror]').forEach(n=>n.remove());
  const sel=document.querySelector('nav button[aria-selected="true"]');
  if(sel)document.querySelectorAll('main section').forEach(s=>s.hidden=s.id!==sel.dataset.t);
});

/* ---------- go ---------- */
drawStatic(); drawToday(); drawTally(); drawRun(); drawEssayList();

if(!S.seen){
  S.seen=1; save();
  const b=document.querySelector('nav button[data-t="start"]');
  if(b){
    document.querySelectorAll('nav button').forEach(x=>x.setAttribute('aria-selected',x===b));
    document.querySelectorAll('main section').forEach(x=>x.hidden=x.id!=='start');
  }
}
