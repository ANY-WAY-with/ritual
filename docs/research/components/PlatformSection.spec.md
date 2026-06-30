# PlatformSection (dark bento) Specification

## Overview
- **Target file:** `src/components/PlatformSection.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec06-section.png`
- **Interaction model:** static. Bento = a grid of pre-rendered images (all card visuals are baked into the PNGs).

## Layout
- Section bg **black (#000)**, padding ~py-20. Text + grid centered.
- **Heading block** (centered, max-w ~800px, mx-auto, mb ~40px):
  - H2: ABC Social **48px / 52.8px, 700**, color #f7f5f3, centered, text-balance. Two lines: "The system that works,\neverywhere you work" (use a `<br/>` or text-balance). Responsive `text-[30px] md:text-[48px]`.
  - Below heading (mt ~24px): `<PillButton variant="yellow">See the full Ditto platform</PillButton>` (yellow #ffdd33 pill, black text, arrow). Centered.
- **Bento grid** (the important part) — match the screenshot exactly:
  - Outer grid: 2 columns, gap 20px, max-width ~1360px (px-10), `grid-cols-1 lg:grid-cols-2`.
  - **Left column** (a vertical stack, gap 20px):
    - `Product-Grid-1.png` (wide, aspect ~670×486) on top, full column width, rounded ~16px.
    - Below it a 2-col sub-grid (gap 20px): `Product-Grid-3.png` and `Product-Grid-4.png` (each ~325×233), rounded ~16px.
  - **Right column** (vertical stack, gap 20px):
    - `Product-Grid-2.png` (wide, ~670×486) on top, rounded ~16px.
    - `Product-Grid-5.png` (wide short, ~670×233) below, rounded ~16px.
  - Implement each column as a flex-col gap-5; the left column's lower row is a `grid grid-cols-2 gap-5`.
  - Images: next/image with width/height per intrinsic (Product-Grid-1/2 ~ 1340×972, Product-Grid-3/4 ~650×466, Product-Grid-5 ~1340×466) OR plain `<img className="w-full h-auto rounded-2xl">`. Use `rounded-2xl` (~16px) and `object-cover`.
- On mobile (`grid-cols-1`): everything stacks single-column in this visual order: PG1, PG3, PG4, PG2, PG5.

## Assets (from /images/)
Product-Grid-1.png, Product-Grid-2.png, Product-Grid-3.png, Product-Grid-4.png, Product-Grid-5.png

## Text (verbatim)
- H2: "The system that works, everywhere you work"
- Button: "See the full Ditto platform"

## Responsive
- Desktop ≥1024: 2-col bento as above. <1024: single column stack (PG1, PG3, PG4, PG2, PG5). Heading 30px.
