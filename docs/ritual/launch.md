# Ritual launch — 2026-11-06

Renamed `ANY-WAY-with/creatorwith.com` to `ANY-WAY-with/ritual` with full Git history preserved.
The tag `creatorwith-before-ritual-2026-11-06` preserves the old site and reference assets.

## Validation

- `npm run check` passed (ESLint, TypeScript, production build).
- Rendered the production build at desktop 1440×1000 and mobile 390×844.
- Both layouts show the complete headline, contact action, and footer without horizontal overflow.
- Contact links point to contact@rhetoric.so; the footer links to https://rhetoric.so.
- Browser console error log was empty.
- CI now targets `main`.

## Intentional differences from the previous site

- A small Ritual launch page replaces the old feature-heavy landing page.
- Removed sample metrics, product mockups, placeholder sign-in/signup, reference routes, and their assets.
- Uses system Arial/Georgia fonts rather than the extracted reference-site fonts.
- No animations, product authentication, waitlist database, analytics, or product app integration.
- Contact uses email. The full Ritual product site and final brand design remain future work.
