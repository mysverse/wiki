<script setup lang="ts">
withDefaults(defineProps<{ columns?: 2 | 3 }>(), { columns: 2 });
</script>

<template>
  <div class="wiki-gallery" :class="`wiki-gallery-${columns}`">
    <slot />
  </div>
</template>

<style scoped>
.wiki-gallery {
  display: grid;
  gap: 14px;
  margin: 24px 0 38px;
}

.wiki-gallery-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.wiki-gallery-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 720px) {
  .wiki-gallery-2,
  .wiki-gallery-3 {
    grid-template-columns: 1fr;
  }
}
</style>
