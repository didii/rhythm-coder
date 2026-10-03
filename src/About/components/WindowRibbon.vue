<script setup lang="ts">
import { LOCALES, useText } from '@/i18n';
import Mail from '@iconify-vue/fe/mail';
import { defineProps } from 'vue';

const props = defineProps<{ email: string; current: string; previous: string; stepDir: 'down' | 'up'; tick: number }>();
const { t, locale } = useText();
</script>

<template>
  <header class="ribbon">
    <span class="ribbon__mark">rhythm-coder</span>
    <span class="ribbon__window" aria-hidden="true">
      <span :key="tick" class="ribbon__strip" :class="tick ? `ribbon__strip--${stepDir}` : ''">
        <template v-if="tick && stepDir === 'down'"
          ><span>{{ previous }}</span
          ><span>{{ current }}</span>
        </template>
        <template v-else-if="tick"
          ><span>{{ current }}</span
          ><span>{{ previous }}</span>
        </template>
        <span v-else>{{ current }}</span>
      </span>
    </span>
    <div class="ribbon__lang" role="group" :aria-label="t('language')">
      <button v-for="l of LOCALES" :key="l" type="button" class="ribbon__locale" :lang="l" :aria-pressed="locale === l" @click="locale = l">
        {{ l }}
      </button>
    </div>
    <a class="ribbon__mail" :href="`mailto:${props.email}`" :aria-label="props.email">
      <Mail height="1em" aria-hidden="true" /> <span>{{ props.email }}</span>
    </a>
  </header>
</template>

<style scoped>
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
.ribbon__lang {
  display: flex;
  gap: 2px;
}
.ribbon__locale {
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: inherit;
  padding: 0.35rem 0.55rem;
  color: var(--color-mint);
  border: 1px dashed color-mix(in srgb, var(--color-mint) 55%, transparent);
  cursor: pointer;
  transition:
    background-color 160ms ease-out,
    color 160ms ease-out;
}
.ribbon__locale:hover {
  color: var(--color-sand);
}
.ribbon__locale[aria-pressed='true'] {
  background: var(--color-mint);
  border-color: var(--color-mint);
  color: var(--color-jacket-deep);
  cursor: default;
}

@media (max-width: 40rem) {
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
  /* the icon alone; the link keeps the address as its aria-label */
  .ribbon__mail {
    padding-right: 1.1rem;
  }
  .ribbon__mail span {
    display: none;
  }
}
</style>
