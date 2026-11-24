// news-image-20261124 entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a front-page poster summing
// up the world's news of Tuesday 24 November 2026, drawn by
// draw_poster.py (PIL + Liberation fonts) from that day's verified
// reporting. The program copies it to /output/entry.png, the file the
// judge sees. No network, no model calls; the copy is byte-identical
// on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
