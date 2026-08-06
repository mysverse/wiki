<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { lang } = useData();

const MESSAGES: Record<string, string> = {
  en: "This translation was machine-assisted and awaits human review. See something wrong? Edit this page on GitHub.",
  ms: "Terjemahan ini dibantu mesin dan masih menunggu semakan manusia. Nampak sesuatu yang kurang tepat? Sunting halaman ini di GitHub.",
  zh: "此翻译由机器辅助完成，仍待人工审核。发现问题？请在 GitHub 上编辑此页面。",
  ta: "இந்த மொழிபெயர்ப்பு இயந்திர உதவியுடன் செய்யப்பட்டது, மனித மதிப்பாய்வுக்காக காத்திருக்கிறது. தவறு கண்டீர்களா? GitHub-இல் இந்தப் பக்கத்தைத் திருத்தவும்.",
};

const message = computed(() => {
  const locale = (lang.value || "en").slice(0, 2);
  return MESSAGES[locale] || MESSAGES.en;
});
</script>

<template>
  <aside class="needs-review-banner" role="note">
    <span class="needs-review-icon" aria-hidden="true">!</span>
    <span>{{ message }}</span>
  </aside>
</template>

<style scoped>
.needs-review-banner {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  margin: 0 0 24px;
  border: 1px solid color-mix(in srgb, var(--vp-c-warning-1) 28%, transparent);
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-warning-soft) 80%, var(--vp-c-bg-elv));
  color: var(--vp-c-text-1);
  box-shadow: 0 10px 30px rgb(23 32 51 / 5%);
  font-size: 14px;
  line-height: 1.5;
}

.needs-review-icon {
  display: inline-grid;
  flex: 0 0 auto;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--vp-c-warning-1);
  color: var(--vp-c-bg);
  font-size: 12px;
  font-weight: 800;
}
</style>
