<script setup lang="ts">
import RatingDots from './RatingDots.vue';

interface Props {
  skills: {
    [category: string]: {
      name: string;
      skills: { name: string; rating: number; description: string }[];
    };
  };
}
defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-[10rem_1fr] gap-x-4">
    <template v-for="(category, _, index1) in skills" :key="category.name">
      <div class="font-bold text-lg text-right">{{ category.name }}</div>
      <div class="mb-2 border border-neutral-100">
        <div
          v-for="(skill, index2) in category.skills"
          :key="skill.name"
          class="flex gap-x-2 gap-y-1 px-2 py-1"
          :class="{ 'bg-neutral-100': (index1 + index2) % 2 === 0 }"
        >
          <div class="flex-3">{{ skill.name }}</div>
          <div class="flex-2"><RatingDots :rating="skill.rating" /></div>
          <div class="flex-10">{{ skill.description }}</div>
        </div>
      </div>
    </template>
  </div>
</template>
