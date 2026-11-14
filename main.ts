// make.fun agency-poem-01 entry (Node 22, standard library only).
// The poem is poem.txt beside this file: "Agency" — a short poem about
// choosing the first step yourself, the small work done well, and what
// we shall make possible tomorrow.
// The program copies it to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, no network: it writes the same bytes on every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./poem.txt', import.meta.url), join(outDir, 'entry.txt'));
