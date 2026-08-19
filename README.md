# Modern and Contemporary Art — lecture decks

Interactive lecture decks for Vicky's college art-history course.
Eleven weeks in all; English at CEFR A1–A2, with Chinese glosses on the key
vocabulary.

**Live:** https://vicky-art.pages.dev

| Week | Deck | |
|---|---|---|
| 2 | The Beginning of Modern Art | 53 slides |
| 3 | Expression and the Inner Self | 61 slides |

## Layout

```
index.html      the course index — cards come from weeks.js
weeks.js        one entry per week; `dir: null` = not built yet
shared/         deck.js and style.css — every week uses these
week02/         index.html + content.js + img/
week03/         index.html + content.js + img/
```

A fix to `shared/` lands on every week at once. Each week owns only its
`content.js` and its pictures.

## Adding a week

1. `cp -r week03 week04 && rm week04/img/* && rm week04/content.js`
2. Put the new pictures in `week04/img/`.
3. Write `week04/content.js` — copy the shape from `week03/content.js`.
4. Change the `<title>` and `<meta name="description">` in `week04/index.html`.
5. Fill in that week's line in `weeks.js`.

Nothing else needs editing.

## Presenting

| Key | What it does |
|---|---|
| `→` `Space` or click | Next build step, then next slide |
| `←` | Back one step |
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
`grid` `twocol` `break` `activity` `rank` `quiz` `end`.

- `grid` — a 2×2 of concept cards, revealed one at a time. Used for the
  Attitude / Concept / Form / Technique breakdowns in Week 3.
- `rank` — the cards students put in order. Click a card to give it the next
  number, click a numbered card to take it out. Nothing is stored, and a
  reload clears it: this is one group's opinion during a share-out, not a
  record.
- `quote` takes an optional `src` — a photograph of the source document,
  shown beside the quotation.

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

## Week 3 — the quiz answer key

The source `.pptx` marks no answers. These were derived from the lecture
content and are stated in each question's speaker notes:

1 · B  ·  2 · A  ·  3 · D  ·  4 · A  ·  5 · A  ·  6 · B

## Images

Artwork images are extracted from the original PowerPoint and PDF exports and
live in each week's `img/`. Many are twentieth-century works still under
copyright; they are here for classroom teaching.
