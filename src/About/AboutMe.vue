<script setup lang="ts">
import ArrowDown from '@iconify-vue/fe/arrow-down';
import Mail from '@iconify-vue/fe/mail';
import Plus from '@iconify-vue/fe/plus';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import CourseRow from './components/CourseRow.vue';
import { employers, skills } from './cv';
import me from './img/me.jpg';

const EMAIL = 'cv@rhythm-coder.dev';

const index = [
  { id: 'top', label: 'Top' },
  { id: 'about', label: 'About' },
  ...employers.map((e) => ({ id: e.id, label: e.name.split(' ')[0]! })),
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Mail' },
];

// The window ribbon: names the course currently under the top edge and steps one course on change.
const current = ref('Van Broeck Dieter');
const previous = ref('');
const stepDir = ref<'down' | 'up'>('down');
const tick = ref(0);
const activeSection = ref('top');
const openEmployer = ref<Record<string, boolean>>({});

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
    <nav class="tape" aria-label="Sections">
      <a
        v-for="item of index"
        :key="item.id"
        :href="`#${item.id}`"
        class="eyelet"
        :class="{ 'eyelet--punched': activeSection === item.id }"
        :aria-current="activeSection === item.id ? 'true' : undefined"
      >
        <span class="eyelet__ring" aria-hidden="true"></span>
        <span class="eyelet__label">{{ item.label }}</span>
      </a>
    </nav>

    <header class="ribbon">
      <span class="ribbon__mark">rhythm-coder</span>
      <span class="ribbon__window" aria-hidden="true">
        <span :key="tick" class="ribbon__strip" :class="tick ? `ribbon__strip--${stepDir}` : ''">
          <template v-if="tick && stepDir === 'down'"
            ><span>{{ previous }}</span
            ><span>{{ current }}</span></template
          >
          <template v-else-if="tick"
            ><span>{{ current }}</span
            ><span>{{ previous }}</span></template
          >
          <span v-else>{{ current }}</span>
        </span>
      </span>
      <a class="ribbon__mail" :href="`mailto:${EMAIL}`">
        <Mail height="1em" aria-hidden="true" /> <span>{{ EMAIL }}</span>
      </a>
    </header>

    <main>
      <section id="top" data-section="Van Broeck Dieter" class="hero">
        <div class="hero__window">
          <h1 class="hero__name">Van Broeck Dieter</h1>
          <div class="hero__seam" aria-hidden="true"></div>
          <p class="hero__next">Software developer</p>
        </div>
        <div class="hero__lede">
          <p class="hero__route">Physics background <span aria-hidden="true">/</span> <b>.NET &amp; full-stack</b></p>
          <div class="hero__actions">
            <a class="tab tab--solid" :href="`mailto:${EMAIL}`">Email Dieter</a>
            <a class="tab tab--stitched" href="#kenze">See the roll <ArrowDown height="1em" aria-hidden="true" /></a>
          </div>
        </div>

        <aside class="lead" aria-label="Profile">
          <figure class="lead__photo">
            <img :src="me" alt="Dieter Van Broeck in front of the Rainbow Mountains" width="994" height="994" />
            <figcaption>
              <a href="https://maps.app.goo.gl/fwdgWsmg1QdTn8MQ6" target="_blank" rel="noopener">
                Rainbow Mountains, Peru
              </a>
            </figcaption>
          </figure>
          <dl class="lead__facts">
            <div>
              <dt>Based in</dt>
              <dd>
                <a href="https://www.google.com/maps/place/Zoersel" target="_blank" rel="noopener"
                  >Zoersel</a
                >
              </dd>
            </div>
            <div>
              <dt>Mail</dt>
              <dd>
                <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
              </dd>
            </div>
            <div>
              <dt>Born</dt>
              <dd><time datetime="1991">1991</time></dd>
            </div>
          </dl>
        </aside>
      </section>

      <section id="about" data-section="About me" class="panel">
        <h2 class="strip">About me</h2>
        <p class="panel__prose">
          I'm a passionate .NET and Full-stack developer with a physics background, turning complex analytical problems
          into elegant, maintainable solutions. Thrives in open environments that encourage initiative, bridging
          technical execution with product and business vision. Outside of coding, enjoys cooking, listening to music,
          and playing music.
        </p>
      </section>

      <section
        v-for="emp of employers"
        :id="emp.id"
        :key="emp.id"
        :data-section="emp.name"
        class="employer"
        :aria-labelledby="`${emp.id}-name`"
      >
        <div class="employer__head">
          <img :src="emp.logo" alt="" class="employer__logo" width="64" height="64" />
          <div class="employer__id">
            <h2 :id="`${emp.id}-name`" class="employer__name">{{ emp.name }}</h2>
            <p class="employer__meta">
              <b>{{ emp.activity }}</b> <span aria-hidden="true">/</span> <b>{{ emp.period }}</b>
              <span aria-hidden="true">/</span> <b>{{ emp.span }}</b>
            </p>
          </div>
          <button
            v-if="emp.description"
            type="button"
            class="tab tab--ink"
            :aria-expanded="!!openEmployer[emp.id]"
            :aria-controls="`${emp.id}-about`"
            @click="openEmployer[emp.id] = !openEmployer[emp.id]"
          >
            About {{ emp.name }}
            <Plus
              height="1em"
              aria-hidden="true"
              class="employer__icon"
              :class="{ 'employer__icon--open': openEmployer[emp.id] }"
            />
          </button>
        </div>
        <div
          v-if="emp.description"
          :id="`${emp.id}-about`"
          class="employer__about"
          :class="{ 'employer__about--open': openEmployer[emp.id] }"
          :inert="!openEmployer[emp.id]"
        >
          <div lang="nl">
            <p v-for="(p, i) of emp.description" :key="i">{{ p }}</p>
          </div>
        </div>
        <ol class="courses" :aria-label="`Assignments at ${emp.name}`">
          <CourseRow v-for="c of emp.courses" :key="`${c.img}-${c.name}`" :course="c" />
        </ol>
      </section>

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

      <section id="contact" data-section="Contact" class="close">
        <a class="close__mail" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
        <p class="close__addr">Zoersel, Belgium</p>
      </section>
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

/* eyelet tape: the index */
.tape,
.lead,
.panel,
.employer__head,
.employer__about {
  --focus: var(--color-jacket);
}
.tape {
  position: fixed;
  inset: 0 auto 0 0;
  width: var(--tape);
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.1rem;
  background: var(--color-sand);
  border-right: 1px dashed var(--color-mint-deep);
  box-shadow: 4px 0 18px rgb(0 0 0 / 0.35);
}
.eyelet {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-ink);
  text-decoration: none;
}
.eyelet__ring {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: 4px solid var(--color-mint-deep);
  background: var(--color-sand);
  transition:
    background-color 200ms ease-out,
    transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
}
.eyelet--punched .eyelet__ring,
.eyelet:hover .eyelet__ring {
  background: var(--color-jacket);
}
.eyelet--punched .eyelet__ring {
  transform: scale(1.12);
}
.eyelet__label {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* window ribbon */
.ribbon {
  position: sticky;
  top: 0;
  z-index: 20;
  height: var(--ribbon);
  margin-left: var(--tape);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-inline: var(--gutter);
  background: var(--color-jacket-deep);
  border-bottom: 1px dashed var(--color-mint);
  font-family: var(--font-legend);
  text-transform: uppercase;
}
.ribbon__mark {
  font-weight: 800;
  font-size: 1.125rem;
  letter-spacing: 0.08em;
  color: var(--color-sand);
}
.ribbon__window {
  --line: 1.75rem;
  flex: 1;
  height: var(--line);
  overflow: hidden;
  border-inline: 1px solid color-mix(in srgb, var(--color-mint) 50%, transparent);
  padding-inline: 0.9rem;
}
.ribbon__strip {
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.375rem;
  line-height: var(--line);
  letter-spacing: 0.03em;
  color: var(--color-mint);
  white-space: nowrap;
}
.ribbon__strip > span {
  overflow: hidden;
  text-overflow: ellipsis;
}
.ribbon__strip--down {
  animation: step-down 520ms cubic-bezier(0.34, 1.45, 0.6, 1) forwards;
}
.ribbon__strip--up {
  animation: step-up 520ms cubic-bezier(0.34, 1.45, 0.6, 1) forwards;
}
@keyframes step-down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-1 * var(--line)));
  }
}
@keyframes step-up {
  from {
    transform: translateY(calc(-1 * var(--line)));
  }
  to {
    transform: translateY(0);
  }
}
.ribbon__mail {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.05em;
  padding: 0.35rem 1.2rem 0.35rem 0.8rem;
  background: var(--color-mint);
  color: var(--color-jacket-deep);
  text-decoration: none;
  clip-path: polygon(0 0, 100% 0, calc(100% - 0.5rem) 100%, 0 100%);
  transition: background-color 160ms ease-out;
}
.ribbon__mail:hover {
  background: var(--color-sand);
}

/* ---------- shared pieces ---------- */
.tab {
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
.tab--solid {
  background: var(--color-mint);
  color: var(--color-jacket-deep);
}
.tab--solid:hover {
  background: var(--color-sand);
}
.tab--stitched {
  color: var(--color-mint);
  clip-path: none;
  outline: 1px dashed var(--color-mint);
  outline-offset: -5px;
  padding-right: 1.1rem;
}
.tab--stitched:hover {
  background: color-mix(in srgb, var(--color-mint) 12%, transparent);
}
.tab--ink {
  background: var(--color-jacket);
  color: var(--color-sand);
  font-size: 1.0625rem;
}
.tab--ink:hover {
  background: var(--color-jacket-deep);
}

.strip {
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

.panel {
  margin-top: 4rem;
  background: var(--color-sand);
  color: var(--color-ink);
  padding: 0 clamp(1.25rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem);
}
.panel__prose {
  margin-top: 1.5rem;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.55;
}

/* ---------- hero ---------- */
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

/* lead panel: the one panel printed dark on pale cloth */
.lead {
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
.lead__facts dd {
  font-size: 1rem;
  overflow-wrap: anywhere;
}

/* ---------- employers ---------- */
.employer {
  margin-top: 5rem;
}
.employer__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.25rem;
  background: var(--color-sand);
  color: var(--color-ink);
  padding: 1rem 1.25rem;
}
.employer__logo {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}
.employer__id {
  flex: 1;
  min-width: 14rem;
}
.employer__name {
  font-family: var(--font-legend);
  font-weight: 900;
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-jacket);
}
.employer__meta {
  margin-top: 0.35rem;
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.employer__meta b {
  font-weight: inherit;
  white-space: nowrap;
}
.employer__meta span {
  color: var(--color-mint-deep);
}
.employer__icon {
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}
.employer__icon--open {
  transform: rotate(45deg);
}
.employer__about {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 360ms cubic-bezier(0.16, 1, 0.3, 1);
  background: var(--color-sand);
  color: var(--color-ink);
}
.employer__about--open {
  grid-template-rows: 1fr;
}
.employer__about > div {
  overflow: hidden;
  min-height: 0;
  padding-inline: 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.6;
}
.employer__about--open > div {
  padding-block: 0.25rem 1.5rem;
}
.employer__about p + p {
  margin-top: 0.9rem;
}
.courses {
  display: grid;
  gap: 6px;
  margin-top: 6px;
}

/* ---------- skills ---------- */
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

/* ---------- close ---------- */
.close {
  margin-top: 6rem;
  padding-block: 3rem 5rem;
  border-top: 1px dashed var(--color-mint);
}
.close__mail {
  display: inline-block;
  margin-top: 0.5rem;
  font-family: var(--font-legend);
  font-weight: 900;
  font-size: clamp(2.5rem, 9vw, 8rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--color-mint);
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 160ms ease-out;
}
.close__mail:hover {
  color: var(--color-sand);
}
.close__addr {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: var(--color-sand);
}

/* ---------- narrow ---------- */
@media (max-width: 60rem) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    min-height: 0;
  }
  .lead {
    grid-column: 1;
    grid-row: auto;
    display: grid;
    grid-template-columns: 9rem 1fr;
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
  .roll {
    --tape: 0rem;
    --ribbon: 3rem;
  }
  .tape {
    inset: auto 0 0 0;
    width: auto;
    height: 3.75rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0;
    border-right: 0;
    border-top: 1px dashed var(--color-mint-deep);
    box-shadow: 0 -4px 18px rgb(0 0 0 / 0.35);
  }
  .eyelet {
    min-width: 2.75rem;
    padding-block: 0.25rem;
  }
  .eyelet__ring {
    width: 1.1rem;
    height: 1.1rem;
    border-width: 3px;
  }
  main {
    padding-bottom: 4.5rem;
  }
  .ribbon {
    gap: 0.75rem;
  }
  .ribbon__mark {
    display: none;
  }
  .ribbon__window {
    border-left: 0;
    padding-left: 0;
  }
  .ribbon__mail span {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .lead {
    grid-template-columns: 1fr;
  }
  .lead__photo img {
    aspect-ratio: 4 / 3;
  }
  .strip {
    font-size: 2rem;
  }
  .employer__head {
    padding: 0.9rem;
  }
}
</style>
