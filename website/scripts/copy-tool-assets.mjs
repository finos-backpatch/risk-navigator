import { copyFile, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const websiteDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(websiteDir, "../..");
const staticDir = resolve(rootDir, "website/static");

const copies = [
  ["tool/risk-navigator.html", "tool/risk-navigator.html"],
  ["tool/manifest.json", "tool/manifest.json"],
  ["data/finos-sample-platform.json", "data/finos-sample-platform.json"],
];

await rm(resolve(staticDir, "tool"), { recursive: true, force: true });
await rm(resolve(staticDir, "data"), { recursive: true, force: true });

for (const [source, target] of copies) {
  const from = resolve(rootDir, source);
  const to = resolve(staticDir, target);
  await mkdir(dirname(to), { recursive: true });
  await copyFile(from, to);
}

console.log("Copied Risk Navigator demo assets into website/static.");
