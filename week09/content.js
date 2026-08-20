/* ------------------------------------------------------------------
   Week 9 — Leaving the Museum
   Art enters the world

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan.

   Rivers and Tides is embedded from the YouTube source printed on her
   own slide. Her .pptx embeds the whole 291 MB film, which is far over
   Cloudflare's 25 MB per-file limit — see the README.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- Land Art --- */
  landart: {
    en: 'Land Art', zh: '地景藝術',
    def: 'Also called Earthworks. From the late 1960s in the United States: art built directly in and out of the landscape, using earth, rock and water.',
    zhDef: '又稱大地藝術。1960 年代末始於美國：直接於地景中、並以土石與水建造的藝術。'
  },
  entropy: {
    en: 'entropy', zh: '熵',
    def: 'Smithson borrowed the word from physics. It means the slow, one-way change and decay that time forces on everything — and he built it into the work on purpose.',
    zhDef: '史密森自物理學借來的詞，指時間加諸萬物、不可逆的緩慢變化與衰敗。他刻意將之納入作品之中。'
  },
  site: {
    en: 'Site', zh: '場域',
    def: 'Smithson’s term for the real outdoor place. You cannot read it from a distance — you have to go there.',
    zhDef: '史密森的用語，指真實的戶外地點。它無法遠觀，必須親身前往。'
  },
  nonsite: {
    en: 'Nonsite', zh: '非場域',
    def: 'Smithson’s term for the indoor version — maps, photographs, boxes of rock — that stands in the gallery for a place that is not there.',
    zhDef: '史密森的用語，指室內的替代物：地圖、照片、裝著石塊的容器，在展場中代表一個並不在場的地點。'
  },
  ephemeral: {
    en: 'ephemeral art', zh: '短暫性藝術',
    def: 'Work deliberately left to change or disappear through weather and time, instead of being preserved.',
    zhDef: '刻意任其隨天候與時間改變或消失、而不加以保存的作品。'
  },
  sitespecific: {
    en: 'site-specific', zh: '場域特定',
    def: 'Made for one particular place, and meaningless anywhere else. Week 3, and now at the scale of a desert.',
    zhDef: '為特定地點而作，離開該地便失去意義。第三週學過，如今擴及沙漠的尺度。'
  },

  /* --- Arte Povera --- */
  artepovera: {
    en: 'Arte Povera', zh: '貧窮藝術',
    def: '“Poor Art”. Named by the critic Germano Celant in 1967, for Italian artists using humble, everyday or living materials.',
    zhDef: '「貧窮的藝術」。1967 年由評論家傑爾曼諾・切蘭特命名，指使用簡陋、日常或活體材料的義大利藝術家。'
  },
  poormaterials: {
    en: 'poor materials', zh: '貧窮材料',
    def: 'Rags, coal, soil, twigs, rope — even fire and live animals. “Poor” does not mean cheap. It means stripped of the old meanings.',
    zhDef: '破布、煤炭、泥土、樹枝、繩索，甚至火與活體動物。「貧窮」並非廉價，而是剝除舊有意義。'
  },
  fibonacci: {
    en: 'Fibonacci sequence', zh: '費波那契數列',
    def: '1, 1, 2, 3, 5, 8, 13… Each number is the sum of the two before it. It is the pattern by which many living things grow.',
    zhDef: '1、1、2、3、5、8、13……每個數是前兩數之和，也是許多生物的生長模式。'
  },
  igloo: {
    en: 'igloo', zh: '圓頂屋',
    def: 'Mario Merz’s recurring form: a dome shelter in glass, stone, wax and neon — humankind’s most basic house, and a nomad’s temporary one.',
    zhDef: '梅茲反覆使用的形式：以玻璃、石材、蠟與霓虹構成的圓頂棚屋，既是人類最原始的居所，也是游牧者的臨時住處。'
  },

  /* --- carried forward --- */
  processart: {
    en: 'Process Art', zh: '過程藝術',
    def: 'Week 8. The making is the work, and material, gravity and time decide the shape.',
    zhDef: '第八週學過。製作過程即作品，材料、重力與時間決定其形狀。'
  },
  institutional: {
    en: 'institutional critique', zh: '機構批判',
    def: 'Art that turns its questions onto the museum, the gallery or the market itself. Weeks 7 and 8.',
    zhDef: '將提問轉向美術館、畫廊或市場本身的藝術。第七、八週學過。'
  }
};

const SECTIONS = [
  { title: '1 · The Question',      zh: '本週提問',     start: 0 },
  { title: '2 · Land Art',          zh: '地景藝術',     start: 4 },
  { title: '3 · Smithson',          zh: '史密森',       start: 6 },
  { title: '4 · Christo to Long',   zh: '克里斯多到隆恩', start: 11 },
  { title: '5 · Rivers and Tides',  zh: '河流與潮汐',   start: 24 },
  { title: '6 · Arte Povera',       zh: '貧窮藝術',     start: 26 },
  { title: '7 · The Merz rooms',    zh: '梅茲的空間',   start: 32 },
  { title: '8 · Wrap-Up & Quiz',    zh: '總結與測驗',   start: 42 }
];

const SLIDES = [

/* ===== PART 1 — THE QUESTION ===== */
{
  type: 'title',
  title: 'Leaving the Museum',
  sub: 'Art enters the world.',
  meta: 'Week 9',
  notes: [
    'Five minutes for review and framing.',
    'The guiding question, and write it on the board: if a museum is what makes something count as art, what happens when the artist simply leaves?',
    'HOOK, from her lesson plan: put Spiral Jetty beside a Duchamp readymade in a glass case. Both refuse the museum — one by walking into it, one by walking out.'
  ]
},
{
  type: 'bullets',
  title: 'Where we were, and where we go now',
  zh: '上週與本週',
  items: [
    { head: 'Last week: {{processart}} — the making became the work', body: 'Morris hung felt on a nail and let gravity decide. Haacke sealed a box and let the weather decide.' },
    { head: 'But it all still happened indoors', body: 'In a gallery, in a museum, inside the white walls.' },
    { head: 'This week the artists walk out', body: 'Into a salt lake, a desert, a Manhattan landfill.' },
    { head: 'And some of them stay in — and change the walls instead', body: 'That is {{artepovera}}, in the second half.' }
  ],
  notes: [
    'Set up the shape: two opposite escapes from the same building.',
    'Land Art leaves. Arte Povera stays and rewrites what the building is allowed to hold.',
    'Both are asking the same question, which is the next slide.'
  ]
},
{
  type: 'section',
  title: 'Who decides what counts as art?',
  sub: 'Is it museums and galleries?',
  ask: 'And if it is — what happens when the artist just leaves the building?',
  notes: [
    'This is the question of the whole session. It comes back three times, word for word.',
    'They have circled it since Week 5 — Danto, the Artworld, institutional theory. Say so.',
    'Take a few answers and do not resolve it.'
  ]
},
{
  type: 'section',
  title: 'Two opposite answers.',
  sub: 'Leave the building. Or stay, and change what it can hold.',
  notes: ['One beat, then Land Art.']
},

/* ===== PART 2 — LAND ART ===== */
{
  type: 'section',
  title: '{{landart}}',
  sub: 'Using nature as a canvas.',
  notes: ['Twenty minutes for the whole Land Art section.']
},
{
  type: 'bullets',
  title: 'What {{landart}} is',
  zh: '地景藝術是什麼',
  items: [
    { head: 'It began in the late 1960s in the United States', body: 'The 1968 <i>Earthworks</i> show at the Dwan Gallery, New York, marks the start.' },
    { head: 'Built directly with natural materials', body: 'Earth, rock and water — in real, often remote landscapes. Each work is tied to its {{site}}.' },
    { head: 'Massive, immovable, and often left to decay', body: 'So they cannot be bought or sold. That is a direct challenge to the market and to the museum’s authority.' },
    { head: 'It came out of the 1960s ecological movement', body: 'And a wider “return to the land” feeling.' },
    { head: 'And here is the catch', body: 'Almost nobody has seen these works. Most of us know them only through photographs and maps.' }
  ],
  notes: [
    'The last point is the first discussion question at the end of class, so plant it firmly now.',
    'These are works you must travel for. Spiral Jetty is a two-hour drive from Salt Lake City on a dirt road.',
    'And that inaccessibility is deliberate — it is what makes them unsellable.'
  ]
},

/* ===== PART 3 — SMITHSON ===== */
{
  type: 'bullets',
  title: 'Robert Smithson (1938–1973)',
  zh: '羅伯・史密森',
  items: [
    { head: 'A founding figure, and the movement’s main theorist' },
    { head: 'His core idea: {{entropy}}', body: 'A word from physics. The work was designed to keep changing under natural forces — never to be preserved.' },
    { head: 'That idea grew into his {{site}} / {{nonsite}} theory', body: 'Which is two slides away.' },
    { head: 'He died in 1973, aged 35', body: 'In a plane crash, while surveying the site of a future work from the air.' }
  ],
  notes: [
    'Entropy is the key term of the section. Say it plainly: everything runs down, and he wanted that in the work rather than fought against it.',
    'Compare with every conservator in every museum, whose whole job is to stop things changing. Smithson builds decay in on purpose.',
    'The circumstances of his death are worth one sentence — he was in the air looking at land, for a work called Amarillo Ramp.'
  ]
},
{
  type: 'artwork',
  src: 'img/smithson-spiral-jetty.jpg',
  title: 'Spiral Jetty',
  caption: 'Robert Smithson, <i>Spiral Jetty</i>, 1970 — Great Salt Lake, Utah. Mud, basalt rock, salt crystals and water, gathered on site',
  ask: 'Every material here came from within a few metres of where it sits. Why does that matter?',
  points: [
    'A spiral causeway of stacked rock, running counter-clockwise into the lake.',
    'About 1,500 feet long — roughly 457 metres.',
    'Nothing was brought in. Mud, basalt and salt, all local.',
    'So the work is not <i>placed</i> in the landscape. It is made <i>of</i> it.'
  ],
  notes: [
    'ASK and let them reach it: there is no separation between the artwork and the site.',
    'He hired a contractor with dump trucks and a tractor. Six days of work, 6,000 tons of rock.',
    'The lake is pink-red here because of salt-loving bacteria — he chose the spot for the colour.',
    'Zoom in on the salt crust growing on the rocks. That is entropy, visible.'
  ]
},
{
  type: 'artwork',
  src: 'img/smithson-spiral-jetty-aerial.jpg',
  title: 'And then it disappeared',
  caption: '<i>Spiral Jetty</i> from the air',
  ask: 'It was underwater for nearly thirty years. Was it still an artwork while nobody could see it?',
  points: [
    'The lake rose soon after he finished it, and the spiral went under.',
    'It stayed submerged for almost thirty years.',
    'It only came back in 2002, during a drought — encrusted in white salt.',
    'It has gone under and come back several times since. That is {{entropy}} doing exactly what he wanted.'
  ],
  notes: [
    'ASK and let them argue. There is no settled answer and the question is genuinely good.',
    'He knew the lake level moved. He accepted that the work would vanish.',
    'This is the strongest possible case for building decay into a work rather than resisting it.',
    'Its condition today is not restoration — the salt is new, and the shape has shifted.'
  ]
},
{
  type: 'artwork',
  src: 'img/smithson-nonsite-pine-barrens.jpg',
  title: 'A Nonsite, Pine Barrens',
  caption: 'Robert Smithson, <i>A Nonsite (Pine Barrens, New Jersey)</i>, 1968 — metal bins of sand, with a map',
  smallSource: true,
  ask: 'Bins of sand and a map, in a gallery. What is this <i>for</i>?',
  points: [
    'He drove to the Pine Barrens in New Jersey and collected sand.',
    'Then he put it in metal bins in a gallery, with a map of where it came from.',
    'It is not a picture of the place. It is a piece of it, plus directions.',
    'He called this a {{nonsite}}: the gallery version of a place that is not here.'
  ],
  notes: [
    'ASK before explaining. Some students will say “evidence” — that is a very good answer.',
    'The bins echo Minimalist boxes from Week 7. He knew exactly what he was quoting.',
    'The map is the key part. It tells you the real work is somewhere else, and you are not there.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'twocol',
  title: '{{site}} and {{nonsite}}',
  left: {
    head: '{{site}}',
    zh: '場域',
    lead: 'The real outdoor place.',
    items: [
      'A <b>place</b>. You must go there in person.',
      'It has real presence.',
      'It cannot be moved, sold, or lent.',
      'Nobody can read it from a distance.'
    ]
  },
  right: {
    head: '{{nonsite}}',
    zh: '非場域',
    lead: 'The indoor version — maps, rock, photographs.',
    items: [
      'A <b>symbol</b>. Anybody can read a map.',
      'In the gallery, it marks the place’s <i>absence</i>.',
      'It can be moved, sold and lent.',
      'And it tells you that you are not where the work is.'
    ]
  },
  notes: [
    'From 1968 he turned New Jersey field trips into the Site/Nonsite series.',
    'The distinction to make land: a map is a shared symbol anyone can read. A place has to be visited.',
    'Why it matters: this challenges the idea that art has to enter a museum to be seen at all.',
    'This is Quiz Question 1, and the first discussion question. Now that Spiral Jetty is known to almost everyone only through photographs — has it become its own Nonsite?'
  ]
},

/* ===== PART 4 — CHRISTO TO LONG ===== */
{
  type: 'bullets',
  title: 'Christo (1935–2020) and Jeanne-Claude (1935–2009)',
  zh: '克里斯多與珍克勞德',
  items: [
    { head: 'They met in Paris in 1958, and worked together for life', body: 'Born on the same day, in Bulgaria and Morocco.' },
    { head: 'The method: wrapping', body: 'Landmarks, bridges and coastlines, in enormous amounts of fabric.' },
    { head: 'But the wrapping is not the point', body: 'The point is changing how people see a place they had stopped noticing.' },
    { head: 'Self-funded, always', body: 'They sold drawings to pay for the work, and never took a grant or a sponsor. That bought total freedom.' },
    { head: 'And every work was temporary', body: 'Taken down after a few weeks. Nothing was left behind.' }
  ],
  notes: [
    'The funding fact is important and students find it surprising: no sponsors, no grants, no public money. They sold preparatory drawings.',
    'That is why nobody could tell them what to do — and it is also the third discussion question, about how hard a work is to make.',
    'Jeanne-Claude was uncredited for decades. From 1994 the earlier works were retrospectively re-attributed to both of them.'
  ]
},
{
  type: 'artwork',
  src: 'img/christo-surrounded-islands.jpg',
  title: 'Surrounded Islands',
  caption: 'Christo and Jeanne-Claude, <i>Surrounded Islands</i>, 1983 — Biscayne Bay, Miami. 603,850 square metres of pink fabric',
  ask: 'Eleven islands, ringed in pink. What does it make you look at?',
  points: [
    'Eleven islands in Biscayne Bay, each surrounded by floating pink fabric.',
    'It took three years of permits, hearings and lawsuits.',
    'The crew removed forty tons of rubbish from the islands first.',
    'It stayed up for two weeks, then vanished completely.'
  ],
  notes: [
    'ASK — good answers: the shape of the water, the edge between land and sea, the islands themselves, which nobody had looked at before.',
    'The three years of bureaucracy is not a footnote. Getting permission WAS most of the work.',
    'That is the third discussion question: does the difficulty change how we judge it?'
  ]
},
{
  type: 'compare',
  title: 'Wrapped Reichstag',
  ask: 'The German parliament building, wrapped. Why would that be controversial?',
  left:  { src: 'img/christo-reichstag-1.jpg', label: 'Christo and Jeanne-Claude, <i>Wrapped Reichstag</i>, Berlin, 1995', tag: 'Wrapped' },
  right: { src: 'img/christo-reichstag-2.jpg', label: 'The same building, from the square', tag: 'Wrapped' },
  reveal: [
    { side: 'left',  text: 'It took twenty-four years and six German governments to get permission.' },
    { side: 'right', text: 'The parliament debated it and voted — 292 to 223 in favour.' },
    { side: 'left',  text: 'Five million people came in two weeks. Then it was unwrapped, and the building was renovated for a reunified Germany.' }
  ],
  notes: [
    'ASK first. The Reichstag is the most politically loaded building in Germany — burned in 1933, wrecked in 1945, then on the border of a divided city.',
    'Twenty-four years of asking. A national parliament held a formal debate about whether to let an artist cover it in cloth.',
    'And the timing: 1995, five years after reunification, just before it became the seat of parliament again. Wrapping it was a way of pausing before the new chapter.'
  ]
},
{
  type: 'artwork',
  src: 'img/christo-wrapped-coast.jpg',
  title: 'Wrapped Coast',
  caption: 'Christo and Jeanne-Claude, <i>Wrapped Coast — One Million Square Feet</i>, Little Bay, Sydney, 1969',
  points: [
    'Two and a half kilometres of Australian coastline, wrapped in fabric and rope.',
    'It took 100 workers, plus students and teachers, four weeks.',
    'It stayed for ten weeks, and was then completely removed.',
    'The rocks are still there. The artwork is not.'
  ],
  notes: [
    'The scale is the point — this was the largest artwork ever made at the time.',
    'Note the labour: volunteers, students, professional climbers. Like Beuys’s 7000 Oaks, it needed many hands.',
    'Nothing survives except photographs. Same problem as Spiral Jetty, by a different route.'
  ]
},
{
  type: 'artwork',
  src: 'img/heizer-double-negative.jpg',
  title: 'Double Negative',
  caption: 'Michael Heizer (b. 1944), <i>Double Negative</i>, 1969–70 — Mormon Mesa, Nevada. Two cuts, 457 metres end to end',
  ask: 'Everything so far has been <i>added</i> to a landscape. What did Heizer do instead?',
  points: [
    'He removed 244,000 tonnes of rock from a mesa in Nevada.',
    'Two enormous cuts, facing each other across a natural gap.',
    'The artwork is the empty space — the part that is no longer there.',
    'A “double negative”: two absences, making one thing.'
  ],
  notes: [
    'ASK and let them get to it: he subtracted. Christo adds fabric; Heizer takes away a hillside.',
    'This is the additive/subtractive contrast the lesson plan asks for. Make it explicit.',
    'He used dynamite and bulldozers. The environmental argument about Land Art starts here and is worth thirty seconds — these works damage the land they are about.',
    'It is slowly eroding, and he has said he is content to let it collapse.'
  ]
},
{
  type: 'artwork',
  src: 'img/demaria-lightning-field.jpg',
  title: 'The Lightning Field',
  caption: 'Walter De Maria (1935–2013), <i>The Lightning Field</i>, 1977 — western New Mexico. 400 stainless steel poles over one mile by one kilometre',
  ask: 'You cannot visit for an hour. You have to stay the night. Why would an artist require that?',
  points: [
    'Four hundred polished steel poles, in a grid, in the high desert.',
    'You can only see it by booking a stay in a cabin on the site — six people at a time.',
    'You arrive in the afternoon and leave the next morning.',
    'Most visitors never see lightning at all. The work is the waiting, and the light changing.'
  ],
  notes: [
    'ASK and take answers. The intended one: time is a material here, and you cannot experience it in a hurry.',
    'The photograph everyone knows — poles struck by lightning — is unrepresentative. Lightning is rare.',
    'Photography is not permitted by visitors. The only images are the official ones. That is a deliberate control of the Nonsite.',
    'Compare with a museum, where you walk past a painting in nine seconds.'
  ]
},
{
  type: 'bullets',
  title: 'And the artists usually left out',
  zh: '常被略過的藝術家',
  items: [
    { head: 'Land Art’s usual story is almost entirely male', body: 'Smithson, Heizer, De Maria, Christo, Long.' },
    { head: 'Nancy Holt (1938–2014), <i>Sun Tunnels</i>, 1976', body: 'Four huge concrete pipes in the Utah desert, aligned with the sunrise and sunset at the solstices, and pierced with holes that make constellations inside.' },
    { head: 'So the work is a machine for watching the sky', body: 'It turns Land Art toward astronomy and time.' },
    { head: 'And Agnes Denes turns it toward ecology and money', body: 'Which is the next slide.' }
  ],
  notes: [
    'NOTE: Nancy Holt is a learning objective in the lesson plan but her deck has no Sun Tunnels image, so she is described rather than shown. Worth finding a picture before class.',
    'Holt was married to Smithson, and it is worth saying that she is usually introduced that way and should not be — Sun Tunnels is a major work in its own right.',
    'She also filmed Spiral Jetty being built. So much of what we know of his work exists because of her.'
  ]
},
{
  type: 'artwork',
  src: 'img/denes-wheatfield.jpg',
  title: 'Wheatfield — A Confrontation',
  caption: 'Agnes Denes (b. 1931), <i>Wheatfield — A Confrontation</i>, 1982 — two acres of wheat on the Battery Park landfill, Manhattan',
  ask: 'A wheatfield two blocks from Wall Street. What is being confronted?',
  points: [
    'Two acres of wheat, planted on a rubble landfill in lower Manhattan.',
    'The land was worth 4.5 billion dollars. The harvest was 450 kilograms of wheat.',
    'The Twin Towers and the Statue of Liberty are in the background.',
    'It grew for four months, was harvested, and the site became luxury flats.'
  ],
  notes: [
    'ASK — the answers are all good: hunger, waste, land value, what cities are for, what we choose to grow.',
    'She and volunteers cleared rubbish, laid 200 truckloads of soil, and dug the furrows by hand.',
    'The harvested grain travelled to twenty-eight cities in an exhibition about world hunger, and the seeds were given away to be planted.',
    'This is the third discussion question again: the work is inseparable from the bureaucracy and cost of making it happen.'
  ]
},
{
  type: 'artwork',
  src: 'img/long-line-made-by-walking.jpg',
  title: 'A Line Made by Walking',
  caption: 'Richard Long (b. 1945), <i>A Line Made by Walking</i>, 1967 — photograph of a line worn into grass',
  ask: 'He walked up and down a field until the grass flattened. Where is the artwork?',
  points: [
    'A line in the grass, made by walking back and forth in one place.',
    'He was twenty-two. He took one photograph.',
    'Within days the grass stood back up and the line was gone.',
    'So all that exists is the photograph — and the fact that the walk happened.'
  ],
  notes: [
    'ASK and let it run. The walk? The line? The photograph? All three are defensible, which is the point.',
    'This is {{ephemeral}} at its most extreme, and it starts the whole practice.',
    'Compare with Spiral Jetty: 6,000 tons of rock versus flattened grass. Both survive only as photographs.',
    'This is Quiz Question 2.'
  ]
},
{
  type: 'quote',
  title: 'An artist who makes walks',
  zh: '一位以行走為創作的藝術家',
  lead: 'Richard Long, 1980',
  quote: '“I am an artist who makes walks. A walk defines the form of the land in space and time beyond the scale of sculpture or the fixed image.”',
  cite: 'Richard Long, <i>five, six, pick up sticks, seven, eight, lay them straight</i>, London: Anthony d’Offay Gallery, 1980',
  plain: [
    'Some of his walks are formal — straight, circular, rhythmic. Almost a ritual.',
    'He has climbed <i>around</i> mountains instead of to the top.',
    'He has made walks about slowness, and walks about stones and water.',
    'And walks within one place, rather than a journey — “walking without travelling”.'
  ],
  notes: [
    'Read the plain version. “Walking without travelling” is the line to leave with them.',
    'The walk is the sculpture. What comes back is a map, a photograph or a text — all Nonsites, in Smithson’s sense.'
  ]
},
{
  type: 'compare',
  title: 'What comes back from a walk',
  left:  { src: 'img/long-stone-line.jpg', label: 'A line of stones, laid on a walk', tag: 'The stones' },
  right: { src: 'img/long-walk-record.jpg', label: 'A record of a walk, shown as text and map', tag: 'The record' },
  reveal: [
    { side: 'left',  text: 'Sometimes he arranges stones he finds and leaves them there.' },
    { side: 'right', text: 'Sometimes what enters the gallery is only words and a map.' },
    { side: 'right', text: 'Either way, you are looking at a {{nonsite}}. The work happened somewhere you are not.' }
  ],
  notes: [
    'This closes the Land Art half by returning to Smithson’s distinction. Make that explicit.',
    'Long’s gallery pieces are often stones laid on the floor — a real fragment of a place, exactly like the Pine Barrens bins.'
  ]
},
{
  type: 'twocol',
  title: 'Escaping the white box',
  left: {
    head: 'The institution',
    zh: '體制',
    lead: 'What the building does.',
    items: [
      '<b>Museum</b>: classifies, collects, displays — and so <i>authorises</i> art.',
      '<b>Gallery</b>: exhibits, sells, promotes — and so <i>commodifies</i> it.',
      'Both decide what counts — which is why {{institutional}} exists.'
    ]
  },
  right: {
    head: 'The {{site}}',
    zh: '場域',
    lead: 'What Land Art does about it.',
    items: [
      'Massive scale and {{sitespecific}} — it cannot be moved.',
      'It cannot be enclosed, bought, or hung.',
      'So it escapes the institution’s walls.',
      'But: photographs, maps and texts come back in as substitutes.'
    ]
  },
  notes: [
    'The paradox on the right is the honest ending: the escape is never complete.',
    'Smithson’s Nonsites, Long’s walk records, De Maria’s official photographs — all of them re-enter the gallery as surrogates.',
    'So did Land Art escape, or did it just send postcards? That is the first discussion question.'
  ]
},
{
  type: 'section',
  title: 'Who decides what counts as art?',
  sub: '{{landart}} hands part of that authority back to the site itself.',
  notes: [
    'The question, for the second time. Say it, then move to the film.',
    'Do not resolve it — Arte Povera gives the opposite answer after the break.'
  ]
},

/* ===== PART 5 — RIVERS AND TIDES ===== */
{
  type: 'section',
  title: 'Watch for:',
  sub: 'He knows the work will be destroyed within hours. So why does he make it so carefully?',
  notes: [
    'Prompt slide. Put it up, wait ten seconds, then play.',
    'Twenty-five minutes for the film and the discussion after it.'
  ]
},
{
  type: 'video',
  title: 'Rivers and Tides',
  caption: '<i>Rivers and Tides: Andy Goldsworthy Working with Time</i>, directed by Thomas Riedelsheimer, 2001',
  yt: 'FHSDv9c4Lu0',
  watchFor: 'He knows the work will be destroyed within hours. So why does he make it so carefully?',
  points: [
    'Andy Goldsworthy (b. 1956) builds from leaves, ice, stone and driftwood.',
    'He works on site, with his hands, and with whatever is there.',
    'The tide comes in, or the sun rises, and the work is gone.',
    'The film exists because otherwise there would be nothing at all.'
  ],
  notes: [
    'Her lesson plan gives twenty-five minutes to this segment, including about three minutes of discussion afterwards. Choose your excerpt in advance.',
    'The best sequences: the icicle built at dawn, and the driftwood spiral taken by the tide.',
    'This film needs internet — it is embedded from the YouTube link on her own slide. Her original .pptx has the whole film embedded, so keep that as the offline fallback. See the README.',
    'DISCUSSION after the film, three minutes: how does Goldsworthy extend Richard Long’s walking practice into a living studio practice today?',
    'The answer worth reaching: Long records a walk; Goldsworthy builds something and then films its destruction. The camera has moved from evidence to collaborator.'
  ]
},
{
  type: 'section',
  title: '{{landart}} fled the museum’s walls.',
  sub: '{{artepovera}} stayed behind — and rewrote what those walls were allowed to hold.',
  notes: [
    'The hinge into the second half. Twenty minutes for Arte Povera.',
    'Say the sentence slowly. It is the cleanest summary of the whole session.'
  ]
},

/* ===== PART 6 — ARTE POVERA ===== */
{
  type: 'bullets',
  title: '{{artepovera}}',
  zh: '貧窮藝術',
  items: [
    { head: '1953–63: Italy rebuilds after the war', body: 'The “economic miracle”. Factories, money, new things. Artists start to question all of it.' },
    { head: 'After 1963: the money stops', body: 'A recession. Young artists turn to raw, cheap, “poor” materials.' },
    { head: '1967 — Germano Celant names it', body: 'In his essay <i>Arte Povera: Notes for a Guerrilla War</i>.' },
    { head: '“Poor” does not mean cheap', body: 'It means the material has lost its old meaning, and been given a new one.' },
    { head: 'The materials', body: 'Coal, cloth, soil, twigs, rope — and real animals, fire and ice.' }
  ],
  notes: [
    'Note the title of Celant’s essay: notes for a guerrilla war. He meant it politically.',
    'The economic story matters: this is a reaction to a boom that had just ended, in a country full of new factories.',
    'This is Quiz Question 3: a rejection of industrial consumer culture and the commodification of art.'
  ]
},
{
  type: 'artwork',
  src: 'img/pistoletto-venus-of-the-rags.jpg',
  title: 'Venus of the Rags',
  caption: 'Michelangelo Pistoletto (b. 1933), <i>Venus of the Rags</i>, 1967 — a plaster copy of a classical Venus, and a mound of discarded clothing',
  ask: 'A classical goddess, facing a pile of old clothes. Which one is she looking at?',
  points: [
    'On one side: a cheap plaster copy of an antique Venus. Ideal beauty, mass-produced.',
    'On the other: a heap of real rags, in every colour, that people actually wore.',
    'She has her back to us, and she is facing the pile.',
    'Two thousand years of beauty, standing in front of what the twentieth century throws away.'
  ],
  notes: [
    'ASK — she faces the rags, which is the joke and the argument.',
    'The Venus is not marble. It is a garden-centre copy, which makes the contrast sharper.',
    'This is Quiz Question 4.',
    'The rags are replaced for each installation, so the work is never the same twice.'
  ]
},
{
  type: 'artwork',
  src: 'img/kounellis-portrait.jpg',
  title: 'Jannis Kounellis (1936–2017)',
  caption: 'Greek-born, and working in Italy from 1956',
  smallSource: true,
  points: [
    'He used the most extreme materials in the movement.',
    'Coal, burlap, steel, wool, fire — and living animals.',
    'Coal comes back again and again: industrial energy, but also ancient plants crushed by geological time.',
    'So it carries labour, mining and the whole industrial economy in one black heap.'
  ],
  notes: [
    'The coal point is worth dwelling on. It is a fuel and a fossil at once — energy and deep time in the same material.',
    'That doubleness is very Arte Povera: an ordinary substance carrying more history than a painting.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'compare',
  title: 'Senza Titolo',
  ask: 'Hard industry on one side, soft living matter on the other. Why put them together?',
  left:  { src: 'img/kounellis-senza-titolo-1.jpg', label: 'Jannis Kounellis, from the <i>Senza Titolo</i> series, from 1967', tag: 'Untitled' },
  right: { src: 'img/kounellis-senza-titolo-2.jpg', label: 'Another work from the same series', tag: 'Untitled' },
  reveal: [
    { side: 'left',  text: 'Steel plate, coal, burlap — the materials of a factory and a dock.' },
    { side: 'right', text: 'And against them: wool, plants, sometimes fire.' },
    { side: 'left',  text: 'The tension between the two is the work. That contrast is typical of {{artepovera}}.' }
  ],
  notes: [
    'ASK first. The answer is dialectical tension — two opposed things held in one work, not resolved.',
    '“Senza titolo” simply means untitled. He used it constantly, so nothing would be explained by a name.'
  ]
},
{
  type: 'artwork',
  src: 'img/kounellis-12-horses.jpg',
  title: 'Untitled (12 Horses)',
  caption: 'Jannis Kounellis, <i>Untitled (12 Horses)</i>, 1969 — Galleria L’Attico, Rome',
  ask: 'Twelve living horses, tied up in a gallery. Is this sculpture, theatre, or just twelve horses?',
  points: [
    'Twelve horses, tethered around the walls of a Rome gallery, for three days.',
    'Nothing else. No object, no label, no explanation.',
    'They moved, made noise, smelled, and behaved like animals.',
    'It blurs the line between sculpture, theatre and ordinary life.'
  ],
  notes: [
    'ASK and let the room argue. All three answers are defensible, and that is Quiz Question 5.',
    'The gallery was a converted underground car park, which is how the horses got in.',
    'Compare with Beuys and the coyote in Week 6 — a living animal as material, two years earlier here.',
    'A student may raise the ethics of using live animals. That is a fair question; let it be asked, and note it was restaged in 2015 with veterinary oversight.'
  ]
},

/* ===== PART 7 — THE MERZ ROOMS ===== */
{
  type: 'artwork',
  src: 'img/merz-giaps-igloo.jpg',
  title: 'Giap’s Igloo',
  caption: 'Mario Merz (1925–2003), <i>Giap’s Igloo</i>, 1968 — metal frame, plastic bags of clay, neon',
  ask: 'A dome made of mud in plastic bags, with a neon sentence around it. What kind of building is this?',
  points: [
    'A hemisphere of metal mesh, hung with bags of wet clay.',
    'Around it, in neon: a sentence by the Vietnamese general Giáp.',
    '“If the enemy masses his forces he loses ground; if he scatters he loses strength.”',
    'The {{igloo}} became his signature form — the most basic shelter humans build.'
  ],
  notes: [
    'ASK and take answers before you explain: a house, a shelter, a tent, a hut.',
    'The Giáp quotation is from the Vietnam War, which was at its height in 1968. This is a political work.',
    'Merz had been imprisoned as an anti-fascist partisan in the 1940s, and started drawing in prison.',
    'The igloo is a nomad’s house: temporary, portable, and not owned by anyone.'
  ]
},
{
  type: 'compare',
  title: 'The igloos',
  left:  { src: 'img/merz-igloo-2.jpg', label: 'Mario Merz, igloo — glass, stone and metal', tag: 'Igloo' },
  right: { src: 'img/merz-igloo-3.jpg', label: 'Another igloo, installed in a gallery', tag: 'Igloo' },
  reveal: [
    { side: 'left',  text: 'Glass, stone, wax, twigs, neon — whatever was to hand, held on a metal frame.' },
    { side: 'right', text: 'Always a dome, always temporary, always assembled where it stands.' },
    { side: 'right', text: 'Industrial neon against organic stone and wax — the classic {{artepovera}} tension.' }
  ],
  notes: [
    'He made igloos for thirty-five years. The form never became fixed — the materials change every time.',
    'The theme is nomadism: a shelter you build, use, and abandon.',
    'It is also the opposite of a museum, which is a permanent building for permanent things.'
  ]
},
{
  type: 'artwork',
  src: 'img/merz-fibonacci-neon.jpg',
  title: 'Fibonacci in neon',
  caption: 'Mario Merz — numbers from the {{fibonacci}} in neon light',
  ask: '1, 1, 2, 3, 5, 8, 13, 21… where do these numbers come from?',
  points: [
    'Each number is the sum of the two before it.',
    'It is the pattern by which shells spiral, leaves arrange and rabbits multiply.',
    'He wrote it in neon — an industrial material — and ran it up walls and around buildings.',
    'Natural growth, spelled out in a shop sign.'
  ],
  notes: [
    'ASK and let a student explain the sequence. Someone always can.',
    'The point of the contrast: neon is the most commercial material there is, carrying the mathematics of living growth.',
    'He installed these up spiral staircases and on factory chimneys, so the numbers grow as the building rises.'
  ]
},
{
  type: 'bullets',
  title: 'Mario Merz',
  zh: '馬里歐・梅茲',
  items: [
    { head: 'Signature form: the {{igloo}}', body: 'Dome shelters in glass, stone, wax and neon — the most primal house, and the nomad’s temporary one.' },
    { head: 'Signature motif: {{fibonacci}} in neon', body: 'Nature’s growth pattern, written in an industrial light.' },
    { head: 'The contrast is deliberate', body: 'Neon against stone, twigs, wax and fruit — natural growth set against industrial permanence.' },
    { head: 'His themes', body: 'Nomadism. Shelter. Growth against permanence.' }
  ],
  notes: [
    'Summary slide for Mario Merz — one minute, then his wife.',
    'The link forward: Marisa Merz turns the same interest in shelter and the domestic inward, into her own house.'
  ]
},
{
  type: 'compare',
  title: 'Sculture viventi',
  ask: 'She hung these in her own flat, not in a gallery. Does that change what they are?',
  left:  { src: 'img/marisa-sculture-viventi-1.jpg', label: 'Marisa Merz (1926–2019), <i>Sculture viventi</i> (Living Sculptures), 1966', tag: 'At home' },
  right: { src: 'img/marisa-sculture-viventi-2.jpg', label: 'The same aluminium forms, in her Turin apartment', tag: 'At home' },
  reveal: [
    { side: 'left',  text: 'Coiled aluminium sheet, spiralling down from the ceiling of her own home.' },
    { side: 'right', text: 'She made them there, and showed them there, and lived among them.' },
    { side: 'left',  text: 'So the private flat became the exhibition space. There was no gallery involved at all.' }
  ],
  notes: [
    'ASK and let them think about it. This is a third escape from the museum, after Land Art and Arte Povera.',
    'She was the only woman in Celant’s original Arte Povera group. Say that plainly.',
    'And she worked mostly at home — which was read at the time as a limitation, and is now read as the argument.'
  ]
},
{
  type: 'compare',
  title: 'Knitted, woven, unfired',
  left:  { src: 'img/marisa-untitled-1966.jpg', label: 'Marisa Merz, <i>Untitled</i>, 1966', tag: '1966' },
  right: { src: 'img/marisa-untitled-1968.jpg', label: 'Marisa Merz, <i>Untitled</i>, 1968', tag: '1968' },
  reveal: [
    { side: 'left',  text: 'Copper wire, knitted with needles — a craft learned at home, used on an industrial material.' },
    { side: 'right', text: 'Unfired clay, wax, nylon — soft things that were never meant to last.' },
    { side: 'right', text: 'All of it evokes domestic work, childhood, and the care of a body.' }
  ],
  notes: [
    'Knitting copper wire is the detail that lands: a domestic technique applied to a hard industrial material.',
    'Unfired clay means it can crumble. Nothing here is trying to survive.',
    'Compare with Judd’s factory-made boxes in Week 7 — the exact opposite of industrial fabrication.'
  ]
},
{
  type: 'compare',
  title: 'The work she kept making',
  left:  { src: 'img/marisa-work-3.jpg', label: 'Marisa Merz — head in unfired clay and wax', tag: 'Heads' },
  right: { src: 'img/marisa-work-4.jpg', label: 'Marisa Merz — installation view', tag: 'Rooms' },
  reveal: [
    { side: 'left',  text: 'Small faces in unfired clay and wax, made over decades, never quite finished.' },
    { side: 'right', text: 'And rooms where drawings, sculptures and objects are arranged together, like a home.' },
    { side: 'right', text: 'She rarely titled or dated anything, and she rarely said what it meant.' }
  ],
  notes: [
    'She won the Golden Lion for lifetime achievement at Venice in 2013, at 87 — decades after the men in her group.',
    'The refusal to title or date is deliberate, and it makes her very hard to fit into an art-historical timeline.',
    'That difficulty is part of why she was left out for so long.'
  ]
},
{
  type: 'artwork',
  src: 'img/marisa-knitted-shoes.jpg',
  title: 'The little shoes',
  caption: 'Marisa Merz — knitted nylon and copper-wire <i>scarpette</i> (little shoes)',
  ask: 'Tiny shoes, knitted in wire, that nobody could wear. What are they for?',
  points: [
    'She knitted them in nylon thread and fine copper wire.',
    'Some were made to fit her own daughter’s feet. Most fit nobody.',
    'They recur across her whole career.',
    'Childhood, care, and the body — held in an object the size of your hand.'
  ],
  notes: [
    'ASK and let them answer freely. There is no fixed reading and she never gave one.',
    'The scale is the argument: after a week of deserts and wrapped parliaments, an artwork you could hold in one hand.',
    'Say that contrast out loud — it is the best thing in the second half.'
  ]
},
{
  type: 'bullets',
  title: 'Marisa Merz (1926–2019)',
  zh: '瑪麗莎・梅茲',
  items: [
    { head: 'The only woman in Arte Povera’s core group' },
    { head: '<i>Sculture viventi</i>, 1966', body: 'Aluminium forms hung in her own home — turning private domestic space directly into an exhibition site.' },
    { head: 'She worked mostly at home', body: 'Blurring home and studio, and with it the line between domestic labour — coded feminine and private — and art-making, coded masculine and public.' },
    { head: 'Materials: unfired clay, wax, copper wire, nylon', body: 'Often knitted or woven. Domestic craft, childhood memory, the care of a body.' },
    { head: 'Recurring motif: tiny knitted shoes' }
  ],
  notes: [
    'This is Quiz Question 6: the distinction between private domestic life and the public space of art-making.',
    'The point to make carefully: she was not excluded from the museum by force. She largely declined it, and made the house the site instead.',
    'That is a third answer to today’s question — alongside leaving the building and rewriting it.'
  ]
},
{
  type: 'compare',
  title: 'Giovanni Anselmo (1934–2023)',
  ask: 'A block of granite held up by a lettuce. What happens in a week?',
  left:  { src: 'img/anselmo-structure-that-eats.jpg', label: '<i>Untitled (Structure that Eats)</i>, 1968 — granite, copper wire, fresh lettuce', tag: 'Structure that Eats' },
  right: { src: 'img/anselmo-direzione.jpg', label: '<i>Direzione</i> (Direction), 1978 — stone and a compass', tag: 'Direzione' },
  reveal: [
    { side: 'left',  text: 'A small granite block is held against a larger one by copper wire — with a head of lettuce as the packing.' },
    { side: 'left',  text: 'The lettuce wilts. The wire slackens. The stone falls. Somebody must replace the lettuce.' },
    { side: 'right', text: 'And in <i>Direzione</i>, a compass set into stone points at magnetic north — so the work is aimed at the whole planet.' }
  ],
  notes: [
    'ASK and let them work out the consequence. The museum has to keep feeding it, which is the joke and the point.',
    'This completes the entropy thread that started with Spiral Jetty: a work that visibly decays, indoors, on a schedule.',
    'Direzione is the other half of the same idea — the gallery object pointing at a force outside the building.',
    'Both are ways of putting the real world inside the white box, rather than leaving it.'
  ]
},

/* ===== PART 8 — WRAP-UP AND QUIZ ===== */
{
  type: 'twocol',
  title: 'Two escapes, one question',
  left: {
    head: '{{landart}}',
    zh: '地景藝術',
    lead: 'Left the museum’s space.',
    items: [
      'Massive scale, {{sitespecific}}.',
      'Interested in time, process and {{entropy}}.',
      'Cannot be bought, moved or hung.',
      'But it sends photographs back in.'
    ]
  },
  right: {
    head: '{{artepovera}}',
    zh: '貧窮藝術',
    lead: 'Stayed inside the museum.',
    items: [
      'Rewrote the rules of material and value.',
      'Humble, everyday, living materials.',
      'Coal, rags, lettuce, horses.',
      'And made the building hold things it was never built for.'
    ]
  },
  notes: [
    'Ten minutes for wrap-up and preview.',
    'The summary: both refuse the museum as the sole authority over what counts as art. They just do it in opposite directions.',
    'Then say the guiding question for the third and last time, and leave it open.',
    'Preview next week and stop.'
  ]
},
{
  type: 'section',
  title: 'Who decides what counts as art?',
  sub: 'Three times today. Still no answer.',
  notes: [
    'Say it once more and stop talking.',
    'They have now met four answers across the course: the artist, the object, the institution, and the site.'
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
    'Smithson said a {{nonsite}} — a map, a photograph, a box of rock — is <i>not</i> the same as the {{site}}, because a place has to be visited. But almost everyone knows Spiral Jetty only from photographs. Has it become its own Nonsite? What is lost?',
    'Kounellis brought twelve live horses <b>into</b> the gallery. Smithson and Heizer went <b>out</b> into the landscape. Are these two strategies making the same argument about art and materials — or something fundamentally different?',
    'Denes’s <i>Wheatfield</i> and Christo and Jeanne-Claude’s projects both needed years of permits, money and public argument. Does how hard a work was to make change how we should judge it — or is its meaning independent of that?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2.',
    'Question 1 is the strongest and has been building since the first Smithson slide.',
    'Question 2 is the one that ties the two halves of today together. Use it if you only have time for one.'
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
  q: 'In Smithson’s theory, how does a {{nonsite}} relate to a {{site}}?',
  options: [
    'The Nonsite is an indoor representation of the outdoor Site — maps, photographs, or collected material.',
    'The Nonsite is a work that has been destroyed; the Site is one still standing.',
    'The Nonsite is a digital recreation of the Site, for virtual tours.',
    'The Nonsite is the primary artwork, and the Site only supplies its raw materials.'
  ],
  why: 'Bins of sand from New Jersey, in a gallery, with a map. A symbol standing in for a place that is not there.',
  notes: ['Answer: A.']
},
{
  type: 'quiz', n: 2, answer: 2,
  q: 'Which artist began {{ephemeral}} walking work with <i>A Line Made by Walking</i> (1967)?',
  options: ['Agnes Denes', 'Andy Goldsworthy', 'Richard Long', 'Giovanni Anselmo'],
  why: 'He was twenty-two. He walked up and down a field, photographed the flattened grass, and the grass stood back up.',
  notes: ['Answer: C. Option B is a good distractor — Goldsworthy continues the practice, but did not begin it.']
},
{
  type: 'quiz', n: 3, answer: 0,
  q: 'What was the core critique behind {{artepovera}}’s use of {{poormaterials}}?',
  options: [
    'A rejection of industrial consumer culture and the commodification of art.',
    'A celebration of the technology of Italy’s postwar “economic miracle”.',
    'A call to return to the technical mastery of Renaissance oil painting.',
    'An argument that only expensive materials can carry complex ideas.'
  ],
  why: 'Celant’s essay was called <i>Notes for a Guerrilla War</i>. He meant it politically.',
  notes: ['Answer: A. Option B is the exact reverse — the boom is what they were reacting against.']
},
{
  type: 'quiz', n: 4, answer: 3,
  q: 'Pistoletto’s <i>Venus of the Rags</i> (1967) sets which two things against each other?',
  options: [
    'A neon {{fibonacci}} and a stone {{igloo}}.',
    'A knitted copper-wire sculpture and a domestic chair.',
    'A live animal and an industrial steel beam.',
    'A classical statue and a mound of discarded clothing.'
  ],
  why: 'Two thousand years of ideal beauty, with its back to us, facing what the twentieth century threw away.',
  notes: ['Answer: D. Every wrong option is another Arte Povera work from today — a useful check.']
},
{
  type: 'quiz', n: 5, answer: 0,
  q: 'What did Kounellis’s twelve live horses do to a gallery in 1969?',
  options: [
    'They blurred the line between sculpture, theatre and real life.',
    'They proved that gallery lighting is insufficient for natural growth.',
    'They let the artist demonstrate anatomical drawing.',
    'They promoted the Italian equestrian sports industry.'
  ],
  why: 'No object, no label, no explanation. Twelve animals moving, breathing and making noise, for three days.',
  notes: ['Answer: A.']
},
{
  type: 'quiz', n: 6, answer: 2,
  q: 'Marisa Merz’s <i>Sculture viventi</i> (1966), hung in her own flat, mainly challenged the line between:',
  options: [
    'Political activism and abstract geometric theory.',
    'Italian art and American {{landart}}.',
    'Private domestic life and the public space of art-making.',
    'Digital media and physical sculpture.'
  ],
  why: 'She made them at home, showed them at home, and lived among them. The flat became the exhibition.',
  notes: [
    'Answer: C.',
    'Close by naming the third escape: Land Art left the building, Arte Povera rewrote it, and she simply never went in.'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['landart', 'entropy', 'site', 'nonsite', 'ephemeral', 'sitespecific', 'artepovera', 'poormaterials', 'igloo', 'fibonacci'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
