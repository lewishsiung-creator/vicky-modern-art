/* Every on-screen and speaker-note string in a unit, in the order the
   slides run. With --missing, only the ones that have no Chinese yet.

     node tools/strings.js week06 [--missing]

   The pairs live in weekNN/content.zh.js, keyed by the exact English. */
const fs = require('fs'), path = require('path');
const dir = process.argv[2] || 'week02';
const onlyMissing = process.argv.includes('--missing');
const SKIP = new Set(['type', 'yt', 'dm', 'poster', 'src', 'terms', 'answer', 'n', 'of',
                      'minutes', 'oneClick', 'zh', 'zhDef', 'zhChip', 'side', 'cite', 'quote']);
const isZh = s => /[㐀-鿿]/.test(s) && !/[A-Za-z]{3}/.test(s.replace(/<[^>]+>|\{\{\w+\}\}/g, ''));

let ZH = {};
const zhFile = path.join(dir, 'content.zh.js');
if (fs.existsSync(zhFile)) {
  global.window = {};
  eval(fs.readFileSync(zhFile, 'utf8') + ';ZH = window.ZH || {}');
}
const src = fs.readFileSync(path.join(dir, 'content.js'), 'utf8');
const { SLIDES } = new Function(src + ';return {SLIDES};')();
const out = [];
const seen = new Set();
const add = s => { if (!seen.has(s)) { seen.add(s); out.push(s); } };
const walk = (v, k) => {
  if (SKIP.has(k)) return;
  if (typeof v === 'string') { if (/[A-Za-z]{2}/.test(v) && !isZh(v)) add(v); }
  else if (Array.isArray(v)) v.forEach(x => walk(x, k));
  else if (v && typeof v === 'object') for (const kk in v) walk(v[kk], kk);
};
/* GLOSSARY already carries zh and zhDef, so chips need nothing here. */
SLIDES.forEach(s => walk(s));
const list = out.filter(s => !onlyMissing || !(s in ZH));
console.log(JSON.stringify(list, null, 1));
console.error(list.length + (onlyMissing ? ' missing' : ' strings') + ' · ' + dir);
