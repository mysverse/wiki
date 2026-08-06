<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { Motion, useReducedMotion } from "motion-v";

const { frontmatter, lang } = useData();
const shouldReduceMotion = useReducedMotion();

const KICKERS: Record<string, string> = {
  en: "The community field guide",
  ms: "Panduan lapangan komuniti",
  zh: "社区游玩指南",
  ta: "சமூக விளையாட்டு வழிகாட்டி",
};

const locale = computed(() => (lang.value || "en").slice(0, 2));
const hero = computed(() => frontmatter.value.hero || {});
const initial = computed(() =>
  shouldReduceMotion.value ? false : { opacity: 0, y: 18 },
);
</script>

<template>
  <Motion
    as="div"
    class="home-hero-copy"
    :initial="initial"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }"
  >
    <div class="home-hero-kicker">
      <span aria-hidden="true"></span>
      {{ KICKERS[locale] || KICKERS.en }}
    </div>
    <h1>
      <span class="home-hero-name">{{ hero.name }}</span>
      <span class="home-hero-text">{{ hero.text }}</span>
    </h1>
    <p>{{ hero.tagline }}</p>
  </Motion>
</template>

<style scoped>
.home-hero-copy {
  position: relative;
}

.home-hero-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 780;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.home-hero-kicker span {
  width: 30px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--mys-blue), var(--mys-red));
}

h1 {
  display: flex;
  flex-direction: column;
  margin: 0;
  letter-spacing: -0.055em;
  line-height: 0.98;
  font-size: clamp(3rem, 7vw, 5.25rem);
  font-weight: 850;
}

.home-hero-name {
  width: fit-content;
  background: var(--vp-home-hero-name-background);
  background-clip: text;
  color: transparent;
}

.home-hero-text {
  max-width: 12ch;
  margin-top: 12px;
  color: var(--vp-c-text-1);
  font-size: 0.55em;
  letter-spacing: -0.04em;
  line-height: 1.08;
}

p {
  max-width: 42ch;
  margin: 22px 0 0;
  color: var(--vp-c-text-2);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  font-weight: 540;
  line-height: 1.55;
}

@media (max-width: 959px) {
  .home-hero-kicker,
  h1,
  .home-hero-name,
  .home-hero-text,
  p {
    margin-inline: auto;
  }

  .home-hero-kicker {
    justify-content: center;
  }

  .home-hero-copy {
    text-align: center;
  }
}
</style>
