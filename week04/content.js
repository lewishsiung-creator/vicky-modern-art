/* ------------------------------------------------------------------
   Week 4 — From Representation to Expression
   How did painting lose reality?

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan. Quotations are kept as spoken, with a plain
   gloss beside them.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- the week's foundational concepts --- */
  figurative: {
    en: 'figurative', zh: '具象',
    def: 'Art that shows recognisable things from the world you can see.',
    zhDef: '描繪可辨識之現實事物的藝術。'
  },
  abstraction: {
    en: 'abstraction', zh: '抽象',
    def: 'Art that moves away from recognisable objects, and puts colour, form and process first instead.',
    zhDef: '脫離可辨識物象的藝術，改以色彩、形式與創作過程為主。'
  },
  abex: {
    en: 'Abstract Expressionism', zh: '抽象表現主義',
    def: 'Not one style, but a period (about 1943–1960s), a shared attitude, and an umbrella over several movements in postwar New York.',
    zhDef: '並非單一風格，而是一個時期（約 1943–1960 年代）、一種共同的創作態度，也是戰後紐約數個運動的總稱。'
  },
  automatism: {
    en: 'automatism', zh: '自動性技法',
    def: 'Making without conscious control, so the unconscious guides the hand. Taken from the Surrealists — you met it last week.',
    zhDef: '不經意識控制的創作方式，讓潛意識引導手。承自超現實主義，上週已學過。'
  },
  allover: {
    en: 'all-over technique', zh: '滿幅技法',
    def: 'Greenberg’s word for a painting where paint and line spread evenly right across the canvas, with no single centre to look at.',
    zhDef: '格林伯格用語：顏料與線條均勻布滿整幅畫面，沒有單一視覺焦點。'
  },
  artbrut: {
    en: 'Art Brut', zh: '原生藝術',
    def: '“Raw art.” Dubuffet’s word, from 1945, for art made outside training and convention — by children, and by psychiatric patients.',
    zhDef: '「生澀的藝術」。杜布菲 1945 年提出，指未受學院訓練、不循常規者所作的藝術，如兒童與精神病患的創作。'
  },

  /* --- the bridge to New York --- */
  emigre: {
    en: 'émigré artist', zh: '流亡藝術家',
    def: 'An artist driven out of their own country by war. Many Surrealists fled Europe for New York, and brought automatism with them.',
    zhDef: '因戰爭而離開祖國的藝術家。許多超現實主義者逃往紐約，並把自動性技法帶了過去。'
  },
  aotc: {
    en: 'Art of This Century', zh: '本世紀藝術畫廊',
    def: 'Peggy Guggenheim’s New York gallery, opened 1942, where exiled European Surrealists met young American painters — Pollock among them.',
    zhDef: '佩姬・古根漢 1942 年於紐約開設的畫廊。流亡的歐洲超現實主義者在此結識年輕的美國畫家，包括帕洛克。'
  },
  nyschool: {
    en: 'The New York School', zh: '紐約畫派',
    def: 'The collective name for the Abstract Expressionists — and for New York taking Paris’s place as the centre of art.',
    zhDef: '抽象表現主義者的總稱，也標誌著紐約取代巴黎成為藝術中心。'
  },

  /* --- movements and techniques --- */
  actionpainting: {
    en: 'Action Painting', zh: '行動繪畫',
    def: 'Rosenberg’s term, 1952. The artist’s physical act matters as much as the finished picture.',
    zhDef: '羅森堡於 1952 年提出。藝術家的身體行動與完成的畫面同等重要。'
  },
  colorfield: {
    en: 'Color-field Painting', zh: '色域繪畫',
    def: 'Large, flat areas of colour meant to reach feeling directly. Newman and Rothko.',
    zhDef: '以大片平塗色域直接傳達情感。代表者為紐曼與羅斯科。'
  },
  postpainterly: {
    en: 'Post-Painterly Abstraction', zh: '後繪畫性抽象',
    def: 'Greenberg’s term, 1964, for a second generation — soft-edged, free-flowing washes of colour. Frankenthaler.',
    zhDef: '格林伯格 1964 年提出，指第二代抽象：邊緣柔和、色彩自由流動。代表者為法蘭肯瑟勒。'
  },
  hardedge: {
    en: 'Hard-Edge Painting', zh: '硬邊繪畫',
    def: 'Abstraction with no chance and no gesture — crisp, deliberate shapes and flat colour. Kelly.',
    zhDef: '排除機遇與筆勢的抽象：邊緣銳利、形狀刻意、色面平整。代表者為凱利。'
  },
  soakstain: {
    en: 'soak-stain', zh: '浸染技法',
    def: 'Frankenthaler’s method: thinned paint poured onto raw, unprimed canvas, so it soaks in instead of sitting on top.',
    zhDef: '法蘭肯瑟勒的方法：將稀釋顏料倒在未打底的生畫布上，使其滲入而非浮於表面。'
  },
  artinformel: {
    en: 'Art Informel', zh: '非形式藝術',
    def: 'Europe’s answer to Action Painting, from about 1945. Lyrical, improvised abstraction expressing the unconscious.',
    zhDef: '歐洲對行動繪畫的回應，約始於 1945 年。抒情而即興的抽象，表現潛意識。'
  },
  cobra: {
    en: 'CoBrA', zh: '眼鏡蛇畫派',
    def: 'An international Expressionist group, 1948–1951, named after Copenhagen, Brussels and Amsterdam.',
    zhDef: '1948 至 1951 年間的國際表現主義團體，名稱取自哥本哈根、布魯塞爾與阿姆斯特丹。'
  },
  matterpainting: {
    en: 'matter painting', zh: '物質繪畫',
    def: 'Painting where the material itself — sand, dust, earth, cloth — is the subject. Tàpies called it pintura matèrica.',
    zhDef: '以材料本身（沙、粉塵、泥土、布）為主體的繪畫。塔皮埃斯稱之為 pintura matèrica。'
  },
  hautespates: {
    en: 'hautes pâtes', zh: '厚塗法',
    def: 'Dubuffet’s thick paste of paint mixed with mud, sand, coal dust, glass and tar — then scratched and cut into.',
    zhDef: '杜布菲以顏料混合泥土、沙、煤灰、玻璃與瀝青所成的厚膏，再加以刮劃切割。'
  },
  coldwar: {
    en: 'Cold War', zh: '冷戰',
    def: 'The long standoff between the United States and the Soviet Union after 1945. Art became part of the argument.',
    zhDef: '1945 年後美國與蘇聯之間的長期對峙。藝術也成為這場角力的一部分。'
  }
};

const SECTIONS = [
  { title: '1 · Review & the Question',  zh: '複習與提問',     start: 0 },
  { title: '2 · The Genealogy of Chance', zh: '機遇的系譜',    start: 2 },
  { title: '3 · Bridge to New York',     zh: '通往紐約',       start: 5 },
  { title: '4 · Action Painting',        zh: '行動繪畫',       start: 11 },
  { title: '5 · Late Abstract Expressionism', zh: '晚期抽象表現主義', start: 22 },
  { title: '6 · Art Informel',           zh: '非形式藝術',     start: 37 },
  { title: '7 · Who Writes Art History?', zh: '誰在書寫藝術史', start: 47 },
  { title: '8 · Wrap-Up & Quiz',         zh: '總結與測驗',     start: 51 }
];

const SLIDES = [

/* ===== PART 1 — REVIEW AND THE QUESTION ===== */
{
  type: 'title',
  title: 'From Representation to Expression',
  sub: 'How did painting lose reality?',
  meta: 'Week 4',
  notes: [
    'Five minutes for review and framing.',
    'Last week ended with a question hanging in the air. Today we answer it.',
    'This week’s question, and write it on the board: how did painting lose reality?',
    'Hold the puzzle all session: when the recognisable picture goes, what is left?'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we go now',
  zh: '上週與本週',
  items: [
    { head: 'Last week: art turned inward', body: 'Dada broke the definition of art. Then {{abex}}’s parent, Surrealism, went into the {{automatism}} of the dreaming mind.' },
    { head: 'We ended in Paris, in the 1930s', body: 'And then the Second World War moved everybody.' },
    { head: 'This week: the picture disappears', body: 'Not the feeling. Not the paint. Only the recognisable image.' },
    { head: 'And a new centre', body: 'Paris stops. New York starts.' }
  ],
  notes: [
    'Recap in one line: last week art moved from looking outward to looking inward.',
    'Now the guiding question for today — how did painting lose reality?',
    'Frame the shift from figuration to abstraction as a puzzle to hold throughout the session. Do not resolve it yet.',
    'Then straight into the group activity — it is only five minutes in.'
  ]
},

/* ===== PART 2 — THE GENEALOGY OF CHANCE ===== */
{
  type: 'section',
  title: 'Group discussion',
  sub: 'The genealogy of chance',
  notes: [
    'Fifteen minutes. Groups of five or six.',
    'Do not explain anything new here. This activity runs on what they already know from last week.'
  ]
},
{
  type: 'compare',
  title: 'What do these two have in common?',
  ask: 'Both artists gave up control. But what took control’s place in each one?',
  left:  { src: 'img/arp-laws-of-chance.jpg', label: 'Jean Arp, <i>Collage Arranged According to the Laws of Chance</i>, 1916–1917', tag: 'Arp' },
  right: { src: 'img/masson-fish-in-sand.jpg', label: 'André Masson, <i>The Fish Drawn in the Sand</i>, 1927', tag: 'Masson' },
  reveal: [
    { side: 'left',  text: 'Arp let the paper fall. What took over was <b>gravity</b> — a force outside the body.' },
    { side: 'right', text: 'Masson moved his hand fast across the canvas. What took over was <b>the body itself</b> — rhythm and speed.' },
    { side: 'right', text: 'So from Arp to Masson, giving up control moved <i>inside</i> the artist.' }
  ],
  notes: [
    'STEP 1, two minutes, whole class. Put both up with no new explanation and ask: what do these two works have in common?',
    'Take quick verbal answers. You are only confirming they remember that both artists gave up rational control.',
    'Do not click the reveals yet — they are for after the group discussion.',
    'Then move to the next slide and give them the three questions.'
  ]
},
{
  type: 'activity',
  title: 'In your groups',
  zh: '分組討論',
  minutes: 6,
  instructions: [
    'Groups of five or six. Six minutes.',
    'Then one sentence each, back to the class.'
  ],
  questions: [
    '<b>Same and different.</b> Arp let paper fall by gravity. Masson let his hand move fast. Both gave up control — but what took control’s place in each?',
    '<b>Direction.</b> From Arp to Masson, has giving up control gone <i>up</i> or <i>down</i>? What is your evidence?',
    '<b>Predict.</b> Imagine an American painter in the 1940s who loved Masson’s work. He wants to give up control one step further — so far that the brush never even touches the canvas. What does he do? Draw it, or describe it.'
  ],
  notes: [
    'STEP 2, six minutes. Reveal the three questions one at a time.',
    'The third one is the whole point — the prediction task. Let them sketch. Wrong guesses are fine and often useful.',
    'STEP 3, three or four minutes: each group gives ONE sentence for the prediction. Respond with “interesting” or “you’re close” and do NOT confirm. Keep the suspense.',
    'STEP 4: do not announce the answer. Say “let’s see what actually happened” and go straight on to the Bridge slides. Those are the reveal.',
    'LEWIS / TEACHER: a heads-up — last week’s Quiz Question 6 already named Pollock’s drip technique, so some students will arrive knowing the answer. If the room gets it instantly, run this as a recap instead of a mystery: ask them to explain <i>why</i> the drip is the next step after Masson, rather than what it is.'
  ]
},

/* ===== PART 3 — BRIDGE TO NEW YORK ===== */
{
  type: 'section',
  title: 'Bridge: Surrealism to New York',
  sub: 'Let’s see what actually happened.',
  notes: [
    'Five minutes. This is the payoff of the activity — say the transition line and go.',
    'Do not repeat the activity’s content. Just show what happened.'
  ]
},
{
  type: 'bullets',
  title: 'How {{automatism}} crossed the Atlantic',
  zh: '自動性技法如何橫渡大西洋',
  items: [
    { head: '1929 — MoMA opens in New York', body: 'The institution is in place before the art is.' },
    { head: '1939 — war drives the Surrealists out', body: 'Ernst, Breton, Matta and others become {{emigre}}s.' },
    { head: '1942 — Peggy Guggenheim opens {{aotc}}', body: 'A gallery in New York, and a meeting place.' },
    { head: 'Exiled Surrealists meet young American painters', body: 'Pollock among them. Not through books — in the same room.' },
    { head: 'The Americans take up automatism first-hand', body: 'And that is the seed of {{abex}}.' }
  ],
  notes: [
    'Say it plainly: the war moved the artists, and the artists moved the idea.',
    'Peggy Guggenheim is the hinge of the whole story. She showed the exiles and she gave Pollock his first solo show, in 1943.',
    'This is Quiz Question 1: the exile of the European Surrealists is what shifted the centre.',
    'Point out that MoMA existed since 1929 — the building came first, the art came later. Same pattern as the American slide in Week 2.'
  ]
},
{
  type: 'section',
  title: 'The centre of art moved from Europe to America.',
  sub: 'Abstract Expressionism.',
  notes: ['One beat. Then the definitions.']
},
{
  type: 'twocol',
  title: 'Two different kinds of word',
  left: {
    head: '{{figurative}} vs {{abstraction}}',
    zh: '具象與抽象',
    lead: 'These describe <b>how</b> a work is made.',
    items: [
      'Does it show a recognisable thing, or not?',
      'Any period. Any country.',
      'A description, not a movement.'
    ]
  },
  right: {
    head: '{{abex}}',
    zh: '抽象表現主義',
    lead: 'This names <b>one particular thing</b> in history.',
    items: [
      'Postwar America, about 1943 to the 1960s.',
      'Not one style — an umbrella over several.',
      'A period, and a shared attitude.'
    ]
  },
  notes: [
    'Students mix these up every year. Keep them apart from the start.',
    'Figurative and abstract are adjectives — they describe how any work is made, in any century.',
    'Abstract Expressionism is a proper noun. One place, one stretch of time.',
    'Say the key thing twice: Abstract Expressionism is NOT a single style. It is a period, a shared outlook, and an umbrella covering several movements.'
  ]
},
{
  type: 'bullets',
  title: 'The years around it',
  zh: '前後的年表',
  items: [
    { head: '1945 — the Second World War ends', body: 'And Jean Dubuffet makes the term {{artbrut}}. A Matisse retrospective opens in Paris.' },
    { head: '1946 — the First Indochina War begins', body: 'France against Vietnam. The postwar is not peaceful.' },
    { head: '1946 — the movement gets its name', body: 'The critic Robert Coates first uses “{{abex}}” for the new New York painting. It is also called {{actionpainting}}, and {{nyschool}}.' },
    { head: '1949 — {{cobra}}’s first exhibition, in Amsterdam', body: 'Copenhagen + Brussels + Amsterdam.' },
    { head: '1950 — the Venice Biennale', body: 'Gorky, de Kooning and Pollock represent the United States. America is now on the world stage.' }
  ],
  notes: [
    'Postwar context: the atomic bomb and the end of the war are behind all of this. So is the sense that Europe had failed.',
    'Note the naming: a critic named the movement, not the artists. That comes back in the last discussion of the day.',
    'The 1950 Venice Biennale is the moment American painting is officially exported. Remember it for the New American Painting slide later.'
  ]
},
{
  type: 'grid',
  title: 'What {{abex}} was',
  zh: '抽象表現主義的四個面向',
  cells: [
    { label: 'Attitude', head: 'It inherits Dada’s spirit', body: 'The act of creating is itself the art.' },
    { label: 'Concept', head: 'The image stops mattering', body: 'Pure colour and form become the artist’s most important language.' },
    { label: 'Form', head: 'You can see the act in the picture', body: 'The finished painting keeps the traces of the artist’s movement and feeling.' },
    { label: 'Technique', head: 'It develops {{automatism}}', body: 'Made without conscious control — the Surrealist method, pushed further.' }
  ],
  notes: [
    'Third time they have seen this grid: Dada, Surrealism, now Abstract Expressionism. Say so — the comparison is the teaching.',
    'Dada: the idea replaces the object. Surrealism: the unconscious replaces the plan. Abstract Expressionism: the act replaces the image.',
    'That three-step line is the spine of the whole course so far. Worth writing on the board.'
  ]
},

/* ===== PART 4 — ACTION PAINTING ===== */
{
  type: 'section',
  title: 'Early {{abex}}',
  sub: '1943–1955',
  notes: ['Twenty minutes for this whole section. Pollock gets most of it.']
},
{
  type: 'bullets',
  title: '{{actionpainting}}',
  zh: '行動繪畫',
  kicker: '1943–1955 · the most important phase',
  items: [
    { head: 'Key artists: Jackson Pollock, Franz Kline' },
    { head: 'Named in 1952 by the critic Harold Rosenberg', body: 'Writing about Pollock, Kline and de Kooning.' },
    { head: 'Formless · spontaneous · energetic · free', body: 'Full of life, and no fixed technique.' },
    { head: 'The purpose is not traditional beauty', body: 'It is to excite what the viewer perceives.' },
    { head: 'It marks American independence from Europe', body: 'And it was strongly backed by the collector Peggy Guggenheim.' }
  ],
  notes: [
    'Rosenberg’s famous line, worth quoting: the canvas began to appear as an arena in which to act, rather than a space in which to reproduce an object.',
    'That sentence is the first discussion question later. Plant it now.',
    'Note again that a critic supplied the name and the theory. The artists supplied the paintings.'
  ]
},
{
  type: 'artwork',
  src: 'img/pollock-at-work.jpg',
  title: 'Jackson Pollock',
  caption: 'Jackson Pollock (1912–1956) at work in his studio, 1950 — photographed by Hans Namuth',
  ask: 'Where is the canvas? Where is the brush?',
  points: [
    'The canvas is on the floor, not on an easel.',
    'There is no brush. He is pouring from a can, using a stick.',
    'He walks all the way around it, and into it.',
    'The whole body paints — not just the hand.'
  ],
  notes: [
    'ASK first and let them find it: the canvas is on the floor and there is no brush.',
    'Namuth’s photographs made Pollock famous — and Pollock hated what they did to him. The film they made together is partly why he started drinking again.',
    'Point out that he can reach every part of the canvas, from every side. That is what makes the all-over composition possible.',
    'This is also the reveal for the activity: the brush never touches the canvas. Say it now if they have not got there yet.'
  ]
},
{
  type: 'bullets',
  title: 'Pollock — attitude and concept',
  zh: '帕洛克：態度與觀念',
  items: [
    { head: 'Painting is spontaneous, not planned', body: '“The painting has a life of its own; I just let it come through.”' },
    { head: 'It comes from Surrealism’s {{automatism}} and Freud’s unconscious', body: 'The line you followed in last week’s activity.' },
    { head: 'No rational planning — chance drives it', body: 'An early example is <i>The Moon-Woman</i>.' },
    { head: 'Greenberg called him the pioneer of American avant-garde art', body: 'And said the drip solved painting’s problem of flatness.' },
    { head: 'Working off the easel overturned the old idea of a picture', body: 'There is no correct way up. Every side is abstract.' }
  ],
  notes: [
    'The quotation is Pollock’s own, from 1947.',
    'The flatness point is Greenberg’s, and it is worth one sentence: if the paint sits on the surface and never pretends to be a window, the painting is finally honest about being flat.',
    'That is exactly Greenberg’s argument from Week 2 — Modernism using its own methods on itself. Link it back.'
  ]
},
{
  type: 'artwork',
  src: 'img/drip-method-demo.jpg',
  title: 'Drip, pour, spatter',
  caption: 'A modern demonstration of the drip method, from a study of its fluid dynamics',
  points: [
    'No easel. No brush.',
    'Wrist and body movement + gravity + the canvas soaking it up — all part of the making.',
    '{{allover}}: paint spread evenly, with no single focal point.',
    'Also called {{actionpainting}} — the body is directly involved, and nothing is planned first.'
  ],
  notes: [
    'NOTE: this photograph is NOT Pollock. It is a modern demonstration, from research into the fluid dynamics of his technique — her slide had it under a “Jackson Pollock” heading, and it has been recaptioned here.',
    'It is still useful: it shows the movement clearly, and it makes the point that the technique can be described physically.',
    'All-over technique is Quiz Question 2. Say it clearly: evenly spread, no single area of emphasis.'
  ]
},
{
  type: 'artwork',
  src: 'img/pollock-on-the-floor.jpg',
  title: 'The size of it',
  caption: 'A large Pollock laid flat for examination — the same position in which it was made',
  points: [
    'Look at the people, and then look at the canvas.',
    'It is bigger than the room can hold on a wall.',
    'Made flat on the floor, and still handled flat today.',
    'Standing in front of one, you cannot see it all at once. That is deliberate.'
  ],
  notes: [
    'The scale is the point of this slide. Use the people for measurement.',
    'Her slide labelled this 《第五號，1948》 — Number 5, 1948. The painting in the photograph looks black-and-silver rather than yellow-brown, so the label may belong to a different canvas. It has been captioned without a title here. Correct it if you know which one it is.',
    'Connect to Rothko later: both want the painting to be bigger than your field of vision, for opposite reasons.'
  ]
},
{
  type: 'quote',
  title: 'Pollock, in his own words',
  zh: '帕洛克自述',
  lead: 'Interviewed by William Wright, 1950',
  quote: '“The modern artist… is working and expressing an inner world — in other words — expressing the energy, the motion and the other inner forces… working with space and time, and expressing his feelings rather than illustrating.”',
  cite: 'Jackson Pollock, interview with William Wright, 1950',
  plain: [
    'We live in a machine age. The camera can copy the world now.',
    'So the painter does not need to illustrate anything.',
    'Instead: energy, movement, inner forces.',
    'Feeling, not illustration.'
  ],
  notes: [
    'This answers a question from Week 2 — if a machine can copy the world, what is the painter for? Here is Pollock’s answer, thirty years later.',
    'Read the simple version aloud, not the full quotation.',
    '“Expressing his feelings rather than illustrating” is the sentence of the day. Write it on the board.'
  ]
},
{
  type: 'artwork',
  src: 'img/dekooning-abstraction.jpg',
  title: 'Abstraction',
  caption: 'Willem de Kooning (1904–1997), <i>Abstraction</i>, 1949–1950',
  ask: 'Compare this with Pollock. What is different about the movement?',
  points: [
    'Pure abstraction — but made of broken lines and blocks of colour.',
    'Pollock’s rhythm flows and never stops. De Kooning’s is cut, and starts again.',
    'You can see separate strokes here. In a Pollock you cannot.'
  ],
  notes: [
    'ASK and wait. The answer is in the marks: Pollock is continuous, de Kooning is interrupted.',
    'De Kooning worked with a brush, standing at a canvas. He never gave up the tool.'
  ]
},
{
  type: 'artwork',
  src: 'img/dekooning-in-studio.jpg',
  title: 'De Kooning in the studio',
  caption: 'Willem de Kooning in his studio, with the <i>Woman</i> drawings',
  points: [
    'Look at what is on the walls around him.',
    'They are figures. Bodies. Faces.',
    'Every other major artist in this movement had left the figure behind.',
    'He brought it back — and was attacked for it.'
  ],
  notes: [
    'Set this up before the Woman III slide. The room is full of figures.',
    'Rothko, Motherwell, Pollock and Kline went fully non-representational. De Kooning did not.',
    'Critics at the time treated this as a betrayal of abstraction. Greenberg in particular.'
  ]
},
{
  type: 'artwork',
  src: 'img/dekooning-woman-iii.jpg',
  title: 'Woman III',
  caption: 'Willem de Kooning, <i>Woman III</i>, 1953',
  smallSource: true,
  ask: 'Is this a person, or is it paint? Can it be both?',
  points: [
    'A figure — you can find eyes, teeth, a body.',
    'But the paint is as violent as any Action Painting.',
    'Speed and tension are visible: a sweeping arm, a fast wrist.',
    'This is the milestone. The figure returns to {{abex}}.'
  ],
  notes: [
    'ASK and let them argue. Both answers are correct, which is the point.',
    'This is Quiz Question 3: de Kooning is the one who reintroduced recognisable figures.',
    'The Woman series shocked people, and still does. Do not smooth it over — some students will find it hostile, and that reading is defensible.',
    'NOTE: this is a low-resolution scan. Zoom is limited on purpose.'
  ]
},
{
  type: 'quote',
  title: 'De Kooning, in his own words',
  zh: '德庫寧自述',
  lead: 'Interviewed by the New York Times, 1951',
  quote: '“I paint this way because I can keep putting more things in it — drama, anger, pain, love, a figure, a horse, my ideas about space.”',
  cite: 'Willem de Kooning, 1951 interview; echoed in his 1948 exhibition statement',
  plain: [
    'He is not interested in taking things <i>out</i>.',
    'Not reducing painting to design, form, line and colour.',
    'He paints this way so he can put <i>more</i> in.',
    'And through your eyes, it becomes an emotion again.'
  ],
  notes: [
    'This is the direct opposite of Rothko’s statement later today. Set them against each other.',
    'De Kooning adds. Rothko removes. Both are called Abstract Expressionists.',
    'That is the clearest proof that the movement is not one style — which is the learning objective.'
  ]
},

/* ===== PART 5 — LATE ABSTRACT EXPRESSIONISM ===== */
{
  type: 'section',
  title: 'Late {{abex}}',
  sub: 'From 1955.',
  notes: ['Fifteen minutes for this section and Art Informel together. Keep moving.']
},
{
  type: 'bullets',
  title: 'Three later directions',
  zh: '後期的三個方向',
  items: [
    { head: '{{colorfield}} — Barnett Newman, Mark Rothko', body: 'Large blocks of colour, regular or irregular.' },
    { head: '{{postpainterly}} — Helen Frankenthaler', body: 'Greenberg’s term, 1964. The movement’s second generation: soft rendering, free-flowing colour, smooth lines.' },
    { head: '{{hardedge}} — Ellsworth Kelly', body: 'No chance. No accidental dots or lines. No improvisation. Clean, sharp, deliberate edges.' },
    { head: 'Notice what happens to the hand', body: 'Pollock’s whole body → Frankenthaler’s pouring → Kelly removing the trace of the hand completely.' }
  ],
  notes: [
    'The through-line: the visible gesture gradually disappears across these three.',
    'That is worth saying out loud, because the second discussion question depends on it.',
    'Once again Greenberg supplies the name for the second generation.'
  ]
},
{
  type: 'artwork',
  src: 'img/newman-onement-vi-studio.jpg',
  title: 'Onement VI',
  caption: 'Barnett Newman (1905–1970), <i>Onement VI</i>, 1953 — in the artist’s studio, New York, 1961',
  ask: 'Stand close to a painting this big. What happens to the rest of the room?',
  points: [
    'One field of blue, crossed by a single vertical line.',
    'Newman called that line a “zip”.',
    'The canvas is wider than your field of vision.',
    'So the colour stops being a thing you look at, and becomes the place you are standing in.'
  ],
  notes: [
    'ASK and wait. The intended answer: the room disappears and the colour surrounds you.',
    'Newman wanted people to stand close, not far back. He put up notices in his exhibitions asking them to.',
    'Colour becomes a force. It stops feeling flat, and it takes over the whole visual field.'
  ]
},
{
  type: 'quote',
  title: 'Newman, in his own words',
  zh: '紐曼自述',
  lead: 'From Selected Writings and Interviews',
  quote: '“I have never worked from sketches, never planned a painting, never ‘thought out’ a painting before painting it. I start each painting as if I had never painted before.”',
  cite: 'Barnett Newman, <i>Selected Writings and Interviews</i>, p. 246',
  plain: [
    'No preparation. No system. No method.',
    'No interest in “painterliness”.',
    'He calls himself an intuitive, direct painter.',
    'The work comes from a full and intense passion.'
  ],
  notes: [
    'Note the paradox: the paintings look completely controlled, and he insists nothing was planned.',
    'That paradox is the second discussion question. Plant it here, and again at Kelly.'
  ]
},
{
  type: 'artwork',
  src: 'img/newman-onement-vi.jpg',
  title: 'And what it is worth',
  caption: '<i>Onement VI</i> sold at Sotheby’s in 2013 for 43.8 million US dollars',
  ask: 'A blue canvas with one white line. Forty-three million dollars. What are people actually buying?',
  points: [
    'Not the paint. Not the labour.',
    'The name. The story. The place in art history.',
    'Somebody decided this painting matters — and that decision has a price.',
    'Hold that thought. It is the last discussion of today.'
  ],
  notes: [
    'ASK and let them be cynical. Cynicism is a fine starting point here.',
    'Do not resolve it. This slide exists to load the “Who gets to write art history?” discussion at the end.',
    'If someone says “it’s a scam”, ask them who benefits — that is exactly the exhibitions question later.'
  ]
},
{
  type: 'artwork',
  src: 'img/rothko-orange-and-yellow.jpg',
  title: 'Orange and Yellow',
  caption: 'Mark Rothko (1903–1970), <i>Orange and Yellow</i>, 1956',
  points: [
    'Two blocks of colour. Soft edges. Nothing else.',
    'The edges are not sharp — the colour seems to breathe.',
    'He wanted huge canvases so you feel <i>inside</i> the painting, not in front of it.',
    '“I want to be intimate and human.”'
  ],
  notes: [
    'Rothko stopped explaining his work. “Silence is so accurate.”',
    'The large scale is not about grandeur — he said the opposite. A big painting is intimate, because it puts you inside it. A small one makes you a spectator.',
    'He talks about feeling, not meaning. And he strongly affirms intuition — unlike older philosophy, which set intuition against reason.'
  ]
},
{
  type: 'quote',
  title: 'Rothko, in his own words',
  zh: '羅斯科自述',
  lead: 'Conversations with Artists, 1957',
  quote: '“I’m not interested in relationships of color or form… only in expressing basic human emotions — tragedy, ecstasy, doom.”',
  cite: 'Mark Rothko, in Selden Rodman, <i>Conversations with Artists</i>, 1957, p. 93',
  plain: [
    'He is not interested in how the shapes relate to each other.',
    'Only in tragedy, ecstasy and doom.',
    'And a good painting, he said, needs no explanation.'
  ],
  ask: 'De Kooning wanted to put <i>more</i> in. Rothko took almost everything <i>out</i>. Are they doing the same thing?',
  notes: [
    'ASK and let them work on it. There is a real answer: both are after emotion, and they disagree only about how much you need on the canvas to reach it.',
    'This pair — de Kooning adding, Rothko subtracting — is the cleanest proof that Abstract Expressionism is not one style.',
    'If time is short, this is the ASK worth keeping in the whole section.'
  ]
},
{
  type: 'artwork',
  src: 'img/frankenthaler-in-studio.jpg',
  title: 'Helen Frankenthaler',
  caption: 'Helen Frankenthaler (1928–2011) in her studio',
  points: [
    'The canvas is unstretched, and pinned straight to the wall and floor.',
    'The colour looks like it has been absorbed, not applied.',
    'No visible brushstroke. No texture standing up off the surface.',
    'She saw Pollock’s work and asked what would happen if the paint went <i>into</i> the canvas.'
  ],
  notes: [
    'Look at the scale, and at the fact that the canvas is raw — no white ground.',
    'She is the bridge from Pollock’s generation to the next. She was 23 when she made Mountains and Sea.'
  ]
},
{
  type: 'bullets',
  title: 'Frankenthaler — {{soakstain}}',
  zh: '法蘭肯瑟勒：浸染技法',
  items: [
    { head: 'Influenced by Pollock — pouring, not brushing' },
    { head: 'No base layer', body: 'The paint soaks into the raw canvas instead of sitting on top of it.' },
    { head: 'Colours blend in soft, glowing washes', body: 'A stain, not a brushstroke.' },
    { head: 'No illusion of space', body: 'It returns to the flat, two-dimensional surface — and to the canvas’s own material.' },
    { head: '<i>Mountains and Sea</i>, 1952', body: 'Her breakthrough, and the first major soak-stain painting.' },
    { head: '1964 — Greenberg’s <i>{{postpainterly}}</i> exhibition', body: 'It introduced this new generation, later known as {{colorfield}}.' }
  ],
  notes: [
    'The method matters and is easy to say: thin the paint right down, pour it onto raw canvas, let it soak in.',
    'Because it soaks in, the colour IS the canvas. There is no layer sitting on top pretending to be something else.',
    'CORRECTED: her slide dated Mountains and Sea to 1959 in one place and 1952 in another. 1952 is right, and matches the lesson plan.',
    'Also adjusted: her slide said Frankenthaler “pioneered colour-field painting”. More precisely — soak-stain was hers, and it opened the way to the second generation of colour-field painters. Newman and Rothko came first.',
    'This is Quiz Question 4: Post-Painterly Abstraction means soft-edged, free-flowing washes of colour.'
  ]
},
{
  type: 'artwork',
  src: 'img/frankenthaler-mountains-and-sea.jpg',
  title: 'Mountains and Sea',
  caption: 'Helen Frankenthaler, <i>Mountains and Sea</i>, 1952',
  smallSource: true,
  points: [
    'She was twenty-three when she made this.',
    'Thinned paint, poured onto raw canvas, allowed to spread.',
    'The result is not fully planned — it is only clear once it is finished.',
    'Paintings that feel unfinished, and are full of chance.'
  ],
  notes: [
    'CORRECTED: dated 1952 here. Her slide said 1959.',
    'Point out the pencil lines still visible — she drew, then poured, and did not hide the drawing.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'quote',
  title: 'Frankenthaler, in her own words',
  zh: '法蘭肯瑟勒自述',
  lead: 'Quoted by Barbara Rose, 1970',
  quote: '“You have to know how to use the accident, how to recognise it, how to control it, and ways to eliminate it so that the whole surface looks felt and born all at once.”',
  cite: 'Helen Frankenthaler, in Barbara Rose, <i>Frankenthaler</i>, New York: Harry N. Abrams, 1970',
  plain: [
    'The accident is not the opposite of skill.',
    'You have to <i>know how</i> to use it — and how to recognise a good one.',
    'And how to get rid of the ones that do not work.',
    'So the whole surface looks as if it happened all at once.'
  ],
  notes: [
    'This is the most useful quotation of the day for the second discussion question.',
    'Chance is not the absence of control. It is a material you learn to handle. Say that.',
    'Compare with Arp in Week 3 — who said chance was a piece of an order beyond our grasp. Same problem, different answer.'
  ]
},
{
  type: 'artwork',
  src: 'img/kelly-painting-for-a-white-wall.png',
  title: 'Painting for a White Wall',
  caption: 'Ellsworth Kelly (1923–2015), <i>Painting for a White Wall</i>, 1952',
  ask: 'Where is the artist in this painting?',
  points: [
    'Five panels of flat colour, side by side.',
    'No brushmarks. No drips. No accidents.',
    'Nothing here records a hand moving.',
    '“I want to remove the ‘I made this’ from my work.”'
  ],
  notes: [
    'ASK and let it sit. The answer is: nowhere, deliberately.',
    'This is the exact opposite of Action Painting — and it is happening in the same city, in the same years.',
    'The quotation is Kelly’s own, via SFMOMA. It is the shortest statement of {{hardedge}} there is.'
  ]
},
{
  type: 'bullets',
  title: 'Ellsworth Kelly — {{hardedge}}',
  zh: '凱利：硬邊繪畫',
  items: [
    { head: 'Joined {{nyschool}} in 1954' },
    { head: 'Forms taken from simplified architectural fragments', body: 'A shadow on a stair, a gap between buildings — then flattened.' },
    { head: 'Bright pure colour — or quiet black, white and grey' },
    { head: 'From the mid-1960s he often left the rectangle behind', body: 'Irregular geometric shapes, and shaped canvases.' },
    { head: 'Hard to classify', body: 'Painting? Sculpture? Wall relief? Often all three at once.' }
  ],
  notes: [
    'The architectural source is worth a sentence: these shapes are observed, not invented. He drew from real buildings and then removed everything else.',
    'So the work is abstract and yet it comes from looking. That complicates the whole figurative/abstract split from earlier.',
    'Strong decorative quality — say it without apology. He did not think that was an insult.'
  ]
},
{
  type: 'artwork',
  src: 'img/kelly-panels.jpg',
  title: 'Panels',
  caption: 'Ellsworth Kelly, colour panels',
  smallSource: true,
  points: [
    'Each panel is one colour, and one shape.',
    'The wall between them is part of the work.',
    'Nothing is improvised, and nothing is accidental.',
    'From Pollock in 1950 to this, in the same movement, in about ten years.'
  ],
  notes: [
    'Use the last point as the summary of the whole half: the movement travelled from the entire body to no trace of the body at all.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'bullets',
  title: 'The New American Painting, 1958–59',
  zh: '「新美國繪畫」巡迴展',
  items: [
    { head: 'Organised by MoMA', body: 'It toured eight European countries — Basel, Milan, Madrid, Berlin, Amsterdam, Brussels, Paris, London — and only then came home to MoMA.' },
    { head: 'Seventeen artists, presented as one movement', body: 'Labelled “{{abex}}” and “{{nyschool}}”.' },
    { head: 'MoMA’s first full survey of the movement', body: 'Even New York had never seen one this complete.' },
    { head: 'Europe was divided', body: 'London called it “the finest of its kind”. Paris called it “nightmare and stain”.' },
    { head: 'And it was {{coldwar}} politics', body: 'American art promoted abroad as a symbol of freedom — against Soviet-approved art.' }
  ],
  notes: [
    'This slide is doing two jobs: it closes the American story, and it opens the final discussion.',
    'Say the Cold War point plainly. It is well documented and students find it genuinely surprising.',
    'The argument the exhibition made: free countries produce free art. Ask them later who benefits from that argument.',
    'This is Quiz Question 6.'
  ]
},

/* ===== PART 6 — ART INFORMEL ===== */
{
  type: 'section',
  title: 'Europe’s answer',
  sub: '{{artinformel}}',
  notes: ['Europe was not silent. Five or six minutes on this.']
},
{
  type: 'bullets',
  title: '{{artinformel}}',
  zh: '非形式藝術',
  kicker: 'Europe, from about 1945',
  items: [
    { head: 'Key artists: Jean Dubuffet, Lucio Fontana, Antoni Tàpies' },
    { head: 'Named by the critic Michel Tapié', body: 'His 1951 exhibition <i>Signifiants de l’informel</i>, and his 1952 book <i>Un Art Autre</i> — “another art”.' },
    { head: 'Lyrical and improvised', body: 'There is no strict definition, and that is intentional.' },
    { head: 'It expresses unconscious fantasy, not real objects', body: 'Critics called it “psychic improvisation”.' },
    { head: 'It runs parallel to {{abex}}', body: 'Europe’s counterpart to {{actionpainting}}, in the same years.' }
  ],
  notes: [
    'Parallel, not derivative. These artists were working at the same time, not copying New York.',
    'Notice the pattern for the third time today: a critic names the group and writes the theory. Tapié here, Rosenberg and Greenberg in America.',
    'That is the material for the Critics question in the final discussion.'
  ]
},
{
  type: 'artwork',
  src: 'img/dubuffet-site-inhabited.jpg',
  title: 'Site Inhabited by Objects',
  caption: 'Jean Dubuffet (1901–1985), <i>Site Inhabited by Objects</i>, 1965',
  points: [
    'Dubuffet made the term {{artbrut}} — raw art — in 1945.',
    'He learned from art made by children and by psychiatric patients.',
    'He valued it as honest, direct and untrained.',
    'His belief: art only means something as a direct projection of the inner self.'
  ],
  notes: [
    'Art Brut is a learning objective. Say the definition clearly: art made outside training and social convention.',
    'He co-founded a group for it in 1948, three years after coining the term.',
    'Careful with the framing: he admired this work, but he was also a trained professional collecting the work of people who had no choice about being outside the system. Students often spot that, and they are right to.'
  ]
},
{
  type: 'bullets',
  title: 'Dubuffet — {{hautespates}}',
  zh: '杜布菲：厚塗法',
  items: [
    { head: '1945–46: thick paint, mixed with real matter', body: 'Mud, sand, coal dust, glass, straw, cement, tar.' },
    { head: 'Then scratched and cut — closer to sculpting than painting' },
    { head: 'The surface stops being an image', body: 'It becomes a substance you could put your hand into.' },
    { head: 'The core belief', body: 'Art is only meaningful as a direct projection of the inner self.' }
  ],
  notes: [
    'This is where European Art Informel goes somewhere America did not: into the physical material itself.',
    'Hold that thought for Fontana and Tàpies — all three attack the surface, not the image.',
    'It is the third discussion question: is changing the surface more radical than changing the picture?'
  ]
},
{
  type: 'artwork',
  src: 'img/fontana-cutting.jpg',
  title: 'The cut',
  caption: 'Lucio Fontana (1899–1968) cutting a canvas, photographed in sequence',
  ask: 'He is destroying a finished painting. Or is he making one?',
  points: [
    'Six photographs of one action, in order.',
    'He takes a knife to a blank, monochrome canvas.',
    'For centuries a hole in a canvas meant damage.',
    'Here it is the work.'
  ],
  notes: [
    'ASK before you explain. The photographs make the argument on their own.',
    'This is a wonderful sequence — take a moment over it. Zoom in on the last frame.',
    'Then: he is not vandalising. He is opening the picture into real space.'
  ]
},
{
  type: 'bullets',
  title: 'Fontana — the canvas as an object',
  zh: '封塔納：畫布作為物件',
  items: [
    { head: 'The knife destroys the flat space we expect', body: 'And opens a new space between painting and sculpture.' },
    { head: 'Keep the flat form — then break it', body: 'He called it “creating an infinite dimension”.' },
    { head: 'The canvas stops being a surface for an image', body: 'It becomes a thing in its own right, with its own material presence.' },
    { head: 'The cut breaks “the myth of representation”', body: 'And frees the space of painting.' },
    { head: 'Out of the virtual world, into the real one', body: 'Behind the canvas there is now actual darkness, and actual depth.' }
  ],
  notes: [
    'The phrase to give them is his: breaking the myth of representation.',
    'That is Quiz Question 5, and the third discussion question.',
    'The philosophical point in one sentence: every painting before this pretended the surface was a window. Fontana made a real hole, so there is nothing left to pretend.'
  ]
},
{
  type: 'artwork',
  src: 'img/fontana-concetto-spaziale.jpg',
  title: 'Concetto Spaziale, Attese',
  caption: 'Lucio Fontana, <i>Concetto Spaziale, Attese</i> — “Spatial Concept, Expectations”',
  points: [
    'One flat colour, and a set of clean vertical cuts.',
    'Behind each cut there is real darkness — actual space, not painted shadow.',
    'The title means “expectations”. He made hundreds of these.',
    'The painting is finally, physically, three-dimensional.'
  ],
  notes: [
    'Zoom in. The edges of the cuts are lined with black gauze so the darkness reads properly — it is a made effect, not just a tear.',
    'That detail matters: the “destruction” is carefully constructed.'
  ]
},
{
  type: 'artwork',
  src: 'img/tapies-installation.png',
  title: 'Antoni Tàpies',
  caption: 'Antoni Tàpies (1923–2012), installation view — with a real bed frame and sheet on the canvas',
  ask: 'Where does the painting stop and the furniture start?',
  points: [
    'The canvas is brown, thick, and scratched into.',
    'A real iron bed frame and a real sheet are attached to it.',
    'The marks look like graffiti on a wall, or like cave painting.',
    'This is {{matterpainting}} — the material itself is the subject.'
  ],
  notes: [
    'ASK and let them look. There is no clean answer, which is the point.',
    'Tàpies called it pintura matèrica: marble dust, chalk, sand and earth built into a thick surface.',
    'His signature technique is gouging, scratching and carving — echoes of cave art and of street graffiti.',
    'His palette: burnt black, earth brown, wine red, rust, sand-gold.'
  ]
},
{
  type: 'bullets',
  title: 'Tàpies — matter, and politics',
  zh: '塔皮埃斯：物質與政治',
  items: [
    { head: 'Early 1950s: {{artinformel}} and Surrealism', body: 'He was a friend of Joan Miró — whom you met last week.' },
    { head: '{{matterpainting}}', body: 'Marble dust, chalk, sand and earth, built into thick surfaces.' },
    { head: 'Art as a meditation on emptiness', body: 'And as alchemy — connecting matter to the spiritual.' },
    { head: 'Catalan culture under Franco', body: 'He was arrested in 1966. Catalan symbols appear openly in his work in the 1970s.' },
    { head: 'So the marks are not only marks', body: 'Scratching a wall is what you do when you are not allowed to speak.' }
  ],
  notes: [
    'The political context is not decoration — it is the reason the work looks the way it does.',
    'Catalan was suppressed under Franco. Making marks that look like graffiti on a wall, in a language of scratches, is a real position.',
    'This connects back to the Futurism slide in Week 3, and forward to the last discussion: art and power.'
  ]
},
{
  type: 'artwork',
  src: 'img/tapies-als-mestres.jpg',
  title: 'Als mestres de Catalunya',
  caption: 'Antoni Tàpies, <i>Als mestres de Catalunya</i> (“To the teachers of Catalonia”), 1974',
  smallSource: true,
  points: [
    'The title is in Catalan — a language then banned from public life.',
    'Made the year before Franco died.',
    'Surface, scratches, earth colours — and a dedication.',
    'An abstract painting that is also an act of resistance.'
  ],
  notes: [
    'CORRECTED: her slide read “Als mestres da Catalunya”. In Catalan it is “de Catalunya”.',
    'Say what the title means, and say when it was made. Both matter.',
    'This is the strongest counter-argument to the idea that abstraction is politically neutral — which is Week 2’s third discussion question, coming back.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},

/* ===== PART 7 — WHO WRITES ART HISTORY? ===== */
{
  type: 'section',
  title: 'Who gets to write art history?',
  sub: 'Museums? Critics? Exhibitions?',
  notes: [
    'Ten minutes. Groups of five or six — or three or four if the class is large.',
    'Assign each group ONE of the three topics. More than one group can share a topic; different answers on the same question are useful later.',
    'One spokesperson per group, under one minute each.'
  ]
},
{
  type: 'twocol',
  title: 'Two of the three',
  left: {
    head: 'Museums',
    zh: '美術館',
    lead: 'Your question:',
    items: [
      'If Peggy Guggenheim had never opened {{aotc}}…',
      '…and MoMA had never given Pollock a solo show…',
      '…would {{abex}} still be famous today?',
      'Why, or why not?'
    ]
  },
  right: {
    head: 'Critics',
    zh: '評論家',
    lead: 'Your question:',
    items: [
      'Greenberg and Rosenberg described the same paintings very differently.',
      'One looked at flatness and form. The other at the artist’s gesture and action.',
      'Does it matter which description won?'
    ]
  },
  notes: [
    'Give these two groups their questions and start the clock.',
    'The Critics group has the hardest one. Nudge them: the word we use for these paintings today is Action Painting, not all-over painting. Rosenberg won the popular name; Greenberg won the theory.'
  ]
},
{
  type: 'activity',
  title: 'Exhibitions',
  zh: '展覽',
  minutes: 4,
  instructions: [
    'The third group. Four minutes, then one spokesperson.'
  ],
  questions: [
    'A touring exhibition like <i>The New American Painting</i> doesn’t just show art — it makes an argument about which art matters. What is that argument, and who benefits from it?',
    'Michel Tapié curated exhibitions that presented these European artists together as a movement. What is the difference between an artist making paintings, and a critic-curator grouping them into a named movement?',
    'Does the exhibition <b>create</b> the movement — or just reveal one that was already there?'
  ],
  notes: [
    'STEP 3, rapid-fire sharing, three minutes: go Museums → Critics → Exhibitions. About a minute each. Your job is to keep the pace, not to comment yet.',
    'STEP 4, synthesis, two minutes. Connect the three: museums gave the work space and legitimacy; critics gave it a vocabulary and a theory; exhibitions exported the whole package to the world. Together, those three turned a local New York scene into “art history”.',
    'Then close with the question below and do NOT resolve it. Let them leave holding it.'
  ]
},
{
  type: 'section',
  title: 'Is the history we learned today the art itself — or the story institutions built around it?',
  sub: 'No answer required. Sit with it.',
  notes: [
    'Say it, then stop talking. Silence is fine here.',
    'Then move to wrap-up.'
  ]
},

/* ===== PART 8 — WRAP-UP AND QUIZ ===== */
{
  type: 'break',
  title: 'Where today went',
  zh: '今天的路線',
  chain: ['Masson', 'exile', 'Peggy Guggenheim', 'Pollock', 'the body', 'de Kooning', 'Rothko', 'Frankenthaler', 'Kelly'],
  chainLabel: 'From a hand giving up control, to no hand at all — in about fifteen years.',
  after: {
    label: 'And what got lost along the way.',
    items: [
      'The recognisable picture went first.',
      'Then the brush. Then the easel. Then the gesture.',
      'What is left is colour, surface, and the fact of the thing.',
      'Next week: what happens when artists put the world back in.'
    ]
  },
  notes: [
    'Ten minutes for wrap-up and preview.',
    'Follow the chain out loud. It is the whole session in nine words.',
    'The summary sentence: painting lost reality one piece at a time, and each loss was somebody’s deliberate decision.',
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
    'Rosenberg said the canvas became “an arena in which to act” — the value moved from the image to the event. Can the <b>act</b> of making be part of the artwork? Or should a painting only be judged by how it finally looks?',
    'Rothko and Pollock worked on intuition. Kelly planned every edge. Can both count equally as {{abstraction}} — and does the amount of control change what the finished work says?',
    'Fontana cut the canvas to “break the myth of representation”. Pollock and Rothko only removed the recognisable image. Is <b>attacking the surface</b> a more radical break — or just a different one?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2. The fuller wording is in the plan.',
    'Question 1 is the best opener — everyone has an opinion about whether process counts.',
    'Question 3 is the hardest and the most rewarding. If you only have time for one, use it: it makes them compare America and Europe directly.',
    'A2 support: sentence starters are on screen. Ten seconds of silence after each question before you call on anyone.'
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
    'Reveal the four questions at the start so the speaker and the room both know the shape.'
  ]
},
{
  type: 'section',
  title: 'Art Quiz',
  zh: '藝術測驗',
  sub: 'Six questions. Nothing is scored, and nothing is saved.',
  notes: [
    'Read each question aloud, slowly, twice. Then read the four options.',
    'Give thirty seconds. Students answer by holding up one, two, three or four fingers.',
    'Every one of these was answered during the lecture.'
  ]
},
{
  type: 'quiz', n: 1, answer: 3,
  q: 'Which event moved the centre of the art world from Paris to New York in the 1940s?',
  options: [
    'Robert Coates publishing the article that coined the term “Abstract Expressionism”.',
    'The founding of the Museum of Modern Art in 1929.',
    'The first exhibition of the {{cobra}} group in Amsterdam in 1949.',
    'The exile of the European Surrealists to New York during the Second World War.'
  ],
  why: 'The war moved the artists, and the artists moved the idea. MoMA already existed; the naming came afterwards.',
  notes: [
    'Answer: D.',
    'If anyone picks B, that is a good mistake — MoMA opened in 1929, but a building is not a movement. Say so.'
  ]
},
{
  type: 'quiz', n: 2, answer: 2,
  q: 'Pollock’s “{{allover}}” is described by which of these?',
  options: [
    'A reliance on traditional easel painting to keep the structure balanced.',
    'Strict use of the Golden Ratio to arrange the space.',
    'Paint spread evenly across the canvas, with no single area of emphasis.',
    'A central focal point that guides the viewer’s eye.'
  ],
  why: 'Greenberg’s term. No centre, no hierarchy — the whole surface has equal weight.',
  notes: ['Answer: C. Options A and D are both the opposite of what he did.']
},
{
  type: 'quiz', n: 3, answer: 2,
  q: 'How did Willem de Kooning differ from peers such as Rothko and Newman?',
  options: [
    'He used only the {{soakstain}} technique, to avoid visible texture.',
    'He avoided any sense of tension or speed in his process.',
    'He brought recognisable figures back into his work.',
    'He rejected colour and worked only in {{hardedge}} geometry.'
  ],
  why: 'The <i>Woman</i> series. Everyone else went fully non-representational; he did not.',
  notes: ['Answer: C. Option A is Frankenthaler and option D is Kelly — both are in today’s lecture, so this one checks that they can tell the artists apart.']
},
{
  type: 'quiz', n: 4, answer: 1,
  q: 'Greenberg used “{{postpainterly}}” for a second generation of artists who moved toward which quality?',
  options: [
    'Thick, heavily worked paint that keeps every trace of the brush.',
    'Soft-edged, free-flowing washes of colour soaked into the canvas.',
    'The artist’s whole body in violent, unplanned physical action.',
    'Hard geometric edges with no colour at all.'
  ],
  why: 'Frankenthaler’s soak-stain. Thin colour absorbed into raw canvas, with soft edges — the opposite of the thick, gestural first generation.',
  notes: [
    'Answer: B.',
    'CORRECTED: the original slide’s four options were duplicated from Question 3 by mistake — all four were about de Kooning and none answered this question. These four are new.',
    'Option C is Action Painting and option D is Hard-Edge; both are wrong for the right reasons.'
  ]
},
{
  type: 'quiz', n: 5, answer: 3,
  q: 'What was Lucio Fontana trying to achieve by slashing the canvas?',
  options: [
    'To create a secret code only members of {{nyschool}} could read.',
    'To demonstrate how durable new synthetic canvas was.',
    'To repair a canvas that had been damaged in shipping.',
    'To break the “myth of representation” and open art to real, three-dimensional space.'
  ],
  why: 'Every earlier painting pretended its surface was a window. A real hole leaves nothing to pretend.',
  notes: ['Answer: D. His own phrase — the myth of representation.']
},
{
  type: 'quiz', n: 6, answer: 2,
  q: 'During the {{coldwar}}, how was the touring exhibition <i>The New American Painting</i> (1958–59) used by institutions like MoMA?',
  options: [
    'To warn European countries about the dangers of capitalist individualism.',
    'To sell the works to the highest bidders in London and Paris to fund the war.',
    'To promote American art as a symbol of freedom and creative independence.',
    'To recruit the European Surrealists to move back to Paris.'
  ],
  why: 'Free countries produce free art — that was the argument, and it toured eight countries before it was ever shown at home.',
  notes: [
    'Answer: C.',
    'Close by linking straight back to the discussion: this is exactly what the Exhibitions group was arguing about.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['figurative', 'abstraction', 'abex', 'automatism', 'allover', 'artbrut', 'emigre', 'aotc', 'actionpainting', 'nyschool', 'colorfield', 'postpainterly', 'hardedge', 'soakstain', 'artinformel'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
