import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { syncVectorStore, validateDocuments } from "./assistant-vector-sync.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(root, "docs");
const localeNames = new Set(["ms", "zh", "ta"]);
const sha256 = (content) => createHash("sha256").update(content).digest("hex");

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "public") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...(await markdownFiles(fullPath)));
    else if (entry.isFile() && entry.name.endsWith(".md")) results.push(fullPath);
  }
  return results;
}

function metadataFor(relativePath, parsed, normalized) {
  const segments = relativePath.split(path.sep);
  const locale = localeNames.has(segments[0]) ? segments.shift() : "en";
  const slug = segments.join("/").replace(/\.md$/, "").replace(/\/index$/, "");
  const localePrefix = locale === "en" ? "" : `/${locale}`;
  const canonicalUrl = `https://mys.wiki${localePrefix}${slug ? `/${slug}` : "/"}`;
  const game = ["bandaraya", "lebuhraya", "sumaya"].includes(segments[0])
    ? segments[0]
    : "general";
  const title = String(parsed.data.title || parsed.content.match(/^#\s+(.+)$/m)?.[1] || "MYSverse Wiki");
  const sourceKey = `wiki:${locale}:${slug || "index"}`;
  return {
    source_repo: "wiki",
    source_key: sourceKey,
    locale,
    title: title.slice(0, 160),
    canonical_url: canonicalUrl,
    content_hash: sha256(normalized),
    game,
    needs_review: parsed.data.needs_review === true,
  };
}

async function buildDocuments() {
  const documents = [];
  for (const filePath of await markdownFiles(docsRoot)) {
    const raw = await readFile(filePath, "utf8");
    const normalized = raw.replace(/\r\n?/g, "\n").trim() + "\n";
    const parsed = matter(normalized);
    const relativePath = path.relative(docsRoot, filePath);
    const attributes = metadataFor(relativePath, parsed, normalized);
    documents.push({
      filename: `${attributes.source_key.replace(/[^a-z0-9_-]+/gi, "-")}.md`,
      content: `Canonical page: ${attributes.canonical_url}\nLocale: ${attributes.locale}\nGame: ${attributes.game}\n\n${normalized}`,
      attributes,
    });
  }
  return documents;
}

const documents = validateDocuments(await buildDocuments(), "wiki");
if (process.argv.includes("--validate")) {
  console.log(`wiki: validated ${documents.length} public knowledge documents`);
  process.exit(0);
}

await syncVectorStore({
  documents,
  sourceRepo: "wiki",
  dryRun: process.argv.includes("--dry-run"),
});
