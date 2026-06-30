# FinalCtaSection Specification

## Overview
- **Target file:** `src/components/FinalCtaSection.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec09-section.png`
- **Interaction model:** static.

## Layout
- Section bg **black (#000)**, centered text, padding ~py-24. `Container` max ~900px, text-center, mx-auto.
- **H2:** ABC Social **48px / 52.8px, 700**, color #f7f5f3, centered, text-balance, max-w ~760px. Responsive `text-[30px] md:text-[48px]`. Text: "Copy is the last layer of your product without a system."
- **Sub p** (mt ~20px): ~26px/300 (`text-xl md:text-[26px] md:leading-[31.2px]`), color #aaa79e (muted on dark), max-w ~640px, centered. Text (note en-dash): "Design, development, and now copy. Don't get lost in the overload of generative AI – build a system to ship copy you can trust."
- **CTAs** (row, centered, gap ~24px, mt ~32px):
  - `<PillButton variant="blue">Get a Demo</PillButton>` (blue #1345eb pill, arrow)
  - `<PillButton variant="ghost-light">Get Started</PillButton>` (transparent, cream text, arrow)

## Text (verbatim)
- H2: "Copy is the last layer of your product without a system."
- Sub: "Design, development, and now copy. Don't get lost in the overload of generative AI – build a system to ship copy you can trust."
- Buttons: "Get a Demo", "Get Started"

## Responsive
- Mobile: H2 ~30px, CTAs stack/centered.
