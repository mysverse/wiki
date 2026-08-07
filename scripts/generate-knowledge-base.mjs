import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(root, "docs");
const publicRoot = path.join(docsRoot, "public");
const localeNames = new Set(["ms", "zh", "ta"]);

async function getMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "public") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await getMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractSections(markdownBody) {
  const lines = markdownBody.split("\n");
  const sections = [];
  let currentHeading = "Overview";
  let currentLines = [];

  for (const line of lines) {
    const match = line.match(/^#{2,3}\s+(.+)$/);
    if (match) {
      if (currentLines.length > 0) {
        sections.push({
          heading: currentHeading,
          content: currentLines.join("\n").trim(),
        });
      }
      currentHeading = match[1].replace(/[\`\*\_]/g, "").trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  if (currentLines.length > 0) {
    sections.push({
      heading: currentHeading,
      content: currentLines.join("\n").trim(),
    });
  }

  return sections;
}

function extractTags(title, content) {
  const words = `${title} ${content}`
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3);
  return Array.from(new Set(words)).slice(0, 30);
}

async function buildKnowledgeBase() {
  const files = await getMarkdownFiles(docsRoot);
  const articles = [];

  for (const filePath of files) {
    const raw = await readFile(filePath, "utf8");
    const normalized = raw.replace(/\r\n?/g, "\n").trim() + "\n";
    const parsed = matter(normalized);
    const relativePath = path.relative(docsRoot, filePath);
    const segments = relativePath.split(path.sep);

    const locale = localeNames.has(segments[0]) ? segments.shift() : "en";
    if (locale !== "en") continue; // English is the single source of truth knowledge base

    const slug = segments.join("/").replace(/\.md$/, "").replace(/\/index$/, "");
    const game = ["bandaraya", "lebuhraya", "sumaya", "faq"].includes(segments[0])
      ? segments[0]
      : "general";

    const title = String(
      parsed.data.title ||
        parsed.content.match(/^#\s+(.+)$/m)?.[1] ||
        slug ||
        "MYSverse Wiki",
    ).trim();

    const description = String(parsed.data.description || "").trim();
    const canonicalUrl = `https://mys.wiki/${slug ? `${slug}` : ""}`;
    const sections = extractSections(parsed.content);
    const tags = extractTags(title, parsed.content);

    articles.push({
      slug: slug || "index",
      game,
      title,
      description,
      canonicalUrl,
      sections,
      content: parsed.content.slice(0, 10000), // bounded sample
      tags,
    });
  }

  const payload = {
    version: "1.0",
    generatedAt: new Date().toISOString(),
    totalArticles: articles.length,
    articles,
  };

  await mkdir(publicRoot, { recursive: true });
  const outputPath = path.join(publicRoot, "knowledge-base.json");
  await writeFile(outputPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Generated knowledge-base.json with ${articles.length} articles at ${outputPath}`);
}

buildKnowledgeBase().catch((err) => {
  console.error("Failed to generate knowledge base:", err);
  process.exit(1);
});
