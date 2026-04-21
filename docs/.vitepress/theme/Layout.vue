<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";

const { Layout } = DefaultTheme;
const { frontmatter, lang, site } = useData();

const needsReview = computed(() => frontmatter.value?.needs_review === true);

const MESSAGES: Record<string, string> = {
  en: "This translation was machine-assisted and awaits human review. See something wrong? Edit this page on GitHub.",
  ms: "Terjemahan ini dibantu mesin dan masih menunggu semakan manusia. Nampak sesuatu yang kurang tepat? Sunting halaman ini di GitHub.",
  zh: "此翻译由机器辅助完成，仍待人工审核。发现问题？请在 GitHub 上编辑此页面。",
  ta: "இந்த மொழிபெயர்ப்பு இயந்திர உதவியுடன் செய்யப்பட்டது, மனித மதிப்பாய்வுக்காக காத்திருக்கிறது. தவறு கண்டீர்களா? GitHub-இல் இந்தப் பக்கத்தைத் திருத்தவும்.",
};

const message = computed(() => {
  const l = (lang.value || "en").slice(0, 2);
  return MESSAGES[l] || MESSAGES.en;
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="needsReview" class="needs-review-banner">
        <strong>⚠️</strong> {{ message }}
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.needs-review-banner {
  padding: 12px 16px;
  margin: 0 0 24px 0;
  border-radius: 8px;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  border: 1px solid var(--vp-c-warning-2);
  font-size: 14px;
  line-height: 1.5;
}
.needs-review-banner strong {
  margin-right: 6px;
}
</style>
