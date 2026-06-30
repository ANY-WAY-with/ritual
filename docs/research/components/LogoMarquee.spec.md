# LogoMarquee Specification

## Overview
- **Target file:** `src/components/LogoMarquee.tsx`
- **Screenshot:** `docs/design-references/dittowords/full-desktop.png` (trust bar under hero)
- **Interaction model:** infinite CSS marquee (60s linear), continuous leftward scroll. Pause on hover (nice-to-have).

## Layout
- Full-width section on cream bg, vertical padding ~24px, `overflow-hidden`.
- One horizontal track that scrolls left infinitely. Implement by rendering the logo list **twice** back-to-back inside a flex row with `w-max` and `className="animate-marquee"` (keyframe `marquee` already in globals: translateX 0 → -100%). gap between logos ~56px, items vertically centered.
- All logos render at **height ~22px**, width auto, `object-contain`. Use next/image with the known intrinsic sizes, or plain `<img>` with `className="h-[22px] w-auto"`.
- **Center pill overlay:** "8,000+ teams trust Ditto" — a pill centered over the marquee (absolute, left-1/2 -translate-x-1/2), bg cream (#f7f5f3) with soft horizontal fade so logos pass behind it. Text 16px/700, color #000, padding ~8px 20px, rounded-full. Add left/right gradient masks (cream → transparent) at the section edges for a clean fade. (Optional but matches original.)

## Logos (in order, from /images/, all h-22px)
staffbase.webp, root.webp, microsoft.webp, ebay.webp, stash.svg, bigcommerce.webp, ownup.svg, uber-carshare.webp, mcafee.webp, zero.svg, curology.svg, happy-money.svg, step.svg, immutable.svg, rakuten.webp

Build a `const LOGOS = [{src,alt,width}]` array and map. Use plain `<img>` (mixed svg/webp) with `loading="lazy"`, `alt` = company name.

## Text (verbatim)
- Center pill: "8,000+ teams trust Ditto"

## Responsive
- Marquee continues at all widths. On mobile keep h-22px logos; gap can reduce. Center pill stays centered.
