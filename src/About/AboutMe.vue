<script setup lang="ts">
import { useText } from '@/i18n';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import IndexTape from './components/IndexTape.vue';
import WindowRibbon from './components/WindowRibbon.vue';
import cvData from './cvData';
import AiSection from './sections/AiSection.vue';
import AboutMeSection from './sections/AboutMeSection.vue';
import ContactSection from './sections/ContactSection.vue';
import EducationSection from './sections/EducationSection.vue';
import EmployerSection from './sections/EmployerSection.vue';
import HeroSection from './sections/HeroSection.vue';
import PresentationsSection from './sections/PresentationsSection.vue';
import SkillsSection from './sections/SkillsSection.vue';

const { t, locale } = useText();
const index = computed(() => [
  // sections share eyelets: no room for one each on a landscape phone
  { id: 'top', label: t('nav.about') },
  { id: cvData.employers[0]!.id, label: t('nav.work') },
  { id: 'education', label: t('nav.education') },
  { id: 'skills', label: t('nav.skills') },
  { id: 'talks', label: t('nav.talks') },
  { id: 'contact', label: t('nav.mail') },
]);

// The window ribbon: names the course currently under the top edge and steps one course on change.
const current = ref(cvData.name);
const previous = ref('');
const stepDir = ref<'down' | 'up'>('down');
const tick = ref(0);
const activeSection = ref('top');
// sections without an eyelet of their own light up the one they share
const eyeletOf: Record<string, string> = {
  about: 'top',
  ai: 'top',
  ...Object.fromEntries(cvData.employers.map((e) => [e.id, cvData.employers[0]!.id])),
};

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
          if (el.dataset.section) activeSection.value = eyeletOf[el.id] ?? el.id;
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
    { rootMargin: '-25% 0px -74% 0px' },
  );
  targets.forEach((t) => observer!.observe(t));
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div class="roll">
    <a class="skip" href="#main">{{ t('skip') }}</a>
    <IndexTape :items="index" :active="activeSection" />
    <WindowRibbon :email="cvData.email" :current="current" :previous="previous" :step-dir="stepDir" :tick="tick" />

    <main id="main" class="main">
      <HeroSection />
      <AboutMeSection />
      <AiSection />
      <EmployerSection v-for="emp of cvData.employers" :key="emp.id" :employer="emp" />
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

/* skip link: off screen until a keyboard user tabs onto it */
.skip {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 40;
  padding: 0.6rem 1.1rem;
  background: var(--color-mint);
  color: var(--color-jacket-deep);
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transform: translateY(-200%);
}
.skip:focus-visible {
  transform: none;
  outline-color: currentColor;
  outline-offset: -5px;
}

.main {
  margin-left: var(--tape);
  padding-inline: var(--gutter);
  max-width: calc(78rem + var(--tape));
}

/* ---------- narrow ---------- */
@media (max-width: 40rem) {
  .roll {
    --tape: 0rem;
    --ribbon: 3rem;
  }

  .main {
    padding-bottom: 4.5rem;
  }
}
</style>
