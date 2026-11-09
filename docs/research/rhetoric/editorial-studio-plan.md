# Ritual editorial studio — hero comparison and website plan

2026-11-09. User selected editorial studio as the direction to explore and requested two working hero options with the same floating images and animation. Audience: creators across all content formats. Typography selection remains open.

## Delivered comparison

`/studio?type=sans` — A, Inter throughout.

`/studio?type=serif` — B, Inter plus Newsreader on “your creative world.” only.

A fixed review control switches the family without remounting the floating stage, so its elapsed preset time and pause state are retained. Both candidates share the headline, short supporting copy, five task prompts, same six images, scene layouts and motion engine. The main `/` warm version and isolated source routes remain available. The lower page is retained for context; its editorial/product rewrite is planned below, not claimed complete.

The study uses “An AI partner for / your creative world.” and “Explore ideas, research what matters, and shape your next piece—in your voice.” Its decorative bar cycles through fresh angle, connecting ideas, research, first draft and direction. It is a preset illustration, not an interactive assistant or evidence of a live AI run.

## Intended visual character

Ritual should feel like a calm studio where a creator thinks and develops work. Warm paper, ink, authored type, expressive images and useful fragments of work form the vocabulary. Clarity of product purpose is part of attractiveness: a visitor should understand the AI partner and see something they could make with it.

- Keep the accepted warm palette and existing quiet floating motion.
- A single editorial type gesture is enough. If B is chosen, reserve Newsreader for short editorial headlines/quotes; UI, body and utility labels stay sans. If A is chosen, distinguish the voice through scale, line breaks, spacing and image composition.
- Keep a clear hierarchy: headline, useful explanation, one primary action, then supporting exploration. Do not make every item compete at headline weight.
- Reuse the app's warm neutral relationships as a starting point. Website display sizes need their own composition; do not enlarge a dashboard into a marketing page.
- Use borders and panels to group actual artifacts. Alternate open text/image compositions with a purposeful product surface, rather than repeating the same rounded grid.
- Retain image detail and natural variation in aspect ratios. Expressiveness should come from the work and its presentation, not extra chrome or animation everywhere.

## Sequence for the full site

**Superseded sequencing:** the user subsequently deferred typography selection and prioritized full-site content/layout planning. Use `website-blueprint.md` for the current sequence and early-access conversion goal; the A/B studies below remain available for later review.

### 1. Select the hero's typographic voice

Review both candidates at desktop and mobile, with the same held scene and with motion running. Evaluate warmth, clarity, visual balance, line wrapping and the space between the headline and imagery. Select A/B or a bounded refinement; neither is automatically the final brand.

Finish line: chosen family treatment, headline, supporting copy and an agreed real access action. Existing section links remain until access/download availability is confirmed.

### 2. Build one convincing creative story

Develop a safe, illustrative example showing an idea becoming an angle, source-backed research and a draft. Use the same subject across the sequence. Show different creator formats in supporting examples—an essay, a video or audio opening, a visual narrative—without claiming equal live integration or production capability across formats.

Use actual supported product UI where possible. Any staged fragments must use existing Ritual visual patterns, be labeled appropriately and avoid invented customer work, metrics or testimonials. The current six photographs stay during this hero comparison; a later imagery change is a separate authored pass.

Finish line: a visitor can describe what Ritual helped advance, what the creator decided, and what the output is.

### 3. Rewrite the page around visitor questions

| Section | Visitor question | Proposed treatment |
| --- | --- | --- |
| Hero | What is Ritual, and is it for me? | Chosen hero, timed creative prompts and clear action |
| One creative example | What can I actually do with it? | A generous example progressing through idea → research → draft |
| Creator context | How does it work with my voice and work? | A brief explanation with a supported product interaction; qualify intended vs implemented behavior |
| Ways to work | Does this fit what I create? | Three concise editorial examples across formats, with useful outputs |
| Product glimpse | What does working in Ritual feel like? | One legible, representative app view, with selective detail crops |
| Access / FAQ | How do I start, and what should I know? | Verified access destination and only real decision-relevant questions |

Remove or rewrite inherited reference-library categories and repeated galleries as this narrative replaces them. Do not retain sections merely because the source had them.

Finish line: every section adds new information and leads naturally to the next.

### 4. Art direction and refinement

- Establish an image palette and subject for each scene, keeping the same motion signature.
- Decide on a deliberate wordmark treatment; the current text mark is not a final owned logo.
- Tune the rhythm between large demonstration sections, compact explanatory passages and quiet pauses. Whitespace needs to distinguish ideas rather than inflate page length.
- Give mobile its own reading order. Important text stays clear of foreground art; the primary action stays easy to find.
- Keep motion concentrated in the hero and useful product demonstrations. Respect pause, reduced motion and offscreen holding.

Finish line: coherent typography, imagery, spacing and controls across the page, without one-off decorative styles.

### 5. Verification and release review

Render desktop, mobile and a wider desktop. Verify text wrapping, contrast, image loading, no horizontal overflow and working controls. Review initial, active, settled, paused, reverse-scroll and reduced-motion states where applicable. Run `npm run check`. Review public product claims, actual access paths and remaining differences before promoting a chosen full-site version.

## Scope and open decisions

Delivered now: working A/B hero comparison and this plan. Broader narrative, imagery replacement, real product demonstration, wordmark and access destination remain planned. The app itself in `with_ai` is unchanged. Serif choice and public capability claims are not automatically approved by this experiment.

## Verification of the delivered study

- `npm run check` passed: ESLint, TypeScript and production build. Refreshed generated Next route types for the new nested layout.
- Rendered A/B at 1440×900 and 390×844. Same held scene and scroll position remained when switching; verified both loaded font families and no horizontal overflow or broken hero imagery.
- Keyboard Enter switches the choice; selected state is exposed through `aria-pressed`. Pause/resume retained the scene; the running clock advanced afterward. Forced reduced-motion study uses no travel animation.
- Production renderer at localhost:3212 rendered the correct prompt prefix with no browser warnings/errors. A stale development SSR module was cleared by restarting the owned dev server; this was not reproduced in the production build.
- The source motion engine and layout maps are unchanged. Only the reusable bar's optional prefix prop was added. The isolated source study retains its default prefix.

Remaining scope: hero candidates only. The lower page still uses the previous warm landing content, and the six photos remain illustrative. Product examples, wider page rewrite, wordmark and final typography choice are the next design decisions.
