import fs from "fs";
import path from "path";
import crypto from "crypto";
import matter from "gray-matter";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT_DIR, "docs");
const OUTPUT_DIR = path.join(DOCS_DIR, "public", "social");
const MANIFEST_PATH = path.join(
  DOCS_DIR,
  ".vitepress",
  ".generated",
  "social-images.json"
);

// Load local font files as base64 for embedding in SVG
const psFontPath = path.join(
  path.dirname(require.resolve("@fontsource-variable/public-sans/package.json")),
  "files/public-sans-latin-wght-normal.woff2"
);
const scFontPath = path.join(
  path.dirname(require.resolve("@fontsource/noto-sans-sc/package.json")),
  "files/noto-sans-sc-chinese-simplified-400-normal.woff"
);
const taFontPath = path.join(
  path.dirname(require.resolve("@fontsource/noto-sans-tamil/package.json")),
  "files/noto-sans-tamil-tamil-400-normal.woff"
);

const psB64 = fs.readFileSync(psFontPath).toString("base64");
const scB64 = fs.readFileSync(scFontPath).toString("base64");
const taB64 = fs.readFileSync(taFontPath).toString("base64");

// Helper to escape text for XML / Pango
function escapeXml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Helper to strip Markdown formatting
function stripMarkdown(str) {
  if (!str) return "";
  return str
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Links [text](url) -> text
    .replace(/`([^`]+)`/g, "$1") // Code `text` -> text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // Bold **text** -> text
    .replace(/\*([^*]+)\*/g, "$1") // Italic *text* -> text
    .replace(/_([^_]+)_/g, "$1"); // Italic _text_ -> text
}

// Script-aware text wrapping using Intl.Segmenter
function wrapText(text, locale, maxCharsPerLine, maxLines) {
  const segLocale = ["zh", "ta", "ms", "en"].includes(locale) ? locale : "en";
  const segmenter = new Intl.Segmenter(segLocale, { granularity: "word" });
  const segments = Array.from(segmenter.segment(text)).map((s) => s.segment);

  let lines = [];
  let currentLine = "";

  for (const seg of segments) {
    if ((currentLine + seg).length <= maxCharsPerLine) {
      currentLine += seg;
    } else {
      if (currentLine.trim()) lines.push(currentLine.trim());
      currentLine = seg;
    }
  }
  if (currentLine.trim()) lines.push(currentLine.trim());

  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    let last = lines[maxLines - 1];
    lines[maxLines - 1] =
      last.length > maxCharsPerLine - 2
        ? last.slice(0, maxCharsPerLine - 2) + "…"
        : last + "…";
  }

  return lines;
}

// Discover all .md files under docs/ (excluding .vitepress and public)
function findMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "public") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".vitepress") continue;
      files = files.concat(findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

// Clean up previous social images output directory
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const manifestDir = path.dirname(MANIFEST_PATH);
if (!fs.existsSync(manifestDir)) {
  fs.mkdirSync(manifestDir, { recursive: true });
}

// Pre-load artwork assets
const ARTWORK_MAP = {
  bandaraya: path.join(DOCS_DIR, "public/images/bandaraya/klcc.png"),
  lebuhraya: path.join(DOCS_DIR, "public/images/lebuhraya/main-menu.png"),
  sumaya: path.join(DOCS_DIR, "public/images/sumaya/sumaya_feature.webp"),
};

// Pre-resize artwork buffers to 1200x630
const ARTWORK_BUFFERS = {};
for (const [key, imgPath] of Object.entries(ARTWORK_MAP)) {
  if (fs.existsSync(imgPath)) {
    ARTWORK_BUFFERS[key] = await sharp(imgPath)
      .resize(1200, 630, { fit: "cover", position: "center" })
      .toBuffer();
  }
}

// Generate Home / FAQ vector background
async function createHomeBackground() {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="50%" stop-color="#1E1B4B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>
      <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#805AD5" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#3182CE" stop-opacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)" />
    <circle cx="1000" cy="150" r="350" fill="url(#circleGrad)" />
    <circle cx="850" cy="450" r="250" fill="url(#circleGrad)" />
  </svg>`;
  return sharp(Buffer.from(svg)).toBuffer();
}

const HOME_BG_BUFFER = await createHomeBackground();

// Main generator execution
async function main() {
  const mdFiles = findMarkdownFiles(DOCS_DIR);
  console.log(`Found ${mdFiles.length} Markdown pages for social card generation.`);

  const manifest = {};
  let generatedCount = 0;

  for (const filePath of mdFiles) {
    const relativePath = path
      .relative(DOCS_DIR, filePath)
      .replace(/\\/g, "/");

    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    if (!data.title || typeof data.title !== "string" || !data.title.trim()) {
      console.error(`ERROR: Missing title frontmatter in ${relativePath}`);
      process.exit(1);
    }
    if (
      !data.description ||
      typeof data.description !== "string" ||
      !data.description.trim()
    ) {
      console.error(`ERROR: Missing description frontmatter in ${relativePath}`);
      process.exit(1);
    }

    const cleanTitle = stripMarkdown(data.title.trim());
    const cleanDesc = stripMarkdown(data.description.trim());

    // Determine locale, route, game, theme color, and badge label
    let locale = "en";
    let ogLocale = "en_MY";
    let pathParts = relativePath.split("/");

    if (["ms", "zh", "ta"].includes(pathParts[0])) {
      locale = pathParts[0];
      ogLocale = `${locale}_MY`;
      pathParts.shift();
    }

    let routePath = "/" + relativePath.replace(/\.md$/, "");
    if (relativePath === "index.md") {
      routePath = "/";
    } else if (relativePath === `${locale}/index.md`) {
      routePath = `/${locale}/`;
    }

    // Determine game / category
    let category = "home";
    let gameLabel = "MYSVERSE WIKI";
    let themeColor = "#805AD5"; // Purple for Home/FAQ
    let bgBuffer = HOME_BG_BUFFER;

    const gameSubPath = pathParts.join("/");
    if (gameSubPath.startsWith("bandaraya/")) {
      category = "bandaraya";
      gameLabel = "BANDARAYA";
      themeColor = "#E53E3E";
      bgBuffer = ARTWORK_BUFFERS.bandaraya || HOME_BG_BUFFER;
    } else if (gameSubPath.startsWith("lebuhraya/")) {
      category = "lebuhraya";
      gameLabel = "LEBUHRAYA";
      themeColor = "#38A169";
      bgBuffer = ARTWORK_BUFFERS.lebuhraya || HOME_BG_BUFFER;
    } else if (gameSubPath.startsWith("sumaya/")) {
      category = "sumaya";
      gameLabel = "SUMAYA";
      themeColor = "#DD6B20";
      bgBuffer = ARTWORK_BUFFERS.sumaya || HOME_BG_BUFFER;
    } else if (gameSubPath.startsWith("faq/")) {
      category = "faq";
      gameLabel = "FAQ";
      themeColor = "#3182CE";
      bgBuffer = HOME_BG_BUFFER;
    }

    const localeLabel = locale.toUpperCase();

    // Dark left-to-right gradient overlay
    const overlaySvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0b0f19" stop-opacity="0.95" />
          <stop offset="55%" stop-color="#0b0f19" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#0b0f19" stop-opacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
    </svg>`;

    // Format Title with dynamic font sizing & word wrapping
    let titleFontSize = 64;
    let titleLineHeight = 76;
    let maxChars = 30;
    if (locale === "zh") maxChars = 16;
    if (locale === "ta") maxChars = 22;

    let titleLines = wrapText(cleanTitle, locale, maxChars, 3);

    if (titleLines.length > 3 || (titleLines.length === 3 && cleanTitle.length > maxChars * 2.5)) {
      titleFontSize = 54;
      titleLineHeight = 64;
      maxChars = Math.floor(maxChars * 1.25);
      titleLines = wrapText(cleanTitle, locale, maxChars, 3);
    }
    if (titleLines.length > 3 || (titleLines.length === 3 && cleanTitle.length > maxChars * 2.5)) {
      titleFontSize = 44;
      titleLineHeight = 54;
      maxChars = Math.floor(maxChars * 1.3);
      titleLines = wrapText(cleanTitle, locale, maxChars, 3);
    }

    const titleTspans = titleLines
      .map(
        (line, idx) =>
          `<tspan x="64" dy="${idx === 0 ? 0 : titleLineHeight}">${escapeXml(line)}</tspan>`
      )
      .join("\n");

    // Format Description
    let descMaxChars = 80;
    if (locale === "zh") descMaxChars = 40;
    if (locale === "ta") descMaxChars = 60;

    const descLines = wrapText(cleanDesc, locale, descMaxChars, 3);
    const descTspans = descLines
      .map(
        (line, idx) =>
          `<tspan x="64" dy="${idx === 0 ? 0 : 36}">${escapeXml(line)}</tspan>`
      )
      .join("\n");

    const titleY = 200;
    const descY = titleY + titleLines.length * titleLineHeight + 24;

    const foregroundSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <style>
        @font-face {
          font-family: "Public Sans Local";
          src: url("data:font/woff2;base64,${psB64}") format("woff2");
        }
        @font-face {
          font-family: "Noto Sans SC Local";
          src: url("data:font/woff;base64,${scB64}") format("woff");
        }
        @font-face {
          font-family: "Noto Sans Tamil Local";
          src: url("data:font/woff;base64,${taB64}") format("woff");
        }
        .font-main {
          font-family: "Public Sans Local", "Noto Sans SC Local", "Noto Sans Tamil Local", sans-serif;
        }
      </style>
      
      <!-- Header Badge -->
      <text x="64" y="90" class="font-main" font-size="22" font-weight="800" fill="${themeColor}" letter-spacing="2">${escapeXml(gameLabel)}</text>
      <rect x="${64 + gameLabel.length * 15 + 20}" y="70" width="46" height="26" rx="4" fill="${themeColor}" fill-opacity="0.2" stroke="${themeColor}" stroke-width="1" />
      <text x="${64 + gameLabel.length * 15 + 43}" y="88" class="font-main" font-size="14" font-weight="700" fill="${themeColor}" text-anchor="middle">${localeLabel}</text>

      <!-- Title -->
      <text x="64" y="${titleY}" class="font-main" font-size="${titleFontSize}" font-weight="800" fill="#FFFFFF">
        ${titleTspans}
      </text>

      <!-- Description -->
      <text x="64" y="${descY}" class="font-main" font-size="24" fill="#CBD5E0">
        ${descTspans}
      </text>

      <!-- Footer -->
      <text x="64" y="566" class="font-main" font-size="20" font-weight="600" fill="#A0AEC0" letter-spacing="1">mys.wiki</text>
    </svg>`;

    // Composite card JPEG
    const jpegBuffer = await sharp(bgBuffer)
      .composite([
        { input: Buffer.from(overlaySvg) },
        { input: Buffer.from(foregroundSvg) },
      ])
      .jpeg({ quality: 85, progressive: true, chromaSubsampling: "4:4:4" })
      .toBuffer();

    // Calculate 12-char SHA-1 hash
    const hash = crypto
      .createHash("sha1")
      .update(jpegBuffer)
      .digest("hex")
      .slice(0, 12);

    // Save image to output directory
    const outputSubDir = path.join(
      OUTPUT_DIR,
      path.dirname(relativePath)
    );
    fs.mkdirSync(outputSubDir, { recursive: true });

    const baseName = path.basename(relativePath, ".md");
    const imageFilename = `${baseName}.${hash}.jpg`;
    const imagePathOnDisk = path.join(outputSubDir, imageFilename);

    fs.writeFileSync(imagePathOnDisk, jpegBuffer);
    generatedCount++;

    // Compute relative web path & full canonical URL
    const relWebPath =
      "/social/" +
      (path.dirname(relativePath) === "."
        ? ""
        : path.dirname(relativePath) + "/") +
      imageFilename;

    const fullImageUrl = `https://mys.wiki${relWebPath}`;

    manifest[relativePath] = {
      route: routePath,
      image: relWebPath,
      url: fullImageUrl,
      ogLocale: ogLocale,
      title: cleanTitle,
      description: cleanDesc,
    };
  }

  // Write manifest file
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");
  console.log(
    `Successfully generated ${generatedCount} social preview cards and manifest.`
  );
}

main().catch((err) => {
  console.error("Failed to generate social images:", err);
  process.exit(1);
});
