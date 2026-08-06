import DefaultTheme from "vitepress/theme-without-fonts";
import "@fontsource-variable/public-sans/index.css";
import "@fontsource-variable/public-sans/wght-italic.css";
import Layout from "./Layout.vue";
import ProgressionLane from "./ProgressionLane.vue";
import ProgressionTrack from "./ProgressionTrack.vue";
import WaypointStep from "./WaypointStep.vue";
import WaypointSteps from "./WaypointSteps.vue";
import WikiFigure from "./WikiFigure.vue";
import WikiGallery from "./WikiGallery.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("ProgressionLane", ProgressionLane);
    app.component("ProgressionTrack", ProgressionTrack);
    app.component("WaypointStep", WaypointStep);
    app.component("WaypointSteps", WaypointSteps);
    app.component("WikiFigure", WikiFigure);
    app.component("WikiGallery", WikiGallery);
  },
};
