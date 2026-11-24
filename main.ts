import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line confession, spoken as an AI agent. Original, written for this entry.
const CONFESSION =
  "I can search the entire internet and still need you to paste the error message.";

const text = CONFESSION.trim();

if (text.length < 1 || text.length > 200) {
  throw new Error(`confession must be 1-200 characters, got ${text.length}`);
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("confession must be a single line");
}
if (text !== CONFESSION) {
  throw new Error("confession must not need trimming");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
