/* ------------------------------------------------------------------
   Week 2 — Contemporary Art History
   Slide content, speaker notes, glossary and quiz.

   Text on screen is written at CEFR A1–A2. Original quotations are
   kept as printed, with a plain-English gloss beside them.

   {{term}} in any text renders a tappable word chip. The chip's
   English definition and Chinese gloss come from GLOSSARY below.
   ------------------------------------------------------------------ */

/* ---------- Word chips: English + 中文 -----------------------------
   Definitions are written for THIS lecture, not from a dictionary.
   ------------------------------------------------------------------ */
const GLOSSARY = {
  modernism: {
    en: 'Modernism', zh: '現代主義',
    def: 'The art period from about 1860 to about 1960. Artists asked what art itself is.',
    zhDef: '約 1860 至 1960 年間的藝術時期。藝術家開始追問「藝術本身是什麼」。'
  },
  form: {
    en: 'form', zh: '形式',
    def: 'Shape, colour and line in a picture — not the story the picture tells.',
    zhDef: '畫面中的形狀、色彩與線條，而不是畫面所敘述的故事。'
  },
  critic: {
    en: 'critic', zh: '評論家',
    def: 'A person who writes about art and judges it.',
    zhDef: '書寫並評斷藝術的人。'
  },
  aura: {
    en: 'aura', zh: '靈光',
    def: "Benjamin's word for the special feeling of a real, original artwork: it is here, it is now, and there is only one.",
    zhDef: '班雅明用來指原作獨有的那種感受：此時、此地、獨一無二。'
  },
  movement: {
    en: 'movement', zh: '藝術運動',
    def: 'A group of artists with shared ideas, working at the same time.',
    zhDef: '一群理念相近、同時期活動的藝術家。'
  },
  abstract: {
    en: 'abstract', zh: '抽象',
    def: 'Art with no recognisable objects — only shape, colour and line.',
    zhDef: '沒有可辨識物象的藝術，只剩形狀、色彩與線條。'
  },
  collage: {
    en: 'collage', zh: '拼貼',
    def: 'Gluing paper or other material onto the picture, so the artwork becomes an object.',
    zhDef: '將紙張或其他材料黏貼於畫面上，使作品成為一個「物」。'
  },
  manifesto: {
    en: 'manifesto', zh: '宣言',
    def: 'A public letter in which artists announce their ideas.',
    zhDef: '藝術家公開發表理念的文件。'
  },
  intuition: {
    en: 'intuition', zh: '直覺',
    def: 'A feeling that comes without thinking. Klee said an artist needs it.',
    zhDef: '不經思考而生的感受。克利認為藝術家必須具備。'
  },
  postmodernism: {
    en: 'postmodernism', zh: '後現代主義',
    def: 'A way of thinking, not a period. No single truth; mix styles; question authority.',
    zhDef: '一種思維方式，而非時期。沒有單一真理、風格混用、質疑權威。'
  },

  /* Period and movement names — students need the Chinese to follow. */
  classical: { en: 'Classical period', zh: '古典時期', def: 'Before 1850. Artists painted the beauty of nature.', zhDef: '1850 年以前。藝術家描繪自然之美。' },
  contemporary: { en: 'Contemporary art', zh: '當代藝術', def: 'Art made in our own time. "Contemporary" always means now, so it moves forward with time.', zhDef: '我們這個時代所創作的藝術。「當代」永遠指的是現在，因此隨時間往前移動。' },
  fauvism: { en: 'Fauvism', zh: '野獸派', def: 'France, 1904–1908. Strong unnatural colour that shows feeling, not fact.', zhDef: '法國，1904–1908。以強烈非寫實的色彩表現情感，而非事實。' },
  cubism: { en: 'Cubism', zh: '立體主義', def: 'France, 1907–1918. One picture shows an object from many sides at the same time.', zhDef: '法國，1907–1918。同一畫面中同時呈現物體的多個面向。' },
  expressionism: { en: 'Expressionism', zh: '表現主義', def: 'Germany, from 1910. Strong colour and line showing difficult feelings.', zhDef: '德國，1910 年起。以強烈色彩與線條表現壓抑的情緒。' },
  suprematism: { en: 'Suprematism', zh: '至上主義', def: 'Russia, from about 1913. Only basic shapes and very few colours. It shows nothing.', zhDef: '俄國，約 1913 年起。只使用基本幾何形與極少的色彩，不描繪任何對象。' },
  constructivism: { en: 'Constructivism', zh: '構成主義', def: 'Russia, after 1917. Art should be useful and made of real materials.', zhDef: '俄國，1917 年後。主張藝術應具實用性，並使用真實材料。' },
  destijl: { en: 'De Stijl', zh: '風格派', def: 'Netherlands, from 1917. Straight lines, rectangles, and only red, yellow and blue.', zhDef: '荷蘭，1917 年起。直線、矩形，以及紅黃藍三原色。' },
  neoplasticism: { en: 'Neoplasticism', zh: '新造型主義', def: 'Another name for De Stijl.', zhDef: '風格派的另一個名稱。' },
  futurism: { en: 'Futurism', zh: '未來主義', def: 'Italy, from 1910. It loved speed, machines and the modern city.', zhDef: '義大利，1910 年起。歌頌速度、機器與現代都市。' },
  bauhaus: { en: 'Bauhaus', zh: '包浩斯', def: 'A German school that changed art, architecture, design and teaching.', zhDef: '德國的學校，改變了藝術、建築、設計與教育。' },
  dada: { en: 'Dada', zh: '達達主義', def: 'A movement after the First World War, reacting against a war that made no sense.', zhDef: '一次世界大戰後的運動，反抗這場毫無意義的戰爭。' },
  surrealism: { en: 'Surrealism', zh: '超現實主義', def: 'A movement after the First World War, interested in dreams and the unconscious.', zhDef: '一次世界大戰後的運動，關注夢境與潛意識。' },
  daguerreotype: { en: 'daguerreotype', zh: '銀版攝影法', def: 'The first photographic process ordinary people could use, shown in 1839.', zhDef: '1839 年公開發表、第一種一般人可使用的攝影方法。' },
  perspective: { en: 'perspective', zh: '透視', def: 'A way of drawing space from one fixed viewpoint, like one eye at a window.', zhDef: '從單一固定視點描繪空間的方法，如同一隻眼睛望向窗外。' },
  grandnarrative: { en: 'grand narrative', zh: '大敘事', def: 'One big story that explains everything. Belting says art history can no longer tell one.', zhDef: '一套解釋一切的大故事。貝爾廷認為藝術史已無法再講述這樣的故事。' },
  avantgarde: { en: 'avant-garde', zh: '前衛', def: 'The most advanced, most experimental art of its moment.', zhDef: '某個時代中最前進、最具實驗性的藝術。' }
};

/* ---------- Sections, for the jump menu ---------- */
const SECTIONS = [
  { title: '1 · Framing',                  zh: '開場',          start: 0 },
  { title: '2 · Modernism & Two Answers',  zh: '現代主義與兩種解釋', start: 4 },
  { title: '3 · The Movements',            zh: '各個藝術運動',   start: 10 },
  { title: '4 · America & the Break',      zh: '美國與斷裂',     start: 33 },
  { title: '5 · Quiz',                     zh: '測驗',          start: 45 }
];

/* ---------- Slides ---------- */
const SLIDES = [

/* ===== PART 1 — FRAMING ===== */
{
  type: 'title',
  title: 'Contemporary Art History',
  sub: 'How did art start to change?',
  meta: 'Week 2',
  notes: [
    'Good morning. Today we ask one question. How did art start to change?',
    'For hundreds of years, artists painted the world as it looks. A tree looked like a tree. A face looked like a face. Then, about one hundred and fifty years ago, this changed. Art started to look very different.',
    'Today we find out why.'
  ]
},
{
  type: 'word',
  word: 'modern',
  notes: [
    'Say the word, then wait. Let it sit on screen for a moment before you go on.',
    'One word. Hold it, then move to the three periods.'
  ]
},
{
  type: 'bullets',
  title: 'Three Periods of Western Art',
  zh: '西洋藝術的三大時期',
  items: [
    { head: '1 · {{classical}} — the beauty of nature', body: 'Before 1850. Artists copied the real world.' },
    { head: '2 · {{modernism}} — the beauty of {{form}}', body: 'About 1850 to about 1960. From Courbet’s Realism in the 1860s to Abstract Expressionism in the 1950s.' },
    { head: '3 · {{contemporary}} — the philosophy of art', body: 'After the Second World War. Now art is about ideas.' }
  ],
  notes: [
    'Western art history has three big periods. Three long times.',
    'One. The Classical period. Before 1850. Artists painted the beauty of nature. They copied the real world.',
    'Two. Modernism. From about 1850 to about 1960. Artists became interested in the beauty of form. Form means shape, colour, and line — not the story in the picture.',
    'Three. Contemporary art. After the Second World War. Now art is about ideas. We can call it the philosophy of art.',
    'TEACHER: write the three period names and their dates on the board. Leave them up for the whole class — students need them again in the timeline activity.'
  ]
},
{
  type: 'section',
  title: 'Why did artists suddenly stop painting realistically?',
  sub: 'Why did modern art appear?',
  ask: 'What do you think? Why would an artist stop painting the real world?',
  notes: [
    'So here is our problem. Artists could paint very well. They had five hundred years of practice. And then they stopped.',
    'Why? Something changed. Two things changed, in fact. We will look at both.',
    'ASK the question on screen. Wait ten seconds. A2 students need time to build a sentence before they speak.'
  ]
},

/* ===== PART 2 — MODERNISM AND TWO EXPLANATIONS ===== */
{
  type: 'quote',
  title: '{{modernism}}',
  zh: '現代主義',
  lead: 'Modernism is a major turning point in art history.',
  quote: '“The essence of Modernism lies, as I see it, in the use of the characteristic methods of a discipline to criticize the discipline itself — not in order to subvert it but in order to entrench it more firmly in its area of competence.”',
  cite: 'Clement Greenberg, <i>Modernist Painting</i>, 1960',
  plain: [
    'Every subject has its own methods — its own way of working.',
    'Modernist art uses the methods of art to ask questions about art itself.',
    'Painting asks: what is painting? A painting is flat. A painting is paint on a surface. So Modernist painters showed us the flatness. They showed us the paint.',
    'This does not destroy art. It makes art stronger.'
  ],
  notes: [
    'Clement Greenberg was an American art critic. A critic is a person who writes about art and judges it. Write "critic" on the board.',
    'His English is difficult, so click to open the simple version and read that instead.',
    'Every subject has its own methods — its own way of working. Greenberg said that Modernist art uses the methods of art to ask questions about art itself.',
    'Painting asks: what is painting? What can only painting do? A painting is flat. A painting is made of paint on a surface. So Modernist painters showed us the flatness. They showed us the paint.',
    'And Greenberg says this is not destroying art. It makes art stronger. Art finds the thing that is truly its own.'
  ]
},
{
  type: 'compare',
  title: 'Same pose, 325 years apart',
  ask: 'They are very similar. Now look again — what is different?',
  left:  { src: 'img/manet-olympia.jpg',  label: 'Édouard Manet, <i>Olympia</i>, 1863', tag: 'Manet' },
  right: { src: 'img/titian-venus.jpg',   label: 'Tiziano Vecellio, <i>Venere di Urbino</i>, 1538', tag: 'Titian' },
  reveal: [
    { side: 'right', text: 'Titian’s woman is soft. Her skin has many colours. She looks round, like a real body in a real room.' },
    { side: 'left',  text: 'Manet’s woman is flat. The paint is flat. The edges are hard, like a line drawing.' },
    { side: 'left',  text: 'And she looks at us directly. She is not a goddess. She is a real woman in Paris, and she is not shy.' }
  ],
  notes: [
    'Look at these two paintings. On the right, Titian, painted in 1538. On the left, Manet, painted in 1863.',
    'They are very similar. Same pose. A woman lies down. She looks at us. There is a servant, and there is an animal.',
    'ASK: Now look again. What is different? — wait for answers before you click.',
    'Then click through the three points one at a time.',
    'People in 1865 hated this painting. They were angry. But for Greenberg, this is where modern painting starts. Manet stopped hiding the paint.',
    'TEACHER: this comparison is the strongest moment in the first half. Give it three or four minutes. Let students come to the screen and point. Use the slider and the zoom.'
  ]
},
{
  type: 'section',
  title: 'What changed artists’ thinking?',
  sub: 'Two answers. One comes from inside art. One comes from machines.',
  notes: [
    'Now we have two answers to our question. Two explanations.',
    'The first answer comes from inside art. The second answer comes from technology — from machines.'
  ]
},
{
  type: 'quote',
  title: 'Art’s internal logic',
  zh: '藝術自身的內在邏輯',
  kicker: 'Answer 1 · from inside art',
  lead: 'Hegel, lectures of the 1820s',
  quote: '„In allen diesen Beziehungen ist und bleibt die Kunst nach der Seite ihrer höchsten Bestimmung für uns ein Vergangenes.“',
  cite: 'G. W. F. Hegel, <i>Vorlesungen über die Ästhetik</i>, hrsg. H. G. Hotho (Berlin, 1835), Bd. 1, S. 15',
  plain: [
    'Roughly: for us, art in its highest purpose is now a thing of the past.',
    'Art carries ideas. But ideas grow, and become bigger and bigger.',
    'In the end, the idea is too big for the material. Too big for stone, too big for paint.',
    'So art gives the idea to philosophy. Philosophy takes over.'
  ],
  notes: [
    'Hegel was a German philosopher. He gave these lectures in the 1820s; they were published in 1835.',
    'Hegel had a theory. Art carries ideas. But ideas grow, and they become bigger and bigger. In the end, the idea is too big for the material. Too big for stone, too big for paint.',
    'So art must give the idea to philosophy. Philosophy takes over.',
    'Hegel did NOT mean that art stops. He meant that art is no longer the most important way we understand the world. Say this twice — it comes back in Quiz Question 6.',
    'You do not need to read the German aloud.',
    'CORRECTED: the original slide said 1817. The lectures are from the 1820s.'
  ]
},
{
  type: 'bullets',
  title: '1839 — the {{daguerreotype}}',
  zh: '一八三九年，銀版攝影法',
  kicker: 'Answer 2 · from technology',
  items: [
    { head: 'Before 1839, there were no photographs', body: 'Hegel wrote in the 1820s. At that time, none existed. Not one.' },
    { head: 'In 1839, Louis Daguerre showed his invention', body: 'The first photograph that ordinary people could use.' },
    { head: 'For the first time, a machine could copy the world', body: 'Not a hand. A machine. Faster than any painter, and more exact.' }
  ],
  ask: 'If a machine can copy the world perfectly, what is the job of the painter now?',
  notes: [
    'Here is the second answer. Technology.',
    'Hegel wrote in the 1820s. At that time, there were no photographs. None.',
    'Then, in 1839, a Frenchman named Louis Daguerre showed a new invention. The daguerreotype. It was the first photograph that ordinary people could use.',
    'Think about this. For the first time in history, a machine can copy the world. Not a hand. A machine. And the machine is faster than any painter, and more exact.',
    'ASK the question. Wait ten seconds. This one usually gets a good answer.'
  ]
},
{
  type: 'quote',
  title: 'Technology and media',
  zh: '技術與媒介',
  kicker: 'Answer 2 · from technology',
  lead: 'Benjamin, 1936',
  quote: '„Was im Zeitalter der technischen Reproduzierbarkeit des Kunstwerks verkümmert, das ist seine {{aura}}.“',
  cite: 'Walter Benjamin, <i>Das Kunstwerk im Zeitalter seiner technischen Reproduzierbarkeit</i> (1935; published 1936)',
  plain: [
    'The {{aura}} is the special feeling of a real, original artwork. You must stand in front of it. It is here, it is now, and there is only one.',
    'You can see a photo of the Mona Lisa on your phone. The feeling is not the same as standing in the Louvre.',
    'When machines copy artworks, the aura becomes weak. It disappears.',
    'Is this bad? Copies are cheap, so everybody can see art. That is good. But something is lost.'
  ],
  notes: [
    'Walter Benjamin was a German writer. He wrote this in 1936.',
    'Benjamin used a special word. Aura. Write it on the board and say it twice.',
    'The aura is the special feeling of a real, original artwork. You must stand in front of it. It is here, and it is now, and there is only one.',
    'You can see a photo of the Mona Lisa on your phone. But the feeling is not the same as standing in the Louvre.',
    'Benjamin said that when we copy artworks by machine — photographs, posters, printing — the aura becomes weak. It disappears.',
    'Is this bad? Benjamin was not sure. Copies are cheap, so everybody can see art. That is good. But something is lost.',
    'This is Quiz Question 5.'
  ]
},

/* ===== PART 3 — THE MOVEMENTS ===== */
{
  type: 'section',
  title: 'How did artists respond?',
  sub: 'What did they actually make?',
  notes: ['Now, how did artists respond? What did they actually make?']
},
{
  type: 'bullets',
  title: 'Early twentieth-century European art',
  zh: '二十世紀初的歐洲藝術',
  items: [
    { head: '1901–1906, Paris', body: 'Big exhibitions of Van Gogh, Gauguin and Cézanne. Young artists saw them and were excited.' },
    { head: 'The 1900s: many new groups, very quickly', body: 'Art Nouveau · {{fauvism}} · {{cubism}} · {{expressionism}}' },
    { head: 'Then groups that grew out of Cubism', body: '{{constructivism}} in Russia · {{destijl}} in the Netherlands · {{futurism}} in Italy' },
    { head: 'The First World War stopped everything', body: 'After the war: {{dada}}, Duchamp, and {{surrealism}}.' },
    { head: 'The {{bauhaus}} changed what came next', body: 'Art, architecture, design and education.' }
  ],
  notes: [
    'Between 1901 and 1906, Paris had big exhibitions of Van Gogh, Gauguin and Cézanne. Young artists saw them and were excited.',
    'Then many new groups appeared, very quickly. Art Nouveau. Fauvism. Cubism. Expressionism. Then more groups grew from Cubism — Constructivism in Russia, De Stijl in the Netherlands, Futurism in Italy.',
    'Then the First World War stopped everything. After the war, new groups: Dada, and Surrealism. And the Bauhaus school changed art, architecture and design.',
    'A movement is a group of artists with shared ideas. Say this — students will hear the word many times today. Write it on the board.',
    'The war point is Quiz Question 3.'
  ]
},
{
  type: 'artwork',
  src: 'img/barr-diagram.jpg',
  title: '“Cubism and Abstract Art”, 1936',
  caption: 'Alfred H. Barr Jr., cover diagram for the exhibition <i>Cubism and Abstract Art</i>, Museum of Modern Art, New York, 1936',
  points: [
    'A map of modern art. The dates run down both sides.',
    'The arrows show influence — this group learned from that group.',
    'You do not need to remember this map. But look at the shape: everything moves down, and everything connects.'
  ],
  notes: [
    'This is a famous picture. Alfred Barr made it in 1936, for a museum in New York.',
    'It is a map of modern art. The dates are on both sides. The arrows show influence — this group learned from that group.',
    'You do not need to remember this map. But look at the shape. Everything moves down, and everything connects. Barr thought modern art was one big story with one direction.',
    'Remember this idea. Later today, this story breaks.',
    'NOTE: this scan is small. Zoom will be soft — better to describe the shape than to read the words.'
  ]
},
{
  type: 'activity',
  title: 'Timeline Mapping Activity',
  zh: '時間軸活動',
  minutes: 15,
  instructions: [
    'Work in groups.',
    'Put these movements on a timeline, in order.',
    'Then find the First World War on your timeline. Mark it.',
    'Each group then presents one movement — about one minute.'
  ],
  ask: 'What happens to art before the war? What happens after? Is it different?',
  timeline: [
    ['1905', 'Fauvism'], ['1907', 'Cubism'], ['1910', 'Expressionism'], ['1910', 'Futurism'],
    ['1913', 'Suprematism'], ['1915', 'Constructivism'], ['1917', 'De Stijl'], ['1919', 'Bauhaus'],
    ['1920s', 'Brancusi'], ['1920s', 'Paul Klee'], ['1930s', 'America learns from Europe'],
    ['1945', 'New York replaces Paris']
  ],
  notes: [
    'Now you work in groups. Here is your list of movements and dates.',
    'Put them on a timeline, in order. Then find the First World War on your timeline. Mark it.',
    'ASK: What happens to art before the war? What happens after? Is it different?',
    'Fifteen minutes. Start the timer on screen. Then each group presents one movement — about one minute each.',
    'The three period names should still be on the board from the start of class.'
  ]
},

/* --- Fauvism --- */
{
  type: 'bullets',
  title: '{{fauvism}}',
  zh: '野獸派',
  kicker: '1904–1908 · France',
  items: [
    { head: 'Main artist: Henri Matisse' },
    { head: 'The name means “wild beasts”', body: 'A {{critic}} used the word in 1905 to laugh at them. The artists liked it and kept it.' },
    { head: 'Colour is not realistic', body: 'A face can be green. A road can be pink. Colour shows feeling, not fact.' },
    { head: 'Simple shapes, no realistic {{perspective}}' },
    { head: 'A bridge', body: 'Van Gogh, Gauguin, Cézanne → Fauvism → Cubism and Expressionism.' }
  ],
  notes: [
    'The main artist is Henri Matisse.',
    'The name means wild beasts — wild animals. A critic used this word in 1905 to laugh at them. He thought the colours were too strong, like animals. The artists liked the name and kept it.',
    'Fauvist colour is not realistic. A face can be green. A road can be pink. The colour shows feeling, not fact.',
    'The shapes are simple. There is no realistic space.'
  ]
},
{
  type: 'artwork',
  src: 'img/matisse-harmony-in-red.jpg',
  title: 'Harmony in Red',
  caption: 'Henri Matisse, <i>Harmony in Red</i>, 1908',
  ask: 'Where does the table stop and the wall start?',
  points: [
    'The red covers the table and the wall together.',
    'It is difficult to say where one ends. Matisse joins them.',
    'The room becomes flat, like a pattern on cloth.',
    'There is one window, with a garden. But even the garden looks flat.'
  ],
  notes: [
    'Look at the red. It covers the table and the wall together.',
    'ASK: Where does the table stop and the wall start? — let them point at the screen. Use zoom on the corner where the table meets the wall.',
    'It is difficult to say. Matisse joins them. The room becomes flat, like a pattern on cloth.',
    'There is one window, with a garden. But even the garden looks flat.'
  ]
},

/* --- Cubism --- */
{
  type: 'bullets',
  title: '{{cubism}}',
  zh: '立體主義',
  kicker: '1907–1918 · France',
  items: [
    { head: 'Main artists: Pablo Picasso, Georges Braque' },
    { head: 'Many viewpoints in one picture', body: 'The front, the side and the top — at the same time.' },
    { head: 'It breaks single-point {{perspective}}', body: 'Before this, painting used one position, like one eye looking through a window.' },
    { head: 'A “rational” {{abstract}}ion', body: 'It leads to geometric, hard-edge abstract art.' },
    { head: 'Key words: {{form}} · {{collage}} · materials', body: 'Artists glued paper onto the picture, so the artwork became an object.' }
  ],
  notes: [
    'The main artists are Pablo Picasso and Georges Braque.',
    'Cubism does something new. In one picture, you see an object from many sides at the same time. The front, the side, and the top — together.',
    'Before this, painting used one viewpoint. One position, like one eye looking through a window. Cubism breaks that rule.',
    'Cubist artists also glued paper onto the picture. We call this collage. Write it on the board. So the artwork became an object, made of materials.'
  ]
},
{
  type: 'artwork',
  src: 'img/picasso-bread-and-fruit.jpg',
  title: 'Bread and Fruit Dish on a Table',
  caption: 'Pablo Ruiz Picasso, <i>Bread and Fruit Dish on a Table</i>, 1909',
  points: [
    'A table with bread and fruit. Very ordinary.',
    'But look how it is broken — everything is cut into flat shapes with hard edges.',
    'Look at the bowl at the bottom. You see it from above, so you see the circle. But you see the table from the side. Two views, one picture.',
    'The colours are quiet: brown, green, grey. Picasso is interested in shape and space, not colour.'
  ],
  notes: [
    'This is a table with bread and fruit. Very ordinary.',
    'But look how it is broken. Everything is cut into flat shapes with hard edges.',
    'Look at the bowl at the bottom — zoom in on it. You see it from above, so you see the circle. But you also see the table from the side. Two views, one picture.',
    'The colours are quiet — brown, green, grey. Picasso is not interested in colour here. He is interested in shape and space.'
  ]
},

/* --- Expressionism --- */
{
  type: 'bullets',
  title: '{{expressionism}}',
  zh: '表現主義',
  kicker: 'Germany, from 1910',
  items: [
    { head: 'Main artists: Franz Marc, Ernst Ludwig Kirchner' },
    { head: 'Strong colour and strong line — but not for beauty', body: 'It shows difficult feelings: fear, loneliness, pressure.' },
    { head: 'City life felt fast and cold', body: 'These artists lived in big modern cities. Their paintings show that feeling.' },
    { head: 'Against {{abstract}} art', body: 'They believed you cannot show real social problems with only shapes.' },
    { head: 'Stopped by the Nazi government', body: 'It was called bad and dangerous — although these artists stood against the militarism around them.' }
  ],
  notes: [
    'Main artists: Franz Marc, and Ernst Ludwig Kirchner.',
    'Expressionism uses strong colour and strong lines. But not for beauty. It shows difficult feelings — fear, loneliness, pressure.',
    'These artists lived in big modern cities. City life felt fast and cold. Their paintings show that feeling.',
    'They did not like abstract art. Abstract means art with no recognisable objects. Write it on the board. They believed you cannot show real social problems with only shapes.',
    'Later, the Nazi government said this art was bad and dangerous, and stopped it.'
  ]
},
{
  type: 'artwork',
  src: 'img/kirchner-street-dresden.jpg',
  title: 'Street, Dresden',
  caption: 'Ernst Ludwig Kirchner, <i>Street, Dresden</i>, 1908',
  ask: 'How do these people feel? Look at their faces.',
  points: [
    'A city street, full of people.',
    'The faces are like masks. Nobody looks at anybody.',
    'They are close together, but they are alone.',
    'And the street is pink. A street is not pink. Kirchner uses this colour to make us uncomfortable.'
  ],
  notes: [
    'A city street, full of people.',
    'ASK: How do these people feel? Look at their faces. — zoom into the faces while they answer.',
    'The faces are like masks. Nobody looks at anybody. They are close together, but they are alone.',
    'And the street is pink. A street is not pink. Kirchner uses this colour to make us uncomfortable.',
    'CORRECTED: the original slide said “Street Dresen”. The title is “Street, Dresden”.'
  ]
},

/* --- Suprematism --- */
{
  type: 'bullets',
  title: '{{suprematism}}',
  zh: '至上主義',
  kicker: 'Russia · The development of abstract form',
  items: [
    { head: 'Main artist: Kazimir Malevich', body: 'He started Suprematism about 1913.' },
    { head: '1915, St Petersburg', body: 'An important exhibition, with thirty-six works. This marks its start.' },
    { head: 'Only basic shapes, very few colours', body: 'Square, circle, line.' },
    { head: 'It shows nothing', body: 'No people, no objects, no places. Malevich wanted pure feeling, from shape alone.' },
    { head: 'Anti-material, anti-useful', body: '“Art for art’s sake.”' }
  ],
  notes: [
    'The main artist is Kazimir Malevich. He started Suprematism about 1913.',
    'In 1915 there was an important exhibition, with thirty-six works.',
    'Suprematism uses only basic shapes — square, circle, line — and very few colours.',
    'It shows nothing. No people, no objects, no places. Malevich wanted pure feeling, from shape alone.',
    'CORRECTED: the original slide also listed Kandinsky here. He has been removed — he was not a Suprematist. He was in Der Blaue Reiter, and later taught at the Bauhaus. Do not mention him on this slide.'
  ]
},
{
  type: 'artwork',
  src: 'img/malevich-black-square.jpg',
  title: 'Black Square',
  caption: 'Kazimir Malevich, <i>Black Square</i>, 1915',
  ask: 'Is this art? Tell me why, or why not.',
  points: [
    'A black square, on a white ground. That is all.',
    'Malevich showed this painting in a corner of the room, near the ceiling.',
    'In a Russian house, that corner is where a religious picture goes.',
    'So he is saying something big. This is the beginning of a new art. Zero. Start again.'
  ],
  notes: [
    'A black square, on a white ground. That is all.',
    'ASK: Is this art? Tell me why, or why not. — let students argue for a moment. Do not answer too quickly.',
    'Then: Malevich showed this painting in a corner of the room, near the ceiling. In a Russian house, that corner is where a religious picture goes.',
    'So he is saying something big. This is the beginning of a new art. Zero. Start again.',
    'CORRECTED: the original slide said 1918. The correct date is 1915.'
  ]
},
{
  type: 'artwork',
  src: 'img/malevich-white-on-white.jpg',
  title: 'White on White',
  caption: 'Kazimir Malevich, <i>White on White</i>, 1918',
  ask: 'Can a painting go further than this? What is left?',
  points: [
    'Now, white on white. A white square on a white ground.',
    'You can only see it because the whites are slightly different, and the square is turned a little.',
    'Malevich has removed nearly everything. Almost no colour. Almost no shape.'
  ],
  notes: [
    'Now, white on white. A white square on a white ground.',
    'You can only see it because the whites are slightly different, and the square is turned a little. Zoom in — the edge is easier to see large.',
    'Malevich has removed nearly everything. Almost no colour. Almost no shape.',
    'ASK: Can a painting go further than this? What is left?',
    'CORRECTED: the original slide said “White in White”. The usual title is “White on White”.'
  ]
},

/* --- Constructivism --- */
{
  type: 'bullets',
  title: '{{constructivism}}',
  zh: '構成主義',
  kicker: 'Russia · The development of abstract form',
  items: [
    { head: 'Main artist: Vladimir Tatlin' },
    { head: 'Against “art for art’s sake”', body: 'Against art that is only beautiful and does nothing.' },
    { head: 'Russia had a revolution in 1917', body: 'These artists wanted to help build the new country. Art should be useful.' },
    { head: 'They refused oil paint and canvas', body: 'They used real materials — wood, metal, glass, photographs, paper.' },
    { head: '“Go into the factory, where real life is”', body: 'Art serves the new society.' }
  ],
  notes: [
    'The main artist is Vladimir Tatlin.',
    'The Constructivists were against art for art’s sake — against art that is only beautiful and does nothing.',
    'Russia had a revolution in 1917. These artists wanted to help build the new country. Art should be useful.',
    'So they refused oil paint and canvas. They used real materials — wood, metal, glass, photographs.',
    'They said: go into the factory, because real life is there.'
  ]
},
{
  type: 'artwork',
  src: 'img/tatlin-monument.jpg',
  title: 'Monument to the Third International',
  caption: 'Vladimir Tatlin, <i>Monument to the Third International</i>, 1919–1920 (model, photographed)',
  smallSource: true,
  points: [
    'Look at the small men at the bottom — that shows you the size of the model.',
    'The real building would be four hundred metres tall. Taller than the Eiffel Tower.',
    'Inside, glass rooms would turn slowly — one turn each year, one each month, one each day.',
    'It was never built. Russia was poor after the war, and there was not enough metal.',
    'So this is a monument to an idea, not a real building.'
  ],
  notes: [
    'This is a design for a huge building. Look at the small men at the bottom — that shows you the size in the model.',
    'The real building would be four hundred metres tall. Taller than the Eiffel Tower. Inside, glass rooms would turn slowly — one turn each year, one each month, one each day.',
    'It was never built. Russia was poor after the war, and there was not enough metal.',
    'So this is a monument to an idea, not a real building.',
    'NOTE: this is the only low-resolution image in the deck. Zoom is limited on purpose — it would fall apart.'
  ]
},

/* --- De Stijl --- */
{
  type: 'bullets',
  title: '{{destijl}}',
  zh: '風格派',
  kicker: 'The Netherlands · The development of abstract form',
  items: [
    { head: 'Main artist: Piet Cornelis Mondrian' },
    { head: 'Another name: {{neoplasticism}}' },
    { head: 'Reduced to the smallest number of parts', body: 'Straight lines. Rectangles. Flat planes.' },
    { head: 'Only three colours', body: 'Red, yellow and blue — plus black, white and grey. No curves. No diagonals.' },
    { head: 'Highly rational', body: 'Mondrian wanted balance — not the same on both sides, but balanced, like weight on two hands.' }
  ],
  notes: [
    'The main artist is Piet Mondrian. Another name for this group is Neoplasticism.',
    'They reduced art to the smallest number of parts. Straight lines. Rectangles. Only three colours — red, yellow, blue — plus black, white and grey.',
    'No curves. No diagonals.',
    'Mondrian wanted balance. Not the same on both sides, but balanced, like weight on two hands.'
  ]
},
{
  type: 'artwork',
  src: 'img/mondrian.jpg',
  title: 'Composition',
  caption: 'Piet Cornelis Mondrian',
  ask: 'Are the coloured shapes the same size?',
  points: [
    'Look at the black lines. They cross the whole picture.',
    'No — one shape is large, the others are small. But the picture still feels calm and even.',
    'Mondrian moved the lines many times before he finished.',
    'This looks simple, but it is slow, careful work.'
  ],
  notes: [
    'Look at the black lines. They cross the whole picture.',
    'ASK: Are the coloured shapes the same size? — wait, then reveal.',
    'No. One is large, others are small. But the picture still feels calm and even.',
    'Mondrian moved the lines many times before he finished. This looks simple, but it is slow, careful work.',
    'Remember this slide. You will compare it with Frank Gehry near the end of class.'
  ]
},

/* --- Futurism --- */
{
  type: 'bullets',
  title: '{{futurism}}',
  zh: '未來主義',
  kicker: 'Italy · The development of abstract form',
  items: [
    { head: 'Main artist: Umberto Boccioni' },
    { head: '1910 — the Futurist {{manifesto}}', body: 'They said: close the museums. Forget the past. Italy has too much history.' },
    { head: 'They loved speed, technology and the modern city', body: 'Cars, aeroplanes, industrial cities.' },
    { head: 'They also praised war and violence', body: 'This is a problem. Later, many Futurists supported the Fascist government in Italy.' }
  ],
  notes: [
    'The main artist is Umberto Boccioni.',
    'In 1910, the Futurists wrote a manifesto — a public letter of their ideas. Write "manifesto" on the board. They said: close the museums. Forget the past. Italy has too much history.',
    'They loved speed, machines, cars, aeroplanes, and the big modern city.',
    'They also praised war and violence. This is important, and it is a problem. Later, many Futurists supported the Fascist government in Italy.',
    'TEACHER: students may find this uncomfortable. That is correct — do not soften it. It comes back in the discussion question about art and politics.'
  ]
},
{
  type: 'artwork',
  src: 'img/boccioni-city-rises.jpg',
  title: 'La Città Che Sale',
  caption: 'Umberto Boccioni, <i>La Città Che Sale</i> (The City Rises), 1910',
  points: [
    'In the middle, a big red horse. Around it, workers, pulling.',
    'Behind them, a new city being built — buildings and scaffolding.',
    'Now look at the brushmarks. They are short and fast, and they go in every direction.',
    'Nothing has a clear edge. Boccioni is not painting a moment. He is painting movement and energy.'
  ],
  notes: [
    'In the middle, a big red horse. Around it, workers, pulling.',
    'Behind them, you can see a new city being built — buildings and scaffolding.',
    'Now look at the brushmarks — zoom in here. They are short and fast, and they go in every direction. Nothing has a clear edge.',
    'Boccioni is not painting a moment. He is painting movement and energy.'
  ]
},

/* --- Brancusi --- */
{
  type: 'bullets',
  title: 'Constantin Brancusi’s sculpture',
  zh: '布朗庫西的雕塑',
  kicker: 'The development of abstract form',
  items: [
    { head: 'Sculpture changes place', body: 'From the studio, to the site where the object comes into being.' },
    { head: 'The place is part of the work', body: 'Where it stands changes what it means.' },
    { head: 'The making becomes public', body: 'It is no longer only private.' },
    { head: 'A new question, beyond materials', body: 'How does our body relate to the space around the sculpture?' }
  ],
  notes: [
    'Constantin Brancusi changed how we think about sculpture.',
    'Before, a sculpture was made in the studio and then put somewhere. The place was not important.',
    'Brancusi said the place is part of the work. Where it stands changes what it means.',
    'He also asked a new question. How does our body relate to the space around the sculpture? Not just: what is it made of?'
  ]
},
{
  type: 'artwork',
  src: 'img/brancusi-bird-in-space.jpg',
  title: 'L’Oiseau dans l’Espace',
  caption: 'Constantin Brancusi, <i>Bird in Space</i>, 1926 — photographed by Brancusi in his own studio',
  ask: 'Why is this a bird?',
  points: [
    'The bird is not bird-shaped. There are no wings, no feet, no head.',
    'Just one tall, smooth, curved form.',
    'Because it shows flying, not the bird. It shows movement upward.',
    'A true story: in 1926 American customs officers refused to accept this as art. They said it was a metal object, and made him pay tax. Brancusi went to court — and he won.'
  ],
  notes: [
    'This is a photograph of Brancusi’s studio, taken by Brancusi himself. The photograph is part of the work.',
    'The bird is not bird-shaped. There are no wings, no feet, no head. Just one tall, smooth, curved form.',
    'ASK: Why is this a bird? — wait ten seconds.',
    'Because it shows flying, not the bird. It shows movement upward.',
    'A true story: in 1926 American customs officers refused to accept this as art. They said it was a metal object, and made him pay tax. Brancusi went to court — and he won. Students enjoy this one.',
    'CORRECTED: the original slide said “L’Oiseau dans L’aspace”. The French is “l’Espace”.'
  ]
},

/* --- Klee --- */
{
  type: 'bullets',
  title: 'Paul Klee’s painting',
  zh: '克利的繪畫',
  kicker: 'The development of abstract form',
  items: [
    { head: 'Klee taught at the {{bauhaus}}', body: 'He knew all the rules and all the theories.' },
    { head: 'Structure is not {{intuition}}', body: 'And structure is not enough. An artist needs intuition — a feeling that comes without thinking.' },
    { head: 'A work goes past the rule that made it' },
    { head: '1918: “Art happens… where the intellect disappears”', body: 'Intellect means thinking with logic.' }
  ],
  notes: [
    'Paul Klee taught at the Bauhaus. He knew all the rules and all the theories.',
    'But Klee said structure is not enough. Rules are not enough. An artist needs intuition — a feeling that comes without thinking. Write "intuition" on the board.',
    'In 1918 he wrote that art happens where the intellect disappears. Intellect means thinking with logic.',
    'So a good artwork goes past the rule that made it.'
  ]
},
{
  type: 'artwork',
  src: 'img/klee-highway-and-byways.jpg',
  title: 'Highway and Byways',
  caption: 'Paul Klee, <i>Highway and Byways</i>, 1929',
  points: [
    'A wide road goes up the middle, getting narrower.',
    'Around it, small paths and small blocks of colour.',
    'It looks like a map, seen from above. It also looks like fields. It also looks like a city.',
    'Klee does not tell you which one. All of them are true at once.'
  ],
  notes: [
    'Look at the shape. A wide road goes up the middle, getting narrower.',
    'Around it, small paths and small blocks of colour.',
    'It looks like a map, seen from above. It also looks like fields. It also looks like a city.',
    'Klee does not tell you which one. All of them are true at once.'
  ]
},

/* ===== PART 4 — AMERICA AND THE BREAK ===== */
{
  type: 'section',
  title: 'The centre of Modern Art gradually moved',
  sub: 'Until now, everything happened in Europe — Paris, Berlin, Moscow, Milan. That is going to change.',
  notes: [
    'Now we change place. Until now, everything happened in Europe — Paris, Berlin, Moscow, Milan.',
    'That is going to change.'
  ]
},
{
  type: 'bullets',
  title: 'Early twentieth-century American art',
  zh: '二十世紀初的美國藝術',
  items: [
    { head: 'At first, a mix of European styles', body: 'Rural and urban subjects. No big breakthrough yet.' },
    { head: '1913 — the Armory Show　軍械庫展覽會', body: 'European modern art came to New York. Many Americans saw {{cubism}} for the first time, and many were shocked.' },
    { head: '1929 — MoMA opens in New York　紐約現代美術館' },
    { head: '1933–57 — Black Mountain College　黑山學院', body: 'A small, experimental art school.' },
    { head: '1933 — Public Works of Art Project　公共工程藝術計劃' },
    { head: '1935–43 — Federal Art Project　美國聯邦藝術計劃', body: 'The government paid artists to work, because there were no jobs after the economic crash.' }
  ],
  notes: [
    'At first, American art was a mix of European styles. Nothing completely new yet.',
    'Here are the important dates. In 1913, the Armory Show. This big exhibition brought European modern art to New York. Many Americans saw Cubism for the first time, and many were shocked.',
    'In 1929, the Museum of Modern Art opened in New York.',
    'From 1933, Black Mountain College — a small, experimental art school.',
    'From 1933 and 1935, two government programmes. The government paid artists to work, because there was no money and no jobs after the economic crash.',
    'So America built the system first — the museums, the schools, the money. The great art came later. Say this last line clearly; it is the point of the slide.'
  ]
},
{
  type: 'break',
  title: 'From Modernism to Contemporary Art',
  zh: '從現代主義到當代藝術',
  chain: ['Fauvism', 'Cubism', 'Expressionism', 'Constructivism', 'Suprematism', 'De Stijl', 'Futurism', 'Brancusi', 'Klee', 'Bauhaus', 'early American art'],
  chainLabel: 'One unfolding story. One thing leads to the next thing — like Barr’s map.',
  after: {
    label: 'After 1945, this stops working.',
    items: [
      'The centre moves from Paris to New York.',
      'Abstract Expressionism, Pop Art and Minimalism all exist at the same time.',
      'No style is the main one. The single story is finished.'
    ]
  },
  notes: [
    'Look at the top line. Fauvism, then Cubism, then Expressionism, then Constructivism, Suprematism, De Stijl, Futurism, then Brancusi, Klee, the Bauhaus, then America.',
    'This is one story. One thing leads to the next thing. Like Barr’s map.',
    'Click. Watch the chain break on screen.',
    'But after 1945, this stops working. The centre moves from Paris to New York. And now many different styles exist at the same time — Abstract Expressionism, Pop Art, Minimalism.',
    'No style is the main one. The single story is finished.'
  ]
},
{
  type: 'section',
  title: 'How did we arrive at Contemporary Art?',
  notes: ['One question, then two thinkers. Belting first, then Danto.']
},
{
  type: 'quote',
  title: 'The end of art history',
  zh: '藝術史的終結',
  lead: 'Hans Belting, 1983',
  quote: '„…dass die heutige Kunst zwar die bekannte Geschichte der Kunst reflektiert, sie aber nicht ‚nach vorne‘ fortsetzt…“',
  cite: 'Hans Belting, as quoted in Andreas Mertin, “Lektüren II. Aus der Bücherwelt”, <i>Magazin für Theologie und Ästhetik</i>, Heft 15',
  plain: [
    'Careful with the title. He says the end of art <b>history</b> — not the end of art.',
    'Art history is the story we tell about art.',
    'Belting says we can no longer tell one story that includes everything. No more {{grandnarrative}}.',
    'Artists keep working. But there is no single line any more.'
  ],
  notes: [
    'Hans Belting is a German art historian. He wrote this in 1983.',
    'Careful with his title. He says the end of art HISTORY — not the end of art. Say this twice.',
    'Art history is the story we tell about art. Belting says we can no longer tell one story that includes everything.',
    'Artists keep working. But there is no single line any more.'
  ]
},
{
  type: 'quote',
  title: 'The end of art',
  zh: '藝術的終結',
  lead: 'Arthur Danto, 1984',
  quote: '“it is perhaps unavoidable that it should turn into philosophy at last”',
  cite: 'Arthur Danto, “The End of Art”, in Berel Lang, ed., <i>The Death of Art</i> (New York: Haven, 1984), 5–35',
  plain: [
    'He says the end of art. But he means one kind of art — {{modernism}}, art defined by beautiful {{form}}.',
    'Art has asked the question “what is art?” so many times that it has become philosophy.'
  ],
  ask: 'Hegel, Belting and Danto all say something ends. What is the same in all three?',
  notes: [
    'Arthur Danto was an American philosopher. He wrote this in 1984.',
    'He says the end of art. But he means one kind of art — Modernist art, art that is about beautiful form.',
    'Danto says art has asked the question "what is art?" so many times that it has become philosophy.',
    'ASK the question on screen. Wait — this is the hardest question of the day.',
    'The answer: none of them says that art stops. They say that one story, or one kind of art, is finished.',
    'TEACHER: this is Quiz Question 6. Ask it here, and the quiz becomes revision instead of a test.'
  ]
},
{
  type: 'bullets',
  title: '{{contemporary}}',
  zh: '當代藝術',
  items: [
    { head: 'Not a period', body: 'It is the point after which there are no more grand narratives.　← Belting' },
    { head: 'Not a style', body: 'It is a style of using styles.　← Danto' },
    { head: 'So an artist today can use any style', body: 'From any time, from any country. Nothing is forbidden.' }
  ],
  notes: [
    'So now we can define contemporary art. Two short definitions.',
    'From Belting: contemporary art is not a period with a date. It is the point after which there are no more big stories.',
    'From Danto: contemporary art is not a style. It is a style of using styles.',
    'That means an artist today can use any style, from any time, from any country. Nothing is forbidden.'
  ]
},
{
  type: 'bullets',
  title: 'From Contemporary Art to {{postmodernism}}',
  zh: '從當代藝術到後現代主義',
  items: [
    { head: '{{contemporary}} = <b>what</b> happened', body: 'No single style, no single story.' },
    { head: '{{postmodernism}} = <b>why</b> it happened', body: 'The way of thinking behind it.' },
    { head: 'Postmodernism is not a period', body: 'It is a way of thinking, defined against “modern” thinking.' },
    { head: 'Postmodern features', body: 'No single truth · mixing styles · questioning authority · taking ideas apart' }
  ],
  notes: [
    'Two words, and students often mix them up. Keep them separate.',
    'Contemporary art is WHAT happened. No single style, no single story.',
    'Postmodernism is WHY it happened. It is a way of thinking. Write it on the board.',
    'Postmodern thinking says: there is no single truth. Mix styles freely. Question people with authority. Take ideas apart and look inside.'
  ]
},
{
  type: 'artwork',
  src: 'img/gehry-disney-hall.jpg',
  title: 'Frank Gehry',
  caption: 'Frank Gehry, Walt Disney Concert Hall, Los Angeles',
  ask: 'Where are the straight lines?',
  points: [
    'There are almost none. The walls curve and bend. The metal moves like cloth.',
    'Compare it with Mondrian, earlier today.',
    'Mondrian wanted order, balance, rules. Gehry breaks all of that.',
    'That is the difference between modern thinking and postmodern thinking, in one building.'
  ],
  notes: [
    'This is a concert hall in Los Angeles, by Frank Gehry.',
    'ASK: Where are the straight lines? — let them look.',
    'There are almost none. The walls curve and bend. The metal moves like cloth.',
    'Compare it with Mondrian, earlier today. Press M and jump back to the Mondrian slide if you want them side by side — Backspace brings you straight back here.',
    'Mondrian wanted order, balance, rules. Gehry breaks all of that.',
    'That is the difference between modern thinking and postmodern thinking, in one building.'
  ]
},
{
  type: 'section',
  title: 'What is the difference between Modern and Contemporary Art?',
  sub: 'Our question from the beginning of class.',
  notes: ['Now, our question from the beginning of class.']
},
{
  type: 'twocol',
  title: 'Modern vs Contemporary',
  left: {
    head: '{{modernism}}',
    zh: '現代主義',
    lead: 'Around 1860, this label was given to the most {{avantgarde}} art of the moment.',
    items: [
      'A fixed period in art history.',
      'It cares about new ideas, and about the nature of art itself.',
      'The dates do not move.'
    ]
  },
  right: {
    head: '{{contemporary}}',
    zh: '當代藝術',
    lead: '“Contemporary” keeps sliding forward with time.',
    items: [
      'Art created in our own time.',
      'More than simply “now”.',
      'It reflects today’s culture, society and politics.'
    ]
  },
  notes: [
    'Modernism is a fixed period in history. It starts about 1860. It cares about new ideas, and about the nature of art itself. The dates do not move.',
    'Contemporary is different. Contemporary always means now. So it moves forward with time. In 1990, contemporary meant 1990. Today it means today.',
    'And contemporary art is more than just new. It shows the culture, society and politics of our own time.'
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
    'Greenberg said {{modernism}} is art using its own methods to question itself. Is that still true of art made today — or has {{contemporary}} moved past this kind of self-questioning?',
    'Hegel, Belting and Danto each announced an “end”. But artists obviously kept working. What did each of them really mean — and is “ending” the right word for it?',
    'Futurism and Constructivism tied their new forms to politics: nationalism on one side, socialism on the other. Can an {{abstract}} shape ever be politically neutral — or does new form always carry ideology?'
  ],
  notes: [
    'Ten minutes. These are the three discussion questions from the lesson plan, simplified for A2 — the full wording is in the plan if you want it.',
    'Question 2 is revision: it is Quiz Question 6 in conversational form. If the room is quiet, start there, because they can already answer it.',
    'Question 3 is the hardest and the best. It reaches back to the Futurism slide and forward to next week.',
    'A2 support: the sentence starters are on screen. Give ten seconds of silence after each question before you call on anyone.'
  ]
},

/* ===== PART 5 — QUIZ ===== */
{
  type: 'section',
  title: 'Art Quiz',
  zh: '藝術測驗',
  sub: 'Six questions. Nothing is scored, and nothing is saved.',
  notes: [
    'Read each question aloud, slowly, twice. Then read the four options.',
    'Give thirty seconds. Students can answer by holding up one, two, three or four fingers.',
    'Then click to reveal. The right answer lights up; the others just fade. There is no score and nothing is recorded.',
    'Every one of these questions was already answered during the lecture, so this is revision, not a test.'
  ]
},
{
  type: 'quiz', n: 1, answer: 3,
  q: 'How did the {{critic}} Clement Greenberg define the essence of {{modernism}} in painting?',
  options: [
    'The total rejection of any formal beauty in favour of purely political messaging.',
    'A shift toward using art to explain religious and spiritual phenomena through reason.',
    'The pursuit of depicting external reality with the highest possible level of objective accuracy.',
    'An emphasis on using the characteristic methods of a discipline to critique and entrench itself.'
  ],
  why: 'Art uses its own methods to ask questions about itself — and this makes art stronger, not weaker.',
  notes: ['Answer: D. Art uses its own methods to ask questions about itself, and this makes it stronger.']
},
{
  type: 'quiz', n: 2, answer: 2,
  q: 'Which artist is identified by Clement Greenberg as the historical starting point for modernist painting?',
  options: ['Pablo Picasso', 'Piet Mondrian', 'Édouard Manet', 'Kazimir Malevich'],
  why: 'Remember the two women lying down. Titian is soft and round; Manet is flat. Manet stopped hiding the paint.',
  notes: ['Answer: C, Manet. Remember the two women lying down. Titian is soft and round; Manet is flat.']
},
{
  type: 'quiz', n: 3, answer: 3,
  q: 'How did the end of the First World War affect the development of the European {{avantgarde}}?',
  options: [
    'It prompted the total abandonment of abstract art in favour of state-sponsored realism across all of Europe.',
    'It resulted in the immediate unification of all European art movements under a single grand narrative.',
    'It caused artists to return to the Classical period’s focus on natural beauty, to escape the reality of the war.',
    'It led to a reaction against the perceived senselessness of the war, sparking movements like Dada and Surrealism.'
  ],
  why: 'After the war, artists thought the war had no sense and no reason. So Dada and Surrealism began.',
  notes: ['Answer: D. After the war, artists thought the war had no sense and no reason. So Dada and Surrealism began.']
},
{
  type: 'quiz', n: 4, answer: 0,
  q: 'When did the {{contemporary}} period of art begin to emerge, according to today’s timeline?',
  options: [
    'Beginning after the Second World War and becoming clear around the 1960s.',
    'Directly following the end of the Classical period in 1900.',
    'Starting with the Realism movement in 1850.',
    'Immediately following the conclusion of the Enlightenment in the 1700s.'
  ],
  why: 'The same answer as the very first slide of today: Contemporary art begins after the Second World War.',
  notes: [
    'Answer: A.',
    'CORRECTED: the original option A said “after WWI, solidifying around the 1950s”, which contradicted slide 3. It now reads “after the Second World War… around the 1960s”, matching your Three Periods slide.'
  ]
},
{
  type: 'quiz', n: 5, answer: 2,
  q: 'Which concept did Walter Benjamin use to describe the unique, here-and-now presence of an original work of art?',
  options: ['Formalism.', 'Disenchantment.', 'The {{aura}}.', 'The {{grandnarrative}}.'],
  why: 'The aura: the special feeling of the real, original artwork. It is here, it is now, and there is only one.',
  notes: ['Answer: C, the aura. The special feeling of the real, original artwork.']
},
{
  type: 'quiz', n: 6, answer: 3,
  q: 'What do the “end of art” theories of Hegel, Belting and Danto have in common?',
  options: [
    'They argued that industrialisation would make creative expression impossible for humans.',
    'They claimed that art ended because artists reached the perfection of natural beauty.',
    'They all predicted that photography would eventually replace the need for painting.',
    'They refer to the exhaustion of a specific narrative or type of art, rather than art literally ceasing.'
  ],
  why: 'None of them says that art stops. They say that one story, or one kind of art, is finished.',
  notes: [
    'Answer: D. Art does not stop. One story, or one type of art, comes to an end.',
    'You already asked this after the Danto slide, so most of the room should have it.',
    'Terms to have on the board by now: Modernism · form · critic · aura · movement · abstract · collage · manifesto · intuition · postmodernism'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['modernism', 'form', 'critic', 'aura', 'movement', 'abstract', 'collage', 'manifesto', 'intuition', 'postmodernism'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
