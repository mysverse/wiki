import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT_DIR, "docs");
const MANIFEST_PATH = path.join(
  DOCS_DIR,
  ".vitepress",
  ".generated",
  "social-images.json"
);
const PUBLIC_SOCIAL_DIR = path.join(DOCS_DIR, "public", "social");
const DIST_DIR = path.join(DOCS_DIR, ".vitepress", "dist");

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

function findHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(findHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  console.log("Checking social preview images and manifest...");

  // 1. Verify manifest existence
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error(`ERROR: Manifest missing at ${MANIFEST_PATH}`);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  const mdFiles = findMarkdownFiles(DOCS_DIR);

  const mdRelPaths = new Set(
    mdFiles.map((f) => path.relative(DOCS_DIR, f).replace(/\\/g, "/"))
  );
  const manifestKeys = new Set(Object.keys(manifest));

  // 2. Verify 1:1 match between Markdown files and manifest records
  if (mdRelPaths.size !== manifestKeys.size) {
    console.error(
      `ERROR: Count mismatch! Markdown pages: ${mdRelPaths.size}, Manifest records: ${manifestKeys.size}`
    );
    process.exit(1);
  }

  for (const relPath of mdRelPaths) {
    if (!manifest[relPath]) {
      console.error(`ERROR: Page missing from manifest: ${relPath}`);
      process.exit(1);
    }
  }

  for (const key of manifestKeys) {
    if (!mdRelPaths.has(key)) {
      console.error(`ERROR: Stale manifest entry found for deleted page: ${key}`);
      process.exit(1);
    }
  }

  // 3. Verify JPEGs referenced in manifest
  let verifiedImagesCount = 0;
  for (const [relPath, record] of Object.entries(manifest)) {
    const relImagePath = record.image.replace(/^\/social\//, "");
    const imageDiskPath = path.join(PUBLIC_SOCIAL_DIR, relImagePath);

    if (!fs.existsSync(imageDiskPath)) {
      console.error(
        `ERROR: Referenced JPEG does not exist on disk: ${imageDiskPath}`
      );
      process.exit(1);
    }

    const stat = fs.statSync(imageDiskPath);
    if (stat.size > 500 * 1024) {
      console.error(
        `ERROR: Image size exceeds 500 KB limit (${stat.size} bytes): ${imageDiskPath}`
      );
      process.exit(1);
    }

    // Verify 12-char hex hash in filename
    const filename = path.basename(imageDiskPath);
    const hashMatch = filename.match(/\.([a-f0-9]{12})\.jpg$/);
    if (!hashMatch) {
      console.error(
        `ERROR: Image filename lacks valid 12-char hex content hash: ${filename}`
      );
      process.exit(1);
    }

    // Verify image dimensions with sharp
    const metadata = await sharp(imageDiskPath).metadata();
    if (metadata.width !== 1200 || metadata.height !== 630) {
      console.error(
        `ERROR: Invalid image dimensions (${metadata.width}x${metadata.height}): ${imageDiskPath}`
      );
      process.exit(1);
    }
    if (metadata.format !== "jpeg") {
      console.error(
        `ERROR: Invalid image format (${metadata.format}): ${imageDiskPath}`
      );
      process.exit(1);
    }

    verifiedImagesCount++;
  }

  console.log(
    `Validated ${verifiedImagesCount} card images on disk (all 1200x630 JPEGs < 500KB with 12-char hashes).`
  );

  // 4. Verify built HTML metadata if dist/ directory exists
  const htmlFiles = findHtmlFiles(DIST_DIR);
  if (htmlFiles.length > 0) {
    console.log(`Validating metadata in ${htmlFiles.length} built HTML files...`);

    let checkedHtmlCount = 0;

    for (const htmlPath of htmlFiles) {
      const html = fs.readFileSync(htmlPath, "utf8");

      // Assert no references to opengraph-image.png
      if (html.includes("opengraph-image.png")) {
        console.error(
          `ERROR: Built HTML contains reference to obsolete opengraph-image.png: ${htmlPath}`
        );
        process.exit(1);
      }

      // Check required meta tag presence
      const requiredProps = [
        'property="og:title"',
        'property="og:description"',
        'property="og:url"',
        'property="og:type"',
        'property="og:site_name"',
        'property="og:locale"',
        'property="og:image"',
        'property="og:image:secure_url"',
        'property="og:image:type"',
        'property="og:image:width"',
        'property="og:image:height"',
        'property="og:image:alt"',
        'name="twitter:card"',
        'name="twitter:title"',
        'name="twitter:description"',
        'name="twitter:image"',
        'name="twitter:image:alt"',
        'rel="canonical"',
      ];

      for (const prop of requiredProps) {
        const count = (html.match(new RegExp(prop, "g")) || []).length;
        if (count !== 1) {
          console.error(
            `ERROR: Expected exactly 1 instance of ${prop} in ${htmlPath}, found ${count}`
          );
          process.exit(1);
        }
      }

      // Special check for 404.html
      if (path.basename(htmlPath) === "404.html") {
        const homeRecord = manifest["index.md"];
        if (homeRecord && !html.includes(homeRecord.url)) {
          console.error(
            `ERROR: 404.html does not reference the English home social image URL (${homeRecord.url})`
          );
          process.exit(1);
        }
      }

      checkedHtmlCount++;
    }

    console.log(
      `Successfully verified Open Graph & Twitter metadata in all ${checkedHtmlCount} built HTML pages.`
    );
  } else {
    console.log(
      "Notice: dist/ directory not built yet. HTML meta tag verification skipped (will run after docs:build)."
    );
  }

  console.log("All social image checks passed successfully!");
}

main().catch((err) => {
  console.error("Check failed:", err);
  process.exit(1);
});
