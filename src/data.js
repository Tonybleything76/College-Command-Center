/* Single source of truth. The screen, the Excel export and the PDF all read from here. */

export const TASKS = [
  {id:'ca1', s:'Common App', t:"Open the Common App. Check it says Fall 2027. Add all nine schools.", d:'2026-09-13', p:1, m:'30 min', w:"Once the schools are in, the app shows you every real deadline and requirement. That replaces the paper list entirely."},
  {id:'ca2', s:'Common App', t:'Copy every essay prompt and word limit into a note', d:'2026-09-13', p:1, m:'20 min', w:'Twenty minutes, and it unlocks half of this board. Most prompts are only visible inside the Common App once a school is added.'},
  {id:'nd1', s:'Notre Dame', t:'Write the Notre Dame faith answer', d:'2026-09-16', p:1, m:'75 words', w:"The smallest real thing on the whole list, for the school you actually want. You've said this out loud from a pulpit. Start here."},
  {id:'rec1', s:'Common App', t:'Invite your counselor and two teachers as recommenders', d:'2026-09-18', p:1, m:'15 min', w:'This runs on their calendar, not yours. Most common reason a Nov 1 application misses.'},
  {id:'mus1', s:'UW–Madison', t:'Email admissions@music.wisc.edu about the jazz voice prescreen date', d:'2026-09-18', p:1, m:'10 min', w:'Last year the prescreen was due Oct 31 — before the application. If that repeats it changes your whole October.'},
  {id:'act1', s:'Common App', t:'Fill in Activities — 10 slots, 150 characters each', d:'2026-09-20', p:2, m:'90 min', w:'Most underrated part of the application. NHS president, softball, musicals, preaching team.'},
  {id:'hon1', s:'Common App', t:'Fill in Honors — Jerry nomination, 3rd globally at the Great Shake', d:'2026-09-20', p:2, m:'30 min', w:'Outside recognition is worth more than another activity line. Almost nobody has this.'},
  {id:'tri1', s:'Essays', t:'Sort your four drafts: alive, dead, or wrong shape', d:'2026-09-20', p:2, m:'60 min', w:'One alive draft saves two weeks. Be honest, not loyal.'},
  {id:'ps1', s:'Essays', t:'Personal statement — good enough to build on', d:'2026-09-30', p:1, m:'650 words', w:'Not finished. Not perfect. Good enough that supplements can start. This date governs everything.'},
  {id:'nd2', s:'Notre Dame', t:'Write the 150-word non-negotiables essay', d:'2026-10-02', p:2, m:'150 words', w:''},
  {id:'nd3', s:'Notre Dame', t:'Write the second short answer — #2, #3, or #4', d:'2026-10-02', p:2, m:'100 words', w:'#4 "What would you fight for?" is the sleeper. Nobody answers it well.'},
  {id:'hc1', s:'Holy Cross', t:'Request your Holy Cross interview', d:'2026-10-02', p:2, m:'10 min', w:'Ten minutes now. Interviews there count, and slots fill.'},
  {id:'fa1', s:'Money', t:'Parents: file FAFSA + CSS Profile, both parents', d:'2026-10-05', p:1, m:'parents', w:'Opens Oct 1. Notre Dame needs both parents on the CSS — it decides whether free tuition applies.'},
  {id:'ck1', s:'Notre Dame', t:'Checkpoint: is the Notre Dame application genuinely strong?', d:'2026-10-15', p:1, m:'decide', w:'If it is not, switch to Regular Decision. An early read of a weak application is a wasted shot.'},
  {id:'wi1', s:'UW–Madison', t:'Write the Why Madison essay', d:'2026-10-16', p:2, m:'', w:'You spent a summer there. Use it specifically. Do not recycle the Notre Dame essay.'},
  {id:'mn1', s:'Minnesota', t:'Write the Minnesota supplements, if they are required', d:'2026-10-16', p:2, m:'300 words', w:''},
  {id:'fd1', s:'Fordham', t:'Write the Fordham supplement — optional, do it anyway', d:'2026-10-18', p:2, m:'300 words', w:'Optional means optional for them.'},
  {id:'sub1', s:'Minnesota', t:'SUBMIT Minnesota', d:'2026-10-20', p:1, m:'places', w:'First one out. Easiest. Take the win.'},
  {id:'sub2', s:'UW–Madison', t:'SUBMIT UW–Madison', d:'2026-10-22', p:1, m:'places', w:''},
  {id:'sub3', s:'Fordham', t:'SUBMIT Fordham', d:'2026-10-27', p:1, m:'places', w:''},
  {id:'sub4', s:'Notre Dame', t:'SUBMIT Notre Dame', d:'2026-10-27', p:1, m:'places', w:'Five days before the deadline. Not on deadline day — that is how portal disaster stories start.'}
];

export const SCHOOLS = [
  {n:'Notre Dame', plan:'Restrictive Early Action', due:'Nov 1', url:'https://admissions.nd.edu/apply/', b:[
    'Decision mid-December. Non-binding — you still have until May 1.',
    'REA carries priority for merit scholarships.',
    'Test-optional this cycle. With a 31, seriously consider not sending it — it sits below their range.',
    'Whole supplement is about 350 words. Smaller than it feels.',
    'Free tuition under $150K — both parents’ incomes combined.',
    'Arts supplement through SlideRoom, due Nov 15.']},
  {n:'UW–Madison', plan:'Early Action', due:'Nov 1', url:'https://admissions.wisc.edu/apply-as-a-freshman/', b:[
    'Supporting materials due Nov 10.',
    'Jazz ensembles open to any student, any major, by audition.',
    'Jazz Studies major exists if you want it.',
    'Demonstrated interest: not considered. A campus visit does not register.',
    'Bucky’s Tuition Promise caps at $65K AGI — does not apply.']},
  {n:'Fordham', plan:'Early Action', due:'Nov 1', url:'https://www.fordham.edu/undergraduate-admission/apply/dates-and-deadlines/', b:[
    '"Priority Performance" is theatre and dance only — not music.',
    'Fordham theatre is a separate track with its own prescreen. Decide now, not in November.',
    'Supplement optional, 300 words, 1 of 3.',
    'Expensive and not especially generous with aid.']},
  {n:'Minnesota', plan:'Early Action I', due:'Nov 1', url:'https://admissions.tc.umn.edu/', b:[
    'Nov 1 is also the scholarship priority deadline and gates competitive majors.',
    'Wisconsin reciprocity applies — about $38,226 total.',
    'Reciprocity needs its own separate application, opening around Feb 2027.',
    'Demonstrated interest: not considered.']},
  {n:'DePaul', plan:'Early Action', due:'Nov 15', url:'https://www.depaul.edu/admission/undergraduate-admission/deadlines', b:[
    'Decision by Dec 15.',
    'WARNING: the School of Music has its own Dec 1 deadline with no early action.',
    'Jazz Studies requires a prescreen from everyone, then a live audition — register by Jan 15.',
    'Music decisions not released until March–April.']},
  {n:'College of the Holy Cross', plan:'Early Decision II', due:'Jan 15', url:'https://www.holycross.edu/admissions-aid/how-to-apply', b:[
    'ED II is binding. Admitted means you go.',
    'Interviews highly recommended and actually used. Request in October, interview by Dec 5.',
    'Meets 100% of need. Full tuition grant at $100K or less.',
    'Brooks music scholarship is full tuition — music majors only.',
    'Jazz combo and private voice lessons open to non-majors.']},
  {n:'NYU', plan:'Regular Decision', due:'Jan 5', url:'https://www.nyu.edu/admissions/undergraduate-admissions.html', b:[
    'Most expensive here at ~$101,000, and historically does not meet full need.',
    'Steinhardt for jazz voice, Tisch for musical theatre — separate applications and reviews.',
    'Steinhardt jazz talent awards are automatic, but require applying to the major.',
    'Demonstrated interest: considered.',
    'Honest read: a reach with a bad payout structure. Do not over-invest.']},
  {n:'UW–Eau Claire', plan:'Regular', due:'Feb 1', url:'https://www.uwec.edu/admissions/', b:[
    'Cheapest on the list — $19,933 billed.',
    '"All Blugolds are welcome to audition" — jazz is open to every student.',
    'No jazz degree; jazz is co-curricular. You sing without majoring.',
    'Possibly the best value here for what you actually want.']},
  {n:'Winona State', plan:'Undecided', due:'TBD', url:'https://www.winona.edu/admissions/', b:[
    'Still an open decision — in or out?',
    'Wisconsin students get the resident rate through reciprocity.',
    'Costs unverified.']}
];

export const MONEY = [
  {n:'Notre Dame', sticker:'~$91,986', rule:'Under $150K = free tuition. Under $60K = tuition, fees, housing, food.', need:'100%, no loans'},
  {n:'College of the Holy Cross', sticker:'$91,740', rule:'$100K or less + reasonable assets = full tuition', need:'100%'},
  {n:'NYU', sticker:'$100,998', rule:'None', need:'No'},
  {n:'Fordham', sticker:'~$85,000', rule:'None', need:'Not confirmed'},
  {n:'Minnesota', sticker:'$38,226', rule:'Wisconsin reciprocity rate', need:'No'},
  {n:'UW–Madison', sticker:'~$30,644 (2025–26)', rule:"Bucky's Promise = $65K AGI. Does not apply.", need:'No'},
  {n:'UW–Eau Claire', sticker:'$19,933', rule:'WI Promise = $55K AGI. Does not apply.', need:'No'},
  {n:'DePaul', sticker:'UNVERIFIED', rule:'None found', need:'No'},
  {n:'Winona State', sticker:'~$20,146 (prior cycle)', rule:'Reciprocity', need:'No'}
];

export const MONEY_DATES = [
  {d:'Oct 1, 2026', w:'FAFSA and CSS Profile both open'},
  {d:'Nov 15, 2026', w:'Notre Dame aid priority — FAFSA + CSS + IDOC. Miss this and you lose money.'},
  {d:'Jan 15, 2027', w:'Notre Dame Regular Decision aid priority'},
  {d:'~Feb 2027', w:'MN–WI reciprocity application opens. Separate from admission. Easy to miss.'}
];

export const CONTACTS = [
  {w:'Notre Dame', c:'admissions@nd.edu · 574-631-7505', f:'Arts supplement'},
  {w:'UW–Madison Music', c:'admissions@music.wisc.edu', f:'Jazz voice prescreen date — this week'},
  {w:'Holy Cross', c:'admissions@holycross.edu · 508-793-2443', f:'Interview — ask in October'},
  {w:'Holy Cross aid', c:'financialaid@holycross.edu · 508-793-2265', f:'Net cost before December'},
  {w:'DePaul Music', c:'musicadmissions@depaul.edu · 773-325-7444', f:'Dec 1 music deadline'},
  {w:'NYU Tisch', c:'tisch.drama.ug@nyu.edu', f:'Artistic review'}
];

/* Essay slots. `key` matches the textarea id used for saving. */
export const PROMPTS = [
  {key:'faith', school:'Notre Dame', lim:100, req:'Required (pick 2 of 4)',
   text:'How does faith influence the decisions you make?'},
  {key:'nonneg', school:'Notre Dame', lim:150, req:'Required',
   text:"Everyone has different priorities when considering their higher education options and building their college or university list. Tell us about your 'non-negotiable' factor(s) when searching for your future college home."},
  {key:'sa2', school:'Notre Dame', lim:100, req:'Required (pick 2 of 4)',
   text:'Choose one — 2. What is distinctive about your personal experiences and development…?  3. …How do you foster service to others in your community?  4. What would you fight for?'},
  {key:'ps', school:'All nine (Common App)', lim:650, req:'Required',
   text:'Common App personal statement. Good enough to build on by Sept 30.'},
  {key:'ford', school:'Fordham', lim:300, req:'Optional — do it anyway',
   text:'Choose 1 of 3. VERIFY current text in the Common App.'},
  {key:'wisc', school:'UW–Madison', lim:650, req:'Required',
   text:'Why Madison. VERIFY current text in the Common App.'},
  {key:'umn', school:'Minnesota', lim:300, req:'Conflict — check Common App',
   text:"Minnesota's own checklist says essays are not required for admission. Other sources list two 150-word prompts."}
];
