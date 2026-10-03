<script setup lang="ts">
import { useText } from '@/i18n';
import { defineProps } from 'vue';

defineProps<{ items: { id: string; label: string }[]; active: string }>();
const { t } = useText();
</script>

<template>
  <nav class="tape" :aria-label="t('nav.sections')">
    <a
      v-for="item of items"
      :key="item.id"
      :href="`#${item.id}`"
      class="eyelet"
      :data-id="item.id"
      :class="{ 'eyelet--punched': active === item.id }"
      :aria-current="active === item.id ? 'true' : undefined"
    >
      <span class="eyelet__ring" aria-hidden="true"></span>
      <span class="eyelet__label">{{ item.label }}</span>
    </a>
  </nav>
</template>

<style scoped>
/* eyelet tape: the index */
.tape {
  --focus: var(--color-jacket);
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
.eyelet--punched {
  transform: scale(1.15);
}
.eyelet__label {
  font-family: var(--font-legend);
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media (max-width: 40rem) {
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
}
</style>
