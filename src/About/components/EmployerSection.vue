<script setup lang="ts">
import Plus from '@iconify-vue/fe/plus';
import { ref } from 'vue';
import type { Employer } from '../cv';
import CourseRow from './CourseRow.vue';

defineProps<{ employer: Employer }>();
const open = ref(false);
</script>

<template>
  <section :id="employer.id" :data-section="employer.name" class="employer" :aria-labelledby="`${employer.id}-name`">
    <div class="employer__head">
      <img :src="employer.logo" alt="" class="employer__logo" width="64" height="64" />
      <div class="employer__id">
        <h2 :id="`${employer.id}-name`" class="employer__name">{{ employer.name }}</h2>
        <p class="employer__meta">
          <b>{{ employer.activity }}</b>
          <span aria-hidden="true">/</span>
          <b>{{ employer.period }}</b>
          <span aria-hidden="true">/</span>
          <b>{{ employer.span }}</b>
        </p>
      </div>
      <button
        v-if="employer.description"
        type="button"
        class="tab tab--ink"
        :class="{ 'tab--open': open }"
        :aria-expanded="open"
        :aria-controls="`${employer.id}-about`"
        @click="open = !open"
      >
        About {{ employer.name }}
        <Plus height="1em" aria-hidden="true" class="employer__icon" :class="{ 'employer__icon--open': open }" />
      </button>
    </div>
    <div
      v-if="employer.description"
      :id="`${employer.id}-about`"
      class="employer__about"
      :class="{ 'employer__about--open': open }"
      :inert="!open"
    >
      <div lang="nl" v-html="employer.description"></div>
    </div>
    <ol class="courses" :aria-label="`Assignments at ${employer.name}`">
      <CourseRow v-for="c of employer.courses" :key="`${c.img}-${c.name}`" :course="c" />
    </ol>
  </section>
</template>

<style scoped>
.employer {
  margin-top: 5rem;
}
.employer__head,
.employer__about {
  --focus: var(--color-jacket);
}
.employer__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.25rem;
  background: var(--color-sand);
  color: var(--color-ink);
  padding: 1rem 1.25rem;
}
.employer__logo {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}
.employer__id {
  flex: 1;
  min-width: 14rem;
}
.employer__name {
  font-family: var(--font-legend);
  font-weight: 900;
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-jacket);
}
.employer__meta {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  margin-top: 0.35rem;
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.employer__meta b {
  font-weight: inherit;
  white-space: nowrap;
}
.employer__meta span {
  color: var(--color-mint-deep);
}
.employer__icon {
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.employer__icon--open {
  transform: rotate(45deg);
}
.employer__about {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 360ms cubic-bezier(0.16, 1, 0.3, 1);
  background: var(--color-sand);
  color: var(--color-ink);
}
.employer__about--open {
  grid-template-rows: 1fr;
}
.employer__about > div {
  overflow: hidden;
  min-height: 0;
  padding-inline: 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.6;
}
.employer__about--open > div {
  padding-block: 0.25rem 1.5rem;
}
.employer__about :deep(p + p) {
  margin-top: 0.9rem;
}
.courses {
  display: grid;
  gap: 6px;
  margin-top: 6px;
}

@media (max-width: 40rem) {
  .employer__head {
    padding: 0.9rem;
  }
}
</style>
