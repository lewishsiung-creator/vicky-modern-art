/* ------------------------------------------------------------------
   Week 3 — Expression and the Inner Self
   How does art show emotion and the unconscious?

   Text on screen is written at CEFR A1–A2. The lesson plan's own prose
   is B1; it has been simplified for the room and kept fuller in the
   speaker notes.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- the week's foundational concepts --- */
  dada: {
    en: 'Dada', zh: '達達主義',
    def: 'An anti-art movement that began in Zurich in 1916, rejecting logic, tradition and beauty after the trauma of the First World War.',
    zhDef: '1916 年始於蘇黎世的反藝術運動。在一次大戰的創傷之後，否定邏輯、傳統與美感。'
  },
  antiart: {
    en: 'anti-art', zh: '反藝術',
    def: 'Art that questions or rejects the idea of “art” itself.',
    zhDef: '質疑甚至否定「藝術」這個概念本身的藝術。'
  },
  readymade: {
    en: 'readymade', zh: '現成物',
    def: 'An everyday object chosen by an artist and shown as a work of art — as in Duchamp’s Fountain, 1917.',
    zhDef: '藝術家挑選日常物件，直接當作作品展出，如杜象 1917 年的《噴泉》。'
  },
  manifesto: {
    en: 'manifesto', zh: '宣言',
    def: 'A public written statement of a group’s beliefs and aims — Tzara’s Dada Manifesto, Breton’s Surrealist Manifesto.',
    zhDef: '團體公開發表理念與目標的文件，如查拉的〈達達宣言〉、布勒東的〈超現實主義宣言〉。'
  },
  automatism: {
    en: 'automatism', zh: '自動性技法',
    def: 'Making art without conscious control, letting the unconscious mind guide the hand.',
    zhDef: '不經意識控制的創作方式，讓潛意識引導手的動作。'
  },
  unconscious: {
    en: 'the unconscious', zh: '潛意識',
    def: 'The part of the mind we are not aware of, but which still shapes our thoughts and behaviour. Central to Freud, and to Surrealism.',
    zhDef: '我們無法察覺、卻仍左右思考與行為的心靈部分。佛洛伊德理論與超現實主義的核心。'
  },
  surrealism: {
    en: 'Surrealism', zh: '超現實主義',
    def: 'A movement founded by André Breton in 1924, built on dreams and the unconscious mind.',
    zhDef: '布勒東於 1924 年創立的運動，以夢境與潛意識為基礎。'
  },
  biomorphic: {
    en: 'biomorphic', zh: '生物形態',
    def: 'Abstract shapes that suggest living or organic forms.',
    zhDef: '令人聯想到生命體或有機形態的抽象造形。'
  },
  veristic: {
    en: 'veristic', zh: '寫實幻覺式',
    def: 'Painted with realistic detail, even though the subject itself is impossible or dreamlike.',
    zhDef: '以精細寫實的手法描繪，但描繪的內容本身卻是不可能的、如夢的。'
  },

  /* --- movements and contexts --- */
  ecoledeparis: {
    en: 'École de Paris', zh: '巴黎畫派',
    def: 'Artists of many nationalities working in Paris, 1919–1950s. Modern in intent, but the human figure stays central.',
    zhDef: '1919 至 1950 年代在巴黎創作的各國藝術家。意圖現代，但仍以人物形象為核心。'
  },
  americanscene: {
    en: 'American Scene painting', zh: '美國景象繪畫',
    def: 'A 1930s American movement — Regionalism and Social Realism — painting distinctly American subjects.',
    zhDef: '1930 年代的美國運動，包含地方主義與社會寫實主義，描繪具美國特色的題材。'
  },
  mural: {
    en: 'mural', zh: '壁畫',
    def: 'A large painting made directly on a wall, often in a public building. Central to the Mexican Mural Movement.',
    zhDef: '直接繪製於牆面的大型繪畫，多見於公共建築。墨西哥壁畫運動的核心形式。'
  },
  interwar: {
    en: 'interwar period', zh: '兩次大戰之間',
    def: 'The years between the First and Second World Wars, 1918–1939.',
    zhDef: '第一次與第二次世界大戰之間的時期，1918 至 1939 年。'
  },

  /* --- techniques --- */
  collage: {
    en: 'collage', zh: '拼貼',
    def: 'Gluing paper or other material onto the picture, so the artwork becomes an object.',
    zhDef: '將紙張或其他材料黏貼於畫面上，使作品成為一個「物」。'
  },
  frottage: {
    en: 'frottage', zh: '拓印法',
    def: 'Rubbing a pencil over paper laid on a rough surface, so a texture “surfaces” by itself.',
    zhDef: '將紙覆於粗糙表面上摩擦，讓紋理自行浮現的技法。'
  },
  grattage: {
    en: 'grattage', zh: '刮擦法',
    def: 'Scraping paint off a canvas laid over a textured object, revealing the pattern underneath.',
    zhDef: '將畫布覆於有紋理的物體上，再刮除顏料，使底下的圖案顯現。'
  },
  paranoiac: {
    en: 'paranoiac-critical method', zh: '偏執狂批判法',
    def: 'Dalí’s method: a simulated paranoia that lets him find a hidden second image inside an ordinary one.',
    zhDef: '達利的方法：以模擬的偏執狀態，在平凡的形象中發現隱藏的第二個影像。'
  },
  installation: {
    en: 'installation art', zh: '裝置藝術',
    def: 'Art you stand inside rather than in front of. The whole room is the work.',
    zhDef: '觀者置身其中、而非站在其前的藝術。整個空間即是作品。'
  },
  conceptual: {
    en: 'conceptual art', zh: '觀念藝術',
    def: 'Art in which the idea matters more than the object. Duchamp’s readymade is its starting point.',
    zhDef: '觀念重於物件的藝術。杜象的現成物是其起點。'
  },
  happening: {
    en: 'happening', zh: '偶發藝術',
    def: 'An art event that takes place in time, often with chance and an audience, rather than an object that lasts.',
    zhDef: '在時間中發生的藝術事件，常帶有機遇與觀眾參與，而非留存的物件。'
  },
  chance: {
    en: 'chance', zh: '機遇',
    def: 'Letting accident decide part of the work, instead of the artist deciding everything.',
    zhDef: '讓偶然決定作品的一部分，而非全部由藝術家決定。'
  },
  documentary: {
    en: 'documentary photography', zh: '紀實攝影',
    def: 'Photography that records real social conditions, to inform the public rather than to decorate.',
    zhDef: '記錄真實社會狀態的攝影，目的在於告知大眾，而非裝飾。'
  },
  sitespecific: {
    en: 'site-specific', zh: '場域特定',
    def: 'Made for one particular place, and not movable without losing its meaning.',
    zhDef: '為特定地點而作，一旦移動便失去意義。'
  },
  surreality: {
    en: 'sur-reality', zh: '超現實',
    def: 'Breton’s idea of an absolute reality made of dream, the unconscious and waking life together.',
    zhDef: '布勒東所謂的絕對真實：由夢境、潛意識與清醒生活共同構成。'
  }
};

const SECTIONS = [
  { title: '1 · Review & the Question', zh: '複習與提問',       start: 0 },
  { title: '2 · Dada',                 zh: '達達主義',          start: 2 },
  { title: '3 · War and Trauma',       zh: '戰爭與創傷',        start: 16 },
  { title: '4 · Surrealism',           zh: '超現實主義',        start: 32 },
  { title: '5 · The Apple & Magritte', zh: '蘋果與馬格利特',    start: 45 },
  { title: '6 · Wrap-Up',              zh: '總結',              start: 50 },
  { title: '7 · Quiz',                 zh: '測驗',              start: 53 }
];

const SLIDES = [

/* ===== PART 1 — REVIEW AND THE QUESTION ===== */
{
  type: 'title',
  title: 'Expression and the Inner Self',
  sub: 'How does art show emotion and the unconscious?',
  meta: 'Week 3',
  notes: [
    'Good morning. Last week we asked one question. This week we ask another.',
    'Last week: how did art start to change? This week: how does art move from looking outward, to looking inward?',
    'TEACHER: five minutes for review and framing, then straight into Dada.'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we go now',
  zh: '上週與本週',
  items: [
    { head: 'Last week we asked: how did art start to change?', body: 'Artists stopped copying the world. They became interested in {{collage}}, in shape, in colour — in the picture itself.' },
    { head: 'We ended with the First World War', body: 'It stopped everything. And after it, two new movements began: {{dada}} and {{surrealism}}.' },
    { head: 'This week we ask: how does art look inward?', body: 'From the outside world, to the inside of the mind.' },
    { head: 'And where does it end?', body: 'In New York — which is next week.' }
  ],
  notes: [
    'Recap last week’s guiding question: how did art start to change?',
    'Remind them of the answer in one line: artists stopped copying the world and became interested in form — shape, colour, line.',
    'Now pose this week’s question, and write it on the board: how does art move from looking outward to looking inward?',
    'Say where we are going: Dada first, then a quick look at wartime art in France, America and Mexico, then Surrealism — which is most of today.',
    'And say why: Surrealism is the bridge to next week, Abstract Expressionism in New York.'
  ]
},

/* ===== PART 2 — DADA ===== */
{
  type: 'section',
  title: '{{dada}}',
  sub: '1916 — early 1920s. Not a style. An attitude.',
  notes: [
    'Twenty minutes on Dada. The point of this whole section is one thing: Dada made the definition of art unstable.',
    'Do not let them think Dada is a style. It is an attitude.'
  ]
},
{
  type: 'bullets',
  title: 'How did {{dada}} begin?',
  zh: '達達如何開始？',
  items: [
    { head: '1916 — Zurich, in neutral Switzerland', body: 'The war is destroying Europe. New weapons make it longer and more terrible. Artists ask: what did “progress” cost us?' },
    { head: 'Dada is against everything', body: 'Anti-logic. Anti-tradition. Anti-institution. Anti-beauty. It is {{antiart}}.' },
    { head: '1917 — artists arrive from America and Europe', body: 'The poet Tristan Tzara publishes the Dada {{manifesto}}.' },
    { head: '1924 — the group splits', body: 'Some turn to politics. Others move to Paris — and Dada becomes {{surrealism}}.' }
  ],
  notes: [
    'World War I was very destructive. New weapons made the war longer and more terrible.',
    'Many artists lost faith in “reason” and in “progress” — because these ideas had led to mass destruction. Say this slowly; it is the key to the whole movement.',
    'In 1916, in neutral Zurich, a group of young artists and writers started Dada. Anti-logic, anti-tradition, anti-art.',
    'In 1917 Tristan Tzara published the Dada Manifesto and made poems from newspaper words cut up at random.',
    'By 1924 many Dada artists had moved to Paris and turned toward the unconscious mind. That is Surrealism, and that is the second half of today.'
  ]
},
{
  type: 'quote',
  title: 'Manifeste Dada, 1918',
  zh: '達達宣言，一九一八',
  lead: 'Tristan Tzara (1878–1941)',
  quote: '“Dada means nothing.”',
  cite: 'Tristan Tzara, <i>Manifeste Dada</i>, 1918',
  src: 'img/tzara-dada-manifesto.jpg',
  srcLabel: 'The printed manifesto, Zurich, 1918',
  plain: [
    'This is not a joke, and it is not modesty.',
    'A name that means nothing cannot be explained, sold, or taught.',
    'If the movement has no meaning, nobody can tell you that you understood it wrongly.',
    'The {{manifesto}} is itself an artwork: loud, printed, public.'
  ],
  notes: [
    'Tristan Tzara was a poet, not a painter. That matters — Dada came out of writing and performance as much as out of painting.',
    '“Dada means nothing.” Ask them what they think that means before you explain.',
    'The name was reportedly chosen at random from a dictionary. It means a hobby-horse in French, yes in Russian, nothing much in German.',
    'The point: a movement that refuses to be defined cannot be captured by the institutions Dada was attacking.'
  ]
},
{
  type: 'grid',
  title: 'What {{dada}} actually was',
  zh: '達達的四個面向',
  cells: [
    { label: 'Attitude', head: 'Provoke the public', body: 'The artist is not a quiet maker of objects in a studio. The artist is someone who provokes.' },
    { label: 'Concept', head: 'The idea, not the object', body: 'This is the beginning of {{conceptual}}: what matters is the thought, not the style.' },
    { label: 'Form', head: 'No fixed form at all', body: 'Destroy traditional authority. The shared elements are noise, simultaneity and {{chance}}.' },
    { label: 'Technique', head: 'Anything, and in public', body: 'Unlimited mixed media — plus gatherings, demonstrations and printed journals.' }
  ],
  notes: [
    'Four ways to describe Dada. Click through them one at a time.',
    'Attitude: provoking the public — not a studio maker of objects.',
    'Concept: conceptual, focused on the idea rather than form or style.',
    'Form: no fixed form; destroying traditional authority. Shared elements are noise, simultaneity and chance.',
    'Technique and materials: unlimited mixed media, plus public gatherings, demonstrations and journal publishing.',
    'TEACHER: this same four-part grid comes back later for Surrealism. Point that out when you reach it — the comparison does a lot of work.'
  ]
},
{
  type: 'bullets',
  title: 'The spread of {{dada}}',
  zh: '達達的擴散',
  items: [
    { head: 'Zurich — Jean Arp (1886–1966)', body: '{{chance}} as a method. This leads to {{happening}}.' },
    { head: 'Berlin — Kurt Schwitters (1887–1948)', body: 'Merzbau, 1923 — a work filling two floors of his own house. The first {{installation}}.' },
    { head: 'New York — Marcel Duchamp', body: 'The {{readymade}}, from 1913. It changes what an artwork is, what beauty is, and what an artist does.' },
    { head: 'All three point the same way', body: 'Toward {{conceptual}} — art where the idea comes first.' }
  ],
  notes: [
    'Three cities, three artists, three different attacks on the same idea.',
    'Zurich, Arp: chance. Berlin, Schwitters: the room. New York, Duchamp: the object.',
    'We will look at one work from each.'
  ]
},
{
  type: 'artwork',
  src: 'img/arp-laws-of-chance.jpg',
  title: 'The laws of {{chance}}',
  caption: 'Jean Arp, <i>Collage Arranged According to the Laws of Chance</i>, 1916–1917',
  ask: 'If the artist dropped the paper and did not choose where it fell — is this still his work?',
  points: [
    'Arp tore paper, dropped the pieces, and glued them where they landed.',
    'No fixed meaning. No rational intention.',
    'The planes, the proportions, the colours — decided by chance.',
    'He said the work was arranged “according to the law of chance”, just as nature is.',
    'For Arp, chance is not disorder. It is a small piece of an order too large for us to see.'
  ],
  notes: [
    'Arp tore up paper, let the pieces fall, and glued them where they landed.',
    'Paintings as pure reality — no fixed meaning, no rational intent. Maximum freedom for the elemental and the spontaneous.',
    'ASK the question on screen. This is a good early argument and it warms them up for Duchamp.',
    'Then the important line: for Arp, chance is not the absence of order. It is a small piece of an order beyond our grasp — like nature itself.',
    'Arp’s chance method is the ancestor of Happening art.'
  ]
},
{
  type: 'artwork',
  src: 'img/schwitters-merzbau.jpg',
  title: 'Merzbau',
  caption: 'Kurt Schwitters, <i>Merzbau</i>, begun 1919 — his own house in Hanover',
  points: [
    'A room as an artwork. You stand inside it, not in front of it.',
    'It is {{sitespecific}} — tied to one place, and it cannot be moved.',
    'It was never finished. It kept growing for years.',
    'Built from found and discarded material — so art and living space blur together.',
    'This is the forerunner of {{installation}} and environmental art.'
  ],
  notes: [
    'Schwitters built this inside his own home in Hanover. It eventually filled two floors.',
    'Room as artwork — the viewer stands inside, not in front. Say this twice; it is a genuinely new idea in 1919.',
    'Site-specific: tied to one place, not movable. It was destroyed in an air raid in 1943 — only photographs remain.',
    'An ongoing process, not a fixed finished piece.',
    'Made from found and discarded materials, blurring art and living space. Forerunner of installation and environmental art.'
  ]
},
{
  type: 'artwork',
  src: 'img/duchamp-fountain.jpg',
  title: 'Fountain',
  caption: 'Marcel Duchamp, <i>Fountain</i>, 1917',
  ask: 'He did not make it. He did not change it. He only chose it, and signed it. Is it art?',
  points: [
    'A urinal, bought in a shop, turned on its side, signed “R. Mutt”, and sent to an exhibition.',
    'Idea over craft — choosing matters more than making.',
    'The artist is a selector, not a maker.',
    'A new title and a new place give the object a new meaning.',
    'It asks: who decides what art is?'
  ],
  notes: [
    'The clearest example of Dada’s attitude. A signed urinal, presented as art in 1917.',
    'ASK the question on screen and let them argue. Do not resolve it — the next two slides are the resolution.',
    'The point was that the artist’s choice and idea matter more than making the object by hand. This permanently changed the definition of art.',
    'Anti-retinal: Duchamp’s own word. He wanted art for the mind, not for the eye.',
    'A detail worth telling them: the original was lost almost immediately. Everything we have is a photograph by Alfred Stieglitz, and later replicas. The object is gone; the idea is not.'
  ]
},
{
  type: 'bullets',
  title: 'What the {{readymade}} changed',
  zh: '現成物改變了什麼',
  items: [
    { head: 'The artist becomes a chooser', body: 'Not a maker. The hand is no longer the point.' },
    { head: 'A new title and a new place make a new meaning', body: 'The same object, moved into a gallery, stops being a urinal.' },
    { head: '“Anti-retinal”', body: 'Duchamp’s own word. Art for the mind, not for the eye.' },
    { head: 'Only a photograph survives', body: 'The object is gone. The idea is not. So which one was the artwork?' },
    { head: 'This begins {{conceptual}} and appropriation art', body: 'Everything after 1917 has to answer it.' }
  ],
  notes: [
    'Go through these one at a time. Each one is a separate blow to the old definition.',
    'The last point is the one to leave hanging: the object is gone, the idea is not. So which one was the artwork?',
    'That question is what the next three slides are for.'
  ]
},
{
  type: 'section',
  title: 'Is {{dada}} mainly about destroying things — or about creating something new?',
  ask: 'Take a side. Give me one reason.',
  notes: [
    'First of three short arguments. Do not spend long on each — a minute or two, then move.',
    'Wait ten seconds after asking. A2 students need time to build a sentence before they speak.'
  ]
},
{
  type: 'section',
  title: 'Dada is {{antiart}}.',
  sub: 'So is Dada’s work actually art?',
  ask: 'If it is art, then Dada failed. If it is not art, why is it in the museum?',
  notes: [
    'Second argument, and the sharpest one. Let the trap close on them a little before you help.',
    'There is no correct answer here. The useful thing is that they notice the problem.'
  ]
},
{
  type: 'section',
  title: 'Dada used anti-reason to fight the reasoned violence of the war.',
  sub: 'Precise weapons. Organised killing. All of it perfectly rational.',
  ask: 'But is “anti-reason” itself a reasoned strategy? Is that a contradiction?',
  notes: [
    'Third argument, and the hardest. Some classes will not get far with this one — that is fine, give it ninety seconds.',
    'The honest answer is yes, it is a contradiction, and Dada knew it. That is part of the joke.'
  ]
},
{
  type: 'section',
  title: 'Why can a {{readymade}} be art?',
  sub: 'Now let us answer it properly.',
  notes: ['Now we resolve the Duchamp question. One slide.']
},
{
  type: 'bullets',
  title: 'The answer, in five steps',
  zh: '五個步驟',
  items: [
    { head: '1 · What it rejects', body: 'Convention. The purely visual. Modernist ideas of beauty.' },
    { head: '2 · How it works', body: 'New title + new viewpoint + the art context → the object loses its old use and gains a new one.' },
    { head: '3 · Not one or the other, but both', body: 'History’s judgment over time, <i>and</i> the exhibition room, here and now.' },
    { head: '4 · Two questions at once', body: '“What is art?” and “What can art do?” — asked in the same moment.' },
    { head: '5 · A loop with no outside', body: 'Identity and purpose arise together. The viewer keeps re-reading it — through society, politics, money, history.' }
  ],
  notes: [
    'This is the densest slide of the first half. Take it slowly, one click per step.',
    'Step 2 is the mechanism and the one they must be able to repeat: new title, new viewpoint, art context.',
    'Step 5: Duchamp called this kind of structure a Möbius loop — you cannot get outside it to check. The work’s identity and its purpose come into being at the same time.',
    'If you are short of time, steps 1, 2 and 4 are enough.'
  ]
},

/* ===== PART 3 — WAR AND TRAUMA ===== */
{
  type: 'section',
  title: 'War and trauma',
  sub: 'The same crisis, in three countries. Three completely different answers.',
  notes: [
    'Ten minutes only. This is context, not depth — one representative image each from France, the United States and Mexico.',
    'The point of the whole section is a single sentence: many responses to the same crisis, and no single style could hold them.',
    'Do not let this run long. Surrealism needs the time.'
  ]
},
{
  type: 'bullets',
  title: 'France after the war: expressive figures',
  zh: '戰後的法國',
  kicker: 'France',
  items: [
    { head: 'The 1920s: a return to classicism', body: 'Across all the arts. Jean Cocteau called it “a call to order”.' },
    { head: 'Cubism’s extreme abstraction is set aside', body: 'Artists want clearer, more understandable styles again.' },
    { head: 'The {{ecoledeparis}}, 1919–1950s', body: 'Modern, with expressive distortion of the body — but the human figure stays at the centre.' },
    { head: 'Key artists', body: 'Amedeo Modigliani · Chaïm Soutine · Fernand Léger' }
  ],
  notes: [
    'In France, some artists returned to clearer, classical styles after Cubism — the “call to order”.',
    'Others, like Soutine, kept a raw, expressive, emotional style. Both are in the School of Paris.',
    'The thing to notice: after the war, the figure comes back. Abstraction is not the only road.'
  ]
},
{
  type: 'artwork',
  src: 'img/modigliani-nude.png',
  title: 'Nude',
  caption: 'Amedeo Modigliani (1884–1920), <i>Nude</i>, 1917',
  points: [
    'The neck is too long. The face is a mask, almost without eyes.',
    'But the body is warm and solid, and the colour is rich.',
    'Modern distortion — with the human figure still at the centre.'
  ],
  notes: [
    'Modigliani stretches the body, but he does not break it. Compare that with Picasso last week.',
    'The faces are borrowed from African masks and from Brancusi, whom they met last week.',
    'He died at 35, in 1920, the year this style was at its peak.'
  ]
},
{
  type: 'artwork',
  src: 'img/soutine-woman-in-red.jpg',
  title: 'Woman in Red',
  caption: 'Chaïm Soutine (1893–1943), <i>Woman in Red</i>, 1923',
  ask: 'Modigliani is calm. Soutine is not. What makes the difference?',
  points: [
    'The paint is thick, and you can see every movement of the brush.',
    'The chair, the dress and the face all seem to be sliding.',
    'This is the other half of the {{ecoledeparis}} — raw, emotional, not calm at all.'
  ],
  notes: [
    'Soutine is the counter-example to the “call to order”. He never calmed down.',
    'ASK the question and let them look. The answer they should reach: the brushwork itself carries the feeling.',
    'Zoom into the face — the paint is almost sculptural.'
  ]
},
{
  type: 'artwork',
  src: 'img/leger-three-women.jpg',
  title: 'Three Women',
  caption: 'Fernand Léger (1881–1955), <i>Three Women</i>, 1921',
  points: [
    'The bodies are made of tubes and cylinders, like machine parts.',
    'Everything is smooth, clean and ordered.',
    'Léger had been a soldier. After the war he painted the machine as something calm, not something frightening.'
  ],
  notes: [
    'Léger served in the war and was gassed at Verdun. He came out admiring machines rather than fearing them.',
    'Compare with the Futurists last week: they loved the machine before the war. Léger loves it after.',
    'The bodies are as smooth and repeatable as manufactured objects — this is the “call to order” in its clearest form.'
  ]
},
{
  type: 'bullets',
  title: 'America before the war: finding an American identity',
  zh: '戰前的美國',
  kicker: 'The United States',
  items: [
    { head: 'Early 1900s: still rooted in European realism' },
    { head: 'Alfred Stieglitz and his gallery “291”', body: 'The bridge that brought European modern art to New York.' },
    { head: '1913 — the Armory Show', body: 'Goya, Manet, Van Gogh, Cézanne, Matisse, Picasso, Braque, Kandinsky, Rodin, Brancusi. Americans saw {{collage}} and Cubism for the first time, and many were shocked.' },
    { head: 'The effect was immediate', body: 'The art and collecting world changed, and new modern galleries opened.' },
    { head: '1930s — the Federal Art Project', body: '{{americanscene}} painting, during the Depression.' }
  ],
  notes: [
    'The Armory Show was on last week’s American slide too — this is the link back. Remind them.',
    'In the United States, the 1930s Depression produced American Scene painting, which expressed a distinctly national mood.',
    'Two directions inside it: Grant Wood’s calm rural scenes, and Edward Hopper’s urban loneliness. We will see both.'
  ]
},
{
  type: 'artwork',
  src: 'img/wood-american-gothic.jpg',
  title: 'American Gothic',
  caption: 'Grant Wood (1891–1942), <i>American Gothic</i>, 1930',
  ask: 'Are these two people being admired, or laughed at?',
  points: [
    'A farmer and his daughter, painted in the first year of the Depression.',
    'Hard, clear, careful painting — the opposite of Soutine.',
    'The window behind them is Gothic — a church shape, on a small wooden farmhouse.',
    'It has been read both ways ever since: as respect for rural America, and as a joke about it.'
  ],
  notes: [
    'The model for the woman was Wood’s sister; the man was his dentist.',
    'ASK the question. There is no settled answer — critics have argued about it for ninety years, and Wood himself was evasive.',
    'This is the single most parodied painting in America. That is itself the point about images and culture — which is where the apple activity goes later.'
  ]
},
{
  type: 'artwork',
  src: 'img/hopper-nighthawks.jpg',
  title: 'Nighthawks',
  caption: 'Edward Hopper (1882–1967), <i>Nighthawks</i>, 1942',
  ask: 'How do these four people feel? And how can you tell?',
  points: [
    'Four people in a diner, late at night.',
    'Nobody speaks. Nobody looks at anybody.',
    'There is no door. You cannot see a way in or out.',
    'The street outside is completely empty.'
  ],
  notes: [
    'ASK and wait. They will say lonely — push them for how they know.',
    'The answers are in the picture: no door, no eye contact, empty street, and the harsh electric light of the new fluorescent tube.',
    'Compare with Kirchner’s Street, Dresden from last week — crowded and alone, versus almost empty and alone. Same feeling, opposite method.'
  ]
},
{
  type: 'artwork',
  src: 'img/bearden-folk-musicians.jpg',
  title: 'Folk Musicians',
  caption: 'Romare Bearden (1911–1988), <i>Folk Musicians</i>, 1941',
  points: [
    'Three musicians, painted in flat blocks of colour.',
    'The bodies are simplified almost into shapes — Bearden had studied Cubism.',
    'He painted Black American life at a time when very few American museums would show it.',
    'Later he worked mainly in {{collage}}, and that became his famous form.'
  ],
  notes: [
    'Bearden is the third voice of American Scene painting, and the one most often left out of the story.',
    'Note the Cubist structure — this is Europe arriving in America and being turned to a different purpose.',
    'He went on to become one of the great collage artists of the century.'
  ]
},
{
  type: 'bullets',
  title: 'American photography between the wars',
  zh: '兩戰之間的美國攝影',
  kicker: 'The United States',
  items: [
    { head: '1929 — the Crash, then the Great Depression', body: 'Then the Dust Bowl, and mass migration. Then Roosevelt’s New Deal.' },
    { head: '1935–1944 — the FSA programme', body: 'Led by Roy Stryker. More than 170,000 photographs.' },
    { head: '1936 — Life magazine launches', body: '{{documentary}} enters mass media, and reaches everybody.' },
    { head: 'What it changed', body: 'It made documentary photography its own art form, supported New Deal policy, and became the model for photojournalism.' },
    { head: 'It runs beside {{americanscene}} painting', body: 'Same country, same years, same subject — a different machine.' }
  ],
  notes: [
    'The government paid photographers to record the Depression. That is an unusual fact and worth saying plainly.',
    'One hundred and seventy thousand photographs. The scale is the point.',
    'This is also the answer to a question from last week: what is the painter for, once the machine can copy the world? Here the machine has a job painting cannot do.'
  ]
},
{
  type: 'artwork',
  src: 'img/lange-migrant-mother.jpg',
  title: 'Migrant Mother',
  caption: 'Dorothea Lange (1895–1965), <i>Migrant Mother</i>, 1936',
  points: [
    'A mother, thirty-two years old, with seven children, in a camp for pea-pickers in California.',
    'The two children turn their faces away. Only she looks out — and not at us.',
    'Lange spent ten minutes there and made six photographs.',
    'It was printed in newspapers within days, and the government sent food to the camp.'
  ],
  notes: [
    'Her name was Florence Owens Thompson. She was not asked, and she did not benefit.',
    'The picture worked immediately — food was sent to the camp within days.',
    'She later said she felt the photograph had been taken from her. Worth mentioning: a documentary photograph is also a thing done to a person.',
    'Compare the composition with a Renaissance Madonna. Lange knew exactly what she was doing.'
  ]
},
{
  type: 'artwork',
  src: 'img/evans-miners-house.jpg',
  title: 'Miner’s House',
  caption: 'Walker Evans (1903–1975), <i>Miner’s House</i>, 1935',
  points: [
    'No people. Just a wall, and the things pinned to it.',
    'Evans photographed straight on, flat, with no drama.',
    'He refused to make poverty beautiful or sad. He recorded it.',
    'The wall tells you everything about the life lived in front of it.'
  ],
  notes: [
    'Evans is the opposite of Lange. She composes; he refuses to.',
    'Straight on, flat, no angle, no feeling added. He called it a documentary style — meaning it looks like a document, whether or not it is one.',
    'Ask them which of the two photographs they trust more. It is a good thirty-second question.'
  ]
},
{
  type: 'artwork',
  src: 'img/eisenstaedt-kiss.jpg',
  title: 'V-J Day in Times Square',
  caption: 'Alfred Eisenstaedt (1898–1995), <i>V-J Day in Times Square</i>, 1945',
  points: [
    'The day the Second World War ended. New York, in the street.',
    'Taken for Life magazine — the fastest, widest picture-machine in the world.',
    'It became one of the most reproduced photographs ever made.',
    'And it is much harder to look at now than it was in 1945: the two people did not know each other, and she did not agree.'
  ],
  notes: [
    'This closes the American section, and it closes the war.',
    'Say the last point plainly and without a speech. The nurse, Greta Zimmer Friedman, said in interviews that it was not her choice. Students will already know this.',
    'It connects to Migrant Mother: both are famous images made of a real person who did not consent. That is a genuine question about documentary photography, and it is worth thirty seconds, not five minutes.'
  ]
},
{
  type: 'bullets',
  title: 'Mexico between the wars: struggle and personal pain',
  zh: '兩戰之間的墨西哥',
  kicker: 'Mexico',
  items: [
    { head: '1910–1920 — the Mexican Revolution', body: 'Then a new constitution, with land and labour reform.' },
    { head: 'Artists turn to their own history', body: 'Like the Americans, but toward native heritage — and a renaissance in Mexican painting begins.' },
    { head: '1920s onward — {{mural}}s everywhere', body: 'On schools, government buildings, churches and museums, right across the country. The government paid for them.' },
    { head: 'The subject is Mexico itself', body: 'Ancient and modern together — a new cultural nationalism.' },
    { head: 'And it changed American art', body: 'It helped American artists break away from European modernism, and gave art a social job again.' }
  ],
  notes: [
    'In Mexico, after the 1910–1920 Revolution, the government funded muralists such as Diego Rivera to paint scenes of national pride.',
    'Frida Kahlo did the opposite — she turned inward, painting her own physical and emotional pain. Two directions, same country.',
    'The influence on the United States came through two things: the classical fresco technique, and the idea of art as social struggle.',
    'That second idea matters for next week: several of the Abstract Expressionists worked on mural projects first.'
  ]
},
{
  type: 'artwork',
  src: 'img/rivera-detroit-industry.jpg',
  title: 'Detroit Industry',
  caption: 'Diego Rivera (1886–1957), <i>Detroit Industry</i>, 1932–1933 — Detroit Institute of Arts',
  points: [
    'A {{mural}} covering the walls of a whole courtyard, painted in fresco.',
    'The subject is the car factory, and the workers in it.',
    'A communist painter, paid by the Ford family, to paint their own factory.',
    'People asked for it to be destroyed. It is still there.'
  ],
  notes: [
    'Fresco is painting into wet plaster — a Renaissance technique, revived here for factory workers.',
    'The commission is the interesting part: Edsel Ford paid a communist to paint the Ford plant. Rivera painted the workers, not the owners.',
    'There were public campaigns to whitewash it. It survived, and it is now the museum’s most famous holding.'
  ]
},
{
  type: 'artwork',
  src: 'img/kahlo-borderline.jpg',
  title: 'Self-Portrait on the Borderline',
  caption: 'Frida Kahlo (1907–1954), <i>Self-Portrait on the Borderline between Mexico and the United States</i>, 1932',
  ask: 'Which side does she belong to? How is she telling you?',
  points: [
    'She stands on a stone between two countries.',
    'On one side: ancient temples, plants with roots, sun and moon, broken statues.',
    'On the other: factories, chimneys, machines, cables, no soil at all.',
    'She wears a pink party dress and holds a Mexican flag. She is not smiling.'
  ],
  notes: [
    'Painted while she was living in Detroit with Rivera — she was miserable there.',
    'ASK the question and give them time. Everything they need is in the picture: roots on one side, cables on the other.',
    'This is the exact opposite of Rivera on the previous slide. He paints the nation on a wall; she paints herself on a small panel.',
    'And it is the hinge into the second half of the class: an artist turning inward. That is Surrealism. Say the sentence and move.'
  ]
},

/* ===== PART 4 — SURREALISM ===== */
{
  type: 'section',
  title: '{{surrealism}}',
  sub: 'From 1924. Dreams, and the mind you cannot see.',
  notes: [
    'Fifteen minutes on Surrealism before the activity, then Magritte after it.',
    'This is the heart of today, and the bridge to next week.'
  ]
},
{
  type: 'bullets',
  title: 'Where {{surrealism}} came from',
  zh: '超現實主義的起點',
  items: [
    { head: '1900 — Freud publishes <i>The Interpretation of Dreams</i>', body: 'The idea of {{unconscious}} enters the century.' },
    { head: '1917 — the poet Apollinaire uses the word', body: '“Sur-réalisme” — above, or beyond, realism.' },
    { head: '1919 — Breton and Soupault write automatically', body: 'Their book <i>The Magnetic Fields</i>. This is {{automatism}}, in words before pictures.' },
    { head: '1924 — Breton’s first Surrealist {{manifesto}}', body: 'The movement formally begins.' },
    { head: '1928 — <i>Surrealism and Painting</i>', body: 'Breton gives painting the central role.' },
    { head: '1929 — the second manifesto', body: 'A turn toward politics, and expulsions from the group.' }
  ],
  notes: [
    'Freud first. Surrealism is not possible without him — the idea that the mind has a part we cannot see, which still drives us.',
    'Notice that automatism starts in writing, in 1919, five years before the movement has a name.',
    'Breton was trained in medicine and worked in a psychiatric hospital during the war. That is where he met these ideas.',
    'The 1929 second manifesto is when it turns political and people start being thrown out. Breton was not an easy man.'
  ]
},
{
  type: 'quote',
  title: 'Surrealist {{manifesto}}, 1924',
  zh: '超現實主義宣言，一九二四',
  lead: 'André Breton',
  quote: '“pure psychic automatism”',
  cite: 'André Breton, <i>Manifeste du surréalisme</i>, 1924',
  src: 'img/breton-surrealist-manifesto.jpg',
  srcLabel: 'The first Surrealist manifesto, Paris, 1924',
  plain: [
    'Breton’s definition of Surrealism, in three words.',
    '{{automatism}} means: make without conscious control.',
    'Let the hand move before the mind can correct it.',
    'The artist is not composing. The artist is a channel.'
  ],
  notes: [
    'Three words. Write them on the board.',
    '“Psychic” here means of the mind, not supernatural.',
    'The full definition continues: thought expressed in the absence of any control exercised by reason, and outside any aesthetic or moral concern.',
    'The key idea for today: the artist as a medium, not as a rational composer. That phrase comes back on the next slide.'
  ]
},
{
  type: 'grid',
  title: 'What {{surrealism}} was',
  zh: '超現實主義的四個面向',
  cells: [
    { label: 'Attitude', head: 'Refuse every constraint', body: 'Reject traditional beauty, morality, logic and reality. The artist is a medium, not a rational composer.' },
    { label: 'Concept', head: 'Reality = dream + {{unconscious}} + waking life', body: 'Together they make an absolute reality — a {{surreality}}. It shows inner human truth.' },
    { label: 'Form', head: 'Two branches, one dream-logic', body: '{{biomorphic}} and automatic, or {{veristic}} and realistic. Both obey the logic of dreams.' },
    { label: 'Technique', head: 'Old skills, new methods', body: 'Traditional technique returns — plus {{automatism}}, {{collage}}, {{frottage}}, {{grattage}}, sand painting and solarisation.' }
  ],
  notes: [
    'Same four-part grid as Dada. Put them side by side in their heads: Dada destroys the definition, Surrealism builds a method.',
    'The biggest difference is in Technique. Dada refused skill. Surrealism brings traditional skill back — and uses it to paint impossible things.',
    'Say that comparison out loud; it is the cleanest way to hold both movements at once.'
  ]
},
{
  type: 'twocol',
  title: 'Two branches of {{surrealism}}',
  left: {
    head: '{{biomorphic}} / abstract',
    zh: '生物形態／抽象',
    lead: 'Jean Arp · Max Ernst · Joan Miró · André Masson',
    items: [
      'Method: {{automatism}} — let the hand go first.',
      'Shapes suggest living things, but are not things.',
      'Chance is part of the method.',
      'The artist discovers the image rather than planning it.'
    ]
  },
  right: {
    head: '{{veristic}} / illusionistic',
    zh: '寫實幻覺式',
    lead: 'Salvador Dalí · René Magritte',
    items: [
      'Method: paint real things in fine detail.',
      'Then put them together in impossible ways.',
      'Everything is recognisable. Nothing is possible.',
      'The artist plans the image precisely.'
    ]
  },
  notes: [
    'This split is a learning objective and it is Quiz Question 5. Make sure it lands.',
    'One sentence each: the biomorphic branch lets the hand lead; the veristic branch paints impossible scenes perfectly.',
    'The discussion question later asks which one is closer to how dreams actually work. Plant that now — tell them to decide as they look at the next six slides.'
  ]
},
{
  type: 'artwork',
  src: 'img/ernst-two-children.jpg',
  title: 'Two Children Threatened by a Nightingale',
  caption: 'Max Ernst (1891–1976), <i>Two Children Threatened by a Nightingale</i>, 1924',
  ask: 'A nightingale is a small singing bird. Why is it threatening?',
  points: [
    'Often called the first true Surrealist painting.',
    'A real wooden gate, a real wooden knob and a real little house are attached to the frame.',
    'So the painting comes out into our space. It is not only a picture.',
    'The title tells you there is terror. The picture does not show you why.'
  ],
  notes: [
    'The first true Surrealist painting, and a pictorial manifesto. It is from the same year as the manifesto itself.',
    'ASK the question. The gap between the frightening title and the small harmless bird is the whole work.',
    'Point out the real objects screwed to the frame — the gate, the knob, the house. Ernst brings Dada’s collage into Surrealism.',
    'Ernst’s roots: de Chirico’s metaphysical painting, plus Dada’s readymade and collage.'
  ]
},
{
  type: 'bullets',
  title: 'Max Ernst’s methods',
  zh: '恩斯特的方法',
  items: [
    { head: 'The most faithful follower of Breton’s {{manifesto}}' },
    { head: 'Combine unrelated objects; re-read the familiar', body: 'The result is strange, illogical, hallucinatory.' },
    { head: '{{frottage}}', body: 'Rub over a rough surface, and an image surfaces on its own.' },
    { head: '{{grattage}}', body: 'Scrape paint against the texture underneath, and a hidden pattern appears.' },
    { head: 'The core idea', body: 'The artist is a discoverer, not a composer.' }
  ],
  notes: [
    'Frottage: he said he got the idea staring at the grain of floorboards in a hotel room.',
    'Both methods do the same job — they take the first decision away from the conscious mind.',
    'Core idea: artist as discoverer, not composer. This is the same sentence as Breton’s “medium”, said a different way.'
  ]
},
{
  type: 'artwork',
  src: 'img/miro-harlequins-carnival.jpg',
  title: 'Harlequin’s Carnival',
  caption: 'Joan Miró (1893–1983), <i>Harlequin’s Carnival</i>, 1924–1925',
  points: [
    'Miró said he painted this from hallucinations, after three days without food.',
    'He was poor and often hungry in Paris. He drew what he saw.',
    'Catalan and Parisian symbols together, with playful, sprite-like creatures.',
    'His own private symbols: stars, eyes, birds, ladders, twisted figures.'
  ],
  notes: [
    'Harlequin’s Carnival, made after three days without food, from hallucinatory sketches.',
    'This is not a dramatic story — he was genuinely poor. But it is exactly the state Surrealism wanted: the conscious mind loosened.',
    'Point to the recurring signs: stars, eyes, birds. He used them for sixty years.',
    'After the 1960s he distilled the language to almost nothing, but the themes never changed — land, sky, women, birds.'
  ]
},
{
  type: 'bullets',
  title: 'Joan Miró: from {{automatism}} to a private language',
  zh: '米羅：從自動性到私人語彙',
  items: [
    { head: 'Automatic drawing first', body: 'Then the marks become symbols he can use again.' },
    { head: 'A personal system of signs', body: 'Stars, eyes, birds, ladders, distorted figures — his own alphabet.' },
    { head: 'After the 1960s: reduced almost to nothing', body: 'But the same themes stay — land, sky, women, birds.' },
    { head: 'The core idea', body: 'The {{unconscious}} becomes a visual vocabulary, halfway between abstraction and symbol.' }
  ],
  notes: [
    'The interesting move here: automatism produces marks, and then Miró keeps the marks and reuses them deliberately.',
    'So the unconscious becomes a vocabulary. That is not what Breton intended, and it is why Miró lasted.',
    'Ask them whether a repeated automatic mark is still automatic. Good thirty-second question if you have the time.'
  ]
},
{
  type: 'artwork',
  src: 'img/masson-fish-in-sand.jpg',
  title: 'The Fish Drawn in the Sand',
  caption: 'André Masson (1896–1987), <i>The Fish Drawn in the Sand</i>, 1927',
  ask: 'Where does the drawing stop and the accident start?',
  points: [
    'Masson poured glue onto the canvas, then threw sand at it.',
    'The sand stuck where the glue was. Then he drew into what appeared.',
    'One unbroken line, made fast — “at the speed of thought”.',
    'Tangled lines, violence, desire. He had fought in the war and been badly wounded.'
  ],
  notes: [
    'Sand paintings — tableaux de sable. Glue plus scattered sand: chance and automatism combined in one method.',
    'Automatic drawing from 1924: rapid movement, an unbroken line, the speed of thought. Breton said Masson’s hand seemed to have grown wings.',
    'ASK the question — the honest answer is that you cannot tell, and that is the point.',
    'His style is tangled, violent, erotic — the trauma of the trenches is in it. He was wounded at the Chemin des Dames.',
    'IMPORTANT for next week: this is Quiz Question 6. Masson poured and threw material onto a canvas on the floor. Jackson Pollock saw Masson’s work in New York. Say this now and say it again in the wrap-up.'
  ]
},
{
  type: 'artwork',
  src: 'img/dali-persistence-of-memory.png',
  title: 'The Persistence of Memory',
  caption: 'Salvador Dalí (1904–1989), <i>The Persistence of Memory</i>, 1931',
  ask: 'Everything here is painted perfectly. So why does it feel wrong?',
  points: [
    'Soft, melting clocks on a hard, empty landscape.',
    'Every single thing is painted with Renaissance precision.',
    'The technique is completely real. The scene is completely impossible.',
    'That gap is the whole method: exact painting of inexact dream content.'
  ],
  notes: [
    'ASK the question first, before you explain anything. They will find it.',
    'The answer: the skill is Renaissance, the content is a dream. Precise technique depicting imprecise dream content.',
    'The landscape is the coast near his home in Catalonia — a real place, painted from memory.',
    'Dalí said the clocks came from watching Camembert cheese melt in the sun. He said a lot of things.'
  ]
},
{
  type: 'bullets',
  title: 'Salvador Dalí’s method',
  zh: '達利的方法',
  items: [
    { head: 'The {{paranoiac}}', body: 'A simulated paranoia, which lets him find a hidden second image inside an ordinary one.' },
    { head: 'Renaissance-quality realist technique', body: 'In sharp contrast with absurd content.' },
    { head: 'The famous works', body: 'Melting clocks · <i>Venus with Drawers</i>' },
    { head: '1928 — <i>Un Chien Andalou</i>', body: 'A film, co-directed with Luis Buñuel. Dream logic made from violent editing.' },
    { head: 'The core idea', body: 'Precise technique, depicting imprecise dream content.' }
  ],
  notes: [
    'The paranoiac-critical method is his real contribution — deliberately inducing a state where you see a second image inside the first.',
    'Venus with Drawers: a Venus with drawers in her body, straight from Freud — the idea that a person contains hidden compartments.',
    'The film is next. Warn them before you play or show anything from it.'
  ]
},
{
  type: 'artwork',
  src: 'img/un-chien-andalou.jpg',
  title: 'Un Chien Andalou',
  caption: 'Luis Buñuel and Salvador Dalí, <i>Un Chien Andalou</i>, 1928',
  points: [
    'No story. Events do not follow each other.',
    'Time and place are cut apart.',
    'Shock is the method, not an accident.',
    'There is nothing hidden to decode — Buñuel insisted the film means nothing.',
    '{{automatism}} extended into film.'
  ],
  notes: [
    'CONTENT WARNING: the opening shot of this film is famously violent — an eye, a razor. Tell the class what is coming before you show or describe anything.',
    'Anti-narrative, shock aesthetics, disrupted time and space, repressed and sexual imagery.',
    'The important point is the last one: no hidden symbolism to decode. Buñuel said any interpretation was wrong by definition.',
    'That is a strong claim, and it sets up the apple activity perfectly — is meaning in the object, or in us?'
  ]
},

/* ===== PART 5 — THE APPLE AND MAGRITTE ===== */
{
  type: 'section',
  title: 'Group discussion',
  sub: 'Which one is the apple?',
  notes: [
    'Fifteen minutes total for the activity, then five minutes on Magritte.',
    'Groups of five or six. Do not explain Magritte first — the whole design depends on them getting there themselves.'
  ]
},
{
  type: 'rank',
  title: 'Which one is the apple?',
  zh: '哪一個才是蘋果？',
  task: 'In your group, put all four in order. Which one <b>best</b> represents “an apple”?',
  minutes: 8,
  items: [
    { src: 'img/apple-photo.jpg',            label: 'A photograph' },
    { src: 'img/magritte-listening-room.jpg', label: 'An oil painting' },
    { glyph: '🍎',                            label: 'An emoji' },
    { src: 'img/apple-logo.png',              label: 'A company logo' }
  ],
  questions: [
    'Which one is <b>not</b> an apple?',
    'Which one is <b>most like</b> an apple?',
    'Which one is <b>most powerful</b>?',
    'Why doesn’t the Apple logo need to look like a real apple any more?'
  ],
  notes: [
    'Groups of five or six. Two minutes to rank, four minutes on the questions, one or two minutes to share out.',
    'IMPORTANT: after ranking, each group must explain their reasoning — especially where the group disagreed with itself. The real learning is in the negotiation, not in the final order.',
    'Then reveal the guiding questions one at a time with the arrow key.',
    'Students will start using the words symbol, culture, convention and brand on their own. When you hear those words, they have already arrived at Magritte’s question without you explaining it.',
    'Share-out: call on one or two groups at random. Consensus is not required. Use the board on screen — let a group come up and click the cards into their order.',
    'OPTIONAL fifth item, if you have time: the plain written word “APPLE”. It puts a linguistic sign next to the visual ones, which is exactly Magritte’s device. Skip it if you are short — it does not affect the core value.',
    'TEACHER: the oil painting here is Magritte’s own — The Listening Room, 1952. Do not tell them that yet. It pays off in two slides.',
    'Transition line, say it exactly: “You were just arguing about which one is really an apple. A hundred years ago, a painter asked almost the same question. Except his object wasn’t an apple. It was a pipe.”'
  ]
},
{
  type: 'artwork',
  src: 'img/magritte-time-transfixed.png',
  title: 'Time Transfixed',
  caption: 'René Magritte (1898–1967), <i>Time Transfixed</i>, 1938',
  ask: 'Everything in this room is ordinary. So what is wrong?',
  points: [
    'A fireplace, a mirror, a clock, a room. All completely normal.',
    'And a train, at full speed, coming out of the chimney.',
    'The scale is wrong, and the place is wrong. Nothing else is.',
    'Magritte changes one thing, and the whole room stops making sense.'
  ],
  notes: [
    'ASK and wait — some classes take a moment to notice the train.',
    'The method: displaced scale and displaced proportion, producing an intellectual contradiction rather than a visual one.',
    'Magritte is the founder of Belgian Surrealism, and the most precise of all of them.',
    'Note the difference from Dalí: Dalí distorts the objects; Magritte leaves every object perfect and moves it.'
  ]
},
{
  type: 'bullets',
  title: 'René Magritte',
  zh: '馬格利特',
  items: [
    { head: 'The founder of Belgian Surrealism' },
    { head: 'A painting does not show an object', body: 'It shows the <i>imagination</i> of an image. Poetic, not literal.' },
    { head: 'Nothing is fixed', body: 'Any situation is possible. Fixed logic is only a habit.' },
    { head: 'Realism used to build illusion', body: 'The technique is honest; the thought is metaphysical.' },
    { head: 'Displaced scale and proportion', body: 'The contradiction is intellectual, not visual — and it keeps the imagination open.' }
  ],
  notes: [
    'One minute on this slide, then straight to the reveal. Do not linger — the next slide is the point of the whole hour.'
  ]
},
{
  type: 'artwork',
  src: 'img/magritte-treachery-of-images.jpg',
  title: 'The Treachery of Images',
  caption: 'René Magritte, <i>The Treachery of Images</i>, 1928–1929. The words read: “This is not a pipe.”',
  ask: 'He painted a pipe, and wrote “this is not a pipe”. Is he lying?',
  points: [
    'He is not lying. It is not a pipe — it is a picture of a pipe. You cannot smoke it.',
    'Can language truly represent an image?',
    'Do we understand signs — or do we just repeat what language has built for us?',
    'And where is the meaning: in the caption, or in the image?',
    'You just argued about an apple. He asked the same question, in 1929, about a pipe.'
  ],
  notes: [
    'THIS IS THE PAYOFF. Arrive here directly from the activity.',
    'Open with the transition line, then let them sit with the contradiction before you resolve it.',
    'The resolution is simple and they will get it: it is not a pipe, it is an image of a pipe.',
    'Then push further with the three questions on screen. These are Magritte’s, not mine.',
    'Close the loop out loud: the Apple logo does not look like an apple, and it does not need to — because a sign and its object are not the same thing. That is what they discovered ten minutes ago on their own.',
    'TEACHER: and now tell them the oil painting in the activity was a Magritte too. It usually gets a reaction.'
  ]
},

/* ===== PART 6 — WRAP-UP ===== */
{
  type: 'break',
  title: 'Where today went',
  zh: '今天的路線',
  chain: ['WWI', 'Dada', 'the readymade', 'Paris', 'Freud', 'Surrealism', 'automatism', 'Masson'],
  chainLabel: 'One line, from the trenches to a man throwing sand at a canvas.',
  after: {
    label: 'And then the war moved them again.',
    items: [
      'The Second World War drove the European Surrealists out of Paris.',
      'Many of them arrived in New York.',
      'They brought {{automatism}} with them.',
      'Next week: what young American painters did with it.'
    ]
  },
  notes: [
    'Ten minutes for wrap-up and preview.',
    'Recap the throughline out loud, following the chain on screen: the war, Dada, the readymade, Paris, Freud, Surrealism, automatism.',
    'Then click, and give them the preview: displaced by the Second World War, the European Surrealists came to New York and brought automatism with them.',
    'Name Masson and Pollock together one more time. That is the hinge into next week, and it is Quiz Question 6.'
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
    'Duchamp said an artist does not need to make an object by hand — only to choose it. Can <b>choosing</b> really be an act of art? Why, or why not?',
    'Compare the automatic Surrealists (Arp, Miró, Masson) with the illusionistic ones (Dalí, Magritte). Which feels closer to how dreams really work? Which do you find more powerful?',
    'Magritte says a painted image is never the real object. Duchamp says a real object, once chosen and exhibited, becomes art. Do these two disagree — or are they saying the same thing?'
  ],
  notes: [
    'These are the three discussion questions from the lesson plan, simplified for A2. The full wording is in the plan if you want it.',
    'Question 3 is the strongest and the hardest. If you only have time for one, use that one — it ties Duchamp and Magritte together, which is the whole shape of today.',
    'The answer to 3, if they need it: both are saying that the object and its meaning are separate things. Duchamp adds meaning to an object; Magritte takes it away from one.'
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
    'The timer on screen is set to six minutes. Press Reset between speakers.',
    'The four questions on screen are the required structure — reveal them at the start so the speaker and the room both know the shape.'
  ]
},

/* ===== PART 7 — QUIZ ===== */
{
  type: 'section',
  title: 'Art Quiz',
  zh: '藝術測驗',
  sub: 'Six questions. Nothing is scored, and nothing is saved.',
  notes: [
    'Read each question aloud, slowly, twice. Then read the four options.',
    'Give thirty seconds. Students answer by holding up one, two, three or four fingers.',
    'Then click to reveal. Every one of these was answered during the lecture.'
  ]
},
{
  type: 'quiz', n: 1, answer: 1,
  q: 'What was the main historical reason behind the founding of {{dada}} in 1916?',
  options: [
    'A celebration of new industrial technologies and scientific progress.',
    'A reaction against the irrationality and the trauma of the First World War.',
    'A desire to return to the strict rules of Renaissance perspective.',
    'An effort to promote government-sponsored social realism.'
  ],
  why: 'Artists had lost faith in “reason” and “progress” — because those ideas had produced mass destruction.',
  notes: ['Answer: B. Remember the first Dada slide: reason and progress led to the trenches, so Dada attacked reason.']
},
{
  type: 'quiz', n: 2, answer: 0,
  q: 'Duchamp’s <i>Fountain</i> (1917) is the famous example of a {{readymade}}. What is the core concept?',
  options: [
    'The artist’s choice and idea matter more than the physical act of making.',
    'The use of expensive, high-quality materials to elevate everyday items.',
    'A technique where artists paint realistic copies of industrial machines.',
    'The destruction of an object to protest against consumer culture.'
  ],
  why: 'The artist is a selector, not a maker. A new title and a new place give the object a new meaning.',
  notes: ['Answer: A. Idea over craft — the whole five-step slide was about this.']
},
{
  type: 'quiz', n: 3, answer: 3,
  q: 'The {{ecoledeparis}} artists of the 1920s are known for a “call to order”. What does that mean?',
  options: [
    'An emphasis on automatic writing and spontaneous drawing.',
    'A strict requirement that all artists join a government-run union.',
    'A rejection of painting in favour of mechanical photography.',
    'A move away from extreme abstraction, back toward clearer, figurative styles.'
  ],
  why: 'After Cubism, artists wanted styles people could read again. The human figure came back to the centre.',
  notes: [
    'Answer: D. Jean Cocteau’s phrase.',
    'If they hesitate, remind them of Modigliani and Léger — recognisable bodies, after Cubism had taken them apart.'
  ]
},
{
  type: 'quiz', n: 4, answer: 0,
  q: 'What did André Breton use as the philosophical foundation of {{surrealism}} from 1924?',
  options: [
    'Sigmund Freud’s theories of {{unconscious}} and of dreams.',
    'The political manifestos of the Mexican Revolution.',
    'Ancient Greek philosophy on the beauty of the human form.',
    'The Enlightenment’s focus on logic, reason and scientific proof.'
  ],
  why: 'Freud’s <i>The Interpretation of Dreams</i>, 1900. Surrealism is not possible without it.',
  notes: ['Answer: A. Note that D is the exact opposite — Surrealism is against reason, not built on it.']
},
{
  type: 'quiz', n: 5, answer: 0,
  q: 'Which describes the {{biomorphic}} or abstract branch of {{surrealism}}?',
  options: [
    'Organic shapes created through automatic, chance-based methods.',
    'Highly detailed, realistic paintings of impossible dream scenes.',
    'Photographic documentation of rural poverty during the Depression.',
    'Large-scale public murals showing national history and labour.'
  ],
  why: 'Arp, Ernst, Miró and Masson. Option B is the other branch — Dalí and Magritte.',
  notes: [
    'Answer: A.',
    'Option B is the veristic branch, so this question checks that they can tell the two apart. If several pick B, go back to the two-column slide.'
  ]
},
{
  type: 'quiz', n: 6, answer: 1,
  q: 'André Masson’s sand paintings are named as a direct influence on which later technique?',
  options: [
    'The highly polished realist style of the Renaissance.',
    'Jackson Pollock’s drip technique.',
    'Marcel Duchamp’s signature on found objects.',
    'The creation of public murals for the Mexican government.'
  ],
  why: 'Glue and thrown sand, on a canvas, decided partly by chance. Pollock saw this work in New York — which is where next week begins.',
  notes: [
    'Answer: B. This is the bridge question, so end on it deliberately.',
    'Say the link one last time: Masson poured and threw material onto the canvas. Pollock saw it in New York. Next week we start there.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['dada', 'antiart', 'readymade', 'manifesto', 'automatism', 'unconscious', 'surrealism', 'biomorphic', 'veristic', 'ecoledeparis', 'americanscene', 'mural', 'interwar'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
