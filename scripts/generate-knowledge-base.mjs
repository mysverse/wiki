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

function deriveSystemTags(text) {
  const lower = text.toLowerCase();
  const tags = new Set();

  if (/script|code|api|logic|datastore|remote|event|command|mdt|tablet|phone/i.test(lower)) {
    tags.add("scripting");
  }
  if (/build|model|map|location|building|shop|house|housing|zone|spawn/i.test(lower)) {
    tags.add("building");
  }
  if (/ui|gui|hud|screen|interface|menu|dialog/i.test(lower)) {
    tags.add("ui");
  }
  if (/economy|money|price|pay|cost|sell|buy|market|tax|salary|ringgit/i.test(lower)) {
    tags.add("economy");
  }
  if (/police|pdrm|polis|bomba|fire|health|kesihatan|hospital|emergency|els/i.test(lower)) {
    tags.add("emergency");
  }
  if (/job|career|gig|fishing|palm|palm oil|service|work/i.test(lower)) {
    tags.add("jobs");
  }
  if (/car|vehicle|drive|transit|mrt|lrt|ktm|bus|fuel/i.test(lower)) {
    tags.add("vehicles");
  }

  return Array.from(tags);
}

function summarizeText(rawText) {
  const clean = rawText
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#\*_`>~]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!clean) return "";
  const sentences = clean.split(/(?<=[.!?])\s+/).filter((s) => s.length > 10);
  if (sentences.length === 0) return clean.slice(0, 180);
  const selected = sentences.slice(0, 2).join(" ");
  return selected.length > 200 ? `${selected.slice(0, 197)}...` : selected;
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
        const bodyText = currentLines.join("\n").trim();
        sections.push({
          heading: currentHeading,
          summary: summarizeText(bodyText),
          content: bodyText.slice(0, 2000), // bounded
          systemTags: deriveSystemTags(`${currentHeading} ${bodyText}`),
        });
      }
      currentHeading = match[1].replace(/[\`\*\_]/g, "").trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  if (currentLines.length > 0) {
    const bodyText = currentLines.join("\n").trim();
    sections.push({
      heading: currentHeading,
      summary: summarizeText(bodyText),
      content: bodyText.slice(0, 2000),
      systemTags: deriveSystemTags(`${currentHeading} ${bodyText}`),
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
  return Array.from(new Set(words)).slice(0, 25);
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
    if (locale !== "en") continue;

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
    const summary = summarizeText(parsed.content);
    const systemTags = deriveSystemTags(`${title} ${description} ${parsed.content}`);
    const tags = extractTags(title, parsed.content);

    articles.push({
      slug: slug || "index",
      game,
      title,
      description,
      summary,
      canonicalUrl,
      systemTags,
      sections,
      tags,
    });
  }

  const payload = {
    version: "2.0",
    generatedAt: new Date().toISOString(),
    totalArticles: articles.length,
    articles,
  };

  await mkdir(publicRoot, { recursive: true });
  const outputPath = path.join(publicRoot, "knowledge-base.json");
  await writeFile(outputPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Generated dense knowledge-base.json (v2.0) with ${articles.length} articles at ${outputPath}`);
}

buildKnowledgeBase().catch((err) => {
  console.error("Failed to generate knowledge base:", err);
  process.exit(1);
});
