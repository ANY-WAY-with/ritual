# Complete landing page — 2026-11-09

Source: https://marked.dev/. The user confirmed the complete landing page only, not Explore/Collections/MCP application pages, and selected an interface-first chat experience.

## Reference layout and observed behavior

At the observed 1280px browser width the lower-page container is 1080px wide. Main headings are Inter500, 40px/42.4px, with -0.88px tracking. Dark cards use a subtle border and about20px corner radii.

1. Floating hero with fixed navigation and typed search visual.
2. Short brand/logo recognition strip.
3. Feature bento: two large340px-high cards, three smaller211px cards, bottom proof/CTA row.
4. Category gallery: vertical selectable tabs at desktop, horizontal list on mobile; one selected panel with corresponding title, description, and source media. Categories can also change with time.
5. Two-column agent demonstration: copy and CTA at left, a rounded conversation demonstration at right.
6. Opposite two-column maker stack: layered reference cards at left, copy at right.
7. Horizontal media shelf: next/previous buttons change the scroll position; cards retain source maker credit.
8. FAQ: two-column desktop layout, single-open accordion. Selecting the second question collapses the first.
9. Multi-column footer. Source has theme selection, external links, and auth/account actions.

Mobile: features stack in one column; navigation opens a translucent right drawer with a dimmed/blurred backdrop. Footer and alternating sections stack. Desktop source transitions use staggered fade/reveal and looping illustrations; reduced-motion support is part of the reconstruction.

## Route map and ownership

- `/reference/marked-hero`: existing isolated hero study.
- `/reference/marked`: complete source landing-page study with original source copy and study-only media.
- `/`: Ritual adaptation with creative images, concept copy, and an interactive chat prototype.
- Hero motion: `src/components/hero/`.
- Chat and site navigation: `src/components/ritual/`.
- Below-hero sections: `src/components/sites/marked/marked-landing-body.*`, with separate reference and Ritual content variants.
- Source snapshots/inventory: `docs/design-references/marked/full-landing-*.png`, `mobile-menu.png`, and `landing-inventory.json`.
- Source image provenance: `landing-assets.json`; downloaded images verified as JPEG.

## Chat boundary

This is an interface prototype. It renders locally scripted sample replies, marked as such. It sends no messages to an AI service, creates no account, and does not persist chat history. Hero composer supports Enter to send and Shift+Enter for a newline; the expanded panel supports prompt starters, follow-ups, stopping a pending sample reply, copying a response, new conversation, closing, and Escape.

## Verification and remaining differences

- `npm run check` passed after integration (ESLint, TypeScript, production build).
- The chat was exercised through Enter submit, prompt starter, follow-up, stop, copy, new conversation, Escape and close. A gallery detail can seed a new chat prompt.
- Main section links, arrow-key category selection, gallery detail dialog, single-open FAQ, and the mobile drawer-to-chat handoff were exercised in the browser.
- Full layout compared with source desktop and mobile screenshots. The Ritual adaptation keeps the source section geometry and sequence while using original creative imagery and concept copy.
- Source-specific timed logo swapping, automatic topic rotation, typing cycles, provider logos, and full media-video library remain simplified illustrations/thumbnails. The original source app/auth flows are outbound links in the unindexed reference study.
- The Ritual prototype has no live AI, saved accounts, cloud collections, upload service, pricing or third-party integrations. Chat data remains in memory for the browser tab.
- The existing hero motion and static reduced-motion fixture are retained; the new lower sections add reduced-motion CSS and visible-by-default content.
