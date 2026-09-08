# Contemporary Art History — lecture decks

Interactive lecture decks for Vicky's college art-history course.
Ten units in all (Units 1–10); English at CEFR A1–A2, with Chinese glosses on the key
vocabulary.

**Live:** https://vicky-art.pages.dev

| Unit | Deck | |
|---|---|---|
| 1 | The Beginning of Modern Art | 53 slides |
| 2 | Expression and the Inner Self | 61 slides |
| 3 | From Representation to Expression | 62 slides |
| 4 | The Boundary Between Art and Everyday Life | 60 slides |
| 5 | Art as Action / Event | 58 slides |
| 6 | From Object to Concept | 61 slides |
| 7 | Anti-Form | 49 slides |
| 8 | Leaving the Museum | 54 slides |
| 9 | Expanding Media | 51 slides |
| 10 | Borrowed Images | 60 slides |

## Layout

```
index.html      the course index — cards come from weeks.js
weeks.js        one entry per unit; `dir: null` = not built yet
shared/         deck.js and style.css — every unit uses these
week02/         Unit 1  — index.html + content.js + img/
week03/         Unit 2  — index.html + content.js + img/
week04/         Unit 3  — index.html + content.js + img/
week05/         Unit 4  — index.html + content.js + img/
week06/         Unit 5  — index.html + content.js + img/ + vid/
week07/         Unit 6  — index.html + content.js + img/
week08/         Unit 7  — index.html + content.js + img/
week09/         Unit 8  — index.html + content.js + img/
week10/         Unit 9  — index.html + content.js + img/
week11/         Unit 10 — index.html + content.js + img/
vocab/          the key-vocabulary reference — index.html + terms.js
```

The folder names are the semester week the class falls in; the units are
numbered 1–10. They are deliberately one apart, because the course starts in
week 2. Renaming the folders would break every link already shared, so the
folders stay put and only the labels say "Unit".

A fix to `shared/` lands on every unit at once. Each unit owns only its
`content.js` and its pictures.

## Adding a unit

All ten units (1–10) are built. If another is ever added:

1. `cp -r week11 week12 && rm -rf week12/img/* week12/content.js`
2. Put the new pictures in `week12/img/`.
3. Write `week12/content.js` — copy the shape from `week11/content.js`.
4. Change the `<title>` and `<meta name="description">` in `week12/index.html`.
5. Add a line for it in `weeks.js`.

Nothing else needs editing.

## Key vocabulary

`vocab/` is a reference page holding all 139 terms in the course, grouped by
unit, English and 中文 side by side. It is linked from the course index and
from every deck's HUD.

These definitions are **not** the word chips. The chips inside the decks are
A1–A2, written to be read off a projector during the lesson. These are pitched
higher, and name the critics and the works — they are for revision afterwards.
The two are kept separate on purpose.

The data comes from Vicky's `Key_Vocabulary.docx`, in `vocab/terms.js`. Two
things were repaired on the way in, and will come back if that file is ever
re-imported without checking:

- Unit 9 defined **Closed-Circuit Video twice**. The fuller entry — the one
  naming *TV Buddha* and the *Corridor* series — is the one kept.
- Unit 2's **"Grattage,"** carried a stray comma inside the headword.

Ten of her terms are not yet word chips in the decks: *The End of Art*,
*Post-historical Art*, *Armory Show* (Unit 1), *Émigré / exile artist*
(Unit 3), *Avant-Garde* (Unit 4), *The Idea Becomes a Machine* (Unit 6),
*Process / Time* (Unit 7), *Ephemeral / Process-Based Art* (Unit 8),
*Presence & Duration* and *Surveillance & Pursuit* (Unit 9). They are on the
vocabulary page, just not tappable mid-slide.

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

All of a unit's content is in its own `content.js` — nothing else needs touching.

- `GLOSSARY` — the word chips. Each has `en`, `zh`, `def` and `zhDef`.
  Definitions are written for this lecture, not copied from a dictionary.
- `SECTIONS` — the jump menu. `start` is a slide index, counting from 0.
- `SLIDES` — the deck, in order. Each slide has a `type` and its own fields,
  plus `notes` (what to say, shown in the presenter window).

Write `{{term}}` in any text to turn it into a word chip. The key must exist in
`GLOSSARY`; if it doesn't, the text degrades to plain words rather than breaking.

Slide types: `title` `word` `section` `bullets` `quote` `compare` `artwork`
`video` `grid` `flow` `timeline` `twocol` `break` `activity` `rank` `match`
`gallery` `terms` `quiz` `end`.

- `grid` — a 2×2 of concept cards, revealed one at a time. Used for the
  Attitude / Concept / Form / Technique breakdowns in Unit 2.
- `rank` — the cards students put in order. Click a card to give it the next
  number, click a numbered card to take it out. Nothing is stored, and a
  reload clears it: this is one group's opinion during a share-out, not a
  record.
- `quote` takes an optional `src` — a photograph of the source document,
  shown beside the quotation.
- `video` — a film with a "watch for" prompt. Pass either `yt` (a YouTube id,
  embedded via youtube-nocookie) or `src` (a file in that unit's `vid/`).
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
- `grid` takes an optional `cols` (default 2). Unit 7's review uses `cols: 3`.
- `vote` — a tally board for a group vote. Give it `question` and `options`.
  Click an option to add a vote, the small − to take one away, then **Record
  this round**, which files the numbers and zeroes the counters so the next
  round starts clean. Rounds stack up beneath, so a before-and-after vote sits
  side by side. Nothing is stored and a reload clears it. Unit 10's Art Court
  uses one slide twice — she returns to it via the menu for the final vote.
- `gallery` — the same two-column shape as `artwork`, but the picture side
  is a 2×2 of stills. For an example that is not one object but a run of
  images: a film, a series, a comic. Give it `images: [{src}, …]`; every
  picture zooms on click, and none is cropped.
- `terms` — a mid-deck vocabulary review. Same rendering as the closing `end`
  slide; give it a `terms` array of GLOSSARY keys.

## Unit 1 — corrections made to the original PowerPoint

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

## Unit 1 — changes Vicky asked for

Sent 8 September 2026, after the deck was built:

- **Slides 5 and 6 swapped.** The Manet/Titian comparison now comes before
  the Greenberg definition, so the class sees it happen and then gets the
  word for it. Two speaker notes moved with it — the comparison used to
  name Greenberg before he had been introduced.
- **Slide 42: Frank Gehry replaced by four stills from _Dandadan_**, in the
  2×2 she laid out. The teaching point survives the swap intact: Mondrian
  wanted one pure thing, this mixes four genres at once, and that is the
  gap between modern and postmodern thinking. The Mondrian slide's note
  still points forward to it, and the jump-back-to-Mondrian move still works.
  `img/gehry-disney-hall.jpg` was deleted; it is in the git history if the
  building is ever wanted back.

## Quiz answer keys

The source `.pptx` files mark no answers. These were derived from the lecture
content, and each is stated in that question's speaker notes.

- **Unit 1** — 1 · D  ·  2 · C  ·  3 · D  ·  4 · A  ·  5 · C  ·  6 · D
- **Unit 2** — 1 · B  ·  2 · A  ·  3 · D  ·  4 · A  ·  5 · A  ·  6 · B
- **Unit 3** — 1 · D  ·  2 · C  ·  3 · C  ·  4 · B  ·  5 · D  ·  6 · C
- **Unit 4** — 1 · B  ·  2 · D  ·  3 · C  ·  4 · A  ·  5 · B  ·  6 · D
- **Unit 5** — 1 · B  ·  2 · A  ·  3 · B  ·  4 · B  ·  5 · A  ·  6 · D
- **Unit 6** — 1 · A  ·  2 · B  ·  3 · C  ·  4 · A  ·  5 · B  ·  6 · D
- **Unit 7** — 1 · D  ·  2 · A  ·  3 · C  ·  4 · B  ·  5 · D  ·  6 · A
- **Unit 8** — 1 · A  ·  2 · C  ·  3 · A  ·  4 · D  ·  5 · A  ·  6 · C
- **Unit 9** — 1 · D  ·  2 · D  ·  3 · D  ·  4 · B  ·  5 · A  ·  6 · C
- **Unit 10** — 1 · C  ·  2 · D  ·  3 · B  ·  4 · A  ·  5 · A  ·  6 · C

## Unit 5 — videos, and why they are not all hosted

Her `.pptx` embeds eight film files totalling about 270 MB — 76 minutes of
footage. Three of them are over Cloudflare Pages' 25 MB per-file limit, and
there is no `ffmpeg` on this machine to re-encode them.

Seven of the eight slides already carried a **YouTube source URL**, so those are
embedded from YouTube. The Anthropométries film carried no link, so it is hosted
in `week06/vid/` (8.4 MB) and plays with no internet.

**This means the classroom needs a working connection for seven of the eight
films.** If that is a risk, her original `.pptx` still has every file embedded
and works offline — keep it on a USB stick as the fallback.

## Unit 4 — corrections and open questions

## Unit 3 — corrections made to the original PowerPoint

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
  deck. *Number 5, 1948* is yellow and brown and privately owned; the
  black-and-silver canvas in the photograph is almost certainly
  ***One: Number 31, 1950***, during MoMA's 2013 conservation of it — when
  curators laid it flat deliberately, to see it as Pollock did while painting.
  The caption stays descriptive, because the slide is about scale rather than
  about which painting it is.

## Unit 4 — corrections and open questions

- Pop Art dated to the **1950s in Britain**, spreading to America in the 1960s.
  Her slide said "began in Britain in the 1960s", which contradicted her own
  Independent Group (1952) and *This Is Tomorrow* (1956) slides.
- Paolozzi's collage is *__I__ Was a Rich Man's Plaything* — the first word was
  missing.
- "Assemblage", not "Assemblege".
- **The Guggenheim soft sculpture is *Soft Shuttlecock*, 1995** — her deck gave
  it no title. Verified, and credited to **Claes Oldenburg and Coosje van
  Bruggen**, who co-authored every large project from 1976 and is usually left
  off the label.
- **Mei Dean-E's series is 《哀敦砥悌》** — the lesson plan had 哀敦砍惓, which is
  garbled. Verified and now on the slide: a phonetic transliteration of
  "identity", first shown in 1994, in the Taipei Fine Arts Museum collection.
- **Timing conflict:** the schedule allots 20 minutes to the documentary
  segment, but the plan describes ~20 min of screening *plus* ~10 min of
  discussion. Flagged in the notes; she must choose before class.

## Unit 5 — corrections

- "Cut Piece", not "Cut piese".
- Her lesson plan batches all the films into one 15-minute block, but her deck
  spreads them through the lecture, each behind its own "Watch for:" prompt
  slide. The deck's order is followed here — it is better teaching, and the
  prompts are hers.

## Unit 6 — notes

Her slides were unusually plain this unit, so much of her own phrasing is kept.
No factual corrections were needed. Two things worth knowing:

- Hans Haacke is a learning objective and appears in her lesson plan, but has no
  slide of his own. *Germania* (1993) is described on the Institutional Critique
  slide rather than shown.
- The activity's reveal — Beuys's "Everyone is an artist" — is held back to its
  own slide **after** the group presentations, exactly as her plan instructs.

## Unit 7 — corrections and notes

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

## Unit 8 — corrections and gaps

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
  25 MB per-file limit, so it cannot be hosted. As in Unit 5: the room needs
  internet, and her original `.pptx` is the offline fallback.

## Unit 9 — content notes, and one decision for Lewis

**Six slides carry content notes**, marked CONTENT NOTE or CONTENT WARNING in
the speaker notes and listed on the title slide: 32 (Acconci, *Trademarks* —
self-inflicted biting), 34 and 35 (*Seedbed*), 36 and 37 (Abramović,
*Rhythm 0* — the audience cut her, and one person held a loaded gun to her
neck), and 39 (Piper, *Catalysis*).

**The decision:** slide 35 embeds documentary footage of *Seedbed* from the
Dailymotion link on her own slide. The picture is only a ramp and people's feet,
but the **audio is sexually explicit**. Nothing plays until it is clicked, and
the slide before it already carries the whole argument. Say the word and that
one slide comes out.

## Unit 9 — gaps in the source

- ***Electronic Superhighway*** is a learning objective but has no slide. It is
  described in the speaker notes instead.
- **TV Cello and Charlotte Moorman** are in the lesson plan's segment
  description but have no slide either. Also in the notes.
- **Abramović and Piper have slides but no time in the schedule.** The
  100-minute plan runs Acconci to 1:10 and then goes to Wrap-Up, yet both
  artists are learning objectives and both are in the Documentation Loop recap.
  As written, the session overruns.
- **Video:** her `.pptx` embeds about 319 MB across four files, two of them far
  over Cloudflare Pages' 25 MB per-file limit. All four films are embedded from
  the sources printed on her own slides — three YouTube, one Dailymotion. The
  room needs internet; her `.pptx` is the offline fallback.

## Unit 10 — corrections and one thing to check

- **Georg Baselitz's dates: her slide was right.** He died on 30 April 2026 in
  Salzburg, aged 88. The deck briefly said "b. 1938" while that was unverified;
  it now reads **1938–2026**, and the speaker note points out he was still
  working four months before this class.
- **"Jean-Michel Basquiat"**, not "Jean-Micheal".
- **De Beauvoir's *The Second Sex* is 1949**, not 1960 as her slide has it.
- **Two errors in the lesson plan's schedule**, both harmless once seen: the
  group activity's title is blank (`"" activity`), and the Appropriation
  mini-lecture is timed `1:10–1:10` — it should be 1:00–1:10.
- **Barbara Kruger has no slot in the schedule** despite being a learning
  objective and the whole basis of the activity. Her deck has three Kruger
  slides; the schedule does not account for them.

## Images

Artwork images are extracted from the original PowerPoint and PDF exports and
live in each unit's `img/`. Many are twentieth-century works still under
copyright; they are here for classroom teaching.
