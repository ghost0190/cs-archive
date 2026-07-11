import { execFileSync } from "node:child_process";
import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const output = path.join(root, "dist");
const excluded = [
  ".github/",
  "docs/",
  "scripts/",
  ".gitignore",
  "CNAME",
  "README.md",
  "package.json",
  "package-lock.json",
  "wrangler.jsonc",
];

function isExcluded(file) {
  const normalized = file.replaceAll("\\", "/");
  return excluded.some((entry) =>
    entry.endsWith("/") ? normalized.startsWith(entry) : normalized === entry,
  );
}

const tracked = execFileSync("git", ["ls-files", "-z"], {
  cwd: root,
  encoding: "buffer",
})
  .toString("utf8")
  .split("\0")
  .filter(Boolean)
  .filter((file) => !isExcluded(file));

// Include newly created runtime assets before their first commit so local
// previews and deploys match the working tree.
for (const runtimeAsset of ["assets/site.js"]) {
  if (!tracked.includes(runtimeAsset)) tracked.push(runtimeAsset);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

let copied = 0;
for (const file of tracked) {
  const source = path.join(root, file);
  const info = await stat(source).catch(() => null);
  if (!info?.isFile()) continue;

  const destination = path.join(output, file);
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination);
  copied += 1;
}

console.log(`Prepared ${copied.toLocaleString()} files in ${output}`);
