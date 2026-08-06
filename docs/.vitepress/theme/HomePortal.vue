<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { Motion, useReducedMotion } from "motion-v";
import { GAME_META, localePrefix, type GameId } from "./game";

interface GameCopy {
  description: string;
  topics: string[];
}

interface PortalCopy {
  kicker: string;
  title: string;
  intro: string;
  action: string;
  games: Record<GameId, GameCopy>;
  signals: Array<{ value: string; label: string }>;
}

const COPY: Record<string, PortalCopy> = {
  en: {
    kicker: "Choose your world",
    title: "Three places, one Malaysian community",
    intro: "Find your footing, pick a role and learn the systems that make each MYSverse experience its own place.",
    action: "Open player guide",
    games: {
      bandaraya: { description: "City roleplay across a living Kuala Lumpur, from transit and careers to emergency services.", topics: ["City life", "Teams", "Transit"] },
      lebuhraya: { description: "Drive, work and build a career across a Malaysian highway network made for shared journeys.", topics: ["Driving", "Careers", "Convoys"] },
      sumaya: { description: "Settle into a coastal town of fishing, public service, quests and slower community stories.", topics: ["Town life", "Progression", "Quests"] },
    },
    signals: [
      { value: "3", label: "Experiences" },
      { value: "4", label: "Languages" },
      { value: "Open", label: "Community edits" },
    ],
  },
  ms: {
    kicker: "Pilih dunia anda",
    title: "Tiga tempat, satu komuniti Malaysia",
    intro: "Mulakan langkah, pilih peranan dan pelajari sistem yang menjadikan setiap pengalaman MYSverse unik.",
    action: "Buka panduan pemain",
    games: {
      bandaraya: { description: "Roleplay bandar di Kuala Lumpur yang hidup, daripada transit dan kerjaya hingga perkhidmatan kecemasan.", topics: ["Hidup bandar", "Pasukan", "Transit"] },
      lebuhraya: { description: "Pandu, bekerja dan bina kerjaya merentasi rangkaian lebuh raya Malaysia untuk perjalanan bersama.", topics: ["Pemanduan", "Kerjaya", "Konvoi"] },
      sumaya: { description: "Nikmati pekan pesisir dengan memancing, khidmat awam, misi dan kisah komuniti yang santai.", topics: ["Hidup pekan", "Kemajuan", "Misi"] },
    },
    signals: [
      { value: "3", label: "Pengalaman" },
      { value: "4", label: "Bahasa" },
      { value: "Terbuka", label: "Suntingan komuniti" },
    ],
  },
  zh: {
    kicker: "选择你的世界",
    title: "三个地方，一个马来西亚社群",
    intro: "站稳脚步、选择角色，并了解每项 MYSverse 体验独有的游戏系统。",
    action: "打开玩家指南",
    games: {
      bandaraya: { description: "在鲜活的吉隆坡展开城市角色扮演，探索交通、职业与紧急服务。", topics: ["城市生活", "队伍", "交通"] },
      lebuhraya: { description: "在适合结伴上路的马来西亚高速公路网络中驾驶、工作并发展职业。", topics: ["驾驶", "职业", "车队"] },
      sumaya: { description: "走进海岸小镇，体验钓鱼、公共服务、任务与悠闲的社群故事。", topics: ["小镇生活", "进度", "任务"] },
    },
    signals: [
      { value: "3", label: "项体验" },
      { value: "4", label: "种语言" },
      { value: "开放", label: "社群编辑" },
    ],
  },
  ta: {
    kicker: "உங்கள் உலகைத் தேர்ந்தெடுங்கள்",
    title: "மூன்று இடங்கள், ஒரு மலேசியச் சமூகம்",
    intro: "உங்கள் பாதையைத் தொடங்கி, ஒரு பாத்திரத்தைத் தேர்ந்தெடுத்து, ஒவ்வொரு MYSverse அனுபவத்தையும் தனித்துவமாக்கும் அமைப்புகளைக் கற்றுக்கொள்ளுங்கள்.",
    action: "வீரர் வழிகாட்டியைத் திறக்கவும்",
    games: {
      bandaraya: { description: "போக்குவரத்து, வேலைகள் மற்றும் அவசரச் சேவைகளுடன் உயிரோட்டமான Kuala Lumpur நகர ரோல்பிளே.", topics: ["நகர வாழ்க்கை", "அணிகள்", "போக்குவரத்து"] },
      lebuhraya: { description: "பகிர்ந்த பயணங்களுக்கான மலேசிய நெடுஞ்சாலை வலையமைப்பில் ஓட்டி, வேலை செய்து, உங்கள் வாழ்க்கைத் தொழிலை வளருங்கள்.", topics: ["ஓட்டுதல்", "வேலைகள்", "வாகன அணிவகுப்பு"] },
      sumaya: { description: "மீன்பிடித்தல், பொதுச் சேவை, பணிகள் மற்றும் அமைதியான சமூகக் கதைகள் நிறைந்த கடற்கரை நகரம்.", topics: ["நகர வாழ்க்கை", "முன்னேற்றம்", "பணிகள்"] },
    },
    signals: [
      { value: "3", label: "அனுபவங்கள்" },
      { value: "4", label: "மொழிகள்" },
      { value: "திறந்தது", label: "சமூகத் திருத்தங்கள்" },
    ],
  },
};

const { lang } = useData();
const route = useRoute();
const shouldReduceMotion = useReducedMotion();
const locale = computed(() => (lang.value || "en").slice(0, 2));
const copy = computed(() => COPY[locale.value] || COPY.en);
const prefix = computed(() => localePrefix(route.path));
const games = Object.keys(GAME_META) as GameId[];

function initialFor(index: number) {
  if (shouldReduceMotion.value) return false;
  return { opacity: 0, y: 22 + index * 2 };
}
</script>

<template>
  <section id="explore-mysverse" class="home-portal" aria-labelledby="portal-title">
    <Motion
      as="header"
      class="portal-heading"
      :initial="shouldReduceMotion ? false : { opacity: 0, y: 18 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true, amount: 0.35 }"
      :transition="{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }"
    >
      <span>{{ copy.kicker }}</span>
      <h2 id="portal-title">{{ copy.title }}</h2>
      <p>{{ copy.intro }}</p>
    </Motion>

    <div class="portal-grid">
      <Motion
        v-for="(id, index) in games"
        :key="id"
        as="a"
        class="portal-card"
        :class="`portal-card-${id}`"
        :href="`${prefix}${GAME_META[id].getStartedPath}`"
        :initial="initialFor(index)"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :while-hover="shouldReduceMotion ? undefined : { y: -6 }"
        :while-press="shouldReduceMotion ? undefined : { scale: 0.985 }"
        :transition="{ delay: index * 0.07, duration: 0.48, ease: [0.22, 1, 0.36, 1] }"
      >
        <div class="portal-card-image">
          <img :src="GAME_META[id].image" alt="" loading="lazy" decoding="async" />
          <span>{{ GAME_META[id].icon }} {{ GAME_META[id].name }}</span>
        </div>
        <div class="portal-card-body">
          <p>{{ copy.games[id].description }}</p>
          <ul aria-label="Topics">
            <li v-for="topic in copy.games[id].topics" :key="topic">{{ topic }}</li>
          </ul>
          <strong>{{ copy.action }} <span aria-hidden="true">→</span></strong>
        </div>
      </Motion>
    </div>

    <div class="community-signals" aria-label="MYSverse wiki at a glance">
      <div v-for="signal in copy.signals" :key="signal.label">
        <strong>{{ signal.value }}</strong>
        <span>{{ signal.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-portal {
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
  padding: 72px 32px 38px;
}

.portal-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.72fr);
  gap: 10px 48px;
  align-items: end;
  margin-bottom: 30px;
}

.portal-heading > span {
  grid-column: 1 / -1;
  color: var(--mys-red);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.portal-heading h2 {
  margin: 0;
  max-width: 15ch;
  letter-spacing: -0.045em;
  line-height: 1.04;
  font-size: clamp(2.1rem, 4vw, 3.5rem);
  font-weight: 830;
}

.portal-heading p {
  margin: 0 0 4px;
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
  line-height: 1.65;
}

.portal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.portal-card {
  --card-accent: var(--mys-red);
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 22px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  box-shadow: var(--mys-shadow-sm);
  text-decoration: none;
}

.portal-card-lebuhraya { --card-accent: #07875f; }
.portal-card-sumaya { --card-accent: #d9752b; }

.portal-card-image {
  position: relative;
  height: 190px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.portal-card-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgb(8 13 24 / 72%));
  content: "";
}

.portal-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.portal-card:hover .portal-card-image img {
  transform: scale(1.035);
}

.portal-card-image span {
  position: absolute;
  right: 16px;
  bottom: 14px;
  left: 16px;
  z-index: 1;
  color: white;
  font-size: 18px;
  font-weight: 800;
}

.portal-card-body {
  padding: 20px;
}

.portal-card-body > p {
  min-height: 78px;
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.portal-card-body ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 18px 0;
  padding: 0;
  list-style: none;
}

.portal-card-body li {
  border-radius: 999px;
  padding: 5px 9px;
  background: color-mix(in srgb, var(--card-accent) 11%, transparent);
  color: var(--card-accent);
  font-size: 11px;
  font-weight: 750;
}

.portal-card-body strong {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--card-accent);
  font-size: 13px;
}

.community-signals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background:
    linear-gradient(90deg, rgb(45 49 143 / 7%), rgb(233 54 68 / 7%), rgb(243 199 68 / 9%)),
    var(--vp-c-bg-elv);
}

.community-signals div {
  display: flex;
  align-items: baseline;
  gap: 9px;
  padding: 18px 22px;
}

.community-signals div + div {
  border-left: 1px solid var(--vp-c-divider);
}

.community-signals strong {
  color: var(--vp-c-text-1);
  font-size: 1.35rem;
}

.community-signals span {
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 650;
}

@media (max-width: 900px) {
  .portal-grid {
    grid-template-columns: 1fr;
  }

  .portal-card {
    display: grid;
    grid-template-columns: minmax(240px, 0.8fr) 1fr;
  }

  .portal-card-image {
    height: 100%;
    min-height: 220px;
  }

  .portal-card-body > p {
    min-height: auto;
  }
}

@media (max-width: 640px) {
  .home-portal {
    padding: 58px 24px 28px;
  }

  .portal-heading {
    display: block;
  }

  .portal-heading h2 {
    margin: 10px 0 14px;
  }

  .portal-card {
    display: block;
  }

  .portal-card-image {
    height: 180px;
    min-height: 0;
  }

  .community-signals {
    grid-template-columns: 1fr;
  }

  .community-signals div + div {
    border-top: 1px solid var(--vp-c-divider);
    border-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .portal-card-image img {
    transition: none;
  }

  .portal-card:hover .portal-card-image img {
    transform: none;
  }
}
</style>
