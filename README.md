# rhythm-coder.dev

Personal CV site of Dieter Van Broeck: a single page built with Vue 3, Vite and Tailwind CSS v4, in English and Dutch, prerendered at build time.

- `npm run dev`: local dev server
- `npm run build`: type-check and production build into `dist/`
- Push to `main` to deploy to GitHub Pages (`.github/workflows/deploy.yml`).

All CV content lives in `src/About/cvData.ts`; UI strings live in `src/locales/{en,nl}.json`. See `CLAUDE.md` for the architecture.
