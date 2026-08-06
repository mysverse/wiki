<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from "vue";
import { useData } from "vitepress";

const props = withDefaults(
  defineProps<{
    src: string;
    alt: string;
    caption?: string;
    aspect?: string;
    position?: string;
    eager?: boolean;
    zoom?: boolean;
  }>(),
  {
    caption: "",
    aspect: "16 / 9",
    position: "center",
    eager: false,
    zoom: true,
  },
);

const { lang } = useData();
const dialog = ref<HTMLDialogElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
const isOpen = ref(false);
let previousOverflow = "";

const COPY: Record<string, { open: string; close: string }> = {
  en: { open: "Open larger image", close: "Close image" },
  ms: { open: "Buka imej lebih besar", close: "Tutup imej" },
  zh: { open: "打开大图", close: "关闭图片" },
  ta: { open: "பெரிய படத்தைத் திறக்கவும்", close: "படத்தை மூடவும்" },
};

const copy = computed(() => {
  const locale = (lang.value || "en").slice(0, 2);
  return COPY[locale] || COPY.en;
});

const imageStyle = computed(() => ({
  aspectRatio: props.aspect,
  objectPosition: props.position,
}));

function open() {
  if (!props.zoom || !dialog.value) return;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  dialog.value.showModal();
  isOpen.value = true;
}

function close() {
  dialog.value?.close();
}

function onDialogClick(event: MouseEvent) {
  if (event.target === dialog.value) close();
}

function onDialogClose() {
  document.body.style.overflow = previousOverflow;
  isOpen.value = false;
  nextTick(() => trigger.value?.focus());
}

onBeforeUnmount(() => {
  if (typeof document !== "undefined" && isOpen.value) {
    document.body.style.overflow = previousOverflow;
  }
});
</script>

<template>
  <figure class="wiki-figure">
    <button
      v-if="zoom"
      ref="trigger"
      type="button"
      class="wiki-figure-trigger"
      :aria-label="`${copy.open}: ${alt}`"
      @click="open"
    >
      <img
        class="wiki-figure-image"
        :src="src"
        :alt="alt"
        :style="imageStyle"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : 'auto'"
        decoding="async"
      />
      <span class="zoom-hint" aria-hidden="true">↗</span>
    </button>
    <img
      v-else
      class="wiki-figure-image"
      :src="src"
      :alt="alt"
      :style="imageStyle"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
    />
    <figcaption v-if="caption">{{ caption }}</figcaption>

    <Teleport to="body">
      <dialog
        v-if="zoom"
        ref="dialog"
        class="wiki-lightbox"
        :aria-label="caption || alt"
        @click="onDialogClick"
        @close="onDialogClose"
      >
        <div class="wiki-lightbox-shell">
          <button type="button" class="wiki-lightbox-close" :aria-label="copy.close" @click="close">×</button>
          <img :src="src" :alt="alt" decoding="async" />
          <p v-if="caption">{{ caption }}</p>
        </div>
      </dialog>
    </Teleport>
  </figure>
</template>

<style scoped>
.wiki-figure {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--mys-shadow-sm);
}

.wiki-figure-trigger {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: var(--vp-c-bg-soft);
  cursor: zoom-in;
}

.wiki-figure-image {
  display: block;
  width: 100%;
  height: auto;
  border: 0 !important;
  border-radius: 0 !important;
  object-fit: cover;
  box-shadow: none !important;
  transition: filter 280ms ease, transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.wiki-figure-trigger:hover .wiki-figure-image {
  filter: saturate(1.04) contrast(1.02);
  transform: scale(1.025);
}

.zoom-hint {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgb(255 255 255 / 28%);
  border-radius: 50%;
  background: rgb(9 14 25 / 76%);
  color: white;
  font-size: 14px;
  backdrop-filter: blur(8px);
}

figcaption {
  padding: 11px 14px 12px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 680;
  line-height: 1.45;
}

.wiki-lightbox {
  width: min(1120px, calc(100vw - 32px));
  max-width: none;
  max-height: calc(100vh - 32px);
  margin: auto;
  padding: 0;
  overflow: visible;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 22px;
  background: #090e19;
  color: white;
  box-shadow: 0 36px 110px rgb(0 0 0 / 58%);
}

.wiki-lightbox::backdrop {
  background: rgb(4 7 13 / 80%);
  backdrop-filter: blur(10px);
}

.wiki-lightbox-shell {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
  animation: lightbox-enter 200ms cubic-bezier(0.22, 1, 0.36, 1);
}

.wiki-lightbox img {
  display: block;
  width: 100%;
  max-height: calc(100vh - 110px);
  border: 0;
  border-radius: 0;
  object-fit: contain;
  box-shadow: none;
}

.wiki-lightbox p {
  margin: 0;
  padding: 12px 54px 13px 16px;
  color: rgb(255 255 255 / 78%);
  font-size: 13px;
}

.wiki-lightbox-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: 50%;
  background: rgb(9 14 25 / 74%);
  color: white;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

@keyframes lightbox-enter {
  from { opacity: 0; transform: scale(0.985) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .wiki-figure-image,
  .wiki-lightbox-shell {
    animation: none;
    transition: none;
  }

  .wiki-figure-trigger:hover .wiki-figure-image {
    transform: none;
  }
}
</style>
