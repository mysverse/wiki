<script setup lang="ts">
import DefaultTheme from "vitepress/theme-without-fonts";
import { useData, useRoute } from "vitepress";
import { computed } from "vue";
import { MotionConfig } from "motion-v";
import AssistantWidget from "./AssistantWidget.vue";
import DocContext from "./DocContext.vue";
import NeedsReviewBanner from "./NeedsReviewBanner.vue";
import { gameFromPath } from "./game";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
const route = useRoute();

const needsReview = computed(() => frontmatter.value?.needs_review === true);
const gameClass = computed(() => {
  const game = gameFromPath(route.path);
  return game ? `game-${game}` : "game-mysverse";
});
</script>

<template>
  <MotionConfig reduced-motion="user">
    <Layout :class="gameClass">
      <template #doc-before>
        <DocContext />
        <NeedsReviewBanner v-if="needsReview" />
      </template>
    </Layout>
    <AssistantWidget />
  </MotionConfig>
</template>
