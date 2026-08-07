<script setup lang="ts">
import { Motion, useReducedMotion } from "motion-v";

withDefaults(
  defineProps<{
    eyebrow: string;
    label: string;
    value: string;
    tone?: "player" | "sector";
  }>(),
  { tone: "player" },
);

const shouldReduceMotion = useReducedMotion();
</script>

<template>
  <Motion
    as="article"
    class="progression-lane"
    :class="`progression-lane-${tone}`"
    :initial="shouldReduceMotion ? false : { opacity: 0, x: tone === 'player' ? -18 : 18 }"
    :while-in-view="{ opacity: 1, x: 0 }"
    :in-view-options="{ once: true, amount: 0.3 }"
    :transition="{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }"
  >
    <span class="lane-eyebrow">{{ eyebrow }}</span>
    <div class="lane-heading">
      <h3>{{ label }}</h3>
      <strong>{{ value }}</strong>
    </div>
    <div class="lane-copy"><slot /></div>
  </Motion>
</template>

<style scoped>
.progression-lane {
  --lane-accent: var(--mys-blue);
  border: 1px solid color-mix(in srgb, var(--lane-accent) 22%, var(--vp-c-divider));
  border-radius: 15px;
  padding: 18px;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 92%, var(--lane-accent) 8%);
}

.progression-lane-sector {
  --lane-accent: var(--game-accent);
}

.lane-eyebrow {
  color: var(--lane-accent);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.lane-heading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin: 7px 0 10px;
}

h3 {
  margin: 0;
  font-size: 18px;
}

strong {
  color: var(--lane-accent);
  font-size: 12px;
}

.lane-copy {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.55;
}

.lane-copy :deep(p) {
  margin: 0;
  line-height: inherit;
}
</style>
