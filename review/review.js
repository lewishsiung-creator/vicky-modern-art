/* ------------------------------------------------------------------
   重點複習 — one unit of the course as a page a student can keep.

     /review/?unit=10          English
     /review/?unit=10&lang=zh  中文

   It is built from the same unit/content.js the deck runs on, so it can
   never drift out of step with the lecture. What it leaves out is the
   machinery of the classroom: the speaker notes (hers, not theirs), the
   quiz and its answers, and the voting and ranking slides, which mean
   nothing without a room. What it keeps is every work, every idea, the
   discussion questions and the vocabulary.

   PDF is the browser's own print dialogue — Save as PDF. That is the
   one route that works on a laptop and on a phone, with no library and
   no server, and it is what the print stylesheet at the end of
   shared/style.css is for.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var ZH = !!window.ZHMODE;
  var head = document.getElementById('head');
  var out = document.getElementById('out');

  var T = ZH ? {
    kicker: '重點複習',
    unit: function (n) { return '第 ' + n + ' 單元'; },
    pdf: '下載 PDF',
    pdfHint: '會開啟瀏覽器的列印視窗 — 選「儲存為 PDF」',
    deck: '開啟簡報',
    course: '當代藝術史',
    intro: '這一份是課堂簡報的整理：所有作品與概念、討論題，以及關鍵詞彙。課堂上的測驗與活動步驟不在裡面。',
    ask: '想一想',
    watch: '注意看',
    discuss: '討論題',
    vocabHead: '關鍵詞彙',
    vocabMore: '完整詞彙表',
    video: '影片',
    openVideo: '在 YouTube 開啟',
    openDm: '在 Dailymotion 開啟',
    inDeck: '影片在簡報裡播放',
    pick: '選一個單元',
    missing: '找不到這個單元。'
  } : {
    kicker: 'Key review',
    unit: function (n) { return 'Unit ' + n; },
    pdf: 'Download PDF',
    pdfHint: 'Opens your browser’s print dialogue — choose Save as PDF',
    deck: 'Open the deck',
    course: 'Contemporary Art History',
    intro: 'Everything from the lecture: the works, the ideas, the discussion questions and the vocabulary. The quiz and the in-class activities are not here.',
    ask: 'Think about',
    watch: 'Watch for',
    discuss: 'Discussion',
    vocabHead: 'Key vocabulary',
    vocabMore: 'The full glossary',
    video: 'Video',
    openVideo: 'Open on YouTube',
    openDm: 'Open on Dailymotion',
    inDeck: 'The video plays in the deck',
    pick: 'Choose a unit',
    missing: 'No such unit.'
  };

  /* ---------- which unit ---------- */
  var asked = (new URLSearchParams(location.search).get('unit') || '').replace(/[^0-9]/g, '');
  var n = parseInt(asked, 10);
  var dir = (n >= 1 && n <= 99) ? 'unit' + (n < 10 ? '0' + n : n) : null;

  function script(src) {
    return new Promise(function (ok, fail) {
      var s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = fail;
      document.head.appendChild(s);
    });
  }

  script('../units.js')
    .then(function () { return dir ? script('../' + dir + '/content.js') : null; })
    .then(function () { return (dir && ZH) ? script('../' + dir + '/content.zh.js').catch(function () {}) : null; })
    .then(start)
    .catch(function () { head.innerHTML = '<h1>' + T.missing + '</h1>'; });

  /* ---------- Chinese, exactly as the deck does it ---------- */
  var KEEP = { type: 1, yt: 1, dm: 1, poster: 1, src: 1, terms: 1, answer: 1,
               n: 1, of: 1, minutes: 1, oneClick: 1, zh: 1, zhDef: 1, zhChip: 1 };
  function translate(slides) {
    var map = window.ZH || {};
    function tr(v) {
      if (typeof v === 'string') return Object.prototype.hasOwnProperty.call(map, v) ? map[v] : v;
      if (Array.isArray(v)) return v.map(tr);
      if (v && typeof v === 'object') {
        var o = {};
        for (var k in v) o[k] = KEEP[k] ? v[k] : tr(v[k]);
        return o;
      }
      return v;
    }
    /* `zh` is the small line under a heading. In English mode it holds
       the Chinese; in Chinese mode it holds the English, so the term is
       met in both — the same swap the deck makes, and it has to happen
       before the title is translated out from under it. */
    return slides.map(function (s) {
      var x = tr(s);
      if (s.zh && s.title) x.zh = enOf(s.title);
      return x;
    });
  }

  /* ---------- helpers ---------- */
  var G = {};
  function chip(s) {
    if (s == null) return '';
    return String(s).replace(/\{\{(\w+)\}\}/g, function (m, k) {
      var g = G[k];
      if (!g) return k;
      return '<b class="rv-term">' + (ZH ? (g.zhChip || g.zh) : g.en) + '</b>';
    });
  }
  function enOf(s) {
    return String(s || '').replace(/\{\{(\w+)\}\}/g, function (m, k) { return G[k] ? G[k].en : k; });
  }
  /* The heading, with the other language underneath it — the same
     bargain the deck strikes, so a term is always met in both. */
  function heading(s) {
    if (!s.title) return '';
    var alt = s.zh || '';
    return '<h3>' + chip(s.title) + '</h3>' +
           (alt ? '<p class="rv-alt" lang="' + (ZH ? 'en' : 'zh-Hant') + '">' + alt + '</p>' : '');
  }
  function list(items, cls) {
    if (!items || !items.length) return '';
    return '<ul class="' + (cls || '') + '">' +
      items.map(function (t) { return '<li>' + chip(t) + '</li>'; }).join('') + '</ul>';
  }
  function pairs(items) {
    if (!items || !items.length) return '';
    return '<ul class="rv-pairs">' + items.map(function (it) {
      return '<li><b>' + chip(it.head || it.label || '') + '</b>' +
             (it.body ? '<span>' + chip(it.body) + '</span>' : '') + '</li>';
    }).join('') + '</ul>';
  }
  function prompt(label, text) {
    return text ? '<p class="rv-ask"><span>' + label + '</span>' + chip(text) + '</p>' : '';
  }
  function fig(src, cap) {
    if (!src) return '';
    return '<figure><img src="../' + dir + '/' + src + '" alt="" loading="lazy">' +
           (cap ? '<figcaption>' + chip(cap) + '</figcaption>' : '') + '</figure>';
  }

  /* ---------- one slide ---------- */
  /* Everything the class saw on screen, and nothing it did. A slide type
     missing from here is deliberate: title and section are already in the
     headings, quiz/rank/match/vote need a room, end is a word list that
     the vocabulary section below covers in full. */
  function block(s) {
    switch (s.type) {

      case 'bullets':
        return heading(s) + prompt(T.ask, s.ask) + pairs(s.items);

      case 'twocol':
        return heading(s) + '<div class="rv-two">' +
          [s.left, s.right].map(function (c) {
            return '<div><h4>' + chip(c.head) + '</h4>' +
              '<p class="rv-alt" lang="' + (ZH ? 'en' : 'zh-Hant') + '">' +
                (ZH ? enOf(c.head) : (c.zh || '')) + '</p>' +
              (c.lead ? '<p class="rv-lead">' + chip(c.lead) + '</p>' : '') +
              list(c.items) + '</div>';
          }).join('') + '</div>';

      case 'artwork':
        return heading(s) + fig(s.src, s.caption) + prompt(T.ask, s.ask) + list(s.points);

      case 'compare':
        return heading(s) + prompt(T.ask, s.ask) +
          '<div class="rv-two">' + fig(s.left && s.left.src, s.left && s.left.label) +
                                   fig(s.right && s.right.src, s.right && s.right.label) + '</div>' +
          list((s.reveal || []).map(function (r) { return r.text; }));

      case 'gallery':
        return heading(s) +
          '<div class="rv-gal">' + (s.images || []).map(function (i) { return fig(i.src); }).join('') + '</div>' +
          (s.caption ? '<p class="rv-cap">' + chip(s.caption) + '</p>' : '') +
          prompt(T.ask, s.ask) + list(s.points);

      case 'video':
        var where = s.yt
          ? '<a href="https://www.youtube.com/watch?v=' + s.yt + '" target="_blank" rel="noopener">' + T.openVideo + '</a>'
          : s.dm
            ? '<a href="https://www.dailymotion.com/video/' + s.dm + '" target="_blank" rel="noopener">' + T.openDm + '</a>'
            : T.inDeck;
        return heading(s) +
          (s.poster ? fig(s.poster, s.caption) : (s.caption ? '<p class="rv-cap">' + chip(s.caption) + '</p>' : '')) +
          '<p class="rv-cap">' + T.video + ' · ' + where + '</p>' +
          prompt(T.watch, s.watchFor) + list(s.points);

      case 'quote':
        return heading(s) +
          '<blockquote>' + chip(s.quote) +
            (s.cite ? '<cite>' + s.cite + '</cite>' : '') + '</blockquote>' +
          list(s.plain) + prompt(T.ask, s.ask);

      case 'grid':
        return heading(s) + '<div class="rv-cards">' + (s.cells || []).map(function (c) {
          return '<div><span class="rv-label">' + chip(c.label || '') + '</span>' +
                 '<b>' + chip(c.head || '') + '</b>' +
                 (c.body ? '<span>' + chip(c.body) + '</span>' : '') + '</div>';
        }).join('') + '</div>';

      case 'flow':
        return heading(s) + pairs(s.stages) +
          (s.foot ? '<p class="rv-foot">' + chip(s.foot) + '</p>' : '');

      case 'timeline':
        return heading(s) + '<ul class="rv-pairs">' + (s.stops || []).map(function (st) {
          return '<li><b>' + chip(st.when) + '</b><span>' + chip(st.what) + '</span></li>';
        }).join('') + '</ul>';

      case 'break':
        return heading(s) +
          (s.chain ? '<p class="rv-chain">' + s.chain.join(' → ') + '</p>' : '') +
          (s.chainLabel ? '<p class="rv-cap">' + chip(s.chainLabel) + '</p>' : '') +
          (s.after ? '<p class="rv-lead"><b>' + chip(s.after.label) + '</b></p>' + list(s.after.items) : '');

      case 'activity':
        return '<h3>' + (s.title ? chip(s.title) : T.discuss) + '</h3>' +
               '<ol class="rv-q">' + (s.questions || []).map(function (q) {
                 return '<li>' + chip(q) + '</li>';
               }).join('') + '</ol>';

      case 'word':
        return '<p class="rv-word">' + chip(s.word) + '</p>';

      default:
        return '';
    }
  }

  /* ---------- the page ---------- */
  function start() {
    /* units.js, content.js and content.zh.js all declare their data with
       `const`, which lives in the shared global scope but never on
       `window` — so these are read by name, guarded in case a file is
       missing. */
    var ALL = (typeof UNITS !== 'undefined') ? UNITS : [];

    if (!dir || typeof SLIDES === 'undefined') {
      head.innerHTML = '<h1>' + T.missing + '</h1>';
      out.innerHTML = '<p class="rv-pick">' + T.pick + '</p><ul class="rv-list">' +
        ALL.filter(function (u) { return u.dir; }).map(function (u) {
          return '<li><a href="?unit=' + u.n + (ZH ? '&lang=zh' : '') + '">' +
                 T.unit(u.n) + ' · ' + (ZH ? u.zhTitle : u.title) + '</a></li>';
        }).join('') + '</ul>';
      return;
    }

    G = GLOSSARY;
    var slides = ZH ? translate(SLIDES) : SLIDES.slice();
    var secs = SECTIONS.map(function (s) {
      return { title: ZH ? (s.zh || s.title) : s.title,
               alt:   ZH ? s.title : s.zh,
               start: s.start };
    });
    var meta = ALL.filter(function (u) { return u.dir === dir; })[0] || {};
    var title = ZH ? (meta.zhTitle || '') : (meta.title || '');
    var q = ZH ? (meta.zhQ || '') : (meta.q || '');

    document.title = (ZH ? T.unit(n) + ' ' + T.kicker : T.kicker + ' · ' + T.unit(n)) +
                     (title ? ' · ' + title : '');

    head.innerHTML =
      '<div class="course-kicker"><a href="../">' + T.course + '</a> · ' + T.kicker + '</div>' +
      '<h1>' + T.unit(n) + (title ? '<span class="rv-h1">' + title + '</span>' : '') + '</h1>' +
      (q ? '<p class="rv-q1">' + q + '</p>' : '') +
      '<p class="course-sub">' + T.intro + '</p>' +
      '<div class="rv-tools">' +
        '<button id="btn-pdf" class="rv-btn">' + T.pdf + '</button>' +
        '<a class="rv-btn ghost" href="../' + dir + '/' + (ZH ? '?lang=zh' : '') + '">' + T.deck + '</a>' +
        '<button id="btn-lang" class="lang-btn" data-zh="EN">中文</button>' +
      '</div>' +
      '<p class="rv-hint">' + T.pdfHint + '</p>';

    var html = '';
    secs.forEach(function (sec, i) {
      var end = secs[i + 1] ? secs[i + 1].start : slides.length;
      var body = '';
      for (var j = sec.start; j < end; j++) {
        var b = block(slides[j]);
        if (b) body += '<section class="rv-b">' + b + '</section>';
      }
      if (!body) return;
      html += '<section class="rv-part"><h2>' + sec.title +
              (sec.alt ? '<span lang="' + (ZH ? 'en' : 'zh-Hant') + '">' + sec.alt + '</span>' : '') +
              '</h2>' + body + '</section>';
    });

    /* The glossary last, because that is where you look things up. */
    var terms = Object.keys(G);
    if (terms.length) {
      html += '<section class="rv-part rv-vocab"><h2>' + T.vocabHead + '</h2><dl>' +
        terms.map(function (k) {
          var g = G[k];
          return '<dt>' + g.en + '<span lang="zh-Hant">' + g.zh + '</span></dt>' +
                 '<dd>' + (ZH ? (g.zhDef || g.def || '') : (g.def || '')) + '</dd>';
        }).join('') + '</dl>' +
        '<p class="rv-cap"><a href="../vocab/' + (ZH ? '?lang=zh' : '') + '">' + T.vocabMore + ' →</a></p>' +
        '</section>';
    }

    out.innerHTML = html;
    applyLang();
    document.getElementById('btn-pdf').onclick = function () { window.print(); };
    document.getElementById('btn-lang').onclick = function () { switchLang(); };
  }
})();
