<script setup lang="ts">
import { EMAIL, LINKS } from '../cv';
import me from '../img/me.jpg';
</script>

<template>
  <aside class="lead" aria-label="Profile">
    <figure class="lead__photo">
      <img :src="me" alt="Dieter Van Broeck in front of the Rainbow Mountains" />
      <figcaption>
        <a href="https://maps.app.goo.gl/fwdgWsmg1QdTn8MQ6" target="_blank" rel="noopener"> Rainbow Mountains, Peru </a>
      </figcaption>
    </figure>
    <dl class="lead__facts">
      <div>
        <dt>Based in</dt>
        <dd>
          <a href="https://www.google.com/maps/place/Zoersel" target="_blank" rel="noopener">Zoersel, Belgium</a>
        </dd>
      </div>
      <div>
        <dt>Mail</dt>
        <dd>
          <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
        </dd>
      </div>
      <div>
        <dt>Profiles</dt>
        <dd class="lead__links">
          <a v-for="l of LINKS" :key="l.label" :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a>
        </dd>
      </div>
      <div>
        <dt>Born</dt>
        <dd><time datetime="1991">1991</time></dd>
      </div>
    </dl>
  </aside>
</template>

<style scoped>
/* lead panel: the one panel printed dark on pale cloth */
.lead {
  --focus: var(--color-jacket);
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: center;
  background: var(--color-sand);
  color: var(--color-ink);
  padding: 0.9rem 0.9rem 1.25rem;
  box-shadow: 0 18px 40px -12px rgb(0 0 0 / 0.6);
}
.lead__photo img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.lead__photo figcaption {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-style: italic;
}
.lead__photo a,
.lead__facts a {
  color: inherit;
}
.lead__photo a:hover,
.lead__facts a:hover {
  color: var(--color-mountain);
}
.lead__facts {
  margin-top: 0.5rem;
  display: grid;
  gap: 0.6rem;
  border-top: 1px dashed var(--color-mint-deep);
  padding-top: 0.9rem;
}
.lead__facts dt {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-jacket);
}
.lead__links {
  display: flex;
  gap: 1rem;
}
.lead__facts dd {
  font-size: 1rem;
  overflow-wrap: anywhere;
}

@media (max-width: 60rem) {
  .lead {
    grid-column: 1;
    grid-row: auto;
    display: grid;
    grid-template-columns: 16rem 1fr;
    gap: 1rem;
    align-items: start;
  }
  .lead__facts {
    margin-top: 0;
    border-top: 0;
    padding-top: 0;
  }
}
@media (max-width: 40rem) {
  .lead {
    grid-template-columns: 1fr;
  }
  .lead__photo img {
    aspect-ratio: 1;
  }
}
</style>
