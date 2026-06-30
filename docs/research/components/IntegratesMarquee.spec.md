# IntegratesMarquee Specification

## Overview
- **Target file:** `src/components/IntegratesMarquee.tsx`
- **Screenshot:** `docs/design-references/dittowords/full-desktop.png` (the big "Everywhere · Integrates · Everywhere" band between bottleneck and the dark section)
- **Interaction model:** infinite CSS marquee (60s linear), leftward. 

## Layout
- Full-width section on cream bg, ~py-6, `overflow-hidden`.
- Single horizontal track scrolling left, contents rendered **twice** for seamless loop. Flex row, `w-max`, `className="animate-marquee"`, items vertically centered, gap ~32px.
- Track contents alternate large **word images** and **app-icon images**:
  - Word PNGs (large, the section's big text): `Integrates.png`, `Everywhere.png` — render tall, height ~64px (`h-12 md:h-16 w-auto`).
  - App icon PNGs (square logos): `01-Cursor.png`, `02-Claude.png`, `03-Figma.png`, `04-ChatGPT.png`, `05-Github.png`, `06-Storybook.png` — render ~`h-12 md:h-16 w-auto`, object-contain.
- Suggested repeating order (mirrors the live cycle): Cursor, **Integrates**, Claude, **Everywhere**, Figma, **Integrates**, ChatGPT, **Everywhere**, Github, **Integrates**, Storybook, **Everywhere**. Build a `const ITEMS` array of `{src, alt}` and map; duplicate the array for the loop.
- All images from `/images/`. Use plain `<img className="h-12 md:h-16 w-auto" loading="lazy">`.

## Assets (from /images/)
Integrates.png, Everywhere.png, 01-Cursor.png, 02-Claude.png, 03-Figma.png, 04-ChatGPT.png, 05-Github.png, 06-Storybook.png

## Responsive
- Continues at all widths; reduce height to h-10 on mobile.
