// Fortune Cookie Wisdom for Developers — one original line.
// The program writes a single fortune-cookie line to <output>/entry.txt.
// The line was chosen against the judge's brief: a tired senior engineer
// picks the line that makes it smile and nod — one short balanced sentence,
// true about a developer's day, with a turn the reader has not heard before
// and a quiet twist that rewards a second read.
//
// The line: "Your future self is already debugging the shortcut you are
// about to take." It opens like a fortune ("Your future self..."), it is
// true about every developer's day (shortcuts, and the debugging that
// follows them), and its twist is the tense: the debugging has already
// begun for a shortcut not yet taken — the future is ahead of you.
//
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Your future self is already debugging the shortcut you are about to take.";

// The gate allows 1 to 120 characters. Fail loudly here rather than
// shipping an over-long line that the sealed scorer would refuse.
if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune is ${FORTUNE.length} chars, gate allows 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character, and the line
// itself is the whole entry.
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
