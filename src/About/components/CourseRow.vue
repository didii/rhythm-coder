<script setup lang="ts">
import Plus from '@iconify-vue/fe/plus';
import { ref, useId } from 'vue';
import type { Course } from '../cv';

const props = defineProps<{ course: Course }>();
const open = ref(false);
const panelId = useId();
const label = [props.course.img, props.course.name, props.course.line].filter(Boolean).join(' · ');
</script>

<template>
  <li class="course" :class="{ 'course--open': open }" :data-course="label">
    <div class="course__img" aria-hidden="true">
      <img :src="course.img" />
    </div>
    <div class="course__body">
      <h4 class="course__legend">
        <button
          v-if="course.description"
          type="button"
          class="course__toggle"
          :aria-expanded="open"
          :aria-controls="panelId"
          @click="open = !open"
        >
          <span>
            {{ course.name }}<span v-if="course.line" class="course__line"> / {{ course.line }}</span>
          </span>
          <span class="course__tab">
            {{ open ? 'Close' : 'Read' }}
            <Plus class="course__icon" height="1em" aria-hidden="true" />
          </span>
        </button>
        <span v-else>
          {{ course.name }}<span v-if="course.line" class="course__line"> / {{ course.line }}</span>
        </span>
      </h4>
      <p class="course__keywords">
        <template v-for="k of course.keywords" :key="k">
          <span>{{ k }}</span
          ><span class="course__sep" aria-hidden="true"> / </span>
        </template>
        <span aria-label="and more">…</span>
      </p>
    </div>
    <div class="course__period">{{ course.period }}</div>
    <div v-if="course.description" :id="panelId" class="course__panel" :inert="!open">
      <div class="course__panel-inner" lang="nl" v-html="course.description"></div>
    </div>
  </li>
</template>

<style scoped>
.course {
  display: grid;
  grid-template-columns: 4.5rem 1fr auto;
  column-gap: 1.25rem;
  align-items: start;
  padding: 1.1rem 2.75rem 1.2rem 1rem;
  background-color: var(--color-jacket-band);
  border-top: 1px dashed color-mix(in srgb, var(--color-mint) 55%, transparent);
  clip-path: polygon(0 0, 100% 0, calc(100% - 1.25rem) 100%, 0 100%);
  transition: background-color 280ms cubic-bezier(0.16, 1, 0.3, 1);
  --legend: var(--color-mint);
  --text: var(--color-sand);
}
.course--open {
  background-color: var(--color-mountain);
}
.course__img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
}
.course__legend {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 1;
  text-transform: uppercase;
  color: var(--legend);
  text-wrap: balance;
}
.course__line {
  color: var(--text);
  font-weight: 600;
}
.course__toggle {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  text-align: left;
  text-transform: inherit;
  cursor: pointer;
}
.course__tab {
  display: inline-flex;
  align-items: center;
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
.course__toggle:hover .course__tab {
  background: var(--color-sand);
}
.course__icon {
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.course--open .course__icon {
  transform: rotate(45deg);
}
.course__keywords {
  margin-top: 0.5rem;
  font-family: var(--font-legend);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text);
}
.course__sep {
  color: var(--legend);
}
.course__period {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.02em;
  color: var(--text);
  white-space: nowrap;
  padding-top: 0.35rem;
}
.course__panel {
  grid-column: 2 / -1;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
.course--open .course__panel {
  grid-template-rows: 1fr;
}
.course__panel-inner {
  --focus: var(--color-jacket);
  overflow: hidden;
  min-height: 0;
  background: var(--color-sand);
  color: var(--color-ink);
  font-size: 1.0625rem;
  line-height: 1.6;
  max-width: 72ch;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
.course--open .course__panel-inner {
  --focus: var(--color-jacket);
  margin-top: 1rem;
  padding: 1.25rem 1.5rem;
  clip-path: inset(0 0 0 0);
}
.course__panel-inner :deep(p + p) {
  margin-top: 0.9rem;
}

@media (max-width: 40rem) {
  .course {
    grid-template-columns: 3rem 1fr;
    column-gap: 0.75rem;
    padding: 1rem 1.75rem 1.1rem 0.75rem;
    clip-path: polygon(0 0, 100% 0, calc(100% - 0.75rem) 100%, 0 100%);
  }
  .course__img {
    background-color: white;
    padding: 0.25rem;
    grid-column: 1;
    grid-row: 2;
    width: 3rem;
    height: 3rem;
  }
  .course__period {
    grid-column: 2;
    grid-row: 1;
    padding: 0 0 0.35rem;
    font-size: 1.125rem;
  }
  .course__body {
    grid-column: 2;
  }
  .course__panel {
    grid-column: 1 / -1;
  }
}
</style>
