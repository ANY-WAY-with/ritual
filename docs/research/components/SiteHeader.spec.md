# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec00-section.png` (top bar)
- **Interaction model:** static sticky (does NOT change on scroll). Mobile = hamburger menu (client component).

## Layout
- `position: sticky; top: 0; z-index: 50;` transparent background (no fill, no shadow) at all scroll positions. Height ~67px.
- Inner: `Container` (max 1200px) but logo sits flush-left near viewport edge; use a full-width flex row with px-5 md:px-8, `justify-between items-center`, h-[67px].
- **Left:** DITTO. wordmark — `<DittoWordmark className="h-7 w-auto text-ditto-ink" />` (≈28px tall, black). Link to "/".
- **Center/right nav (desktop ≥1024px):** links then 2 CTA pills.
  - Links: Product, Solutions ▾, Resources ▾, Enterprise, Pricing.
  - Link style: text-base font-bold, color `text-ditto-muted` (#6a6559) hover:`text-ditto-ink`, padding 8px 10px, rounded-full, gap-1. Dropdown links (Solutions, Resources) show `<CaretDownIcon className="ml-1 h-2 w-2" />`. Letter-spacing 0.13px.
  - CTA: `<PillButton variant="primary" withArrow={false}>Get Started</PillButton>` then `<PillButton variant="beige" withArrow={false}>Book a Demo</PillButton>`. (No arrows on nav pills.)
- **Mobile (<1024px):** show logo + a hamburger button (right). Tapping toggles a full-width dropdown panel (cream bg) listing the nav links stacked + the two pills full-width. Use `useState` for open/close. Add `"use client"`.

## Computed styles
- Nav link: 16px / 700, color #6a6559, rounded-full (100px), padding 8px 10px, gap 5px.
- Get Started: bg #000, text #f7f5f3, padding 15px 20px, rounded-full, 16/700.
- Book a Demo: bg #dcd8cf, text #000, padding 15px 24px, rounded-full, 16/700.

## Notes
- Dropdowns: do NOT build mega-menus; the caret + hover color is enough.
- Real nav labels verbatim: "Product", "Solutions", "Resources", "Enterprise", "Pricing", "Get Started", "Book a Demo".
- hrefs can be "#".

## Responsive
- Desktop ≥1024: full row. Tablet/mobile <1024: hamburger menu.
