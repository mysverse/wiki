import DefaultTheme from "vitepress/theme-without-fonts";
import "@fontsource-variable/public-sans/index.css";
import "@fontsource-variable/public-sans/wght-italic.css";
import Layout from "./Layout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout,
};
