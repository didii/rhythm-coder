<script setup lang="ts">
import { defineProps } from 'vue';
import StripHeading from './StripHeading.vue';

defineProps<{ id: string; title: string }>();
</script>

<template>
  <section :id="id" :data-section="title" class="panel">
    <StripHeading>{{ title }}</StripHeading>
    <slot></slot>
  </section>
</template>

<style scoped>
.panel {
  --focus: var(--color-jacket);
  margin-top: 4rem;
  background: var(--color-sand);
  color: var(--color-ink);
  padding: 0 clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2.5rem);
}
</style>
