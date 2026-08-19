/* ------------------------------------------------------------------
   Deck engine.

   Keys
     → / Space / click     next build step, then next slide
     ←                     back
     Backspace             return to where you jumped from
     M                     section menu
     N                     peek at speaker notes on this screen
     P                     open the presenter window (second screen)
     F                     fullscreen
     Esc                   close whatever is open
   ------------------------------------------------------------------ */

(function () {
  'use strict';

  const isPresenter = new URLSearchParams(location.search).has('presenter');
  const CH = 'vicky-modern-art';

  /* ---------- helpers ---------- */
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* Turn {{term}} into a tappable chip. Anything not in GLOSSARY is
     left as plain text, so a typo degrades quietly instead of vanishing. */
  function chips(s) {
    if (s == null) return '';
    return String(s).replace(/\{\{(\w+)\}\}/g, (m, key) => {
      const g = GLOSSARY[key];
      if (!g) return m.replace(/[{}]/g, '');
      return `<span class="chip" data-term="${key}">${g.en}</span>`;
    });
  }
  /* Same, but strips the markup — for the presenter window and menu. */
  function plainText(s) {
    if (s == null) return '';
    return String(s)
      .replace(/\{\{(\w+)\}\}/g, (m, k) => (GLOSSARY[k] ? GLOSSARY[k].en : k))
      .replace(/<[^>]+>/g, '');
  }

  /* ---------- how many click-steps each slide has ---------- */
  function stepsFor(s) {
    switch (s.type) {
      case 'bullets':  return s.items.length + (s.ask ? 1 : 0);
      case 'quote':    return (s.plain ? 1 : 0) + (s.ask ? 1 : 0);
      case 'compare':  return s.reveal ? s.reveal.length : 0;
      case 'artwork':  return s.points ? s.points.length : 0;
      case 'twocol':   return 2;
      case 'break':    return 2;
      case 'quiz':     return 1;
      case 'section':  return s.ask ? 1 : 0;
      case 'activity': return s.questions ? s.questions.length : 0;
      case 'grid':     return s.cells.length;
      case 'flow':     return s.stages.length;
      case 'timeline': return s.stops.length;
      case 'rank':     return s.questions ? s.questions.length : 0;
      case 'video':    return s.points ? s.points.length : 0;
      default:         return 0;
    }
  }

  /* ---------- slide titles, for the menu and presenter ---------- */
  function titleOf(s) {
    if (s.type === 'word') return `“${s.word}”`;
    if (s.type === 'quiz') return `Q${s.n}`;
    return plainText(s.title || s.q || '—');
  }

  /* =================================================================
     PRESENTER WINDOW
     ================================================================= */
  if (isPresenter) {
    document.body.className = 'presenter';
    const root = el('div', 'pv');
    document.body.appendChild(root);

    const start = Date.now();
    let idx = 0, step = 0;

    function draw() {
      const s = SLIDES[idx], nx = SLIDES[idx + 1];
      const mins = Math.floor((Date.now() - start) / 60000);
      const notes = (s.notes || []).map(t => {
        let cls = '';
        if (/^(TEACHER|LEWIS|NOTE|CORRECTED)/.test(t) || /^TEACHER/.test(t)) cls = 'teach';
        if (/^ASK/.test(t)) cls = 'ask';
        return `<p class="${cls}">${chips(t)}</p>`;
      }).join('');

      root.innerHTML = `
        <div class="pv-top">
          <div class="where">${idx + 1} / ${SLIDES.length} · ${titleOf(s)}</div>
          <div class="clock">step ${step}/${stepsFor(s)} · ${mins} min elapsed</div>
        </div>
        <h3>Say this</h3>
        <div class="notes">${notes || '<p>—</p>'}</div>
        <div class="next"><div>Next up</div>
          <div class="n-title">${nx ? titleOf(nx) : 'End of deck'}</div></div>
        <div class="pv-nav">
          <button data-go="prev">← Back</button>
          <button data-go="next">Next →</button>
        </div>`;
      root.querySelectorAll('[data-go]').forEach(b => {
        b.onclick = () => post({ nav: b.dataset.go });
      });
    }

    const bc = ('BroadcastChannel' in window) ? new BroadcastChannel(CH) : null;
    function post(msg) {
      if (bc) bc.postMessage(msg);
      else localStorage.setItem(CH + ':cmd', JSON.stringify({ ...msg, t: Date.now() }));
    }
    function receive(d) {
      if (!d || d.nav) return;
      idx = d.idx; step = d.step; draw();
    }
    if (bc) bc.onmessage = e => receive(e.data);
    window.addEventListener('storage', e => {
      if (e.key === CH + ':state') receive(JSON.parse(e.newValue));
    });

    const saved = localStorage.getItem(CH + ':state');
    if (saved) receive(JSON.parse(saved));
    draw();
    setInterval(draw, 20000);

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); post({ nav: 'next' }); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); post({ nav: 'prev' }); }
    });
    return;
  }

  /* =================================================================
     MAIN DECK
     ================================================================= */
  const stage = document.getElementById('stage');
  const progress = document.getElementById('progress');
  const menu = document.getElementById('menu');
  const peek = document.getElementById('peek');
  const chipcard = document.getElementById('chipcard');
  const lightbox = document.getElementById('lightbox');
  const counter = document.getElementById('count');
  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');

  let idx = 0, step = 0, jumpFrom = null, presenterWin = null;

  /* Scale the whole deck off the viewport so it reads from the back row. */
  function fit() {
    const base = Math.min(window.innerWidth / 78, window.innerHeight / 46);
    stage.style.fontSize = Math.max(11, Math.min(26, base)) + 'px';
  }
  window.addEventListener('resize', fit);

  /* ---------- render every slide once ---------- */
  const nodes = SLIDES.map((s, i) => {
    const n = el('div', 'slide s-' + s.type);
    n.dataset.i = i;
    n.innerHTML = render(s, i);
    stage.appendChild(n);
    return n;
  });

  function askBlock(text, stepped) {
    return `<div class="ask ${stepped ? 'step' : ''}" ${stepped ? 'data-step="ask"' : ''}>
      <span class="tag">ASK</span><span class="q">${chips(text)}</span></div>`;
  }

  function render(s, i) {
    switch (s.type) {

      case 'title':
        return `<div class="meta">${s.meta || ''}</div>
          <h1>${chips(s.title)}</h1>
          <div class="sub">${chips(s.sub)}</div>`;

      case 'word':
        return `<div class="big">${s.word}</div>`;

      case 'section':
        return `<h1>${chips(s.title)}</h1>
          ${s.sub ? `<div class="sub">${chips(s.sub)}</div>` : ''}
          ${s.ask ? askBlock(s.ask, true) : ''}`;

      case 'bullets':
        return `${s.kicker ? `<div class="kicker">${s.kicker}</div>` : ''}
          <h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          <ul>${s.items.map((it, k) => `
            <li class="step" data-step="${k}">
              <div class="head">${chips(it.head)}</div>
              ${it.body ? `<div class="body">${chips(it.body)}</div>` : ''}
            </li>`).join('')}</ul>
          ${s.ask ? askBlock(s.ask, true) : ''}`;

      /* `src` is optional — a photograph of the document the quote comes
         from. With one, the slide splits into two columns. */
      case 'quote': {
        const body = `${s.kicker ? `<div class="kicker">${s.kicker}</div>` : ''}
          <h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          ${s.lead ? `<div class="lead">${chips(s.lead)}</div>` : ''}
          <blockquote>${chips(s.quote)}</blockquote>
          <cite>${s.cite}</cite>
          ${s.plain ? `<div class="plain step" data-step="plain">
            <div class="plain-label">In simple words</div>
            ${s.plain.map(p => `<p>${chips(p)}</p>`).join('')}</div>` : ''}
          ${s.ask ? askBlock(s.ask, true) : ''}`;
        if (!s.src) return body;
        return `<div class="q-body">${body}</div>
          <div class="q-doc"><img src="${s.src}" alt="">
            ${s.srcLabel ? `<div class="doc-lbl">${s.srcLabel}</div>` : ''}</div>`;
      }

      case 'compare':
        return `<h2>${chips(s.title)}</h2>
          ${s.ask ? askBlock(s.ask, false) : ''}
          <div class="compare-wrap">
            <div class="compare-pane" data-side="left">
              <img src="${s.left.src}" alt="">
              <div class="lbl">${s.left.label}</div></div>
            <div class="compare-pane" data-side="right">
              <img src="${s.right.src}" alt="">
              <div class="lbl">${s.right.label}</div></div>
          </div>
          <div class="compare-note"></div>`;

      case 'artwork':
        return `<div class="art"><img src="${s.src}" alt="" data-soft="${!!s.smallSource}"></div>
          <div class="side">
            <h2>${chips(s.title)}</h2>
            <div class="cap">${s.caption}</div>
            ${s.ask ? askBlock(s.ask, false) : ''}
            <ul class="points">${(s.points || []).map((p, k) =>
              `<li class="step" data-step="${k}">${chips(p)}</li>`).join('')}</ul>
            <div class="zoom-hint">Click the picture to zoom${s.smallSource ? ' (small source — stays modest on purpose)' : ''}</div>
          </div>`;

      case 'twocol':
        return `<h2>${chips(s.title)}</h2>
          <div class="cols">
            ${['left', 'right'].map((side, k) => {
              const c = s[side];
              return `<div class="col step" data-step="${k}">
                <h3>${chips(c.head)}</h3>
                <div class="zh">${c.zh}</div>
                <div class="lead">${chips(c.lead)}</div>
                <ul>${c.items.map(x => `<li>${chips(x)}</li>`).join('')}</ul>
              </div>`;
            }).join('')}
          </div>`;

      case 'break':
        return `<h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          <div class="chain-label">${s.chainLabel}</div>
          <div class="chain">${s.chain.map((c, k) =>
            `<span>${c}</span>${k < s.chain.length - 1 ? '<i>→</i>' : ''}`).join('')}</div>
          <div class="after step" data-step="1">
            <div class="after-label">${s.after.label}</div>
            <ul>${s.after.items.map(x => `<li>${chips(x)}</li>`).join('')}</ul>
          </div>`;

      case 'activity':
        return `<div class="left">
            <h2>${chips(s.title)}</h2>
            ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
            <ul>${s.instructions.map(x => `<li>${chips(x)}</li>`).join('')}</ul>
            ${s.questions ? `<ul class="q-list">${s.questions.map((q, k) =>
              `<li class="step" data-step="${k}">${chips(q)}</li>`).join('')}</ul>` : ''}
            ${s.ask ? askBlock(s.ask, false) : ''}
            <div class="timer" data-mins="${s.minutes}">
              <div class="clock">${String(s.minutes).padStart(2, '0')}:00</div>
              <button data-timer="start">Start</button>
              <button data-timer="reset">Reset</button>
            </div>
          </div>
          <div class="right">${s.timeline ? `<ul class="tl">${s.timeline.map(([y, m]) =>
            `<li><span class="yr">${y}</span><span>${m}</span></li>`).join('')}</ul>` : ''}</div>`;

      /* A video sits behind a facade until she clicks it: seven YouTube
         players loading at once would stall the whole deck, and nothing
         should start playing because a slide scrolled past. */
      case 'video':
        return `<div class="vid">
            <div class="vid-frame" data-yt="${s.yt || ''}" data-src="${s.src || ''}"
                 ${s.poster ? `style="background-image:url(${s.poster})"` : ''}>
              <button class="vid-play" aria-label="Play"><span>▶</span></button>
            </div>
            ${s.watchFor ? `<div class="vid-watch"><span class="tag">WATCH FOR</span>${chips(s.watchFor)}</div>` : ''}
          </div>
          <div class="side">
            <h2>${chips(s.title)}</h2>
            <div class="cap">${s.caption}</div>
            <ul class="points">${(s.points || []).map((p, k) =>
              `<li class="step" data-step="${k}">${chips(p)}</li>`).join('')}</ul>
            ${s.yt ? `<div class="zoom-hint">Needs internet · <a href="https://www.youtube.com/watch?v=${s.yt}" target="_blank" rel="noopener">open on YouTube</a></div>`
                   : '<div class="zoom-hint">Plays from this site — no internet needed</div>'}
          </div>`;

      /* Four stages with arrows between them — a theory traced from raw
         material to finished practice. Revealed one stage at a time. */
      case 'flow':
        return `${s.kicker ? `<div class="kicker">${s.kicker}</div>` : ''}
          <h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          <div class="stages">${s.stages.map((st, k) => `
            <div class="stage step" data-step="${k}">
              <div class="stage-head">${chips(st.head)}</div>
              <div class="stage-body">${chips(st.body)}</div>
            </div>${k < s.stages.length - 1 ? '<i class="stage-arrow">→</i>' : ''}`).join('')}</div>
          ${s.foot ? `<div class="stage-foot">${chips(s.foot)}</div>` : ''}`;

      /* A story told in dated stops. */
      case 'timeline':
        return `<h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          <ol class="stops">${s.stops.map((st, k) => `
            <li class="stop step" data-step="${k}">
              <div class="stop-when">${st.when}</div>
              <div class="stop-what">${chips(st.what)}</div>
            </li>`).join('')}</ol>`;

      case 'grid':
        return `${s.kicker ? `<div class="kicker">${s.kicker}</div>` : ''}
          <h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          <div class="cells">${s.cells.map((c, k) => `
            <div class="cell step" data-step="${k}">
              <div class="cell-label">${c.label}</div>
              <div class="cell-head">${chips(c.head)}</div>
              ${c.body ? `<div class="cell-body">${chips(c.body)}</div>` : ''}
            </div>`).join('')}</div>`;

      /* Ranking board. Groups argue on paper; one group then comes to the
         screen and puts the cards in their order for the share-out. */
      case 'rank':
        return `<div class="left">
            <h2>${chips(s.title)}</h2>
            ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
            <div class="rank-task">${chips(s.task)}</div>
            <div class="rank-cards">${s.items.map((it, k) => `
              <button class="rank-card" data-card="${k}">
                <span class="rank-badge"></span>
                ${it.src ? `<img src="${it.src}" alt="">`
                         : `<span class="rank-glyph"><span class="g">${it.glyph}</span></span>`}
                <span class="rank-lbl">${it.label}</span>
              </button>`).join('')}</div>
            <div class="rank-tools">
              <button data-rank="reset">Clear the order</button>
              <span class="rank-hint">Click the cards in order · click a numbered card to take it out</span>
            </div>
          </div>
          <div class="right">
            <ul class="q-list">${s.questions.map((q, k) =>
              `<li class="step" data-step="${k}">${chips(q)}</li>`).join('')}</ul>
            <div class="timer" data-mins="${s.minutes}">
              <div class="clock">${String(s.minutes).padStart(2, '0')}:00</div>
              <button data-timer="start">Start</button>
              <button data-timer="reset">Reset</button>
            </div>
          </div>`;

      case 'quiz':
        return `<div class="qnum">Question ${s.n} of ${s.of || 6}</div>
          <div class="qtext">${chips(s.q)}</div>
          <ul class="opts">${s.options.map((o, k) =>
            `<li class="${k === s.answer ? 'right' : ''}">
              <span class="k">${'ABCD'[k]}</span><span>${chips(o)}</span></li>`).join('')}</ul>
          <div class="why">${chips(s.why)}</div>
          <div class="reveal-hint">Click when the class has answered</div>`;

      case 'terms':
      case 'end':
        return `<h2>${chips(s.title)}</h2>
          ${s.zh ? `<div class="zh-title">${s.zh}</div>` : ''}
          <div class="termgrid">${s.terms.map(t =>
            `<span class="chip" data-term="${t}">${GLOSSARY[t].en}</span>`).join('')}</div>`;

      default:
        return '<h2>?</h2>';
    }
  }

  /* ---------- show a slide at a given step ---------- */
  function show(newIdx, newStep) {
    idx = Math.max(0, Math.min(SLIDES.length - 1, newIdx));
    const s = SLIDES[idx];
    step = Math.max(0, Math.min(stepsFor(s), newStep));

    nodes.forEach((n, i) => n.classList.toggle('active', i === idx));
    const node = nodes[idx];

    /* Tear any player down on the way out, so sound never follows her
       to the next slide. */
    nodes.forEach((n, i) => {
      if (i === idx) return;
      n.querySelectorAll('.vid-frame.loaded').forEach(f => {
        f.classList.remove('loaded');
        f.innerHTML = '<button class="vid-play" aria-label="Play"><span>\u25B6</span></button>';
      });
    });

    /* Build steps: reveal in order. */
    node.querySelectorAll('.step').forEach((n, order) => {
      n.classList.toggle('shown', order < step);
    });

    if (s.type === 'compare') {
      const note = node.querySelector('.compare-note');
      const r = step > 0 ? s.reveal[step - 1] : null;
      const tag = r ? (r.tag || (r.side === 'left' ? s.left.tag : s.right.tag)) : '';
      note.innerHTML = r
        ? `${tag ? `<span class="side-tag">${tag}</span>` : ''}${chips(r.text)}`
        : '';
      node.querySelectorAll('.compare-pane').forEach(p => {
        p.classList.toggle('dim', !!r && p.dataset.side !== r.side);
      });
    }
    if (s.type === 'break') node.classList.toggle('broken', step >= 1);
    if (s.type === 'quiz')  node.classList.toggle('revealed', step >= 1);

    progress.style.width = ((idx + 1) / SLIDES.length * 100) + '%';
    counter.textContent = (idx + 1) + ' / ' + SLIDES.length;

    /* Grey the arrows out at the two ends, so it is obvious there is
       nothing further in that direction. */
    navPrev.disabled = (idx === 0 && step === 0);
    navNext.disabled = (idx === SLIDES.length - 1 && step === stepsFor(s));
    if (peek.classList.contains('on')) drawPeek();
    sync();
  }

  function next() {
    if (step < stepsFor(SLIDES[idx])) show(idx, step + 1);
    else if (idx < SLIDES.length - 1) show(idx + 1, 0);
  }
  function prev() {
    if (step > 0) show(idx, step - 1);
    else if (idx > 0) show(idx - 1, stepsFor(SLIDES[idx - 1]));
  }
  function jump(i) {
    jumpFrom = idx;
    closeMenu();
    show(i, 0);
  }

  /* ---------- speaker-note peek on the presenting screen ---------- */
  function drawPeek() {
    const s = SLIDES[idx];
    peek.innerHTML = `<div class="peek-label">Notes · slide ${idx + 1} · press N to hide</div>` +
      (s.notes || []).map(t => {
        const cls = /^(TEACHER|LEWIS|NOTE|CORRECTED)/.test(t) ? 'teach' : '';
        return `<p class="${cls}">${chips(t)}</p>`;
      }).join('');
  }

  /* ---------- section menu ---------- */
  function buildMenu() {
    const body = el('div');
    SECTIONS.forEach((sec, si) => {
      const end = (SECTIONS[si + 1] ? SECTIONS[si + 1].start : SLIDES.length);
      const box = el('div', 'sec');
      box.appendChild(el('div', 'sec-head', sec.title));
      box.appendChild(el('div', 'sec-zh', sec.zh));
      const items = el('div', 'items');
      for (let i = sec.start; i < end; i++) {
        const b = el('button', '', (i + 1) + ' · ' + titleOf(SLIDES[i]));
        b.dataset.i = i;
        b.onclick = e => { e.stopPropagation(); jump(i); };
        items.appendChild(b);
      }
      box.appendChild(items);
      body.appendChild(box);
    });
    menu.innerHTML = '<h2>Jump to</h2>';
    menu.appendChild(body);
    menu.appendChild(el('div', 'hint',
      'Backspace takes you back to where you jumped from. · N = notes on this screen · P = presenter window'));
  }
  function openMenu() {
    menu.classList.add('on');
    menu.querySelectorAll('.items button').forEach(b =>
      b.classList.toggle('here', +b.dataset.i === idx));
  }
  function closeMenu() { menu.classList.remove('on'); }

  /* ---------- chip popover ---------- */
  function openChip(node, key) {
    const g = GLOSSARY[key];
    if (!g) return;
    chipcard.innerHTML = `
      <div class="term">${g.en}</div>
      <div class="term-zh">${g.zh}</div>
      <div class="def">${g.def}</div>
      <div class="def-zh">${g.zhDef}</div>`;
    chipcard.classList.add('on');
    const r = node.getBoundingClientRect();
    const w = chipcard.offsetWidth, h = chipcard.offsetHeight;
    let x = r.left + r.width / 2 - w / 2;
    let y = r.bottom + 12;
    if (y + h > window.innerHeight - 12) y = r.top - h - 12;
    chipcard.style.left = Math.max(12, Math.min(window.innerWidth - w - 12, x)) + 'px';
    chipcard.style.top = Math.max(12, y) + 'px';
  }
  function closeChip() { chipcard.classList.remove('on'); }

  /* ---------- zoom ---------- */
  function openZoom(img) {
    lightbox.querySelector('img').src = img.src;
    lightbox.classList.toggle('soft', img.dataset.soft === 'true');
    lightbox.querySelector('.lb-note').textContent =
      img.dataset.soft === 'true'
        ? 'Low-resolution source — shown small so it holds together'
        : 'Click anywhere to close';
    lightbox.classList.add('on');
  }
  function closeZoom() { lightbox.classList.remove('on'); }

  /* ---------- activity timers ---------- */
  const timers = new WeakMap();
  function tick(box) {
    const st = timers.get(box);
    if (!st || !st.running) return;
    const left = st.end - Date.now();
    const clock = box.querySelector('.clock');
    if (left <= 0) {
      clock.textContent = '00:00';
      box.classList.remove('running'); box.classList.add('done');
      st.running = false;
      return;
    }
    const m = Math.floor(left / 60000), sec = Math.floor(left % 60000 / 1000);
    clock.textContent = String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
  }
  setInterval(() => document.querySelectorAll('.timer').forEach(tick), 250);

  /* ---------- ranking board ----------
     Order lives only in the DOM. Nothing is stored, and a reload clears it —
     these are one group's opinion during a share-out, not a record. */
  function paintRank(board) {
    const order = board.dataset.order ? board.dataset.order.split(',') : [];
    board.querySelectorAll('.rank-card').forEach(c => {
      const pos = order.indexOf(c.dataset.card);
      c.classList.toggle('ranked', pos >= 0);
      c.querySelector('.rank-badge').textContent = pos >= 0 ? pos + 1 : '';
    });
  }
  function rankClick(card) {
    const board = card.closest('.rank-cards');
    const order = board.dataset.order ? board.dataset.order.split(',') : [];
    const at = order.indexOf(card.dataset.card);
    if (at >= 0) order.splice(at, 1);
    else order.push(card.dataset.card);
    board.dataset.order = order.join(',');
    paintRank(board);
  }

  /* ---------- presenter sync ---------- */
  const bc = ('BroadcastChannel' in window) ? new BroadcastChannel(CH) : null;
  function sync() {
    const state = { idx, step };
    localStorage.setItem(CH + ':state', JSON.stringify(state));
    if (bc) bc.postMessage(state);
  }
  if (bc) bc.onmessage = e => {
    if (e.data && e.data.nav === 'next') next();
    if (e.data && e.data.nav === 'prev') prev();
  };
  window.addEventListener('storage', e => {
    if (e.key === CH + ':cmd') {
      const d = JSON.parse(e.newValue);
      if (d.nav === 'next') next();
      if (d.nav === 'prev') prev();
    }
  });
  function openPresenter() {
    if (presenterWin && !presenterWin.closed) { presenterWin.focus(); return; }
    presenterWin = window.open(
      location.pathname + '?presenter=1', 'presenter',
      'width=900,height=800'
    );
    setTimeout(sync, 600);
  }

  /* ---------- input ---------- */
  document.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (chip) { e.stopPropagation(); openChip(chip, chip.dataset.term); return; }
    if (chipcard.contains(e.target)) return;
    closeChip();

    if (lightbox.classList.contains('on')) { closeZoom(); return; }

    const img = e.target.closest('.s-artwork img, .compare-pane img, .q-doc img');
    if (img) { openZoom(img); return; }

    /* Load a video player on demand, and swallow every click inside one —
       otherwise pressing pause would also advance the slide. */
    const frame = e.target.closest('.vid-frame');
    if (frame) {
      if (!frame.classList.contains('loaded')) {
        frame.classList.add('loaded');
        const yt = frame.dataset.yt, src = frame.dataset.src;
        frame.innerHTML = yt
          ? `<iframe src="https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0"
               allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
               allowfullscreen title="video"></iframe>`
          : `<video src="${src}" controls autoplay playsinline></video>`;
      }
      return;
    }
    if (e.target.closest('.vid')) return;

    const card = e.target.closest('.rank-card');
    if (card) { rankClick(card); return; }
    const rr = e.target.closest('[data-rank="reset"]');
    if (rr) {
      const board = rr.closest('.slide').querySelector('.rank-cards');
      board.dataset.order = '';
      paintRank(board);
      return;
    }

    const tb = e.target.closest('[data-timer]');
    if (tb) {
      const box = tb.closest('.timer');
      const mins = +box.dataset.mins;
      if (tb.dataset.timer === 'start') {
        timers.set(box, { running: true, end: Date.now() + mins * 60000 });
        box.classList.add('running'); box.classList.remove('done');
      } else {
        timers.set(box, { running: false });
        box.classList.remove('running', 'done');
        box.querySelector('.clock').textContent = String(mins).padStart(2, '0') + ':00';
      }
      return;
    }

    if (menu.classList.contains('on')) return;
    if (e.target.closest('#hud') || e.target.closest('#nav')) return;
    if (peek.contains(e.target)) return;
    next();
  });

  document.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'Escape') {
      closeMenu(); closeChip(); closeZoom(); peek.classList.remove('on'); return;
    }
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') { e.preventDefault(); next(); return; }
    if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); prev(); return; }
    if (k === 'Home') { show(0, 0); return; }
    if (k === 'End') { show(SLIDES.length - 1, 0); return; }
    if (k === 'Backspace') {
      e.preventDefault();
      if (jumpFrom != null) { const b = jumpFrom; jumpFrom = null; show(b, stepsFor(SLIDES[b])); }
      return;
    }
    const lower = k.toLowerCase();
    if (lower === 'm') { menu.classList.contains('on') ? closeMenu() : openMenu(); return; }
    if (lower === 'n') { peek.classList.toggle('on'); if (peek.classList.contains('on')) drawPeek(); return; }
    if (lower === 'p') { openPresenter(); return; }
    if (lower === 'f') {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
      return;
    }
  });

  navPrev.onclick = e => { e.stopPropagation(); prev(); };
  navNext.onclick = e => { e.stopPropagation(); next(); };
  document.getElementById('btn-menu').onclick = e => { e.stopPropagation(); openMenu(); };
  document.getElementById('btn-notes').onclick = e => {
    e.stopPropagation(); peek.classList.toggle('on');
    if (peek.classList.contains('on')) drawPeek();
  };
  document.getElementById('btn-presenter').onclick = e => { e.stopPropagation(); openPresenter(); };
  menu.addEventListener('click', e => { if (e.target === menu) closeMenu(); });
  lightbox.addEventListener('click', closeZoom);

  /* ---------- go ---------- */
  buildMenu();
  fit();
  show(0, 0);
})();
