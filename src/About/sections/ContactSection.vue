<script setup lang="ts">
import { useText } from '@/i18n';
import LinkExternal from '@iconify-vue/fe/link-external';
import CutTab from '../components/CutTab.vue';
import cvData from '../cvData';

const { t } = useText();
</script>

<template>
  <section id="contact" data-section="Contact" class="close" aria-labelledby="contact-title">
    <!-- the address is the headline; this names the section for heading navigation -->
    <h2 id="contact-title" class="sr-only">{{ t('contact') }}</h2>
    <a class="close__mail" :href="`mailto:${cvData.email}`">{{ cvData.email }}</a>
    <div class="close__links">
      <CutTab v-for="l of cvData.links" :key="l.label" variant="stitched" :href="l.href" target="_blank" rel="noopener">
        {{ l.label }} <LinkExternal height="1em" aria-hidden="true" />
      </CutTab>
    </div>
    <p class="close__addr">{{ t('place') }}</p>
  </section>
</template>

<style scoped>
.close {
  margin-top: 6rem;
  padding-block: 3rem 5rem;
  border-top: 1px dashed var(--color-mint);
}
.close__mail {
  display: inline-block;
  margin-top: 0.5rem;
  font-family: var(--font-legend);
  font-weight: 900;
  font-size: clamp(2.5rem, 9vw, 8rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--color-mint);
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 160ms ease-out;
}
.close__mail:hover {
  color: var(--color-sand);
}
.close__links {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.25rem;
}
.close__addr {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: var(--color-sand);
}
</style>
