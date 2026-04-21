import type { DefaultTheme } from "vitepress";

export type LabelKey =
  | "bandaraya"
  | "lebuhraya"
  | "sumaya"
  | "faq"
  | "getStarted"
  | "teams"
  | "jobs"
  | "economy"
  | "vehicles"
  | "gettingAround"
  | "shops"
  | "locations"
  | "emergencyServices"
  | "combatAndHealth"
  | "arrestAndLaw"
  | "phone"
  | "tablet"
  | "gamepasses"
  | "rules"
  | "glossary"
  | "faqPage"
  | "controls"
  | "map"
  | "housing"
  | "socialFeatures"
  | "passesAndBoosts"
  | "economyXp"
  | "progression"
  | "overview"
  | "jobsFishing"
  | "jobsService"
  | "jobsPalmOil"
  | "polis"
  | "bomba"
  | "kesihatan"
  | "crimeAndLaw"
  | "quests"
  | "tipsAndTricks"
  | "faqOvercomingBans";

export type Labels = Record<LabelKey, string>;

export function buildSidebar(
  localePrefix: string,
  L: Labels
): DefaultTheme.SidebarItem[] {
  const p = localePrefix;
  return [
    {
      text: `🌆 ${L.bandaraya}`,
      items: [
        { text: L.getStarted, link: `${p}/bandaraya/get-started` },
        { text: L.teams, link: `${p}/bandaraya/teams` },
        { text: L.jobs, link: `${p}/bandaraya/jobs` },
        { text: L.economy, link: `${p}/bandaraya/economy` },
        { text: L.vehicles, link: `${p}/bandaraya/vehicles` },
        { text: L.gettingAround, link: `${p}/bandaraya/getting-around` },
        { text: L.shops, link: `${p}/bandaraya/shops` },
        { text: L.locations, link: `${p}/bandaraya/locations` },
        { text: L.emergencyServices, link: `${p}/bandaraya/emergency-services` },
        { text: L.combatAndHealth, link: `${p}/bandaraya/combat-and-health` },
        { text: L.arrestAndLaw, link: `${p}/bandaraya/arrest-and-law` },
        { text: L.phone, link: `${p}/bandaraya/phone` },
        { text: L.tablet, link: `${p}/bandaraya/tablet` },
        { text: L.gamepasses, link: `${p}/bandaraya/gamepasses` },
        { text: L.rules, link: `${p}/bandaraya/rules` },
        { text: L.glossary, link: `${p}/bandaraya/glossary` },
        { text: L.faqPage, link: `${p}/bandaraya/faq` },
      ],
    },
    {
      text: `🛣️ ${L.lebuhraya}`,
      items: [
        { text: L.getStarted, link: `${p}/lebuhraya/get-started` },
        { text: L.controls, link: `${p}/lebuhraya/controls` },
        { text: L.teams, link: `${p}/lebuhraya/teams` },
        { text: L.jobs, link: `${p}/lebuhraya/jobs` },
        { text: L.economyXp, link: `${p}/lebuhraya/economy` },
        { text: L.vehicles, link: `${p}/lebuhraya/vehicles` },
        { text: L.shops, link: `${p}/lebuhraya/shops` },
        { text: L.map, link: `${p}/lebuhraya/map` },
        { text: L.housing, link: `${p}/lebuhraya/housing` },
        { text: L.socialFeatures, link: `${p}/lebuhraya/social-features` },
        { text: L.passesAndBoosts, link: `${p}/lebuhraya/passes-and-boosts` },
        { text: L.faqPage, link: `${p}/lebuhraya/faq` },
      ],
    },
    {
      text: `🌅 ${L.sumaya}`,
      items: [
        { text: L.getStarted, link: `${p}/sumaya/get-started` },
        { text: L.teams, link: `${p}/sumaya/teams` },
        { text: L.phone, link: `${p}/sumaya/phone` },
        { text: L.economy, link: `${p}/sumaya/economy` },
        { text: L.progression, link: `${p}/sumaya/progression` },
        {
          text: L.jobs,
          collapsed: true,
          items: [
            { text: L.overview, link: `${p}/sumaya/jobs` },
            { text: L.jobsFishing, link: `${p}/sumaya/jobs-fishing` },
            { text: L.jobsService, link: `${p}/sumaya/jobs-service` },
            { text: L.jobsPalmOil, link: `${p}/sumaya/jobs-palm-oil` },
          ],
        },
        {
          text: L.emergencyServices,
          collapsed: true,
          items: [
            { text: L.overview, link: `${p}/sumaya/emergency-services` },
            { text: L.polis, link: `${p}/sumaya/polis` },
            { text: L.bomba, link: `${p}/sumaya/bomba` },
            { text: L.kesihatan, link: `${p}/sumaya/kesihatan` },
          ],
        },
        { text: L.vehicles, link: `${p}/sumaya/vehicles` },
        { text: L.housing, link: `${p}/sumaya/housing` },
        { text: L.crimeAndLaw, link: `${p}/sumaya/crime-and-law` },
        { text: L.quests, link: `${p}/sumaya/quests` },
        { text: L.tipsAndTricks, link: `${p}/sumaya/tips-and-tricks` },
        { text: L.glossary, link: `${p}/sumaya/glossary` },
      ],
    },
    {
      text: `❓ ${L.faq}`,
      items: [{ text: L.faqOvercomingBans, link: `${p}/faq/ban` }],
    },
  ];
}

export const EN_LABELS: Labels = {
  bandaraya: "Bandaraya",
  lebuhraya: "Lebuhraya",
  sumaya: "Sumaya",
  faq: "FAQ",
  getStarted: "Get started",
  teams: "Teams",
  jobs: "Jobs",
  economy: "Economy",
  vehicles: "Vehicles",
  gettingAround: "Getting around",
  shops: "Shops",
  locations: "Locations",
  emergencyServices: "Emergency services",
  combatAndHealth: "Combat & health",
  arrestAndLaw: "Arrest & law",
  phone: "Phone",
  tablet: "Tablet",
  gamepasses: "Gamepasses",
  rules: "Rules",
  glossary: "Glossary",
  faqPage: "FAQ",
  controls: "Controls",
  map: "World & map",
  housing: "Housing",
  socialFeatures: "Social features",
  passesAndBoosts: "Passes & boosts",
  economyXp: "Economy & XP",
  progression: "Progression",
  overview: "Overview",
  jobsFishing: "Fishing",
  jobsService: "Service sector",
  jobsPalmOil: "Palm oil",
  polis: "Polis",
  bomba: "Bomba",
  kesihatan: "Kesihatan",
  crimeAndLaw: "Crime & law",
  quests: "Quests",
  tipsAndTricks: "Tips & tricks",
  faqOvercomingBans: "Overcoming bans",
};

export const MS_LABELS: Labels = {
  bandaraya: "Bandaraya",
  lebuhraya: "Lebuhraya",
  sumaya: "Sumaya",
  faq: "Soalan lazim",
  getStarted: "Mula",
  teams: "Pasukan",
  jobs: "Kerjaya",
  economy: "Ekonomi",
  vehicles: "Kenderaan",
  gettingAround: "Pengangkutan awam",
  shops: "Kedai",
  locations: "Lokasi",
  emergencyServices: "Perkhidmatan kecemasan",
  combatAndHealth: "Pertempuran & kesihatan",
  arrestAndLaw: "Tangkapan & undang-undang",
  phone: "Telefon",
  tablet: "Tablet",
  gamepasses: "Gamepass",
  rules: "Peraturan",
  glossary: "Glosari",
  faqPage: "Soalan lazim",
  controls: "Kawalan",
  map: "Dunia & peta",
  housing: "Perumahan",
  socialFeatures: "Ciri sosial",
  passesAndBoosts: "Pas & peningkatan",
  economyXp: "Ekonomi & XP",
  progression: "Kemajuan",
  overview: "Gambaran keseluruhan",
  jobsFishing: "Memancing",
  jobsService: "Sektor perkhidmatan",
  jobsPalmOil: "Kelapa sawit",
  polis: "Polis",
  bomba: "Bomba",
  kesihatan: "Kesihatan",
  crimeAndLaw: "Jenayah & undang-undang",
  quests: "Misi",
  tipsAndTricks: "Petua & helah",
  faqOvercomingBans: "Mengatasi larangan",
};

export const ZH_LABELS: Labels = {
  bandaraya: "城市",
  lebuhraya: "高速公路",
  sumaya: "Sumaya",
  faq: "常见问题",
  getStarted: "入门",
  teams: "队伍",
  jobs: "工作",
  economy: "经济",
  vehicles: "车辆",
  gettingAround: "公共交通",
  shops: "商店",
  locations: "地点",
  emergencyServices: "紧急服务",
  combatAndHealth: "战斗与健康",
  arrestAndLaw: "逮捕与法律",
  phone: "手机",
  tablet: "平板电脑",
  gamepasses: "通行证",
  rules: "规则",
  glossary: "术语表",
  faqPage: "常见问题",
  controls: "操作",
  map: "世界与地图",
  housing: "房屋",
  socialFeatures: "社交功能",
  passesAndBoosts: "通行证与加成",
  economyXp: "经济与经验值",
  progression: "进度",
  overview: "概览",
  jobsFishing: "钓鱼",
  jobsService: "服务业",
  jobsPalmOil: "油棕业",
  polis: "警察",
  bomba: "消防",
  kesihatan: "医护",
  crimeAndLaw: "犯罪与法律",
  quests: "任务",
  tipsAndTricks: "小贴士",
  faqOvercomingBans: "解除封禁指南",
};

export const TA_LABELS: Labels = {
  bandaraya: "நகரம்",
  lebuhraya: "நெடுஞ்சாலை",
  sumaya: "Sumaya",
  faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  getStarted: "தொடங்கு",
  teams: "அணிகள்",
  jobs: "வேலைகள்",
  economy: "பொருளாதாரம்",
  vehicles: "வாகனங்கள்",
  gettingAround: "பொதுப் போக்குவரத்து",
  shops: "கடைகள்",
  locations: "இடங்கள்",
  emergencyServices: "அவசர சேவைகள்",
  combatAndHealth: "போர் & சுகாதாரம்",
  arrestAndLaw: "கைது & சட்டம்",
  phone: "தொலைபேசி",
  tablet: "டேப்லெட்",
  gamepasses: "கேம்பாஸ்கள்",
  rules: "விதிகள்",
  glossary: "சொற்களஞ்சியம்",
  faqPage: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  controls: "கட்டுப்பாடுகள்",
  map: "உலகம் & வரைபடம்",
  housing: "வீடு",
  socialFeatures: "சமூக அம்சங்கள்",
  passesAndBoosts: "பாஸ்கள் & பூஸ்டுகள்",
  economyXp: "பொருளாதாரம் & XP",
  progression: "முன்னேற்றம்",
  overview: "கண்ணோட்டம்",
  jobsFishing: "மீன்பிடி",
  jobsService: "சேவைத் துறை",
  jobsPalmOil: "பனை எண்ணெய்",
  polis: "போலீஸ்",
  bomba: "தீயணைப்பு",
  kesihatan: "மருத்துவம்",
  crimeAndLaw: "குற்றம் & சட்டம்",
  quests: "பணிகள்",
  tipsAndTricks: "குறிப்புகள் & தந்திரங்கள்",
  faqOvercomingBans: "தடையைக் கடக்க",
};
