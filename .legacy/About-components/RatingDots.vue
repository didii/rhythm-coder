<script setup lang="ts">
defineProps<{ rating: number }>();
</script>

<template>
  <span class="text-lg leading-0">
    <template v-for="(_, index) in Array(rating).fill(0)" :key="index">●</template>
  </span>
  <span class="text-lg leading-0 text-neutral-400">
    <template v-for="(_, index) in Array(7 - rating).fill(0)" :key="index">●</template>
  </span>
</template>
