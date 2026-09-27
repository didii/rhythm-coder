<script setup lang="ts">
import ArrowDown from '@iconify-vue/fe/arrow-down';
import { EMAIL } from '../cv';
import LeadPanel from './LeadPanel.vue';
</script>

<template>
  <section id="top" data-section="Van Broeck Dieter" class="hero">
    <div class="hero__window">
      <h1 class="hero__name">Van Broeck Dieter</h1>
      <div class="hero__seam" aria-hidden="true"></div>
      <p class="hero__next">Software developer</p>
    </div>
    <div class="hero__lede">
      <p class="hero__route">
        Physics background <span aria-hidden="true">&nbsp;/&nbsp;</span> <b>.NET &amp; full-stack</b>
      </p>
      <div class="hero__actions">
        <a class="tab tab--solid" :href="`mailto:${EMAIL}`">Email Dieter</a>
      </div>
    </div>

    <LeadPanel />
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100svh - var(--ribbon));
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(16rem, 22rem);
  grid-template-rows: auto 1fr;
  column-gap: clamp(1.5rem, 4vw, 4rem);
  row-gap: 2.5rem;
  padding-block: clamp(1.5rem, 5vh, 4rem);
  align-content: center;
}
.hero__window {
  grid-column: 1;
  position: relative;
  background-color: var(--color-jacket-band);
  box-shadow: 0 10px 18px -10px rgb(0 0 0 / 0.55);
  border-top: 1px dashed var(--color-mint);
  clip-path: polygon(0 0, 100% 0, calc(100% - 2.5rem) 100%, 0 100%);
  padding: clamp(1rem, 2.5vw, 2rem) clamp(3rem, 5vw, 4rem) 0 clamp(1rem, 2.5vw, 2rem);
  overflow: hidden;
}
.hero__name {
  font-family: var(--font-legend);
  font-weight: 900;
  font-size: clamp(3.25rem, 17vw, 10rem);
  line-height: 0.86;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  color: var(--color-mint);
  text-wrap: balance;
}
.hero__seam {
  margin: clamp(0.75rem, 2vw, 1.5rem) calc(-1 * clamp(1rem, 2.5vw, 2rem)) 0;
  border-top: 1px dashed var(--color-mint);
  box-shadow: 0 -6px 10px -6px rgb(0 0 0 / 0.5);
}
/* the next course, half through the window */
.hero__next {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: clamp(2.5rem, 6.5vw, 5.5rem);
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-sand);
  padding-top: 0.5rem;
  /*height: 0.74em;*/
  margin-bottom: 0.5rem;
  box-sizing: content-box;
  overflow: hidden;
}
.hero__lede {
  grid-column: 1;
  align-self: start;
}
.hero__route {
  font-family: var(--font-legend);
  font-weight: 800;
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-mint);
  margin-bottom: 0;
}
.hero__route span {
  color: var(--color-sand);
}
.hero__route b {
  font-weight: inherit;
  white-space: nowrap;
}
.hero__actions {
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.25rem;
}

@media (max-width: 60rem) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    min-height: 0;
  }
  .hero__actions {
    display: none;
  }
}
</style>
