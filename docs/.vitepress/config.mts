import fs from "fs";
import path from "path";
import { defineConfig, HeadConfig } from "vitepress";
import {
  buildSidebar,
  EN_LABELS,
  MS_LABELS,
  ZH_LABELS,
  TA_LABELS,
} from "./sidebar";

let socialManifest: Record<
  string,
  {
    route: string;
    image: string;
    url: string;
    ogLocale: string;
    title: string;
    description: string;
  }
> = {};

const manifestPath = path.resolve(__dirname, ".generated/social-images.json");
if (fs.existsSync(manifestPath)) {
  try {
    socialManifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (e) {
    // Ignore if not yet generated
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MYSverse Wiki",
  titleTemplate: "MYSwiki",
  description: "Documenting MYSverse, one experience at a time",
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    const title =
      pageData.frontmatter.title || pageData.title || "MYSverse Wiki";
    const description =
      pageData.frontmatter.description ||
      "Documenting MYSverse, one experience at a time";

    let pageRecord = socialManifest[pageData.relativePath];
    if (!pageRecord) {
      if (pageData.relativePath === "404.md" && socialManifest["index.md"]) {
        pageRecord = socialManifest["index.md"];
      } else {
        pageRecord = {
          route: "/",
          image: "/social/index.jpg",
          url: "https://mys.wiki/social/index.jpg",
          ogLocale: "en_MY",
          title,
          description,
        };
      }
    }

    const cleanRoute =
      pageData.relativePath === "404.md"
        ? "https://mys.wiki/404"
        : `https://mys.wiki${pageRecord.route}`;

    const imageUrl = pageRecord.url;
    const ogLocale = pageRecord.ogLocale;
    const imageAlt = `MYSverse Wiki — ${title}`;

    head.push(["meta", { property: "og:title", content: title }]);
    head.push(["meta", { property: "og:description", content: description }]);
    head.push(["meta", { property: "og:url", content: cleanRoute }]);
    head.push(["meta", { property: "og:type", content: "website" }]);
    head.push(["meta", { property: "og:site_name", content: "MYSverse Wiki" }]);
    head.push(["meta", { property: "og:locale", content: ogLocale }]);
    head.push(["meta", { property: "og:image", content: imageUrl }]);
    head.push(["meta", { property: "og:image:secure_url", content: imageUrl }]);
    head.push(["meta", { property: "og:image:type", content: "image/jpeg" }]);
    head.push(["meta", { property: "og:image:width", content: "1200" }]);
    head.push(["meta", { property: "og:image:height", content: "630" }]);
    head.push(["meta", { property: "og:image:alt", content: imageAlt }]);

    head.push(["meta", { name: "twitter:card", content: "summary_large_image" }]);
    head.push(["meta", { name: "twitter:title", content: title }]);
    head.push(["meta", { name: "twitter:description", content: description }]);
    head.push(["meta", { name: "twitter:image", content: imageUrl }]);
    head.push(["meta", { name: "twitter:image:alt", content: imageAlt }]);

    head.push(["link", { rel: "canonical", href: cleanRoute }]);

    return head;
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/logo.svg",
      dark: "/logo_dark.svg",
      alt: "MYSwiki Logo",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "MYSverse", link: "https://mysver.se" },
      { text: "Blog", link: "https://blog.mysver.se" },
      { text: "Sentral", link: "https://sentral.mysver.se" },
      { text: "FAQ", link: "/faq/ban" },
    ],
    sidebar: buildSidebar("", EN_LABELS),
    socialLinks: [{ icon: "github", link: "https://github.com/mysverse" }],
    editLink: {
      pattern: "https://github.com/mysverse/wiki/edit/main/docs/:path",
    },
    search: {
      provider: "local",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    ms: {
      label: "Bahasa Melayu",
      lang: "ms",
      themeConfig: {
        nav: [
          { text: "Utama", link: "/ms" },
          { text: "MYSverse", link: "https://mysver.se" },
          { text: "Blog", link: "https://blog.mysver.se" },
          { text: "Sentral", link: "https://sentral.mysver.se" },
          { text: "Soalan lazim", link: "/ms/faq/ban" },
        ],
        sidebar: buildSidebar("/ms", MS_LABELS),
        editLink: {
          pattern: "https://github.com/mysverse/wiki/edit/main/docs/:path",
          text: "Sunting halaman ini di GitHub",
        },
        outlineTitle: "Di halaman ini",
      },
    },
    zh: {
      label: "华文",
      lang: "zh",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh" },
          { text: "MYSverse", link: "https://mysver.se" },
          { text: "博客", link: "https://blog.mysver.se" },
          { text: "中心", link: "https://sentral.mysver.se" },
          { text: "常见问题", link: "/zh/faq/ban" },
        ],
        sidebar: buildSidebar("/zh", ZH_LABELS),
        editLink: {
          pattern: "https://github.com/mysverse/wiki/edit/main/docs/:path",
          text: "在 GitHub 上编辑此页",
        },
        outlineTitle: "本页内容",
      },
    },
    ta: {
      label: "தமிழ்",
      lang: "ta",
      themeConfig: {
        nav: [
          { text: "முகப்பு", link: "/ta" },
          { text: "MYSverse", link: "https://mysver.se" },
          { text: "வலைப்பதிவு", link: "https://blog.mysver.se" },
          { text: "Sentral", link: "https://sentral.mysver.se" },
          { text: "அடிக்கடி கேட்கப்படும் கேள்விகள்", link: "/ta/faq/ban" },
        ],
        sidebar: buildSidebar("/ta", TA_LABELS),
        editLink: {
          pattern: "https://github.com/mysverse/wiki/edit/main/docs/:path",
          text: "இந்தப் பக்கத்தை GitHub-இல் திருத்தவும்",
        },
        outlineTitle: "இந்தப் பக்கத்தில்",
      },
    },
  },
});
