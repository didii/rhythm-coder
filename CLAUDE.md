# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal CV site for Dieter Van Broeck, served at `rhythm-coder.dev`. Vue 3 + Vite + TypeScript, Tailwind CSS v4, vue-i18n (English + Dutch). The sibling folders `../astro`, `../next` and `../vue-backup` are separate experiments; this `vue/` app is the one that ships.

## Commands

- `npm run dev` — Vite dev server (vite-plugin-checker reports TypeScript and oxlint errors in the overlay)
- `npm run build` — type-check (`vue-tsc --build`) in parallel with `build-only` (`vite build` + `scripts/prerender.mjs`)
- `npm run type-check` — type-check only
- `npm run lint` — oxlint with `--fix`
- `npm run format` — oxfmt on `src/` (single quotes, semicolons)

There is no test suite.

Deploy: every push to `main` builds and publishes `dist/` to GitHub Pages (`.github/workflows/deploy.yml`).

## Architecture

**Single page, prerendered.** There is no router: `App.vue` renders `src/About/AboutMe.vue`. GitHub Pages serves `404.html` (a copy of the page) for unknown paths, and `main.ts` resets the address to `/`. After `vite build`, `scripts/prerender.mjs` does an SSR build of `src/entry-server.ts`, renders the page to HTML and injects it into `dist/index.html` and `dist/404.html`. It also injects `<head>` tags from `head()`: canonical link, Open Graph tags and schema.org `Person` JSON-LD built from the CV data. This lets scrapers without JavaScript see the full CV.

**Hydration.** `src/main.ts` calls `createSSRApp` when `#app` already has children (the prerendered production build), else `createApp` (dev server). i18n (`createAppI18n()`) is a factory, so browser and prerender each create their own instance. The SSR build bundles vue-i18n (`ssr.noExternal`) so its build-time flags get defined. Code that runs at render time must stay SSR-safe: use `window`, `document` and `localStorage` only in `onMounted` or after mount.

**i18n, two layers:**
- UI strings live in `src/locales/{en,nl}.json` and are read with `t()`. `@intlify/unplugin-vue-i18n` precompiles them, so only the runtime-only vue-i18n ships.
- CV content lives in `src/About/cvData.ts` as the `Text` type: either a plain string (same in both languages) or `{ en, nl }`. Components render it with `l()` from `useText()` in `src/i18n.ts`; non-component code uses `pick(text, locale)`.
- The prerender is always English. `main.ts` switches to the saved or browser locale only after hydration, so the first client render matches the server HTML.

**CV data.** `src/About/cvData.ts` holds all content: name, role, employers with nested client assignments (`Course`), education, skills, presentations, links and email. Periods use the `"MM/YYYY – MM/YYYY"` format with an en dash, or `"MM/YYYY – now"`. `spanOf` and `yearsBetween` parse that format. Description fields hold HTML.

**Scroll-driven chrome.** `AboutMe.vue` uses an `IntersectionObserver` on elements with `data-section` / `data-course` attributes. It drives the `WindowRibbon` (shows the name of the course under the top edge) and the `IndexTape` eyelet navigation. Some sections share an eyelet (see `eyeletOf`). New sections or courses need those data attributes to take part.

## Design and product context

- `PRODUCT.md` — audience (recruiters), purpose, content rules. Do not invent descriptions, achievements or metrics to fill content gaps.
- `DESIGN.md` — the visual system ("depot destination blind"): color tokens, Sofia Sans Extra Condensed + Mulish type, square corners, spacing. Follow it for UI changes. The impeccable plugin uses it as well; its `.impeccable/` folder is local only (gitignored), like `.agents/` and `.claude/skills/`.
- Fonts: Mulish is self-hosted from `src/fonts/` (variable woff2, Latin subset, OFL licence); Sofia Sans Extra Condensed still loads from Google Fonts in `index.html`.
- Logos in `src/About/img/` are at most 64×64 px, the size they display at.
- The `@/` path alias maps to `src/`.
