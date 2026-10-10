<script setup lang="ts">
import { useText } from '@/i18n';
import SectionPanel from '../components/SectionPanel.vue';
import cvData from '../cvData.ts';

const { t, l } = useText();
</script>

<template>
  <SectionPanel id="ai" :title="t('ai.title')">
    <div class="ai-text" v-html="l(cvData.ai)"></div>
  </SectionPanel>
</template>

<style lang="css" scoped>
.ai-text {
  margin-top: 1rem;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.55;
}
.ai-text :deep(p:not(:last-child)) {
  margin-bottom: 0.75rem;
}
.ai-text :deep(.ai-text__footer) {
  font-style: italic;
  font-size: 0.95em;
}
</style>
