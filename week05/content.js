/* ------------------------------------------------------------------
   Week 5 — The Boundary Between Art and Everyday Life
   Can anything be art?

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- the week's foundational concepts --- */
  popart: {
    en: 'Pop Art', zh: '普普藝術',
    def: 'Art that takes its images straight from popular and mass culture. The critic Lawrence Alloway named it in 1958.',
    zhDef: '直接取材於流行與大眾文化的藝術。1958 年由評論家艾洛威命名。'
  },
  massculture: {
    en: 'mass culture', zh: '大眾文化',
    def: 'The commercial images everyone sees — advertising, comics, television, packaging. Pop artists took these and put them in galleries.',
    zhDef: '人人都看得到的商業影像：廣告、漫畫、電視、包裝。普普藝術家把這些搬進了美術館。'
  },
  artworld: {
    en: 'the Artworld', zh: '藝術界',
    def: 'Danto’s idea, 1964: an object becomes art through theory, art history and institutions — not through how it looks.',
    zhDef: '丹托 1964 年的理論：一件物品之所以成為藝術，靠的是理論、藝術史與體制，而不是它的外觀。'
  },
  silkscreen: {
    en: 'silkscreen printing', zh: '絹印',
    def: 'A printing process Warhol used to make many copies of one image — deliberately removing the artist’s own hand.',
    zhDef: '沃荷用來大量複製同一影像的印刷方法，刻意抹除藝術家個人的手感。'
  },
  bendaydots: {
    en: 'Ben-Day dots', zh: '班戴點',
    def: 'The mechanical printing dots in cheap comics. Lichtenstein enlarged them and painted them by hand.',
    zhDef: '廉價漫畫印刷所用的機械網點。李奇登斯坦把它們放大，並以手工繪製。'
  },
  foundobject: {
    en: 'found object', zh: '現成物件',
    def: 'An everyday or thrown-away thing put straight into an artwork. It goes back to Duchamp’s readymade.',
    zhDef: '將日常或廢棄之物直接放入作品中。可上溯至杜象的現成物。'
  },

  /* --- movements --- */
  assemblage: {
    en: 'Assemblage', zh: '集合藝術',
    def: 'Building an artwork out of found objects and everyday materials. A technique, not a style.',
    zhDef: '以現成物與日常材料構築作品。它是一種技法，而非風格。'
  },
  neodada: {
    en: 'Neo-Dada', zh: '新達達',
    def: 'A 1958 term for Rauschenberg and Johns. It keeps Dada’s critical spirit, but builds something new instead of only saying no.',
    zhDef: '1958 年用來指勞森伯格與瓊斯的名詞。保留達達的批判精神，但不只否定，而是另建新的美學。'
  },
  combine: {
    en: 'Combine', zh: '複合繪畫',
    def: 'Rauschenberg’s own word for works that are painting and sculpture at the same time, with real objects attached.',
    zhDef: '勞森伯格自創的名詞，指同時是繪畫也是雕塑、並附有實物的作品。'
  },
  softsculpture: {
    en: 'soft sculpture', zh: '軟雕塑',
    def: 'Sculpture made of canvas, vinyl or latex, so it sags and changes shape under gravity. Oldenburg’s invention.',
    zhDef: '以帆布、乙烯基或乳膠製成的雕塑，會因重力而下垂變形。歐登伯格首創。'
  },
  independentgroup: {
    en: 'the Independent Group', zh: '獨立團體',
    def: 'A group founded in London in 1952 to talk about technology, advertising and film — the birthplace of British Pop Art.',
    zhDef: '1952 年於倫敦成立的團體，討論科技、廣告與電影，被視為英國普普藝術的發源地。'
  },
  appropriation: {
    en: 'appropriation', zh: '挪用',
    def: 'Taking an existing image or design and using it as your own work. It raises the question of who the author is.',
    zhDef: '取用既有的影像或設計作為自己的作品，因而引發「作者是誰」的問題。'
  },
  conceptual: {
    en: 'Conceptual Art', zh: '觀念藝術',
    def: 'Art where the idea itself is the work. It grew in the late 1960s, out of exactly the question the Brillo Box asked.',
    zhDef: '以觀念本身作為作品的藝術。1960 年代末興起，正源於布瑞洛盒所提出的問題。'
  },
  institutional: {
    en: 'institutional theory', zh: '體制理論',
    def: 'The view that an object becomes art because the artworld — museums, critics, other artists — agrees to treat it as art.',
    zhDef: '主張一件物品之所以成為藝術，是因為藝術界（美術館、評論家、藝術家社群）共同賦予它這個身分。'
  },
  kitsch: {
    en: 'kitsch', zh: '媚俗',
    def: 'Greenberg’s 1939 word for cheap, popular, commercial imagery — which he set firmly below “high art”. Pop Art rejected that line.',
    zhDef: '格林伯格 1939 年用語，指廉價、通俗、商業化的影像，並將其置於「高等藝術」之下。普普藝術否定了這條界線。'
  },
  readymade: {
    en: 'readymade', zh: '現成物',
    def: 'Duchamp’s idea from 1917 — an everyday object chosen by an artist and shown as art. You met it in Week 3.',
    zhDef: '杜象 1917 年提出：由藝術家選定並展出的日常物件。第三週已學過。'
  }
};

const SECTIONS = [
  { title: '1 · Review & the Question', zh: '複習與提問',   start: 0 },
  { title: '2 · Pop Art',              zh: '普普藝術',      start: 2 },
  { title: '3 · Is This Art?',         zh: '這是藝術嗎？',  start: 16 },
  { title: '4 · The Brillo Box',       zh: '布瑞洛盒',      start: 18 },
  { title: '5 · Oldenburg',            zh: '歐登伯格',      start: 27 },
  { title: '6 · Assemblage',           zh: '集合藝術',      start: 34 },
  { title: '7 · Neo-Dada',             zh: '新達達',        start: 42 },
  { title: '8 · Taiwan Neo-Dada',      zh: '台灣新達達',    start: 46 },
  { title: '9 · Wrap-Up & Quiz',       zh: '總結與測驗',    start: 49 }
];

const SLIDES = [

/* ===== PART 1 — REVIEW AND THE QUESTION ===== */
{
  type: 'title',
  title: 'The Boundary Between Art and Everyday Life',
  sub: 'Can anything be art?',
  meta: 'Week 5',
  notes: [
    'Five minutes for review and framing.',
    'This week’s question, and write it on the board: where is the line between art and everyday life?',
    'HOOK: if you can, put a real box of soap pads on the desk at the front now, and leave it there. Do not explain it. Students will keep looking at it, and it pays off in about twenty minutes.',
    'Do NOT say the words Warhol or Brillo Box yet — the activity depends on the suspense.'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we go now',
  zh: '上週與本週',
  items: [
    { head: 'Last week: painting lost the picture', body: 'Pollock, Rothko, Kelly. The recognisable image went, and then the brush and the gesture went too.' },
    { head: 'It ended with almost nothing on the canvas', body: 'Colour, surface, and the fact of the thing.' },
    { head: 'This week the world comes flooding back', body: 'Soup cans. Comics. Film stars. Soap boxes.' },
    { head: 'And a harder question', body: 'Not “what does art look like?” but “what makes something art at all?”' }
  ],
  notes: [
    'Recap last week in one line: painting lost reality, one piece at a time.',
    'Then the reversal: this week, ordinary life comes straight back into the gallery — but as subject matter, not as realism.',
    'Frame the puzzle and leave it open. The Brillo Box will resolve it later.'
  ]
},

/* ===== PART 2 — POP ART ===== */
{
  type: 'word',
  word: 'POP',
  notes: [
    'One word. Let it sit.',
    'Ask them what the word suggests before you define it — popular, and also the sound of something bursting. Both are right.'
  ]
},
{
  type: 'bullets',
  title: 'What is {{popart}}?',
  zh: '什麼是普普藝術？',
  items: [
    { head: 'Pop = popular', body: 'The term first appeared in 1958, in the British critic Lawrence Alloway’s essay “The Arts and the Mass Media”.' },
    { head: 'It looks hard at {{massculture}}', body: 'Mass media, advertising, consumer goods.' },
    { head: 'Two things at once', body: 'A celebration of postwar shopping — and a reaction <i>against</i> Abstract Expressionism.' },
    { head: 'It answers Greenberg', body: 'His 1939 essay “Avant-Garde and Kitsch” drew a hard line between high art and {{kitsch}}. Pop Art rubs that line out.' }
  ],
  notes: [
    'Pop means popular. Say it plainly, then complicate it.',
    'The reaction against Abstract Expressionism matters: last week’s artists were serious, heroic, and about deep inner feeling. Pop is flat, cheap, and about surfaces.',
    'Greenberg is the same critic from Weeks 2 and 4. He said high art on one side, kitsch on the other, and never mix them. Pop Art is the answer to that.',
    'This is Quiz Question 1 territory — Alloway, 1958.'
  ]
},
{
  type: 'bullets',
  title: 'The cradle: {{independentgroup}}',
  zh: '搖籃：獨立團體',
  items: [
    { head: 'Founded in 1952', body: 'At the Institute of Contemporary Arts (ICA) in London.' },
    { head: 'Members included Alloway, Richard Hamilton and Eduardo Paolozzi' },
    { head: 'Widely seen as the birthplace of British Pop Art' },
    { head: 'What they talked about', body: 'Technology. Advertising. Science fiction. Hollywood films — everything the serious art world was ignoring.' }
  ],
  notes: [
    'Note the date: 1952. Pop Art starts in Britain, and it starts as a discussion group, not a studio movement.',
    'These were people who thought advertising was worth taking seriously as visual culture. In 1952 that was an unusual position.',
    'CORRECTED: her slide later says Pop Art “began in Britain in the 1960s”. The Independent Group is 1952 and This Is Tomorrow is 1956, so the deck now says the 1950s in Britain, spreading to America in the 1960s.'
  ]
},
{
  type: 'bullets',
  title: 'The picture came before the name',
  zh: '影像早於名稱',
  items: [
    { head: 'Eduardo Paolozzi’s collage <i>I Was a Rich Man’s Plaything</i>, 1947' },
    { head: 'In it, a toy gun fires the word “POP!”' },
    { head: 'The first time the word appears in an artwork', body: 'More than ten years before Alloway coined the term.' },
    { head: 'But nobody saw it until 1952', body: 'It was first shown as a slide, at the Independent Group’s first meeting.' }
  ],
  notes: [
    'A nice detail: the word is in the picture in 1947, but the movement is not named until 1958.',
    'And the picture was not exhibited — it was projected at a meeting. Pop Art starts as a slide in a seminar room.'
  ]
},
{
  type: 'artwork',
  src: 'img/paolozzi-rich-mans-plaything.jpg',
  title: 'I Was a Rich Man’s Plaything',
  caption: 'Eduardo Paolozzi, <i>I Was a Rich Man’s Plaything</i>, 1947',
  smallSource: true,
  ask: 'Where did every single piece of this picture come from?',
  points: [
    'Nothing here was drawn. It is all cut out and glued.',
    'A pulp magazine cover, an advertisement, a Coca-Cola logo, a военный aircraft.',
    'And a toy gun firing the word “POP!”',
    'The artist chose and arranged. He did not draw.'
  ],
  notes: [
    'ASK and let them look. Answer: magazines and advertisements — all of it already printed.',
    'That is the method the whole movement is built on: cut, choose, arrange.',
    'CORRECTED: her slide title dropped the first word. The title is “I Was a Rich Man’s Plaything”.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'bullets',
  title: 'This Is Tomorrow, 1956',
  zh: '一九五六年，「這就是明天」展',
  items: [
    { head: 'At the Whitechapel Gallery, London', body: 'Started by the architect Theo Crosby.' },
    { head: 'Twelve teams, working across disciplines', body: 'Artists, architects and designers exhibiting together.' },
    { head: 'Hamilton was in “Group 2”', body: 'With the artist John McHale and the architect John Voelcker.' },
    { head: 'They built an immersive installation, <i>Fun House</i>', body: 'And the famous collage was made as its poster.' }
  ],
  notes: [
    'The important correction to the usual story: the collage everyone reproduces was not a painting hanging on a wall. It was publicity material for an installation.',
    'So the first great Pop Art image was, literally, an advertisement. Say that — students enjoy it.'
  ]
},
{
  type: 'compare',
  title: 'Fun House, 1956',
  left:  { src: 'img/fun-house-view1.jpg', label: 'Richard Hamilton, John McHale and John Voelcker, <i>Fun House</i>, 1956', tag: 'Fun House' },
  right: { src: 'img/fun-house-view2.jpg', label: 'Another view of the same installation', tag: 'Fun House' },
  reveal: [],
  notes: [
    'Two views of the installation. Let them look for a moment.',
    'Patterned floors, optical illusions, a jukebox, film posters, blown-up advertising. You walked through it.',
    'This is closer to a funfair than to a gallery — which was exactly the point.'
  ]
},
{
  type: 'artwork',
  src: 'img/this-is-tomorrow-installation.jpg',
  title: 'Inside the exhibition',
  caption: 'Installation view — <i>This Is Tomorrow</i>, Whitechapel Gallery, London, 1956 (reconstruction)',
  points: [
    'A jukebox. Optical patterns. A wall of film and advertising images.',
    'No frames, no plinths, no quiet white room.',
    'You did not stand and contemplate. You walked in.',
    'Compare it with the Rothko room from last week — as different as two rooms can be.'
  ],
  notes: [
    'Use the comparison with Rothko: he wanted you standing close in silence. This wants you moving, distracted, entertained.',
    'Both are 1950s. Both are serious art. That contrast is worth a moment.'
  ]
},
{
  type: 'artwork',
  src: 'img/hamilton-just-what-is-it.jpg',
  title: 'Just what is it that makes today’s homes so different, so appealing?',
  caption: 'Richard Hamilton, 1956',
  ask: 'How many different products can you find in this one room?',
  points: [
    'A modern living room, built entirely out of magazine cuttings.',
    'A bodybuilder holding a giant lollipop with the word POP on it.',
    'A tinned ham on the table. A television. A tape recorder. A vacuum cleaner.',
    'Every object is something you could buy. The room is a shopping catalogue.',
    'This is the picture that set the visual vocabulary of {{popart}}.'
  ],
  notes: [
    'ASK and let them count — they will find more than they expect. Zoom in.',
    'The word POP is on the lollipop. That is where the name is usually said to come from, though Alloway’s essay is the real source.',
    'This is Quiz Question 1: it established Pop Art’s visual vocabulary of mass-media and consumer imagery.',
    'Point out that the ceiling is a photograph of the Earth from space, and the view through the window is a cinema. Nothing in the room is what it seems.'
  ]
},
{
  type: 'bullets',
  title: 'Why it happened when it did',
  zh: '為何發生於此時',
  items: [
    { head: 'The war ended in 1945', body: 'And the Western economies recovered fast. Productivity and living standards rose.' },
    { head: 'Ordinary people had money to spend', body: 'Buying things became a normal part of life, not a luxury.' },
    { head: 'That is what created {{massculture}}', body: 'Advertising, television and packaging needed an audience — and now there was one.' },
    { head: 'Britain first, in the 1950s', body: 'Then it spread widely to the United States in the 1960s.' }
  ],
  notes: [
    'The economics are the point of this slide. Pop Art is not possible without a consumer society to point at.',
    'CORRECTED: her slide said Pop Art “began in Britain in the 1960s”. Her own earlier slides date it to 1952–1956, so this now reads 1950s in Britain, 1960s in America.'
  ]
},
{
  type: 'twocol',
  title: 'Two Pop Arts',
  left: {
    head: 'British',
    zh: '英國',
    lead: 'Hamilton, Paolozzi',
    items: [
      'The stance of an observer, standing back.',
      'Admiring — and ironic at the same time.',
      'A critical, academic distance.',
      'They were looking at American consumer culture from outside it.'
    ]
  },
  right: {
    head: 'American',
    zh: '美國',
    lead: 'Warhol, Lichtenstein — from the 1960s',
    items: [
      'These artists were <i>inside</i> consumer society.',
      'Not observing it. Living in it.',
      'Some embraced the logic of mechanical reproduction completely.',
      'No distance at all.'
    ]
  },
  notes: [
    'This distinction is worth making carefully — it is the second discussion question at the end of class.',
    'The British were describing something happening somewhere else. The Americans were describing their own street.',
    'That is why British Pop feels cooler and more analytical, and American Pop feels louder.'
  ]
},
{
  type: 'bullets',
  title: 'What Pop Art looks like',
  zh: '普普藝術的視覺特徵',
  items: [
    { head: 'Collage and {{appropriation}}', body: 'Take an image that already exists. Use it.' },
    { head: 'Bright primary colours, flat composition', body: 'No depth, no modelling, no atmosphere.' },
    { head: '{{silkscreen}} and {{bendaydots}}', body: 'The techniques of printing, not of painting.' },
    { head: 'Repetition', body: 'And the texture of something mechanically reproduced — printing dots, a comic-book feel.' }
  ],
  notes: [
    'The through-line: every one of these is borrowed from commercial printing, not from fine art.',
    'Last week, the mark of the artist’s hand was everything. Here, artists are removing it on purpose.',
    'That reversal in ten years is the sharpest thing you can say about this movement.'
  ]
},
{
  type: 'artwork',
  src: 'img/warhol-marilyn-diptych.jpg',
  title: 'Marilyn Diptych',
  caption: 'Andy Warhol, <i>Marilyn Diptych</i>, 1962',
  ask: 'Fifty identical faces. Why repeat her at all?',
  points: [
    'One publicity photograph, printed fifty times by {{silkscreen}}.',
    'On the left, colour. On the right, black and white, fading out.',
    'Marilyn Monroe had died a few weeks before he made it.',
    'Repeating a face until it means nothing — that is what fame does, and what printing does.'
  ],
  notes: [
    'ASK and let them answer before you give the reading.',
    'She died in August 1962; Warhol began the series that month. The image is a publicity still for the film Niagara — already not really her.',
    'The right-hand panel fading is usually read as death, or as an image wearing out from overuse. Both readings are standard.',
    'Note the technique: he did not paint her. He printed her, and let the printing go wrong.'
  ]
},
{
  type: 'artwork',
  src: 'img/lichtenstein-masterpiece.jpg',
  title: 'Masterpiece',
  caption: 'Roy Lichtenstein, <i>Masterpiece</i>, 1962',
  ask: 'Read the speech bubble. Is he joking?',
  points: [
    'A frame from a romance comic, blown up to the size of a history painting.',
    '“Why, Brad darling, this painting is a masterpiece! My, soon you’ll have all of New York clamoring for your work!”',
    'The {{bendaydots}} are the giveaway — cheap printing, enlarged.',
    'And he painted every dot by hand.'
  ],
  notes: [
    'ASK — the joke lands quickly. He is painting a comic about an artist becoming famous, in the year he became famous.',
    'The crucial fact: those dots are printed in a real comic. Lichtenstein painted them, one at a time, with a stencil. So a mechanical look is produced by very slow handwork.',
    'Some critics call him a “Closet Classicist” — under the comic surface he is solving old painting problems of composition and colour. That is the second discussion question.'
  ]
},

/* ===== PART 3 — IS THIS ART? ===== */
{
  type: 'section',
  title: 'Group discussion',
  sub: 'Is this art?',
  notes: [
    'Fifteen minutes. Groups of five or six.',
    'STEP 1, two minutes: give each group one ordinary object — a soup can, a comic-book page, a soap box, a flattened cardboard carton. Ask “is this, right now, a work of art?” and take a quick show of hands.',
    'IMPORTANT: do not mention Warhol or the Brillo Box. The reveal comes two slides later.'
  ]
},
{
  type: 'activity',
  title: 'Is this art?',
  zh: '這是藝術嗎？',
  minutes: 6,
  instructions: [
    'You have one ordinary object. Groups of five or six.',
    'Six minutes, then one sentence back to the class.'
  ],
  questions: [
    '<b>Baseline.</b> What makes your group say yes or no? Is it how it looks, what it is made of, who made it — or something else?',
    '<b>Change the conditions.</b> What is the <i>smallest</i> change that would make you change your answer? A label? A gallery? A famous name? Is putting it in a museum enough on its own?',
    '<b>Predict.</b> Imagine an artist in 1962 who wants to make a point about exactly this. What do they <i>do</i> with an object like yours — and where do they show it? Draw it, or describe it.'
  ],
  notes: [
    'Reveal the three questions one at a time.',
    'The third is the prediction task and the heart of it. Let them sketch.',
    'STEP 3, four minutes: one sentence per group. Respond “interesting” or “you’re close” and do NOT confirm. Keep the suspense.',
    'STEP 4: do not announce the answer. Say “let’s see what one artist actually did” and go straight to the Brillo Box.',
    'NOTE: the lesson plan’s activity design says to run this before the Pop Art lecture, but her slide deck places it here, after it. The deck order works — students now have Warhol’s and Lichtenstein’s methods in mind, and the Brillo Box still lands as the reveal.'
  ]
},

/* ===== PART 4 — THE BRILLO BOX ===== */
{
  type: 'bullets',
  title: 'Where this comes from',
  zh: '源頭',
  items: [
    { head: 'Pop Art’s collage and {{appropriation}} go back to Dada', body: 'The cut-and-paste tradition you met in Week 3.' },
    { head: 'And to Duchamp’s {{readymade}}', body: 'Choose an object. Show it. It becomes art.' },
    { head: 'This same thread runs on', body: 'Into {{neodada}} and {{assemblage}}, later today.' }
  ],
  notes: [
    'One minute. This is a signpost slide, not a teaching slide.',
    'Remind them of Fountain, 1917. Then say: forty-five years later, somebody does it again — and this time the object is not even chosen, it is <i>rebuilt</i>.'
  ]
},
{
  type: 'artwork',
  src: 'img/warhol-brillo-box.jpg',
  title: 'Brillo Box',
  caption: 'Andy Warhol, <i>Brillo Box</i>, 1964 — plywood boxes, silkscreened',
  ask: 'One of these is in a museum. One is in a supermarket. Can you see the difference?',
  points: [
    'These are not real cartons. Warhol had them built in plywood and printed the design onto them.',
    'So it is a handmade copy of a mass-produced thing — the opposite way round from usual.',
    'Put next to a real Brillo carton, you cannot tell them apart.',
    'And yet one is worth millions and the other is rubbish.'
  ],
  notes: [
    'THIS IS THE REVEAL. Arrive here directly from the activity, saying only “let’s see what one artist actually did.”',
    'Hold up the real soap-pad box from the front desk now, if you brought one.',
    'The key fact students always miss: these are NOT found boxes. They are plywood, made by hand, printed to look mass-produced. Say it twice.',
    'ASK and let the room work on it. There is no visible difference — that is the whole problem, and it is the next six slides.'
  ]
},
{
  type: 'bullets',
  title: 'Beauty is no longer the test',
  zh: '美不再是判準',
  kicker: '01 of 06',
  items: [
    { head: 'Art used to be assumed to have some visible quality', body: 'Some form or beauty you could point at.' },
    { head: 'The Brillo Box has none', body: 'It is no more beautiful, and no more distinctive, than a supermarket carton.' },
    { head: 'So “art = something you can detect by looking” is finished' },
    { head: 'The question is no longer “is it well made?”', body: 'It is: what makes anything art at all? And the answer moves to theory, context and art history.' }
  ],
  notes: [
    'Six numbered consequences. Go through them briskly — one or two minutes each at most.',
    'This first one is the deepest. For two thousand years, you could in principle tell art by looking. After 1964 you cannot.'
  ]
},
{
  type: 'bullets',
  title: 'Danto’s “end of art”',
  zh: '丹托的「藝術終結」',
  kicker: '02 of 06',
  items: [
    { head: 'You met Arthur Danto in Week 2', body: 'And here is the object that made him say it.' },
    { head: 'Art history had been a story of progress', body: 'Realism → Impressionism → Cubism → abstraction. Each step led somewhere.' },
    { head: 'Once anything can be art, there is no necessary next step', body: 'The direction disappears.' },
    { head: 'So art becomes “post-historical”', body: 'Plural, with no single story. Exactly what you learned in Week 2 — this is where it came from.' }
  ],
  notes: [
    'Say the Week 2 link out loud. They already know Danto’s conclusion; now they see the object that produced it.',
    'Remind them: the end of ART HISTORY, not the end of art. Same careful distinction as Belting.',
    'Danto saw the Brillo Boxes at the Stable Gallery in 1964 and wrote “The Artworld” the same year.'
  ]
},
{
  type: 'quote',
  title: 'The Artworld',
  zh: '藝術界',
  lead: 'Arthur Danto, 1964',
  quote: '“To see something as art requires something the eye cannot decry — an atmosphere of artistic theory, a knowledge of the history of art: an artworld.”',
  cite: 'Arthur Danto, “The Artworld”, <i>The Journal of Philosophy</i>, Vol. 61, No. 19, 15 October 1964, pp. 571–584',
  plain: [
    'The eye cannot see it. Looking is not enough.',
    'You need theory — an idea of what art is doing.',
    'And you need history — you have to know what came before.',
    'Together those make {{artworld}}. That is what turns an object into art.'
  ],
  notes: [
    'This is Quiz Question 2, and it is the sentence of the day. Write “artworld” on the board.',
    'Read the plain version aloud, not the original.',
    'Then close the activity loop explicitly: this is the vocabulary for what they were already arguing about twenty minutes ago. They found the problem themselves; Danto just named it.'
  ]
},
{
  type: 'bullets',
  title: '{{appropriation}} — and who the author is',
  zh: '挪用與作者身分',
  kicker: '03 of 06',
  items: [
    { head: 'Warhol took an existing design', body: 'The Brillo carton was designed by a commercial artist called James Harvey.' },
    { head: 'So who made the artwork?', body: 'Harvey drew it. Warhol chose it. A carpenter built the boxes.' },
    { head: 'This becomes the central question of the 1980s', body: 'Appropriation Art — Sherrie Levine, Richard Prince and others.' }
  ],
  notes: [
    'The James Harvey detail is a good one: he was himself an Abstract Expressionist painter who paid the rent doing commercial design. He designed the Brillo box.',
    'So an Abstract Expressionist designed the thing that ended Abstract Expressionism’s dominance. Students enjoy that.',
    'Harvey was reportedly amused rather than angry.'
  ]
},
{
  type: 'bullets',
  title: 'Artwork, or product?',
  zh: '作品，還是商品？',
  kicker: '04 of 06',
  items: [
    { head: 'The Brillo Box puts both under one appearance', body: 'Artwork and mass-produced commodity, identical.' },
    { head: 'And art was entering market logic anyway', body: 'The gallery system: collectible, tradable, priced, produced in editions.' },
    { head: 'It predicted where the art market went next', body: 'Art as commodity — which is now completely normal.' }
  ],
  ask: 'Is there still a clear line between art and commodity today?',
  notes: [
    'ASK the question on screen and take two or three answers only — the long version is the wrap-up discussion.',
    'You can point back to Week 4: Newman’s blue canvas selling for forty-three million dollars. Same question, one week earlier.'
  ]
},
{
  type: 'bullets',
  title: 'A door into {{conceptual}}',
  zh: '通往觀念藝術',
  kicker: '05 of 06',
  items: [
    { head: 'If looking cannot tell you, then the idea is what matters' },
    { head: 'The concept itself can be the whole work' },
    { head: 'This opens the way to Conceptual Art in the late 1960s', body: 'Sol LeWitt, Joseph Kosuth and others.' },
    { head: 'Their claim', body: '“The concept of the art is itself the work.”' }
  ],
  notes: [
    'Short slide. It is a signpost forward — Conceptual Art is coming in a later week.',
    'Link it back to Duchamp in Week 3: anti-retinal, art for the mind. The line runs 1917 → 1964 → 1968.'
  ]
},
{
  type: 'bullets',
  title: '{{institutional}}',
  zh: '藝術的體制理論',
  kicker: '06 of 06',
  items: [
    { head: 'An object becomes art because the artworld says so', body: 'Museums, critics, and the community of artists confer that status together.' },
    { head: 'So the definition of art is not only philosophical', body: 'It is sociological and institutional too.' },
    { head: 'Which is uncomfortable', body: 'It means art is partly decided by who has authority.' }
  ],
  notes: [
    'This is Week 4’s “Who gets to write art history?” discussion, arriving as formal theory.',
    'Say that link — they argued this out loud last week without the vocabulary. Now they have it.',
    'Do not resolve the discomfort. It is a real objection to the theory, not a flaw in your teaching.'
  ]
},

/* ===== PART 5 — OLDENBURG ===== */
{
  type: 'section',
  title: 'Claes Oldenburg',
  sub: 'An art that does not know it is art.',
  notes: ['Five or six minutes. Then straight into Assemblage.']
},
{
  type: 'bullets',
  title: 'Oldenburg’s three ideas',
  zh: '歐登伯格的三個主張',
  items: [
    { head: '“I Am for an Art”, 1961', body: 'His manifesto. Art should “not know it is art”. Start from zero. Take on the mess and roughness of ordinary life.' },
    { head: '{{softsculpture}}', body: 'Canvas and vinyl instead of marble and bronze — so the sculpture sags and changes shape. It challenges the idea that sculpture must be hard and permanent.' },
    { head: 'Transform, don’t copy', body: 'The work keeps changing as you look at it — an endless visual conversation with the viewer.' }
  ],
  notes: [
    'The manifesto line is the third discussion question at the end of class: an art that does not know it is art.',
    'Contrast with Rauschenberg and Johns coming up — they rework the frame of art from inside. Oldenburg wants to start outside it altogether.',
    'He credited Pollock: Pollock treated paint as a material, so Oldenburg treated objects as material.'
  ]
},
{
  type: 'artwork',
  src: 'img/oldenburg-soft-toilet.jpg',
  title: 'Soft Toilet',
  caption: 'Claes Oldenburg, <i>Soft Toilet</i>, 1966 — vinyl, kapok and plexiglass',
  ask: 'A toilet in a gallery. Where have you seen that before?',
  points: [
    'Vinyl and stuffing, not porcelain.',
    'It cannot stand up properly. It slumps.',
    'A hard, cold, functional object made soft and helpless.',
    'And of course: Duchamp put a urinal in a gallery in 1917.'
  ],
  notes: [
    'ASK — they should get Fountain immediately. If they do, that is Week 3 doing its job.',
    'The difference is the point: Duchamp took a real one. Oldenburg makes a fake one, in the wrong material.',
    'Soft sculpture is Quiz Question 3.'
  ]
},
{
  type: 'artwork',
  src: 'img/oldenburg-shoestring-potatoes.jpg',
  title: 'Shoestring Potatoes Spilling from a Bag',
  caption: 'Claes Oldenburg, 1966 — canvas, kapok, glue and paint',
  smallSource: true,
  points: [
    'Chips falling out of a paper bag — three metres tall.',
    'A moment that lasts half a second, frozen and made monumental.',
    'Sculpture is supposed to be heroes and gods on plinths.',
    'This is fast food, falling on the floor.'
  ],
  notes: [
    'Scale is the joke. Traditional sculpture makes small important things big. He makes trivial things big and leaves them trivial.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  src: 'img/oldenburg-soft-sculpture-guggenheim.jpg',
  title: 'Soft sculpture, full size',
  caption: 'A large Oldenburg soft sculpture hanging in the rotunda of the Guggenheim Museum, New York',
  points: [
    'Look at the people at the bottom for scale.',
    'It hangs. It has no plinth and no fixed shape.',
    'Gravity is doing part of the work — as it did for Pollock.',
    'Sculpture that cannot hold itself up.'
  ],
  notes: [
    'The gravity link to Pollock is worth making — Oldenburg said Pollock’s treatment of paint as material inspired his treatment of objects.',
    'NOTE: this is very likely Soft Shuttlecock, 1995, from his Guggenheim retrospective, but the source slide gives no title — so it is captioned generically. Confirm the title if you want it on screen.'
  ]
},
{
  type: 'compare',
  title: 'The Store, 1961',
  ask: 'He rented a real shop and sold his sculptures in it. Is that a gallery, or a business?',
  left:  { src: 'img/oldenburg-store-poster.jpg', label: 'The poster: <i>Ray-Gun Mfg. Co. — The Store by Claes Oldenburg</i>, 107 E. 2nd St., December 1961', tag: 'The poster' },
  right: { src: 'img/oldenburg-pastry-case.jpg', label: '<i>Pastry Case, I</i>, 1961–62 — painted plaster in a glass display case', tag: 'The goods' },
  reveal: [
    { side: 'left', text: 'A real shopfront on East 2nd Street, open Friday to Sunday, one to six. Printed like an ordinary trade advertisement.' },
    { side: 'right', text: 'And the goods: cakes and food, made in rough painted plaster, laid out in a real display case.' },
    { side: 'right', text: 'You could walk in off the street and buy one. No gallery, no opening, no critic.' }
  ],
  notes: [
    'ASK first, then click through.',
    'This is the manifesto in practice: an art that does not know it is art. It is not <i>about</i> shops — it <i>is</i> a shop.',
    'Note the poster’s language: “Mfg. Co.”, opening hours, an address. Nothing signals art.',
    'Compare with the Brillo Box: Warhol brings the supermarket into the gallery. Oldenburg leaves the gallery and opens a shop. Opposite directions, same question.'
  ]
},
{
  type: 'artwork',
  src: 'img/oldenburg-the-store.jpg',
  title: 'Inside The Store',
  caption: 'Claes Oldenburg, <i>The Store</i>, 1961 — installation view',
  points: [
    'Objects crowded on shelves, hung on walls, piled up.',
    'Rough, bright, dripping plaster — nothing neat.',
    'It looks like a cheap shop, because it was one.',
    'And people came in and bought things.'
  ],
  notes: [
    'The roughness is deliberate: “embracing the messiness and roughness of everyday life”.',
    'This connects forward to installation and performance work in later weeks.'
  ]
},

/* ===== PART 6 — ASSEMBLAGE ===== */
{
  type: 'section',
  title: '{{assemblage}}',
  sub: 'A technique, not a style.',
  notes: [
    'Say the subtitle twice — it is the core idea and a learning objective.',
    'Ten minutes for Assemblage and Rauschenberg together.'
  ]
},
{
  type: 'artwork',
  src: 'img/dubuffet-portrait-dhomme.jpg',
  title: 'Where the word comes from',
  caption: 'Jean Dubuffet, <i>Portrait d’Homme</i>, 1957',
  smallSource: true,
  points: [
    'Jean Dubuffet — you met him last week, in Art Informel.',
    'He coined the word “assemblage” in 1953, for collages made of butterfly wings.',
    'The roots go back further: Picasso and Braque’s <i>Guitar</i>, 1912.',
    'And to Dada readymades, Futurism and Surrealism.',
    'The 1961 exhibition <i>The Art of Assemblage</i> at MoMA made the word famous.'
  ],
  notes: [
    'The Picasso link is Quiz Question 6: the 1912 Guitar is named as the primary root.',
    'Note the pattern again — a word coined by an artist, then made famous by a museum exhibition. Week 4’s discussion, still running.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'bullets',
  title: 'What {{assemblage}} is',
  zh: '集合藝術是什麼',
  items: [
    { head: 'Definition', body: 'Made from {{foundobject}}s, materials and fragments that were never meant to be art materials.' },
    { head: 'The attitude', body: 'Use real, non-art things — even rubbish. Prefer the everyday. Take a subversive stance toward official culture.' },
    { head: 'Key artists', body: 'Cornell · Duchamp · Man Ray · Schwitters · Rauschenberg · Nevelson' },
    { head: 'The core idea', body: 'Assemblage is a <b>technique</b>, not a style. Anyone can use it, for any purpose.' }
  ],
  notes: [
    'Schwitters and his Merzbau were Week 3. Duchamp and Man Ray too. Say so — this is the same thread, forty years on.',
    'The technique-not-a-style point is the learning objective. Test it: ask what the difference is between Assemblage and Neo-Dada. Answer coming in a few slides.'
  ]
},
{
  type: 'artwork',
  src: 'img/rauschenberg-roci-chile.jpg',
  title: 'Robert Rauschenberg',
  caption: 'Robert Rauschenberg, <i>Caryatid Cavalcade I / ROCI CHILE</i>, 1985',
  points: [
    'Photographs, printed fabric and paint, all on one surface.',
    'Nothing is hidden. You can see every join.',
    'He did not choose between painting and collage. He used both.',
    'And he worked all over the world — this one came out of a project in Chile.'
  ],
  notes: [
    'A late work, so it shows the method after thirty years of practice.',
    'ROCI was his own travelling project: he worked in one country after another, using local materials and images.'
  ]
},
{
  type: 'bullets',
  title: 'Rauschenberg — the {{combine}}',
  zh: '勞森伯格：複合繪畫',
  items: [
    { head: '“Act in the gap between art and life”', body: 'His own statement, 1959. It is the sentence of this whole week.' },
    { head: '{{combine}} — his most important contribution', body: 'Works that are painting and sculpture at once. Key works: <i>Canyon</i> and <i>Monogram</i>.' },
    { head: 'Influenced by Duchamp, Cornell and Schwitters', body: 'And a partner and collaborator of Jasper Johns — both were called {{neodada}}.' },
    { head: '1962 — Warhol taught him {{silkscreen}}', body: 'A direct link between Assemblage and Pop Art.' },
    { head: 'And he worked across art forms', body: 'Stage and dance design with Merce Cunningham and John Cage.' }
  ],
  notes: [
    'Write “act in the gap between art and life” on the board. It answers this week’s guiding question in seven words.',
    'The Warhol connection in 1962 is worth naming: these movements are not separate boxes. They were friends who taught each other techniques.'
  ]
},
{
  type: 'artwork',
  src: 'img/rauschenberg-canyon.jpg',
  title: 'Canyon',
  caption: 'Robert Rauschenberg, <i>Canyon</i>, 1959 — oil, paper, metal, photographs, and a stuffed bald eagle',
  ask: 'Is this a painting? Is it a sculpture? Does the question matter?',
  points: [
    'Paint and paper on the surface — like a painting.',
    'A stuffed bald eagle sticking out into the room — like a sculpture.',
    'A pillow hanging beneath it on a string.',
    'It refuses to be either one. That is what a {{combine}} is.'
  ],
  notes: [
    'ASK and let it run for a moment.',
    'A real story worth telling: because the eagle is a protected species, Canyon legally cannot be sold in the United States. It was valued at zero dollars, and then the tax authorities valued it at 65 million. The family donated it to MoMA.',
    'So a law about birds ended up deciding what an artwork is worth. That is the institutional question again, from an unexpected direction.'
  ]
},
{
  type: 'artwork',
  src: 'img/rauschenberg-monogram.jpg',
  title: 'Monogram',
  caption: 'Robert Rauschenberg, <i>Monogram</i>, 1955–59 — a stuffed angora goat with a car tyre, on a painted horizontal canvas',
  ask: 'The canvas is on the floor and the goat is standing on it. What has happened to painting?',
  points: [
    'A stuffed goat, with a car tyre around its middle.',
    'Standing on a painted canvas — which is lying flat, like a floor.',
    'He worked on it for four years and rebuilt it three times.',
    'The picture has stopped being a window on a wall. It is a surface you can put things on.'
  ],
  notes: [
    'ASK and wait. The intended answer: the canvas has become furniture, or ground.',
    'Link straight back to Pollock last week — he put the canvas on the floor to paint it. Rauschenberg leaves it there and stands a goat on it.',
    'That comparison makes the whole Assemblage idea land in one image.'
  ]
},
{
  type: 'section',
  title: 'Rauschenberg is a bridge.',
  sub: '{{assemblage}} · {{popart}} · and early {{conceptual}} — all running through one studio.',
  notes: [
    'One beat. Then Neo-Dada.',
    'Say why he matters structurally: he connects the movement we just did, the movement we are in, and the one coming later.'
  ]
},

/* ===== PART 7 — NEO-DADA ===== */
{
  type: 'bullets',
  title: '{{neodada}}',
  zh: '新達達',
  items: [
    { head: 'The term appears in Artnews, January 1958', body: 'Describing Johns, Rauschenberg and Kaprow.' },
    { head: 'Duchamp was living in New York at the time', body: 'Still there, still influencing people. This is not a revival from books.' },
    { head: 'Two strands', body: 'Rauschenberg: rubbish and {{foundobject}}s — recalling Duchamp and Schwitters. Johns: targets, numbers, flags — a Dada-like ambiguity.' },
    { head: 'The core stance', body: 'It keeps Dada’s critical spirit, but it still builds new aesthetic ideas. It does not only say no.' }
  ],
  notes: [
    'This is the distinction the learning objectives ask for. Say it clearly:',
    'ASSEMBLAGE is a technique — combining found materials. NEO-DADA is a critical stance — reviving Dada’s attitude using banal subject matter.',
    'A work can be both. Rauschenberg’s Combines are Assemblage in technique and Neo-Dada in attitude.',
    'And the difference from real Dada: Dada wanted to destroy the definition of art. Neo-Dada questions it and then builds something.'
  ]
},
{
  type: 'compare',
  title: 'Jasper Johns',
  ask: 'Both of these are things you already know by heart. Why paint them?',
  left:  { src: 'img/johns-numbers.jpg', label: 'Jasper Johns, <i>Numbers in Color</i>, 1958–59', tag: 'Numbers' },
  right: { src: 'img/johns-target.jpg', label: 'Jasper Johns, <i>Target with Plaster Casts</i>, 1955', tag: 'Target' },
  reveal: [
    { side: 'left',  text: 'Numbers nobody needs to read. Because you already know them, you stop reading and start looking at the paint.' },
    { side: 'right', text: 'A target is already flat, already a picture of nothing. So the painting cannot pretend to be a window.' },
    { side: 'right', text: 'And above it: little boxes with body parts cast in plaster. The familiar thing turns strange.' }
  ],
  notes: [
    'ASK, then click through.',
    'The strategy: choose subjects the mind already knows completely, so there is nothing left to work out. Then all the attention falls on the object and the paint.',
    'Look at the surface in both — thick, waxy encaustic, with every brushmark visible. He is a very physical painter hiding behind a flat sign.',
    'This is Quiz Question 5.'
  ]
},
{
  type: 'bullets',
  title: 'Johns’s strategy',
  zh: '瓊斯的策略',
  items: [
    { head: 'He paints “things the mind already knows”', body: 'Flags. Targets. Numbers. Maps.' },
    { head: 'A simple chain', body: 'Subject → object → perception → painting → image.' },
    { head: 'And every stage matters equally', body: 'None of them is more important than another.' },
    { head: 'So the real question is', body: 'What is the relationship between an image and reality?' }
  ],
  notes: [
    'The chain is worth drawing on the board as five words with arrows.',
    'The point of saying every stage matters equally: he refuses to say the idea is more important than the paint, or the other way round.',
    'Compare with Magritte in Week 3 — “this is not a pipe”. Johns is asking the same question with a flag: is it a flag, or a painting of a flag? He never answers.'
  ]
},
{
  type: 'artwork',
  src: 'img/johns-three-flags.jpg',
  title: 'Three Flags',
  caption: 'Jasper Johns, <i>Three Flags</i>, 1958 — encaustic on canvas',
  ask: 'Is this a flag, or a painting of a flag?',
  points: [
    'Three canvases, each smaller than the last, stacked forward toward you.',
    'So the painting sticks out into the room — it is an object as much as a picture.',
    'A flag is already flat and already an image. Painting it changes nothing about its shape.',
    'Which means the usual difference between a picture and the thing it shows collapses.'
  ],
  notes: [
    'ASK and let them argue. There is no answer, which is the answer.',
    'The stacking is the clever move: it turns a flat sign into a physical object projecting toward the viewer.',
    'Johns was asked once how he chose his subjects. He said things the mind already knows — that gave him room to work on other levels.'
  ]
},

/* ===== PART 8 — TAIWAN NEO-DADA ===== */
{
  type: 'section',
  title: 'Taiwan {{neodada}}',
  sub: '梅丁衍　Mei Dean-E',
  notes: [
    'Twenty minutes in the schedule for the screening. See the warning on the next slide about the timing.',
    'This is the part of the course that comes home. Give it energy.'
  ]
},
{
  type: 'artwork',
  src: 'img/mei-dean-e-god-bless-china.jpg',
  title: '天佑中華',
  caption: '梅丁衍 Mei Dean-E, <i>天佑中華</i> (God Bless China), 2018',
  ask: 'Look carefully. How many flags are in this one flag?',
  points: [
    'The stars and stripes of the United States.',
    'And inside them, the white sun of the Republic of China flag.',
    'The two are cut into each other so neither is complete.',
    'Johns painted a flag to ask what an image is. Mei cuts two together to ask who you are.'
  ],
  notes: [
    'ASK and give them time — Taiwanese students will read this instantly and have a lot to say.',
    'Mei Dean-E, born 1954. Trained in New York — MFA, Pratt Institute, 1985 — and directly influenced by Duchamp and Dada.',
    'He returned to Taiwan in 1992 and turned Neo-Dada methods — appropriation, wordplay, recontextualised found and historical objects — onto Taiwanese identity, cross-strait politics, and diplomatic isolation.',
    'He is often called the father of Taiwanese Dada.',
    'The direct comparison with Johns is the teaching point: same strategy, completely different stakes. Johns chose the flag because it was empty of meaning. Mei chose it because it is overloaded with meaning.'
  ]
},
{
  type: 'activity',
  title: 'Documentary',
  zh: '紀錄片',
  minutes: 20,
  instructions: [
    'Excerpts from Huang Ming-Chuan’s documentary',
    '《梅丁衍—辣辣國族》 “Mei Dean-E: Hot and Spicy Nationality”'
  ],
  questions: [
    'How does Mei use {{foundobject}}s and appropriated flat images — the strategies of Rauschenberg and Johns?',
    'What changes when those strategies are pointed at Taiwanese politics and history instead of American ones?',
    'Johns said he chose things “the mind already knows”. In Taiwan, what does the mind already know — and is that the same kind of knowing?'
  ],
  notes: [
    'TIMING WARNING: the schedule gives this segment twenty minutes total, but the plan describes about twenty minutes of screening PLUS about ten minutes of discussion. That is thirty. Either cut the excerpts to ten minutes, or accept that the session runs ten minutes over. Decide before class.',
    'The timer on screen is set to twenty minutes for the screening. Reset it for the discussion.',
    'Mei’s ongoing series responding to Taiwan’s lost diplomatic allies is romanised in the lesson plan as “Ai-Dun-Di-Ti” — a phonetic play on the English word “identity”.',
    'NOTE: the Chinese characters given in the lesson plan for that title appear garbled. The commonly published form is 《哀敦砥悌》. Please confirm before putting it on screen — it is deliberately left out of the slide.',
    'The three questions on screen are for the discussion after the film.'
  ]
},

/* ===== PART 9 — WRAP-UP AND QUIZ ===== */
{
  type: 'break',
  title: 'Where today went',
  zh: '今天的路線',
  chain: ['a magazine cutting', 'a lollipop', 'a film star', 'a comic frame', 'a soap box', 'a shop', 'a goat', 'a flag'],
  chainLabel: 'Eight ordinary things — and every one of them ended up in a museum.',
  after: {
    label: 'And the line kept moving.',
    items: [
      'Pop Art brought the shop into the gallery.',
      'Oldenburg left the gallery and opened a shop.',
      '{{assemblage}} put real rubbish into the picture.',
      'And {{artworld}} explained why any of it counts.'
    ]
  },
  notes: [
    'Ten minutes for wrap-up and preview.',
    'Read the chain out loud. It is the whole session in eight objects.',
    'The summary sentence: nothing in the object changed. What changed was where it stood, what was said about it, and who agreed.',
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
    'Danto said the Brillo Box became art through theory and art history, even though it looked exactly like the shop version. If two things look identical, can theory and context <b>alone</b> make one of them art — or does something in the object still matter?',
    'Warhol and Lichtenstein both borrowed printing techniques. But Lichtenstein is called a “Closet Classicist”, still solving painting’s old problems, while Warhol embraced the logic of the machine. Does the artist’s <b>attitude</b> change the meaning — or does using the same technique make the results the same?',
    'Oldenburg wanted an art that does not “know it is art”, starting from zero. Rauschenberg and Johns stayed inside the history of painting and reworked it. Is refusing the frame more radical than changing it from within — or just different?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2. The fuller wording is in the plan.',
    'Question 1 is the best opener and connects straight to the object activity they did earlier.',
    'Question 3 is the hardest. If you have time for only one, use it — it sets Oldenburg against Rauschenberg and Johns, which is the shape of the second half of today.'
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
  type: 'quiz', n: 1, answer: 1,
  q: 'What was the significance of Richard Hamilton’s 1956 collage <i>Just what is it that makes today’s homes so different, so appealing?</i>',
  options: [
    'It was the first work to use industrial {{silkscreen}} as a fine-art medium.',
    'It established the visual vocabulary of {{popart}}, using mass-media and consumer imagery.',
    'It was the first artwork to physically use the word “POP” in the composition.',
    'It introduced {{bendaydots}} to high-art circles.'
  ],
  why: 'The magazine-cutting living room. Option C is Paolozzi’s 1947 collage — nine years earlier.',
  notes: [
    'Answer: B.',
    'Option C is the good distractor: the word POP does appear on Hamilton’s lollipop, but the <i>first</i> appearance was Paolozzi in 1947. If several pick C, go back to that slide.'
  ]
},
{
  type: 'quiz', n: 2, answer: 3,
  q: 'According to Danto’s {{artworld}} theory, what mainly allows something like Warhol’s Brillo Box to be recognised as art?',
  options: [
    'The artist’s physical signature and personal touch on the material.',
    'The beauty and unique craftsmanship of the object.',
    'The use of rare or non-commercial materials.',
    'A knowledge of art history, an atmosphere of theory, and an institutional context.'
  ],
  why: 'Something the eye cannot see. Looking is not enough — you need theory, history and institutions.',
  notes: ['Answer: D. Options A and B are exactly what Danto says is no longer sufficient.']
},
{
  type: 'quiz', n: 3, answer: 2,
  q: 'Which best defines {{softsculpture}}, as pioneered by Claes Oldenburg?',
  options: [
    'Abstract carvings made from soft woods or minerals.',
    'Sculptures made of clay or wax, later cast in bronze.',
    'Pliable materials like canvas or vinyl that sag and change shape under gravity.',
    'Artworks that use optical illusions to appear as though they are melting.'
  ],
  why: 'The Soft Toilet. It slumps because gravity is part of the work.',
  notes: ['Answer: C. Option D is a good distractor — Dalí’s melting clocks only <i>look</i> soft.']
},
{
  type: 'quiz', n: 4, answer: 0,
  q: 'What makes Rauschenberg’s {{combine}}s different from traditional painting and sculpture?',
  options: [
    'They put {{foundobject}}s directly into the space of painting and sculpture.',
    'They are purely digital works appropriating images from the internet.',
    'They use only materials found in nature, such as wood and stone.',
    'They rely only on industrial {{silkscreen}} to avoid the artist’s hand.'
  ],
  why: 'A stuffed goat with a tyre, standing on a painted canvas. Painting and sculpture at the same time.',
  notes: ['Answer: A. Remember Monogram and Canyon.']
},
{
  type: 'quiz', n: 5, answer: 1,
  q: 'Why did Jasper Johns choose flags, targets and numbers as subjects?',
  options: [
    'He wanted to celebrate American nationalism and political history directly.',
    'They were things the mind already knows, so he could focus on how they were painted as objects.',
    'He was commissioned by the government to design new public spaces.',
    'They were the only found objects available to him early in his career.'
  ],
  why: 'Nothing left to work out in the subject — so all the attention falls on the paint and the object.',
  notes: [
    'Answer: B.',
    'Option A is the tempting wrong answer, and it is a useful mistake: Johns is deliberately neutral about the flag. Mei Dean-E is not. That contrast is worth naming again here.'
  ]
},
{
  type: 'quiz', n: 6, answer: 3,
  q: 'Which early twentieth-century work is named as the primary root of {{assemblage}}?',
  options: [
    'The Impressionist focus on light and atmosphere.',
    'Jackson Pollock’s drip technique.',
    'The Hudson River School’s detailed landscape realism.',
    'Picasso and Braque’s 1912 construction <i>Guitar</i>.'
  ],
  why: 'Cardboard, string and wire, built out into space — before anyone had a word for it.',
  notes: ['Answer: D. Dubuffet coined the word in 1953, but the practice starts with Guitar in 1912.']
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['popart', 'massculture', 'artworld', 'silkscreen', 'bendaydots', 'foundobject', 'assemblage', 'neodada', 'combine', 'softsculpture', 'appropriation', 'institutional'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
