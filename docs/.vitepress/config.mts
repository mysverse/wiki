import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MYSverse Wiki",
  titleTemplate: "MYSwiki",
  description: "Documenting MYSverse, one experience at a time",
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
          { text: "Utama", link: "/" },
          { text: "MYSverse", link: "https://mysver.se" },
          { text: "Blog", link: "https://blog.mysver.se" },
          { text: "Sentral", link: "https://sentral.mysver.se" },
        ],
      },
    },
  },
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
    ],
    sidebar: [
      {
        text: "🌆 Bandaraya",
        items: [{ text: "Get started", link: "/bandaraya/get-started" }],
      },
      {
        text: "🛣️ Lebuhraya",
        items: [{ text: "Get started", link: "/lebuhraya/get-started" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/mysverse" }],
    editLink: {
      pattern: "https://github.com/mysverse/wiki/edit/main/docs/:path",
    },
  },
});
