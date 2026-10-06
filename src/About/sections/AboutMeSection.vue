<script setup lang="ts">
import { useText } from '@/i18n';
import SectionPanel from '../components/SectionPanel.vue';
import cvData from '../cvData.ts';

const { t, l } = useText();
</script>

<template>
  <SectionPanel id="about" :title="t('about.title')">
    <div class="about-me" v-html="l(cvData.aboutMe)"></div>
  </SectionPanel>
</template>

<style lang="css" scoped>
.about-me {
  margin-top: 1rem;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.55;
}
.about-me :deep(p:not(:last-child)) {
  margin-bottom: 0.75rem;
}
.about-me :deep(.about-me__footer) {
  font-style: italic;
  font-size: 0.95em;
}
</style>
