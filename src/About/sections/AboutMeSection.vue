<script setup lang="ts">
import { useText } from '@/i18n';
import SectionPanel from '../components/SectionPanel.vue';

const { t } = useText();
</script>

<template>
  <SectionPanel id="about" :title="t('about.title')">
    <p class="prose">{{ t('about.prose') }}</p>
  </SectionPanel>
</template>

<style lang="css" scoped>
.prose {
  margin-top: 1rem;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.55;
}
</style>
