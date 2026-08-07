<script setup lang="ts">
import { computed } from "vue";
import { Motion, useReducedMotion } from "motion-v";

const props = defineProps<{
  number: string | number;
  title: string;
}>();

const shouldReduceMotion = useReducedMotion();
const delay = computed(() => {
  const value = Number.parseInt(String(props.number), 10);
  return Number.isFinite(value) ? Math.max(0, value - 1) * 0.07 : 0;
});
</script>

<template>
  <Motion
    as="article"
    class="waypoint-step"
    :initial="shouldReduceMotion ? false : { opacity: 0, y: 18 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, amount: 0.25 }"
    :transition="{ delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] }"
  >
    <span class="waypoint-number" aria-hidden="true">{{ number }}</span>
    <h3>{{ title }}</h3>
    <div class="waypoint-copy"><slot /></div>
  </Motion>
</template>

<style scoped>
.waypoint-step {
  position: relative;
  min-width: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 15px;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 94%, var(--game-accent) 6%);
  box-shadow: 0 10px 30px rgb(23 32 51 / 5%);
}

.waypoint-number {
  position: relative;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: 15px;
  border: 4px solid var(--vp-c-bg-elv);
  border-radius: 50%;
  background: var(--game-accent);
  color: white;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--game-accent) 30%, transparent);
  font-size: 12px;
  font-weight: 820;
}

h3 {
  margin: 0 0 7px;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 650;
  letter-spacing: 0.005em;
  line-height: 1.35;
}

.waypoint-copy {
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.55;
}

.waypoint-copy :deep(p) {
  margin: 0;
  line-height: inherit;
}

@media (max-width: 720px) {
  .waypoint-step {
    min-height: 0;
    padding: 14px 16px 14px 62px;
  }

  .waypoint-number {
    position: absolute;
    top: 13px;
    left: 8px;
    margin: 0;
  }
}
</style>
