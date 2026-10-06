<script setup lang="ts">
import { useText } from '@/i18n';
import Plus from '@iconify-vue/fe/plus';
import { computed, ref, useId } from 'vue';
import type { Course } from '../models.ts';
import CutTab from './CutTab.vue';
import PeriodTime from './PeriodTime.vue';
import ReadTab from './ReadTab.vue';

const props = defineProps<{ course: Course }>();
const open = ref(false);
const { t, l } = useText();
const toggle = ref<HTMLElement>();

function flip() {
  open.value = !open.value;
  toggle.value?.focus();
}
function close() {
  open.value = false;
  toggle.value?.focus();
}
const panelId = useId();
const label = computed(() => [l(props.course.name), props.course.line].filter(Boolean).join(' · '));
const code = props.course.period.match(/\d{4}/)?.[0].slice(2);
</script>

<template>
  <li class="course" :class="{ 'course--open': open }" :data-course="label">
    <!-- the start year is the route code; the logo takes its place when the course is opened or hovered -->
    <div class="course__mark" aria-hidden="true">
      <span class="course__code">{{ code }}</span>
      <span v-if="course.img" class="course__img" :style="{ '--logo': `url(${course.img})` }"></span>
    </div>
    <div class="course__body">
      <h3 class="course__legend">
        <!-- a toggle only when there is a description to open -->
        <component
          :is="course.description ? 'button' : 'span'"
          ref="toggle"
          v-bind="
            course.description ? { type: 'button', class: 'course__toggle', 'aria-expanded': open, 'aria-controls': panelId, onClick: flip } : {}
          "
        >
          <span class="course__name">{{ l(course.name) }}</span>
          <template v-if="course.line">
            <span class="course__line" aria-hidden="true">/</span>
            <span class="course__line">{{ course.line }}</span>
          </template>
          <ReadTab v-if="course.description" :open="open" />
        </component>
      </h3>
      <p v-if="course.role" class="course__role">{{ course.role }}</p>
      <!-- one line while closed (the browser adds … when it overflows); the full list once opened -->
      <p class="course__keywords" :class="{ 'course__keywords--clamped': course.description && !open }">
        <template v-for="(k, i) of course.keywords" :key="k">
          <span v-if="i" class="course__sep" aria-hidden="true">&nbsp;&nbsp;/&nbsp; </span><span>{{ k }}</span>
        </template>
      </p>
    </div>
    <div class="course__period"><PeriodTime :period="course.period" /></div>
    <div v-if="course.description" :id="panelId" class="course__panel" :inert="!open">
      <div class="course__panel-clip">
        <!-- focusable so reading or selecting the description keeps the course active (red) -->
        <div class="course__panel-inner" tabindex="-1" v-html="l(course.description)"></div>
        <CutTab type="button" variant="stitched" class="course__close" @click="close">
          {{ t('close') }}
          <Plus class="course__icon" height="1em" aria-hidden="true" />
        </CutTab>
      </div>
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
  transition-property: background-color, clip-path;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
  --legend: var(--color-mint);
  --text: var(--color-sand);
  position: relative;
}
/* red marks the course being worked with, not every open one */
.course--open:focus-within {
  background-color: var(--color-mountain);
}
.course--open {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.course__mark {
  display: grid;
  width: 4rem;
  height: 4rem;
}
.course__code,
.course__img {
  grid-area: 1 / 1;
  transition: opacity 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.course__code {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 3rem;
  line-height: 0.85;
  color: var(--text);
  place-self: center;
}
.course__img {
  /* logo as a mint silhouette: its alpha channel masks a flat fill */
  background-color: var(--legend);
  mask: var(--logo) center / contain no-repeat;
  opacity: 0;
}
.course--open .course__img {
  opacity: 1;
}
/* rows without a logo keep their code */
.course--open .course__code:has(+ .course__img) {
  opacity: 0;
}
/* hover previews the open state, only where hover is real: on touch it sticks after closing */
@media (hover: hover) {
  .course:has(.course__toggle:hover) {
    background-color: var(--color-mountain);
  }
  .course:has(.course__toggle:hover) .course__img {
    opacity: 1;
  }
  .course:has(.course__toggle:hover) .course__code:has(+ .course__img) {
    opacity: 0;
  }
}
/* explicit columns so rows without a logo keep the empty first column */
.course__body {
  grid-column: 2;
  /* let the one-line keywords truncate instead of stretching the column */
  min-width: 0;
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
.course__name {
  font-weight: 800;
}
.course__line {
  color: var(--text);
  font-weight: 600;
}
/* trim to cap height so the toggle centres the tab on the visible caps, not the empty descender space */
.course__toggle > .course__name,
.course__toggle > .course__line {
  text-box: trim-both cap alphabetic;
}
.course__toggle {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 0.75rem;
  text-align: left;
  text-transform: inherit;
  cursor: pointer;
}
/* stretch the toggle's hit area over the whole row */
.course__toggle::after {
  content: '';
  position: absolute;
  inset: 0;
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
.course__keywords--clamped {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.course__role {
  margin-top: 0.4rem;
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.15;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text);
}
.course__sep {
  color: var(--legend);
}
.course__period {
  grid-column: 3;
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.02em;
  color: var(--text);
  white-space: nowrap;
  padding-top: 0.35rem;
}
.course__panel {
  /* above the toggle's hit area, so the description stays selectable */
  position: relative;
  grid-column: 2 / -1;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
.course--open .course__panel {
  grid-template-rows: 1fr;
}
.course__panel-clip {
  overflow: hidden;
  min-height: 0;
}
.course__panel-inner {
  --focus: var(--color-jacket);
  background: var(--color-sand);
  color: var(--color-ink);
  font-size: 1.0625rem;
  line-height: 1.6;
  max-width: 72ch;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
.course__panel-inner:focus {
  outline: none;
}
.course--open .course__panel-inner {
  margin-top: 1rem;
  padding: 1.25rem 1.5rem;
  clip-path: inset(0 0 0 0);
}
.course__panel-inner :deep(p + p) {
  margin-top: 0.9rem;
}
.course__close {
  display: none;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .course {
    grid-template-columns: 3rem 1fr;
    column-gap: 0.75rem;
    padding: 0.75rem 1rem;
    clip-path: polygon(0 0, 100% 0, calc(100% - 0.75rem) 100%, 0 100%);
  }
  .course--open {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .course__mark {
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
  .course__close {
    display: inline-flex;
  }
}
</style>
