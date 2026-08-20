# Contemporary Art History — lecture decks

Interactive lecture decks for Vicky's college art-history course.
Eleven weeks in all; English at CEFR A1–A2, with Chinese glosses on the key
vocabulary.

**Live:** https://vicky-art.pages.dev

| Week | Deck | |
|---|---|---|
| 2 | The Beginning of Modern Art | 53 slides |
| 3 | Expression and the Inner Self | 61 slides |
| 4 | From Representation to Expression | 62 slides |
| 5 | The Boundary Between Art and Everyday Life | 60 slides |
| 6 | Art as Action / Event | 58 slides |
| 7 | From Object to Concept | 61 slides |
| 8 | Anti-Form | 49 slides |
| 9 | Leaving the Museum | 54 slides |

## Layout

```
index.html      the course index — cards come from weeks.js
weeks.js        one entry per week; `dir: null` = not built yet
shared/         deck.js and style.css — every week uses these
week02/         index.html + content.js + img/
week03/         index.html + content.js + img/
week04/         index.html + content.js + img/
week05/         index.html + content.js + img/
week06/         index.html + content.js + img/ + vid/
week07/         index.html + content.js + img/
week08/         index.html + content.js + img/
week09/         index.html + content.js + img/
```

A fix to `shared/` lands on every week at once. Each week owns only its
`content.js` and its pictures.

## Adding a week

1. `cp -r week09 week10 && rm -rf week10/img/* week10/content.js`
2. Put the new pictures in `week10/img/`.
3. Write `week10/content.js` — copy the shape from `week09/content.js`.
4. Change the `<title>` and `<meta name="description">` in `week10/index.html`.
5. Fill in that week's line in `weeks.js`.

Nothing else needs editing.

## Presenting

| Key | What it does |
|---|---|
| `下一頁` / `→` / `Space` / click | Next build step, then next slide |
| `上一頁` / `←` | Back one step |
| `M` | Jump menu, grouped into the five parts |
| `Backspace` | Return to wherever you jumped from |
| `N` | Speaker notes on the presenting screen |
| `P` | Presenter window — put this on your laptop, deck on the projector |
| `F` | Fullscreen |
| `Esc` | Close menu / notes / zoom |

Click any picture to zoom. Click a <u>word chip</u> for the English definition
and the Chinese. Quiz answers reveal on click — nothing is scored and nothing
is saved.

The presenter window and the deck stay in sync in both directions, so you can
click Next from either one.

## Editing

All of a week's content is in its own `content.js` — nothing else needs touching.

- `GLOSSARY` — the word chips. Each has `en`, `zh`, `def` and `zhDef`.
  Definitions are written for this lecture, not copied from a dictionary.
- `SECTIONS` — the jump menu. `start` is a slide index, counting from 0.
- `SLIDES` — the deck, in order. Each slide has a `type` and its own fields,
  plus `notes` (what to say, shown in the presenter window).

Write `{{term}}` in any text to turn it into a word chip. The key must exist in
`GLOSSARY`; if it doesn't, the text degrades to plain words rather than breaking.

Slide types: `title` `word` `section` `bullets` `quote` `compare` `artwork`
`video` `grid` `flow` `timeline` `twocol` `break` `activity` `rank` `match`
`terms` `quiz` `end`.

- `grid` — a 2×2 of concept cards, revealed one at a time. Used for the
  Attitude / Concept / Form / Technique breakdowns in Week 3.
- `rank` — the cards students put in order. Click a card to give it the next
  number, click a numbered card to take it out. Nothing is stored, and a
  reload clears it: this is one group's opinion during a share-out, not a
  record.
- `quote` takes an optional `src` — a photograph of the source document,
  shown beside the quotation.
- `video` — a film with a "watch for" prompt. Pass either `yt` (a YouTube id,
  embedded via youtube-nocookie) or `src` (a file in that week's `vid/`).
  The player is a **facade** until clicked: eight players loading at once would
  stall the deck, and nothing should start playing because a slide scrolled by.
  Leaving the slide tears the player down, so sound never follows her onward.
- `flow` — stages with arrows between them, revealed one at a time. Used for
  tracing a theory from raw material to finished practice.
- `timeline` — dated stops across the top, revealed one at a time.
- `match` — two columns of cards to pair up. Give it `pairs: [{a, b}, …]`; the
  right column is shuffled by a fixed permutation, so it is stable across
  reloads and no card ever sits opposite its own partner. Clicking one card from
  each side pairs and numbers them; clicking a numbered card takes it out.
  **Nothing is judged while they work.** One arrow press reveals: pairs that
  belong together stay bright, everything else simply fades — never marked wrong.
- `grid` takes an optional `cols` (default 2). Week 8's review uses `cols: 3`.
- `terms` — a mid-deck vocabulary review. Same rendering as the closing `end`
  slide; give it a `terms` array of GLOSSARY keys.

## Week 2 — corrections made to the original PowerPoint

Four things in the source slides were wrong and have been fixed here. Each one
is flagged in that slide's speaker notes so Vicky knows what changed.

- *Black Square* is dated **1915**, not 1918.
- **Kandinsky removed** from the Suprematism slide — he was Der Blaue Reiter,
  and later the Bauhaus.
- Hegel's lectures dated to the **1820s**, not 1817.
- Quiz Q4 option A now reads *after the Second World War, becoming clear around
  the 1960s* — the printed options contradicted the Three Periods slide.

Titles also corrected: *White on White*, *Street, Dresden*,
*L'Oiseau dans l'Espace*.

## Quiz answer keys

The source `.pptx` files mark no answers. These were derived from the lecture
content, and each is stated in that question's speaker notes.

- **Week 3** — 1 · B  ·  2 · A  ·  3 · D  ·  4 · A  ·  5 · A  ·  6 · B
- **Week 4** — 1 · D  ·  2 · C  ·  3 · C  ·  4 · B  ·  5 · D  ·  6 · C
- **Week 5** — 1 · B  ·  2 · D  ·  3 · C  ·  4 · A  ·  5 · B  ·  6 · D
- **Week 6** — 1 · B  ·  2 · A  ·  3 · B  ·  4 · B  ·  5 · A  ·  6 · D
- **Week 7** — 1 · A  ·  2 · B  ·  3 · C  ·  4 · A  ·  5 · B  ·  6 · D
- **Week 8** — 1 · D  ·  2 · A  ·  3 · C  ·  4 · B  ·  5 · D  ·  6 · A
- **Week 9** — 1 · A  ·  2 · C  ·  3 · A  ·  4 · D  ·  5 · A  ·  6 · C

## Week 6 — videos, and why they are not all hosted

Her `.pptx` embeds eight film files totalling about 270 MB — 76 minutes of
footage. Three of them are over Cloudflare Pages' 25 MB per-file limit, and
there is no `ffmpeg` on this machine to re-encode them.

Seven of the eight slides already carried a **YouTube source URL**, so those are
embedded from YouTube. The Anthropométries film carried no link, so it is hosted
in `week06/vid/` (8.4 MB) and plays with no internet.

**This means the classroom needs a working connection for seven of the eight
films.** If that is a risk, her original `.pptx` still has every file embedded
and works offline — keep it on a USB stick as the fallback.

## Week 5 — corrections and open questions

## Week 4 — corrections made to the original PowerPoint

- **Quiz Q4's four options were duplicated from Q3** — all four were about
  de Kooning and none answered the question about Post-Painterly Abstraction.
  Four new options were written; B is correct.
- *Mountains and Sea* dated **1952**, not 1959. Her deck gave both dates.
- *Als mestres **de** Catalunya*, not "da".
- The photograph on her Pollock title slide is **not Pollock** — it is a modern
  demonstration from a study of the technique's fluid dynamics. It has been
  recaptioned honestly and moved to the technique slide; the real Hans Namuth
  photograph now opens the Pollock section.
- Frankenthaler is described as pioneering **soak-stain**, which opened the way
  to the second generation of colour-field painting — rather than as pioneering
  colour-field painting itself, which was Newman and Rothko.
- One photograph of a Pollock on the floor was labelled 《第五號，1948》 in her
  deck; the canvas shown looks like a different one, so it is captioned without
  a title and flagged in the notes.

## Week 5 — corrections and open questions

- Pop Art dated to the **1950s in Britain**, spreading to America in the 1960s.
  Her slide said "began in Britain in the 1960s", which contradicted her own
  Independent Group (1952) and *This Is Tomorrow* (1956) slides.
- Paolozzi's collage is *__I__ Was a Rich Man's Plaything* — the first word was
  missing.
- "Assemblage", not "Assemblege".
- The large Oldenburg soft sculpture in the Guggenheim rotunda carries **no
  title** in her deck. It is captioned generically; it is very likely
  *Soft Shuttlecock*, 1995, but that is not confirmed.
- The lesson plan's Chinese characters for Mei Dean-E's *Ai-Dun-Di-Ti* series
  appear garbled. The commonly published form is 《哀敦砥悌》. It is **left off
  the slide** and flagged in the notes — Vicky should confirm it.
- **Timing conflict:** the schedule allots 20 minutes to the documentary
  segment, but the plan describes ~20 min of screening *plus* ~10 min of
  discussion. Flagged in the notes; she must choose before class.

## Week 6 — corrections

- "Cut Piece", not "Cut piese".
- Her lesson plan batches all the films into one 15-minute block, but her deck
  spreads them through the lecture, each behind its own "Watch for:" prompt
  slide. The deck's order is followed here — it is better teaching, and the
  prompts are hers.

## Week 7 — notes

Her slides were unusually plain this week, so much of her own phrasing is kept.
No factual corrections were needed. Two things worth knowing:

- Hans Haacke is a learning objective and appears in her lesson plan, but has no
  slide of his own. *Germania* (1993) is described on the Institutional Critique
  slide rather than shown.
- The activity's reveal — Beuys's "Everyone is an artist" — is held back to its
  own slide **after** the group presentations, exactly as her plan instructs.

## Week 8 — corrections and notes

- Haacke's work is **Condensation Cube** (1963–65), not "Condensation Tube" —
  her own later slide and the lesson plan both give the correct name.
- **An extra slide was added at the front.** Her lesson plan says to "reveal the
  mystery image" during Photorealism, but her deck had no earlier mystery slide.
  Slide 2 now shows her own Estes painting and asks "photograph, or painting?"
  without answering; slide 38 is the reveal. Skip slide 2 if she'd rather not.
- The lesson plan names **Morris Louis** in one place and **Frankenthaler** in
  another as the pouring precursor. Both poured; Benglis's title *Hey, Hey
  Frankenthaler* points at Frankenthaler, so the notes follow that.
- **Content note on two slides.** The Benglis *Artforum* advertisement shows only
  the head-and-shoulders detail she supplied; the full 1974 advertisement is
  explicit, and the notes tell her to describe rather than show it. Bridget
  Riley's *Current* can trigger migraine or nausea — the notes say so.

## Week 9 — corrections and gaps

- **Pistoletto's dates.** Her slide read "Michelangelo Pistoletto (1967~)" — that
  is the date of *Venus of the Rags*. He was born in 1933.
- **Christo's surname** is spelled Javacheff.
- **Nancy Holt is a learning objective but has no slide.** *Sun Tunnels* (1976)
  is described on a slide about the artists usually left out of Land Art's
  story, but there is no image of it in her deck. Worth finding one.
- **The lesson plan's "Group Discussion Activity Design" section is empty** —
  just the heading. The 100-minute schedule has no activity segment either, so
  the deck has none. But the Arte Povera segment description twice refers back
  to "the opening activity", which does not exist. Flagged in the notes.
- **Rivers and Tides** is embedded from the YouTube link on her own slide. Her
  `.pptx` embeds the entire 291 MB film — more than ten times Cloudflare Pages'
  25 MB per-file limit, so it cannot be hosted. As in Week 6: the room needs
  internet, and her original `.pptx` is the offline fallback.

## Images

Artwork images are extracted from the original PowerPoint and PDF exports and
live in each week's `img/`. Many are twentieth-century works still under
copyright; they are here for classroom teaching.
