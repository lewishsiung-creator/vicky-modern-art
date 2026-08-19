/* ------------------------------------------------------------------
   Week 8 — Anti-Form
   When process replaces the finished work

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- Process Art --- */
  antiform: {
    en: 'Anti-Form', zh: '反形式',
    def: 'Robert Morris’s term, 1968: the material’s own behaviour and the process acting on it should decide the shape — not a plan made in advance.',
    zhDef: '莫里斯 1968 年提出：作品的形狀應由材料自身的性質與作用其上的過程決定，而非事先擬定的計畫。'
  },
  processart: {
    en: 'Process Art', zh: '過程藝術',
    def: 'Art where the making <i>is</i> the work. Gathering, pouring, hanging and dropping become the real subject.',
    zhDef: '以「製作過程本身」為作品的藝術。蒐集、傾倒、懸掛與落下成為真正的主題。'
  },
  postminimalism: {
    en: 'Postminimalism', zh: '後極簡主義',
    def: 'The name a critic gave this trend in 1971. The 1969 exhibitions themselves never used the words “Process Art”.',
    zhDef: '1971 年由評論家為此趨勢命名。1969 年的那幾檔展覽本身從未使用「過程藝術」一詞。'
  },
  systemsart: {
    en: 'systems art', zh: '系統藝術',
    def: 'Haacke’s approach: set up a real system — natural, ecological or social — and let it run. The system produces the work.',
    zhDef: '哈克的作法：建立一個真實的系統（自然的、生態的或社會的），讓它自行運作，由系統生成作品。'
  },
  pours: {
    en: 'pours', zh: '傾倒',
    def: 'Lynda Benglis’s technique from the late 1960s: latex and foam poured straight onto the floor or wall. Painting becomes sculpture.',
    zhDef: '班格利斯 1960 年代末的技法：將乳膠與發泡材直接傾倒於地面或牆面。繪畫由此成為雕塑。'
  },
  institutional: {
    en: 'institutional critique', zh: '機構批判',
    def: 'Art that turns its questions onto the museum, the gallery or the market itself. Week 7.',
    zhDef: '將提問轉向美術館、畫廊或市場本身的藝術。第七週學過。'
  },

  /* --- Op Art --- */
  opart: {
    en: 'Op Art', zh: '歐普藝術',
    def: 'Optical Art. Named by <i>Time</i> magazine in 1964. Precisely calculated pattern and colour that make a flat, still surface seem to move.',
    zhDef: '光學藝術。1964 年由《時代》雜誌命名。以精密計算的圖案與色彩，使平坦靜止的畫面看似在動。'
  },
  retinalart: {
    en: 'retinal art', zh: '視網膜藝術',
    def: 'Another name for Op Art. It works on the physiology of the eye, not on emotion or subject matter.',
    zhDef: '歐普藝術的別稱。它作用於眼睛的生理機制，而非情感或題材。'
  },
  perceptualabstraction: {
    en: 'perceptual abstraction', zh: '知覺抽象',
    def: 'Op Art’s other name. The artist treats the picture as a scientific problem about seeing.',
    zhDef: '歐普藝術的另一名稱。藝術家將畫面視為關於「看」的科學問題。'
  },
  responsiveeye: {
    en: 'The Responsive Eye', zh: '反應之眼',
    def: 'The 1965 exhibition at MoMA, curated by William C. Seitz, that made Op Art famous. Over 180,000 people came.',
    zhDef: '1965 年由塞茲策劃的紐約現代美術館展覽，使歐普藝術聲名大噪，觀眾超過十八萬人次。'
  },

  /* --- Photorealism --- */
  photorealism: {
    en: 'Photorealism', zh: '照相寫實主義',
    def: 'Painting made from a photograph, transferred mechanically, until the finished surface looks like a photograph. Named by Louis K. Meisel in 1969.',
    zhDef: '以照片為本、經機械方式轉印，直到完成的畫面看似照片的繪畫。1969 年由邁澤爾命名。'
  },
  airbrush: {
    en: 'airbrush', zh: '噴筆',
    def: 'A tool that sprays paint in a fine mist, leaving no brush marks — so the surface can look as smooth as a print.',
    zhDef: '將顏料噴成細霧的工具，不留筆觸，使畫面平滑如印刷品。'
  },

  /* --- carried forward --- */
  minimalism: {
    en: 'Minimalism', zh: '極簡主義',
    def: 'Week 7. The fewest possible materials and forms, industrially made, with the artist’s hand removed.',
    zhDef: '第七週學過。使用最少的材料與形式，以工業方式製作，抹除藝術家的手。'
  },
  specificobject: {
    en: 'specific object', zh: '特定物件',
    def: 'Judd’s term: neither painting nor sculpture, but a literal thing in real space. Week 7.',
    zhDef: '賈德的用語：既非繪畫也非雕塑，而是真實空間中的物件。第七週學過。'
  }
};

const SECTIONS = [
  { title: '1 · Review & Activity',  zh: '複習與活動',   start: 0 },
  { title: '2 · Process Art',        zh: '過程藝術',     start: 10 },
  { title: '3 · Morris & Benglis',   zh: '莫里斯與班格利斯', start: 16 },
  { title: '4 · Hesse & Haacke',     zh: '黑塞與哈克',   start: 21 },
  { title: '5 · Op Art',             zh: '歐普藝術',     start: 27 },
  { title: '6 · Photorealism',       zh: '照相寫實主義', start: 32 },
  { title: '7 · Wrap-Up & Quiz',     zh: '總結與測驗',   start: 38 }
];

const SLIDES = [

/* ===== PART 1 — REVIEW AND ACTIVITY ===== */
{
  type: 'title',
  title: 'Anti-Form',
  sub: 'When process replaces the finished work.',
  meta: 'Week 8',
  notes: [
    'The first THIRTY minutes are review and the group activity. Do not start lecturing.',
    'HOOK, optional but good: the next slide shows a picture and asks whether it is a photograph. Do not answer. It pays off at 1:00, in the Photorealism section — her lesson plan calls this “the mystery image”.',
    'Then the visual recap, then the matching activity.'
  ]
},
{
  type: 'artwork',
  src: 'img/estes-telephone-booths.jpg',
  title: 'Before we start',
  caption: 'What is this?',
  ask: 'Photograph, or painting? Don’t answer out loud — just decide.',
  points: [
    'Look at the reflections in the glass.',
    'Look at how sharp the far distance is.',
    'Keep your answer to yourself.',
    'We will come back to this at the end.'
  ],
  notes: [
    'ADDED SLIDE: her lesson plan says “reveal the mystery image” in the Photorealism segment, but her deck had no earlier mystery slide. This is it, using her own Estes image.',
    'Do NOT name the artist and do NOT confirm anything. Say “keep your answer” and move on.',
    'If you would rather skip the hook, jump straight past this slide — the Photorealism section still works without it.',
    'It is a painting. Richard Estes, Telephone Booths, 1967. The reveal is slide 43.'
  ]
},
{
  type: 'bullets',
  title: 'Nine turns, in nine weeks',
  zh: '九次轉向',
  items: [
    { head: 'Cubist Collage', body: 'Everyday materials enter the picture. It asks: how do we know what we know?' },
    { head: 'Dada and Duchamp’s Readymade', body: 'Chance and absurdity attack reason. An ordinary object becomes art. It asks: what is real?' },
    { head: 'Surrealism', body: 'Automatism and dreams. It asks: what is inside the unconscious mind?' },
    { head: 'Abstract Expressionism', body: 'Pure medium, self-critique. It asks: what is the role of the artist?' },
    { head: 'Assemblage, Neo-Dada and Pop Art', body: 'Real objects, then commercial images. It asks: can everyday culture become art?' }
  ],
  notes: [
    'A quick visual recap before the activity — five minutes for this and the next slide together.',
    'Do not teach any of it again. You are only reminding them what question each movement raised.',
    'The activity that follows depends on them remembering the QUESTIONS, not the styles.'
  ]
},
{
  type: 'bullets',
  title: '…and the last four',
  zh: '……以及最後四次',
  items: [
    { head: 'Nouveau Réalisme', body: 'A “sociological realism” — real urban debris as material.' },
    { head: 'Happenings and Fluxus', body: 'The viewer becomes a participant. It asks: where is the boundary between art and life?' },
    { head: '{{minimalism}}', body: 'Material cut to the minimum. It asks: how little material does art need?' },
    { head: 'Beuys and Social Sculpture', body: 'Any material, action or social relation. It asks: what can art include?' },
    { head: 'Conceptual Art', body: 'Dematerialisation. It asks: does art need a physical object at all?' }
  ],
  notes: [
    'Then straight into the matching activity. Do not add commentary.',
    'Leave this slide up while they work if it helps — or use the jump menu to come back to it.'
  ]
},
{
  type: 'grid',
  title: 'Nine conceptual turns',
  zh: '九次觀念轉向',
  cols: 3,
  cells: [
    { label: '01', head: 'Epistemology', body: 'Cubist Collage' },
    { label: '02', head: 'Reality', body: 'Dada · the Readymade' },
    { label: '03', head: 'The unconscious', body: 'Surrealism' },
    { label: '04', head: 'The artist’s role', body: 'Abstract Expressionism' },
    { label: '05', head: 'Consumer society', body: 'Pop Art' },
    { label: '06', head: 'Art vs. life', body: 'Happenings · Fluxus' },
    { label: '07', head: 'Material minimised', body: '{{minimalism}}' },
    { label: '08', head: 'Expanded concept', body: 'Beuys · Social Sculpture' },
    { label: '09', head: 'Dematerialisation', body: 'Conceptual Art' }
  ],
  notes: [
    'The whole course so far, in nine words. Click through, or reveal them all at once.',
    'Leave it on screen during the activity if you can — it is the raw material for the timeline in Step 3.'
  ]
},
{
  type: 'section',
  title: 'Group discussion',
  sub: 'What changed in art?',
  notes: [
    'About twenty-five minutes. Groups of five or six.',
    'IMPORTANT: do not say the words “Process Art” at any point until the very end of Step 4. The whole design is that the class arrives at the word “process” themselves.'
  ]
},
{
  type: 'match',
  title: 'Step 1 — Concept matching',
  zh: '步驟一：概念配對',
  instructions: 'Six minutes. Match each movement to the question it raised. Not the style — the <b>question</b>.',
  pairs: [
    { a: 'Cubist Collage',             b: 'How do we know what we know?' },
    { a: 'Dada · the Readymade',       b: 'What is real?' },
    { a: 'Surrealism',                 b: 'What is inside our unconscious mind?' },
    { a: 'Abstract Expressionism',     b: 'What is the role of the artist?' },
    { a: 'Pop Art',                    b: 'Can everyday culture become art?' },
    { a: 'Happenings & Fluxus',        b: 'Where is the boundary between art and life?' },
    { a: '{{minimalism}}',             b: 'How little material does art need?' },
    { a: 'Beuys & Social Sculpture',   b: 'What can art include?' },
    { a: 'Conceptual Art',             b: 'Does art need a physical object?' }
  ],
  notes: [
    'Six minutes. Groups match on paper first — this board is for the share-out.',
    'Then let one group come to the screen and click their pairing. Clicking one card from each side pairs them and numbers them. Clicking a numbered card takes it back out.',
    'Nothing is judged while they work. When you press the arrow, the pairs that belong together stay bright and the rest fade — no marks, no score.',
    'TEACHER: the point is not the answers. It is that matching forces them to recall what each movement CHANGED, not what it looked like.'
  ]
},
{
  type: 'activity',
  title: 'Steps 2 and 3',
  zh: '步驟二與三',
  minutes: 11,
  instructions: [
    '<b>Step 2</b> — five minutes. Your group picks the ONE movement that changed the idea of art the most.',
    'Complete this: “Before ______, art was mainly ______. After ______, art could become ______.”',
    'Example: “Before Duchamp, artists usually <i>made</i> artworks. After Duchamp, artists could <i>choose</i> an everyday object.”'
  ],
  questions: [
    '<b>Step 3 — six minutes.</b> On the board: ART → ? → ? → ? → CONTEMPORARY ART. Each group puts its turning point on the line.',
    'Then, together: which came first? Which idea made the <b>next</b> idea possible?',
    'You are building a chain of causes, not a list of dates. For example: collage lets everyday <i>materials</i> in → Duchamp lets an everyday <i>object</i> in → Fluxus lets an everyday <i>action</i> in → Beuys lets <i>social life</i> in → Conceptual Art lets the object <i>go</i>.'
  ],
  notes: [
    'The sentence frame in Step 2 keeps the English simple while still demanding real reasoning. That is deliberate, and it suits an EMI class.',
    'Step 3 is the important one. Push them off chronology and onto causation: what made the next idea POSSIBLE?',
    'Write the chain on the board as they build it. You need it on the board for the next slide.'
  ]
},
{
  type: 'section',
  title: 'So — what is left to challenge?',
  ask: 'All nine turns are on the board. What has nobody attacked yet?',
  notes: [
    'STEP 4. Give them about one minute to guess, and do NOT name anything.',
    'If the activity has worked, you will hear words like: material, artist, object, making, time, control — and, with luck, process.',
    'When you hear it, or when the minute is up, go to the next slide.'
  ]
},
{
  type: 'word',
  word: 'PROCESS',
  notes: [
    'THE REVEAL. Only now say the words “Process Art”.',
    'Then read the guiding statement on the next slide.',
    'If a group said “process” themselves, name them. The whole design was to get the room to say it.'
  ]
},

/* ===== PART 2 — PROCESS ART ===== */
{
  type: 'section',
  title: 'Art focuses on how it is made,',
  sub: 'not just the final result.',
  notes: [
    'Twenty minutes for Process Art from here.',
    'This sentence is the guiding statement for the whole session. Write it on the board.'
  ]
},
{
  type: 'section',
  title: 'If Minimalism planned the object perfectly,',
  sub: 'what happens next?',
  ask: 'Somebody has to break it. Who — and how?',
  notes: [
    'The answer is: the person who invented it. Robert Morris turns against his own work.',
    'That is the surprise of this section, so set it up before you name him.'
  ]
},
{
  type: 'bullets',
  title: 'How {{processart}} appeared',
  zh: '過程藝術的出現',
  items: [
    { head: '1968 — the first show called “Antiform” opens in New York' },
    { head: '1968 — Robert Morris answers with his own show', body: '“9 at Leo Castelli”.' },
    { head: '1968 — and he writes the essay, “{{antiform}}”', body: 'In <i>Artforum</i>.' },
    { head: '1969 — three big exhibitions', body: 'In Switzerland, the United States and the Netherlands. <i>When Attitudes Become Form</i> and <i>Anti-Illusion: Procedures/Materials</i> are the two that matter.' },
    { head: '1971 — a critic names the trend “{{postminimalism}}”', body: 'Note: none of the exhibitions themselves used the words “Process Art”.' }
  ],
  notes: [
    'The last point is worth saying plainly: the movement was named afterwards, by critics, as usual.',
    'When Attitudes Become Form was curated by Harald Szeemann at the Kunsthalle Bern. Anti-Illusion was at the Whitney.',
    'Eva Hesse is in BOTH — she is the artist who connects them, and she is coming up.'
  ]
},
{
  type: 'bullets',
  title: 'Six core ideas',
  zh: '六個核心概念',
  items: [
    { head: 'Process', body: 'How you make it matters as much as the result.' },
    { head: 'Material', body: 'The material is not just a tool. It can decide the shape.' },
    { head: 'Gravity', body: 'Things can hang, fall, or pile up by themselves.' },
    { head: 'Chance', body: 'The artist does not control everything.' },
    { head: 'Time', body: 'The work can dry, melt, change — or disappear.' },
    { head: 'Action', body: 'Pouring, cutting, folding and dropping all carry meaning.' }
  ],
  notes: [
    'Six words. Put them on the board — they are the spine of the whole first half.',
    'Notice how many of these they have met before: chance in Week 3 and Week 6, gravity in Week 4, time in Week 6.',
    'What is new is that all six are now the SUBJECT, not the method.'
  ]
},
{
  type: 'twocol',
  title: 'What the artist does now',
  left: {
    head: 'Traditional art',
    zh: '傳統藝術',
    lead: 'The artist is in charge.',
    items: [
      'Artist →',
      'controls the material →',
      'arrives at a final form.',
      'One direction. One decision-maker.'
    ]
  },
  right: {
    head: '{{processart}}',
    zh: '過程藝術',
    lead: 'The artist is one force among several.',
    items: [
      'Artist + material + gravity + time + chance',
      '→ artwork.',
      'Nobody is fully in charge.',
      'And the result cannot be predicted exactly.'
    ]
  },
  notes: [
    'This is the clearest single diagram of the week.',
    'The honest question, and it is the first discussion question at the end: if a factory already removed the artist’s hand in Minimalism, is letting gravity do it really a rejection — or the same absence by another route?',
    'Do not answer it now.'
  ]
},
{
  type: 'twocol',
  title: '{{processart}} vs {{minimalism}}',
  left: {
    head: '{{minimalism}}',
    zh: '極簡主義',
    lead: 'Week 7.',
    items: [
      'Fixed. Planned in advance.',
      'A geometric {{specificobject}}.',
      'Made in a factory, to a drawing.',
      'The same every time you install it.'
    ]
  },
  right: {
    head: '{{processart}}',
    zh: '過程藝術',
    lead: 'And this reacts against it.',
    items: [
      'Changing. Uncertain.',
      'The material decides.',
      'Made by pouring, dropping, hanging.',
      'A new shape every time you install it.'
    ]
  },
  notes: [
    'The big change in five words: from planned form, to process, change and uncertainty.',
    'And remember who is doing this: Morris was one of the Minimalists. He is attacking his own earlier work.'
  ]
},

/* ===== PART 3 — MORRIS AND BENGLIS ===== */
{
  type: 'artwork',
  src: 'img/morris-l-beams.jpg',
  title: 'Untitled (L-Beams)',
  caption: 'Robert Morris (1931–2018), <i>Untitled (L-Beams)</i>, 1965',
  smallSource: true,
  ask: 'Three identical beams. Are they the same size?',
  points: [
    'They are exactly identical — same shape, same dimensions.',
    'One stands upright, one lies on its side, one is tipped onto its point.',
    'And they look completely different.',
    'Morris: “Simplicity of shape does not necessarily equate with simplicity of experience.”'
  ],
  notes: [
    'ASK and let them insist they are different sizes. They are not. That is the work.',
    'This is Morris the MINIMALIST, in 1965. His “Notes on Sculpture” essays of 1966 became key Minimalist theory.',
    'Worth knowing: he worked in experimental dance in New York, at the Judson Dance Theater. The body and action were always central for him — which is why he was the one who broke Minimalism open.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  src: 'img/morris-brown-felt.jpg',
  title: 'Untitled (Brown Felt)',
  caption: 'Robert Morris, <i>Untitled (Brown Felt)</i>, 1973 — cut felt, hung from the wall',
  ask: 'Same artist, eight years later. Who decided this shape?',
  points: [
    'Industrial felt, cut into strips, and hung on a nail.',
    'Gravity did the rest.',
    'Nobody drew this shape in advance. It could not be drawn in advance.',
    'And it hangs differently every single time it is installed.'
  ],
  notes: [
    'ASK and let them get to gravity.',
    'Put this beside the L-Beams in their heads: the same man, planned geometry then, material behaviour now.',
    'Because it hangs differently each time, there is no “correct” version. The museum cannot restore it to an original state — there isn’t one.'
  ]
},
{
  type: 'quote',
  title: '{{antiform}}',
  zh: '反形式',
  lead: 'Robert Morris, 1968',
  quote: '“Random piling, loose stacking, hanging, give passing form to the material.”',
  cite: 'Robert Morris, “Anti Form”, <i>Artforum</i> 6, no. 8, 1968, p. 33',
  plain: [
    'Piling. Stacking. Hanging.',
    'These give the material a form — but only a <b>passing</b> one.',
    'Not a fixed shape. A shape that happens, and will happen differently next time.',
    'The process makes the form, and then lets it go.'
  ],
  notes: [
    'The word to underline is “passing”. Not permanent, not definitive — temporary.',
    'This is the founding text of Process Art, and it was written by a Minimalist against Minimalism.'
  ]
},
{
  type: 'artwork',
  src: 'img/benglis-odalisque.jpg',
  title: 'Odalisque (Hey, Hey Frankenthaler)',
  caption: 'Lynda Benglis (b. 1941), <i>Odalisque (Hey, Hey Frankenthaler)</i>, 1969 — poured pigmented latex',
  ask: 'Read the title. Who is she talking to?',
  points: [
    'Latex, poured straight onto the floor. She called these her “{{pours}}”.',
    'Painting has become sculpture — it is on the floor, and it has thickness.',
    'The title answers Helen Frankenthaler, from Week 4, who poured thinned paint into canvas.',
    'And “odalisque” is the old name for a reclining nude — a subject men painted for centuries.'
  ],
  notes: [
    'ASK — the title is a direct address to another artist. Frankenthaler was Week 4’s soak-stain painter.',
    'Benglis said: “It all comes from my body.” The work asks whether it is a picture, an object, or a feeling.',
    'The feminist argument in the material itself: soft, flowing, poured shapes answering the hard geometric art being made almost entirely by men.',
    'The lesson plan names Morris Louis in one place and Frankenthaler in another as the pouring precursor. Both poured; Frankenthaler is the one this title is aimed at.'
  ]
},
{
  type: 'artwork',
  src: 'img/benglis-artforum-ad-detail.jpg',
  title: 'The 1974 advertisement',
  caption: 'Lynda Benglis, <i>Artforum</i> advertisement (detail), published in <i>Artforum</i>, November 1974, pp. 4–5. Photo: Arthur Gordon. © 2024 Lynda Benglis / Licensed by VAGA at ARS, NY',
  points: [
    'In 1974 she bought a two-page advertisement in <i>Artforum</i> and put herself in it.',
    'The full photograph was deliberately shocking, and it was meant to be.',
    'Several of the magazine’s editors publicly objected. Some resigned over it.',
    'It started a large argument about feminism, the female body, and who gets to be looked at.'
  ],
  notes: [
    'CONTENT NOTE: this slide shows only the head-and-shoulders detail. The full 1974 advertisement is explicit — Benglis nude, holding a dildo. Describe it rather than showing it, unless you have decided otherwise for your class.',
    'Why it matters here: she was making the point that a woman artist could only get attention by becoming the image. She took the strategy the art world used on women and turned it back on it.',
    'It ran in the same issue as a review of her work, which was part of the plan.',
    'Connect back to Klein’s ANT 82 in Week 6: women used as brushes by a man, versus a woman using herself, on purpose, and taking the consequences.'
  ]
},

/* ===== PART 4 — HESSE AND HAACKE ===== */
{
  type: 'artwork',
  src: 'img/hesse-repetition-nineteen.jpg',
  title: 'Repetition Nineteen III',
  caption: 'Eva Hesse (1936–1970), <i>Repetition Nineteen III</i>, 1968 — fibreglass and polyester resin, nineteen units',
  ask: 'Nineteen units, made to the same plan. Why is no two the same?',
  points: [
    'Nineteen open cylinders, all meant to be identical.',
    'But they are hand-formed in fibreglass, so every one leans and buckles differently.',
    'Compare with Judd’s ten identical metal boxes, last week.',
    'Same idea — repetition — and the opposite result.'
  ],
  notes: [
    'ASK and let them find it: the material would not do as it was told.',
    'The Judd comparison is the whole point. Judd used a factory so the units would be identical. Hesse uses her hands and unstable resin so they cannot be.',
    'She also placed them differently for each installation. There is no fixed arrangement.'
  ]
},
{
  type: 'artwork',
  src: 'img/hesse-contingent.jpg',
  title: 'Contingent',
  caption: 'Eva Hesse, <i>Contingent</i>, 1969 — cheesecloth, latex and fibreglass, eight hanging panels',
  smallSource: true,
  points: [
    'Eight large sheets of cloth soaked in latex, hanging from the ceiling.',
    'Between painting and sculpture — hanging in the room like both and neither.',
    'From 1965 she used latex, fibreglass, cloth and rope — weak, unstable materials.',
    'This work appeared in <b>both</b> famous 1969 shows. Hesse is the link between them.'
  ],
  notes: [
    'The title means: depending on circumstances. Nothing about it is fixed.',
    'The tragedy that is also an art-historical fact: latex degrades. Her works are darkening and becoming brittle, and some can no longer be shown. A body of work about impermanence is, itself, disappearing.',
    'She died of a brain tumour in 1970, aged 34.',
    'She is the most important artist connecting Minimalism and Process Art. Say that plainly.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  src: 'img/haacke-condensation-cube.jpg',
  title: 'Condensation Cube',
  caption: 'Hans Haacke (b. 1936), <i>Condensation Cube</i>, 1963–65 — acrylic box, water, air',
  ask: 'A sealed plastic box with a little water in it. Where is the artwork?',
  points: [
    'Water and air, sealed inside a clear acrylic cube.',
    'Room temperature and light make the water condense on the inside walls.',
    'The pattern of droplets changes all day, and never repeats.',
    'Haacke: the image inside “cannot be precisely predicted”.'
  ],
  notes: [
    'ASK — the answer is that the artwork is the process, not the box.',
    'This is {{systemsart}}: set up a real system and let it run. The system produces the work.',
    'CORRECTED: her slide captioned this “Condensation Tube”. The work is Condensation Cube, 1963–65 — as her own later slide and the lesson plan both say.',
    'This is Quiz Question 3, and it is the second discussion question: if a process he does not control makes the appearance, is he still the author?'
  ]
},
{
  type: 'artwork',
  src: 'img/haacke-rhine-water.jpg',
  title: 'Rhine Water Purification Plant',
  caption: 'Hans Haacke, <i>Rhine Water Purification Plant</i>, 1972 — Museum Haus Lange, Krefeld',
  points: [
    'He piped in polluted water from the Rhine, cleaned it inside the gallery, and released it into a goldfish tank.',
    'The water came from the sewage plant next door to the museum.',
    'So the system is not natural any more — it is ecological, and industrial, and political.',
    'The museum was made to look at the river it stood beside.'
  ],
  notes: [
    'The move from Condensation Cube: same method, but the system now belongs to the real world outside the gallery.',
    'Goldfish lived in the cleaned water, which was the proof it worked.',
    'This is the step from natural systems toward {{institutional}} — the last slide of this run makes that arc explicit.'
  ]
},
{
  type: 'compare',
  title: 'When the system is the museum',
  ask: 'Both of these got Haacke into serious trouble. Why?',
  left:  { src: 'img/haacke-moma-poll.jpg', label: '<i>MoMA Poll</i>, 1970', tag: 'MoMA Poll' },
  right: { src: 'img/haacke-shapolsky.jpg', label: '<i>Shapolsky et al. Manhattan Real Estate Holdings…</i>, 1971', tag: 'Shapolsky' },
  reveal: [
    { side: 'left',  text: 'Visitors voted, with a ballot, on a political question about a museum trustee. Their opinions became the artwork.' },
    { side: 'right', text: 'He documented a real Manhattan landlord’s slum properties — photographs, addresses, transactions, all public record.' },
    { side: 'right', text: 'The Guggenheim cancelled his exhibition six weeks before it opened, and sacked the curator.' }
  ],
  notes: [
    'ASK, then click through.',
    'MoMA Poll: the question asked whether Governor Rockefeller’s position on Vietnam was a reason not to vote for him — and a Rockefeller was on MoMA’s board. Visitors dropped ballots into transparent boxes, so the result accumulated in public.',
    'Shapolsky used only public records. Nothing in it was secret. The museum still refused it.',
    'The director called it “an alien substance that had entered the art museum organism”. That sentence is worth reading out.',
    'You met Haacke last week at the end, with Germania. Now they see how he got there.'
  ]
},
{
  type: 'flow',
  title: 'From natural systems to {{institutional}}',
  zh: '從自然系統到機構批判',
  stages: [
    { head: 'Condensation Cube', body: 'A natural system decides the artwork.' },
    { head: 'Rhine Water', body: 'An ecological and industrial system decides it.' },
    { head: 'MoMA Poll', body: 'Visitors’ political opinions become the artwork.' },
    { head: 'Shapolsky et al.', body: 'The artist becomes an investigator, and reveals a real system of power.' }
  ],
  foot: 'The same method throughout — set up a system, let it run. Only the system changes.',
  notes: [
    'Four steps, one click each. This is the summary of Haacke.',
    'The point of the flow: he never changes his method. He only points it at bigger and less comfortable systems.',
    'And the last one made the institution angry enough to cancel him.'
  ]
},

/* ===== PART 5 — OP ART ===== */
{
  type: 'section',
  title: 'Letting go, or taking control?',
  sub: 'Does the material decide the shape — or does calculation decide everything?',
  notes: [
    'The hinge into Op Art. Ten minutes for this section.',
    'Set up the contrast hard: Process Art hands control to gravity and chance. Op Art takes every scrap of it back.'
  ]
},
{
  type: 'bullets',
  title: '{{opart}}',
  zh: '歐普藝術',
  items: [
    { head: 'Also called {{retinalart}} or {{perceptualabstraction}}', body: 'Named by <i>Time</i> magazine in 1964.' },
    { head: 'It comes from vision, science and mathematics', body: 'An exploration of the mind — not of emotion.' },
    { head: 'No subject at all', body: 'Only precise geometric shapes.' },
    { head: 'Psychologists used the paintings as tests', body: 'To study how human vision actually works.' },
    { head: 'The breakthrough: {{responsiveeye}}, 1965', body: 'At MoMA, curated by William C. Seitz. Over 180,000 people came, and Op Art reached fashion and design.' }
  ],
  notes: [
    'The exhibition is the making of the movement, again — as with Primary Structures last week and The Art of Assemblage in Week 5.',
    'The fashion detail is worth one line: within months the patterns were on dresses and shop windows. Artists were not consulted and mostly hated it.',
    'This is Quiz Question 5: it works on the physiology of the eye.'
  ]
},
{
  type: 'artwork',
  src: 'img/vasarely-zebra.jpg',
  title: 'Zebra',
  caption: 'Victor Vasarely (1906–1997), <i>Zebra</i>, 1937',
  ask: 'Made in 1937, nearly thirty years before Op Art was named. What is doing the work?',
  points: [
    'Only black and white stripes on a flat surface.',
    'No outline is drawn — the animal appears where the stripes bend.',
    'Your eye builds the body out of curvature alone.',
    'Vasarely is called the grandfather of {{opart}}, and this is why.'
  ],
  notes: [
    'ASK and let them work it out: there is no drawn edge anywhere.',
    'His background was in graphic design and advertising, which is where the precision comes from. He also studied at a Bauhaus-influenced academy in Budapest — Bauhaus colour theory is the other root.',
    'Nearly thirty years before Time magazine named the movement.'
  ]
},
{
  type: 'artwork',
  src: 'img/vasarely-vega-200.jpg',
  title: 'Vega 200',
  caption: 'Victor Vasarely, <i>Vega 200</i>, 1968',
  ask: 'The canvas is completely flat. So why does it bulge?',
  points: [
    'A regular grid of squares — and then the grid is stretched.',
    'Where the squares grow, the surface seems to swell toward you.',
    'Nothing is shaded. There is no light source and no perspective.',
    'The illusion is made entirely by changing the size of a repeated unit.'
  ],
  notes: [
    'ASK and take answers before explaining. Then let them look for the shading that is not there.',
    'This is calculated, not felt — the opposite of everything in the first half of today.',
    'Say the contrast out loud: Morris hangs felt on a nail and lets gravity decide. Vasarely computes every square.'
  ]
},
{
  type: 'artwork',
  src: 'img/riley-current.jpg',
  title: 'Current',
  caption: 'Bridget Riley (b. 1931), <i>Current</i>, 1964 — synthetic polymer paint on board',
  ask: 'Nothing on this surface moves. So why does it?',
  points: [
    'Black and white lines only. No colour, no subject, nothing depicted.',
    'The spacing between the lines changes, and that is the entire content.',
    'Your eye cannot hold it still — it shimmers and pulls.',
    'This was on the catalogue cover of {{responsiveeye}} in 1965.'
  ],
  notes: [
    'ASK and let them look for as long as they can stand it. Some students find these physically uncomfortable — say that is a normal and correct response.',
    'It is made of line and interval alone. No reference to anything outside itself.',
    'Riley was furious about the fashion industry copying her work and had no legal way to stop it. That is worth a sentence about who owns an image.',
    'CONTENT NOTE: intense optical patterns can trigger migraine or nausea in some people. Give them permission to look away.'
  ]
},

/* ===== PART 6 — PHOTOREALISM ===== */
{
  type: 'section',
  title: 'Trick the eye, or copy the eye?',
  sub: 'Illusion challenges perception — realism surrenders to the camera.',
  notes: [
    'Ten minutes for Photorealism.',
    'And this is where the mystery image from the start of class pays off.'
  ]
},
{
  type: 'bullets',
  title: '{{photorealism}}',
  zh: '照相寫實主義',
  items: [
    { head: 'Mainly American, from the late 1960s', body: 'New York and California. Realist painting made from photographs.' },
    { head: 'It reacted against Abstract Expressionism', body: 'Which had dominated American painting before it.' },
    { head: 'The subjects are ordinary American scenes', body: 'And artists chose shiny surfaces — glass, chrome — because they show off extreme skill.' },
    { head: 'The method', body: 'Project a photograph onto the canvas, or copy it with a grid. Then use an {{airbrush}} to remove every brush mark.' },
    { head: 'So the surface ends up smooth, like a print', body: 'The hand disappears — through the camera this time, not the factory.' }
  ],
  notes: [
    'The last point is Quiz Question 4 and the whole reason this sits in today’s session.',
    'Minimalism removed the artist’s hand with a factory. Photorealism removes it with a camera. Opposite appearances, same disappearance.',
    'Say that clearly — it is the thread that ties this to Week 7.'
  ]
},
{
  type: 'bullets',
  title: 'Meisel’s five-point definition',
  zh: '邁澤爾的五點定義',
  items: [
    { head: 'The name came from a gallery owner', body: 'Louis K. Meisel coined “Photorealism” in 1969. He wrote the definition in 1972.' },
    { head: '1 · Use a camera and a photograph to gather the information' },
    { head: '2 · Use a mechanical or semi-mechanical way to move it onto the canvas' },
    { head: '3 · Have the technical skill to make the result look photographic' },
    { head: '4 · Have exhibited as a Photo-Realist by 1972', body: 'To count as one of the central figures.' },
    { head: '5 · Have spent at least five years on it' }
  ],
  notes: [
    'Points 4 and 5 are strange, and students should notice: they are not about the art at all. They are membership rules, written by a dealer.',
    'Ask them who benefits from a definition that closes the list in 1972. It is the same question as Week 5’s “who gets to write art history?”.',
    'This is Quiz Question 6 — point 2, the mechanical transfer.'
  ]
},
{
  type: 'artwork',
  src: 'img/close-phil.jpg',
  title: 'Phil',
  caption: 'Chuck Close (1940–2021), <i>Phil</i>, 1969 — acrylic on canvas, over two metres tall',
  ask: 'A face this size, in this much detail. What has been lost?',
  points: [
    'Painted from a photograph, using a grid, square by square.',
    'Over two metres tall — far larger than any real head.',
    'Every pore and hair is there, and there is no expression to read.',
    'Close: he was not painting a person. He was painting a photograph <i>of</i> a person.'
  ],
  notes: [
    'ASK — the good answers are: warmth, personality, the sense that someone looked at someone.',
    'The subject is the composer Philip Glass, a friend.',
    'He worked square by square from a gridded photograph, so at any moment he was only painting an abstract patch. The likeness assembles itself.',
    'Worth telling: Close was paralysed by a spinal artery collapse in 1988 and went on painting with a brush strapped to his wrist.'
  ]
},
{
  type: 'compare',
  title: 'And here is the grid',
  ask: 'From close up, what is actually on the canvas?',
  left:  { src: 'img/close-detail-1.jpg', label: 'A Chuck Close portrait at normal viewing distance', tag: 'Far' },
  right: { src: 'img/close-detail-2.jpg', label: 'The same painting, close up', tag: 'Near' },
  reveal: [
    { side: 'right', text: 'Up close, each square is its own small abstract painting — rings, blobs, lozenges of colour.' },
    { side: 'left',  text: 'Step back and your eye assembles them into a face.' },
    { side: 'right', text: 'So he shows you the machinery of image-making <b>and</b> gives you the likeness at the same time.' }
  ],
  notes: [
    'ASK, then click through. This is the best demonstration in the section.',
    'In his later work he stopped hiding the grid entirely, and made each cell a visible little painting.',
    'Compare with Lichtenstein in Week 5, hand-painting Ben-Day dots: both expose the mechanics of a printed image while using it.'
  ]
},
{
  type: 'artwork',
  src: 'img/estes-telephone-booths.jpg',
  title: 'Telephone Booths',
  caption: 'Richard Estes (b. 1932), <i>Telephone Booths</i>, 1967',
  ask: 'Now — the picture from the start of class. Photograph, or painting?',
  points: [
    'It is a painting.',
    'Glass, chrome and reflections — surfaces that reflect other surfaces.',
    'Everything is in focus at once, near and far. A camera cannot actually do that.',
    'Estes argued that only the camera can capture how much visual information a modern city contains.'
  ],
  notes: [
    'THE REVEAL. Go back to the start-of-class question and take a show of hands before you answer.',
    'The tell is the depth of field: every part is equally sharp. A real photograph would blur something.',
    'He also combines several photographs of the same site, and removes people. So it is not one moment — it is a construction.',
    'The movement had a cool reception at documenta 5 in 1972; European critics thought it was merely technical.'
  ]
},

/* ===== PART 7 — WRAP-UP AND QUIZ ===== */
{
  type: 'flow',
  title: 'Three answers to one inheritance',
  zh: '面對同一遺產的三種回答',
  stages: [
    { head: '{{minimalism}} left this', body: 'The artist’s hand removed, by a factory.' },
    { head: '{{processart}}', body: 'Hand the decision to gravity, chance and time.' },
    { head: '{{opart}}', body: 'Take total control back — calculate every line.' },
    { head: '{{photorealism}}', body: 'Hand it to the camera, and copy what it saw.' }
  ],
  foot: 'Three completely different ways of answering the same question: where does artistic value sit now?',
  notes: [
    'Ten minutes for wrap-up and preview.',
    'The summary sentence: Process Art puts the value in the making, Op Art in perception, Photorealism in mechanical reproduction.',
    'All three are reacting to the same thing — Minimalism taking the artist’s hand away.',
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
    'Morris wrote “{{antiform}}” against the factory-made objects he and his friends had been making. But the artist’s hand was <i>already</i> absent in Minimalism. So is letting gravity decide really a rejection of Minimalism — or the same absence, reached another way?',
    'Haacke said the image inside the Condensation Cube “cannot be precisely predicted”. If a process he does not control makes the final appearance, is he the author in the same way Vasarely is the author of a calculated grid?',
    'Op Art and Photorealism both chase scientific precision — one deceiving the eye, the other copying what a camera saw. Is deceiving the eye a different achievement from reproducing a photograph, or are both just technical control dressed up as concept?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2.',
    'Question 1 is the sharpest and connects straight to last week. Use it first.',
    'Question 2 is the authorship question that has been running since LeWitt’s wall drawings.',
    'Question 3 is the most provocative — it invites them to be sceptical about both movements, which is fair.'
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
  type: 'quiz', n: 1, answer: 3,
  q: 'What is the most important part of {{processart}}?',
  options: [
    'The price of the materials.',
    'The frame around the painting.',
    'The final finished work.',
    'The act of making the art.'
  ],
  why: 'How you make it matters as much as the result — and sometimes more.',
  notes: ['Answer: D. Option C is the whole thing it argues against.']
},
{
  type: 'quiz', n: 2, answer: 0,
  q: 'Which natural force did Robert Morris use to shape his felt works?',
  options: ['Gravity.', 'Electricity.', 'Extreme heat.', 'Magnetism.'],
  why: 'Cut felt, hung on a nail. Gravity decides the shape, and decides it differently every time.',
  notes: ['Answer: A.']
},
{
  type: 'quiz', n: 3, answer: 2,
  q: 'What is the real subject of Haacke’s <i>Condensation Cube</i> (1963–65)?',
  options: [
    'The artist’s hand-painted recreation of water droplets.',
    'The viewer’s psychological reaction to confined spaces.',
    'An ever-changing natural process, decided by the environment.',
    'The mathematical calculation of the cube’s volume.'
  ],
  why: 'Nothing is painted. Room temperature and light do the work, and the pattern never repeats.',
  notes: ['Answer: C. That is {{systemsart}}: build the system, let it run.']
},
{
  type: 'quiz', n: 4, answer: 1,
  q: 'How does {{photorealism}} echo {{minimalism}}, despite all its detail?',
  options: [
    'Both rely on the artist’s intense emotional gestures.',
    'Both erase the artist’s hand through a mechanical or industrial process.',
    'Both reject the finished object in favour of an ongoing process.',
    'Both use the camera as their main sculptural tool.'
  ],
  why: 'Minimalism used a factory. Photorealism uses a camera and an {{airbrush}}. Opposite surfaces, same disappearance.',
  notes: ['Answer: B. Option C is Process Art — a useful thing to sort out here.']
},
{
  type: 'quiz', n: 5, answer: 3,
  q: 'Why is {{opart}} also called {{retinalart}}?',
  options: [
    'Because the artist must paint with extreme emotional intensity.',
    'Because it only uses biological subjects, like the human eye.',
    'Because the paintings must be viewed through special optical lenses.',
    'Because it relies on the physiology of the eye to create illusions of movement.'
  ],
  why: 'The movement is not in the painting. It happens in your eye.',
  notes: ['Answer: D.']
},
{
  type: 'quiz', n: 6, answer: 0,
  q: 'Which is one of Louis K. Meisel’s rules for {{photorealism}}?',
  options: [
    'The artist must use a mechanical way to copy the image.',
    'The artist must never use a camera.',
    'The painting must look abstract and messy.',
    'The artist must finish the painting in one day.'
  ],
  why: 'Point two of the five: a mechanical or semi-mechanical transfer to the canvas.',
  notes: [
    'Answer: A.',
    'Close by reminding them that two of Meisel’s five points were about membership, not about painting at all.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['antiform', 'processart', 'postminimalism', 'systemsart', 'pours', 'opart', 'retinalart', 'perceptualabstraction', 'responsiveeye', 'photorealism', 'airbrush'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
