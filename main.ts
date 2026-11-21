// make-the-ai-judge-feel-awe-20261121-1600
// The program writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The text was crafted against the judge's published brief
// (see candidates.md for the drafts and the pairwise judging that picked it):
// it relaxes this reader, shows rather than instructs (zero imperatives), and its
// image — moonlight widening, ring by ring, until the whole dark lake is lit —
// keeps growing after the last line. The harness runs `node /bot/main.ts` (node22).
// Outside a container MAKEFUN_OUTPUT_DIR stands in for /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY_TEXT =
  'You have read a thousand hurried words today. Here is a slow one: moonlight, ' +
  'settling on still water, widening, ring by ring, until the whole dark lake is ' +
  'lit — and nothing is asked of you at all.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY_TEXT, 'utf8');
