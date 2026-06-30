# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/dittowords/sec10-footer.png`
- **Interaction model:** static (link hover: opacity/underline).

## Layout
- `<footer>` bg **black (#000)**, color cream (#f7f5f3), padding ~py-16. `Container` max ~1320px.
- **Top:** 4 link columns in a row (`grid grid-cols-2 md:grid-cols-4 gap-8`). Each column: a small muted heading + link list. Headings have a **left border accent** (`border-l border-white/20 pl-3.5`) and muted color (#6a6559-ish, use `text-ditto-muted`), ~16px. Links: cream (#f7f5f3), 16px, gap ~20px (flex col), hover opacity-70.
- Column data:
  - **Solutions:** For Content Designers, For Developers, For Localization Managers, For Product Designers — then a SECOND ungrouped list under it: Build a Reusable Library, Centralize Copy Reviews, Localize Product Copy, Integrate with Engineering, Keep Designs in Sync, Build an AI Content System, For Financial Services.
  - **Product:** Ditto Overview, Enterprise, Pricing.
  - **Resources:** User Help Guides, Developer Documentation, Blog, What's New, Log In, Book a call.
  - **Company:** Careers. Then a second muted heading **Legal** (with its own bordered heading, mt ~24px): Terms of Service, Privacy Policy.
- **Newsletter** (right side / below columns, occupies right ~half on desktop, aligned under Resources/Company area):
  - Heading: "Never miss an update: Sign up for updates, exclusive insights, and product releases." — ~24px/700, cream, max-w ~560px.
  - Input row (mt ~24px): a rounded-full **white** input container holding `<input placeholder="Your email">` (transparent, flex-1) + a "Submit" text button on the right. The pill: bg white, rounded-full, padding, text #000. Submit is bold.
- **Giant wordmark:** `<DittoWordmark className="w-full h-auto text-ditto-cream" />` — full width, very large (the DITTO. logo spanning the footer), mt ~40px, color cream.
- **Bottom bar** (mt ~24px, flex justify-between, ~14px):
  - Left: "Made with " + `<HeartIcon className="inline h-4 w-auto text-ditto-cream" />` + " in San Francisco" — bold.
  - Right: "© 2026 Ditto Tech Inc." — bold.

## Assets / imports
- `DittoWordmark`, `HeartIcon` from `@/components/icons`.

## Text (verbatim)
All link labels + headings above; newsletter heading; "Made with ♥ in San Francisco"; "© 2026 Ditto Tech Inc."

## Responsive
- Desktop: 4 columns + newsletter to the right. Mobile: columns 2-up or stacked, newsletter full-width, giant wordmark scales with width, bottom bar stacks.
