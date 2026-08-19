/* ------------------------------------------------------------------
   Week 7 — From Object to Concept
   Does art still need to exist?

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan. Her own slides are already unusually plain this
   week — much of her phrasing is kept.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- Beuys --- */
  expandedart: {
    en: 'expanded concept of art', zh: '擴展的藝術概念',
    def: 'Beuys’s theory (Erweiterter Kunstbegriff): art’s materials have no limit. Thought, speech and social action are as artistic as paint or stone.',
    zhDef: '波依斯的理論：藝術的材料沒有界限。思想、言說與社會行動，與顏料或石材同樣具有藝術性。'
  },
  socialsculpture: {
    en: 'social sculpture', zh: '社會雕塑',
    def: 'Beuys’s idea that society itself can be shaped, like a material, through collective action — so “everyone is an artist”.',
    zhDef: '波依斯主張社會本身可透過集體行動被形塑，如同材料一般，因此「人人都是藝術家」。'
  },

  /* --- Minimalism --- */
  minimalism: {
    en: 'Minimalism', zh: '極簡主義',
    def: 'From the mid-1960s. The fewest possible materials, colours and forms, so the object is simply and plainly present.',
    zhDef: '1960 年代中期起。使用最少的材料、色彩與形式，讓物件僅僅單純地在場。'
  },
  specificobject: {
    en: 'specific object', zh: '特定物件',
    def: 'Judd’s term, 1965: work that is neither painting nor sculpture, but a literal three-dimensional thing in real space.',
    zhDef: '賈德 1965 年的用語：既非繪畫也非雕塑，而是存在於真實空間中的立體物件。'
  },
  reduction: {
    en: 'reduction', zh: '還原／化約',
    def: 'Stripping art back to its own true nature, until nothing can be taken away. It continues Greenberg’s formalist logic.',
    zhDef: '將藝術削減至其自身的本質，直到再無可去除之物。此為格林伯格形式主義邏輯的延續。'
  },
  deaesth: {
    en: 'de-aestheticization', zh: '去美學化',
    def: 'Removing decoration, skill and personal feeling, so the work is met as a plain fact rather than a performance of taste.',
    zhDef: '去除裝飾、技巧與個人情感，使作品被當作一個單純的事實來面對，而非品味的展演。'
  },
  seriality: {
    en: 'seriality', zh: '序列性',
    def: 'Making by rule instead of by feeling: set a mathematical or logical sequence first, then simply follow it.',
    zhDef: '以規則而非情感進行創作：先設定數學或邏輯的序列，然後依序執行。'
  },
  fabrication: {
    en: 'industrial fabrication', zh: '工業代工',
    def: 'The artist makes a plan; a factory makes the object. No hand marks, and nothing unique about the making.',
    zhDef: '藝術家提出方案，由工廠製作物件。沒有手作痕跡，製作本身也不具獨特性。'
  },

  /* --- Conceptual Art --- */
  conceptart: {
    en: 'Concept Art', zh: '觀念藝術',
    def: 'Henry Flynt’s term, 1961: “the material of such art is concepts, as sound is the material of music.”',
    zhDef: '弗林特 1961 年的用語：「這種藝術的材料是觀念，正如聲音是音樂的材料。」'
  },
  conceptualart: {
    en: 'Conceptual Art', zh: '觀念藝術',
    def: 'From the mid-1960s. The concept matters more than the physical object — and often more than how it looks at all.',
    zhDef: '1960 年代中期起。觀念比實體物件更重要，甚至比作品的外觀更重要。'
  },
  dematerialization: {
    en: 'dematerialization', zh: '去物質化',
    def: 'Lippard and Chandler’s word, 1968: art loses its physical object, and only the idea is left.',
    zhDef: '李帕德與錢德勒 1968 年的用語：藝術失去其實體物件，只剩下觀念。'
  },
  proposition: {
    en: 'art as proposition', zh: '藝術即命題',
    def: 'Kosuth, 1969: an artwork states the artist’s intention. It is art, and at the same time a definition of art.',
    zhDef: '科舒斯 1969 年的主張：作品陳述藝術家的意圖。它既是藝術，同時也是藝術的定義。'
  },
  tautology: {
    en: 'tautology', zh: '同義反覆',
    def: 'A statement true only because of its own structure. Kosuth said art does not describe the world — it describes itself.',
    zhDef: '僅因自身結構而為真的陳述。科舒斯認為藝術並不描述世界，它只描述自身。'
  },
  familyresemblance: {
    en: 'family resemblance', zh: '家族相似性',
    def: 'Wittgenstein’s idea: some words have no single fixed meaning, only overlapping similarities. Perhaps “art” is one of them.',
    zhDef: '維根斯坦的概念：有些詞語沒有單一固定的意義，只有彼此重疊的相似之處。「藝術」或許正是如此。'
  },
  declaration: {
    en: 'declaration of intent', zh: '意圖聲明',
    def: 'Weiner’s three rules: the artist can build it, someone else can build it, or it need not be built at all.',
    zhDef: '韋納的三條規則：作品可由藝術家製作、可由他人製作，也可以完全不被製作。'
  },
  institutional: {
    en: 'institutional critique', zh: '機構批判',
    def: 'Art that turns its questions onto the museum, the gallery or the market itself, and makes them the subject.',
    zhDef: '將提問轉向美術館、畫廊或市場本身，並以之為題材的藝術。'
  },
  readymade: {
    en: 'readymade', zh: '現成物',
    def: 'Duchamp’s idea from 1917 — an everyday object chosen by an artist and shown as art. Week 3.',
    zhDef: '杜象 1917 年提出：由藝術家選定並展出的日常物件。第三週學過。'
  },
  ontology: {
    en: 'ontology', zh: '存有學',
    def: 'The branch of philosophy asking what something <i>is</i>. For art: what is art?',
    zhDef: '探問「某物是什麼」的哲學分支。對藝術而言即：藝術是什麼？'
  },
  epistemology: {
    en: 'epistemology', zh: '知識論',
    def: 'The branch of philosophy asking how we <i>know</i> or represent things.',
    zhDef: '探問我們如何認識或再現事物的哲學分支。'
  }
};

const SECTIONS = [
  { title: '1 · Bridge & Hook',       zh: '銜接與提問',   start: 0 },
  { title: '2 · Completing Beuys',    zh: '完成波依斯',   start: 2 },
  { title: '3 · Where Is the Line?',  zh: '藝術的界線',   start: 10 },
  { title: '4 · Minimalism',          zh: '極簡主義',     start: 14 },
  { title: '5 · Conceptual Art',      zh: '觀念藝術',     start: 39 },
  { title: '6 · Institutional Critique', zh: '機構批判',  start: 47 },
  { title: '7 · Wrap-Up & Quiz',      zh: '總結與測驗',   start: 50 }
];

const SLIDES = [

/* ===== PART 1 — BRIDGE AND HOOK ===== */
{
  type: 'title',
  title: 'From Object to Concept',
  sub: 'Does art still need to exist?',
  meta: 'Week 7',
  notes: [
    'Five minutes for the bridge and the hook.',
    'Start with last week’s last slide: Beuys living in a room with a coyote for three days.',
    'ASK: was that art? And if it was — what can the material of art actually be?',
    'Then the guiding question, on the board: does art still need to exist as a physical thing?'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we go now',
  zh: '上週與本週',
  items: [
    { head: 'Last week ended with a man and a coyote', body: 'Three days in a room. No object made. Was that art?' },
    { head: 'We left the question open', body: 'Today we finish it — Beuys had a whole theory behind that week.' },
    { head: 'Then the opposite answer', body: '{{minimalism}}: art is <i>only</i> an object, and nothing else.' },
    { head: 'And then the last step', body: '{{conceptualart}}: if the idea is what matters, do we need the object at all?' }
  ],
  notes: [
    'Set up the shape of the whole session out loud, because it is unusually clean:',
    'Beuys says art is ACTION. Minimalism says art is OBJECT. Conceptual Art says art is IDEA.',
    'Three answers to one question, in one afternoon. Write those three words on the board and leave them up.',
    'The final discussion asks whether they agree with each other or not.'
  ]
},
{
  type: 'bullets',
  title: 'Joseph Beuys (1921–1986)',
  zh: '波依斯',
  items: [
    { head: 'His materials: fat, felt, and animals', body: 'Rabbits, deer, bees — and the coyote you met last week.' },
    { head: '{{expandedart}}', body: 'The material of art can be any object, or any action. Art comes out of life, and shapes life back.' },
    { head: '{{socialsculpture}}', body: 'His big idea: people, together, can shape society — the way an artist shapes a material.' }
  ],
  notes: [
    'Ten minutes on Beuys. This completes last week rather than starting fresh.',
    'The move to make clear: last week they saw the performance. Today they get the theory that explains it.',
    'Do NOT say “everyone is an artist” yet. That is the reveal at the end of the activity, and her lesson plan is explicit about holding it back.'
  ]
},

/* ===== PART 2 — COMPLETING BEUYS ===== */
{
  type: 'compare',
  title: 'Honey Pump at the Workplace',
  ask: 'A machine pumping honey through a building. What is it for?',
  left:  { src: 'img/beuys-honey-pump-1.jpg', label: 'Joseph Beuys, <i>Honey Pump at the Workplace</i>, 1977 — Documenta 6, Kassel', tag: 'The pump' },
  right: { src: 'img/beuys-honey-pump-2.jpg', label: 'The pipes running up through the building', tag: 'The pipes' },
  reveal: [
    { side: 'left',  text: 'A real pump, moving two tonnes of honey. It never stops.' },
    { side: 'right', text: 'Up through the stairwell, then down, into many rooms.' },
    { side: 'left',  text: 'And underneath it, every day for a hundred days, people sat and talked. <b>That</b> was the work.' }
  ],
  notes: [
    'ASK and let them guess. The answer is on the next slide.',
    'Honey as a material: made collectively by bees, warm, alive, and circulating. For Beuys that is a picture of a healthy society.',
    'Documenta 6, Kassel, 1977. Documenta is a huge exhibition held every five years — it comes back in a moment with 7000 Oaks.'
  ]
},
{
  type: 'bullets',
  title: 'What the Honey Pump actually was',
  zh: '蜂蜜幫浦是什麼',
  items: [
    { head: 'The pump', body: 'A machine that moves honey through long pipes, all through the building.' },
    { head: 'Documenta 6', body: 'A big art exhibition in Kassel, Germany, in 1977.' },
    { head: 'The Free International University', body: 'Not a normal school. A place set up to talk and think together.' },
    { head: 'Flow', body: 'The honey moves and never stops — up, then down, into many rooms.' },
    { head: 'And the talking', body: 'Every day, people met near the pump and discussed art and society. <b>That</b> was the work.' }
  ],
  notes: [
    'The last point is the whole thing. The machine is not the artwork — it is the heart of a room where people argue for a hundred days.',
    'The Free International University was a real institution he founded, open to anyone, with no entry requirements.',
    'This is {{socialsculpture}} in a single building. 7000 Oaks does it across a whole city.'
  ]
},
{
  type: 'compare',
  title: '7000 Oaks',
  ask: 'Seven thousand trees, each with a stone beside it. Why the stone?',
  left:  { src: 'img/beuys-7000-oaks-1.jpg', label: 'Joseph Beuys, <i>7000 Oaks — City Forestation Instead of City Administration</i>, 1982–87, Kassel', tag: 'The planting' },
  right: { src: 'img/beuys-7000-oaks-3.jpg', label: 'The pile of 7,000 basalt stones outside the museum, waiting', tag: 'The stones' },
  reveal: [
    { side: 'right', text: 'All seven thousand stones were dumped in a pile outside the museum on day one.' },
    { side: 'right', text: 'The pile shrank as the planting went on — so you could see how far the work had got.' },
    { side: 'left',  text: 'And each tree grows while its stone stays the same. Standing between them, you can see time passing.' }
  ],
  notes: [
    'ASK and give it a moment — the answer is genuinely findable.',
    'It began at Documenta 7 in March 1982, when he planted the first tree in front of the museum.',
    'The full title matters: City Forestation Instead of City Administration. It is a proposal, not a decoration.',
    'The stones were dumped in a pile outside the museum — 7,000 of them — and the pile shrank as the planting went on. So you could see the progress.'
  ]
},
{
  type: 'compare',
  title: 'A tree and a stone',
  left:  { src: 'img/beuys-7000-oaks-2.jpg', label: 'A newly planted oak with its basalt stone, 1982', tag: 'Then' },
  right: { src: 'img/beuys-7000-oaks-4.jpg', label: 'The same pairing, years later', tag: 'Now' },
  reveal: [
    { side: 'left',  text: 'At the start, the stone is taller than the tree.' },
    { side: 'right', text: 'Later, the tree is taller than the stone — and it keeps going.' },
    { side: 'right', text: 'The sculpture is not finished. It has no moment of being finished. It is still happening now.' }
  ],
  notes: [
    'Click through. This is the clearest thing you can show about what he meant.',
    'The trees are still growing in Kassel today. Some are forty years old.',
    'That is why the lesson plan calls it “a slow, living sculpture”.'
  ]
},
{
  type: 'bullets',
  title: 'Three things 7000 Oaks does',
  zh: '七千棵橡樹做了三件事',
  items: [
    { head: 'A slow, living sculpture', body: 'Trees grow; stone stays the same. So <b>time</b> becomes part of the art — and there is no moment when it is “finished”.' },
    { head: '{{socialsculpture}}', body: 'It needed permission, agreement, money and volunteers. Collective action, shaping a city together.' },
    { head: 'Ecology and urban renewal', body: 'Kassel still carried scars from the Second World War. Planting trees was “urban acupuncture” — healing the city bit by bit.' }
  ],
  notes: [
    'Kassel was very heavily bombed in 1943. That is why the city is the subject, not just the site.',
    '“Urban acupuncture” — small precise interventions that change the whole body. It is his own kind of language, but it is a real idea.',
    'Note that the work required committees, permits and fundraising. For Beuys that administrative struggle was part of the sculpture, not an obstacle to it.'
  ]
},
{
  type: 'timeline',
  title: '7000 Oaks: a living timeline',
  zh: '七千棵橡樹：時間軸',
  stops: [
    { when: 'March 1982', what: 'Documenta 7 opens in Kassel. Beuys plants the first tree, with a basalt stone beside it.' },
    { when: '1982–86', what: 'Trees are planted across Kassel, one by one. The tree grows; the stone does not.' },
    { when: 'January 1986', what: 'Beuys dies. About 60% of the seven thousand trees are in the ground.' },
    { when: 'June 1987', what: 'Documenta 8 opens. His son Wenzel plants the final tree, completing the sculpture.' }
  ],
  notes: [
    'Click through the four stops.',
    'The last one is the moment worth pausing on: the artist died with the work unfinished, and it was completed by someone else, five years after it began.',
    'ASK, if you have time: if his son planted the last tree, whose artwork is it? That is a genuine question and it points straight at LeWitt later today.'
  ]
},
{
  type: 'flow',
  title: 'From materials to social sculpture',
  zh: '從材料到社會雕塑',
  stages: [
    { head: 'Materials', body: 'Fat, felt, animals — the raw stuff of daily life.' },
    { head: '{{expandedart}}', body: 'Any object or action can be art.' },
    { head: '{{socialsculpture}}', body: 'Society itself is sculpted.' },
    { head: '7000 Oaks', body: 'The theory made concrete, across a whole city.' }
  ],
  foot: 'Beuys’s theory, traced from raw material to a city-wide social practice.',
  notes: [
    'Four steps, one click each. This is the summary of the Beuys section.',
    'Then straight into the activity — do not add anything after this slide.'
  ]
},

/* ===== PART 3 — WHERE IS THE LINE? ===== */
{
  type: 'section',
  title: 'Where is the line of art?',
  sub: 'From social sculpture to everyday action.',
  notes: [
    'Fifteen minutes. Groups of four or five.',
    'IMPORTANT: do not reveal “everyone is an artist” until the end. Her lesson plan is explicit — let them argue their own position first, so the quote lands as a challenge to what they just decided.'
  ]
},
{
  type: 'activity',
  title: 'Your own action',
  zh: '你自己的行動',
  minutes: 15,
  instructions: [
    '<b>Step 1</b> — On your own, one minute. Think of one ordinary thing you did recently that affected other people. Organising a study group. Settling an argument. Cleaning a shared space.',
    '<b>Step 2</b> — In your group, two minutes. Share your examples and choose <b>one</b> to discuss properly.',
    '<b>Step 4</b> — One minute. Agree on one sentence: is it art, not art, or somewhere in between?'
  ],
  questions: [
    '<b>Q1 · Effect.</b> How does this action affect other people? What does it change about the relationships around you?',
    '<b>Q2 · Is it art?</b> Using Beuys’s {{socialsculpture}}, can this action be called art? Why, or why not?',
    '<b>Q3 · The line.</b> If <i>every</i> action that changes society can be called art, is there still a line between art and an ordinary action? — Give this one the most time. There is no fixed answer.'
  ],
  notes: [
    'Reveal the three questions one at a time. Q3 should get about four of the five minutes.',
    'Step 5, six minutes: each group presents its example and its one-sentence position, in under a minute each.',
    'ONLY AFTER every group has spoken, go to the next slide and reveal Beuys’s claim. Then ask them to reconsider.',
    'The timer is set to fifteen minutes for the whole activity.'
  ]
},
{
  type: 'quote',
  title: 'And here is his answer',
  zh: '而這是他的答案',
  lead: 'Joseph Beuys',
  quote: '“Everyone is an artist.”',
  cite: 'Joseph Beuys',
  plain: [
    'Not: everyone can paint.',
    'He means every person shapes society by what they do — and that shaping <i>is</i> the sculpture.',
    'So a teacher, a nurse, a person organising a study group, is doing the work of art.',
    'Which is either the most generous idea in this course, or the point where the word stops meaning anything.'
  ],
  notes: [
    'THE REVEAL. Only show this after every group has committed to a position.',
    'Read the plain version. The common misreading is “everyone can make good art” — say clearly that is not the claim.',
    'Then link back to 7000 Oaks: the volunteers, the committees, the people who watered the trees. On his definition, all of them were making it.',
    'Then ask the room to reconsider their own position out loud. Some will move; some will dig in. Both are fine.'
  ]
},
{
  type: 'section',
  title: 'Is everyone an artist?',
  ask: 'You just decided. Has he changed your mind?',
  notes: [
    'Thirty seconds, then move on. Do not resolve it.',
    'Minimalism is about to give them the exact opposite answer, which is why this question can be left hanging.'
  ]
},

/* ===== PART 4 — MINIMALISM ===== */
{
  type: 'section',
  title: '{{minimalism}}',
  sub: 'The opposite answer: art is only an object.',
  notes: [
    'Twenty minutes. This is the longest section.',
    'Set it up as a deliberate contrast: Beuys said art can be any action. These artists say art is a specific thing, and nothing more.'
  ]
},
{
  type: 'bullets',
  title: 'What is {{minimalism}}?',
  zh: '什麼是極簡主義？',
  items: [
    { head: 'Fluxus liked change and daily life', body: 'Minimalism is the opposite — it likes things that stay the same.' },
    { head: 'Very few colours and materials', body: 'As few as possible.' },
    { head: 'So it asks a hard question', body: 'What is the difference between “art” and “a normal object”?' },
    { head: 'And the work does not mean anything else', body: 'It is not a symbol. It does not stand for something. It is just a thing.' }
  ],
  notes: [
    'The last point is the one students resist most, and it is the point.',
    'Everything they have studied so far had meaning behind it — feeling, politics, dreams, the unconscious. This has none, on purpose.',
    'Mid-1960s, New York, at exactly the same time as Fluxus. Two opposite answers in the same city.'
  ]
},
{
  type: 'artwork',
  src: 'img/stella-black-painting.jpg',
  title: 'The Black Paintings',
  caption: 'Frank Stella, from the <i>Black Paintings</i>, 1958–60',
  ask: 'Painted two years after Pollock died. What has been removed?',
  points: [
    'Black stripes, evenly spaced, following the shape of the canvas.',
    'The thin gaps are unpainted canvas — he did not draw them, he left them.',
    'No gesture. No emotion. No depth.',
    'This directly challenged Abstract Expressionism, which was still the mainstream.'
  ],
  notes: [
    'ASK and let them list what is gone: feeling, the artist’s hand, drama, meaning.',
    'He was 23 when he made these. That is worth saying.',
    'This is an early example of {{deaesth}} — the term comes up properly in two slides.',
    'Compare directly with de Kooning and Pollock in Week 4. Same city, eight years later, everything stripped out.'
  ]
},
{
  type: 'artwork',
  src: 'img/stella-empress-of-india.jpg',
  title: 'Empress of India',
  caption: 'Frank Stella, <i>Empress of India</i>, 1965 — metallic powder in polymer emulsion on canvas',
  ask: 'The canvas itself is a strange shape. What does that do?',
  points: [
    'Not a rectangle. Four shaped panels, meeting in points.',
    'The stripes follow the edge of the canvas, so the shape decides the painting.',
    'Simple lines and stripes. No story. No hidden meaning.',
    'A painting that is not a window at all — it is an object with a shape.'
  ],
  notes: [
    'ASK and steer them: once the canvas has a shape, you cannot pretend it is a window onto something else. The picture becomes a physical thing hanging on the wall.',
    'That is the bridge from painting to Judd’s {{specificobject}} — say it now, it pays off shortly.',
    'The title is a warship. He gave his paintings titles that mean nothing about the picture, on purpose.'
  ]
},
{
  type: 'quote',
  title: 'What you see is what you see',
  zh: '所見即所見',
  lead: 'Frank Stella, 1966',
  quote: '“What you see is what you see.”',
  cite: 'Frank Stella, in Bruce Glaser, “Questions to Stella and Judd”, <i>ARTnews</i>, September 1966, p. 58',
  plain: [
    'There is nothing behind the picture.',
    'No symbol. No message. No deeper level to find.',
    'If you are looking for what it <i>means</i>, you are looking in the wrong place.',
    'The painting is the whole of the painting.'
  ],
  notes: [
    'This is Quiz Question 3: it rejects symbolic or illusionistic readings.',
    'Six words. Put them on the board.',
    'Students find this frustrating, and that is the correct reaction. Every previous week trained them to look for meaning. Say so out loud — it makes the refusal legible.'
  ]
},
{
  type: 'bullets',
  title: '{{reduction}} and {{deaesth}}',
  zh: '還原與去美學化',
  items: [
    { head: '{{reduction}}', body: 'Art should show only its own true nature. It becomes very pure, and very simple.' },
    { head: '{{deaesth}}', body: 'The artist hides personal feeling. What is left is the object, the viewer, and the room — together.' },
    { head: 'Where this comes from: Clement Greenberg', body: 'The critic from Week 2 and Week 4 (1909–1994).' },
    { head: 'His argument', body: 'Painting should show only what makes painting <i>painting</i> — flat, colour, shape. Not stories. Not feelings.' },
    { head: 'And Minimalism took that further than he wanted', body: 'So far that it broke his own rules. That comes back at the end of this section.' }
  ],
  notes: [
    'Greenberg has now appeared in four weeks. Remind them: Modernism uses a discipline’s own methods on itself.',
    'The joke of the section, which you should set up now: Judd follows Greenberg’s logic so faithfully that he ends up making things that are not paintings at all. Greenberg hated it.'
  ]
},
{
  type: 'bullets',
  title: 'The artist’s hand disappears',
  zh: '藝術家的手消失了',
  items: [
    { head: 'Many Minimalists did not make the object themselves', body: 'They made a plan. A factory made the thing. That is {{fabrication}}.' },
    { head: 'The materials were things you could buy', body: 'Metal, plastic, or fluorescent light tubes.' },
    { head: 'You cannot see any hand marks', body: 'It looks like a machine made it, because one did.' }
  ],
  notes: [
    'Compare with Pollock in Week 4: his whole value was the trace of his body. Here, the trace is removed deliberately.',
    'And compare with Duchamp in Week 3: the artist as a chooser rather than a maker. Same move, forty years later, done in a factory.',
    'This also sets up LeWitt: if a factory can make it from your plan, then the plan is the artwork.'
  ]
},
{
  type: 'artwork',
  src: 'img/judd-untitled-stack.jpg',
  title: 'Untitled (Stack)',
  caption: 'Donald Judd, <i>Untitled</i>, 1968–69 — galvanised iron, ten units',
  ask: 'Ten identical boxes, evenly spaced. Which one is the most important?',
  points: [
    'A row of the same metal box, up the wall, with equal gaps.',
    'A factory made them, not Judd’s hands.',
    'No box is more important than any other.',
    'So there is nothing to compare, and nothing to arrange. There is no composition.'
  ],
  notes: [
    'ASK — the answer is none of them, and finding that out is the lesson.',
    'The gaps are exactly as important as the boxes. That is deliberate: the space is part of the work.',
    'This is the clearest possible refusal of composition, which is the next slide.'
  ]
},
{
  type: 'bullets',
  title: 'Judd’s three arguments',
  zh: '賈德的三個論點',
  items: [
    { head: 'Real space, not illusion', body: 'Even abstract painting suggests depth on a flat surface. Judd: “Three dimensions are real space.” No illusion — just actual space.' },
    { head: 'No composition', body: 'Traditional art arranges parts into a hierarchy. Judd used one shape, or the same unit repeated. There is nothing to compare.' },
    { head: '“A work needs only to be interesting”', body: 'His closing line in <i>Specific Objects</i>. Not skill. Not balance. Just: is it interesting?' }
  ],
  notes: [
    'The third point is a genuinely radical lowering of the bar, and students should notice that.',
    'It also answers the whole tradition of beauty and craft that ran from Week 2 to Week 4.',
    'Say the through-line: Danto said looking cannot tell you what art is; Judd says the only test left is whether it holds your attention.'
  ]
},
{
  type: 'quote',
  title: 'Specific Objects',
  zh: '特定物件',
  lead: 'Donald Judd, 1965',
  quote: '“Half or more of the best new work in the last few years has been neither painting nor sculpture.”',
  cite: 'Donald Judd, “Specific Objects”, <i>Arts Yearbook 8</i>, 1965',
  plain: [
    'For centuries there were two kinds of art object: painting, and sculpture.',
    'Judd says the best new work is neither.',
    'It is a third thing — a {{specificobject}}.',
    'A literal three-dimensional thing, in the same real space as your body.'
  ],
  notes: [
    'This is Quiz Question 4: it sits between painting and sculpture.',
    'The category itself is the invention. He is not describing a style; he is saying the old two boxes no longer hold what is being made.'
  ]
},
{
  type: 'bullets',
  title: '{{seriality}}',
  zh: '序列性',
  items: [
    { head: 'Make by rule, not by feeling', body: 'The artist uses maths and logic to decide, instead of taste.' },
    { head: 'First set the rule. Then follow it', body: 'Again and again, without deciding anything else.' },
    { head: 'And this leads straight to {{conceptualart}}', body: 'If the rule makes the work, then the rule is more important than the making.' }
  ],
  notes: [
    'This slide is the hinge of the whole session. Flag it as such.',
    'Seriality is a Minimalist technique — but it contains the Conceptual Art idea inside it, and LeWitt is the person who notices.',
    'LeWitt is next, and he is in both movements at once.'
  ]
},
{
  type: 'compare',
  title: 'Sol LeWitt',
  ask: 'Two works, the same rule. Where did the artist make a decision?',
  left:  { src: 'img/lewitt-structure.jpg', label: 'Sol LeWitt (1928–2007), open modular structure', tag: 'Structure' },
  right: { src: 'img/lewitt-structure-2.jpg', label: 'Another structure from the same modular system', tag: 'Structure' },
  reveal: [
    { side: 'left',  text: 'Simple open box shapes, in white. Mathematical rules generate many versions of one idea.' },
    { side: 'right', text: 'He planned every rule first. Making the object was then just following them.' },
    { side: 'right', text: 'He called these <b>structures</b>, not sculptures — to avoid the old idea of a unique handmade thing.' }
  ],
  notes: [
    'The word choice matters and is on her slide: structures, not sculptures.',
    'A sculpture is unique and handmade. A structure is built from a rule, and could be built again.',
    'He is the bridge: Minimalist in appearance, Conceptual in method.'
  ]
},
{
  type: 'compare',
  title: 'Wall Drawing #260',
  ask: 'The same work, drawn thirty-three years apart, by different people. Which one is the artwork?',
  left:  { src: 'img/lewitt-wall-drawing-260-1975.jpg', label: '<i>Wall Drawing #260</i>, 1975', tag: '1975' },
  right: { src: 'img/lewitt-wall-drawing-260-2008.jpg', label: 'The same wall drawing, installed again in 2008', tag: '2008' },
  reveal: [
    { side: 'left',  text: 'LeWitt did not draw either one. He wrote instructions.' },
    { side: 'right', text: 'Anyone can follow the instructions. The drawing is made on the wall, and painted over when the show ends.' },
    { side: 'right', text: 'So the real artwork is the <b>instructions</b> — and the drawing is only one performance of them.' }
  ],
  notes: [
    'ASK first, then click. This is the best single demonstration of the week.',
    'Wall drawings are executed by assistants or by the museum’s own staff, following a written certificate.',
    'When the exhibition closes, the wall is painted over. The work survives as a document.',
    'Link back to 7000 Oaks half an hour ago: his son planted the final tree, and it was still Beuys’s work. Same principle, different route.'
  ]
},
{
  type: 'artwork',
  src: 'img/lewitt-incomplete-open-cubes.jpg',
  title: 'Variations of Incomplete Open Cubes',
  caption: 'Sol LeWitt, <i>All Variations of Incomplete Open Cubes</i>, 1974',
  points: [
    'A cube has twelve edges. Take some away, but keep it recognisable as a cube.',
    'He worked out every possible version — there are 122.',
    'Then he built all of them, and showed them together.',
    'No choice was made about which ones look good. The rule decided everything.'
  ],
  notes: [
    'This is {{seriality}} taken to its absolute limit.',
    'He did not select the interesting ones. Selecting would be taste, and taste is what he removed.',
    'ASK if you have time: is a system that produces 122 objects one artwork, or 122?'
  ]
},
{
  type: 'quote',
  title: 'Logical statements',
  zh: '邏輯陳述',
  lead: 'Sol LeWitt, 1974',
  quote: '“My own work of the past ten years is about only one thing, logical statements using formal elements as grammar.”',
  cite: 'Sol LeWitt, statement on <i>Variations of Incomplete Open Cubes</i>, 1974',
  plain: [
    'He is describing his art the way you would describe a language.',
    'The shapes are the grammar.',
    'The work is the statement you can build with them.',
    'And in 1967 he had already written the sentence that matters most: “The idea becomes a machine that makes the art.”'
  ],
  notes: [
    'Save the “idea becomes a machine” line — it appears again in the Conceptual Art section, which is where it belongs.',
    'But it is worth planting here, because he wrote it while still making Minimalist objects.'
  ]
},
{
  type: 'artwork',
  src: 'img/flavin-diagonal-may-25.jpg',
  title: 'The Diagonal of May 25',
  caption: 'Dan Flavin, <i>The Diagonal of May 25 (to Constantin Brancusi)</i>, 1963 — one fluorescent tube',
  smallSource: true,
  ask: 'One shop-bought light tube, fixed to a wall at an angle. What did the artist actually do?',
  points: [
    'A commercial fluorescent tube. You could buy it in any shop.',
    'He did not change it in any way.',
    'He only chose the colour, and the angle, and the place.',
    'So the artist’s job is to choose and arrange — not to build.'
  ],
  notes: [
    'ASK and let them answer: he chose. That is all. Straight back to Duchamp in Week 3.',
    'The dedication is to Brancusi, whom they met in Week 2 — the Endless Column, a diagonal reaching upward.',
    'This is where his light work began, and he said so himself.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  src: 'img/flavin-monument-for-tatlin.jpg',
  title: 'Monument for V. Tatlin',
  caption: 'Dan Flavin, <i>“Monument” for V. Tatlin</i>, 1964 — white fluorescent tubes',
  smallSource: true,
  points: [
    'Tatlin, from Week 2 — the tower for the Third International that was never built.',
    'Flavin made more than thirty of these “monuments”, all in cheap white light.',
    'He gave almost every work a dedication: friends, critics, his dead twin brother.',
    'Which is strange — the material has no personal touch at all, but the title does.'
  ],
  notes: [
    'The Tatlin link is a real gift: Week 2’s unbuildable tower, remade in shop-bought light tubes, and called a “monument” in quotation marks.',
    'The dedications point is on her slide and is worth making. It is the one place feeling is allowed back in — in the title, never in the object.',
    'His twin brother David died in 1962.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  src: 'img/flavin-to-heiner.jpg',
  title: 'Ten colours, five shapes',
  caption: 'Dan Flavin, <i>untitled (to you, Heiner, with admiration and affection)</i>, 1973',
  smallSource: true,
  points: [
    'After 1963 he used only ten standard colours and five standard shapes.',
    'Exactly what any shop stocked. Nothing custom, ever.',
    'He kept inside those rules for his entire career.',
    'A rule set once, then followed for thirty years — {{seriality}} again.'
  ],
  notes: [
    'The self-imposed limit is the point. He could have had tubes made in any colour. He refused.',
    'Note the connection to LeWitt: set the rule first, then follow it without further decisions.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'bullets',
  title: 'Flavin and space',
  zh: '弗萊文與空間',
  items: [
    { head: 'Corners, barriers, corridors', body: 'He grouped his works by how they meet the architecture — not by what shape they are. The point is the space, not the object.' },
    { head: 'The light spreads and mixes', body: 'It falls on walls and floors, and blends with the colour next to it. The real artwork is the whole coloured room.' },
    { head: 'Some works block your path', body: 'A row of tubes used like a fence. You have to walk around it — so your body’s movement becomes part of the work.' }
  ],
  notes: [
    'The third point is the surprising one: a Minimalist work that requires your body to move.',
    'That is exactly what Michael Fried attacked as “theatrical” in 1967, which is two slides away.',
    'Link back to Newman in Week 4 — a canvas wider than your field of vision. Same instinct: the work happens where you are standing.'
  ]
},
{
  type: 'bullets',
  title: 'The moment it became a movement',
  zh: '成為運動的時刻',
  items: [
    { head: '1966 — <i>Primary Structures</i>', body: 'The Jewish Museum, New York. One of the first big shows of this new, simple art.' },
    { head: 'Judd, Flavin and others showed together', body: 'And that exhibition made {{minimalism}} famous.' },
    { head: '1986 — Hal Foster, “The Crux of Minimalism”', body: 'Twenty years later, a critic argues that Minimalism is a historical turning point.' }
  ],
  notes: [
    'Once again a museum exhibition converts scattered artists into a movement — the Week 5 discussion, still running.',
    'Foster is on the next slide. His argument is hard, so use the plain version.'
  ]
},
{
  type: 'quote',
  title: 'A historical crux',
  zh: '歷史的關鍵點',
  lead: 'Hal Foster, 1986',
  quote: '“Minimalism appears as a historical crux in which the formalist autonomy of art is at once achieved and broken up, in which the ideal of pure art becomes the reality of one more specific object among others.”',
  cite: 'Hal Foster, “The Crux of Minimalism”, in <i>The Return of the Real</i>, MIT Press, 1996, p. 54',
  plain: [
    'Greenberg wanted art to become purely itself, and nothing else.',
    'Minimalism finally achieved that — and by achieving it, destroyed it.',
    'Because “purely itself” turned out to mean: just an object, like any other object in the room.',
    'So this is the moment late Modernism ends and Postmodernism begins.'
  ],
  notes: [
    'Read the plain version, not the quotation. It is genuinely difficult English.',
    'The paradox in one line: they followed the rule so completely that the rule collapsed.',
    'This is the Week 2 story arriving at its end. Modernism used art’s own methods on art. Here that project finishes itself off.'
  ]
},
{
  type: 'bullets',
  title: 'How the break happened, 1965–67',
  zh: '斷裂如何發生',
  items: [
    { head: '1965 — Donald Judd', body: 'He took Greenberg’s own logic too far, and broke Greenberg’s rules. He made objects that are “not painting, not sculpture”.' },
    { head: '1966 — Robert Morris', body: 'He used simple shapes, which moved the focus from the object to <i>how the viewer sees it</i>.' },
    { head: '1967 — Michael Fried', body: 'He attacked Minimalism for being “theatrical”. But the attack exposed the hidden rules inside formalism.' }
  ],
  notes: [
    'Three years, three moves. Worth putting on the board as a small timeline.',
    'Fried’s complaint was that Minimalist work depends on the viewer being there, in the room, in time — like theatre. He meant it as an insult.',
    'He was right about the description and wrong about it being a fault. That is why the essay still matters.'
  ]
},
{
  type: 'flow',
  title: 'From materials to specific object',
  zh: '從材料到特定物件',
  stages: [
    { head: 'Industrial materials', body: 'Steel, plastic, light tubes.' },
    { head: '{{reduction}} / {{deaesth}}', body: 'No feeling, no hand marks.' },
    { head: '{{seriality}}', body: 'Rules, not feeling.' },
    { head: '{{specificobject}}', body: 'Not painting, not sculpture.' }
  ],
  foot: 'The same four-step shape as Beuys — but arriving at the opposite answer.',
  notes: [
    'Click through, then point at the Beuys flow from earlier if it is still on the board.',
    'Beuys: material → any action → society → a city. Minimalism: material → strip everything → follow a rule → one object.',
    'Two theories, both rigorous, pointing in opposite directions. That is the second discussion question at the end.'
  ]
},
{
  type: 'terms',
  title: 'Key vocabulary',
  zh: '關鍵詞彙複習',
  terms: ['reduction', 'deaesth', 'seriality', 'specificobject', 'fabrication'],
  notes: [
    'A pause to check the Minimalism vocabulary. Tap each one for the Chinese.',
    'One minute. Ask the room to give you the definition before you open the chip.'
  ]
},
{
  type: 'section',
  title: 'One more step.',
  sub: 'If the idea is more important than the making… do we need the object at all?',
  notes: [
    'This is the pivot of the session. Say it slowly and then wait.',
    'Everything in Minimalism has been pushing toward this: the plan, the rule, the factory, the instructions.'
  ]
},

/* ===== PART 5 — CONCEPTUAL ART ===== */
{
  type: 'section',
  title: '{{conceptualart}}',
  sub: 'The final step from object to idea.',
  notes: ['Fifteen minutes.']
},
{
  type: 'bullets',
  title: 'What is {{conceptualart}}?',
  zh: '什麼是觀念藝術？',
  items: [
    { head: '1961 — Henry Flynt uses the words “{{conceptart}}”', body: '“The material of this art is concepts, as sound is the material of music.”' },
    { head: '1967–68 — Sol LeWitt, “Paragraphs on Conceptual Art”', body: '“The idea becomes a machine that makes the art.”' },
    { head: '1968 — {{dematerialization}}', body: 'Two critics, Lucy Lippard and John Chandler, write an essay in <i>Art International</i> and give the process a name.' }
  ],
  notes: [
    'Flynt’s sentence is Quiz Question 5, and it is the neatest definition in the whole course. Put it on the board.',
    'Sound is not <i>about</i> music — sound is what music is made of. Concepts are what this art is made of.',
    'LeWitt’s “machine” line: once the idea and the decisions are fixed in advance, execution is a formality. Even imprecise execution is fine, because the idea is the art.',
    'Lippard and Chandler were describing something already happening, not proposing it.'
  ]
},
{
  type: 'bullets',
  title: 'Kosuth: Art After Philosophy',
  zh: '科舒斯：哲學之後的藝術',
  items: [
    { head: '1969, in <i>Studio International</i>', body: 'After Duchamp, he argues, philosophy’s job in art is finished. Art itself must now investigate what art means.' },
    { head: '{{proposition}}', body: 'An artwork is a proposition. It states the artist’s intention. It is art — and at the same time a definition of art.' },
    { head: 'He compares it to a {{tautology}}', body: 'A statement true only because of its own structure.' },
    { head: 'So art does not describe the world', body: 'It only describes itself.' }
  ],
  notes: [
    'This is the hardest slide of the day. Take it slowly.',
    'A tautology: “a bachelor is an unmarried man” is true by definition, not because you checked. Kosuth wants art to work like that.',
    'His conclusion: an artwork is a proposal about what art is. Making one is doing philosophy, using art.',
    'The next slide is the demonstration, and it is much easier than the theory.'
  ]
},
{
  type: 'artwork',
  src: 'img/kosuth-one-and-three-chairs.jpg',
  title: 'One and Three Chairs',
  caption: 'Joseph Kosuth, <i>One and Three Chairs</i>, 1965 — a wooden chair, a photograph of it, and a dictionary definition of “chair”',
  ask: 'Three chairs on one wall. Which one is the artwork?',
  points: [
    'A real chair. A life-size photograph of that chair, in that place. And the dictionary entry for “chair”.',
    'An object, an image, and a word.',
    'All three refer to the same thing. None of them is more true than the others.',
    'And the answer to the question is: none of them. The artwork is the relationship between them.'
  ],
  notes: [
    'ASK and let the room argue. They will split, and every position is defensible — which is the design.',
    'Then give the answer: the work is the proposition the three parts make together.',
    'A detail worth knowing: when the work is installed, a new photograph is taken of the chair in <i>that</i> gallery. So the photograph changes each time, and the piece survives as instructions — exactly like LeWitt.',
    'This is the first discussion question at the end of class.'
  ]
},
{
  type: 'bullets',
  title: 'Philosophical roots',
  zh: '哲學根源',
  items: [
    { head: 'Wittgenstein asked: what <i>is</i> something?', body: 'That is {{ontology}}. For art: what is art?' },
    { head: 'And: how do we know, or show, things?', body: 'That is {{epistemology}}.' },
    { head: '{{familyresemblance}}', body: 'His idea that some words have no single fixed meaning — only overlapping similarities. Perhaps “art” is one of them.' },
    { head: 'And Duchamp’s {{readymade}}', body: 'The artist’s idea matters more than the material. Week 3.' },
    { head: 'Kosuth’s claim', body: '“All art after Duchamp is conceptual, because art only exists conceptually.”' }
  ],
  notes: [
    'Family resemblance is the useful one for students: think of “game”. Chess, football and solitaire share no single feature, yet all are games.',
    'If “art” works like that, then no definition will ever hold — which is either a relief or a disaster, depending on the student.',
    'The Kosuth quotation at the end is a very large claim. Let them push back on it.'
  ]
},
{
  type: 'compare',
  title: 'Lawrence Weiner',
  ask: 'Students cut the twine because it blocked their path. Did that destroy the work?',
  left:  { src: 'img/weiner-declaration-of-intent.jpg', label: '<i>A Series of Stakes Set in the Ground at Regular Intervals to Form a Rectangle…</i>, 1968 — Windham College, Putney, Vermont', tag: 'Built' },
  right: { src: 'img/weiner-turf-stake-string.jpg', label: '<i>Turf, Stake and String</i>, from S.M.S. No. 5, 1968', tag: 'Published' },
  reveal: [
    { side: 'left',  text: 'The title <i>is</i> the work: stakes in the ground, twine between them, forming a rectangle. He built this one.' },
    { side: 'left',  text: 'Students cut the twine — it was in the way of the football field.' },
    { side: 'right', text: 'Weiner decided that had not damaged the work at all. Then he wrote down why.' }
  ],
  notes: [
    'The story is true and it is the origin of the Declaration of Intent on the next slide.',
    'The twine got cut because it blocked a path to the football field. Rather than being annoyed, he realised the physical version was optional.',
    'That realisation is the next slide, and it is the most extreme position in the week.'
  ]
},
{
  type: 'quote',
  title: '{{declaration}}',
  zh: '意圖聲明',
  lead: 'Lawrence Weiner, 1968',
  quote: '“1. The artist may construct the piece. 2. The piece may be fabricated. 3. The piece need not be built.”',
  cite: 'Lawrence Weiner, <i>Statement of Intent</i>, 1968',
  plain: [
    'The artist can build it.',
    'Someone else can build it.',
    'Or it does not need to be built at all.',
    'And all three are equally the artwork.'
  ],
  ask: 'If it never gets built, does it exist?',
  notes: [
    'Three sentences, and the third one is the whole of Conceptual Art.',
    'ASK the question and take two or three answers.',
    'His reason is worth quoting: “Art that imposes conditions on the receiver for its appreciation in my eyes constitutes aesthetic fascism.” He meant that requiring someone to travel to a museum is itself a barrier.',
    'That is a political argument, not only a formal one — link it to Maciunas last week: art anyone can have.'
  ]
},
{
  type: 'bullets',
  title: 'Art & Language',
  zh: '藝術與語言團體',
  items: [
    { head: '1967 — a group forms in Britain', body: 'Terry Atkinson, Michael Baldwin and others.' },
    { head: '1969 — they launch a magazine, <i>Art-Language</i>' },
    { head: 'Their art practice was writing', body: 'Long philosophical texts — not painting, not sculpture.' },
    { head: 'It spread to New York and Canada', body: 'Kosuth joined for a time, and became the New York editor.' }
  ],
  notes: [
    'The point students should take: for these artists, an essay was not writing <i>about</i> art. It was the art.',
    'That is Flynt’s definition taken completely literally — concepts as the material.',
    'One minute on this slide. Then the last section.'
  ]
},

/* ===== PART 6 — INSTITUTIONAL CRITIQUE ===== */
{
  type: 'artwork',
  src: 'img/manzoni-merda-dartista.jpg',
  title: 'Merda d’artista',
  caption: 'Piero Manzoni, <i>Merda d’artista</i> (Artist’s Shit), 1961 — ninety sealed tins, 30 g each',
  smallSource: true,
  ask: 'He priced them by their weight in gold. What is he actually selling?',
  points: [
    'Ninety small tins, numbered and signed, said to contain his own excrement.',
    'Each was priced at the value of 30 grams of gold on the day.',
    'Nobody has ever opened one to check, because opening it would destroy the work.',
    'So what is bought and sold is the signature, and nothing else.'
  ],
  notes: [
    'ASK and let them be blunt. The answer is: the artist’s name.',
    'This is Quiz Question 6: it links the value of an artwork solely to the artist’s signature and body.',
    'The prices now are far above gold — one sold for over 200,000 euros. So the joke kept working, at the expense of the people who found it funny.',
    'Manzoni died at 29, two years after making it.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'bullets',
  title: '{{institutional}}',
  zh: '機構批判',
  items: [
    { head: 'The next step after {{conceptualart}}', body: 'From the late 1960s onward.' },
    { head: 'It turns the question onto the museum itself', body: 'The gallery, the market, the institution — these become the subject matter.' },
    { head: 'Manzoni aimed at the market', body: 'What exactly are you paying for?' },
    { head: 'Hans Haacke aimed at the building', body: 'At the 1993 Venice Biennale he tore up the floor of the German pavilion, and made its Nazi-era architecture the work.' }
  ],
  notes: [
    'Haacke is in the lesson plan but has no slide of her own, so he is described rather than shown.',
    'Germania, 1993: he smashed the marble floor of the German Pavilion — rebuilt under the Nazis in 1938 — and left visitors walking on the rubble. It won the Golden Lion.',
    'The pavilion is not where the artwork is. The pavilion IS the artwork.',
    'This is the third discussion question: does this extend the question of what art is, or change the subject entirely?'
  ]
},
{
  type: 'terms',
  title: 'Key vocabulary',
  zh: '關鍵詞彙複習',
  terms: ['dematerialization', 'tautology', 'familyresemblance', 'declaration', 'institutional'],
  notes: [
    'The Conceptual Art vocabulary. Tap each for the Chinese.',
    'One minute. Ask for the definition before you open the chip.'
  ]
},

/* ===== PART 7 — WRAP-UP AND QUIZ ===== */
{
  type: 'flow',
  title: 'Four answers, one afternoon',
  zh: '一堂課，四個答案',
  stages: [
    { head: 'Action', body: 'Beuys. Art is what you do, and society is the material.' },
    { head: 'Object', body: 'Minimalism. Art is a specific thing, and nothing more.' },
    { head: 'Idea', body: 'Kosuth, LeWitt, Weiner. Art is the proposition; the object is optional.' },
    { head: 'Institution', body: 'Manzoni, Haacke. Art is the market and the museum that decide.' }
  ],
  foot: 'They cannot all be right — and they were all argued in the same fifteen years.',
  notes: [
    'Ten minutes for wrap-up and preview.',
    'Click through the four. This is the session in four words, and it is the cleanest arc in the course so far.',
    'The honest closing point: this is not a story of progress. These are four rival answers, made at the same time, by people who read each other.',
    'Preview next week and stop.'
  ]
},
{
  type: 'activity',
  title: 'Discussion',
  zh: '討論',
  minutes: 10,
  instructions: [
    'Talk in small groups. Then one person reports back.',
    'Useful starters: “I think… because…” · “For me, …” · “I disagree, because…”'
  ],
  questions: [
    'Kosuth said a chair, a photograph of a chair and the word “chair” can all be equally the artwork. If a definition or a photograph can replace the object entirely, does an artwork still need any physical form — or is form now optional once the idea has been communicated?',
    'Beuys said <i>everyone is an artist</i> and any social action can be art. Judd said art is a literal, irreducible object. Can both be definitions of art in the same decade — or do they simply contradict each other?',
    'Manzoni sold tins of his own excrement by their weight in gold; Haacke turned a national pavilion into a work about its own politics. Is that extending the question “what is art?” — or abandoning it for a different fight, against the market and the museum?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2.',
    'Question 2 is the best one for this class, because they argued about it themselves in the activity before Minimalism. Point that out.',
    'Question 1 is the most philosophical; question 3 is the most political. Pick by the room.'
  ]
},
{
  type: 'activity',
  title: 'Short presentations',
  zh: '學生報告',
  minutes: 6,
  instructions: [
    'Three students today. Six minutes each, TED-style.',
    'One artist from the course list of 120.'
  ],
  questions: [
    'Who was the artist? Where and when did they work?',
    'One or two key artworks.',
    'What concept, and what media?',
    'Why does it matter today?'
  ],
  notes: [
    'Twenty minutes: three students, six minutes each, plus changeover.',
    'The timer is set to six minutes. Press Reset between speakers.'
  ]
},
{
  type: 'section',
  title: 'Art Quiz',
  zh: '藝術測驗',
  sub: 'Six questions. Nothing is scored, and nothing is saved.',
  notes: [
    'Read each question aloud, slowly, twice. Then read the four options.',
    'Give thirty seconds. Students answer by holding up one, two, three or four fingers.'
  ]
},
{
  type: 'quiz', n: 1, answer: 0,
  q: 'How does Beuys’s {{expandedart}} change what an “artist” is?',
  options: [
    'Every human being is an artist, through their power to shape life.',
    'All artists must get a degree in social science before making work.',
    'Only the artist’s intentions matter, and not the audience’s reactions.',
    'The title of artist belongs only to those who work with fat and felt.'
  ],
  why: '“Everyone is an artist.” Not everyone can paint — everyone shapes society, and that shaping is the sculpture.',
  notes: ['Answer: A. Option D is a nice trap: fat and felt are his materials, not his definition.']
},
{
  type: 'quiz', n: 2, answer: 1,
  q: 'According to {{socialsculpture}}, what is the main purpose of art?',
  options: [
    'To preserve traditional carving techniques using organic materials.',
    'To shape society through collective, participatory action.',
    'To make aesthetically pleasing objects for galleries.',
    'To document historical events through performance.'
  ],
  why: '7000 Oaks: permits, volunteers, committees, and a city slowly changing over five years.',
  notes: ['Answer: B.']
},
{
  type: 'quiz', n: 3, answer: 2,
  q: 'Frank Stella’s “What you see is what you see” was meant to reject which of these?',
  options: [
    'The use of industrial house paint.',
    'Mathematical logic in composition.',
    'Symbolic or illusionistic interpretations.',
    'The viewer’s physical presence.'
  ],
  why: 'There is nothing behind the picture. No symbol, no message, no deeper level to find.',
  notes: ['Answer: C. If anyone picks D, that is Flavin and Fried — right idea, wrong artist.']
},
{
  type: 'quiz', n: 4, answer: 0,
  q: 'Judd’s term “{{specificobject}}” describes work that sits between which two traditional categories?',
  options: [
    'Painting and sculpture.',
    'Photography and sculpture.',
    'Performance and installation.',
    'Concept and material.'
  ],
  why: '“Half or more of the best new work in the last few years has been neither painting nor sculpture.”',
  notes: ['Answer: A.']
},
{
  type: 'quiz', n: 5, answer: 1,
  q: 'How did Henry Flynt define “{{conceptart}}” in 1961?',
  options: [
    'Concept art should always be accompanied by sound recordings.',
    'Concepts are the material of this art, as sound is the material of music.',
    'Only musicians can truly understand conceptual frameworks.',
    'Art is a silent form of music.'
  ],
  why: 'Sound is not what music is <i>about</i> — sound is what music is made of. Same for concepts here.',
  notes: ['Answer: B. The neatest definition in the course.']
},
{
  type: 'quiz', n: 6, answer: 3,
  q: 'Manzoni’s <i>Merda d’artista</i> (1961) works as a provocation by:',
  options: [
    'Focusing on the biological necessity of the human body.',
    'Proving that all art must be stored in airtight containers to stay pure.',
    'Highlighting the environmental impact of industrial canning.',
    'Tying an artwork’s value solely to the artist’s signature and body.'
  ],
  why: 'Priced by weight in gold, sealed so nobody can check. What is sold is the name.',
  notes: [
    'Answer: D.',
    'Close by linking to the last discussion question — and to Week 4’s forty-three-million-dollar Newman.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['expandedart', 'socialsculpture', 'minimalism', 'specificobject', 'reduction', 'deaesth', 'seriality', 'fabrication', 'conceptart', 'conceptualart', 'dematerialization', 'proposition', 'tautology', 'declaration', 'institutional'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
