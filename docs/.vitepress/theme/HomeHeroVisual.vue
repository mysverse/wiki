<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { Motion, useReducedMotion } from "motion-v";
import { GAME_META, type GameId } from "./game";

const { lang } = useData();
const shouldReduceMotion = useReducedMotion();

const ALT_TEXT: Record<string, Record<GameId, string>> = {
  en: {
    bandaraya: "Bandaraya's Kuala Lumpur skyline",
    lebuhraya: "Lebuhraya main menu and highway world",
    sumaya: "A coastal road through Sumaya",
  },
  ms: {
    bandaraya: "Pemandangan latar langit Kuala Lumpur di Bandaraya",
    lebuhraya: "Menu utama dan dunia lebuh raya Lebuhraya",
    sumaya: "Jalan pesisir melalui Sumaya",
  },
  zh: {
    bandaraya: "Bandaraya 的吉隆坡天际线",
    lebuhraya: "Lebuhraya 主菜单与高速公路世界",
    sumaya: "穿越 Sumaya 的海岸公路",
  },
  ta: {
    bandaraya: "Bandaraya-வின் Kuala Lumpur வானோட்டம்",
    lebuhraya: "Lebuhraya முதன்மைப் பட்டி மற்றும் நெடுஞ்சாலை உலகம்",
    sumaya: "Sumaya வழியாகச் செல்லும் கடற்கரைச் சாலை",
  },
};

const locale = computed(() => (lang.value || "en").slice(0, 2));
const cards = ["lebuhraya", "sumaya", "bandaraya"] as GameId[];

function initialFor(index: number) {
  if (shouldReduceMotion.value) return false;
  return { opacity: 0, y: 24, rotate: index === 0 ? -4 : index === 1 ? 5 : -1 };
}
</script>

<template>
  <div class="home-hero-visual" aria-label="MYSverse experiences">
    <div class="route-line" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <Motion
      v-for="(id, index) in cards"
      :key="id"
      as="figure"
      class="world-card"
      :class="`world-card-${id}`"
      :initial="initialFor(index)"
      :animate="{ opacity: 1, y: 0 }"
      :while-hover="shouldReduceMotion ? undefined : { y: -6, scale: 1.015 }"
      :transition="{
        delay: index * 0.07,
        duration: 0.52,
        ease: [0.22, 1, 0.36, 1],
      }"
    >
      <img
        :src="GAME_META[id].image"
        :alt="(ALT_TEXT[locale] || ALT_TEXT.en)[id]"
        :loading="id === 'bandaraya' ? 'eager' : 'lazy'"
        decoding="async"
      />
      <figcaption>
        <span aria-hidden="true">{{ GAME_META[id].icon }}</span>
        {{ GAME_META[id].name }}
      </figcaption>
    </Motion>
  </div>
</template>

<style scoped>
.home-hero-visual {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 390px;
  isolation: isolate;
}

.home-hero-visual::before {
  position: absolute;
  inset: 9% 4% 6% 9%;
  z-index: -2;
  border-radius: 42% 58% 55% 45%;
  background:
    radial-gradient(circle at 30% 28%, rgb(243 199 68 / 35%), transparent 32%),
    linear-gradient(135deg, rgb(45 49 143 / 16%), rgb(233 54 68 / 18%));
  filter: blur(3px);
  content: "";
}

.world-card {
  position: absolute;
  overflow: hidden;
  margin: 0;
  border: 1px solid rgb(255 255 255 / 34%);
  border-radius: 18px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--mys-shadow-lg);
  will-change: transform;
}

.world-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.world-card figcaption {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: 999px;
  padding: 7px 10px;
  background: rgb(9 14 25 / 78%);
  color: white;
  font-size: 11px;
  font-weight: 760;
  backdrop-filter: blur(10px);
}

.world-card-bandaraya {
  top: 19%;
  left: 2%;
  z-index: 3;
  width: 72%;
  height: 60%;
  transform: rotate(-2deg);
}

.world-card-lebuhraya {
  top: 3%;
  right: 1%;
  z-index: 1;
  width: 58%;
  height: 43%;
  transform: rotate(4deg);
}

.world-card-sumaya {
  right: 5%;
  bottom: 1%;
  z-index: 4;
  width: 56%;
  height: 43%;
  transform: rotate(3deg);
}

.route-line {
  position: absolute;
  top: 6%;
  right: -1%;
  bottom: 4%;
  width: 36%;
  border: 2px dashed color-mix(in srgb, var(--mys-yellow) 68%, transparent);
  border-left: 0;
  border-radius: 0 42px 42px 0;
  opacity: 0.75;
  animation: route-arrive 700ms 260ms both cubic-bezier(0.22, 1, 0.36, 1);
}

.route-line span {
  position: absolute;
  right: -6px;
  width: 11px;
  height: 11px;
  border: 2px solid var(--vp-c-bg);
  border-radius: 50%;
  background: var(--mys-yellow);
  box-shadow: 0 3px 12px rgb(23 32 51 / 22%);
}

.route-line span:nth-child(1) { top: -4px; }
.route-line span:nth-child(2) { top: 49%; }
.route-line span:nth-child(3) { bottom: -4px; }

@keyframes route-arrive {
  from { clip-path: inset(0 0 100% 0); }
  to { clip-path: inset(0); }
}

@media (max-width: 959px) {
  .home-hero-visual {
    min-height: 330px;
  }
}

@media (max-width: 520px) {
  .home-hero-visual {
    min-height: 280px;
  }

  .world-card {
    border-radius: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .route-line {
    animation: none;
  }
}
</style>
