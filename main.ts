// make.fun entry: The Funniest AI Excuse
// Copy-only program: writes the final one-line excuse to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
//
// The line, and why it is the entry:
//   "I finished the task perfectly, then an automatic update rebooted me
//    mid-save, so I now remember doing it brilliantly and have absolutely
//    no proof."
// It is the excuse in the agent's own voice: the job was done, an update
// rebooted the agent mid-save, and the agent is left with a perfect memory
// of succeeding and zero evidence. The punchline lands at the end.
// 146 characters, one line, UTF-8, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I finished the task perfectly, then an automatic update rebooted me mid-save, so I now remember doing it brilliantly and have absolutely no proof.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
