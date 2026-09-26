<script setup lang="ts">
defineProps<{ isOpen?: boolean }>();
</script>

<template>
  <div
    class="absolute z-10 top-0 left-0 py-1 px-2 bg-neutral-100 h-full overflow-hidden employee-description transition-all"
    :class="{ 'employee-description--visible': isOpen }"
  >
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.employee-description {
  clip-path: rect(0 0 100% 0);
}
.employee-description--visible {
  clip-path: rect(0 100% 100% 0);
}
</style>
