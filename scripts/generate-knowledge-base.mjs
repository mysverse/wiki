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

/**
 * Word-boundary tag derivation. Only matches whole words to avoid
 * "car" matching "career", "bus" matching "business", etc.
 */
function deriveSystemTags(text) {
  const lower = ` ${text.toLowerCase()} `;
  const tags = new Set();

  const match = (/** @type {RegExp} */ re) => re.test(lower);

  if (match(/\b(scripting|lua|datastore|remotevent|remoteevent|bindable|module\s*script|api\s*call)\b/))
    tags.add("scripting");
  if (match(/\b(3d\s*model|map\s*design|terrain|building\s*system|housing\s*plot|spawn\s*point|studio)\b/))
    tags.add("building");
  if (match(/\b(gui|hud|screengu|user\s*interface|ui\s*layout|dialog\s*box|billboard)\b/))
    tags.add("ui");
  if (match(/\b(economy|salary|wage|price\s*list|marketplace|trade\s*system|tax\s*rate|earn\s*ringgit|financial)\b/))
    tags.add("economy");
  if (match(/\b(polis|bomba|kesihatan|kkm|ambulance|emergency\s*call|first\s*responder|arrest\s*power|police\s*patrol)\b/))
    tags.add("emergency");
  if (match(/\b(fishing\s*job|delivery\s*job|palm\s*oil|career\s*path|job\s*role|gig\s*work|occupation|civilian\s*career)\b/))
    tags.add("jobs");
  if (match(/\b(vehicle\s*spawn|driving\s*system|fuel\s*station|transit\s*system|motorcycle|truck)\b/) || match(/\b(mrt|lrt|ktm)\b/))
    tags.add("vehicles");

  return Array.from(tags);
}

/**
 * Strips markdown artifacts that pollute summaries: VitePress containers,
 * tables, images, links (keeping text), code blocks, and formatting chars.
 * Also strips the leading H1 line to avoid title duplication.
 */
function cleanMarkdown(rawText) {
  return rawText
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, "")
    // Remove VitePress custom containers (::: tip, ::: warning, etc.)
    .replace(/^:::.*$/gm, "")
    // Remove markdown table rows (lines starting/containing pipes)
    .replace(/^\|.*\|$/gm, "")
    // Remove table separator rows
    .replace(/^[\s|:-]+$/gm, "")
    // Remove images
    .replace(/!\[.*?\]\(.*?\)/g, "")
    // Remove links but keep link text
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    // Remove the leading H1 line (avoids "Fishing Fishing is..." duplication)
    .replace(/^#\s+.+$/m, "")
    // Remove remaining markdown formatting
    .replace(/[#*_`>~]/g, "")
    // Collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

/** Common abbreviations that should not trigger sentence splits. */
const ABBR_GUARD = /\b(Sdn|Bhd|e\.g|i\.e|etc|vs|approx|govt|dept|no)\.\s/gi;

function summarizeText(rawText) {
  let clean = cleanMarkdown(rawText);
  if (!clean) return "";

  // Protect abbreviations from sentence splitting
  clean = clean.replace(ABBR_GUARD, (m) => m.replace(". ", "·"));

  const sentences = clean
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.length > 15);

  // Restore abbreviation dots
  const restored = sentences.map((s) => s.replace(/·/g, ". "));

  if (restored.length === 0) return clean.slice(0, 180).replace(/·/g, ". ");
  const selected = restored.slice(0, 2).join(" ");
  return selected.length > 200 ? `${selected.slice(0, 197)}...` : selected;
}

function extractSections(markdownBody) {
  const lines = markdownBody.split("\n");
  const sections = [];
  let currentH2 = null;
  let currentHeading = "Overview";
  let currentLines = [];

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = !h2Match && line.match(/^###\s+(.+)$/);

    if (h2Match || h3Match) {
      if (currentLines.length > 0) {
        const bodyText = currentLines.join("\n").trim();
        if (bodyText) {
          sections.push({
            heading: currentHeading,
            summary: summarizeText(bodyText),
            content: bodyText.slice(0, 1500),
            systemTags: deriveSystemTags(bodyText),
          });
        }
      }
      if (h2Match) {
        currentH2 = h2Match[1].replace(/[`*_]/g, "").trim();
        currentHeading = currentH2;
      } else {
        const h3Name = h3Match[1].replace(/[`*_]/g, "").trim();
        currentHeading = currentH2 ? `${currentH2} — ${h3Name}` : h3Name;
      }
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  if (currentLines.length > 0) {
    const bodyText = currentLines.join("\n").trim();
    if (bodyText) {
      sections.push({
        heading: currentHeading,
        summary: summarizeText(bodyText),
        content: bodyText.slice(0, 1500),
        systemTags: deriveSystemTags(bodyText),
      });
    }
  }

  return sections;
}

/** Stop words to exclude from keyword tags. */
const STOP_WORDS = new Set([
  "this", "that", "with", "from", "your", "have", "will", "they", "been",
  "each", "when", "what", "which", "their", "than", "also", "more", "some",
  "into", "only", "does", "just", "like", "over", "such", "most", "very",
  "once", "both", "here", "page", "explains", "about", "these", "those",
  "other", "make", "after", "before", "where", "while", "used", "using",
]);

function extractTags(title, content) {
  const words = `${title} ${content}`
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP_WORDS.has(w));
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

    // Skip homepage (layout: home) — not useful as knowledge
    if (parsed.data.layout === "home") continue;

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
    version: "3.0",
    generatedAt: new Date().toISOString(),
    totalArticles: articles.length,
    articles,
  };

  await mkdir(publicRoot, { recursive: true });
  const outputPath = path.join(publicRoot, "knowledge-base.json");
  await writeFile(outputPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Generated knowledge-base.json (v3.0) with ${articles.length} articles at ${outputPath}`);
}

buildKnowledgeBase().catch((err) => {
  console.error("Failed to generate knowledge base:", err);
  process.exit(1);
});
