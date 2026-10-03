import { createApp, createSSRApp, watch } from 'vue';
import App from './App.vue';
import { createAppI18n, LOCALES, type Locale } from './i18n.ts';

// GitHub Pages serves the page as 404.html for unknown paths: show / in the address bar instead
if (location.pathname !== '/') history.replaceState(null, '', '/' + location.hash);

// the production build prerenders the page into #app, so hydrate it; the dev server serves an empty #app
const root = document.getElementById('app')!;
const app = root.hasChildNodes() ? createSSRApp(App) : createApp(App);
const i18n = createAppI18n();
app.use(i18n).mount(root);

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
