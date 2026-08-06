<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useData, useRoute } from "vitepress";
import { AnimatePresence, Motion } from "motion-v";

type Locale = "en" | "ms" | "zh" | "ta";

const COPY: Record<Locale, { launcher: string; close: string; title: string }> = {
  en: { launcher: "Ask MYSverse", close: "Close assistant", title: "Ask MYSverse" },
  ms: { launcher: "Tanya MYSverse", close: "Tutup pembantu", title: "Tanya MYSverse" },
  zh: { launcher: "询问 MYSverse", close: "关闭助手", title: "询问 MYSverse" },
  ta: { launcher: "MYSverse-ஐக் கேளுங்கள்", close: "உதவியாளரை மூடு", title: "MYSverse-ஐக் கேளுங்கள்" },
};

const assistantOrigin = import.meta.env.VITE_ASSISTANT_ORIGIN || "https://mysver.se";
const { lang } = useData();
const route = useRoute();
const open = ref(false);
const available = ref(false);
const theme = ref<"light" | "dark">("light");
const iframe = ref<HTMLIFrameElement | null>(null);
const launcher = ref<HTMLButtonElement | null>(null);
let themeObserver: MutationObserver | undefined;

const locale = computed<Locale>(() => {
  const value = (lang.value || "en").slice(0, 2);
  return ["en", "ms", "zh", "ta"].includes(value) ? (value as Locale) : "en";
});
const copy = computed(() => COPY[locale.value]);
const iframeUrl = computed(() => `${assistantOrigin}/assistant/embed/${locale.value}`);

function updateTheme() {
  theme.value = document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function sendContext() {
  if (!iframe.value?.contentWindow) return;
  iframe.value.contentWindow.postMessage(
    {
      type: "mysverse:assistant:host-context",
      locale: locale.value,
      theme: theme.value,
      pageContext: {
        url: window.location.href,
        title: document.title,
        surface: "wiki",
      },
    },
    assistantOrigin,
  );
}

function close() {
  open.value = false;
  nextTick(() => launcher.value?.focus());
}

function onMessage(event: MessageEvent) {
  if (event.origin !== assistantOrigin || event.source !== iframe.value?.contentWindow) return;
  const type = event.data?.type;
  if (type === "mysverse:assistant:ready") sendContext();
  if (type === "mysverse:assistant:close") close();
  if (type === "mysverse:assistant:disabled") {
    available.value = false;
    close();
  }
}

function onKeydown(event: KeyboardEvent) {
  if (open.value && event.key === "Escape") close();
}

onMounted(async () => {
  updateTheme();
  themeObserver = new MutationObserver(() => {
    updateTheme();
    sendContext();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  window.addEventListener("message", onMessage);
  window.addEventListener("keydown", onKeydown);
  try {
    const response = await fetch(`${assistantOrigin}/api/assistant/session`, {
      cache: "no-store",
      mode: "cors",
    });
    const result = await response.json();
    available.value = result.enabled === true;
  } catch {
    available.value = false;
  }
});

onBeforeUnmount(() => {
  themeObserver?.disconnect();
  window.removeEventListener("message", onMessage);
  window.removeEventListener("keydown", onKeydown);
});

watch([() => route.path, locale, theme], () => sendContext());
watch(open, (isOpen) => {
  if (isOpen) nextTick(() => iframe.value?.focus());
});
</script>

<template>
  <Teleport to="body">
    <AnimatePresence>
      <Motion
        v-if="available && open"
        as="section"
        class="mysverse-assistant-panel"
        role="dialog"
        aria-modal="true"
        :aria-label="copy.title"
        :initial="{ opacity: 0, y: 18, scale: 0.98 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="{ opacity: 0, y: 12, scale: 0.985 }"
        :transition="{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }"
      >
        <iframe
          ref="iframe"
          :src="iframeUrl"
          :title="copy.title"
          class="mysverse-assistant-frame"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          @load="sendContext"
        />
      </Motion>
    </AnimatePresence>
    <button
      v-if="available"
      ref="launcher"
      type="button"
      class="mysverse-assistant-launcher"
      :aria-expanded="open"
      aria-haspopup="dialog"
      @click="open ? close() : (open = true)"
    >
      <span aria-hidden="true">{{ open ? "×" : "✦" }}</span>
      <span>{{ open ? copy.close : copy.launcher }}</span>
    </button>
  </Teleport>
</template>

<style scoped>
.mysverse-assistant-panel {
  position: fixed;
  right: 20px;
  bottom: 96px;
  z-index: 1000;
  width: 400px;
  height: min(640px, calc(100vh - 112px));
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 24%, var(--vp-c-divider));
  border-radius: 22px;
  background: var(--vp-c-bg);
  box-shadow: var(--mys-shadow-lg);
}

.mysverse-assistant-frame {
  width: 100%;
  height: 100%;
  border: 0;
}

.mysverse-assistant-launcher {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  display: flex;
  min-height: 48px;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 999px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--mys-blue));
  color: white;
  box-shadow: 0 14px 38px rgb(23 32 51 / 24%);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 180ms ease, transform 180ms ease, filter 180ms ease;
}

.mysverse-assistant-launcher:hover {
  filter: saturate(1.12) brightness(1.03);
  box-shadow: 0 18px 44px rgb(23 32 51 / 30%);
  transform: translateY(-2px);
}

.mysverse-assistant-launcher:focus-visible {
  outline: 3px solid var(--vp-c-brand-soft);
  outline-offset: 3px;
}

@media (max-width: 640px) {
  .mysverse-assistant-panel {
    inset: 0;
    width: auto;
    height: auto;
    border: 0;
    border-radius: 0;
  }

  .mysverse-assistant-launcher {
    right: 16px;
    bottom: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mysverse-assistant-launcher {
    transition: none;
  }

  .mysverse-assistant-launcher:hover {
    transform: none;
  }
}
</style>
