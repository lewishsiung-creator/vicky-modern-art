/* ------------------------------------------------------------------
   Unit 10 — Borrowed Images
   The end of originality and the politics of representation

   The last week of the course. The closing slide looks back over the
   whole semester, so it is written to end something.

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan. Three films are embedded from the YouTube
   sources printed on her own slides.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- modern to postmodern --- */
  subjectphilosophy: {
    en: 'philosophy of the subject', zh: '主體哲學',
    def: 'The modern worldview: the rational human being is the centre of knowledge and value. Descartes — “I think, therefore I am.”',
    zhDef: '現代的世界觀：理性的人是知識與價值的中心。笛卡兒：「我思故我在。」'
  },
  postmodernism: {
    en: 'postmodernism', zh: '後現代主義',
    def: 'Not simply “after modernism”. A set of tendencies that both continue modern thought and break it open.',
    zhDef: '並非單純的「現代主義之後」，而是一組既延續又撕裂現代思維的傾向。'
  },
  grandnarrative: {
    en: 'grand narrative', zh: '大敘事',
    def: 'One big story that claims to explain everything. Lyotard: postmodernism is “incredulity toward grand narratives”.',
    zhDef: '宣稱能解釋一切的大故事。李歐塔：後現代就是「對大敘事的不信任」。'
  },
  deconstruction: {
    en: 'deconstruction', zh: '解構',
    def: 'Hassan’s first tendency: breaking old patterns apart. Uncertain, fragmented, with no fixed meaning.',
    zhDef: '哈山所指的第一種傾向：拆解舊有的模式。不確定、碎裂、沒有固定意義。'
  },
  reconstruction: {
    en: 'reconstruction', zh: '重構',
    def: 'Hassan’s second tendency: building something new out of the pieces — through irony, mixing, hybridity and participation.',
    zhDef: '哈山所指的第二種傾向：以碎片建構新事物，透過反諷、混合、雜揉與參與。'
  },

  /* --- the movements --- */
  neoexpressionism: {
    en: 'Neo-Expressionism', zh: '新表現主義',
    def: 'Late 1970s to mid-1980s. A return to rough, emotional, figurative painting — against the coolness of Minimalism and Conceptual Art.',
    zhDef: '1970 年代末至 1980 年代中期。回歸粗獷、情緒化的具象繪畫，以反抗極簡與觀念藝術的冷淡。'
  },
  graffitiart: {
    en: 'Graffiti Art', zh: '塗鴉藝術',
    def: 'Unauthorised image-making in public city space, from 1970s New York. It entered the gallery and the market in the early 1980s.',
    zhDef: '1970 年代紐約街頭未經許可的公共創作，於 1980 年代初進入畫廊與市場。'
  },
  neoconceptualism: {
    en: 'Neo-Conceptualism', zh: '新觀念主義',
    def: '1970s–90s work continuing Conceptual Art’s spirit, examining capitalism, mass media and personal identity.',
    zhDef: '1970 至 90 年代延續觀念藝術精神的創作，探討資本主義、大眾媒體與個人身分。'
  },
  appropriation: {
    en: 'appropriation', zh: '挪用',
    def: 'Taking existing images from art history, advertising or media, and re-presenting them as new work.',
    zhDef: '取用藝術史、廣告或媒體中既有的影像，重新呈現為新的作品。'
  },
  highlow: {
    en: 'high and low culture', zh: '高低文化',
    def: 'The old line between “fine art” and advertising, comics or the street. Postmodernism rubs it out.',
    zhDef: '「高等藝術」與廣告、漫畫或街頭之間的舊界線。後現代主義將其抹除。'
  },
  deathoftheauthor: {
    en: 'the death of the author', zh: '作者之死',
    def: 'Roland Barthes’s claim that a work’s meaning does not come from its maker. Rosalind Krauss added that “originality” is itself a modernist myth.',
    zhDef: '羅蘭・巴特主張作品的意義並非來自作者。克勞斯進一步指出，「原創性」本身即是現代主義的神話。'
  },

  /* --- feminism --- */
  feminism: {
    en: 'feminism', zh: '女性主義',
    def: 'A human-rights idea and a social movement, aimed at expanding women’s rights and achieving gender equality.',
    zhDef: '一種人權理念與社會運動，旨在擴展女性權利、實現性別平等。'
  },
  feministarthistory: {
    en: 'feminist art history', zh: '女性主義藝術史',
    def: 'A field from the early 1970s: recover women artists, expose gender bias, and study how gender shapes both making and seeing.',
    zhDef: '始於 1970 年代初的研究領域：重新發掘女性藝術家、揭露性別偏見，並研究性別如何形塑創作與觀看。'
  },
  guerrillagirls: {
    en: 'Guerrilla Girls', zh: '游擊隊女孩',
    def: 'An anonymous feminist collective founded in 1985. Gorilla masks, dead women artists’ names, posters — and statistics.',
    zhDef: '1985 年成立的匿名女性主義團體。以大猩猩面具、已故女性藝術家之名、海報，以及統計數據行動。'
  },
  weeniecount: {
    en: 'the Weenie Count', zh: '「數老二」統計',
    def: 'Their method: literally count the works by women, and the naked female bodies, in a museum — and publish the numbers.',
    zhDef: '她們的方法：實地清點美術館中女性藝術家的作品數與裸體女性形象數，並公開數字。'
  }
};

const SECTIONS = [
  { title: '1 · The Question',        zh: '本週提問',   start: 0 },
  { title: '2 · Modern → Postmodern', zh: '現代到後現代', start: 4 },
  { title: '3 · Neo-Expressionism',   zh: '新表現主義', start: 11 },
  { title: '4 · Graffiti Art',        zh: '塗鴉藝術',   start: 23 },
  { title: '5 · Feminism',            zh: '女性主義',   start: 29 },
  { title: '6 · The Art Court',       zh: '藝術法庭',   start: 39 },
  { title: '7 · Appropriation',       zh: '挪用',       start: 46 },
  { title: '8 · Closing & Quiz',      zh: '總結與測驗', start: 49 }
];

const SLIDES = [

/* ===== PART 1 — THE QUESTION ===== */
{
  type: 'title',
  title: 'Borrowed Images',
  sub: 'The end of originality, and the politics of representation.',
  meta: 'Unit 10 · the last one',
  notes: [
    'Five minutes for framing.',
    'The guiding question, and write it on the board: <b>whose originality? whose image?</b>',
    'Frame it as one move with two uses: appropriation challenges who gets to be original, and it challenges who gets to be seen.',
    'This is the final session, so the closing slide near the end looks back over the whole semester. Leave time for it.'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we finish',
  zh: '上週與本週',
  items: [
    { head: 'Last week: the object went, and only the record stayed', body: 'Video, the body, and then documentation — which was how we reached every work in the room.' },
    { head: 'This week: the images were never new to begin with', body: 'Artists stop pretending to invent, and start openly borrowing.' },
    { head: 'And borrowing turns out to be two different things', body: 'A challenge to <i>originality</i>. And a challenge to <i>who gets represented</i>.' },
    { head: 'So the last question of the course', body: 'Whose originality? Whose image?' }
  ],
  notes: [
    'Recap Unit 9 in one line, then set up today’s double meaning.',
    'The two halves of today: the first is aesthetic appropriation (Koons, Neo-Expressionism, graffiti), the second is political appropriation (feminist art, the Guerrilla Girls, Kruger).',
    'Say that split out loud now. It is the architecture of the session.'
  ]
},
{
  type: 'timeline',
  title: 'How the ground of truth kept moving',
  zh: '真理的根據如何移動',
  stops: [
    { when: 'Premodern　前現代', what: 'Truth comes from <b>God and tradition</b>. You do not argue with it; you inherit it.' },
    { when: 'Modernity　現代性', what: 'Truth comes from <b>reason, science and progress</b>. The Enlightenment. Unit 1 began here.' },
    { when: 'Postmodernity　後現代性', what: '<b>Plurality, difference, scepticism.</b> Not one truth — many, and each with someone’s interest behind it.' }
  ],
  notes: [
    'Three stops. Click through them.',
    'This is the whole course in three cards: they started in the middle column in Unit 1 and have been sliding right ever since.',
    'Do not spend more than two minutes. The next slide does the work.'
  ]
},
{
  type: 'section',
  title: 'Whose originality? Whose image?',
  ask: 'Two questions that turn out to be the same move.',
  notes: [
    'The guiding question. Say it and leave it up.',
    'Take a couple of answers if the room is warm, then move into the theory.'
  ]
},

/* ===== PART 2 — MODERN TO POSTMODERN ===== */
{
  type: 'bullets',
  title: 'Quick review: Modernism',
  zh: '快速複習：現代主義',
  kicker: 'Unit 1, at the start of the course',
  items: [
    { head: 'The subject', body: '{{subjectphilosophy}} — people are the centre of knowledge and value. Descartes: “I think, so I am.”' },
    { head: 'Rationalisation', body: 'Rules control activity. Science, art and social norms become separate and professional.' },
    { head: 'Modernist art wants progress and objective truth', body: 'It values purity, clarity and order — not personal feeling.' },
    { head: 'Representation', body: 'Art uses images and forms to show the world.' }
  ],
  notes: [
    'Ten minutes for this whole modern-to-postmodern section.',
    'This is Unit 1 in four lines. Do not re-teach it — remind them.',
    'The word to underline is <b>objective</b>. That is what the next slide attacks.'
  ]
},
{
  type: 'bullets',
  title: 'The postmodern critique',
  zh: '後現代的批判',
  items: [
    { head: 'Reason and science do not always make a better world', body: 'The twentieth century was the argument against that.' },
    { head: 'So {{postmodernism}} questions faith in “progress” and “truth”', body: 'In thought, politics, society and culture.' },
    { head: 'Lyotard’s line', body: 'Postmodernism is “incredulity toward {{grandnarrative}}s” — no longer believing the big stories.' },
    { head: 'The systems meant to liberate people became forms of oppression', body: 'Capitalism. Socialism. Both promised freedom.' },
    { head: 'Today’s idea of “postmodern” starts in Paris, May 1968', body: 'With the protests.' }
  ],
  notes: [
    'A grand narrative is a story that claims to explain everything and to be heading somewhere: progress, revolution, salvation.',
    'Lyotard’s claim is not that those stories are false — it is that people stopped believing them.',
    'They met a version of this in Unit 1 with Belting and Danto: no single story that includes everything. Say so; it lands better as a return than as news.',
    'This is Quiz Question 1.'
  ]
},
{
  type: 'twocol',
  title: 'Ihab Hassan’s two tendencies',
  left: {
    head: '{{deconstruction}}',
    zh: '解構',
    lead: 'It breaks old patterns.',
    items: [
      'Uncertain.',
      'Fragmented.',
      'No fixed meaning.',
      'It unsettles what was settled.'
    ]
  },
  right: {
    head: '{{reconstruction}}',
    zh: '重構',
    lead: 'It builds something new from the pieces.',
    items: [
      'Irony.',
      'Mixing and hybridity.',
      'Action and participation.',
      'It makes new forms out of the fragments.'
    ]
  },
  notes: [
    'Hassan found both tendencies inside postmodernism — not one or the other.',
    'The useful thing for students: postmodernism is not only demolition. Half of it is construction.',
    'And “post” carries two meanings at once: going <i>beyond</i> modernism, and modernism starting to feel old.',
    'This is Quiz Question 2 — reconstruction is the irony-and-hybridity half.'
  ]
},
{
  type: 'grid',
  title: 'Three ways of standing in the world',
  zh: '三種世界觀',
  cols: 3,
  cells: [
    { label: 'Premodern', head: 'Authority', body: 'God and tradition decide. Meaning is given to you.' },
    { label: 'Modern', head: 'Reason', body: 'Science and logic decide. Meaning can be discovered, and it is the same for everyone.' },
    { label: 'Postmodern', head: 'Position', body: 'Culture and power shape what counts as true. Meaning depends on where you stand.' }
  ],
  notes: [
    'A compact comparison. One click each.',
    'The third card is the whole of today: if meaning depends on where you stand, then who gets to stand there matters — which is the feminist half of the session.'
  ]
},
{
  type: 'section',
  title: 'If there is no longer one truth, one history, one standard of beauty —',
  sub: 'can there still be only one definition of art?',
  ask: 'You have spent ten units watching that definition come apart. What is left of it?',
  notes: [
    'Take three or four answers. They have a lot to draw on by now.',
    'Do not resolve it. The closing slide comes back to exactly this.'
  ]
},
{
  type: 'bullets',
  title: 'What artists did with that',
  zh: '藝術家的回應',
  items: [
    { head: 'Borrowing over inventing', body: 'Artists stop claiming to invent something wholly new. They openly borrow and recombine what already exists.' },
    { head: '{{highlow}} blur together', body: 'The line between fine art and advertising, graffiti or mass media becomes porous.' },
    { head: 'Stylistic pluralism', body: 'No single style is the correct one. Many coexist, and all are equally legitimate.' }
  ],
  notes: [
    'These three are the practical consequences of everything on the previous slides.',
    'The first one is the definition of {{appropriation}}, which gets its own slide after the activity.',
    'Then the three directions those artists took — next slide.'
  ]
},
{
  type: 'flow',
  title: 'Three directions out',
  zh: '三個方向',
  stages: [
    { head: 'Return to painting', body: '{{neoexpressionism}} — painting, the figure, raw emotion.' },
    { head: 'Street into the art world', body: '{{graffitiart}} — public space, popular culture.' },
    { head: 'Ideas into society and media', body: '{{neoconceptualism}} — image, language, identity, power.' }
  ],
  foot: 'Art becomes open. Many directions at once, and no obligation to pick one.',
  notes: [
    'Click through the three. This is the map of the rest of the session.',
    'Note that these are simultaneous, not sequential. That is the point of pluralism.'
  ]
},

/* ===== PART 3 — NEO-EXPRESSIONISM ===== */
{
  type: 'section',
  title: '{{neoexpressionism}}',
  sub: 'Return to painting.',
  notes: ['Ten minutes for Neo-Expressionism and Graffiti Art together. Keep moving.']
},
{
  type: 'bullets',
  title: 'Return to painting',
  zh: '回歸繪畫',
  items: [
    { head: 'Popular in the United States, Italy and Germany', body: 'Late 1970s to the mid-1980s.' },
    { head: 'Rough texture, strong feeling', body: 'Shapes twisted. Brushstrokes wild.' },
    { head: 'The paintings feel violent and unfinished', body: 'And they do not tell a clear story.' },
    { head: 'It is a reaction', body: 'Against Minimalism and Conceptual Art — Unit 6. Against art that had become an idea on a wall label.' }
  ],
  notes: [
    'The reaction is the point: after a decade of cool, planned, dematerialised work, a generation picks up brushes and makes a mess on purpose.',
    'Compare with Unit 3: Abstract Expressionism also made a mess, but it believed the mess was sincere. This generation knows it is quoting.',
    'This is Quiz Question 3.'
  ]
},
{
  type: 'bullets',
  title: 'One movement, five names',
  zh: '一個運動，五個名字',
  items: [
    { head: 'Neue Wilde　—　Germany', body: 'Where the influence was strongest.' },
    { head: 'Transavanguardia　—　Italy' },
    { head: 'Figuration Libre　—　France' },
    { head: 'New Painting　—　Britain' },
    { head: 'Bad Painting　—　United States' }
  ],
  notes: [
    'Five countries, five names, roughly one thing. That is itself a postmodern fact — no central authority naming it.',
    'The American name is the most honest: Bad Painting was meant as an insult and was adopted anyway.'
  ]
},
{
  type: 'compare',
  title: 'Georg Baselitz',
  ask: 'One of these is the right way up. Which one — and how would you know?',
  left:  { src: 'img/baselitz-portrait.jpg', label: 'Georg Baselitz (1938–2026)', tag: 'The artist' },
  right: { src: 'img/baselitz-grosse-nacht.jpg', label: '<i>Die große Nacht im Eimer</i> (The Big Night Down the Drain), 1963', tag: '1963' },
  reveal: [
    { side: 'right', text: 'This 1963 painting was seized by the public prosecutor in Berlin for obscenity. He was 25.' },
    { side: 'right', text: 'From 1969 he began painting his figures <b>upside down</b>.' },
    { side: 'left',  text: 'Not to be strange — to stop you reading the picture as a story, and make you look at the paint.' }
  ],
  notes: [
    'ASK before you click. The inversion is the next slide, so let the question sit.',
    'He died on 30 April 2026, in Salzburg, aged 88 — four months before this class. Her slide had the dates right. Worth saying out loud: this is not a historical figure, it is someone who was still working this year.',
    'The 1963 seizure is worth one sentence: this is a painter who was prosecuted at 25 and knighted by the art world at 50.'
  ]
},
{
  type: 'artwork',
  src: 'img/baselitz-orangenesser.jpg',
  title: 'Orangenesser (IX)',
  caption: 'Georg Baselitz, <i>Orangenesser (IX)</i> — “Orange Eater”, 1981',
  ask: 'The figure is upside down. What does your eye do instead of reading it?',
  points: [
    'A man eating an orange — inverted.',
    'You cannot settle into the story, so you notice the brush, the colour, the surface.',
    'Baselitz: “I proceed from a state of disharmony, from ugly things.”',
    'The subject is not what the picture is about. The <i>painting</i> is.'
  ],
  notes: [
    'ASK and let them notice how hard it is to stop trying to right the image.',
    'That difficulty is the mechanism. Inversion forces the eye off narrative and onto paint.',
    'The quotation is from 1988 and it is on her slide. Read it out.',
    'This is Quiz Question 4.'
  ]
},
{
  type: 'bullets',
  title: 'Baselitz — five threads',
  zh: '巴塞利茲：五條線索',
  items: [
    { head: 'Inversion, and a new way of seeing', body: 'Turn the figure over and the picture stops being a window.' },
    { head: 'Raw style, high emotional intensity' },
    { head: 'The figure, heroes, and the pure image', body: 'He keeps the human body when almost nobody else does.' },
    { head: 'War trauma and German identity', body: 'Born 1938, in Saxony. He was seven when the war ended, and he grew up in the ruins.' },
    { head: 'Primitivism and his African art collection', body: 'Which is worth naming honestly — a European artist collecting African objects carries its own history.' }
  ],
  notes: [
    'The German-identity thread runs through all three German painters today. Say it once here and it explains Kiefer and Immendorff too.',
    'On the last point: do not skip it and do not sanitise it. The relationship between European modernism and African art has been a live argument since Unit 2.'
  ]
},
{
  type: 'compare',
  title: 'Anselm Kiefer',
  left:  { src: 'img/kiefer-white-cube-1.jpg', label: 'Anselm Kiefer (b. 1945), recent exhibition at White Cube', tag: 'Installation' },
  right: { src: 'img/kiefer-white-cube-2.jpg', label: 'Another view of the same exhibition', tag: 'Installation' },
  reveal: [
    { side: 'left',  text: 'The paintings are enormous, and they are not only paint.' },
    { side: 'right', text: 'Straw, ash, lead, clay, dried flowers, shellac — built up until the surface is a landscape.' },
    { side: 'right', text: 'And they are made to age badly. Material and memory decaying together.' }
  ],
  notes: [
    'Kiefer was born in March 1945, in the last weeks of the war, in a cellar during a bombing raid. That fact is not decoration — it is his subject.',
    'The materials matter: lead for alchemy and weight, ash for what is burned, straw for harvest and for burning.',
    'Link back to Unit 3’s Tàpies and Unit 8’s Arte Povera — real matter carrying history. Kiefer is the German version of that argument.'
  ]
},
{
  type: 'artwork',
  src: 'img/kiefer-white-cube-3.jpg',
  title: 'Starting over, in 1945',
  caption: 'Anselm Kiefer — installation view',
  ask: 'A country decides to begin again from zero. What happens to what came before?',
  points: [
    'Kiefer: “After the ‘misfortune’, as we all name it so euphemistically now, people thought that in 1945 we were starting all over again.”',
    'Note the word he puts in quotation marks. “The misfortune” — as if it had happened <i>to</i> Germany.',
    'His whole practice refuses that clean start.',
    'He paints the myths, the architecture and the forests that the Nazis used — and refuses to let them be forgotten or reused.'
  ],
  notes: [
    'ASK, then read the quotation slowly. The euphemism is the argument.',
    'In the late 1960s he photographed himself performing the Nazi salute in various European locations, to force the subject back into view. It was extremely controversial and it is still argued about.',
    'The generational point: his parents’ generation wanted silence. His insisted on looking.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'How much of what you are looking at is <i>paint</i> — and how much is just material?',
  notes: ['Prompt slide. Ten seconds, then play.']
},
{
  type: 'video',
  title: 'Anselm Kiefer',
  caption: 'Kiefer in the studio',
  yt: 'fsRIXZr6l7s',
  poster: 'img/kiefer-video-poster.jpg',
  watchFor: 'How much of what you are looking at is paint — and how much is just material?',
  points: [
    'He works at the scale of a hangar, because the paintings are the size of walls.',
    'Lead sheets, fire, ash, plants, water — applied, burned, left outside.',
    'He has said he is not making paintings so much as ruins.',
    'And the work keeps changing after it leaves him.'
  ],
  notes: [
    'Three or four minutes.',
    'The connection to make afterwards: this is Unit 7’s Process Art and Unit 8’s entropy, arriving inside a painting.',
    'Embedded from the YouTube link on her own slide — it needs internet.'
  ]
},
{
  type: 'bullets',
  title: 'Kiefer — five threads',
  zh: '基弗：五條線索',
  items: [
    { head: 'German history and Nazi trauma', body: 'The subject his parents’ generation refused to discuss.' },
    { head: 'National identity, and the artist’s role in it' },
    { head: 'Myth, religion, and forgotten women', body: 'He returns repeatedly to figures written out of the histories.' },
    { head: 'Unconventional materials', body: 'Straw, ash, lead, clay, dried flowers.' },
    { head: 'Fragility and tension in the material', body: 'The works are built to decay, and they do.' }
  ],
  notes: [
    'One minute. Then Immendorff, quickly.'
  ]
},
{
  type: 'compare',
  title: 'Jörg Immendorff — Café Deutschland',
  ask: 'A nightclub with a wall through the middle of it. What is the wall?',
  left:  { src: 'img/immendorff-cafe-deutschland-iv.jpg', label: 'Jörg Immendorff (1945–2007), <i>Café Deutschland IV</i>, 1978', tag: '1978' },
  right: { src: 'img/immendorff-cafe-deutschland-xiii.jpg', label: '<i>Café Deutschland XIII</i>, 1982', tag: '1982' },
  reveal: [
    { side: 'left',  text: 'A crowded nightclub, painted again and again across a long series.' },
    { side: 'right', text: 'The Berlin Wall runs through the room, and East and West Germans dance on both sides of it.' },
    { side: 'left',  text: 'He made these while in real correspondence with the East German painter A. R. Penck, across a border they could not cross.' }
  ],
  notes: [
    'ASK — most classes get to the Wall quickly once they look.',
    'The Penck collaboration is the fact that makes the series serious rather than symbolic. They met in secret and exchanged work.',
    'Immendorff was a student of Beuys — Unit 6 — and made political actions before he made paintings.',
    'Her slide’s last point is worth repeating: central in the West, and largely overlooked in Asia. Say that plainly to a class in Taiwan.'
  ]
},

/* ===== PART 4 — GRAFFITI ART ===== */
{
  type: 'section',
  title: '{{graffitiart}}',
  sub: 'Street → art world.',
  notes: ['Five or six minutes.']
},
{
  type: 'bullets',
  title: 'From the street to the gallery',
  zh: '從街頭到畫廊',
  items: [
    { head: 'Mid-1960s Philadelphia, then New York', body: 'Names written on walls, then on subway trains.' },
    { head: 'Part of the same youth culture as rap, DJing and breakdancing', body: 'Four elements of one thing, not four separate hobbies.' },
    { head: 'Street to gallery: Jean-Michel Basquiat and Keith Haring', body: 'Both moved into the art market in the early 1980s.' },
    { head: 'And the argument that never went away', body: 'Art, or vandalism?' },
    { head: 'It blurs {{highlow}}', body: 'An illegal street act becomes a market commodity — which is postmodernism challenging the institution from below.' }
  ],
  notes: [
    'CORRECTED: her slide spells him “Jean-Micheal”. It is Jean-Michel Basquiat.',
    'The art-or-vandalism argument is worth thirty seconds of the room’s opinion. Most students have one.',
    'The hard version of the question: it was vandalism when it was on a train and art when it was on a canvas. What changed — the object, or who owned it?'
  ]
},
{
  type: 'compare',
  title: 'Jean-Michel Basquiat (1960–1988)',
  ask: 'Crowns, words, crossings-out. Why cross a word out and leave it readable?',
  left:  { src: 'img/basquiat-work.jpg', label: 'Jean-Michel Basquiat', tag: 'Work' },
  right: { src: 'img/basquiat-self-portrait.jpg', label: '<i>Self-Portrait</i>, 1982', tag: 'Self-portrait' },
  reveal: [
    { side: 'left',  text: 'He crossed words out so you would look at them harder. His own explanation.' },
    { side: 'right', text: 'Crowns for Black musicians, athletes and writers he wanted named as royalty.' },
    { side: 'right', text: 'He started writing on walls as SAMO. By 23 he was showing beside Warhol. He died at 27.' }
  ],
  notes: [
    'ASK and use his own answer: “I cross out words so you will see them more; the fact that they are obscured makes you want to read them.”',
    'The crowns are a deliberate act of art-historical correction — putting Black figures where European painting put kings.',
    'He is the first Black artist to be treated as a superstar by that market, and the market’s treatment of him is part of the story.'
  ]
},
{
  type: 'compare',
  title: 'Keith Haring (1958–1990)',
  left:  { src: 'img/haring-self-portrait.jpg', label: 'Keith Haring, <i>Self-Portrait</i>, 1985', tag: 'Self-portrait' },
  right: { src: 'img/haring-work.jpg', label: 'Keith Haring', tag: 'Work' },
  reveal: [
    { side: 'right', text: 'He drew in white chalk on the black paper of unused advertising panels in the subway.' },
    { side: 'left',  text: 'Hundreds of them, for free, where millions of commuters would pass. He was arrested repeatedly.' },
    { side: 'right', text: 'Then he opened the Pop Shop in 1986, selling the images cheaply — so that ordinary people could own them.' }
  ],
  notes: [
    'The Pop Shop is the interesting move, and it divided people: he was accused of selling out, and he answered that keeping the images expensive would have been the betrayal.',
    'Compare with Unit 5’s Maciunas — art anyone can have. Same instinct, twenty years later, in a shop.',
    'He died of AIDS-related illness in 1990, at 31, having spent his last years making work about the epidemic.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'He is drawing in public, fast, for free. Who is this <i>for</i>?',
  notes: ['Prompt slide, then play.']
},
{
  type: 'video',
  title: 'Keith Haring',
  caption: 'Haring drawing',
  yt: 'W04j0Je01wQ',
  watchFor: 'He is drawing in public, fast, for free. Who is this for?',
  points: [
    'One continuous line, no correction, no sketch.',
    'Made in front of people, in a public place.',
    'The speed is not showing off — a subway drawing had to be finished before he was caught.',
    'And it is legible to anybody, immediately. That was the point.'
  ],
  notes: [
    'Two or three minutes.',
    'Afterwards, take answers on the “watch for”. The good answer: for people who would never enter a gallery.',
    'Embedded from the YouTube link on her own slide.'
  ]
},

/* ===== PART 5 — NEO-CONCEPTUALISM AND FEMINISM ===== */
{
  type: 'section',
  title: '{{neoconceptualism}}',
  sub: 'Ideas → society and media.',
  notes: ['Ten minutes for this section. The second half of the session starts here.']
},
{
  type: 'bullets',
  title: 'What {{neoconceptualism}} is',
  zh: '新觀念主義是什麼',
  items: [
    { head: 'Diverse 1980s and 90s practices, continuing Conceptual Art’s spirit', body: 'Unit 6, twenty years on.' },
    { head: 'Shaped by postmodern theory', body: 'Which questions “progress” and the idea of individual genius.' },
    { head: 'Social critique, and resistance to being turned into a commodity' },
    { head: '{{appropriation}} as a strategy' },
    { head: 'And gender, race and class', body: 'This is where {{feminism}} enters the story — and it changes the questions.' }
  ],
  notes: [
    'The turn happens on the last point. Everything before today’s midpoint was appropriation as an aesthetic argument. From here it is a political one.',
    'Say that transition explicitly. It is the architecture of the whole session.'
  ]
},
{
  type: 'bullets',
  title: '{{feminism}}',
  zh: '女性主義',
  items: [
    { head: 'What it is', body: 'A human-rights idea and a social movement, aimed at expanding women’s rights and achieving gender equality.' },
    { head: '1949 — Simone de Beauvoir', body: '“One is not born, but rather becomes, a woman.” Gender is made, not given.' },
    { head: '1971 — the starting point for art history', body: 'Linda Nochlin’s essay, “Why Have There Been No Great Women Artists?”' },
    { head: 'And her answer', body: 'Not talent. <b>Institutions.</b> Women were barred from the life-drawing class, the apprenticeship, the academy — the whole route to becoming “great”.' }
  ],
  notes: [
    'Nochlin’s essay is the hinge, and her answer is the thing to make land: she refuses the question’s premise. She does not go hunting for forgotten geniuses. She asks what the word “great” was built on.',
    'That is exactly the institutional argument from Units 4 and 6, arriving from a different direction.',
    'The de Beauvoir date on her slide is 1960; the book is 1949. Minor, and corrected here.'
  ]
},
{
  type: 'grid',
  title: 'What {{feministarthistory}} set out to do',
  zh: '女性主義藝術史的任務',
  cells: [
    { label: '01', head: 'Find the women', body: 'Recover women artists, and look at their work again.' },
    { label: '02', head: 'Expose the bias', body: 'Show how art history treated men and women differently.' },
    { label: '03', head: 'Follow the gender', body: 'Show how gender shapes both the making of art and how people see it.' },
    { label: '04', head: 'Question the category', body: 'Study how ideas about “being a woman” are made, not born.' }
  ],
  foot: 'And since the 1990s the field has widened to include race, sexuality and class.',
  notes: [
    'Four aims, one click each.',
    'Point back across the course: Marisa Merz in Unit 8, Eva Hesse and Lynda Benglis in Unit 7, Niki de Saint Phalle in Unit 5, Agnes Denes and Nancy Holt in Unit 8. All of them arrived in the story because of this work.',
    'That is worth saying out loud in the last week. The reason those artists were in this course at all is that somebody did the recovering.'
  ]
},
{
  type: 'bullets',
  title: '{{guerrillagirls}}',
  zh: '游擊隊女孩',
  kicker: 'Founded 1985',
  items: [
    { head: 'An anonymous feminist collective', body: 'Fighting sexism and racism in the art world.' },
    { head: 'The founding moment', body: 'A 1984 exhibition at MoMA showed 165 artists. Thirteen were women.' },
    { head: 'Anonymity: gorilla masks and pseudonyms', body: 'Each member takes the name of a dead woman artist — Frida Kahlo, Käthe Kollwitz, Gertrude Stein.' },
    { head: 'The {{weeniecount}}, from 1989', body: 'They go into a museum and literally count: how many works by women, and how many naked female bodies.' },
    { head: 'And it is still going', body: 'Forty years of posters, worldwide.' }
  ],
  notes: [
    'The anonymity has a reason they state plainly: the issues matter more than their individual identities and careers — and it protects them from being blacklisted by the institutions they criticise.',
    'That is the second discussion question at the end of class.',
    'The Weenie Count is the strategic move: not an opinion, a number. An institution can dismiss a complaint; it is harder to dismiss its own catalogue.',
    'This is Quiz Question 5.'
  ]
},
{
  type: 'artwork',
  src: 'img/guerrilla-girls-poster.jpg',
  title: 'The poster',
  caption: 'Guerrilla Girls, <i>Do women have to be naked to get into the Met. Museum?</i>, 1989',
  ask: 'Read the numbers. What is the argument — and why is it a poster rather than an essay?',
  points: [
    'Less than 5% of the artists in the modern art sections were women.',
    '85% of the nudes were female.',
    'So women were in the museum overwhelmingly as subjects, not as makers.',
    'And it borrows the form of an advertisement to say so — which is exactly what Kruger does next.'
  ],
  notes: [
    'ASK and let them read the numbers out.',
    'The design fact worth naming: they bought advertising space on New York buses for this. The bus company initially refused it.',
    'The last point is the bridge to Kruger. Both take the visual language of advertising and turn it around.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'They are wearing gorilla masks. Does hiding their faces make the argument stronger, or easier to ignore?',
  notes: [
    'Prompt slide. This one is the second discussion question, planted early.'
  ]
},
{
  type: 'video',
  title: 'Guerrilla Girls',
  caption: 'The Guerrilla Girls',
  yt: '98mv3qqvGnw',
  poster: 'img/guerrilla-girls-video-poster.jpg',
  watchFor: 'Does hiding their faces make the argument stronger, or easier to ignore?',
  points: [
    'The masks came from a misspelling — somebody wrote “gorilla” for “guerrilla”, and they kept it.',
    'They give interviews in the masks, under dead artists’ names.',
    'So there is no individual career to promote, and no individual to punish.',
    'The work is the statistics. The costume is what gets it into the room.'
  ],
  notes: [
    'Two or three minutes.',
    'Afterwards take answers on the “watch for” — it is a genuine strategic question, not a rhetorical one.',
    'Embedded from the YouTube link on her own slide.'
  ]
},
{
  type: 'bullets',
  title: 'Barbara Kruger (b. 1945)',
  zh: '芭芭拉・克魯格',
  items: [
    { head: 'Text and image, pressed together', body: 'Found black-and-white photographs, with bold words across them.' },
    { head: 'She borrows advertising’s form', body: 'Because she worked in it — she was a designer and picture editor at Condé Nast for over a decade.' },
    { head: 'The signature look', body: 'Red and white, Futura Bold Oblique, over black-and-white photography.' },
    { head: 'Key works', body: '<i>Your Body Is a Battleground</i>, 1989. <i>We Don’t Need Another Hero</i>, 1987.' },
    { head: 'And the pronouns do the work', body: '“Your”. “We”. “I”. She never says who — so the sentence catches whoever is reading it.' }
  ],
  notes: [
    'The Condé Nast years are the key fact: she is not imitating advertising from outside. She was extremely good at making it.',
    'That is what makes her {{appropriation}} different from a parody — she has the real fluency.',
    'The pronoun point is worth a moment. Look at any of her works and ask the room: who is “you”?'
  ]
},
{
  type: 'compare',
  title: 'Two of hers',
  ask: 'Both use the exact grammar of an advertisement. What are they selling?',
  left:  { src: 'img/kruger-your-body-is-a-battleground.jpg', label: '<i>Untitled (Your Body Is a Battleground)</i>, 1989', tag: '1989' },
  right: { src: 'img/kruger-we-dont-need-another-hero.jpg', label: '<i>Untitled (We Don’t Need Another Hero)</i>, 1987', tag: '1987' },
  reveal: [
    { side: 'left',  text: 'Made for the 1989 March on Washington, for reproductive rights. A woman’s face split into positive and negative.' },
    { side: 'right', text: 'A girl admiring a boy’s bicep — a 1950s illustration — with the sentence cutting across it.' },
    { side: 'left',  text: 'They are selling nothing. That is the appropriation: the form of a sales pitch, pointed at power instead of product.' }
  ],
  notes: [
    'ASK first. “Nothing” is the answer, and getting there themselves is better than being told.',
    'Your Body Is a Battleground was a poster before it was an artwork — printed and carried in a demonstration.',
    'The 1987 work reuses a found illustration of exactly the kind of image the sentence rejects. Point that out.',
    'Now go straight into the activity — they have everything they need.'
  ]
},

/* ===== PART 6 — THE ART COURT ===== */
{
  type: 'section',
  title: 'Group discussion',
  sub: 'Appropriation, homage, or plagiarism?',
  notes: [
    'Twenty-five minutes, groups of five or six. This is the longest activity of the course.',
    'IMPORTANT: do not mention the 2013 lawsuit in Step 1. It is the reveal in Step 2, and the whole design turns on it.'
  ]
},
{
  type: 'artwork',
  src: 'img/kruger-vs-supreme.jpg',
  title: 'Step 1 — look first',
  caption: 'Barbara Kruger, <i>I shop therefore I am</i>, 1987　·　the Supreme box logo, 1994',
  ask: 'What do you notice? Look at colour · font · composition · message · purpose.',
  points: [
    'Take two minutes. Just look.',
    'Do not decide anything yet.',
    'Then your group votes — once, together.'
  ],
  notes: [
    'Five minutes for Step 1 including the vote.',
    'Give no framing and no history. Do NOT say the word lawsuit.',
    'Kruger’s piece is a play on Descartes — the same “I think, therefore I am” from the Modernism slide at the start of today. Save that observation; it is a good one to drop in later.',
    'Then move to the vote board and take one vote per group.'
  ]
},
{
  type: 'vote',
  title: 'Step 1 — the first vote',
  zh: '步驟一：第一次投票',
  question: 'What is Supreme doing? Each group chooses <b>one</b>, and completes the sentence: “We think it is ___ because ___.”',
  options: ['Appropriation', 'Homage', 'Plagiarism'],
  notes: [
    'Click an option to add a vote. The small − takes one away. Then press “Record this round”.',
    'Do NOT reveal any correct answer. There is not one.',
    'Every group must say its sentence out loud before you record its vote — the reasoning is the work, not the tally.',
    'You will come back to this exact slide at the end for the final vote. Use the menu (M) to return to it, and the two rounds will sit side by side.'
  ]
},
{
  type: 'section',
  title: 'Step 2 — and one more fact.',
  sub: 'In 2013, Supreme sued another brand for using a similar red-box design.',
  ask: 'Does that change your answer? Can you own something you borrowed?',
  notes: [
    'Five minutes. Reveal the fact, then let them react.',
    'The irony to point at: Supreme’s visual language has been compared to Kruger’s for thirty years, and Supreme argues that other brands may not use a similar design.',
    'Kruger herself was asked about it and replied, in part, “What a ridiculous clusterf***. I make my work about this kind of sadly foolish farce.” You may or may not want to quote that; it is genuinely her.',
    'The question shifts here, and say so: not “did Supreme copy Kruger?” but “can you claim ownership of something you yourself borrowed?”'
  ]
},
{
  type: 'grid',
  title: 'Step 3 — Art Court: four criteria',
  zh: '步驟三：藝術法庭的四項判準',
  cells: [
    { label: '01 · Similarity 相似度', head: 'How much was borrowed?', body: 'The colour, the font, the proportion, the whole idea?' },
    { label: '02 · Transformation 轉化', head: 'Was it changed into something new?', body: 'And does changing the <i>context</i> count as transformation?' },
    { label: '03 · Purpose 目的', head: 'Why was it borrowed?', body: 'To criticise something? To honour it? To sell something?' },
    { label: '04 · Power / Profit 權力與利益', head: 'Who gains?', body: 'Who gets money, and who gets attention?' }
  ],
  foot: 'Judge the case. Appropriation, homage, or plagiarism? <b>Give two reasons.</b>',
  notes: [
    'Eight minutes. Reveal the criteria one at a time.',
    'The criteria exist so nobody can stop at “it looks similar, so it is plagiarism”.',
    'Criterion 2 is the deep one, and the extension question for strong groups: Supreme moved the visual language from feminist critical art to streetwear branding. Is a change of context a transformation?',
    'Criterion 4 is the honest one: Kruger critiques consumer culture, and Supreme sells things. Follow the money.'
  ]
},
{
  type: 'section',
  title: 'Step 4 — now argue the other side.',
  sub: 'If you said plagiarism, build the strongest case for appropriation. And the other way round.',
  ask: 'Finish this: “We disagree with our first decision because…”',
  notes: [
    'Five minutes, and this is the best step in the activity.',
    'The purpose: to show that the same case gives different answers depending on which criterion you weigh most. There is no universal truth here — only positions that need arguments.',
    'That is postmodernism, demonstrated rather than defined. Say so afterwards.'
  ]
},
{
  type: 'section',
  title: 'Step 5 — the final vote.',
  sub: 'Press M and go back to “Step 1 — the first vote”. Record round two beside round one.',
  ask: 'After all that — appropriation, homage, or plagiarism?',
  notes: [
    'Three minutes. Use the menu (M) to jump back to the vote board, take the second vote, and press “Record this round” again. Both rounds will be listed together.',
    'Consensus is NOT the goal. A split — say 40% appropriation, 10% homage, 50% plagiarism — is a good outcome.',
    'Close with her line: <b>the disagreement is the point.</b>',
    'And the bigger question, which leads into the last part of the class: who has the right to own an image, a style, or an idea?'
  ]
},

/* ===== PART 7 — APPROPRIATION ===== */
{
  type: 'bullets',
  title: '{{appropriation}}',
  zh: '挪用',
  items: [
    { head: 'The definition', body: 'Reworking existing images from art history, advertising or media into new work.' },
    { head: 'And how it differs from collage', body: 'Collage cuts and glues the original. Appropriation <b>re-paints or re-photographs</b> it. Nothing physical is borrowed.' },
    { head: '{{deathoftheauthor}}', body: 'Barthes: meaning does not come from the maker. Krauss: “originality” is itself a modernist myth.' },
    { head: 'Douglas Crimp', body: '“Underneath each picture, there is always another picture.”' },
    { head: 'So it becomes a tool of critique', body: 'You can attack an image most effectively by remaking it.' }
  ],
  notes: [
    'The collage distinction is Quiz Question 6 and a learning objective. Say it twice.',
    'Collage: Unit 2, Dada. Appropriation: this. The difference is physical versus conceptual borrowing.',
    'Crimp’s sentence is the one to leave with them. Every picture sits on top of another picture.',
    'NOTE ON ORDER: her lesson plan schedules this mini-lecture <i>after</i> the activity, and her deck does the same, so it stays here. It works because the activity makes them need the vocabulary before it is given.'
  ]
},
{
  type: 'bullets',
  title: 'Jeff Koons (b. 1955)',
  zh: '傑夫・昆斯',
  items: [
    { head: 'Taste is the subject', body: 'Not an accident of the work — the thing the work is <i>about</i>.' },
    { head: 'Key works', body: 'The <i>Banality</i> series, 1988. The <i>Balloon Dog</i> series, from 1994.' },
    { head: 'Arbitrary mixing, and audience discomfort', body: 'He combines styles and borrowed images in ways that unsettle people trained in fine art.' },
    { head: 'Not the same as 1960s Pop', body: 'Warhol pointed at mass culture. Koons is inside late-twentieth-century mass culture, where public and private have already dissolved.' },
    { head: 'He appropriates taste itself', body: 'Not only images.' }
  ],
  notes: [
    'The distinction from Pop matters and it is on her slide: Unit 4’s Warhol still had a critical distance. Koons does not claim one.',
    'He was a commodities broker on Wall Street before he was a full-time artist, and he funded his early work that way. That is not trivia — it is the same fluency Kruger has with advertising.',
    'Students often dislike Koons intensely. That reaction is a legitimate response to work that is about taste, and worth naming rather than correcting.'
  ]
},
{
  type: 'compare',
  title: 'Two by Koons',
  ask: 'One is porcelain, one is steel. Both are enormous, expensive, and deliberately kitsch. Is that a criticism, or a celebration?',
  left:  { src: 'img/koons-michael-jackson-and-bubbles.jpg', label: '<i>Michael Jackson and Bubbles</i>, 1988 — from the <i>Banality</i> series. Porcelain and gold leaf', tag: 'Banality' },
  right: { src: 'img/koons-balloon-dog.jpg', label: '<i>Balloon Dog</i>, from 1994 — mirror-polished stainless steel', tag: 'Balloon Dog' },
  reveal: [
    { side: 'left',  text: 'A life-size porcelain figure of a pop star and his chimpanzee, gilded — made by craftsmen in Italy to his instruction.' },
    { side: 'right', text: 'And a party balloon, over three metres tall, in mirrored steel. It weighs a tonne and looks weightless.' },
    { side: 'right', text: 'Both borrow forms with no fine-art status at all — a souvenir figurine, a children’s party toy — and give them the scale, material and price of a monument.' }
  ],
  notes: [
    'ASK and let the room split. Both readings are seriously defended in the literature.',
    'The fabrication link: like Judd in Unit 6, he does not make them. Unlike Judd, he does not conceal the polish.',
    'One Balloon Dog sold for 58.4 million dollars in 2013. If you want the Newman comparison from Unit 3, this is the place.',
    'This is the first discussion question: does borrowing mass culture’s tools risk being swallowed by the system you meant to criticise?'
  ]
},

/* ===== PART 8 — CLOSING AND QUIZ ===== */
{
  type: 'bullets',
  title: 'From belief to unravelling',
  zh: '從信念到鬆解',
  kicker: 'Closing the course',
  items: [
    { head: 'Modernism believed in objective truth, pure order, and originality as the highest virtue', body: 'That is where Unit 1 began.' },
    { head: 'This semester has unravelled that belief, one week at a time', body: 'The object, the artist’s hand, the museum, the permanent thing, the live moment — each one questioned in turn.' },
    { head: 'And today, appropriation pushes it further', body: 'Even the image was borrowed.' },
    { head: 'This course will not tell you whether originality still matters', body: 'That question is not closed, and nobody in it agrees.' },
    { head: 'But you already live in this world', body: 'Everything you make will be made out of images that already exist. This theory is the language of your own situation.' }
  ],
  notes: [
    'Ten minutes for the wrap-up. This is the last teaching slide of the whole course — give it room.',
    'Click through slowly. The last two points are the ones to land.',
    'It is worth naming the arc out loud: Unit 1 asked how art started to change. Unit 10 asks whether anything can be original. Everything in between is the working-out.',
    'Then the discussion, the presentations, and the quiz.'
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
    'Koons borrows consumer imagery to challenge fine-art taste. Kruger borrows advertising language to challenge gender and power. Both use the tools of mass culture — does that risk being swallowed by the system they are criticising, or is it their strength?',
    'The {{guerrillagirls}} stay anonymous, saying the issues matter more than their names. Does hiding your identity make a protest stronger — or does it make it easier for an institution to ignore?',
    '{{appropriation}} artists do not cut and paste like collage — they re-paint, re-photograph, re-fabricate. Is a reworked image of an existing artwork or advertisement a <b>new work</b>, a <b>copy</b>, or something in between?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2.',
    'Question 3 is the whole course in one question, and it is the right one to end on.',
    'If the Art Court ran long, use question 3 alone.'
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
    'The timer is set to six minutes. Press Reset between speakers.',
    'The last set of the course — worth saying so, and thanking them.'
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
  type: 'quiz', n: 1, answer: 2,
  q: 'What is a main idea of {{postmodernism}}?',
  options: [
    'There is only one universal truth for all people.',
    'The human subject is a fixed and rational centre of knowledge.',
    'Truth is shaped by culture, power and perspective.',
    'Art should be pure and follow formal logic.'
  ],
  why: 'Lyotard: “incredulity toward grand narratives.” Not one story — many, each with an interest behind it.',
  notes: ['Answer: C. Options A, B and D are all modernism, from the review slide.']
},
{
  type: 'quiz', n: 2, answer: 3,
  q: 'In Ihab Hassan’s framework, what does {{reconstruction}} mean?',
  options: [
    'Breaking old patterns into uncertain fragments.',
    'Creating art that has only one fixed meaning.',
    'Returning to pre-modern religious tradition.',
    'Building new forms using irony and hybridity.'
  ],
  why: 'Deconstruction takes apart. Reconstruction builds again out of the pieces.',
  notes: ['Answer: D. Option A is the other half — deconstruction.']
},
{
  type: 'quiz', n: 3, answer: 1,
  q: 'Why did {{neoexpressionism}} artists return to raw, emotional painting?',
  options: [
    'They wanted art that was completely objective.',
    'They were reacting against Conceptual Art’s lack of emotion.',
    'They wanted to follow the strict rules of Minimalism.',
    'They believed painting was an outdated medium.'
  ],
  why: 'After a decade of cool, planned, dematerialised work, a generation picked up brushes and made a mess on purpose.',
  notes: ['Answer: B.']
},
{
  type: 'quiz', n: 4, answer: 0,
  q: 'What is distinctive about Georg Baselitz’s paintings?',
  options: [
    'He paints figures upside down, to resist a clear story.',
    'He paints only on street walls, with spray cans.',
    'He uses a very smooth, clean style.',
    'He uses only advertising text.'
  ],
  why: 'Invert the figure and the eye cannot settle into narrative — so it looks at the paint instead.',
  notes: ['Answer: A. Option B is Haring and option D is Kruger, both from today.']
},
{
  type: 'quiz', n: 5, answer: 0,
  q: 'What is the main goal of the {{guerrillagirls}}?',
  options: [
    'To expose sexism and racism in the art world.',
    'To sell as many paintings as possible to large museums.',
    'To help individual artists become famous.',
    'To make traditional sculptures of animals.'
  ],
  why: 'Gorilla masks, dead women artists’ names, and — most of all — the numbers.',
  notes: ['Answer: A. Option C is the opposite of why they are anonymous.']
},
{
  type: 'quiz', n: 6, answer: 2,
  q: 'How is {{appropriation}} defined?',
  options: [
    'Only creating images that have never been seen before.',
    'Destroying old artworks to protest against the past.',
    'Reworking or re-presenting existing images as new work.',
    'Physically cutting out magazine pictures and gluing them down.'
  ],
  why: 'Option D is <i>collage</i> — and that is exactly the difference. Appropriation re-paints or re-photographs; it does not cut and glue.',
  notes: [
    'Answer: C.',
    'Option D is the important wrong answer. If several pick it, go back to the appropriation slide.',
    'And that is the last question of the course. Say so, and thank them.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['postmodernism', 'grandnarrative', 'deconstruction', 'reconstruction', 'neoexpressionism', 'graffitiart', 'neoconceptualism', 'appropriation', 'highlow', 'deathoftheauthor', 'feminism', 'feministarthistory', 'guerrillagirls', 'weeniecount'],
  notes: [
    'Tap any term to show it large, with the Chinese.',
    'The last slide of the course. If you have a minute left, ask them which single term from the whole ten units they will actually keep.'
  ]
}
];
