import { createI18n, useI18n } from 'vue-i18n';
import en from './locales/en.json';
import nl from './locales/nl.json';

export const LOCALES = ['en', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];
// CV content that differs per language; plain strings (names, tech terms) are the same in both
export type Text = string | Record<Locale, string>;
export const pick = (text: Text, locale: Locale) => (typeof text === 'string' ? text : text[locale]);

// precompiled at build time by @intlify/unplugin-vue-i18n, so the runtime-only vue-i18n ships
const messages: Record<Locale, typeof en> = { en, nl };

// one instance per app: the prerender builds its own
export const createAppI18n = () =>
  createI18n({ legacy: false, locale: 'en' as Locale, fallbackLocale: 'en', messages });

// t() plus a picker for CV content in the active language
export function useText() {
  const { t, locale } = useI18n();
  return { t, locale, l: (text: Text) => pick(text, locale.value as Locale) };
}
