# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recruiters and hiring employers deciding whether Dieter Van Broeck is worth contacting for a software-development role. They skim quickly, often comparing several candidates, and usually arrive from a link in an application, a profile or an email.

## Product Purpose
A personal online CV at `rhythm-coder.dev` (single page at `/`). It presents who Dieter is, where he has worked, what he did on each assignment and which skills he brings. It succeeds when a recruiter can see fit and seniority in seconds, drill into any assignment for depth, and reach out.

## Positioning
A .NET and full-stack developer with a physics background who turns complex analytical problems into maintainable solutions and connects technical work with product and business vision. The CV is also a working sample of that craft: it is hand-built by the candidate himself, not generated from a template.

## Operating Context
- Recruiters read it on desktop and on mobile, usually in one quick pass, with optional drill-down.
- Work history is organised by employer (Kenze, Ordina Belgium, Technicolor as a student job), with client assignments under each: period, role, keywords and a longer description that expands on demand.
- Contact is by email (`cv@rhythm-coder.dev`), with LinkedIn and GitHub links; the location (Zoersel, Belgium) is shown on the page.
- Search engines and link previews read the prerendered HTML and the schema.org `Person` data, so the content must be complete without JavaScript.

## Capabilities and Constraints
- Vue 3 + Vite single page with vue-router, vue-i18n, Tailwind CSS v4 and `@iconify-vue/fe` icons, prerendered at build time and hosted on GitHub Pages. This Vue app is the CV that ships; the sibling `astro/` and `next/` projects are separate experiments.
- Sections: hero (name, role, headline facts, email), profile panel (photo, location, contact, driving licence, birth date), About me, Work experience (one section per employer, collapsible assignments), Education, Skills (rated categories on a 7-point punch scale, plus an expandable overview of all skills), Talks (collapsible presentations) and Contact.
- Navigation: an index tape of section eyelets and a window ribbon that names the section or assignment under the top edge while scrolling.
- **Language:** English and Dutch, switchable by the visitor. The choice is remembered; the first visit follows the browser language. The prerendered page is English.
- All CV content lives in `src/About/cv.ts`; UI strings live in `src/locales/{en,nl}.json`.

## Brand Commitments
- Name as shown: "Van Broeck Dieter", role "Software developer". Personal domain and handle: rhythm-coder.
- Existing assets: `src/About/img/me.jpg` (profile photo, Rainbow Mountains, Peru), plus employer, client and technology logos in `src/About/img/`.
- Visual system: see `DESIGN.md`.

## Evidence on Hand
- Bilingual descriptions exist for Kenze and Ordina (employers), every assignment at Kenze, Ordina and Technicolor, and all three talks (React Internals, TypeScript Shenanigans, Angular Spaghetti).
- Technicolor has no employer description.
- Education periods were copied as-is and overlap oddly (the bachelor ends after the master starts); verify them before relying on them.
- Skill ratings and one-line descriptions exist for programming languages, frameworks and spoken languages; the overview lists skills without ratings.
- Do not invent descriptions, achievements, metrics or testimonials to fill gaps.

## Product Principles
1. Scan first, depth on demand: fit and seniority are visible without expanding anything; details stay one click away.
2. The CV is itself a craft sample; its quality is part of the argument.
3. Say only true things: every claim traces to real experience, with no filler and no inflated claims.
4. Both languages are first-class; neither one is a fallback translation.
