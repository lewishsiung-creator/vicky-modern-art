/* ------------------------------------------------------------------
   The course. One entry per unit — this drives the index page.

   To add a unit: build week04/ from an existing week (see README),
   then add one line here. `dir: null` means the deck does not exist
   yet; the card renders greyed out and is not clickable.
   ------------------------------------------------------------------ */

const WEEKS = [
  {
    n: 1, dir: 'week02',
    zhTitle: '現代藝術的開端', zhQ: '藝術是如何開始改變的？', zhMeta: '53 頁 · 馬內到《膽大黨》 · 時間軸活動 · 6 題測驗',
    title: 'The Beginning of Modern Art',
    q: 'How did art start to change?',
    meta: '53 slides · Manet to Dandadan · timeline activity · 6-question quiz'
  },
  {
    n: 2, dir: 'week03',
    zhTitle: '表現與內在自我', zhQ: '藝術如何呈現情感與潛意識？', zhMeta: '62 頁 · 達達到馬格利特 · 蘋果排序活動 · 6 題測驗',
    title: 'Expression and the Inner Self',
    q: 'How does art show emotion and the unconscious?',
    meta: '62 slides · Dada to Magritte · the apple ranking activity · 6-question quiz'
  },
  {
    n: 3, dir: 'week04',
    zhTitle: '從再現到表現', zhQ: '繪畫如何脫離現實？', zhMeta: '60 頁 · 帕洛克到塔皮埃斯 · 偶然的系譜活動 · 6 題測驗',
    title: 'From Representation to Expression',
    q: 'How did painting lose reality?',
    meta: '60 slides · Pollock to Tàpies · the genealogy-of-chance activity · 6-question quiz'
  },
  {
    n: 4, dir: 'week05',
    zhTitle: '藝術與日常生活的界線', zhQ: '任何東西都能是藝術嗎？', zhMeta: '56 頁 · 普普藝術到梅丁衍 · 「這是藝術嗎？」實物活動 · 6 題測驗',
    title: 'The Boundary Between Art and Everyday Life',
    q: 'Can anything be art?',
    meta: '56 slides · Pop Art to Mei Dean-E · the “is this art?” object activity · 6-question quiz'
  },
  {
    n: 5, dir: 'week06',
    zhTitle: '藝術作為行動／事件', zhQ: '如果作品毀掉自己，我們還剩下什麼？', zhMeta: '56 頁 · 克萊因到波依斯 · 八支影片，各附「注意看」提示 · 6 題測驗',
    title: 'Art as Action / Event',
    q: 'If an artwork destroys itself, what are we left with?',
    meta: '56 slides · Klein to Beuys · eight films with “watch for” prompts · 6-question quiz'
  },
  {
    n: 6, dir: 'week07',
    zhTitle: '從物件到觀念', zhQ: '藝術還需要以實體存在嗎？', zhMeta: '61 頁 · 波依斯到哈克 · 「界線在哪裡？」活動 · 6 題測驗',
    title: 'From Object to Concept',
    q: 'Does art still need to exist?',
    meta: '61 slides · Beuys to Haacke · the “where is the line?” activity · 6-question quiz'
  },
  {
    n: 7, dir: 'week08',
    zhTitle: '反形式', zhQ: '當過程取代了完成的作品。', zhMeta: '49 頁 · 莫里斯到艾斯特斯 · 觀念配對板 · 6 題測驗',
    title: 'Anti-Form',
    q: 'When process replaces the finished work.',
    meta: '49 slides · Morris to Estes · the concept-matching board · 6-question quiz'
  },
  {
    n: 8, dir: 'week09',
    zhTitle: '走出美術館', zhQ: '藝術進入世界。', zhMeta: '54 頁 · 史密森到瑪麗莎・梅爾茲 · 《河流與潮汐》 · 6 題測驗',
    title: 'Leaving the Museum',
    q: 'Art enters the world.',
    meta: '54 slides · Smithson to Marisa Merz · Rivers and Tides · 6-question quiz'
  },
  {
    n: 9, dir: 'week10',
    zhTitle: '擴展的媒介', zhQ: '錄像與身體。', zhMeta: '51 頁 · 白南準到阿德里安・派珀 · 四支影片 · 紀錄的循環 · 6 題測驗',
    title: 'Expanding Media',
    q: 'Video and body.',
    meta: '51 slides · Paik to Adrian Piper · four films · the documentation loop · 6-question quiz'
  },
  {
    n: 10, dir: 'week11',
    zhTitle: '借來的影像', zhQ: '原創性的終結與再現的政治。', zhMeta: '60 頁 · 巴塞利茲到昆斯 · 藝術法庭投票 · 6 題測驗',
    title: 'Borrowed Images',
    q: 'The end of originality, and the politics of representation.',
    meta: '60 slides · Baselitz to Koons · the Art Court vote · 6-question quiz'
  }
];
