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
          { text: "Contoh", link: "/markdown-examples" },
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
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

    siteTitle: false,

    logo: {
      light: "/MYSwiki_Light.svg",
      dark: "/MYSwiki_Dark.svg",
      alt: "MYSwiki Logo",
    },
  },
});
