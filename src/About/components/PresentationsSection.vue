<script setup lang="ts">
import Plus from '@iconify-vue/fe/plus';
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { presentations } from '../cv';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const talks = presentations.map((t) => {
  const [m, y] = t.period.split('/') as [string, string];
  return { ...t, month: MONTHS[Number(m) - 1], year: y, datetime: `${y}-${m}` };
});

// always expanded on desktop; collapsible only on mobile.
// Starts as desktop so the prerendered HTML (expanded, readable without JS) matches the first client render.
const mobile = ref(false);
// transitions stay off until after the first layout, so mobile snaps closed instead of animating on load
const ready = ref(false);
let mq: MediaQueryList | undefined;
const onChange = (e: MediaQueryListEvent) => (mobile.value = e.matches);
onMounted(() => {
  mq = window.matchMedia('(max-width: 40rem)');
  mobile.value = mq.matches;
  mq.addEventListener('change', onChange);
  requestAnimationFrame(() => requestAnimationFrame(() => (ready.value = true)));
});
onBeforeUnmount(() => mq?.removeEventListener('change', onChange));

const open = reactive<Record<string, boolean>>({});
const isOpen = (title: string) => !mobile.value || !!open[title];
</script>

<template>
  <section id="talks" data-section="Presentations" class="talks" :class="{ 'talks--ready': ready }" aria-labelledby="talks-title">
    <div class="talks__head">
      <h2 id="talks-title" class="talks__title">Presentations</h2>
      <p class="talks__sub">Internal talks @ Kenze</p>
    </div>
    <ol class="talks__list">
      <li
        v-for="(t, i) of talks"
        :key="t.title"
        class="talk"
        :class="{ 'talk--open': isOpen(t.title) }"
        :data-course="t.title"
      >
        <div class="talk__band">
          <h3 class="talk__name">
            <button
              v-if="mobile"
              type="button"
              class="talk__toggle"
              :aria-expanded="isOpen(t.title)"
              :aria-controls="`talk-${i}`"
              @click="open[t.title] = !open[t.title]"
            >
              <span>{{ t.title }}</span>
              <span class="talk__tab">
                {{ isOpen(t.title) ? 'Close' : 'Read' }}
                <Plus class="talk__icon" height="1em" aria-hidden="true" />
              </span>
            </button>
            <span v-else>{{ t.title }}</span>
          </h3>
          <time class="talk__date" :datetime="t.datetime">{{ t.month }} {{ t.year }}</time>
          <p class="talk__topics">
            <template v-for="(k, j) of t.topics" :key="k">
              <span v-if="j" class="talk__sep" aria-hidden="true"> / </span><span>{{ k }}</span>
            </template>
          </p>
        </div>
        <div :id="`talk-${i}`" class="talk__panel" :inert="!isOpen(t.title)">
          <div class="talk__clip">
            <div class="talk__desc" lang="nl" v-html="t.description"></div>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.talks {
  margin-top: 5rem;
}
.talks__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 1.25rem;
  padding-bottom: 0.75rem;
}
.talks__title {
  font-family: var(--font-legend);
  font-weight: 900;
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-mint);
}
.talks__sub {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-sand);
}
.talks__list {
  display: grid;
  gap: 6px;
}

.talk {
  position: relative;
  background: var(--color-jacket-band);
  border-top: 1px dashed color-mix(in srgb, var(--color-mint) 55%, transparent);
  clip-path: polygon(0 0, 100% 0, calc(100% - 1.25rem) 100%, 0 100%);
}
.talk__band {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.4rem 1.5rem;
  padding: 1.1rem 2.75rem 1.2rem 1.25rem;
}
.talk__name {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-mint);
}
.talk__toggle {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  text-align: left;
  text-transform: inherit;
  cursor: pointer;
}
/* stretch the toggle's hit area over the whole row */
.talk__toggle::after {
  content: '';
  position: absolute;
  inset: 0;
}
.talk__tab {
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
.talk__toggle:hover .talk__tab {
  background: var(--color-sand);
}
.talk__icon {
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.talk--open .talk__icon {
  transform: rotate(45deg);
}
.talk__date {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--color-sand);
  white-space: nowrap;
  padding-top: 0.35rem;
}
.talk__topics {
  grid-column: 1 / -1;
  font-family: var(--font-legend);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-sand);
}
.talk__sep {
  color: var(--color-mint);
}

/* the description unrolls like a course panel */
.talk__panel {
  /* above the toggle's hit area, so the description stays selectable */
  position: relative;
  display: grid;
  grid-template-rows: 0fr;
}
.talks--ready .talk__panel {
  transition: grid-template-rows 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
.talk--open .talk__panel {
  grid-template-rows: 1fr;
}
.talk__clip {
  overflow: hidden;
  min-height: 0;
}
.talk__desc {
  --focus: var(--color-jacket);
  margin: 0 1.25rem 1.25rem;
  padding: 1.25rem 1.5rem;
  max-width: 72ch;
  background: var(--color-sand);
  color: var(--color-ink);
  font-size: 1.0625rem;
  line-height: 1.6;
}
.talk__desc :deep(code) {
  font-family: inherit;
  font-weight: 700;
}

@media (max-width: 40rem) {
  .talk {
    clip-path: polygon(0 0, 100% 0, calc(100% - 0.75rem) 100%, 0 100%);
  }
  .talk--open {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .talk__band {
    grid-template-columns: 1fr;
    padding: 0.75rem 1.5rem 0.9rem 1rem;
  }
  .talk__date {
    grid-row: 1;
    padding: 0;
    font-size: 1.125rem;
  }
  .talk__name {
    font-size: 1.875rem;
  }
  .talk__desc {
    margin: 0 0.75rem 0.75rem;
    padding: 1rem;
  }
}
</style>
