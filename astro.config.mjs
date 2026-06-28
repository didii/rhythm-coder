// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://didii.github.io',
  base: '/rhythm-coder',
  integrations: [mdx(), sitemap(), vue()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      fallbacks: ['sans-serif'],
    },
  ],
});
