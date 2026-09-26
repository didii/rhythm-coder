# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recruiters and hiring employers deciding whether Dieter Van Broeck is worth contacting for a software-development role. They skim quickly, often comparing several candidates, and usually arrive from a link in an application, a profile or an email.

## Product Purpose
A personal online CV at `rhythm-coder.dev` (route `/about`). It presents who Dieter is, where he has worked, what he did on each assignment and which skills he brings. It succeeds when a recruiter can see fit and seniority in seconds, drill into any assignment for depth, and reach out.

## Positioning
A .NET and full-stack developer with a physics background who turns complex analytical problems into maintainable solutions and connects technical work with product and business vision. The CV is also a working sample of that craft: it is hand-built by the candidate himself, not generated from a template.

## Operating Context
- Recruiters read it on desktop and on mobile, usually in one quick pass, with optional drill-down.
- Work history is organised by employer (Kenze, Ordina Belgium), with client assignments under each: period, role keywords and a longer description.
- Contact is by email (`cv@rhythm-coder.dev`); the address and location are shown on the page.

## Capabilities and Constraints
- Vue 3 + Vite SPA with vue-router, Tailwind CSS v4, `@rysinal/heroui-vue` components and `@iconify-vue/fe` icons. This Vue app is the CV that ships; the sibling `astro/` and `next/` projects are separate experiments.
- Sections: profile header (photo, name, title, contact), About me, Work experience (collapsible employers and assignments), Skills (categories rated on a 7-point dot scale).
- **Language:** must support both Dutch and English, switchable by the visitor. Current copy is mixed (English intro and keywords, Dutch employer and assignment descriptions); the full translation set is not written yet.
- Open: most of the work-experience and skills markup is still commented out while the layout is reworked.

## Brand Commitments
- Name as shown: "Van Broeck Dieter", title "Software developer". Personal domain and handle: rhythm-coder.
- Existing assets: `src/About/me.jpg` (profile photo, Rainbow Mountains, Peru), employer logos `kenze.png`/`kenze.svg`, `ordina.png`.

## Evidence on Hand
- Real descriptions exist for Kenze (employer), Taxi Hendriks and Actemium – Daikin (assignments), plus keyword lists and periods for every assignment at Kenze and Ordina.
- The Ordina employer description and the generic `JobDescription` body are still lorem ipsum. Odot, Cascador, Connective and all Ordina assignments have no description yet. Do not invent descriptions, achievements, metrics or testimonials to fill these gaps.
- Skill ratings and one-line descriptions exist for programming languages, frameworks and spoken languages.

## Product Principles
1. Scan first, depth on demand: fit and seniority are visible without expanding anything; details stay one click away.
2. The CV is itself a craft sample; its quality is part of the argument.
3. Say only true things: every claim traces to real experience, with no filler and no inflated claims.
4. Both languages are first-class; neither one is a fallback translation.
