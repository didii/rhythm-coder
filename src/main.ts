import { createApp, createSSRApp, watch } from 'vue';
import { createWebHistory } from 'vue-router';
import App from './App.vue';
import { createAppI18n, LOCALES, type Locale } from './i18n.ts';
import { createAppRouter } from './router.ts';

// the production build prerenders the page into #app, so hydrate it; the dev server serves an empty #app
const root = document.getElementById('app')!;
const app = root.hasChildNodes() ? createSSRApp(App) : createApp(App);
const router = createAppRouter(createWebHistory(import.meta.env.BASE_URL));
const i18n = createAppI18n();

app.use(router).use(i18n);
router.isReady().then(() => {
  app.mount(root);
  // the prerender is English; switch only after hydrating so the first client render matches it
  const { locale } = i18n.global;
  let saved: string | null = null;
  try {
    saved = localStorage.getItem('locale');
  } catch {}
  const preferred = saved ?? (navigator.language.startsWith('nl') ? 'nl' : 'en');
  if (LOCALES.includes(preferred as Locale)) locale.value = preferred as Locale;
  watch(
    locale,
    (l) => {
      document.documentElement.lang = l;
      try {
        localStorage.setItem('locale', l);
      } catch {}
    },
    { immediate: true },
  );
});
