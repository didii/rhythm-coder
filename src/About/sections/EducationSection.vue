<script setup lang="ts">
import { useText } from '@/i18n';
import PeriodTime from '../components/PeriodTime.vue';
import SectionPanel from '../components/SectionPanel.vue';
import cvData from '../cvData';

const { t, l } = useText();
</script>

<template>
  <SectionPanel id="education" :title="t('education')">
    <ul class="education" role="list">
      <li v-for="e of cvData.educations" :key="e.period" class="education__item">
        <h3 class="education__degree">{{ l(e.degree) }}</h3>
        <p class="education__meta">
          {{ l(e.school) }}<span class="education__sep" aria-hidden="true">&nbsp;&nbsp;/&nbsp; </span
          ><span class="education__period"><PeriodTime :period="e.period" /></span>
        </p>
      </li>
    </ul>
  </SectionPanel>
</template>

<style scoped>
.education {
  margin-top: 1rem;
}
.education__item {
  padding-block: 1rem;
}
.education__item + .education__item {
  border-top: 1px dashed var(--color-mint-deep);
}
.education__degree {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-jacket);
}
.education__meta {
  margin-top: 0.35rem;
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.education__period {
  white-space: nowrap;
}
.education__sep {
  color: var(--color-mint-deep);
}

@media (max-width: 40rem) {
  .education__degree {
    font-size: 1.875rem;
  }
}
</style>
