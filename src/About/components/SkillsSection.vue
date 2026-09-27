<script setup lang="ts">
import { skills } from '../cv';
</script>

<template>
  <section id="skills" data-section="Skills" class="panel">
    <h2 class="strip">Skills</h2>
    <div class="skills">
      <div v-for="cat of skills" :key="cat.name" class="skills__cat">
        <h3 class="skills__name">{{ cat.name }}</h3>
        <ul>
          <li v-for="s of cat.skills" :key="s.name" class="skill">
            <span class="skill__name">{{ s.name }}</span>
            <span class="skill__rating" role="img" :aria-label="`${s.rating} out of 7`">
              <span v-for="n in 7" :key="n" class="punch" :class="{ 'punch--through': n <= s.rating }"></span>
            </span>
            <span class="skill__desc">{{ s.description }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
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
</style>
