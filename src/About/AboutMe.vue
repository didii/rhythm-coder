<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useText } from '@/i18n';
import ContactSection from './components/ContactSection.vue';
import EducationSection from './components/EducationSection.vue';
import EmployerSection from './components/EmployerSection.vue';
import HeroSection from './components/HeroSection.vue';
import IndexTape from './components/IndexTape.vue';
import PresentationsSection from './components/PresentationsSection.vue';
import SectionPanel from './components/SectionPanel.vue';
import SkillsSection from './components/SkillsSection.vue';
import WindowRibbon from './components/WindowRibbon.vue';
import { employers } from './cv';

const { t, locale } = useText();
const index = computed(() => [
  { id: 'top', label: t('nav.top') },
  { id: 'about', label: t('nav.about') },
  ...employers.map((e) => ({ id: e.id, label: e.ribbonName })),
  { id: 'education', label: t('nav.education') },
  { id: 'skills', label: t('nav.skills') },
  { id: 'talks', label: t('nav.talks') },
  { id: 'contact', label: t('nav.mail') },
]);

// The window ribbon: names the course currently under the top edge and steps one course on change.
const current = ref('Van Broeck Dieter');
const previous = ref('');
const stepDir = ref<'down' | 'up'>('down');
const tick = ref(0);
const activeSection = ref('top');

let observer: IntersectionObserver | undefined;
let targets: HTMLElement[] = [];
let currentEl: HTMLElement | undefined;
const nameOf = (el: HTMLElement) => el.dataset.course ?? el.dataset.section!;

// the names are translated: rename what the window shows without stepping it
watch(locale, async () => {
  await nextTick();
  if (currentEl) current.value = nameOf(currentEl);
  previous.value = '';
});

// compare elements, not names: names repeat (VLM, Digipolis Antwerpen)
function show(el: HTMLElement) {
  if (el === currentEl) return;
  stepDir.value = targets.indexOf(el) > targets.indexOf(currentEl!) ? 'down' : 'up';
  previous.value = current.value;
  current.value = nameOf(el);
  currentEl = el;
  tick.value++;
}

onMounted(() => {
  targets = [...document.querySelectorAll<HTMLElement>('[data-course], [data-section]')];
  currentEl = targets[0];
  observer = new IntersectionObserver(
    (entries) => {
      // a section and its last course enter together when scrolling up: only the innermost (last) one counts
      let next: HTMLElement | undefined;
      for (const e of entries) {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          if (el.dataset.section) activeSection.value = el.id;
          next = el;
        } else if (el === currentEl && e.boundingClientRect.top > e.rootBounds!.top) {
          // the first course left downwards: back into its section's head, which never re-enters (it never left)
          const parent = targets[targets.indexOf(el) - 1];
          if (parent?.contains(el)) next = parent;
        }
      }
      if (next) show(next);
    },
    // a thin band just under the ribbon is "the window"
    { rootMargin: '-25% 0px -85% 0px' },
  );
  targets.forEach((t) => observer!.observe(t));
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div class="roll">
    <IndexTape :items="index" :active="activeSection" />
    <WindowRibbon :current="current" :previous="previous" :step-dir="stepDir" :tick="tick" />

    <main>
      <HeroSection />

      <SectionPanel id="about" :title="t('about.title')">
        <p class="panel__prose">{{ t('about.prose') }}</p>
      </SectionPanel>

      <EmployerSection v-for="emp of employers" :key="emp.id" :employer="emp" />
      <EducationSection />
      <SkillsSection />
      <PresentationsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
/* ---------- frame ---------- */
.roll {
  --tape: 4.5rem;
  --ribbon: 3.5rem;
  --gutter: clamp(1rem, 3vw, 2.5rem);
  min-height: 100vh;
}
main {
  margin-left: var(--tape);
  padding-inline: var(--gutter);
  max-width: calc(78rem + var(--tape));
}

.panel__prose {
  margin-top: 1rem;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.55;
}

/* ---------- narrow ---------- */
@media (max-width: 40rem) {
  .roll {
    --tape: 0rem;
    --ribbon: 3rem;
  }
  main {
    padding-bottom: 4.5rem;
  }
}
</style>
