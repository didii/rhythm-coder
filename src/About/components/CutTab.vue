<script setup lang="ts">
import { useText } from '@/i18n';

defineProps<{ variant: 'solid' | 'stitched' | 'ink' }>();
const { t } = useText();
</script>

<template>
  <!-- a link when given an href, a button otherwise -->
  <component :is="$attrs.href ? 'a' : 'button'" class="tab" :class="`tab--${variant}`">
    <slot></slot>
    <span v-if="$attrs.target === '_blank'" class="sr-only"> ({{ t('newTab') }})</span>
  </component>
</template>

<style scoped>
.tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.6rem 1.8rem 0.6rem 1.1rem;
  clip-path: polygon(0 0, 100% 0, calc(100% - 0.7rem) 100%, 0 100%);
  cursor: pointer;
  transition:
    background-color 160ms ease-out,
    color 160ms ease-out;
}
/* clip-path cuts away an outside focus ring: draw it inside, in the text colour (--focus can match the fill) */
.tab:focus-visible {
  outline-color: currentColor;
  outline-offset: -5px;
}
.tab--solid {
  background: var(--color-mint);
  color: var(--color-jacket-deep);
}
.tab--solid:hover {
  background: var(--color-sand);
}
.tab--stitched {
  color: var(--color-mint);
  clip-path: none;
  outline: 1px dashed var(--color-mint);
  outline-offset: -5px;
  padding-right: 1.1rem;
}
/* not clipped, and the stitch already sits inside: focus moves it out and thickens it */
.tab--stitched:focus-visible {
  outline-width: 2px;
  outline-offset: 3px;
}
.tab--stitched:hover {
  background: color-mix(in srgb, var(--color-mint) 12%, transparent);
}
.tab--ink {
  background: var(--color-jacket);
  color: var(--color-sand);
  font-size: 1.0625rem;
}
.tab--ink:hover {
  background: var(--color-jacket-deep);
}
</style>
