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
        items: [
          { text: "Get started", link: "/bandaraya/get-started" },
          { text: "Teams", link: "/bandaraya/teams" },
          { text: "Features", link: "/bandaraya/features" },
          { text: "Locations", link: "/bandaraya/locations" },
          { text: "Shops & Economy", link: "/bandaraya/shops" },
        ],
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
        text: "🌅 Sumaya",
        items: [
          { text: "Get started", link: "/sumaya/get-started" },
          { text: "Teams", link: "/sumaya/teams" },
          { text: "Features", link: "/sumaya/features" },
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
            items: [
              { text: "Mula", link: "/ms/bandaraya/get-started" },
              { text: "Pasukan", link: "/ms/bandaraya/teams" },
              { text: "Ciri-ciri", link: "/ms/bandaraya/features" },
              { text: "Lokasi", link: "/ms/bandaraya/locations" },
              { text: "Kedai & Ekonomi", link: "/ms/bandaraya/shops" },
            ],
          },
          {
            text: "🛣️ Lebuhraya",
            items: [
              { text: "Mula", link: "/ms/lebuhraya/get-started" },
              { text: "Pasukan", link: "/ms/lebuhraya/teams" },
              { text: "Ciri-ciri", link: "/ms/lebuhraya/features" },
              { text: "Tetapan", link: "/ms/lebuhraya/settings" },
              { text: "Kedai", link: "/ms/lebuhraya/shop" },
            ],
          },
          {
            text: "🌅 Sumaya",
            items: [
              { text: "Mula", link: "/ms/sumaya/get-started" },
              { text: "Pasukan", link: "/ms/sumaya/teams" },
              { text: "Ciri-ciri", link: "/ms/sumaya/features" },
            ],
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
            items: [
              { text: "入门", link: "/zh/bandaraya/get-started" },
              { text: "队伍", link: "/zh/bandaraya/teams" },
              { text: "功能", link: "/zh/bandaraya/features" },
              { text: "地点", link: "/zh/bandaraya/locations" },
              { text: "商店与经济", link: "/zh/bandaraya/shops" },
            ],
          },
          {
            text: "🛣️ 高速公路",
            items: [
              { text: "入门", link: "/zh/lebuhraya/get-started" },
              { text: "团队", link: "/zh/lebuhraya/teams" },
              { text: "功能", link: "/zh/lebuhraya/features" },
              { text: "设置", link: "/zh/lebuhraya/settings" },
              { text: "商店", link: "/zh/lebuhraya/shop" },
            ],
          },
          {
            text: "🌅 Sumaya",
            items: [
              { text: "入门", link: "/zh/sumaya/get-started" },
              { text: "队伍", link: "/zh/sumaya/teams" },
              { text: "功能", link: "/zh/sumaya/features" },
            ],
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
            items: [
              { text: "தொடங்கு", link: "/ta/bandaraya/get-started" },
              { text: "அணிகள்", link: "/ta/bandaraya/teams" },
              { text: "அம்சங்கள்", link: "/ta/bandaraya/features" },
              { text: "இடங்கள்", link: "/ta/bandaraya/locations" },
              { text: "கடைகள் & பொருளாதாரம்", link: "/ta/bandaraya/shops" },
            ],
          },
          {
            text: "🛣️ நெடுஞ்சாலை",
            items: [
              { text: "தொடங்கு", link: "/ta/lebuhraya/get-started" },
              { text: "அணிகள்", link: "/ta/lebuhraya/teams" },
              { text: "அம்சங்கள்", link: "/ta/lebuhraya/features" },
              { text: "அமைப்புகள்", link: "/ta/lebuhraya/settings" },
              { text: "கடை", link: "/ta/lebuhraya/shop" },
            ],
          },
          {
            text: "🌅 Sumaya",
            items: [
              { text: "தொடங்கு", link: "/ta/sumaya/get-started" },
              { text: "அணிகள்", link: "/ta/sumaya/teams" },
              { text: "அம்சங்கள்", link: "/ta/sumaya/features" },
            ],
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
