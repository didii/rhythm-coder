---
name: rhythm-coder CV
description: A hand-built CV rolled like a depot destination blind; bias-cut jacket-blue cloth courses with scarf-mint condensed legends step under one fixed window.
colors:
  jacket: "#1e4f7d"
  jacket-band: "#1b476f"
  jacket-deep: "#173d60"
  mint: "#9cc7b3"
  mint-deep: "#5f8c79"
  mountain: "#9b4b40"
  sand: "#efe7dc"
  sand-shade: "#ddd2c2"
  ink: "#173d60"
typography:
  display:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "clamp(4.25rem, 11.5vw, 10rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.9
  title:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Mulish, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Sofia Sans Extra Condensed, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  none: "0"
  eyelet: "50%"
spacing:
  course-gap: "6px"
  gutter: "clamp(1rem, 3vw, 2.5rem)"
  tape: "4.5rem"
  ribbon: "3.5rem"
  section: "5rem"
components:
  tab-solid:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.jacket-deep}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1.8rem 0.6rem 1.1rem"
  tab-solid-hover:
    backgroundColor: "{colors.sand}"
  tab-stitched:
    textColor: "{colors.mint}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1.1rem"
  tab-ink:
    backgroundColor: "{colors.jacket}"
    textColor: "{colors.sand}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1.8rem 0.6rem 1.1rem"
  tab-ink-hover:
    backgroundColor: "{colors.jacket-deep}"
  legend-strip:
    backgroundColor: "{colors.jacket}"
    textColor: "{colors.mint}"
    rounded: "{rounded.none}"
    padding: "0.35rem 2.2rem 0.3rem 1.25rem"
  course:
    backgroundColor: "{colors.jacket-band}"
    textColor: "{colors.mint}"
    rounded: "{rounded.none}"
    padding: "1.1rem 2.75rem 1.2rem 1rem"
  course-open:
    backgroundColor: "{colors.mountain}"
  sand-panel:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 clamp(1.25rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)"
  ribbon:
    backgroundColor: "{colors.jacket-deep}"
    textColor: "{colors.mint}"
    height: "{spacing.ribbon}"
  eyelet-tape:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    width: "{spacing.tape}"
---

# Design System: rhythm-coder CV

## Overview

**Creative North Star: "The Destination Blind"**

The page is a depot destination blind: a long roll of jacket-blue duck cloth whose courses (the hero, each employer, each assignment) step one by one under a fixed window. Every destination is lettered in scarf-mint extra-condensed caps, the way a bus blind prints its route. Anything meant to be read at length (prose, facts, descriptions) sits on pale sand panels stitched onto the roll, printed in dark ink. Mountain red shows up only when a course has been opened.

The palette is sampled from the profile photo (src/About/me.jpg): the blue of the jacket is the cloth, the mint of the scarf is the lettering and thread, the valley floor gives the sand panels, and the red mountain marks an open course.

The world is drenched rather than accented. Jacket blue is the field, not a highlight. Density comes from big condensed type and tight course spacing, not from boxes and dividers. Structure comes from sewing: dashed stitch hairlines, bias-cut ends on strips and tabs, and punched eyelets for the index. The user asked for cleaner, more minimal and more legible than the Glazier's Partition steer, and for good behaviour on mobile. They also said it is wrong if it looks template-like, corporate, or like a dark hacker terminal.

Motion belongs to the roll. The sticky ribbon steps the current course name with a single overshoot. Everything else eases out and settles without bouncing.

**Key Characteristics:**
- Drenched jacket-blue field with mint legends; sand panels carry the prose.
- Two families: Mulish for reading, Sofia Sans Extra Condensed uppercase for every legend.
- Square cloth with one slanted (bias-cut) trailing edge on strips, tabs and courses.
- Dashed stitch hairlines instead of solid rules for structural seams.
- A punched eyelet tape as the index, and a sticky window ribbon that names the current course.
- Mountain red appears only as the state of an open course.

## Colors

Four colours sampled from the profile photo, plus ink. Jacket blue is the field, scarf mint is the lettering, valley sand is the reading surface, and mountain red is the open-course state. Ink shares its value with jacket-deep.

### Primary
- **Jacket Blue** (jacket): The page field on `html` and `body`, the `theme-color`, the background of legend strips and ink tabs, filled eyelets and filled rating punches, and the text colour for headings and labels on sand.
- **Band Blue** (jacket-band): A slightly darker cloth for the course rows and the hero window, so each course reads as a separate band sewn onto the field.
- **Window Blue** (jacket-deep): The sticky window ribbon, hover on ink tabs, text on mint tabs, and the scrollbar track.

### Secondary
- **Scarf Mint** (mint): Every destination legend on jacket (the name, strips, course names and codes, route line, closing email), solid tabs, stitch hairlines on jacket, selection and the default focus ring. Stitched hairlines on jacket use mint at 50–55% alpha. The stitched-tab hover uses mint at 12%.
- **Thread Green** (mint-deep): Thread on sand. Eyelet rings, rating punch rims, dashed seams inside sand panels, and the separator slashes in employer meta. It is never used for body text.

### Tertiary
- **Mountain Red** (mountain): The background of an open course and the hover colour for links inside the lead panel. Nothing else.

### Neutral
- **Valley Sand** (sand): The eyelet tape, the lead panel, About and Skills panels, employer heads, and open description panels. It is also the secondary text colour on jacket (course lines, keywords, periods, the half-visible next course).
- **Sand Shade** (sand-shade): Solid hairline between skill rows inside a sand panel.
- **Ink** (ink): All reading text on sand.

### Named Rules
**The Drenched Field Rule.** Jacket blue is the ground of the page and never a small accent. New surfaces sit on jacket, and anything long enough to read gets a sand panel with ink text.

**The Mountain Is State Rule.** Mountain red means "this course is open." It does not appear as decoration, as a section colour, or at rest.

**The Large Legend Rule.** Mint on jacket is about 4.7:1, so mint text is legible at every size the build uses on the jacket-blue field and bands. On an open course the legends sit on mountain red at about 3.3:1: only the large legends (course codes and titles) stay mint there, and body-size text on mountain is sand (about 5:1).

## Typography

**Display Font:** Sofia Sans Extra Condensed (with sans-serif)
**Body Font:** Mulish (with Segoe UI, Roboto, sans-serif)

**Character:** Two families. The extra-condensed Sofia Sans cut in heavy uppercase does the blind lettering. Mulish in roman weights does the reading. Mulish is self-hosted (variable, roman and italic); Extra Condensed loads from Google Fonts at 500–900. Tabular numerals are on globally, so periods and codes line up.

### Hierarchy
- **Display** (900, clamp(4.25rem, 11.5vw, 10rem), 0.86): The name in the hero window only. Mint, uppercase, balanced.
- **Headline** (900, clamp(2.75rem, 6vw, 4.5rem), 0.9): Employer names on sand heads, in jacket blue. The closing email uses the same voice at clamp(2.5rem, 9vw, 8rem).
- **Legend strip** (800, 2.5rem / 2rem under 40rem, 1): Section strips such as About me and Skills.
- **Title** (700, 2.25rem, 1): Course legends (assignment names). Course codes use 800 at 3rem / 0.85.
- **Sub-legend** (600–800, 1.125–1.375rem): Keywords (600, 1.125rem, 0.03em), periods (700, 1.375rem), skill names (700, 1.375rem), employer meta (700, 1.25rem).
- **Body** (400, 1.0625rem, 1.6): Description panels, capped at 72ch. About prose runs clamp(1.125rem, 1.6vw, 1.375rem) / 1.55 at 62ch.
- **Label** (700, 0.8125–0.875rem, 0.06–0.08em, uppercase): Eyelet labels and lead-panel fact terms.

### Named Rules
**The Legend Caps Rule.** Every name, heading, tab, period and index label is Extra Condensed and uppercase. Sentences and descriptions never are.

**The One Family Rule.** No second typeface. Contrast comes from width (extra condensed or regular) and weight (400 to 900).

## Layout

The layout is a fixed index plus a single roll. On desktop, an eyelet tape (4.5rem) is fixed down the left edge. A sticky window ribbon (3.5rem, 3rem on mobile) runs across the top of the content. The content column is offset by the tape width, uses a fluid gutter (clamp(1rem, 3vw, 2.5rem)) and is capped at 78rem.

The hero fills the first viewport (100svh minus the ribbon). It is a two-column grid: the window and lede on the left, a 16–22rem sand lead panel on the right. Under 60rem it drops to one column and the lead panel lays out photo and facts side by side (9rem + 1fr). Under 40rem the tape moves to a 3.75rem bar fixed at the bottom with 2.75rem-wide hit targets, the ribbon hides its wordmark and shows only the mail icon, and the photo crops to 4:3.

Rhythm is roll-like. Courses stack 6px apart, like adjacent bands on one roll. Employers sit 5rem apart, panels 4rem, and the close 6rem. Each course is a three-column grid (4.5rem code, legend, period). On mobile it becomes two columns, with the period above the legend.

**The Window Rule.** The ribbon always names the course currently under the window: the band just under the ribbon, set as an observer rootMargin of -72px 0 -85% 0. Every course and section feeds it.

## Elevation & Depth

Mostly flat cloth. Depth is soft black shade, used only where cloth lies over cloth. There are no hard offset shadows. Everything else is layered by tone: jacket-band on jacket, and sand on jacket.

### Shadow Vocabulary
- **Tape shade** (`box-shadow: 4px 0 18px rgb(0 0 0 / 0.35)`; on mobile `0 -4px 18px rgb(0 0 0 / 0.35)`): The eyelet tape lying over the roll.
- **Window drop** (`box-shadow: 0 10px 18px -10px rgb(0 0 0 / 0.55)`): Under the hero window.
- **Seam lip** (`box-shadow: 0 -6px 10px -6px rgb(0 0 0 / 0.5)`): The seam where the next course slides under the window.
- **Lead lift** (`box-shadow: 0 18px 40px -12px rgb(0 0 0 / 0.6)`): The sand lead panel, the one object that floats off the roll.

### Named Rules
**The Cloth-Over-Cloth Rule.** A shadow is only allowed where one piece of cloth physically overlaps another. Courses, strips and tabs stay flat.

## Shapes

Square cloth, with one bias-cut edge. There are no rounded corners. The only circles are the eyelets and rating punches (50%). Strips, tabs, courses and the hero window keep a square leading edge and slant the trailing bottom corner inward with `clip-path`. The inset scales with the piece: 0.45–0.7rem on tabs, 0.6rem on strips, 1.25rem on courses (0.75rem on mobile), and 2.5rem on the hero window. Seams are 1px dashed stitches: mint on jacket, mint-deep on sand. The stitched tab uses a dashed outline inset by 5px instead of a slant.

**The Bias Cut Rule.** The slant is always on the trailing edge, cutting the bottom-right corner. Never slant both ends, and never round a corner to soften a piece.

## Components

### Buttons (Tabs)
Tabs are bias-cut cloth labels in 800-weight Extra Condensed caps at 1.25rem, 0.05em tracking.
- **Shape:** Square, trailing edge cut 0.7rem.
- **Solid:** Mint with jacket-deep text. The primary action (email).
- **Stitched:** Mint text, no fill, 1px dashed mint outline inset 5px. Hover fills mint at 12%. The secondary action.
- **Ink:** Jacket-blue fill with sand text at 1.0625rem, used on sand heads (About the employer). Hover goes to jacket-deep.
- **Hover / Focus:** Colour transitions at 160ms ease-out. Solid tabs hover to sand. Focus is a 2px dashed outline, offset 3px, in mint on jacket and jacket inside sand areas (set through `--focus`).
- **Ribbon mail and course tab:** Smaller mint tabs (1rem, cut 0.45–0.5rem) with the same hover to sand.

### Legend Strip
The section heading is a mint legend on a jacket strip. It hangs 1.25rem out over the left edge of its sand panel, and its trailing edge is cut 0.6rem.

### Course Row (signature)
Each assignment is a jacket-band course with a mint dashed stitch along its top and a trailing edge cut 1.25rem. It shows a mint code number, a mint title legend with a sand "/ line", sand keywords separated by mint slashes, and a sand period. Opening a course turns the cloth mountain red (280ms), rotates the plus 45°, and unrolls a sand description panel. The row height animates from 0fr to 1fr and a clip-path inset reveals the panel, both over 360ms.

### Sand Panels
Square sand with ink text and no border. Internal padding is clamp(1.25rem, 3vw, 2.5rem). Seams inside a panel are mint-deep dashed stitches. Employer heads are sand strips holding the logo (4rem), a jacket headline and meta. They expand the same way course rows do.

### Navigation: Eyelet Tape
A sand tape with a dashed mint-deep edge. Each entry is a mint-deep eyelet ring (1.4rem, 4px rim) above a 0.8125rem caps label. The active section's eyelet is punched through (filled jacket blue, scale 1.12, 260ms). Hover fills the ring jacket blue without scaling. On mobile the tape becomes a bottom bar.

### Window Ribbon (signature)
A sticky jacket-deep bar with a mint dashed bottom stitch. It holds the wordmark, a window bounded by mint hairlines, and the mint mail tab. When the course changes, the name strip steps one line in the scroll direction over 520ms with the one allowed overshoot.

### Rating Punches
A seven-hole punched scale. Each hole is 0.8rem with a 2px mint-deep rim, and holes are filled jacket blue up to the rating. The scale is announced as "n out of 7".

### Motion
- **Settle** (`cubic-bezier(0.16, 1, 0.3, 1)`): Everything that moves: hero roll-in (900ms), eyelet scale, plus rotation, course colour, and panel unroll.
- **Ribbon step** (`cubic-bezier(0.34, 1.45, 0.6, 1)`, 520ms): The window ribbon only.
- **Colour hovers:** 160–200ms ease-out.
- Reduced motion drops durations to 1ms and turns off smooth scroll.

## Do's and Don'ts

### Do:
- **Do** set new surfaces on the jacket-blue field and put any reading text on sand in ink.
- **Do** letter every name, heading, tab and period in Sofia Sans Extra Condensed uppercase at 700–900.
- **Do** cut the trailing bottom corner of strips, tabs and course bands with `clip-path`, and keep all other corners square.
- **Do** draw seams as 1px dashed stitches: mint on jacket, mint-deep on sand.
- **Do** keep mint on mountain red to large legends only (about 3.3:1); set anything smaller on an open course in sand.
- **Do** keep the overshoot curve `cubic-bezier(0.34, 1.45, 0.6, 1)` on the window ribbon and use `cubic-bezier(0.16, 1, 0.3, 1)` for everything else.
- **Do** feed every new course or section to the window ribbon so it always names what is under the window.

### Don't:
- **Don't** make it look template-like or corporate: no sidebar-and-timeline résumé, no rounded cards, no generic UI kit.
- **Don't** drift toward the dark hacker look: no black or near-black field, no monospace, no terminal green.
- **Don't** use mountain red for anything except an open course (and link hover inside the lead panel).
- **Don't** round corners or add a second typeface.
- **Don't** add shadows to courses, strips or tabs; shade only where cloth overlaps cloth.
- **Don't** give a second element the ribbon's overshoot.
