<script setup lang="ts">
import { useText } from '@/i18n';
import Plus from '@iconify-vue/fe/plus';
import { ref } from 'vue';
import CutTab from '../components/CutTab.vue';
import SectionPanel from '../components/SectionPanel.vue';
import { skillOverview, skills } from '../cv.ts';

const open = ref(false);
const { t, l } = useText();
</script>

<template>
  <SectionPanel id="skills" :title="t('skills.title')">
    <div class="skills">
      <div v-for="cat of skills" :key="l(cat.name)" class="skills__cat">
        <h3 class="skills__name">{{ l(cat.name) }}</h3>
        <ul>
          <li v-for="s of cat.skills" :key="l(s.name)" class="skill">
            <span class="skill__name">{{ l(s.name) }}</span>
            <span class="skill__rating" role="img" :aria-label="t('skills.rating', { n: s.rating })">
              <span v-for="n in 7" :key="n" class="punch" :class="{ 'punch--through': n <= s.rating }"></span>
            </span>
            <span class="skill__desc">{{ l(s.description) }}</span>
          </li>
        </ul>
      </div>
    </div>
    <h3 class="skills__name skills__name--overview">
      <CutTab type="button" variant="ink" :aria-expanded="open" aria-controls="skills-overview" @click="open = !open">
        {{ t('skills.overview') }}
        <Plus height="1em" aria-hidden="true" class="overview__icon" :class="{ 'overview__icon--open': open }" />
      </CutTab>
    </h3>
    <div id="skills-overview" class="overview-roll" :class="{ 'overview-roll--open': open }" :inert="!open">
      <dl class="overview">
        <div v-for="cat of skillOverview" :key="l(cat.name)" class="overview__cat">
          <dt class="overview__name">{{ l(cat.name) }}</dt>
          <dd class="overview__list">
            <span v-for="s of cat.skills" :key="l(s)" class="overview__item">{{ l(s) }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </SectionPanel>
</template>

<style scoped>
.skills {
  margin-top: 1.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 2rem 2.5rem;
}
.skills__name {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-jacket);
  padding-bottom: 0.4rem;
  border-bottom: 1px dashed var(--color-mint-deep);
}
.skill {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.2rem 1rem;
  padding-block: 0.75rem;
  border-bottom: 1px solid var(--color-sand-shade);
}
.skill__name {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.375rem;
  text-transform: uppercase;
  line-height: 1.1;
}
.skill__rating {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}
.skill__desc {
  grid-column: 1 / -1;
  font-size: 0.9375rem;
  color: var(--color-ink);
}
.punch {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 2px solid var(--color-mint-deep);
  background: var(--color-sand);
}
.punch--through {
  background: var(--color-jacket);
}

/* ---------- overview: plain keyword list per category ---------- */
.skills__name--overview {
  margin-top: 2.5rem;
  padding-bottom: 0;
  border-bottom: 0;
}
.overview__icon {
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.overview__icon--open {
  transform: rotate(45deg);
}
/* unrolls like an employer's About panel */
.overview-roll {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
.overview-roll--open {
  grid-template-rows: 1fr;
}
.overview {
  overflow: hidden;
  min-height: 0;
}
/* inside the clipped box, so it rolls up with the list instead of snapping away on close */
.overview__cat:first-child {
  margin-top: 0.75rem;
  border-top: 1px dashed var(--color-mint-deep);
  padding-top: 0.1rem;
}
.overview__cat {
  display: grid;
  grid-template-columns: 11rem 1fr;
  gap: 0.25rem 1.5rem;
  padding-block: 0.7rem;
  border-bottom: 1px solid var(--color-sand-shade);
}
.overview__name {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 1.125rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-jacket);
}
.overview__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem 0;
  font-family: var(--font-legend);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.3;
}
/* a small punched hole between keywords: item names already contain slashes */
.overview__item:not(:last-child)::after {
  content: '';
  display: inline-block;
  width: 0.35rem;
  height: 0.35rem;
  margin-inline: 0.6rem;
  vertical-align: 0.2em;
  border-radius: 50%;
  background: var(--color-mint-deep);
}

@media (max-width: 40rem) {
  .overview__name {
    font-size: 1.25rem;
  }
  .overview__cat {
    grid-template-columns: 1fr;
  }
}
</style>
