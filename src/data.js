/* Single source of truth. The screen, the Excel export and the PDF all read from here. */

export const TASKS = [
  {id:'ca1', s:'Common App', t:"Set up the Common App and add your nine schools", d:'2026-09-13', p:1, m:'30 min',
   w:"The Common App is one website where you fill out your info once, and it goes to all nine schools. Right now it doesn't know which schools you want. Once it does, it starts telling you exactly what each one needs from you.",
   how:["Go to commonapp.org and sign in. (If you've never made an account, click Create Account — you're a First Year Student.)",
        "Look at the top of the screen. Check that it says <b>2026–2027</b> or <b>Fall 2027</b> somewhere. If it says 2025 or 2026, you're in the wrong year — that matters, tell your dad.",
        "Click the tab called <b>College Search</b>.",
        "Type a school name in the search box. Click the <b>+</b> or <b>Add</b> button next to it.",
        "Do that nine times, once per school: Notre Dame, UW–Madison, Fordham, University of Minnesota Twin Cities, DePaul, College of the Holy Cross, NYU, UW–Eau Claire, Winona State.",
        "Click <b>My Colleges</b> at the top. All nine should be listed down the left side. That's it, you're done."]},

  {id:'ca2', s:'Common App', t:"Find out what each school is asking you to write", d:'2026-09-13', p:1, m:'20 min',
   w:"Nobody actually knows yet how much writing there is. Right now it feels like a mountain. It's probably way smaller than you think — Notre Dame's whole thing is about 350 words, which is shorter than one page. This is how we find out for real.",
   how:["First, finish the task above. This won't work until the nine schools are added.",
        "In the Common App, click <b>My Colleges</b> at the top.",
        "Click the first school's name in the left-hand list.",
        "Underneath that school you'll see some links: Questions, Recommenders, <b>Writing</b>. Click <b>Writing</b>.",
        "This page shows the questions that school wants you to answer, and how many words you're allowed. Some schools have none. Some have three. Both are normal.",
        "Open a note on your phone or a Google Doc. For each question, copy the question word-for-word, and write down the word number next to it. Like: <i>“How does faith influence the decisions you make?” — 100 words</i>",
        "Go back to My Colleges and do the same for the next school. It gets fast after the first two.",
        "Send the note to your dad when you're done. Then this app can show you what to actually do with each one."]},

  {id:'nd1', s:'Notre Dame', t:'Write the Notre Dame faith answer (about 75 words)', d:'2026-09-16', p:1, m:'75 words',
   w:"This is the smallest real thing on your whole list, and it's for the school you want most. You've already answered this question out loud, in front of people, from a pulpit. Seventy-five words is about four sentences. Go to the Essays tab and it walks you through it.",
   how:["Click the <b>Essays</b> tab at the top of this page.",
        "Click the first one, <b>The faith answer</b>.",
        "It asks you six small questions. Answer them fast and badly — they're just notes, nobody reads them.",
        "Then it shows you your own answers and tells you which one is the essay.",
        "Then you write about four sentences. That's the whole thing."]},

  {id:'rec1', s:'Common App', t:'Ask your counselor and two teachers to write you a recommendation letter', d:'2026-09-18', p:1, m:'15 min',
   w:"A recommendation letter is a note a teacher writes about you that goes to the colleges. You don't see it and you don't write it — they do. But they need weeks, and they're writing them for a lot of seniors right now. Asking late is the single most common way an application misses its deadline.",
   how:["Ask them in person first. Just: <i>“Would you be willing to write me a college recommendation letter?”</i> Two teachers who actually know you beat two teachers with impressive titles.",
        "Then in the Common App, click <b>My Colleges</b>, pick any school, and click <b>Recommenders and FERPA</b>.",
        "There's a FERPA question first. It asks if you waive your right to read the letters. <b>Say yes, you waive it.</b> Colleges trust letters more when the student can't read them. This is normal and everyone does it.",
        "Add your school counselor's email, then each teacher's email. The Common App emails them a link.",
        "Check back in a week. If someone hasn't started, remind them nicely."]},

  {id:'mus1', s:'UW–Madison', t:'Send one short email to the UW–Madison music school', d:'2026-09-18', p:1, m:'10 min',
   w:"Last year, singers who wanted to audition there had to send a recording by October 31 — which is BEFORE the application is even due. If that's true again this year, it changes your whole October. Nobody knows yet. One email finds out.",
   how:["Email <b>admissions@music.wisc.edu</b>",
        "Subject line: <i>Prescreen timing — prospective first-year, jazz voice</i>",
        "Body: <i>Hi — I'm a senior applying for fall 2027 and I'm interested in jazz voice. Two questions: when is the recording deadline for next fall's auditions, and can students who aren't music majors audition for scholarships or ensembles? Thank you — [your name], [your school], [your city]</i>",
        "That's it. Short emails get answered. Long ones don't.",
        "“Prescreen” just means a recording you send in first, so they can decide whether to invite you to a real audition."]},

  {id:'act1', s:'Common App', t:'Fill in the Activities list (10 boxes, short)', d:'2026-09-20', p:2, m:'90 min',
   w:"This is where you list what you actually do — NHS, softball, musicals, preaching team. Most people rush it. It's one of the few places colleges see who you are outside of grades, and each box only fits about one sentence, so every word counts.",
   how:["In the Common App, click the <b>Common App</b> tab, then <b>Activities</b>.",
        "You get 10 slots. You do NOT have to fill all 10. Real ones beat filler.",
        "Each description box is 150 characters — that's about one sentence. Brutally short on purpose.",
        "Put the most important thing first. NHS president, the musicals, preaching team, softball, the Madison summer program.",
        "Say what you DID, with a number if you can. “Led 40-member chapter” beats “was involved in leadership.”",
        "Get your dad for this one. Squeezing real things into one sentence is genuinely hard and goes faster with someone else in the room."]},

  {id:'hon1', s:'Common App', t:'Fill in the Honors list (awards you won)', d:'2026-09-20', p:2, m:'30 min',
   w:"You have two that most applicants don't have anywhere: your Jerry Award nomination, and placing third in the world at the Great Shake. Those are outside people saying you're good — which counts for more than anything you say about yourself.",
   how:["In the Common App: <b>Common App</b> tab → <b>Education</b> → scroll to <b>Honors</b>.",
        "Answer yes when it asks if you have any honors to report.",
        "Add the <b>Jerry Award nomination</b> — Outstanding Supporting Performer. Say what year and that it's a regional award.",
        "Add <b>third place, The Great Shake</b> — and say it's international, because that's the part that's rare.",
        "Add National Honor Society if it isn't already in Activities."]},

  {id:'tri1', s:'Essays', t:'Go through your four old essay drafts and sort them', d:'2026-09-20', p:2, m:'60 min',
   w:"You already wrote four things. One of them might be most of an essay already. Finding that out saves you about two weeks — and if they're all dead, it's better to know now than in October.",
   how:["Open all four. Read each one once, fast.",
        "Write one word at the top of each: <b>ALIVE</b>, <b>DEAD</b>, or <b>WRONG SHAPE</b>.",
        "<b>ALIVE</b> = there's something real in here, even if the writing is bad. Bad writing is fixable.",
        "<b>DEAD</b> = the topic itself isn't going anywhere. Let it go.",
        "<b>WRONG SHAPE</b> = good material, but you told the wrong story around it. Worth rescuing.",
        "Be honest, not loyal. You're allowed to kill something you spent hours on."]},

  {id:'ps1', s:'Essays', t:'Personal statement — get it good enough to build on', d:'2026-09-30', p:1, m:'650 words',
   w:"This is the one essay that goes to all nine schools, so it's the most valuable thing you'll write. It does NOT have to be finished by this date. It has to be good enough that you can start the smaller ones. Everything else on this calendar waits on it.",
   how:["Click the <b>Essays</b> tab, then <b>The Common App personal statement</b>.",
        "It asks you eight questions. Answer them badly and fast.",
        "Then it shows you which of your answers is actually the essay.",
        "Don't start here if you haven't done the Notre Dame faith answer. Do the small one first so you're moving."]},

  {id:'nd2', s:'Notre Dame', t:'Write the Notre Dame “non-negotiables” essay (150 words)', d:'2026-10-02', p:2, m:'150 words',
   w:"They're asking what a college absolutely must have for you. 150 words is about one short paragraph. The Essays tab walks you through it.", how:[]},

  {id:'nd3', s:'Notre Dame', t:'Write your second Notre Dame short answer (about 80 words)', d:'2026-10-02', p:2, m:'100 words',
   w:"Notre Dame gives you four questions and you pick two. The faith one is your first. This is picking your second. One option is just “What would you fight for?” — almost nobody answers that one well, which is exactly why it's a good one for you.", how:[]},

  {id:'hc1', s:'Holy Cross', t:'Email Holy Cross and ask for an interview', d:'2026-10-02', p:2, m:'10 min',
   w:"An interview is a 30-minute conversation with someone from the college, usually on video. It's not a test. Holy Cross actually uses them when deciding, and the slots fill up. Asking takes ten minutes now; the interview itself isn't until December.",
   how:["Email <b>admissions@holycross.edu</b>",
        "Subject: <i>Interview request — first-year applicant</i>",
        "Body: <i>Hi — I'm applying as a first-year student for fall 2027 and I'd like to request an interview. I'm available [name two or three real times you're free]. Thank you — [your name], [your school], [your city]</i>",
        "That's the whole task. You're just getting on the list."]},

  {id:'fa1', s:'Money', t:'PARENTS: file the FAFSA and CSS Profile', d:'2026-10-05', p:1, m:'parents',
   w:"This is not your job. It's two financial forms your parents fill out that decide how much each college charges you. Notre Dame needs BOTH parents to file — that's the thing that decides whether their free-tuition program applies. Leave this one to them.",
   how:["Nothing for you to do here. It's on the list so you can see it's handled.",
        "If you're curious: FAFSA is the government form, CSS Profile is a separate one that private colleges use. Both open October 1."]},

  {id:'ck1', s:'Notre Dame', t:'Check in: is the Notre Dame application actually good yet?', d:'2026-10-15', p:1, m:'decide',
   w:"Applying early to Notre Dame means they read your application in November instead of March. You only get read once. If your writing isn't strong yet on this date, it's smarter to slow down and apply in January instead. This is a real decision point, not a formality.",
   how:["Read everything you've written for Notre Dame out loud.",
        "Ask your dad to read it too.",
        "If it's good: keep going, submit October 27.",
        "If it's not: that's fine. You switch to the January deadline and get six more weeks. Nobody loses anything."]},

  {id:'wi1', s:'UW–Madison', t:'Write the “Why Madison” essay', d:'2026-10-16', p:2, m:'',
   w:"You spent a whole summer on that campus for singing. Almost nobody applying there can say that. Use the actual thing you remember — a room, a walk, a person — not stuff off their website.", how:[]},

  {id:'mn1', s:'Minnesota', t:'Write the Minnesota essays — if they even want any', d:'2026-10-16', p:2, m:'300 words',
   w:"Minnesota's own website says essays aren't required, but other places say there are two short ones. When you do the Common App task above, you'll find out which is true. Might be zero work.", how:[]},

  {id:'fd1', s:'Fordham', t:'Write the Fordham essay — it says optional, do it anyway', d:'2026-10-18', p:2, m:'300 words',
   w:"“Optional” means optional for THEM, not for you. When a college gives you an extra place to talk and you skip it, that's a choice they notice. It's 300 words — about a page and a half of texting.", how:[]},

  {id:'sub1', s:'Minnesota', t:'SUBMIT Minnesota', d:'2026-10-20', p:1, m:'send it',
   w:"First one out the door. Easiest one. Take the win — the rest get easier once one is actually gone.",
   how:["In the Common App, go to the school, click <b>Review and Submit</b>.",
        "Read it over once. Pay the fee (or use a fee waiver if your counselor gave you one).",
        "Hit submit. Then go do something else — you're done with that one forever."]},

  {id:'sub2', s:'UW–Madison', t:'SUBMIT UW–Madison', d:'2026-10-22', p:1, m:'send it', w:"Second one gone.", how:[]},
  {id:'sub3', s:'Fordham', t:'SUBMIT Fordham', d:'2026-10-27', p:1, m:'send it', w:"", how:[]},
  {id:'sub4', s:'Notre Dame', t:'SUBMIT Notre Dame', d:'2026-10-27', p:1, m:'send it',
   w:"Five days before the deadline, on purpose. Everybody submits on the last day, the website gets slow, and that's how the horror stories happen. Not you.", how:[]}
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


/* Parent-owned work. Deliberately kept off her board - she should not be
   carrying the money forms or the verification calls. */
export const PARENT = [
  {due:'Right now', t:'Confirm which FAFSA year your ex actually filed',
   w:"The 2027-28 FAFSA does not open until around October 1, 2026. If a form was already filed, it was almost certainly for a prior year or another child. Believing this is done when it is not is one of the most expensive misunderstandings in the whole process."},
  {due:'Right now', t:"Get Dominican's school profile from her counselor",
   w:"It lists how many AP and honors courses the school offers, and how the counselor rates her course load. Colleges judge rigor against what was available to her, not against a national average. It changes the honest read on Notre Dame."},
  {due:'Oct 1', t:'FAFSA opens - file it',
   w:"Government form. Determines federal aid. The parent who provides the majority of support files it, which here is her mother."},
  {due:'Oct 1', t:'CSS Profile opens - BOTH parents file',
   w:"Separate from FAFSA, used by private colleges. Notre Dame requires the Noncustodial Parent Profile, meaning your income is counted alongside her mother's. This single fact decides whether Notre Dame's under-$150K free-tuition program applies to you. Nobody can answer it until both are filed."},
  {due:'October', t:'Application fees, or fee waivers',
   w:"Roughly $50-$85 per school, so $450-$750 across nine. Her counselor can issue fee waivers if you qualify - worth asking before you pay nine times."},
  {due:'Nov 15', t:'Notre Dame financial aid priority deadline',
   w:"FAFSA + CSS Profile + IDOC documents, all in by this date. This is a money deadline, not an admissions one, and missing it costs real dollars even if she gets in."},
  {due:'Nov 15', t:'Notre Dame arts supplement, if she submits one',
   w:"Goes through SlideRoom inside the Common App. A recording of her singing. Optional, but for a performer applying to a reach school it is the cheapest way to be memorable."},
  {due:'Dec 5', t:'Holy Cross interview happens',
   w:"She requests it in October; the interview itself lands here. Holy Cross actually weighs interviews in the decision."},
  {due:'Dec 20', t:'Run the Holy Cross net price calculator - HARD DEPENDENCY',
   w:"Early Decision II binds her in January, but the aid package does not arrive until February. Without this number she would be committing blind. Do not let the December decision happen without it."},
  {due:'Mid-Dec', t:'Notre Dame answers - then the December decision',
   w:"Admitted, denied, or deferred. Each one points somewhere different, and the deferred branch is genuinely hard. It is written out in docs/december-decision-tree.md so nobody has to invent it over winter break."},
  {due:'Jan 15', t:'Holy Cross Early Decision II - binding',
   w:"If she applies ED II and gets in, she goes, and every other application is withdrawn. Only pull this trigger if the December 20 number worked."},
  {due:'~Feb 2027', t:'Minnesota-Wisconsin tuition reciprocity application',
   w:"A completely separate application from admission, filed through the Universities of Wisconsin portal. It is what drops Minnesota from out-of-state pricing to about $38,000 total. Easy to miss because nothing in the college application reminds you."},
  {due:'April', t:'Compare aid offers side by side, and appeal',
   w:"Financial aid offers are negotiable more often than families realize. A better offer from a peer school is legitimate leverage."},
  {due:'May 1', t:'Deposit - not before',
   w:"She has until May 1 everywhere. There is no advantage to deciding in March."}
];

/* Everything below came from research that could not be confirmed against a
   primary source. Confirm before anyone acts on it. */
export const VERIFY = [
  {t:'UW-Madison jazz voice prescreen deadline for 2026-27', c:'admissions@music.wisc.edu',
   w:"Last cycle it was October 31 - BEFORE the application deadline. If that repeats, October changes shape. This is the most time-critical unknown."},
  {t:'Holy Cross Regular Decision deadline', c:'admissions@holycross.edu / 508-793-2443',
   w:"Sources disagree: Jan 15 or Feb 15. Her own sheet said Jan 15, which matches the Early Decision II date, so she may have written down the wrong one."},
  {t:'Fordham Regular Decision deadline (listed as Jan 3)', c:'fordham.edu',
   w:"Secondary source only."},
  {t:'DePaul cost of attendance', c:'depaul.edu financial aid',
   w:"Never confirmed for 2026-27."},
  {t:'Winona State costs - and whether it is on the list at all', c:'winona.edu',
   w:"Still an open roster decision, and the costs are from a prior year."},
  {t:'Notre Dame "Glimpse" video - does it exist this cycle?', c:'admissions@nd.edu / 574-631-7505',
   w:"I flagged this early as an opportunity. Deeper research could not confirm it as a general option - Notre Dame lists InitialView only for English proficiency. Treat my earlier enthusiasm as unconfirmed."},
  {t:'Does merit money stack on top of need-based aid, or replace it?', c:'each financial aid office',
   w:"At schools that meet full need, a scholarship often reduces their grant by the same amount, netting zero. Decides whether chasing awards is worth her time."},
  {t:'Which schools require the Noncustodial Parent CSS Profile', c:'each financial aid office',
   w:"Confirmed for Notre Dame and NYU. Unconfirmed for Fordham, Holy Cross, DePaul. Public universities generally do not require it, which is an advantage in your situation."}
];


/* Plain-language definitions. Written for someone who has never applied
   to a college and should not have to pretend otherwise. */
export const GLOSSARY = [
 {t:'Common App', d:"One website where you fill out your information once and it gets sent to all nine schools. Short for Common Application. Almost every college uses it."},
 {t:'Prompt', d:"Just a fancy word for the question a college asks you to answer in writing. When someone says \'the Notre Dame prompt,\' they mean \'the question Notre Dame asks.\'"},
 {t:'Supplement, or supplemental essay', d:"An extra piece of writing that only one school wants. Separate from the big personal statement that goes to everybody. Usually short."},
 {t:'Personal statement', d:"The one main essay, up to 650 words, that goes to all nine schools. The biggest single piece of writing you do."},
 {t:'Word limit', d:"The most words you are allowed. Going over is not allowed - the box literally stops you. For scale: 150 words is one short paragraph, 650 words is about a page and a half."},
 {t:'Recommender', d:"A teacher or counselor who writes a letter about you that goes to the colleges. You never see it. You ask them; they write it."},
 {t:'FERPA waiver', d:"A checkbox asking if you give up your right to read your recommendation letters. Say yes. Colleges trust the letters more when students cannot read them, and everyone says yes."},
 {t:'Transcript', d:"The official list of every class you took and the grade you got. Your school sends it; you do not."},
 {t:'Early Action (EA)', d:"You apply by November 1 instead of January, and hear back in December instead of March. NOT binding - you can still say no and go somewhere else."},
 {t:'Restrictive Early Action (REA)', d:"What Notre Dame uses. Same as Early Action, except while you are applying early to them you cannot apply Early DECISION anywhere else. You can still apply Early Action elsewhere."},
 {t:'Early Decision (ED)', d:"Binding. If they say yes, you have promised to go, and you withdraw every other application. Better odds, but you are locked in. Never do this before you know what it costs."},
 {t:'Early Decision II (ED II)', d:"The same binding promise, but with a January deadline instead of November. Useful because you already know your other answers by then."},
 {t:'Regular Decision (RD)', d:"The normal deadline, usually January. You hear back in March."},
 {t:'Deferred', d:"Not a no. They did not decide yet, so they moved you into the regular pile and will look again in the spring."},
 {t:'Waitlisted', d:"Also not a no. You are in line in case people they admitted choose other schools."},
 {t:'Test-optional', d:"You decide whether to send your ACT score. If your score is below what they usually admit, sending it can actually hurt you, so sometimes the right move is not to send it."},
 {t:'Superscore', d:"When a college takes your best section scores from different ACT test dates and combines them into one better score."},
 {t:'Demonstrated interest', d:"Whether a college tracks how much you have shown you like them - visits, emails, opening their emails. Some schools count it. Some, like Madison and Minnesota, do not count it at all, which means visiting is not worth a school day."},
 {t:'Arts supplement', d:"An optional recording or portfolio you send showing your singing or acting. For a performer it is often the most memorable part of the application."},
 {t:'Prescreen', d:"A recording you send in BEFORE a real audition, so the music school can decide whether to invite you to audition live. The deadline for these is sometimes earlier than the application itself."},
 {t:'FAFSA', d:"The government financial aid form your parents fill out. Opens October 1. Not your job."},
 {t:'CSS Profile', d:"A second, longer financial form that private colleges use. Also your parents. Notre Dame needs BOTH your parents to file one separately."},
 {t:'Need-based aid', d:"Money a college gives you because of what your family can afford. Based on the forms, not on grades."},
 {t:'Merit scholarship', d:"Money a college gives you for being good at something - grades, music, leadership. Not based on income."},
 {t:'Meets full need', d:"A college promising to cover the whole gap between what your family can pay and what it costs. This is why a $90,000 school can end up cheaper than a $30,000 one."},
 {t:'Sticker price vs net price', d:"Sticker is the scary number on the website. Net price is what you would actually pay after aid. They are often wildly different. Never cross a school off because of the sticker."},
 {t:'Priority deadline', d:"Not the real deadline - but applying after it means less scholarship money is left. Missing one costs money even if you still get in."},
 {t:'Rolling admission', d:"The college decides as applications come in, instead of all at once. Applying earlier is genuinely better."},
 {t:'Mid-year report', d:"Your first-semester senior grades, sent by your school in January. Senior year grades still count."},
 {t:'Deposit', d:"The payment that tells one college you are coming. Due May 1. Once you pay it, you are done choosing."}
];
