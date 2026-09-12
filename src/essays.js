/* The coaching content. Every essay is a four-step walk:
   GATHER (she answers small concrete questions) -> CHOOSE (which material is
   strongest, and why) -> DRAFT (structure, with her own material pinned beside it)
   -> SHARPEN (revision questions aimed at her actual draft).
   No step writes anything for her. Every step gives her something to react to. */

export const ESSAYS = [
{
  key:'faith', school:'Notre Dame', limit:100, due:'2026-09-16',
  title:'The faith answer',
  prompt:'How does faith influence the decisions you make?',
  meta:'Notre Dame · 50–100 words · pick 2 of 4 short answers · this is one of them',
  why:"Start here. It's the smallest real thing on your whole list, it's for the school you most want, and you've already answered it out loud in front of people. 75 words. You can do this today.",
  asking:"Not what you believe. What your belief makes you DO. They are asking for evidence, and most applicants hand them a definition instead.",
  failure:"Describing faith in general — what it is, why it matters, how it guides people. They know all that. Ninety percent of the answers to this prompt could have been written by someone who has never met you.",
  gather:[
    {q:"Name one decision you made in the last year where faith actually changed what you did.",
     h:"Not a decision you'd have made anyway. One where it tipped you. Just name the decision — a sentence."},
    {q:"What did you actually do? Write it like a stage direction.",
     h:"Only the action. 'I stayed after and helped clean up.' 'I told her I disagreed.' No feelings yet."},
    {q:"What would you have done if faith weren't part of your life?",
     h:"Be honest. If the answer is 'the same thing,' go back to question 1 and pick a different decision."},
    {q:"Who else was in the room, and what did it cost you?",
     h:"Time, a friendship, being the only one, looking uncool. Cost is what makes it evidence."},
    {q:"When you're preparing to preach, what are you actually trying to do to the people listening?",
     h:"You know this one. Answer it the way you'd say it to a friend, not the way you'd write it."},
    {q:"Where have you doubted — and what did you do with the doubt?",
     h:"Doubt is not disqualifying at Notre Dame. It's interesting. Most applicants hide it, which is why it stands out."}
  ],
  choose:{
    lead:"Look at what you just wrote.",
    body:["Answers 1–4 are a <strong>story</strong>. Answers 5–6 are <strong>ideas about faith</strong>.",
      "Notre Dame receives thousands of essays full of ideas about faith. They receive very few with one specific afternoon in them.",
      "<strong>Take the story.</strong> If 5 or 6 gave you one sharp sentence, it can be your last line — but it cannot be the essay."]
  },
  shape:[
    "Open <em>inside</em> the decision. First sentence, no wind-up, no 'Throughout my life.'",
    "Say what you did, concretely, in the words from question 2.",
    "One sentence — one — on where faith was in that room.",
    "Stop. Do not explain the lesson. They can see it, and explaining it is what makes an answer sound seventeen.",
    "Aim for 75–90 words. Under the limit is fine. Over is not."
  ],
  sharpen:[
    {q:"Read it out loud. Mark the exact place you stop sounding like yourself.",
     h:"That sentence is almost always the one you wrote to sound impressive. Cut it or say it the way you just said it out loud."},
    {q:"Underline every sentence that could appear in anyone else's answer. How many?",
     h:"If it's more than one, you have a generic essay with a specific moment buried in it."},
    {q:"Is there a specific moment in your first fifteen words? Yes or no.",
     h:"If no, find the moment and move it to the front. Delete whatever was there."},
    {q:"Did you write a sentence explaining what it taught you? Quote it here, then delete it from the draft.",
     h:"Trust them. This single deletion improves most short answers."},
    {q:"Count the words describing faith in general vs. words describing what you did.",
     h:"The second number should be bigger. If it isn't, you wrote the definition after all."}
  ]
},
{
  key:'nonneg', school:'Notre Dame', limit:150, due:'2026-10-02',
  title:'The non-negotiables essay',
  prompt:"Everyone has different priorities when considering their higher education options and building their college or university list. Tell us about your 'non-negotiable' factor(s) when searching for your future college home.",
  meta:'Notre Dame · 150 words max · required',
  why:"Do this after the faith answer. It's three times longer but you'll already be moving.",
  asking:"Whether you know yourself well enough to have real criteria — and whether those criteria happen to describe them. The fit should be obvious without you ever pointing at it.",
  failure:"Listing what's great about Notre Dame. They know what's great about Notre Dame. An essay that flatters them tells them nothing about you, and they read it as a student who hasn't thought about what they need.",
  gather:[
    {q:"List three things a college must have for you. Just list them. Don't explain yet.",
     h:"Fast. First three. You can throw one out later."},
    {q:"For each one — what happened that made you know that?",
     h:"A specific experience, not a belief. 'The summer program in Madison' beats 'I value music.'"},
    {q:"Which of the three would you actually turn down an acceptance over?",
     h:"Only one. That's your non-negotiable. The other two are preferences, and preferences are not what they asked for."},
    {q:"Where have you already had the thing you're describing, even briefly?",
     h:"A rehearsal room. A summer program. A class. Your school. That's the proof the criterion is real."},
    {q:"What's something most people want out of college that you genuinely don't care about?",
     h:"Big sports, a city, a famous name, a big school. This one is often the strongest opening line in the whole essay — the thing you don't want reveals more than the thing you do."}
  ],
  choose:{
    lead:"One non-negotiable, done well, beats three listed.",
    body:["Take your answer to question 3. That's the essay.",
      "Your answer to question 5 is very likely your opening line — it's specific, a little contrarian, and it signals you've actually thought rather than performed.",
      "Question 4 is your evidence. Without it this is an opinion; with it, it's a criterion."]
  },
  shape:[
    "Name the non-negotiable in the first sentence. Or open with what you <em>don't</em> need, then name it.",
    "Give the experience that taught you — briefly, concretely, one moment.",
    "One clause on what it would look like where they are. One clause. Not a paragraph, and no flattery.",
    "150 words moves fast. You have room for one idea and one piece of evidence."
  ],
  sharpen:[
    {q:"Paste your draft into your head with a different school's name. Does it still work?",
     h:"If yes, you wrote a generic essay. The fix is more of YOUR experience, not more about them."},
    {q:"Find every sentence that compliments Notre Dame. Quote them here.",
     h:"Now cut them from the draft. Watch how much room you get back."},
    {q:"Is your non-negotiable something a normal 17-year-old would say?",
     h:"'Good academics' and 'a strong community' are everyone's. What is yours actually about?"},
    {q:"Where is your specific evidence? Quote the sentence.",
     h:"If you can't find one, the essay is currently an opinion piece."}
  ]
},
{
  key:'sa2', school:'Notre Dame', limit:100, due:'2026-10-02',
  title:'The second short answer',
  prompt:'Pick ONE — (2) What is distinctive about your personal experiences and development (eg, family support, culture, disability, personal background, community)? Why are these experiences important to you and how will you enrich the Notre Dame community?  ·  (3) Notre Dame\'s undergraduate experience is characterized by a collective sense of care for every person. How do you foster service to others in your community?  ·  (4) What would you fight for?',
  meta:'Notre Dame · 50–100 words · you answer two of four; the faith one is your first',
  why:"Whichever you pick, it must do something your faith answer doesn't. Two answers about service wastes one of them.",
  asking:"Range. They already have one answer from you. This one should show a different side — a different setting, a different register, a different part of your life.",
  failure:"Picking #3 because it's safest. Everyone picks #3. It's the most crowded question on the page, and 'I volunteer and it taught me empathy' is the single most common paragraph in American college admissions.",
  gather:[
    {q:"#4 first — what makes you angry that doesn't make most people around you angry?",
     h:"Small and real beats large and noble. 'When people talk through someone's solo' is a better start than 'injustice.'"},
    {q:"What have you already argued for out loud, in front of people who disagreed?",
     h:"You have a preaching team and an NHS presidency. Something has come up."},
    {q:"What would you defend even knowing you'd lose?",
     h:"That's what 'fight for' actually means. Conviction without stakes is just an opinion."},
    {q:"Now #2 — name something about your background that shaped you and that you'd have to explain to a stranger.",
     h:"Only answer this if something real comes up in under a minute. If you're straining, #2 isn't your question."},
    {q:"And #3 — where do you serve when nobody's tracking hours?",
     h:"Not the résumé version. The part nobody gives you credit for."}
  ],
  choose:{
    lead:"Take the one you've already ACTED on.",
    body:["<strong>#4 is the sleeper.</strong> Almost nobody answers it well, and it rewards conviction plus evidence — which is exactly what a person with a preaching background has and most applicants don't.",
      "<strong>#3 is safe and crowded.</strong> Take it only if your answer to question 5 is something genuinely unusual.",
      "<strong>#2 only if it wrote itself.</strong> If you strained, it isn't yours.",
      "And check it against your faith answer: different setting, different part of your life. Range is the point."]
  },
  shape:[
    "Name the thing in the first six words. In 80 words you cannot afford a run-up.",
    "One concrete instance where you acted on it — not a hypothetical.",
    "Stop. Seriously. The urge to add a closing thought is what ruins short answers."
  ],
  sharpen:[
    {q:"Circle your abstractions — justice, kindness, equality, community. Quote them here.",
     h:"Those are everyone's words. Replace each with the specific thing you actually mean."},
    {q:"Does this answer overlap with your faith answer? Where?",
     h:"If both are about service, change one. They're reading them together."},
    {q:"Is there one sentence only you could have written? Quote it.",
     h:"If there isn't one, that's the whole problem — and the fix is a smaller, more specific detail."}
  ]
},
{
  key:'ps', school:'All nine schools', limit:650, due:'2026-09-30',
  title:'The Common App personal statement',
  prompt:'Your personal statement goes to every school on your list. 650 words.',
  meta:'All nine schools · 650 words · good enough to build on by SEPT 30',
  why:"The most valuable thing you'll write, and the hardest — which is exactly why it's not first. Do the Notre Dame short answers first and come at this with momentum.",
  asking:"How you think. Not what you've achieved — they have your transcript and activities list for that. This essay is the only place they hear your actual mind working.",
  failure:"The achievement essay ('I worked hard and succeeded'), the lesson essay ('and that's when I learned'), and the résumé-in-prose. All three make a reader stop paying attention by paragraph two.",
  gather:[
    {q:"You already have four rough drafts. For each, write one line: ALIVE, DEAD, or WRONG SHAPE.",
     h:"ALIVE = something real in here even if the writing is bad. DEAD = topic isn't going anywhere. WRONG SHAPE = good material, wrong story around it. One alive draft saves you two weeks. Be honest, not loyal."},
    {q:"What were you wrong about, and what changed your mind?",
     h:"Changing your mind on the page is the single most reliable thing an essay can do."},
    {q:"When have you been the only one who noticed something?",
     h:"Noticing is a kind of intelligence that transcripts don't record."},
    {q:"What do you do when nobody assigns it?",
     h:"The honest answer, including if it's small or strange."},
    {q:"Describe a moment on stage, or preaching, where something real happened that wasn't in the script.",
     h:"You have more of these than most applicants will ever have. Pick the one you still think about."},
    {q:"Where do the pieces of you not fit together?",
     h:"Neuroscience and jazz voice. Softball and preaching. The tension is usually the essay — not the resolution of it, the tension itself."},
    {q:"What's something you're good at that you never chose?",
     h:""},
    {q:"What would your closest friend say you're like that you'd never say about yourself?",
     h:"Go ask them. Seriously — text them right now and paste the answer."}
  ],
  choose:{
    lead:"Which answer did you write the most for, without trying?",
    body:["That's usually the essay. Not the most impressive answer — the one that came out of you.",
      "Check it against three things: is there a <strong>specific moment</strong> you can see? Is there something you <strong>actually thought</strong>, not just felt? Could <strong>only you</strong> have written it?",
      "If your material passes all three, you have an essay. If it only passes the first, you have an anecdote — keep digging.",
      "And if one of your four old drafts is ALIVE and covers this material, start from that draft. Don't start over out of pride."]
  },
  shape:[
    "<strong>Open in a scene.</strong> A specific moment, in progress. No context paragraph first — context can come second.",
    "<strong>Then think on the page.</strong> This is the part most applicants skip and the part admissions readers are actually reading for.",
    "<strong>Show the turn.</strong> What you understood, or stopped understanding, or now hold differently.",
    "<strong>Land small.</strong> Return to something concrete. Do not end on a moral.",
    "650 is a maximum, not a target. A tight 550 beats a padded 640."
  ],
  sharpen:[
    {q:"Reverse-outline it. One line per paragraph saying what that paragraph DOES — not what it says.",
     h:"'Sets the scene.' 'Complicates it.' 'Changes my mind.' If two paragraphs do the same job, cut one."},
    {q:"Read only your first 50 words. Would you keep reading if it weren't yours?",
     h:"Be brutal. The first 50 words decide whether the rest gets read properly."},
    {q:"How many sentences describe what you THOUGHT, versus what happened?",
     h:"If thinking is under a third, it's a story, not an essay. They want the mind."},
    {q:"Find your last sentence. Does it announce a lesson?",
     h:"If it does, delete it and see whether the one before it is a better ending. It usually is."},
    {q:"Could another strong student at your school have written this essay?",
     h:"If yes, name the one detail that's unmistakably yours and build more of the essay around it."},
    {q:"Give it to one person who knows you and ask: does this sound like me?",
     h:"That's the only outside opinion you need. Not 'is it good.' Does it sound like you."}
  ]
},
{
  key:'wisc', school:'UW–Madison', limit:650, due:'2026-10-16',
  title:'Why Madison',
  prompt:'Tell us why you would like to attend the University of Wisconsin–Madison.',
  meta:'UW–Madison · verify exact wording and limit in the Common App',
  why:"You have an advantage almost no other applicant has here, and it's easy to waste.",
  asking:"Whether you know what you'd actually do there. Specific and checkable beats enthusiastic every time.",
  failure:"Recycling your Notre Dame non-negotiables essay with the name swapped. Readers catch that instantly. Also: praising the campus, the Badgers, or the 'vibrant community.'",
  gather:[
    {q:"You spent a summer there for vocal performance. What do you know about that campus that you could only know by being there?",
     h:"A room. A walk. A person. Something small and true. This is the whole advantage."},
    {q:"Their jazz ensembles are open to any student, any major, by audition. What would you actually do with that?",
     h:"Name the thing. This is checkable and specific, which is what this essay rewards."},
    {q:"What would you study there, and what's the one class or question you'd chase?",
     h:"Neuroscience. Get one level more specific than the major name."},
    {q:"What did that summer change about how you think about singing?",
     h:""}
  ],
  choose:{lead:"Lead with the summer.",
    body:["Almost every applicant writes about a campus they toured for three hours. You lived there.",
      "Pair it with the jazz-ensemble fact — a real, checkable, non-major opportunity you intend to use.",
      "That combination is specific, verifiable, and about you. That's the whole assignment."]},
  shape:[
    "Open with the summer — a moment, not a summary.",
    "What it showed you about how you want to work.",
    "What you'd do there now, naming the specific thing.",
    "No flattery. Not one sentence of it."
  ],
  sharpen:[
    {q:"Could this paragraph go to Minnesota with the name changed?",
     h:"If yes, it's not done. Add the thing only you saw."},
    {q:"How many named, checkable specifics are in it? List them.",
     h:"Two or three real ones beats a page of enthusiasm."}
  ]
},
{
  key:'ford', school:'Fordham', limit:300, due:'2026-10-18',
  title:'Fordham supplement',
  prompt:'Optional — choose 1 of 3. Option C: "At Fordham, we expect students to care for and engage with their communities and be active citizens for positive change. Please share an experience you had that caused you to develop a new perspective, change your point of view, and/or empower you to take an action or be courageous…"',
  meta:'Fordham · 300 words · marked optional · VERIFY current text in the Common App',
  why:"It says optional. Optional means optional for THEM. Do it.",
  asking:"The same Jesuit question Notre Dame and Holy Cross ask in different words — what you do for other people and why.",
  failure:"Leaving it blank because it says optional.",
  gather:[
    {q:"Which material from your Notre Dame answers could carry a longer version?",
     h:"This is the reuse map working. Four of your schools are Catholic and read for the same thing — but the story gets retold, never pasted."},
    {q:"What changed your mind about something involving other people?",
     h:"Option C rewards a real change, not a confirmation of what you already believed."},
    {q:"What did you do differently afterward?",
     h:"'Empower you to take an action' — they want the action, not the realization."}
  ],
  choose:{lead:"Use the core, rewrite the telling.",
    body:["Your service-and-faith material works here. But 300 words is double Notre Dame's space, so the version they get is fuller, not longer-winded.",
      "If your Notre Dame answer was the decision, this one can be what came after it."]},
  shape:["The experience, concretely.","What actually shifted.","What you did next — this is the part option C is really asking for."],
  sharpen:[
    {q:"Is this a copy of a Notre Dame answer? Where does it differ?",
     h:"Same material is fine. Same sentences are not."},
    {q:"Did you include the action, or stop at the realization?",
     h:"Stopping at the realization is the most common way this prompt gets half-answered."}
  ]
}
];
