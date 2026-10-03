<script setup lang="ts">
import { useText } from '@/i18n';
import SectionPanel from '../components/SectionPanel.vue';
import cvData from '../cvData.ts';

const { t, l } = useText();
</script>

<template>
  <SectionPanel id="about" :title="t('about.title')">
    <div class="prose" v-html="l(cvData.aboutMe)"></div>
  </SectionPanel>
</template>

<style lang="css" scoped>
.prose {
  margin-top: 1rem;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.55;
}
</style>
