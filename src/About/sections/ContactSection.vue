<script setup lang="ts">
import { useText } from '@/i18n';
import LinkExternal from '@iconify-vue/fe/link-external';
import CutTab from '../components/CutTab.vue';
import cvData from '../cvData';

const { t, l } = useText();
</script>

<template>
  <section id="contact" data-section="Contact" class="contact" aria-labelledby="contact-title">
    <!-- the address is the headline; this names the section for heading navigation -->
    <h2 id="contact-title" class="sr-only">{{ t('contact') }}</h2>
    <a class="contact__mail" :href="`mailto:${cvData.email}`">{{ cvData.email }}</a>
    <div class="contact__links">
      <CutTab v-for="link of cvData.links" :key="link.label" variant="stitched" :href="link.href" target="_blank" rel="noopener">
        {{ link.label }} <LinkExternal height="1em" aria-hidden="true" />
      </CutTab>
    </div>
    <div class="contact__addr">
      <a :href="cvData.locationHref" target="_blank" rel="noopener">
        {{ l(cvData.location) }} <LinkExternal height="1em" aria-hidden="true" /><span class="sr-only"> ({{ t('newTab') }})</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  margin-top: 6rem;
  padding-block: 3rem 5rem;
  border-top: 1px dashed var(--color-mint);
}
.contact__mail {
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
.contact__mail:hover {
  color: var(--color-sand);
}
.contact__links {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.25rem;
}
.contact__addr {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: var(--color-sand);
}
.contact__addr a {
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--color-mint);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
}
.contact__addr svg {
  display: inline;
}
</style>
