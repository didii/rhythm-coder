<script setup lang="ts">
import ArrowUp from '@iconify-vue/fe/arrow-up';
import { Button } from '@rysinal/heroui-vue';

const props = defineProps<{
  name: string;
  period: string;
  keywords: string[];
  isOpen?: boolean;
  stripe?: boolean;
}>();

defineEmits<{ (e: 'toggleJob'): void }>();
</script>

<template>
  <Button
    variant="ghost"
    :class="`py-1 px-2 rounded-none! h-full! w-full! text-left justify-start! ${stripe ? 'not-hover:bg-neutral-100!' : ''}`"
    @click="() => $emit('toggleJob')"
  >
    <div class="flex items-center gap-x-2">
      <div :is-icon-only="true" variant="outline" class="min-w-0">
        <ArrowUp height="1em" class="transition-transform rotate-0" :class="{ 'rotate-180': isOpen }" />
      </div>
      <div class="flex-1">
        <div class="text-base font-semibold">{{ name }}</div>
        <div class="text-sm font-normal text-neutral-500">{{ period }}</div>
      </div>
    </div>
  </Button>
  <div class="py-1 px-2" :class="{ 'bg-neutral-100': stripe }">
    <template v-for="(item, index) of keywords" :key="index">
      <span>
        {{ item }}
      </span>
      <span v-if="index + 1 < keywords.length" class="mx-2">●</span>
    </template>
  </div>
</template>

<style scoped></style>
