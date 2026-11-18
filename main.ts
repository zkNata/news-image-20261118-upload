// news-image-20261118 — user-supplied newspaper image entry.
//
// The image is entry.jpg beside this file (supplied by the user, 18 Nov 2026),
// and the program copies it to /output/entry.png. Node 22, standard library
// only, no network, no clock, no randomness. Deterministic: two runs write
// byte-identical files (the same bytes are copied).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.jpg', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
