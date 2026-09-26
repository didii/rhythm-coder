<script setup lang="ts">
import ArrowRight from '@iconify-vue/fe/arrow-right';
import {
  Button,
  Disclosure,
  DisclosureContent,
  DisclosureHeading,
  DisclosureIndicator,
  DisclosureTrigger,
} from '@rysinal/heroui-vue';

const props = defineProps<{
  name: string;
  activity: string;
  period: string;
  isOpen?: boolean;
}>();
const emit = defineEmits<{ (e: 'toggleEmployer'): void }>();
function onClick() {
  emit('toggleEmployer');
}
</script>

<template>
  <div class="md:hidden">
    <Disclosure>
      <DisclosureHeading>
        <DisclosureTrigger>
          <DisclosureIndicator />
          Heading
        </DisclosureTrigger>
      </DisclosureHeading>
      <DisclosureContent> This is the content </DisclosureContent>
    </Disclosure>
  </div>
  <div class="hidden md:block">
    <Button size="lg" :variant="props.isOpen ? 'primary' : 'outline'" @click="onClick">
      <span class="font-bold text-lg">{{ props.name }}</span>
      <ArrowRight class="text-lg transition-transform" :class="{ 'rotate-180': props.isOpen }" height="1em" />
    </Button>
    <div class="text-sm text-neutral-500">{{ props.activity }}</div>
    <div class="text-sm text-neutral-500">{{ props.period }}</div>
    <div class="relative h-24 w-24 mt-4">
      <slot></slot>
    </div>
  </div>
</template>
