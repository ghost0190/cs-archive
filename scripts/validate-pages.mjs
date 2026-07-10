import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const MAX_FILES = 20_000;
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const target = path.resolve(process.argv[2] ?? "dist");

async function* walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* walk(fullPath);
    else if (entry.isFile()) yield fullPath;
  }
}

let count = 0;
let bytes = 0;
let largest = { path: "", bytes: 0 };
const oversized = [];

for await (const file of walk(target)) {
  const info = await stat(file);
  count += 1;
  bytes += info.size;
  if (info.size > largest.bytes) largest = { path: file, bytes: info.size };
  if (info.size > MAX_FILE_SIZE) oversized.push({ path: file, bytes: info.size });
}

const mib = (value) => (value / 1024 / 1024).toFixed(2);
console.log(`Files: ${count.toLocaleString()} / ${MAX_FILES.toLocaleString()}`);
console.log(`Total size: ${mib(bytes)} MiB`);
console.log(`Largest: ${mib(largest.bytes)} MiB (${path.relative(target, largest.path)})`);

const errors = [];
if (count > MAX_FILES) errors.push(`file count exceeds the Cloudflare Pages limit`);
if (oversized.length) {
  errors.push(
    `${oversized.length} file(s) exceed 25 MiB:\n${oversized
      .map((item) => `  ${mib(item.bytes)} MiB  ${path.relative(target, item.path)}`)
      .join("\n")}`,
  );
}

if (errors.length) {
  console.error(`\nCloudflare Pages validation failed:\n${errors.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log("Cloudflare Pages validation passed.");
}
