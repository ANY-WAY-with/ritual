# Ditto (dittowords.com) — Design Tokens

Source: Webflow site. Body bg `#f7f5f3`, body text `#000`, base font ABC Social.

## Fonts (self-hosted .otf, downloaded to /public/fonts)
| Family | Weight | File |
|---|---|---|
| ABC Social | 300 (Book) | ABCSocial-Book.otf |
| ABC Social | 400 (Regular) | ABCSocial-Regular.otf |
| ABC Social | 700 (Bold) | ABCSocial-Bold.otf |
| ABC Social Extended | 400 | ABCSocialExtended-Regular.otf |
| ABC Social Extended | 700 | ABCSocialExtended-Bold.otf |
| ABC Social Condensed | 900 (Black) | ABCSocialCondensed-Black.otf |
| ABC Social Mono | 400 | ABCSocialMono-Regular.otf |

Primary UI font: **ABC Social**. Headlines use ABC Social (400 weight for hero, 700 for section h2). Code blocks use ABC Social Mono. The DITTO wordmark / footer logo is its own SVG (not a font).

## Colors
| Token | Value | Use |
|---|---|---|
| bg / cream | `#f7f5f3` | page background, light text on dark |
| surface-2 | `#efede9`, `#e6e4de`, `#dcd8cf` | beige surfaces; `#dcd8cf` = "Book a Demo" pill |
| foreground | `#000000` | primary text |
| muted | `#6a6559` | secondary/muted text (paragraphs, nav links) |
| yellow (brand) | `#ffdd33` | hero highlight, "See the full Ditto platform" pill |
| orange (red) | `#ff6137` | stats/testimonials section bg (`bg-red`); also `#ff5124` bento card |
| blue | `#1345eb` | final-CTA "Get a Demo" pill; feature blue card `#146ef5` |
| black | `#000000` | dark sections (`bg-black`), primary pills |
| purple | `#b26dc2` (bullet) / `#dac3df` | "Capture how your product speaks" card + bullet |
| green | `#64a727` | "Apply the standards" card + bullet; "Integrated with AI" card |
| olive/lime | `#bbb809` | "Trace and govern" card + bullet; bento olive icon square |
| pink | `#f5c4cc` / `#ffdede` | "One source of truth" card + bullet |
| light-blue | `#9bd1ee` | accent |

## Typography scale (computed, desktop 1440)
- **Hero H1:** ABC Social, 89.6px / line-height 89.6px (1.0), weight 400, letter-spacing -2.16px, centered, color #000.
- **Section H2:** ABC Social, 44.8px / 49.28px, weight 700.
- **Feature H (h4-ish):** 24px / 28.8px, weight 700, ls -0.32px. (Feature titles render larger ~40px — verify per section.)
- **Body p:** ABC Social, 26px / 31.2px, weight 300, ls -0.3676px, color #6a6559. (Smaller bodies 16-18px in feature rows.)
- **Nav link / button text:** 16px, weight 700, ls 0.13px.

## Buttons (border-radius: 1000px / full pill, gap 8px, font 16px/700)
- **Primary (black):** bg #000, color #f7f5f3, padding 15px 20px, h≈51. (Get Started, Get a Demo hero, See Case Studies@13px/15px pad)
- **Beige (Book a Demo):** bg #dcd8cf, color #000, padding 15px 24px.
- **Ghost (Get Started Free):** transparent, color #6a6559, weight 700.
- **Yellow (See full platform):** bg #ffdd33, color #000, padding 15px 20px.
- **Blue (final CTA Get a Demo):** bg #1345eb, color #f7f5f3.
- **Nav link:** transparent, color #6a6559, padding 8px 10px, radius 100px, gap 5px.
- All buttons contain a trailing arrow icon (`button-arrow` svg, currentColor).

## Radii / spacing
- Pills: 1000px. Cards (bento/feature mockups): ~16-24px. Nav links: 100px.
- Section vertical padding utilities seen: `padding-top-80`, `padding-bottom-100`, `padding-bottom-60`, `padding-top-50`.
- Content max-width ~1200px, centered.
