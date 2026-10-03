<script setup lang="ts">
// "MM/YYYY – MM/YYYY", "MM/YYYY – now" or "MM/YYYY", with machine-readable <time> elements
import { useText } from '@/i18n';
import { computed, defineProps } from 'vue';

const props = defineProps<{ period: string }>();
const { t } = useText();
const parts = computed(() =>
  props.period.split(' – ').map((p) => {
    const [m, y] = p.split('/');
    return { text: p === 'now' ? t('now') : p, datetime: y ? `${y}-${m}` : undefined };
  }),
);
</script>

<template>
  <template v-for="(p, i) of parts" :key="p.text">
    <template v-if="i"> – </template>
    <time v-if="p.datetime" :datetime="p.datetime">{{ p.text }}</time>
    <template v-else>{{ p.text }}</template>
  </template>
</template>
