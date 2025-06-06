import { defineConfig, HeadConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MYSverse Wiki",
  titleTemplate: "MYSwiki",
  description: "Documenting MYSverse, one experience at a time",
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    // Use frontmatter title or fallback to site title
    const title =
      pageData.frontmatter.title || pageData.title || "MYSverse Wiki";
    const description =
      pageData.frontmatter.description ||
      "Documenting MYSverse, one experience at a time";

    head.push(["meta", { property: "og:title", content: title }]);
    head.push(["meta", { property: "og:description", content: description }]);
    head.push(["meta", { name: "twitter:title", content: title }]);
    head.push(["meta", { name: "twitter:description", content: description }]);

    return head;
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      { property: "og:image", content: "https://mys.wiki/opengraph-image.png" },
    ],
    ["meta", { property: "og:url", content: "https://mys.wiki" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "MYSverse Wiki" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://mys.wiki/opengraph-image.png",
      },
    ],
  ],
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    sidebar: [
      {
        text: "🌆 Bandaraya",
        items: [{ text: "Get started", link: "/bandaraya/get-started" }],
      },
      {
        text: "🛣️ Lebuhraya",
        items: [
          { text: "Get started", link: "/lebuhraya/get-started" },
          {
            text: "Teams",
            link: "/lebuhraya/teams",
          },
          {
            text: "Features",
            link: "/lebuhraya/features",
          },
          { text: "Settings", link: "/lebuhraya/settings" },
          { text: "Shop", link: "/lebuhraya/shop" },
        ],
      },
      {
        text: "❓ FAQ",
        items: [{ text: "Overcoming Bans", link: "/faq/ban" }],
      },
    ],
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
        sidebar: [
          {
            text: "🌆 Bandaraya",
            items: [{ text: "Mula", link: "/ms/bandaraya/get-started" }],
          },
          {
            text: "🛣️ Lebuhraya",
            items: [{ text: "Mula", link: "/ms/lebuhraya/get-started" }],
          },
          {
            text: "❓ Soalan lazim",
            items: [{ text: "Mengatasi larangan", link: "/ms/faq/ban" }],
          },
        ],
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
        sidebar: [
          {
            text: "🌆 城市",
            items: [{ text: "入门", link: "/zh/bandaraya/get-started" }],
          },
          {
            text: "🛣️ 高速公路",
            items: [{ text: "入门", link: "/zh/lebuhraya/get-started" }],
          },
          {
            text: "❓ 常见问题",
            items: [{ text: "解除封禁指南", link: "/zh/faq/ban" }],
          },
        ],

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
        sidebar: [
          {
            text: "🌆 நகரம்",
            items: [{ text: "தொடங்கு", link: "/ta/bandaraya/get-started" }],
          },
          {
            text: "🛣️ நெடுஞ்சாலை",
            items: [{ text: "தொடங்கு", link: "/ta/lebuhraya/get-started" }],
          },
          {
            text: "❓ அடிக்கடி கேட்கப்படும் கேள்விகள்",
            items: [{ text: "தடையைக் கடக்க", link: "/ta/faq/ban" }],
          },
        ],

        editLink: {
          pattern: "https://github.com/mysverse/wiki/edit/main/docs/:path",
          text: "இந்தப் பக்கத்தை GitHub-இல் திருத்தவும்",
        },
        outlineTitle: "இந்தப் பக்கத்தில்",
      },
    },
  },
});
