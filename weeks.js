/* ------------------------------------------------------------------
   The course. One entry per week — this drives the index page.

   To add a week: build week04/ from an existing week (see README),
   then add one line here. `dir: null` means the deck does not exist
   yet; the card renders greyed out and is not clickable.
   ------------------------------------------------------------------ */

const WEEKS = [
  {
    n: 2, dir: 'week02',
    title: 'The Beginning of Modern Art',
    q: 'How did art start to change?',
    meta: '53 slides · Manet to Gehry · timeline activity · 6-question quiz'
  },
  {
    n: 3, dir: 'week03',
    title: 'Expression and the Inner Self',
    q: 'How does art show emotion and the unconscious?',
    meta: '61 slides · Dada to Magritte · the apple ranking activity · 6-question quiz'
  },
  { n: 4,  dir: null, title: 'Abstract Expressionism', q: 'New York, and what the Americans did with automatism.' },
  { n: 5,  dir: null },
  { n: 6,  dir: null },
  { n: 7,  dir: null },
  { n: 8,  dir: null },
  { n: 9,  dir: null },
  { n: 10, dir: null },
  { n: 11, dir: null },
  { n: 12, dir: null }
];
