<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { GAME_META, gameFromPath } from "./game";

const route = useRoute();
const { lang } = useData();

const GUIDE_LABELS: Record<string, string> = {
  en: "Player guide",
  ms: "Panduan pemain",
  zh: "玩家指南",
  ta: "வீரர் வழிகாட்டி",
};

const game = computed(() => {
  const id = gameFromPath(route.path);
  return id ? GAME_META[id] : undefined;
});

const guideLabel = computed(() => {
  const locale = (lang.value || "en").slice(0, 2);
  return GUIDE_LABELS[locale] || GUIDE_LABELS.en;
});
</script>

<template>
  <div v-if="game" class="doc-context" aria-label="Page context">
    <span class="doc-context-icon" aria-hidden="true">{{ game.icon }}</span>
    <span class="doc-context-game">{{ game.name }}</span>
    <span class="doc-context-divider" aria-hidden="true"></span>
    <span>{{ guideLabel }}</span>
  </div>
</template>

<style scoped>
.doc-context {
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-bottom: 14px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.doc-context-icon {
  font-size: 15px;
}

.doc-context-game {
  color: var(--game-accent);
}

.doc-context-divider {
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--game-accent) 48%, transparent);
}
</style>
