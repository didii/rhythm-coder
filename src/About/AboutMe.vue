<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import ContactSection from './components/ContactSection.vue';
import EducationSection from './components/EducationSection.vue';
import EmployerSection from './components/EmployerSection.vue';
import HeroSection from './components/HeroSection.vue';
import IndexTape from './components/IndexTape.vue';
import PresentationsSection from './components/PresentationsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import WindowRibbon from './components/WindowRibbon.vue';
import { employers } from './cv';

const index = [
  { id: 'top', label: 'Top' },
  { id: 'about', label: 'About' },
  ...employers.map((e) => ({ id: e.id, label: e.ribbonName })),
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'talks', label: 'Talks' },
  { id: 'contact', label: 'Mail' },
];

// The window ribbon: names the course currently under the top edge and steps one course on change.
const current = ref('Van Broeck Dieter');
const previous = ref('');
const stepDir = ref<'down' | 'up'>('down');
const tick = ref(0);
const activeSection = ref('top');

let order: string[] = [];
let observer: IntersectionObserver | undefined;

onMounted(() => {
  const targets = [...document.querySelectorAll<HTMLElement>('[data-course], [data-section]')];
  order = targets.map((t) => t.dataset.course ?? t.dataset.section!);
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        if (el.dataset.section) activeSection.value = el.id;
        const name = el.dataset.course ?? el.dataset.section!;
        if (name === current.value) continue;
        stepDir.value = order.indexOf(name) > order.indexOf(current.value) ? 'down' : 'up';
        previous.value = current.value;
        current.value = name;
        tick.value++;
      }
    },
    // a thin band just under the ribbon is "the window"
    { rootMargin: '-72px 0px -85% 0px' },
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

      <section id="about" data-section="About me" class="panel">
        <h2 class="strip">About me</h2>
        <p class="panel__prose">
          I'm a passionate .NET and Full-stack developer with a physics background, turning complex analytical problems
          into elegant, maintainable solutions. Thrives in open environments that encourage initiative, bridging
          technical execution with product and business vision. Outside of coding, enjoys cooking, listening to music,
          and playing music.
        </p>
      </section>

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

/* ---------- shared pieces, used by child sections ---------- */
.roll :deep(.tab) {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.6rem 1.8rem 0.6rem 1.1rem;
  clip-path: polygon(0 0, 100% 0, calc(100% - 0.7rem) 100%, 0 100%);
  cursor: pointer;
  transition:
    background-color 160ms ease-out,
    color 160ms ease-out;
}
.roll :deep(.tab--solid) {
  background: var(--color-mint);
  color: var(--color-jacket-deep);
}
.roll :deep(.tab--solid:hover) {
  background: var(--color-sand);
}
.roll :deep(.tab--stitched) {
  color: var(--color-mint);
  clip-path: none;
  outline: 1px dashed var(--color-mint);
  outline-offset: -5px;
  padding-right: 1.1rem;
}
.roll :deep(.tab--stitched:hover) {
  background: color-mix(in srgb, var(--color-mint) 12%, transparent);
}
.roll :deep(.tab--ink) {
  background: var(--color-jacket);
  color: var(--color-sand);
  font-size: 1.0625rem;
}
.roll :deep(.tab--ink:hover) {
  background: var(--color-jacket-deep);
}

.roll :deep(.strip) {
  display: inline-block;
  margin-top: -1px;
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1;
  text-transform: uppercase;
  padding: 0.35rem 2.2rem 0.3rem 1.25rem;
  background: var(--color-jacket);
  color: var(--color-mint);
  clip-path: polygon(0 0, 100% 0, calc(100% - 0.6rem) 100%, 0 100%);
}

.roll :deep(.panel) {
  --focus: var(--color-jacket);
  margin-top: 4rem;
  background: var(--color-sand);
  color: var(--color-ink);
  padding: 0 clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2.5rem);
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
  .roll :deep(.strip) {
    font-size: 2rem;
  }
}
</style>
