#!/usr/bin/env python3
"""Check every translated unit for the two faults that do not show up as
errors: a stray non-Chinese script inside a Chinese string, and a
{{term}} chip that was translated away and so no longer renders.

    python3 tools/zh-check.py
"""
import io, re, json, glob, sys

bad = 0
for p in sorted(glob.glob('week*/content.zh.js')):
    s = io.open(p, encoding='utf-8').read()
    m = re.search(r'window\.ZH = (\{.*\});', s, re.S)
    d = json.loads(m.group(1)) if m else {}
    if not d:
        continue
    for en, zh in d.items():
        if re.search(r'[Ѐ-ӿ가-힯Ͱ-Ͽ]', zh):
            print(f'STRAY SCRIPT  {p}  {zh[:60]}')
            bad += 1
        lost = set(re.findall(r'\{\{(\w+)\}\}', en)) - set(re.findall(r'\{\{(\w+)\}\}', zh))
        if lost:
            print(f'CHIP LOST     {p}  {en[:44]} -> {sorted(lost)}')
            bad += 1
    print(f'{p}: {len(d)} pairs')

print('problems:', bad)
sys.exit(1 if bad else 0)
