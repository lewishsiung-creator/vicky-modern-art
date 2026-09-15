/* ------------------------------------------------------------------
   Unit 9 — Expanding Media
   Video and Body

   Text on screen is written at CEFR A1–A2, simplified from her slides
   and the lesson plan.

   All four films are embedded from the sources printed on her own
   slides. Her .pptx embeds about 319 MB of video, and two of those
   files are far over Cloudflare's 25 MB per-file limit — see the README.

   Several slides carry content notes for the teacher. They are marked
   CONTENT NOTE in the speaker notes and should be read before class.

   {{term}} renders a tappable word chip from GLOSSARY below.
   ------------------------------------------------------------------ */

const GLOSSARY = {
  /* --- video --- */
  videoart: {
    en: 'Video Art', zh: '錄像藝術',
    def: 'Art that uses moving-image technology — television, video recording — as its main material. It began in the 1960s.',
    zhDef: '以動態影像技術（電視、錄影）為主要材料的藝術，始於 1960 年代。'
  },
  portapak: {
    en: 'Sony Portapak', zh: '手提攝錄機',
    def: 'The first portable video camera and recorder, released in 1965. One person could carry it, so an artist could film alone.',
    zhDef: '1965 年推出的第一台可攜式錄影機。一個人即可搬運，藝術家因此能獨自拍攝。'
  },
  closedcircuit: {
    en: 'closed-circuit video', zh: '閉路錄像',
    def: 'A live camera feed shown on a monitor with no delay and no editing — so the viewer’s own body often ends up inside the work.',
    zhDef: '即時攝影訊號直接顯示於螢幕，無延遲、無剪輯，觀者的身體因而常被納入作品之中。'
  },
  installation: {
    en: 'installation art', zh: '裝置藝術',
    def: 'Art you walk into rather than look at. The whole room is the work. It appeared as a named form in the 1970s.',
    zhDef: '觀者走入其中而非站在其前的藝術，整個空間即是作品。1970 年代成為正式的藝術類型。'
  },

  /* --- body and performance --- */
  performanceart: {
    en: 'Performance Art', zh: '行為藝術',
    def: 'Live, time-based art in which the artist’s body and actions — not a fixed object — are the work.',
    zhDef: '以時間為基礎的現場藝術。作品是藝術家的身體與行動，而非固定的物件。'
  },
  bodyart: {
    en: 'Body Art', zh: '身體藝術',
    def: 'A branch of performance art where the artist’s own body is both the material and the site of the work.',
    zhDef: '行為藝術的一支：藝術家自身的身體既是材料，也是作品發生的場所。'
  },
  duration: {
    en: 'presence and duration', zh: '在場與延時',
    def: 'The artist staying physically present for a long stretch of time — and that time being the substance of the piece.',
    zhDef: '藝術家長時間持續在場，而這段時間本身即構成作品的實質。'
  },
  liveness: {
    en: 'liveness', zh: '現場性',
    def: 'Being unrepeatable, and needing someone there to witness it. It is what separates a live performance from its recording.',
    zhDef: '不可重複、且必須有人在場見證的特質。這正是現場演出與其紀錄之間的分野。'
  },
  documentation: {
    en: 'documentation', zh: '紀錄',
    def: 'The photographs, film, and written accounts left behind after a live work ends. Usually the only way we can reach it now.',
    zhDef: '現場作品結束後留下的照片、影片與文字。通常是我們今日唯一能接觸它的方式。'
  },
  documentationloop: {
    en: 'the documentation loop', zh: '紀錄的迴圈',
    def: 'Video art asks whether the recording device can be the artwork. Performance art survives only as recordings. So the question comes back round.',
    zhDef: '錄像藝術追問攝影機能否成為作品本身；行為藝術卻只能以紀錄留存。於是問題繞回原點。'
  },
  unwitting: {
    en: 'unwitting participation', zh: '非自願參與',
    def: 'Ordinary people in public becoming part of a work without knowing it — audience participation pushed to its furthest point.',
    zhDef: '公共空間中的一般人在不知情的狀況下成為作品的一部分，將觀眾參與推至極致。'
  },
  surveillance: {
    en: 'surveillance and pursuit', zh: '監看與跟隨',
    def: 'Watching, tracking, or being watched — used to put the viewer and the subject inside the same loop of observation.',
    zhDef: '觀看、跟蹤或被觀看。用以將觀者與被觀者置入同一個觀看的迴圈之中。'
  },

  /* --- carried forward --- */
  fluxus: {
    en: 'Fluxus', zh: '激浪派',
    def: 'Unit 5. A loose international network from the early 1960s. Paik was part of it.',
    zhDef: '第六週學過。1960 年代初期形成的鬆散國際網絡，白南準亦為成員。'
  },
  landart: {
    en: 'Land Art', zh: '地景藝術',
    def: 'Unit 8. Art built in the landscape — which most of us know only from photographs.',
    zhDef: '第九週學過。於地景中建造的藝術，而我們多半只能透過照片得知。'
  }
};

const SECTIONS = [
  { title: '1 · The Question',        zh: '本週提問',   start: 0 },
  { title: '2 · Video Art',           zh: '錄像藝術',   start: 5 },
  { title: '3 · Nam June Paik',       zh: '白南準',     start: 12 },
  { title: '4 · Bruce Nauman',        zh: '瑙曼',       start: 15 },
  { title: '5 · The Activity',        zh: '分組活動',   start: 23 },
  { title: '6 · Performance Art',     zh: '行為藝術',   start: 29 },
  { title: '7 · Abramović & Piper',   zh: '阿布拉莫維奇與派柏', start: 35 },
  { title: '8 · The Loop & Quiz',     zh: '迴圈與測驗', start: 40 }
];

const SLIDES = [

/* ===== PART 1 — THE QUESTION ===== */
{
  type: 'title',
  title: 'Expanding Media',
  sub: 'Video and body.',
  meta: 'Unit 9',
  notes: [
    'Five minutes for framing.',
    'The guiding question, and write it on the board: if an artwork is no longer a permanent object but a video loop, a recorded gesture, or a live body — is it still a “work”?',
    'TEACHER: read the content notes on slides 32, 34–37 and 39 before class. Five works today need a warning, and one of them needs a decision from you.'
  ]
},
{
  type: 'grid',
  oneClick: true,
  title: 'Image as documentation',
  zh: '影像作為紀錄',
  cols: 2,
  cells: [
    { label: 'Unit 8', head: '{{landart}}', body: 'Far away in nature. Almost nobody goes.' },
    { label: 'Unit 8', head: 'Arte Povera', body: 'Everyday, fragile materials that fall apart.' },
    { label: 'Unit 5', head: 'Happenings', body: 'It ends, and then it is gone.' },
    { label: 'Unit 7', head: 'Process Art', body: 'The material keeps changing after you leave.' }
  ],
  foot: 'Four movements, one shared problem: <b>the artwork may disappear, but the image remains.</b>',
  notes: [
    'A fast recap. One click puts up all four, then say the line at the bottom.',
    'The point: for four weeks now, photographs and film have been doing the surviving.',
    'Today the camera stops being the witness and becomes the material. That is the whole session.'
  ]
},
{
  type: 'section',
  title: 'If an artwork is no longer a permanent object —',
  sub: 'but a video loop, a recorded gesture, or a live body. Is it still a “work”?',
  notes: [
    'The guiding question. Say it, take two or three answers, and do not resolve it.',
    'It comes back at the very end, in the Documentation Loop.'
  ]
},
{
  type: 'twocol',
  title: 'When does a record become the artwork?',
  left: {
    head: 'Case A · video as {{documentation}}',
    zh: '影像作為紀錄',
    lead: 'Action → camera → record.',
    items: [
      'The artist walks outside.',
      'A camera happens to be there.',
      'Without the camera, this is still just walking.',
      'The video is <b>evidence</b>.'
    ]
  },
  right: {
    head: 'Case B · video as the artwork',
    zh: '影像即作品',
    lead: 'Body → camera → image.',
    items: [
      'The walk was designed <i>for</i> the camera from the start.',
      'Without the camera, there is no work at all.',
      'The framing, the length, the loop — all chosen.',
      'The video <b>is</b> the artwork.'
    ]
  },
  notes: [
    'This distinction is the spine of the whole session, so take it slowly.',
    'Then the complication, which is on her slide: the camera changes the action. Once you know you are being filmed, you move differently.',
    'So Case A quietly turns into Case B. Nauman is the artist who noticed that.'
  ]
},
{
  type: 'section',
  title: 'Can art really escape the museum?',
  ask: 'Last week they walked out. This week they take the camera with them. Is that escaping — or just moving?',
  notes: [
    'A bridge from Unit 8. Thirty seconds.',
    'Then into Video Art.'
  ]
},

/* ===== PART 2 — VIDEO ART ===== */
{
  type: 'section',
  title: '{{videoart}}',
  sub: 'When the machine becomes the material.',
  notes: ['Fifteen minutes for Video Art and Paik together.']
},
{
  type: 'bullets',
  oneClick: true,
  title: 'Television enters the house',
  zh: '電視進入家庭',
  items: [
    { head: 'Before television, moving pictures were only in cinemas', body: 'You went out to see them, with other people, at a fixed time.' },
    { head: 'Television began in 1939', body: 'At a public demonstration in New York.' },
    { head: 'Through the 1950s, families got a set at home', body: 'And the way people watched anything changed completely.' },
    { head: '1963 and 1965 — the first video art', body: 'Made by Nam June Paik and Wolf Vostell.' },
    { head: 'Video is a <i>material</i>, not a style', body: 'Artists use it in many different ways, across many kinds of art.' }
  ],
  notes: [
    'The shift that matters: watching moved from a public event to a private habit, in the corner of the living room.',
    'That is what these artists are attacking. Not the technology — the passivity.',
    'Vostell and Paik arrive at video independently, in Germany and then New York.'
  ]
},
{
  type: 'compare',
  title: 'TV Dé-coll/age',
  ask: 'He took a television and broke the picture on purpose. Why would an artist do that?',
  left:  { src: 'img/vostell-tv-decollage-1.jpg', label: 'Wolf Vostell, <i>TV Dé-coll/age</i>, 1963', tag: 'Vostell' },
  right: { src: 'img/vostell-tv-decollage-2.jpg', label: 'Another view of the same work', tag: 'Vostell' },
  reveal: [
    { side: 'left',  text: 'He distorted the signal, buried sets, and once shot at a television with a rifle.' },
    { side: 'right', text: '“Dé-coll/age” means the opposite of collage — tearing down instead of building up.' },
    { side: 'right', text: 'The target is not the machine. It is the habit of sitting still in front of it.' }
  ],
  notes: [
    'ASK first. Answers about protest, about breaking a habit, about making people look at the box rather than through it.',
    'Vostell was in {{fluxus}}, and dé-coll/age was his own word — taken from torn advertising posters in the street.',
    'NOTE: both images are low-resolution scans; zoom is limited.'
  ]
},
{
  type: 'section',
  title: 'Watch for:',
  sub: 'A television with almost nothing on it. What are you actually looking at?',
  notes: ['Prompt slide. Ten seconds of silence, then play.']
},
{
  type: 'video',
  oneClick: true,
  title: 'Zen for TV',
  caption: 'Nam June Paik (1932–2006), <i>Zen for TV</i>, 1963 — a television reduced to a single vertical line',
  yt: '-_EGwhZ64LQ',
  poster: 'img/paik-zen-for-tv.jpg',
  watchFor: 'A television with almost nothing on it. What are you actually looking at?',
  points: [
    'A working television set, turned on its side, showing one thin line.',
    'The picture has been reduced until there is nothing left to watch.',
    'So you stop watching the programme and start looking at the machine.',
    'The story goes that a set was damaged in transit — and he kept the fault.'
  ],
  notes: [
    'Two or three minutes is plenty.',
    'The title is the joke and the point: an object for contemplation, made from the least contemplative device ever invented.',
    'Compare with Malevich’s Black Square in Unit 2 — reduce until nothing is left, and see what that does.',
    'This film is embedded from the YouTube link on her own slide. It needs internet.'
  ]
},
{
  type: 'artwork',
  oneClick: true,
  src: 'img/sony-portapak.gif',
  title: 'The {{portapak}}, 1965',
  caption: 'Sony’s first portable video recorder',
  ask: 'One person can carry this. What does that change?',
  points: [
    'Before 1965, a video camera meant a television studio and a crew.',
    'The Portapak was carried by one person, with a battery.',
    'So an artist could film alone, in a studio, with nobody watching.',
    'And could film for as long as the tape lasted, without editing.'
  ],
  notes: [
    'ASK and let them get there: it made video private, cheap and immediate.',
    'That single piece of equipment is why the next three artists exist. Say so.',
    'This is Quiz Question 1.'
  ]
},
{
  type: 'compare',
  title: 'The Paik–Abe Video Synthesizer',
  left:  { src: 'img/paik-abe-synthesizer-1.jpg', label: 'Nam June Paik with Shuya Abe, video synthesizer, 1969–72', tag: 'The machine' },
  right: { src: 'img/paik-abe-synthesizer-2.jpg', label: 'The images it produced', tag: 'The images' },
  reveal: [
    { side: 'left',  text: 'He built his own machine, with the engineer Shuya Abe.' },
    { side: 'right', text: 'It bent, coloured and layered the television signal in real time.' },
    { side: 'left',  text: 'So he was not filming anything. He was painting with electricity.' }
  ],
  notes: [
    'The last line is the point of the slide: no camera, no subject, no recording. Just the signal itself, treated as paint.',
    'Paik was trained as a composer, not a painter. He came to television through music and {{fluxus}}.'
  ]
},

/* ===== PART 3 — NAM JUNE PAIK ===== */
{
  type: 'bullets',
  oneClick: true,
  title: 'The 1970s and 80s: a new medium bites',
  zh: '新媒材的衝擊',
  items: [
    { head: 'In the 1970s, {{installation}} appears as a named form', body: 'Art you walk into, rather than look at.' },
    { head: 'Paik makes video installations', body: '<i>TV Buddha</i>, <i>TV Garden</i>. People call him the father of {{videoart}}.' },
    { head: 'The question these artists ask', body: 'How can we question television and mass media, using television?' },
    { head: 'And: how is a video artwork different from a TV programme?' },
    { head: 'The aim', body: 'To push back against passive watching, and to free television from being only a tool for delivering information.' }
  ],
  notes: [
    'The trick they are all performing: attacking a medium from inside it.',
    'Compare with Greenberg in Unit 1 — a discipline using its own methods on itself. Same move, new machine.',
    'NOTE: <i>Electronic Superhighway</i> is a learning objective in her lesson plan, but there is no slide for it in her deck. It is described in these notes instead: from the 1990s, Paik built walls of many screens playing at once — one for each American state in the 1995 version — predicting a world saturated with channels. He coined the phrase “electronic superhighway” in 1974, twenty years before the internet arrived.',
    'Also missing from the deck: TV Cello and his long collaboration with the cellist Charlotte Moorman, who performed wearing television sets. Worth a sentence if you have time.'
  ]
},
{
  type: 'artwork',
  oneClick: true,
  src: 'img/paik-tv-buddha.jpg',
  title: 'TV Buddha',
  caption: 'Nam June Paik, <i>TV Buddha</i>, 1974 — an antique Buddha, a closed-circuit camera, and a monitor',
  smallSource: true,
  ask: 'The Buddha is watching himself, live, forever. Who is being watched here — and by whom?',
  points: [
    'An eighteenth-century Buddha statue sits facing a television.',
    'A camera films the statue, and the screen shows it back, live, with no delay.',
    'So he contemplates himself, endlessly, on a machine built for distraction.',
    'And when you walk between them, you appear on the screen too.'
  ],
  notes: [
    'ASK and let it run — this is the best question of the first half.',
    'This is {{closedcircuit}}: no recording, no editing, no programme. Just now, repeated.',
    'The encounter is the point: an Eastern contemplative tradition meeting Western broadcast technology, and each one absorbing the other.',
    'This is Quiz Question 2: a loop of self-reflexivity and surveillance.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'twocol',
  title: 'What Paik changed',
  left: {
    head: '1 · {{documentation}} → medium',
    zh: '從紀錄到媒材',
    lead: 'The camera stops being a witness.',
    items: [
      'He used the camera, the set and the signal as material.',
      'The video was no longer recording something else.',
      'The video itself became the artwork’s substance.'
    ]
  },
  right: {
    head: '2 · object → time',
    zh: '從物件到時間',
    lead: 'And the work stops holding still.',
    items: [
      'A normal artwork is a fixed object. It does not change.',
      'A video artwork has no single fixed form.',
      'It exists only while it is playing — in time.'
    ]
  },
  notes: [
    'Two changes, and the second is the harder one.',
    'If the work only exists while it plays, then owning the tape is not owning the work.',
    'That problem runs straight into the second half of today.'
  ]
},

/* ===== PART 4 — BRUCE NAUMAN ===== */
{
  type: 'section',
  title: 'Watch for:',
  sub: 'Nothing happens, for a long time. When do you start watching differently?',
  notes: [
    'Prompt slide. Fifteen minutes for the whole Nauman section.',
    'Warn them the film is deliberately boring. That is the content, not a fault.'
  ]
},
{
  type: 'video',
  oneClick: true,
  title: 'Wall–Floor Positions',
  caption: 'Bruce Nauman (b. 1941), <i>Wall–Floor Positions</i>, 1968 — one unedited take, about an hour',
  yt: 'IMSyhyvr0mw',
  poster: 'img/nauman-wall-floor-positions.jpg',
  watchFor: 'Nothing happens, for a long time. When do you start watching differently?',
  points: [
    'He moves through a series of positions against a wall and the floor.',
    'One camera. One take. No editing, no music, no story.',
    'The camera does not move and nobody speaks.',
    'The work is the hour — not anything that happens inside it.'
  ],
  notes: [
    'Three or four minutes is enough. The discomfort arrives quickly.',
    'The related work in her lesson plan is <i>Walking in an Exaggerated Manner around the Perimeter of a Square</i>, 1967–68 — the same principle, walking a taped square.',
    'ASK afterwards: what makes duration itself into content? That is the first discussion question at the end.',
    'This film is embedded from the YouTube link on her own slide.'
  ]
},
{
  type: 'section',
  title: 'What is the artwork?',
  sub: 'The body? The action? The video? Or the time we spend watching it?',
  ask: 'Pick one. Defend it in a sentence.',
  notes: [
    'Take three or four answers quickly. Do not settle it.',
    'This is a rehearsal for the group activity in twenty minutes, which asks a harder version of the same thing.'
  ]
},
{
  type: 'bullets',
  oneClick: true,
  title: 'Nauman’s five ideas',
  zh: '瑙曼的五個想法',
  items: [
    { head: '1 · The studio is enough', body: '“If I was an artist and I was in the studio, then whatever I was doing in the studio must be art.”' },
    { head: '2 · Art becomes a verb', body: 'Art is not making an art object. Art is what an artist <i>does</i>.' },
    { head: '3 · Repetition', body: 'An ordinary action, repeated, turns strange — and uncomfortable, and then meaningful.' },
    { head: '4 · Body → camera → frame → viewer', body: 'So is the video documenting a performance? Or is the performance made for the video?' },
    { head: '5 · The body runs through everything', body: 'Beyond video, he also worked in neon, sound and body-cast sculpture.' }
  ],
  notes: [
    'The first quotation is his own and it is Quiz Question 3. Put it on the board.',
    'Point 4 is Case A and Case B from the start of class, arriving in one artist. He never resolves it either.',
    'Point 2 is the sentence that connects him back to Beuys in Unit 6 — art as something you do, not something you make.'
  ]
},
{
  type: 'compare',
  title: 'The body, in other materials',
  left:  { src: 'img/nauman-self-portrait-as-fountain.jpg', label: 'Bruce Nauman, <i>Self-Portrait as a Fountain</i>, 1966', tag: 'Photograph' },
  right: { src: 'img/nauman-double-poke.jpg', label: '<i>Double Poke in the Eye II</i>, 1985 — neon', tag: 'Neon' },
  reveal: [
    { side: 'left',  text: 'He photographs himself spouting water, and calls it a fountain — Duchamp’s <i>Fountain</i>, from Unit 2, answered with a body.' },
    { side: 'right', text: 'And in neon, two faces poke each other in the eye, over and over, forever.' },
    { side: 'right', text: 'Same idea in a different material: an ordinary action, repeated until it becomes unbearable.' }
  ],
  notes: [
    'The Duchamp joke is worth spelling out — the readymade urinal becomes the artist’s own body.',
    'The neon works look like shop signs and behave like machines. They cannot stop.',
    'These two together show why he is not only a video artist.'
  ]
},
{
  type: 'compare',
  title: 'Hands, heads, discomfort',
  left:  { src: 'img/nauman-from-hand-to-mouth.jpg', label: '<i>From Hand to Mouth</i>, 1967 — wax over cloth', tag: '1967' },
  right: { src: 'img/nauman-hanging-heads.jpg', label: '<i>Hanging Heads #1</i>, 1989 — cast wax', tag: '1989' },
  reveal: [
    { side: 'left',  text: 'A phrase made literal: a cast of a body from the hand to the mouth, and nothing else.' },
    { side: 'right', text: 'And heads cast in wax, hung upside down on wires.' },
    { side: 'right', text: 'The body is always partial, always uncomfortable, and never whole.' }
  ],
  notes: [
    'From Hand to Mouth takes an English idiom about poverty and casts it as an object. He does this often with language.',
    'NOTE: the 1967 image is a low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  oneClick: true,
  src: 'img/nauman-corridor-1.jpg',
  title: 'Live-Taped Video Corridor',
  caption: 'Bruce Nauman, <i>Live-Taped Video Corridor</i>, 1970 — a narrow corridor, a camera, and two monitors',
  ask: 'You walk toward a screen showing yourself. But the closer you get, the smaller you become. Why?',
  points: [
    'A corridor barely wider than your shoulders, with two monitors at the far end.',
    'One shows the empty corridor, recorded earlier. The other shows you, live.',
    'But the camera is behind you, at the entrance — so walking forward moves you <i>away</i> from it.',
    'You approach your own image and it shrinks. You cannot ever reach yourself.'
  ],
  notes: [
    'ASK and let them work out the geometry. It is genuinely clever and students enjoy solving it.',
    'This is {{closedcircuit}} used to unsettle rather than to meditate — the opposite of TV Buddha.',
    'Her slide’s point 6: the viewer becomes a participant. You are watching yourself being watched. You are inside the artwork.',
    'Some people find the corridor distressing — it is narrow and it induces real disorientation. Mention that.'
  ]
},
{
  type: 'compare',
  title: 'Inside the corridor',
  left:  { src: 'img/nauman-corridor-2.jpg', label: 'The corridor, from outside', tag: 'Outside' },
  right: { src: 'img/nauman-corridor-3.jpg', label: 'The monitors at the far end', tag: 'Inside' },
  reveal: [
    { side: 'left',  text: 'From outside it is two plain walls. Nothing to look at.' },
    { side: 'right', text: 'Inside, you are the only content — and you are being shown to yourself, badly.' },
    { side: 'right', text: '{{surveillance}}: the watcher and the watched are the same person.' }
  ],
  notes: [
    'The link forward: this is surveillance as a strategy, and it comes back with Acconci in twenty minutes.',
    'NOTE: both are low-resolution scans; zoom is limited.'
  ]
},

/* ===== PART 5 — THE ACTIVITY ===== */
{
  type: 'section',
  title: 'Group discussion',
  sub: 'When the artist becomes the artwork.',
  notes: [
    'Ten to twelve minutes. Groups of three or four.',
    'IMPORTANT: do not use the words “Performance Art” at any point during this activity. The whole design is that they reach body, action, time and audience by themselves, before those words are given to them.'
  ]
},
{
  type: 'activity',
  title: 'Step 1 — what exactly becomes art?',
  zh: '步驟一',
  minutes: 4,
  instructions: [
    '<b>The scenario.</b> “An artist stands in an empty gallery for one hour, saying and doing nothing. Visitors can enter, watch, and leave.”',
    'Decide as a group: is this art?',
    'If yes — what <i>exactly</i> is the artwork? The artist · their body · the action · the one hour · the relationship with the audience · the whole situation · none of it.'
  ],
  questions: [
    'Complete this sentence together: “We think ______ is the artwork, because ______.”'
  ],
  notes: [
    'Three or four minutes. Snap judgements — do not let them deliberate too long.',
    'Give no framing and no theory. The scenario, and nothing else.',
    'Every group must finish the sentence. That is what makes them commit.'
  ]
},
{
  type: 'activity',
  oneClick: true,
  title: 'Step 2 — change one thing',
  zh: '步驟二',
  minutes: 5,
  instructions: [
    'Same scenario, three versions. Each time ask: at what point does this become art? Why? What changed?'
  ],
  questions: [
    '<b>A</b> — The artist stands there for one hour.',
    '<b>B</b> — The artist repeats the same movement for one hour.',
    '<b>C</b> — The artist asks visitors to interact with their body.'
  ],
  notes: [
    'One click puts A, B and C up together — take them in order, and take answers between each.',
    'This step exists to surface the words <b>action, repetition, time, audience, intention</b> — from their own reasoning, not from a definition.',
    'Write every one of those words on the board as you hear it. You need them in a minute.'
  ]
},
{
  type: 'activity',
  oneClick: true,
  title: 'Step 3 — the twist',
  zh: '步驟三',
  minutes: 3,
  instructions: [
    'Back to the core question: <b>can the artist be both the creator and the artwork?</b>',
    'And one more turn: if the artist’s body <i>is</i> the artwork — who is creating whom?',
    'One closing sentence per group. No full reports.'
  ],
  questions: [
    'Complete it: “We think the artist becomes part of the artwork when ______.”',
    'Words you might use: intention · concept · context · action · rule · chance · duration · audience · body'
  ],
  notes: [
    'On the board, write: Artist → creates → Artwork. Then cross it out and write: Artist → ? → Artist’s body.',
    'Collect the key words as each group speaks: BODY / ACTION / TIME / AUDIENCE / INTENTION.',
    'Then close with her own line, near enough word for word: “Until now we thought of the artist as someone who makes the artwork. But what if the artist does not make an object? The body becomes the material. The action becomes the form. Time becomes part of the work.”',
    'And then leave ONE question hanging, unanswered: “If the body is the artwork, what happens when the artist stops performing?” Do not answer it. It closes the loop at the end of class.'
  ]
},
{
  type: 'section',
  title: 'Art no longer needs to be a separate object from the artist.',
  notes: ['One beat. Then the definition.']
},
{
  type: 'break',
  title: 'The artist no longer only makes the work.',
  zh: '藝術家不再只是製作作品',
  chain: ['Artist', 'makes', 'Object'],
  chainLabel: 'That was the arrangement for about five hundred years.',
  after: {
    label: 'The artist can <i>perform</i> the work.',
    items: [
      'The body becomes a medium.',
      'The action becomes the work.',
      'And the work happens in time, then stops.'
    ]
  },
  notes: [
    'Click once and the old chain breaks.',
    'This is the moment the second half begins. Say it slowly.'
  ]
},

/* ===== PART 6 — PERFORMANCE ART ===== */
{
  type: 'section',
  title: '{{performanceart}}',
  sub: 'The artist uses body, action, time and space as the material.',
  notes: [
    'NOW you may use the words. Not before.',
    'Twenty minutes for Acconci, then Abramović and Piper.'
  ]
},
{
  type: 'grid',
  oneClick: true,
  title: 'Four things that define it',
  zh: '四個構成要素',
  cells: [
    { label: 'Body', head: 'The body replaces the object', body: 'It is the sculptural material now.' },
    { label: 'Action', head: 'The action <i>is</i> the artwork', body: 'Not an object the action produces.' },
    { label: 'Time', head: 'It happens, then disappears', body: '{{duration}} — time itself is the material.' },
    { label: 'Audience', head: '{{liveness}}', body: 'The work exists through a live encounter. The viewer may be essential to whether it exists at all.' }
  ],
  notes: [
    'These are exactly the words the class produced in the activity. Point at the board and say so.',
    'The distinction the lesson plan asks for: performing arts (theatre, dance, music) use rehearsal, a script, a stage, and representation. Performance art uses the artist’s own body, rules rather than a script, real action rather than representation, and any space at all.',
    'The boundary is not absolute, and it is fine to say so.'
  ]
},
{
  type: 'artwork',
  oneClick: true,
  src: 'img/acconci-trademarks.jpg',
  title: 'Trademarks',
  caption: 'Vito Acconci (1940–2017), <i>Trademarks</i>, 1970',
  smallSource: true,
  ask: 'Where are the limits of your own body?',
  points: [
    'He bit himself, everywhere he could physically reach.',
    'Then inked the bite marks and printed them.',
    'The body is the tool, the material, and the surface, all at once.',
    'A “trademark”: a mark that proves who made a thing. Here it is made of teeth.'
  ],
  notes: [
    'CONTENT NOTE: this is self-inflicted biting. It is not bloody in the image, but say what it is before you show it.',
    'The pun in the title is the argument: the artist’s mark of authenticity, made by the artist’s own mouth on the artist’s own skin.',
    'His theme through all three works today is LIMITS — of the body, then of social space, then of power.',
    'NOTE: low-resolution scan; zoom is limited.'
  ]
},
{
  type: 'artwork',
  oneClick: true,
  src: 'img/acconci-following-piece.jpg',
  title: 'Following Piece',
  caption: 'Vito Acconci, <i>Following Piece</i>, 1969 — New York, over about three weeks',
  smallSource: true,
  ask: 'He followed strangers through the city, every day, for three weeks. Nobody watched him do it. Was it a performance?',
  points: [
    'Each day he chose a stranger in the street and followed them until they went somewhere he could not enter.',
    'Sometimes minutes. Sometimes hours.',
    'There was no audience, no gallery, and no announcement.',
    'The only record is his own written notes and a few photographs — made afterwards.'
  ],
  notes: [
    'ASK and let it run. This is the second discussion question at the end: can a work be “live” if nobody witnessed it?',
    'This is Quiz Question 4: it moved body-based work out of the studio and into public streets.',
    'The uncomfortable part, and worth naming: the people being followed did not consent and mostly never knew. That is {{surveillance}} used as a method.',
    'The link to Nauman’s corridor: there, you watch yourself. Here, someone watches a stranger.'
  ]
},
{
  type: 'artwork',
  oneClick: true,
  src: 'img/acconci-seedbed.jpg',
  title: 'Seedbed',
  caption: 'Vito Acconci, <i>Seedbed</i>, 1972 — Sonnabend Gallery, New York. The artist hidden beneath a ramp, audible to visitors above',
  ask: 'You can hear him, but you cannot see him. Who has the power in this room?',
  points: [
    'A wooden ramp was built across the gallery floor.',
    'Acconci lay hidden underneath it for hours at a time.',
    'Visitors walked above him, and heard his voice through speakers — he spoke about them as they moved.',
    'The gallery looks completely empty. The work is entirely a voice and a presence you cannot see.'
  ],
  notes: [
    'CONTENT NOTE — read this before class. Under the ramp, Acconci was masturbating while speaking aloud about the visitors walking over him. This is a canonical work and it is in every survey of performance art, but it is explicit, and students should be told what it is before the slide goes up.',
    'The image on this slide shows only the empty gallery and the ramp. There is nothing explicit to see.',
    'LEWIS: the next slide embeds documentary footage from the Dailymotion link on her own slide. Nothing plays until it is clicked. If you would rather the site did not carry it at all, say so and I will pull that one slide.',
    'The argument the work makes: an unseen presence can control a room completely. That is his theme of POWER — who sees whom.',
    'Compare with Nauman’s corridor again: there, being seen is the discomfort. Here, not being able to see is.'
  ]
},
{
  type: 'video',
  oneClick: true,
  title: 'Seedbed, documented',
  caption: 'Documentary footage of <i>Seedbed</i>, 1972',
  dm: 'x7ygpc',
  poster: 'img/acconci-seedbed-still.jpg',
  watchFor: 'The gallery looks empty. So what is the camera actually recording?',
  points: [
    'Mostly a wooden ramp and people’s feet.',
    'The work is in the audio, and in what you know is underneath.',
    'This footage is the only way the work reaches us now.',
    'Which is exactly the problem the end of today is about.'
  ],
  notes: [
    'CONTENT WARNING: the audio is sexually explicit. Say so before you press play, and give students permission to step out.',
    'You may prefer to describe this rather than play it. The slide before carries the whole argument already.',
    'If you do play it: thirty seconds is more than enough to make the point about documentation.',
    'It is embedded from the Dailymotion link on her own slide and needs internet.'
  ]
},

/* ===== PART 7 — ABRAMOVIĆ AND PIPER ===== */
{
  type: 'artwork',
  oneClick: true,
  src: 'img/abramovic-rhythm-0.jpg',
  title: 'Rhythm 0',
  caption: 'Marina Abramović (b. 1946), <i>Rhythm 0</i>, 1974 — Studio Morra, Naples. Six hours, seventy-two objects',
  ask: 'She promised to take full responsibility for whatever was done to her, for six hours. What happened?',
  points: [
    'Seventy-two objects on a table: a rose, a feather, honey, scissors, a scalpel, a loaded gun.',
    'A sign said the audience could use any of them on her body. She would not resist.',
    'For six hours she stood still and let them.',
    'It began gently. It did not stay gentle.'
  ],
  notes: [
    'CONTENT NOTE — read before class. Over six hours the audience cut her clothes off, cut her skin, and one person put the loaded gun in her hand and held it to her neck until others intervened. Say this plainly but without dwelling, and warn the class before the slide.',
    'ASK first, and let them predict. They usually guess correctly, which is itself worth noticing.',
    'When the six hours ended and she began to move and walk toward them, the audience ran out of the room. They could not face her as a person.',
    'This is Quiz Question 5: the audience become co-authors who determine the artist’s safety and the outcome.',
    'And it is {{duration}} at its most extreme: the work is the six hours, and nothing else.'
  ]
},
{
  type: 'video',
  oneClick: true,
  title: 'Rhythm 0, documented',
  caption: 'Documentary footage and photographs of <i>Rhythm 0</i>, 1974',
  yt: 'xTBkbseXfOQ',
  poster: 'img/abramovic-rhythm-0-still.jpg',
  watchFor: 'These are photographs of something that lasted six hours. What is missing from them?',
  points: [
    'Still photographs, taken during the six hours.',
    'You can see what was done. You cannot feel how long it took.',
    'And you are watching safely, fifty years later, from a chair.',
    'The risk — which was the entire work — cannot be recorded.'
  ],
  notes: [
    'CONTENT WARNING: distressing images, including cuts to the artist’s body. Warn the class and allow anyone to step out.',
    'Two or three minutes at most.',
    'The “watch for” answer is the point of the whole session: duration and risk are exactly what documentation cannot carry.',
    'This is the third discussion question — is the documentation a faithful trace, or a new object that replaces what it records?'
  ]
},
{
  type: 'grid',
  oneClick: true,
  title: 'What Rhythm 0 tests',
  zh: '《節奏 0》所測試的事',
  cols: 3,
  cells: [
    { label: 'Limits', head: 'How far can an artist give up control of her own body?', body: 'She set the rule, and then had no further say.' },
    { label: 'Power', head: 'Who is responsible for what happens?', body: 'The artist? The participant? The group? The gallery?' },
    { label: 'Audience', head: 'The audience is no longer watching', body: 'They are acting. And afterwards they had to live with what they did.' }
  ],
  notes: [
    'The middle cell is the hardest and the best. She removed her own responsibility by announcing she would not resist — so where did it go?',
    'A real observation from the six hours: some visitors protected her, and some attacked her, and the two groups fought. The gallery became a society in miniature.',
    'Do not resolve the responsibility question. It is the reason the work is still taught.'
  ]
},
{
  type: 'compare',
  title: 'Catalysis',
  ask: 'She went out in public like this and said nothing. Everyone around her became part of the work without knowing. Is that fair?',
  left:  { src: 'img/piper-catalysis-3.jpg', label: 'Adrian Piper (b. 1948), <i>Catalysis III</i>, 1970', tag: 'Catalysis III' },
  right: { src: 'img/piper-catalysis-4.jpg', label: '<i>Catalysis IV</i>, 1971', tag: 'Catalysis IV' },
  reveal: [
    { side: 'left',  text: 'In <i>Catalysis III</i> she painted her clothes with wet white paint and a sign reading “WET PAINT”, then went shopping.' },
    { side: 'right', text: 'In <i>Catalysis IV</i> she rode the bus and the subway with a white towel stuffed in her mouth.' },
    { side: 'right', text: 'No announcement, no gallery, no audience who knew. That is {{unwitting}}.' }
  ],
  notes: [
    'ASK and let them argue about consent. There is no comfortable answer, and that is the design.',
    'CONTENT NOTE: in other works in the series she soaked her clothes in vinegar, eggs, milk and cod-liver oil for a week before going out in public.',
    'Piper is a Black woman and a trained analytic philosopher. The series is about how strangers read a body in public, and what happens when that body refuses to behave normally.',
    'Her point on the slide: the body is not neutral. It carries social meanings before it does anything at all.',
    'And these works survive almost entirely through her own later descriptions. Very little was photographed.'
  ]
},
{
  type: 'grid',
  oneClick: true,
  title: 'What Piper adds',
  zh: '派柏帶來的三件事',
  cols: 3,
  cells: [
    { label: 'Space', head: 'Public space becomes the site', body: 'A bus, a shop, a subway train — not a gallery.' },
    { label: 'Social rules', head: 'Performance makes invisible rules visible', body: 'You only notice the rule when somebody breaks it.' },
    { label: 'Identity', head: 'The body is not neutral', body: 'It carries social meanings — of race, of gender — before it acts at all.' }
  ],
  notes: [
    'The middle one is the mechanism: she breaks an unwritten rule of public behaviour, and everyone’s reaction reveals that the rule was there.',
    'The third is why she matters in a course that has been overwhelmingly white and male since Unit 1. Say that.',
    'Then to the Documentation Loop, which closes the session.'
  ]
},

/* ===== PART 8 — THE LOOP AND QUIZ ===== */
{
  type: 'flow',
  oneClick: true,
  title: '{{documentationloop}}',
  zh: '紀錄的迴圈',
  stages: [
    { head: 'Video', body: 'Paik: the recording tool becomes the medium.' },
    { head: 'Body', body: 'Nauman: the body becomes material — still recorded by a camera.' },
    { head: 'Performance', body: 'Acconci, Abramović, Piper: the body becomes a live event, with the audience inside it.' },
    { head: '{{documentation}}', body: 'The live moment ends. Only photographs, film and accounts remain.' }
  ],
  foot: 'And that is how we accessed every single work today — which puts us back at the first question.',
  notes: [
    'Ten minutes for the wrap-up. One click puts up all four stages.',
    'Then close the loop out loud: we began by asking whether a recording device can itself be the artwork. We end holding nothing but recordings.',
    'And answer the question you left hanging in the activity: “If the body is the artwork, what happens when the artist stops performing?” The answer: the work exists again through documentation — but what remains is the record, not the live moment.',
    'The closing statement, which is hers: video art and performance art use completely different media — one a machine, one a body — but they point at the same question. When the artwork is no longer a permanent object, what exactly do we possess when we say we “have” the work?'
  ]
},
{
  type: 'activity',
  oneClick: true,
  title: 'Discussion',
  zh: '討論',
  minutes: 10,
  instructions: [
    'Talk in small groups. Then one person reports back.',
    'Useful starters: “I think… because…” · “For me, …” · “I disagree, because…”'
  ],
  questions: [
    'Nauman’s videos have no story, no editing and no big moment — just a repeated action in real time. If nothing “happens”, what turns {{duration}} into content? And how is that different from the way Paik builds meaning by editing and layering?',
    'Abramović put her safety in the audience’s hands, so they became co-authors. Acconci followed strangers with nobody watching at all. Does a work need a present audience to be “live” — or can {{liveness}} exist in an act nobody witnessed, rebuilt afterwards from {{documentation}}?',
    'All five artists today reach us through photographs, video stills and written accounts rather than the original event. Is that documentation a faithful trace of the artwork — or has it become a new artwork of its own, which replaces what it recorded?'
  ],
  notes: [
    'These are the three questions from the lesson plan, simplified for A2.',
    'Question 3 is the strongest, and it is the whole session in one question. Use it if you use only one.',
    'Question 2 sets Abramović against Acconci directly, which is the cleanest contrast of the second half.'
  ]
},
{
  type: 'activity',
  oneClick: true,
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
  q: 'Which development in 1965 let artists treat moving images as sculptural or painterly material?',
  options: [
    'The invention of the colour television tube.',
    'The first public broadcast in New York.',
    'The creation of the Paik–Abe Video Synthesizer.',
    'The release of the {{portapak}}.'
  ],
  why: 'One person could carry it. So an artist could film alone, cheaply, with no crew and no studio.',
  notes: ['Answer: D. Option B is 1939 and option C is 1969 — both real, both the wrong date.']
},
{
  type: 'quiz', n: 2, answer: 3,
  q: 'In Paik’s <i>TV Buddha</i> (1974), what does the {{closedcircuit}} camera mainly do?',
  options: [
    'It provides a narrative documentary about the artist’s life.',
    'It documents the slow decay of the Buddha statue over time.',
    'It broadcasts the image to a global audience by satellite.',
    'It creates a loop of self-reflexivity and {{surveillance}}.'
  ],
  why: 'The statue watches itself, live and forever — and so does anyone who steps between them.',
  notes: ['Answer: D.']
},
{
  type: 'quiz', n: 3, answer: 3,
  q: 'What idea guided Nauman’s early studio videos?',
  options: [
    'Art should be visually beautiful and use traditional materials.',
    'Video should only be used to document finished sculptures.',
    'Performance must always involve an interactive audience.',
    'Anything an artist does in the studio must be art.'
  ],
  why: 'His own words: “If I was an artist and I was in the studio, then whatever I was doing in the studio must be art.”',
  notes: ['Answer: D. It is the sentence that turns art from a noun into a verb.']
},
{
  type: 'quiz', n: 4, answer: 1,
  q: 'How did Acconci’s <i>Following Piece</i> (1969) extend {{bodyart}}?',
  options: [
    'By using neon lights to outline human profiles.',
    'By moving the performance out of the studio and into public streets.',
    'By making a large video wall that predicted the internet.',
    'By asking the audience to use objects on his body.'
  ],
  why: 'Three weeks of following strangers through New York, with no gallery, no audience and no announcement.',
  notes: ['Answer: B. Option D is Rhythm 0 and option C is Electronic Superhighway — both from today.']
},
{
  type: 'quiz', n: 5, answer: 0,
  q: 'What was the audience’s role in Abramović’s <i>Rhythm 0</i> (1974)?',
  options: [
    'Co-authors, who decided the artist’s safety and the work’s outcome.',
    'To watch silently from a distance without interfering.',
    'To record the performance on portable video cameras.',
    'To follow the artist down a corridor and see themselves on a screen.'
  ],
  why: 'Seventy-two objects, six hours, and a promise not to resist. What happened was entirely up to them.',
  notes: ['Answer: A. Option D is Nauman’s corridor.']
},
{
  type: 'quiz', n: 6, answer: 2,
  q: 'What does {{documentationloop}} mean in today’s session?',
  options: [
    'The physical shape of the magnetic tape inside a {{portapak}}.',
    'An editing technique Paik used to distort signals.',
    'Video art begins as a medium, and performance art survives only as documentation.',
    'The requirement that all performances be repeated annually.'
  ],
  why: 'We started by asking whether the camera can be the artwork. We ended holding nothing but recordings.',
  notes: [
    'Answer: C.',
    'Close on her own line: when the artwork is no longer a permanent object, what exactly do we possess when we say we “have” it?'
  ]
},
{
  type: 'end',
  title: 'Key terms',
  zh: '關鍵詞彙',
  terms: ['videoart', 'portapak', 'closedcircuit', 'installation', 'performanceart', 'bodyart', 'duration', 'liveness', 'documentation', 'documentationloop', 'unwitting', 'surveillance'],
  notes: ['Tap any term to show it large, with the Chinese. Good for the last two minutes of class.']
}
];
