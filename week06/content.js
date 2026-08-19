/* ------------------------------------------------------------------
   Week 6 — Art as Action / Event
   Nouveau Réalisme, Happening, and Fluxus

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan.

   Seven of the eight videos are embedded from the YouTube sources
   printed on her own slides. The Anthropométries film, which carried
   no link, is hosted here in vid/ and plays without internet.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- the week's foundational concepts --- */
  nouveaurealisme: {
    en: 'Nouveau Réalisme', zh: '新寫實主義',
    def: 'A French movement formed around the critic Pierre Restany in 1960. It asked art to stop representing reality and start using it directly.',
    zhDef: '1960 年由評論家雷斯塔尼所凝聚的法國運動。主張藝術不再「再現」現實，而是直接「取用」現實。'
  },
  actionperformance: {
    en: 'action–performance', zh: '行動—表演',
    def: 'Klein’s and Restany’s term: the live act of painting is the real work. The canvas left behind is only its trace.',
    zhDef: '克萊因與雷斯塔尼的用語：現場的繪畫行動才是真正的作品，留下的畫布只是其痕跡。'
  },
  immateriality: {
    en: 'immateriality', zh: '非物質性',
    def: 'Klein’s pursuit of an art with no object in it at all — shown most plainly by his empty exhibition, The Void.',
    zhDef: '克萊因所追求的、不含任何物件的藝術。其最直接的體現即為空無一物的展覽《空》。'
  },
  ikb: {
    en: 'International Klein Blue', zh: '國際克萊因藍',
    def: 'The single ultramarine blue Klein mixed and used alone from 1957. He wanted colour free of shape and of personality.',
    zhDef: '克萊因自 1957 年起單獨使用的群青藍。他要的是一種擺脫形體與個性的色彩。'
  },
  chance: {
    en: 'chance / indeterminacy', zh: '機遇／不確定性',
    def: 'Cage’s principle: the composer gives up control, and the structure comes from chance and from ordinary sound.',
    zhDef: '凱吉的原則：作曲家放棄控制，讓結構由機遇與日常聲響生成。'
  },
  happening: {
    en: 'Happening', zh: '偶發藝術',
    def: 'Kaprow’s word for an event across more than one time and place, made together by performers and audience — and impossible to repeat.',
    zhDef: '卡布羅的用語：跨越多個時間與地點的事件，由表演者與觀眾共同構成，且無法重演。'
  },
  fluxus: {
    en: 'Fluxus', zh: '激浪派',
    def: 'A loose international network from the early 1960s. The name is Latin for “flow” — it refuses to be a fixed style.',
    zhDef: '1960 年代初期形成的鬆散國際網絡。名稱源自拉丁文的「流動」，刻意拒絕成為固定風格。'
  },
  expandedart: {
    en: 'expanded concept of art', zh: '擴展的藝術概念',
    def: 'Beuys’s idea (Erweiterter Kunstbegriff): any object or action can be art material. Art comes out of life, and shapes it back.',
    zhDef: '波依斯的主張：任何物件或行動都可以是藝術材料。藝術源於生活，也反過來形塑生活。'
  },

  /* --- people and works --- */
  restany: {
    en: 'Pierre Restany', zh: '雷斯塔尼',
    def: 'The French critic who named Nouveau Réalisme in 1960, wrote its manifesto, and coined the word Anthropométrie.',
    zhDef: '法國評論家。1960 年為新寫實主義命名、撰寫宣言，並創造「人體測量」一詞。'
  },
  anthropometry: {
    en: 'Anthropométrie', zh: '人體測量',
    def: 'Klein’s body-print works. Models covered in blue paint pressed themselves onto paper, before an audience and an orchestra.',
    zhDef: '克萊因的身體壓印作品。模特兒塗滿藍色顏料後印壓於紙上，並在觀眾與樂團面前進行。'
  },
  accumulation: {
    en: 'accumulation', zh: '積累',
    def: 'Arman’s method: gather many of the same object and pile them up, so you have to look at what a consumer society leaves behind.',
    zhDef: '阿曼的手法：蒐集大量同類物件並加以堆積，迫使人正視消費社會所遺留之物。'
  },
  kinetic: {
    en: 'kinetic sculpture', zh: '動力雕塑',
    def: 'Sculpture that moves. Tinguely built his out of scrap metal and bicycle wheels — and sometimes so it would destroy itself.',
    zhDef: '會動的雕塑。廷格利以廢金屬與腳踏車輪製作，有時更讓它自我毀滅。'
  },
  socialsculpture: {
    en: 'social sculpture', zh: '社會雕塑',
    def: 'Beuys’s claim that society itself can be shaped like a material — and so “everyone is an artist”.',
    zhDef: '波依斯主張社會本身可如材料般被形塑，因此「人人都是藝術家」。'
  },
  neodada: {
    en: 'Neo-Dada', zh: '新達達',
    def: 'Rauschenberg and Johns, from Week 5. Nouveau Réalisme is often read as Europe’s answer to it.',
    zhDef: '第五週學過的勞森伯格與瓊斯。新寫實主義常被視為歐洲對其的回應。'
  }
};

const SECTIONS = [
  { title: '1 · Review & the Question', zh: '複習與提問',     start: 0 },
  { title: '2 · Nouveau Réalisme',     zh: '新寫實主義',      start: 3 },
  { title: '3 · Yves Klein',           zh: '克萊因',          start: 8 },
  { title: '4 · Arman, Tinguely, Niki', zh: '阿曼、廷格利、妮基', start: 22 },
  { title: '5 · Happening',            zh: '偶發藝術',        start: 29 },
  { title: '6 · Fluxus',               zh: '激浪派',          start: 39 },
  { title: '7 · Wrap-Up & Quiz',       zh: '總結與測驗',      start: 47 }
];

const SLIDES = [

/* ===== PART 1 — REVIEW AND THE QUESTION ===== */
{
  type: 'title',
  title: 'Art as Action / Event',
  sub: 'Nouveau Réalisme · Happening · Fluxus',
  meta: 'Week 6',
  notes: [
    'Five minutes for review and framing.',
    'HOOK: the next slide puts Klein’s Leap into the Void beside Tinguely’s self-destroying machine. Use it.',
    'This week’s question, and write it on the board: if an artwork destroys itself, or exists only for the moment it happens, what are we actually left with?'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we go now',
  zh: '上週與本週',
  items: [
    { head: 'Last week: the object came from the shop', body: 'A soap box, a comic frame, a stuffed goat. Ordinary things became art.' },
    { head: 'But they were still <i>things</i>', body: 'You could hang them, sell them, put them in a store room.' },
    { head: 'This week the object disappears', body: 'What is left is an action. An event. A few minutes that happen once.' },
    { head: 'And then what?', body: 'A photograph. A burnt canvas. A pile of scrap. Are those the artwork — or only the receipt?' }
  ],
  notes: [
    'Recap Week 5 in one line: the boundary between art and everyday life came down, but the artwork was still an object.',
    'Now the object goes too. Say it plainly.',
    'The last point is the guiding question and the first discussion question at the end. Plant it now.'
  ]
},
{
  type: 'compare',
  title: 'Two things that happened in 1960',
  ask: 'One man jumps out of a window. One machine destroys itself. What is left of either?',
  left:  { src: 'img/klein-leap-into-the-void.jpg', label: 'Yves Klein, <i>Leap into the Void</i>, 1960', tag: 'Klein' },
  right: { src: 'img/tinguely-homage-to-new-york.png', label: 'Jean Tinguely, <i>Homage to New York</i>, 1960 — in the garden of MoMA', tag: 'Tinguely' },
  reveal: [
    { side: 'left',  text: 'Klein really jumped. But the photograph is a darkroom fake — the people who caught him were edited out.' },
    { side: 'right', text: 'Tinguely’s machine ran for twenty-seven minutes, set itself on fire, and was put out by the fire brigade.' },
    { side: 'right', text: 'So from both, all we have left is a document. Hold that thought all session.' }
  ],
  notes: [
    'ASK first, then click through the three reveals.',
    'Do not explain either work fully yet — both come back in detail later. This is the hook.',
    'The point to leave hanging: in both cases the thing we look at today is not the artwork. It is evidence that the artwork happened.'
  ]
},

/* ===== PART 2 — NOUVEAU RÉALISME ===== */
{
  type: 'section',
  title: '{{nouveaurealisme}}',
  sub: 'Art stops representing reality. It starts using it.',
  notes: ['Twenty-five minutes for this whole first half. Klein takes most of it.']
},
{
  type: 'bullets',
  title: 'Art takes reality directly',
  zh: '藝術直接取用現實',
  items: [
    { head: 'A world full of machines and images', body: 'An “artificial nature”. New media, new subject matter.' },
    { head: 'The key move', body: 'Art no longer <i>represents</i> reality. It <i>takes</i> reality directly.' },
    { head: 'May 1960 — the name appears', body: '{{restany}} first used “Nouveau Réalisme” at a group show in the Apollinaire Gallery, Milan — for Arman, Dufrêne, Hains, Klein and Tinguely.' },
    { head: '27 October 1960 — the first manifesto', body: 'Signed by nine artists in Yves Klein’s Paris studio.' }
  ],
  notes: [
    'The one sentence they must keep: art no longer represents reality, it takes reality directly.',
    'Compare with Week 5: Warhol rebuilt a Brillo box. These artists would simply use the real one.',
    'Note the pattern again — a critic names the group and writes the manifesto. Restany here; Alloway, Rosenberg and Greenberg before him.'
  ]
},
{
  type: 'bullets',
  title: 'What they rejected, and what they wanted',
  zh: '反對什麼，主張什麼',
  items: [
    { head: 'Europe’s answer to America', body: 'Usually read as the French counterpart to American {{neodada}} and Pop Art.' },
    { head: '1961 — the second manifesto, “40° Above Dada”', body: 'No longer just asking “is this art?” — now real objects <i>are</i> the material and the content.' },
    { head: 'Rejected: Abstract Expressionism, Hard-Edge, Color-field', body: 'They said abstraction had pushed art into extreme subjectivity, cut off from where people actually live.' },
    { head: 'Proposed: go back to the real world', body: 'Show our living environment and our everyday behaviour — not the painter’s inner projection.' }
  ],
  notes: [
    'The rejection list is last week and the week before: Pollock, Rothko, Newman, Kelly. Say the names — the students met all of them.',
    '“40° Above Dada” means: Dada asked whether this could be art. We are past that question.',
    'This is Quiz Question 1: record sociological reality directly, without expressionist rhetoric.'
  ]
},
{
  type: 'grid',
  title: 'A boundary that is hard to draw',
  zh: '難以劃定的邊界',
  cells: [
    { label: 'France', head: '{{nouveaurealisme}}', body: 'Real objects, taken from the street and the rubbish, in Paris.' },
    { label: 'United States', head: '{{neodada}} and Assemblage', body: 'Rauschenberg and Johns — real objects put into painting. Week 5.' },
    { label: 'United States', head: 'Pop Art', body: 'Warhol and Lichtenstein — the images of consumer culture. Also Week 5.' },
    { label: 'Shared', head: 'All three use real things directly', body: 'They differ in what they take, and in how much irony they bring to it.' }
  ],
  notes: [
    'The point of this slide: these are not tidy separate boxes. Same years, same problem, different cities.',
    'Ask them to name the difference. A reasonable answer: the Americans take the <i>image</i> of consumer culture; the French take the <i>object</i> itself, often used and thrown away.'
  ]
},
{
  type: 'quote',
  title: 'The declaration',
  zh: '成立宣言',
  lead: '27 October 1960, in Klein’s studio',
  quote: '“Thursday, 27th October 1960. The Nouveaux Réalistes have become aware of their collective singularity. New Realism = new perceptive approach of reality.”',
  cite: '<i>Déclaration constitutive du Nouveau Réalisme</i>, 27 October 1960',
  plain: [
    'Nine artists, one short sentence, signed in a studio.',
    '“A new perceptive approach of reality” — a new way of <i>noticing</i> the real world.',
    'Not a new way of painting it. A new way of seeing it, and then using it.'
  ],
  notes: [
    'It is a famously short manifesto — that brevity is deliberate.',
    'Read the plain version aloud.',
    'Contrast with the Futurist manifesto in Week 3, which was pages of shouting. This is one line.'
  ]
},

/* ===== PART 3 — YVES KLEIN ===== */
{
  type: 'bullets',
  title: 'Yves Klein (1928–1962)',
  zh: '伊夫・克萊因',
  items: [
    { head: 'Judo first', body: 'He reached fourth dan. He said judo gave him his first feeling of “spiritual space”.' },
    { head: '“Only the body is alive”', body: 'And by the body he meant mainly the torso — a symbol of life and energy. Pure power, which does not need to think.' },
    { head: '1957 — the Blue Period', body: 'After his <i>Epoca Blu</i> exhibition in Milan, he used one colour only: {{ikb}}.' },
    { head: 'He died at thirty-four', body: 'In 1962. Everything today happened in about five years.' }
  ],
  notes: [
    'The judo detail is not a curiosity — he taught judo professionally and wrote a book on it. The idea of trained bodies moving through space runs into the Anthropométries.',
    'The “only the body is alive” idea is worth flagging now: it is also the most criticised part of his work, and it comes back at ANT 82.',
    'Five years. Say it — the compression is remarkable.'
  ]
},
{
  type: 'artwork',
  src: 'img/klein-blue-sponge-relief.jpg',
  title: 'Blue Sponge Relief',
  caption: 'Yves Klein, <i>Blue Sponge Relief</i>, 1958 — dry pigment in synthetic resin, sponges, on board',
  ask: 'One colour, no picture, no shape. What is left to look at?',
  points: [
    'Real sponges, soaked in blue and fixed to the board.',
    'The colour is dry, powdery and intensely deep — that is {{ikb}}.',
    'He mixed a binder that let the pigment keep its raw brightness.',
    'No drawing. No composition. Just colour and surface.'
  ],
  notes: [
    'ASK and give it a moment.',
    'The sponges started as his studio tools — they soaked up the blue, and he decided they had become the work.',
    'IKB: he was after a blue that had not been dulled by the binder. He patented the formula in 1960.'
  ]
},
{
  type: 'quote',
  title: 'Why one colour',
  zh: '為何只用一種顏色',
  lead: 'Yves Klein',
  quote: '“Lines… are our chains… They are our heredity, our education, our framework, our vices, our aspirations… Color, on the other hand, is free; it is instantly dissolved in space.”',
  cite: 'Yves Klein',
  plain: [
    'A line is a limit. It fences things in.',
    'He calls lines the bars of a psychological prison — everything we inherited and were taught.',
    'Colour has no edge. It dissolves into space.',
    'So he refuses, more and more, “the illusion of personality”.'
  ],
  notes: [
    'This is the argument for the monochrome, in his own words.',
    'Note the last phrase: the illusion of personality. Only six years after Pollock, whose entire value was his personality on the canvas.',
    'Read the plain version. Do not read the whole quotation aloud.'
  ]
},
{
  type: 'compare',
  title: 'The Void, 1958',
  ask: 'Three thousand people queued to see an empty room. What did they come for?',
  left:  { src: 'img/klein-the-void-1.jpg', label: 'Galerie Iris Clert, Paris — 28 April to 12 May 1958', tag: 'The room' },
  right: { src: 'img/klein-the-void-2.jpg', label: 'The gallery, emptied and painted white', tag: 'The room' },
  reveal: [
    { side: 'left',  text: 'He emptied the gallery completely, painted everything white, and exhibited the space itself.' },
    { side: 'right', text: 'Blue curtains at the door, blue cocktails, and republican guards outside. The <i>event</i> was elaborate. The room was bare.' },
    { side: 'left',  text: '{{nouveaurealisme}} keeps replacing the object with the event. This is that idea at its most extreme.' }
  ],
  notes: [
    'ASK and let them answer before you click.',
    'The full title was “The Specialisation of Sensibility in the Raw Material State into Stabilised Pictorial Sensibility”. Do not read it out — but it tells you he meant it seriously.',
    'The blue cocktails reportedly turned visitors’ urine blue for a week. Students remember this detail forever, so use it.',
    'This is Quiz Question 2: exploring immateriality by presenting an empty gallery as art.',
    'Two years later, Arman filled the same gallery with rubbish and called it The Full. That is coming.'
  ]
},
{
  type: 'artwork',
  src: 'img/klein-the-void-3.jpg',
  title: 'Inside the empty room',
  caption: 'Visitors at <i>The Void</i>, Galerie Iris Clert, Paris, 1958',
  points: [
    'People in coats, standing in a white room, looking at nothing.',
    'And clearly having an experience.',
    'Klein said the room was full — of an invisible “pictorial sensibility”.',
    'Whether you believe that or not, something happened here. It was just not an object.'
  ],
  notes: [
    'Look at the faces. They are not confused — they are concentrating.',
    'Be honest with the class: you are allowed to think this is nonsense. But three thousand people came, and the queue went around the block. Something was going on.',
    'This is {{immateriality}} — the key term of the Klein section.'
  ]
},
{
  type: 'bullets',
  title: '{{anthropometry}}',
  zh: '人體測量',
  items: [
    { head: 'The word is {{restany}}’s', body: 'He coined it for Klein’s body-print technique — “measurement of the human being”.' },
    { head: 'Models covered themselves in blue', body: 'And pressed their bodies onto paper on the wall and the floor.' },
    { head: 'In front of an audience, in evening dress', body: 'With an orchestra playing his <i>Monotone Symphony</i>: one single chord for twenty minutes, then twenty minutes of silence.' },
    { head: 'And here is the claim', body: 'The painting in the gallery is only what is <i>left</i>. The real artwork is the whole action.' }
  ],
  notes: [
    'That last point is {{actionperformance}} and it is a learning objective. Say it twice.',
    'The Monotone Symphony: one chord held for twenty minutes, then twenty minutes of silence. He had the idea in 1949 and first performed it in 1960 — so it predates Cage’s 4′33″ as an idea, though not as a performance.',
    'Klein wore a dinner jacket and never touched the paint himself. He directed.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Who is really painting here — Klein, the models, or the orchestra?',
  notes: [
    'Put this up BEFORE you play the film. Ten seconds of silence, so the question is in their heads while they watch.',
    'She designed the deck this way — a prompt slide before every video. Use them.'
  ]
},
{
  type: 'video',
  title: 'Anthropométries',
  caption: 'Yves Klein, <i>Anthropométries of the Blue Period</i> — Galerie Internationale d’Art Contemporain, Paris, 9 March 1960',
  src: 'vid/klein-anthropometries.mp4',
  watchFor: 'Who is really painting here — Klein, the models, or the orchestra?',
  points: [
    'Klein never touches the paint. He conducts.',
    'The models apply it and press themselves to the paper.',
    'The orchestra holds one chord.',
    'The audience is seated, dressed formally, watching a painting be made.'
  ],
  notes: [
    'This is the one video hosted on the site itself — it plays without internet. Click the picture to start.',
    'Three minutes. You do not need all of it; stop when the point has landed.',
    'Afterwards, take answers to the “watch for” question. There is no single right answer, and the disagreement is the lesson.',
    'The honest critical note, worth making: the models are anonymous and the artist is famous. Several students will raise this. It is a fair reading, and Klein’s “only the body is alive” makes it sharper.'
  ]
},
{
  type: 'compare',
  title: 'What is left afterwards',
  left:  { src: 'img/klein-anthropometry-1.jpg', label: 'The performance, 9 March 1960', tag: 'The event' },
  right: { src: 'img/klein-anthropometry-2.jpg', label: 'The performance, with the orchestra', tag: 'The event' },
  reveal: [],
  notes: [
    'Two photographs of the evening. Let them look.',
    'Notice the audience in rows, and the musicians at the side. This is staged as a concert, not as a studio.',
    'Then the next slide shows what ends up on a gallery wall.'
  ]
},
{
  type: 'artwork',
  src: 'img/klein-anthropometry-3.jpg',
  title: 'And this is what hangs on the wall',
  caption: 'An <i>Anthropométrie</i>, as exhibited',
  ask: 'If the artwork was the evening, what is this?',
  points: [
    'Blue marks on paper. Torsos, mostly — no heads, no arms, no legs.',
    'It is the trace of a body that was there for a moment.',
    'Klein and {{restany}} both said this is <i>not</i> the work. It is the residue.',
    'But it is what museums own, insure and hang.'
  ],
  notes: [
    'ASK and hold it. This is the first discussion question at the end of class, arriving early.',
    'The honest tension: the artist says the object is only a trace, and the entire art economy treats the trace as the asset.',
    'Do not resolve it. Just make sure they see it.'
  ]
},
{
  type: 'artwork',
  src: 'img/klein-ant82.jpg',
  title: 'ANT 82',
  caption: 'Yves Klein, <i>ANT 82</i>, 1960',
  points: [
    'The body reduced to the torso.',
    'For Klein, that is a symbol of life and energy — pure power that does not need to think.',
    'No face. No hands. No individual person.',
    'He said this was reverence. Many people now read it differently.'
  ],
  notes: [
    'Present both readings and let the class decide. Do not smooth it over.',
    'His stated position: the torso is life itself, stripped of personality — which fits his refusal of “the illusion of personality”.',
    'The obvious counter-reading: women reduced to anonymous bodies, used as brushes by a man in a suit, in 1960. Students will say it. They are not wrong to.',
    'This is a good place to remind them that Niki de Saint Phalle is coming, and that she is doing something very different with the female body.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Which element — body, colour, or fire — feels most “immaterial” by the end?',
  notes: ['Prompt slide. Put it up, wait, then play.']
},
{
  type: 'video',
  title: 'Fire Painting',
  caption: 'Yves Klein, <i>Fire Paintings</i>, 1960 — flame on treated board',
  yt: '1mJCVM3d7jw',
  poster: 'img/klein-fire-painting.png',
  watchFor: 'Which element — body, colour, or fire — feels most “immaterial” by the end?',
  points: [
    'He painted with a flamethrower.',
    'Sometimes with wet models pressed to the board first, so their shape survived the fire.',
    'His three materials, in his own scheme: <b>body</b> (the other and the one), <b>colour</b> (blue and gold), <b>immaterial</b> (fire and air).',
    'Fire is the one you cannot keep. Which is exactly why he wanted it.'
  ],
  notes: [
    'The three-part scheme is on his own slide and is worth putting on the board: body, colour, immaterial.',
    'He worked at the French gas board’s testing centre, with their permission, to make these.',
    'Afterwards, take answers on the “watch for”. Fire is the intended answer, but the argument for the body is good too.'
  ]
},
{
  type: 'artwork',
  src: 'img/klein-leap-into-the-void.jpg',
  title: 'Leap into the Void',
  caption: 'Yves Klein, <i>Leap into the Void</i>, October 1960 — photomontage by Harry Shunk and János Kender',
  ask: 'The jump was real. The photograph is fake. So which one is the artwork?',
  points: [
    'He really jumped, from a first-floor wall.',
    'Judo friends caught him in a tarpaulin — and were then removed in the darkroom.',
    'He also printed a fake newspaper carrying the picture, and had it distributed on Paris news-stands.',
    'So: the event was real, the evidence is fabricated, and the publication was a forgery.'
  ],
  notes: [
    'ASK and let them argue. This is the best version of today’s question.',
    'The full title he gave it was “A Man in Space! The Painter of Space Throws Himself into the Void!”',
    'The fake newspaper is the part that makes it modern: he did not just document the act, he manufactured its circulation.',
    'Then the closing line, which is on her slide: after a performance ends, is the proof we keep the same as the artwork itself?'
  ]
},

/* ===== PART 4 — ARMAN, TINGUELY, NIKI ===== */
{
  type: 'artwork',
  src: 'img/arman-the-full.jpg',
  title: 'Le Plein — The Full',
  caption: 'Arman (1928–2005), <i>Le Plein</i>, 1960 — Galerie Iris Clert, Paris',
  ask: 'This is the same gallery as The Void. What has he done?',
  points: [
    'Two years after Klein emptied it, Arman filled it — completely.',
    'Rubbish, packed from floor to ceiling, until nobody could get in.',
    'You could only look through the window.',
    'The Void and The Full: the same room, the opposite answer.'
  ],
  notes: [
    'ASK — students who were paying attention at The Void will get this instantly, and enjoy it.',
    'It was a direct, friendly reply to Klein. They were friends and both Nouveaux Réalistes.',
    'The serious point: both works remove the artwork you can look at. One by emptiness, one by excess.'
  ]
},
{
  type: 'artwork',
  src: 'img/arman-long-term-parking.jpg',
  title: 'Long Term Parking',
  caption: 'Arman, <i>Long Term Parking</i>, 1982 — sixty cars in concrete, eighteen metres tall, Jouy-en-Josas, France',
  points: [
    'Sixty real cars, set in a tower of concrete.',
    '{{accumulation}}: gather many of the same thing and pile it up.',
    'It makes you look at what a consumer society leaves behind.',
    'And it is permanent — a monument made of waste.'
  ],
  notes: [
    'Eighteen metres tall. It is still standing.',
    'Arman’s accumulations are the Nouveau Réaliste method in its purest form: he does not represent consumption, he stacks its remains.',
    'Compare with Warhol repeating Marilyn fifty times last week. Same logic — repetition until you see the system — but with real objects.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Does the machine’s self-destruction feel more like death, or like release?',
  notes: ['Prompt slide. Then the Tinguely film.']
},
{
  type: 'video',
  title: 'Homage to New York',
  caption: 'Jean Tinguely (1925–1991), <i>Homage to New York</i>, 17 March 1960 — the sculpture garden of the Museum of Modern Art',
  yt: '6dgGu2w3Qvo',
  poster: 'img/tinguely-homage-to-new-york.png',
  watchFor: 'Does the machine’s self-destruction feel more like death, or like release?',
  points: [
    'A machine built from bicycle wheels, bath tubs, a piano and scrap metal.',
    'Designed to destroy itself in front of an audience.',
    'It ran for twenty-seven minutes, caught fire, and the fire brigade stopped it.',
    'The audience included Rauschenberg and the museum’s trustees.'
  ],
  notes: [
    'Play a couple of minutes. The smoke and the fire brigade are the moment.',
    'It did not work as planned — it half failed, and set itself alight. Tinguely was delighted.',
    'His joke, on the next slide: “You cannot expect the end of the world to end the way you want.”',
    'This is Quiz Question 3: a critique of mechanical civilisation, expressed through a self-destroying event.'
  ]
},
{
  type: 'bullets',
  title: 'Let machines live and die',
  zh: '讓機器誕生與死亡',
  items: [
    { head: 'This is {{kinetic}} — sculpture that moves', body: 'Made of scrap: bicycle wheels, motors, whatever was to hand.' },
    { head: 'Tinguely’s joke', body: '“You cannot expect the end of the world to end the way you want.”' },
    { head: 'The art is not the leftover object', body: 'The art is the few minutes when it happened. The event.' },
    { head: 'A machine that is useless on purpose', body: 'In a century that worshipped machines for being efficient.' }
  ],
  notes: [
    'The last point is the reading the lesson plan asks for: a comment on industrial and mechanical civilisation.',
    'Connect back to Week 3 Futurism — they loved machines for their speed and power. Forty years later Tinguely builds one that does nothing and then dies.',
    'MoMA kept the surviving fragments. So the museum owns the wreckage of a work whose whole point was that it would not survive. Say that.'
  ]
},
{
  type: 'artwork',
  src: 'img/niki-tirs.jpg',
  title: 'Tirs — Shooting Paintings',
  caption: 'Niki de Saint Phalle (1930–2002), <i>Tirs</i>, from 1961',
  ask: 'She made these by shooting at them with a rifle. Who finishes the painting?',
  points: [
    'Bags of paint were sealed under white plaster.',
    'Then she — or the audience — shot at it with a rifle.',
    'The paint bled down the surface as the bags burst.',
    'The painting is finished by a gunshot, in public, in front of people.'
  ],
  notes: [
    'ASK and take answers. The gun, the shooter, chance, the audience — all defensible.',
    'She invited critics, other artists and visitors to shoot. So authorship is deliberately shared.',
    'She was explicit that she was shooting at her father, at the church, at the institutions that had constrained her. Say it — it is not a formal exercise.',
    'Compare with Klein: both use an action to make a painting. Klein directs from a distance in a dinner jacket; Niki fires the rifle herself.'
  ]
},
{
  type: 'artwork',
  src: 'img/niki-she.jpg',
  title: 'Hon — She',
  caption: 'Niki de Saint Phalle, with Jean Tinguely and Per Olof Ultvedt, <i>Hon — en katedral</i> (“She — a cathedral”), 1966, Moderna Museet, Stockholm',
  ask: 'You enter through the body. What does that change?',
  points: [
    'A reclining female figure, twenty-eight metres long, that you walk inside.',
    'It held a cinema, a milk bar, a slide and an aquarium.',
    'It turns the female body from something looked at into a space you enter.',
    'And it took months to build — art as event does not always mean brief.'
  ],
  notes: [
    'ASK and let them work on it. This is the deliberate counterweight to Klein’s ANT 82, and you should make the link out loud.',
    'Klein used women’s bodies as brushes. Niki built a woman you walk around inside, on her own terms.',
    'The last point matters and is on her slide: an event can be long. Building something over months is still a process, not an object.',
    'It was destroyed after three months. Only the head was kept.'
  ]
},

/* ===== PART 5 — HAPPENING ===== */
{
  type: 'section',
  title: '{{happening}}',
  sub: 'It began in a classroom, not a gallery.',
  notes: ['Twenty-five minutes for Happening and Fluxus together. Keep moving.']
},
{
  type: 'bullets',
  title: 'It started in a music class',
  zh: '始於一堂音樂課',
  items: [
    { head: 'Born in 1952 — and not inside visual art', body: 'It started because of something outside it: music.' },
    { head: 'The New School for Social Research, New York', body: 'An experimental composition class taught by John Cage.' },
    { head: 'His first idea', body: 'Music should not be controlled by the composer’s own will. Sound should happen by {{chance}}.' },
    { head: 'His second idea', body: 'Music can be made with everyday objects, not only instruments.' }
  ],
  notes: [
    'The fact that this begins in a music class is the interesting part. Say it plainly.',
    'Kaprow was in that class. So were several of the artists who became Fluxus.',
    'Cage’s chance procedures came partly from the I Ching. He used it to make compositional decisions.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'What fills the “silence” — and who is actually making it?',
  notes: ['Prompt slide. Then 4′33″.']
},
{
  type: 'video',
  title: '4′33″',
  caption: 'John Cage (1912–1992), <i>4′33″</i>, 1952 — three movements, no intentional sound',
  yt: 'gN2zcLBr_VM',
  watchFor: 'What fills the “silence” — and who is actually making it?',
  points: [
    'The performer sits at the piano and plays nothing, in three timed movements.',
    'But the piece is not silent. It is never silent.',
    'What you hear is the room: coughs, chairs, traffic, rain on the roof.',
    'The composer has stopped choosing. The audience and the room compose it instead.'
  ],
  notes: [
    'Play a movement, or the whole thing if the room can hold the discomfort — four and a half minutes is a long time.',
    'The best moment is watching an audience realise they are the piece.',
    'Cage: “There is no such thing as silence.” At the first performance you could hear wind outside, then rain, then the audience whispering.',
    'This is Quiz Question 4: it shifts control from the composer’s intent to chance and everyday sound.'
  ]
},
{
  type: 'artwork',
  src: 'img/kaprow-18-happenings.png',
  title: '18 Happenings in 6 Parts',
  caption: 'Allan Kaprow (1927–2006), <i>18 Happenings in 6 Parts</i>, Reuben Gallery, New York, 1959',
  points: [
    'The gallery was divided into three rooms with plastic sheeting.',
    'The audience were given cards telling them when to move and where to sit.',
    'Six parts happened at once, in different rooms. Nobody saw all of it.',
    'This is where the word “{{happening}}” comes from.'
  ],
  notes: [
    'The plastic sheeting and the instruction cards are the key facts — the audience were placed inside the work and given jobs.',
    'Because it happened in three rooms at once, no single person could experience the whole piece. That is deliberate.',
    'Kaprow had studied with Cage two years earlier.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Where does the “stage” end and the audience begin?',
  notes: ['Prompt slide. Then the restaging.']
},
{
  type: 'video',
  title: '18 Happenings, restaged',
  caption: 'A restaging of Kaprow’s <i>18 Happenings in 6 Parts</i> at the Fundació Antoni Tàpies, Barcelona, by students of HEAD, Geneva',
  yt: 'O_m2Y0zN_TE',
  poster: 'img/kaprow-restaging.png',
  watchFor: 'Where does the “stage” end and the audience begin?',
  points: [
    'The original happened once, in 1959, and cannot be repeated.',
    'So this is a reconstruction, from Kaprow’s scores and instructions.',
    'Which raises the obvious problem: if a Happening cannot repeat, is this one?',
    'Note the Tàpies foundation — you met Tàpies in Week 4.'
  ],
  notes: [
    'The paradox is worth naming out loud: Kaprow said a Happening happens once, and here are students performing it fifty years later.',
    'That is a genuinely open question and a good thirty-second discussion.',
    'Watch two or three minutes only.'
  ]
},
{
  type: 'bullets',
  title: 'What a {{happening}} is',
  zh: '偶發藝術是什麼',
  items: [
    { head: 'Kaprow used the word for his own work in 1959', body: 'At <i>18 Happenings in 6 Parts</i>.' },
    { head: 'His definition', body: '“A collection of events that happen in more than one time and place. It is like an artwork made together by the performers and the audience.”' },
    { head: 'It blurs stage and audience', body: 'And it blurs music and visual art.' },
    { head: 'It breaks the line between life and art' },
    { head: 'And it cannot be repeated', body: 'It happens once.' }
  ],
  notes: [
    'The four features are a learning objective. Put them on the board.',
    'This is Quiz Question 5: an event that dissolves the boundaries between performer and audience.',
    'The “cannot repeat” point is what makes the restaging you just watched interesting rather than simple.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'At what point does watching start to feel uncomfortable — and why?',
  notes: [
    'Prompt slide, and this one matters.',
    'CONTENT NOTE: Cut Piece involves an audience cutting the clothes from a seated woman who does not move. Some students will find it genuinely distressing, and some will have reasons you do not know about. Say what is coming before you play it, and make it clear that looking away is fine.'
  ]
},
{
  type: 'video',
  title: 'Cut Piece',
  caption: 'Yoko Ono (b. 1933), <i>Cut Piece</i>, first performed 1964 — Sogetsu Art Center, Tokyo; New York, 1965',
  yt: '8Sc47KfJjcI',
  watchFor: 'At what point does watching start to feel uncomfortable — and why?',
  points: [
    'She sits still on a stage with a pair of scissors in front of her.',
    'The audience are invited, one at a time, to come up and cut away a piece of her clothing.',
    'She does not move, and does not speak.',
    'The audience are not watching the work. They <i>are</i> the work.'
  ],
  notes: [
    'CONTENT WARNING — say it before you play. See the previous slide.',
    'Watch three or four minutes. You do not need the end.',
    'The point for today: this is audience participation taken to its limit. Kaprow invited the audience in; Ono hands them the scissors and the responsibility.',
    'Afterwards, take answers to the “watch for”. The discomfort is the content, and naming it is the whole discussion.',
    'CORRECTED: her slide spelled it “Cut piese”.'
  ]
},

/* ===== PART 6 — FLUXUS ===== */
{
  type: 'section',
  title: '{{fluxus}}',
  sub: 'A group that refused to be a movement.',
  notes: ['Ten minutes for Fluxus and Beuys.']
},
{
  type: 'bullets',
  title: 'What {{fluxus}} was — and was not',
  zh: '激浪派是什麼、不是什麼',
  items: [
    { head: 'The word is Latin', body: 'It means “flow”, or “flowing”.' },
    { head: 'A group of artists who worked and performed together', body: 'With their own publications and manifestos.' },
    { head: 'But it is not a style, and not really a movement', body: 'It refused a fixed definition on purpose. That refusal <i>is</i> the position.' },
    { head: 'Maciunas’s core idea, 1962', body: 'Art should be more <i>concrete</i>. You do not need to interpret it. You only need to experience it directly.' }
  ],
  notes: [
    'Formally launched at George Maciunas’s festival in Wiesbaden, Germany, in 1962.',
    'The refusal to be defined is the learning objective — say why it matters: a movement with a fixed style can be collected, taught and sold. One that keeps moving is harder to capture.',
    'That is the same instinct as Tzara’s “Dada means nothing” in Week 3.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Is this destruction — or is it a kind of score?',
  notes: ['Prompt slide. Then Piano Activities.']
},
{
  type: 'video',
  title: 'Piano Activities',
  caption: 'George Maciunas (1931–1978), <i>Piano Activities</i>, performed at the Fluxus festival, Wiesbaden, 1962',
  yt: 'YibFHWZ66GQ',
  poster: 'img/maciunas-piano-activities.png',
  watchFor: 'Is this destruction — or is it a kind of score?',
  points: [
    'Performers were given written instructions: scratch, pluck, drop things on, and dismantle a piano.',
    'It is a score. It just happens to end with no piano.',
    'German television filmed it, and the broadcast caused a national scandal.',
    'A piano is the most respectable object in Western music. That is the point.'
  ],
  notes: [
    'It really is a score — there are written instructions, which is what makes it Fluxus rather than vandalism.',
    'The television broadcast made Fluxus famous in Germany overnight, mostly through outrage.',
    'Compare with Tinguely earlier: a machine destroying itself, and now an instrument being taken apart. Both are events, and both leave wreckage.'
  ]
},
{
  type: 'quote',
  title: 'Make art simple',
  zh: '讓藝術變簡單',
  lead: 'George Maciunas, 1965',
  quote: '“Simple, amusing, unpretentious, concerned with insignificances, require no skill or countless rehearsals… obtainable by all and eventually produced by all.”',
  cite: 'George Maciunas, “Fluxus Art Amusement”, 1965',
  plain: [
    'Anything can be art, and anyone can do it.',
    'No skill needed. No rehearsals. Nothing important.',
    'Available to everyone — and in the end, made by everyone.',
    'It breaks art’s boundaries, questions who is performer and who is audience, and blurs art and life.'
  ],
  ask: 'If no skill is needed and anyone can do it, is there anything left that makes it art?',
  notes: [
    'This is Quiz Question 6: simple, easy to do, and inseparable from life itself.',
    'ASK the question on screen and take two or three answers — the full version is the third discussion question at the end.',
    'Note the politics: Maciunas meant this seriously and economically. Art that requires no training and no expensive materials cannot be monopolised.'
  ]
},
{
  type: 'bullets',
  title: 'Joseph Beuys (1921–1986)',
  zh: '波依斯',
  items: [
    { head: 'His materials were fat, felt, and animals', body: 'Rabbits, deer, bees — and later a coyote.' },
    { head: '{{expandedart}}', body: 'Erweiterter Kunstbegriff: the material of art can be any object or any action.' },
    { head: 'Art comes out of life — and shapes life back', body: 'It is not a separate room you visit.' },
    { head: 'And so: {{socialsculpture}}', body: 'If society can be shaped like a material, then “everyone is an artist”.' }
  ],
  notes: [
    'Fat and felt come from his own war story: he said Tatars wrapped him in fat and felt after his plane crashed in Crimea. Historians doubt the story. He told it anyway, and the materials carry it.',
    'Whether or not it happened is a good question about myth and authorship — but do not spend long on it.',
    '“Everyone is an artist” is the strongest form of this week’s final discussion question.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Who is really leading whom — Beuys the coyote, or the coyote Beuys?',
  notes: ['Prompt slide. Then the Beuys film.']
},
{
  type: 'video',
  title: 'I Like America and America Likes Me',
  caption: 'Joseph Beuys, <i>I Like America and America Likes Me</i>, May 1974 — René Block Gallery, New York',
  yt: 'IjI3_w9ZbX0',
  poster: 'img/beuys-i-like-america.png',
  watchFor: 'Who is really leading whom — Beuys the coyote, or the coyote Beuys?',
  points: [
    'He flew to New York wrapped in felt, was carried by ambulance to the gallery, and never touched American ground.',
    'He then lived in a room with a wild coyote for three days.',
    'Felt, a walking stick, a pile of Wall Street Journals, and the animal.',
    'Then he was wrapped up again and flown home. He saw nothing of America except the coyote.'
  ],
  notes: [
    'The refusal to touch the ground is the whole conceit: he came to America to meet only the thing America had tried to eliminate.',
    'The coyote is sacred in several Native American traditions and was hunted as vermin by settlers. That is why he chose it.',
    'The Wall Street Journals were delivered daily, and the coyote urinated on them.',
    'Take answers to the “watch for” afterwards. The honest answer is that over three days it changes direction more than once.'
  ]
},

/* ===== PART 7 — WRAP-UP AND QUIZ ===== */
{
  type: 'break',
  title: 'Where today went',
  zh: '今天的路線',
  chain: ['an empty room', 'a blue body', 'a jump', 'a burning machine', 'a rifle', 'four minutes of silence', 'a pair of scissors', 'a broken piano', 'a coyote'],
  chainLabel: 'Nine things that happened — and then stopped happening.',
  after: {
    label: 'And what we have left.',
    items: [
      'Photographs. Scraps. Scores. Reconstructions.',
      'The artwork moved out of the object and into time.',
      'So it is now made by the artist, the audience, and the room together.',
      'Next week: what happens when artists take that outside altogether.'
    ]
  },
  notes: [
    'Ten minutes for wrap-up and preview.',
    'Read the chain out loud. Nine events, and not one of them still exists.',
    'The summary sentence: this week the artwork stopped being a thing you keep and became a thing that happens.',
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
    'Klein said the real artwork was the performance, and the canvas only its trace. If the work was an event that is over, what exactly are we looking at when we look at the photograph or the canvas today?',
    'Cage gave up the composer’s control to {{chance}}; Kaprow refused fixed scripts. Does removing the artist’s control make a work more honest — or does it just move the authorship into who set the event up in the first place?',
    'Maciunas wanted art “anyone could do — life itself”, and Beuys said everyone is an artist. If art dissolves completely into everyday life, does the word “art” still mean anything?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2.',
    'Question 1 is the best opener — it has been building since the first slide.',
    'Question 3 is the hardest and the most rewarding, and it reaches back to Danto and the Brillo Box last week.'
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
  q: 'According to {{restany}}’s {{nouveaurealisme}} manifesto, what was the movement’s main goal?',
  options: [
    'To master the technical precision of Hard-Edge and Color-field painting.',
    'To record sociological reality directly, without expressionistic rhetoric.',
    'To express the artist’s inner emotional state through energetic brushwork.',
    'To promote Social Realism as government political propaganda.'
  ],
  why: 'Art stops representing reality and starts using it. Option C is exactly what they rejected — Abstract Expressionism.',
  notes: ['Answer: B. If anyone picks C, that is last week’s and the week before’s material — a useful confusion to correct.']
},
{
  type: 'quiz', n: 2, answer: 0,
  q: 'What was the main conceptual goal of Klein’s <i>The Void</i> (1958)?',
  options: [
    'To explore {{immateriality}} by presenting a completely empty gallery as art.',
    'To show how difficult it is to keep a gallery space perfectly clean.',
    'To test how many people can fit into a room before it becomes unsafe.',
    'To provide a space for other artists to hang work in future.'
  ],
  why: 'An empty white room, three thousand visitors, and blue cocktails at the door.',
  notes: ['Answer: A.']
},
{
  type: 'quiz', n: 3, answer: 1,
  q: 'What was the main conceptual point of Tinguely’s <i>Homage to New York</i> (1960)?',
  options: [
    'A demonstration of flawless automated engineering in public spaces.',
    'A critique of mechanical civilisation, expressed through a self-destroying event.',
    'The development of efficient scrap recycling for future {{kinetic}} sculpture.',
    'A celebration of the permanence and durability of industrial machinery.'
  ],
  why: 'A machine built to be useless and then to destroy itself, in the garden of a museum.',
  notes: ['Answer: B. Options A and D are both the opposite of what happened.']
},
{
  type: 'quiz', n: 4, answer: 1,
  q: 'How did Cage’s <i>4′33″</i> change the composer’s role?',
  options: [
    'The composer conducts the audience in a vocal performance.',
    'Control shifts from the composer’s intent to {{chance}} and everyday sound.',
    'The composer takes total mastery over every decibel produced.',
    'Composition is limited strictly to electronic synthesisers.'
  ],
  why: 'He stopped choosing. The room, the audience and the weather compose it instead.',
  notes: ['Answer: B. Option C is the exact inversion — a good check that they understood.']
},
{
  type: 'quiz', n: 5, answer: 0,
  q: 'Which is essential to Kaprow’s definition of a {{happening}}?',
  options: [
    'An event that dissolves the boundary between performer and audience.',
    'A scripted play performed by professional actors to a seated audience.',
    'A work that can be repeated perfectly in several different cities.',
    'A solo performance that excludes the surrounding environment.'
  ],
  why: 'Made together by performers and audience — and it happens only once.',
  notes: ['Answer: A. Option C is directly contradicted by “cannot repeat”.']
},
{
  type: 'quiz', n: 6, answer: 3,
  q: 'According to Maciunas and the {{fluxus}} manifesto, what should a Fluxus work be?',
  options: [
    'Highly complex technical mastery requiring years of specialised training.',
    'Large-scale monuments that stay permanently fixed in public squares.',
    'A specific aesthetic style using only expensive and rare materials.',
    'Simple, easy to do, and inseparable from life itself.'
  ],
  why: '“Obtainable by all and eventually produced by all.” No skill, no rehearsals, nothing precious.',
  notes: [
    'Answer: D.',
    'Close by linking to the last discussion question — this is the claim that makes the category “art” hardest to hold on to.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['nouveaurealisme', 'actionperformance', 'immateriality', 'ikb', 'anthropometry', 'accumulation', 'kinetic', 'chance', 'happening', 'fluxus', 'expandedart', 'socialsculpture'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
