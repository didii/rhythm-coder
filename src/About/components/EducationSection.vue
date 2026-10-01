<script setup lang="ts">
import { education } from '../cv';
</script>

<template>
  <section id="education" data-section="Education" class="panel">
    <h2 class="strip">Education</h2>
    <ul class="edu">
      <li v-for="e of education" :key="e.degree" class="edu__item">
        <h3 class="edu__degree">{{ e.degree }}</h3>
        <p class="edu__meta">
          {{ e.school }}<span class="edu__sep" aria-hidden="true">&nbsp;&nbsp;/&nbsp; </span><span class="edu__period">{{ e.period }}</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.edu {
  margin-top: 1rem;
}
.edu__item {
  padding-block: 1rem;
}
.edu__item + .edu__item {
  border-top: 1px dashed var(--color-mint-deep);
}
.edu__degree {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-jacket);
}
.edu__meta {
  margin-top: 0.35rem;
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.edu__period {
  white-space: nowrap;
}
.edu__sep {
  color: var(--color-mint-deep);
}

@media (max-width: 40rem) {
  .edu__degree {
    font-size: 1.875rem;
  }
}
</style>
