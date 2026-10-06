<script setup lang="ts">
// the "Read" tab inside a toggle button; its plus turns into a cross while open
import { useText } from '@/i18n';
import Plus from '@iconify-vue/fe/plus';

defineProps<{ open: boolean }>();
const { t } = useText();
</script>

<template>
  <span class="read-tab" :class="{ 'read-tab--open': open }">
    {{ t('read') }}
    <Plus class="read-tab__icon" height="1em" aria-hidden="true" />
  </span>
</template>

<style scoped>
.read-tab {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  padding: 0.3rem 1.1rem 0.3rem 0.7rem;
  background: var(--color-mint);
  color: var(--color-jacket-deep);
  clip-path: polygon(0 0, 100% 0, calc(100% - 0.45rem) 100%, 0 100%);
  transition: background-color 160ms ease-out;
}
/* only where hover is real: on touch it sticks after closing */
@media (hover: hover) {
  button:hover > .read-tab {
    background: var(--color-sand);
  }
}
.read-tab__icon {
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.read-tab--open .read-tab__icon {
  transform: rotate(45deg);
}
</style>
