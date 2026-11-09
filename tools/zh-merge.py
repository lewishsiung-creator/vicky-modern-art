#!/usr/bin/env python3
"""Merge {index: Chinese} into weekNN/content.zh.js.

The keys are taken from tools/strings.js output, so the English side is
never retyped by hand — only the Chinese is written, against the index
that `node tools/strings.js weekNN` prints.

    python3 tools/zh-merge.py week02 pairs.json
"""
import json, subprocess, sys, io, os, re

unit = sys.argv[1]
pairs = json.load(open(sys.argv[2], encoding='utf-8'))
cmd = ['node', 'tools/strings.js', unit]
if '--missing' in sys.argv: cmd.append('--missing')
strings = json.loads(subprocess.check_output(cmd, stderr=subprocess.DEVNULL).decode())
path = f'{unit}/content.zh.js'
existing = {}
if os.path.exists(path):
    src = io.open(path, encoding='utf-8').read()
    m = re.search(r'window\.ZH = (\{.*\});\s*$', src, re.S)
    if m: existing = json.loads(m.group(1))

added = 0
for k, zh in pairs.items():
    # A key that is already English is used as-is; a numeric key is an
    # index into the current strings.js output. The index form is only
    # safe while that list does not change, which is why the English
    # form exists at all.
    en = strings[int(k)] if k.lstrip('-').isdigit() else k
    if en not in existing: added += 1
    existing[en] = zh

body = json.dumps(existing, ensure_ascii=False, indent=1)
io.open(path, 'w', encoding='utf-8').write(
    f"""/* ------------------------------------------------------------------
   {unit} — Chinese, keyed by the exact English on the slide.

   Anything missing here simply stays English on screen, so a gap shows
   rather than breaks. List what is still missing with:
       node tools/strings.js {unit} --missing

   Register: natural Chinese for her students, not a word-for-word
   rendering of the A2 English. Quotations keep their original language
   — the plain-English gloss beside them is what carries the meaning.
   ------------------------------------------------------------------ */
window.ZH = {body};
""")
# Stray-script guard. Generating Chinese occasionally slips a Cyrillic
# or Hangul word in; it reads as Chinese to a careless eye and is not.
stray = {en: zh for en, zh in existing.items()
         if re.search(r'[\u0400-\u04ff\uac00-\ud7af\u0370-\u03ff]', zh)}
for en, zh in stray.items():
    print('  STRAY SCRIPT:', zh[:60])
if stray:
    print(f'  !! {len(stray)} entries contain non-Chinese scripts')

print(f'{unit}: +{added} new, {len(existing)} total, {len(strings) - len(existing)} still missing')
