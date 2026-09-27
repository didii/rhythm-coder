<script setup lang="ts">
import { EMAIL } from '../cv';
</script>

<template>
  <section id="contact" data-section="Contact" class="close">
    <a class="close__mail" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
    <p class="close__addr">Zoersel, Belgium</p>
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
.close__addr {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: var(--color-sand);
}
</style>
