<template>
  <h2 class="strip"><slot /></h2>
</template>

<style scoped>
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

@media (max-width: 40rem) {
  .strip {
    font-size: 2rem;
  }
}
</style>
