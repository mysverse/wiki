<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";
import AssistantWidget from "./AssistantWidget.vue";
import NeedsReviewBanner from "./NeedsReviewBanner.vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();

const needsReview = computed(() => frontmatter.value?.needs_review === true);
</script>

<template>
  <Layout>
    <template #doc-before>
      <NeedsReviewBanner v-if="needsReview" />
    </template>
  </Layout>
  <AssistantWidget />
</template>
