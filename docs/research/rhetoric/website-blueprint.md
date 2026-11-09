# Ritual website blueprint

2026-11-09. Planning baseline. The user subsequently authorized a full-page wireframe; see `full-page-wireframe.md` for the implemented review route and verification.

## Confirmed direction and priority

- Audience: creators across content formats.
- Primary conversion: Join early access (user confirmed in this planning turn).
- Visual direction under exploration: editorial studio, warm off-white, quiet expressive imagery and the existing floating hero motion.
- Sans vs serif remains undecided. The user explicitly prioritized the full website's story, structure and content before that choice. The earlier font-first sequence is superseded.
- Product context comes from the reviewed local `with_ai` sources indexed in `ritual-product-direction.md`. Those establish product intent and local implementation; they do not establish public availability or complete capability parity across formats.

Everything below is a proposed website structure for discussion, not an accepted final design or implementation authorization.

## Job of the site

Introduce Ritual as an AI partner for a creator's ongoing practice, demonstrate one useful piece of work advancing through it, and invite the visitor to early access.

A first-time visitor should be able to answer:

1. Ritual is an AI app for people who create.
2. It helps explore ideas, research and develop work.
3. The intended difference is relevance to my own work, voice and context.
4. I can join early access with my email.

Proposed working positioning: “An AI partner for your creative practice.” This is a category/value statement, not final headline copy. Keep the warm brand line available as a supporting line. Lead with creator intent and concrete outputs; explain contextual capability using supported examples rather than a broad perfect-memory promise.

## First-version site architecture

- `/`: one complete narrative homepage with anchors for How it works, Ways to create and Questions; signup at `#early-access`.
- `/privacy`: actual privacy policy applicable to email collection and the website. Product data policy must match the actual product/service.
- `/terms`: applicable terms when established; confirm their scope before drafting/publishing.
- Successful signup: inline confirmed-success state with what happens next. Optional interest question follows success, not as a signup requirement. Do not add an unnecessary account-creation screen.
- Company/about: a short footer attribution and existing Rhetoric company link initially. A dedicated page needs a real story/content to justify it.
- Keep `/studio` as a noindex review route until typography is selected.

Separate feature pages, an empty journal, pricing with an unconfirmed offer, and creator-format landing pages are later options when actual content and acquisition needs justify them.

## Homepage structure

### Navigation

Wordmark at left; How it works, Ways to create, Questions; Join early access at right. On mobile use the existing compact menu. Use the same primary CTA label and destination throughout. Keep Rhetoric attribution in the footer so the header focuses on the product.

### 1. Hero — “Is this for me?”

Content:

- Explicit AI + creator positioning in the headline/supporting line combination.
- One short explanation of ideas, research and development in the creator's own voice.
- Existing floating creative imagery, scene rotation and subtle pointer response.
- Timed illustrative task bar, with format-neutral prompts.
- Primary Join early access; secondary See Ritual in action linking to the demonstration below.

Layout:

One composed central message with clear space around it. Keep the warm canvas and image depth. Treat the animated imagery as atmosphere and an introduction to creative work; the next section supplies concrete product evidence. Do not ask the hero to explain the whole product. Text remains legible as scenes change.

Purpose/finish line: a visitor understands the category and next action without interacting with the animation.

### 2. A thought becoming work — “What would I actually do?”

Content:

Use one safe illustrative creative brief throughout three states: explore an angle → research what matters → shape a draft. Proposed demonstration subject for discussion: “Why do we keep objects we no longer use?” This can lead to an essay, recorded story or visual series; the example itself is not a fabricated customer result.

Show the creator's request, Ritual's useful contribution and a tangible artifact at each state. Example artifacts: three distinguishable angles, a concise source-linked research note, an opening and outline. The creator's judgment stays visible.

Layout:

A generous product demonstration immediately after the hero. A short heading and brief at the top; one large, legible workspace with three compact state controls. The controls change meaningful content, with a visible default state. Include source/draft detail crops where reading the actual artifact helps. Mobile stacks the short explanation above the preview; do not shrink a full desktop dashboard to unreadable scale.

Purpose/finish line: the visitor can name a concrete output and understand the benefit. This is the page's principal proof section.

### 3. Working with your world — “Why Ritual?”

Content:

Explain how relevant creator-provided work, references and current intent can inform the work together. Demonstrate a specific, supported contextual difference, such as a request shaped by an example and a stated voice preference. Verify the exact MVP context behavior before public copy or animation is finalized.

Proposed content hierarchy: your work / what matters to you / what you're making now. These are explanatory concepts, not a requirement to create three product features or imply automatic background access.

Layout:

A quieter split composition: a concise statement and explanation on one side; a meaningful contextual interaction/artifact on the other. Fine dividers and small annotations can explain cause and effect. Avoid another wall of feature cards or a generic chat answer as the whole proof.

Purpose/finish line: demonstrate a reason Ritual could feel relevant to this creator, without asserting unlimited or flawless memory.

### 4. Room for what you make — “Does it fit my practice?”

Content:

Three brief, distinct cross-format examples, selected against supported product behavior:

- Written work: developing an observation into an essay angle or newsletter outline.
- Recorded work: researching a topic and shaping a video/audio opening.
- Visual work: developing a concept, narrative or creative brief.

Each example names the starting problem and shows a useful artifact. These examples describe creative thinking/output scope; they must not imply video editing, audio production or image generation unless verified.

Layout:

An open editorial arrangement with varied media proportions and short captions. Use one larger example and two supporting examples, or a responsive series of rows. The layout should look like work taking shape, not a directory of platforms. Keep the content brief enough that this section adds breadth without repeating the flagship demo.

Purpose/finish line: a creator sees a recognizable task without feeling they must belong to one platform or format.

### 5. Practical questions — “What do I need to know?”

Initial FAQ candidates:

- Who is early access for?
- What can I do in the first version?
- Where will Ritual be available?
- What do I need to bring/connect to get started?
- How is my work/data handled?
- What happens after I join early access?

Use answers grounded in actual product policy, platform and onboarding decisions. Pricing belongs here only when the offer is settled. Keep expanded answers readable and the list short; avoid turning the FAQ into the main product explanation.

Layout:

A quiet text-led section with the existing accessible accordion behavior, a readable column and a clear contact route.

Purpose/finish line: remove the actual objections to joining.

### 6. Early access — “I'd like to try this”

Content:

A direct invitation, one sentence about hearing from Ritual, email field, Join early access button and a relevant privacy link. Keep required information to email initially. A post-success optional “What do you create?” question can help understand the audience without making it a gate.

Final copy must reflect the actual invitation cadence and communication expectations. Do not invent a launch date, queue position, limited-seat claim, subscriber count or guaranteed admission.

Layout:

A calm closing composition with generous but purposeful space. One form, clearly visible field/submit state and confirmed success after a real save. Keep an entered email available if submission fails, with useful recovery feedback. Header/hero CTAs link here rather than opening several different signup experiences.

Purpose/finish line: visitors know what submitting means and whether it worked.

### Footer

Ritual wordmark and short brand line, contact, Rhetoric attribution, privacy/terms and useful in-page links. Add actual social destinations only when available. Keep it compact.

## Scroll rhythm and art direction

Rhythm: atmospheric hero → concrete large demonstration → quieter contextual explanation → expressive cross-format examples → practical questions → direct invitation.

- Warm paper/ink remains the base. Imagery carries most of the colour; add a small supporting accent only where it has a role.
- Mix open compositions with purposeful product surfaces. Do not put every paragraph in a rounded card.
- Establish a common image treatment and caption system. Hero images remain as requested; curated replacement imagery is a later decision.
- Typography must serve this structure. Compare sans/serif again on the actual headline, short explanation, example title and caption, not only an isolated slogan.
- Concentrate motion in the existing hero and a purposeful demonstration transition. Keep reading sections steady. Preserve pause, offscreen holding and reduced-motion support.
- Plan mobile as a reading sequence, with legible artifact crops and no reliance on hover.
- Do not add a logo strip, testimonials or measured outcomes until real attributable evidence is available. Strong product demonstration can establish credibility in the meantime.

## Content to prepare

| Material | Needed for | Preparation |
| --- | --- | --- |
| One coherent creative brief and example outputs | Flagship demo | Choose a representative safe subject; write useful input/angle/research/draft content |
| Supported product UI | Demo and contextual difference | Use the reviewed Ritual components/screens, confirm actual behavior, remove private/customer information |
| Three concise cross-format artifacts | Breadth section | Show specific outputs instead of platform logos or broad capability promises |
| MVP scope/platform/onboarding facts | FAQ and access expectation | Confirm actual launch plan before publishing answers |
| Signup handling and communication policy | Early-access form | Set collection destination, consent/privacy expectations and truthful confirmation behavior |
| Image/caption and wordmark treatment | Coherent art direction | Refine after content and layout work; retain current hero assets during planning |

## Design sequence and decision gates

1. Align this story and section order. Confirm the core contextual benefit and the flagship example.
2. Write a content-first page draft, with realistic text lengths and safe artifacts. Remove duplication before visual polish.
3. Create a low-fidelity full-page desktop/mobile composition. Judge hierarchy, section transitions and whether the visitor can explain the product.
4. Apply the editorial visual language and revisit sans/serif on that full composition. Choose the direction by how it serves the whole page.
5. Build the selected design, connect the early-access flow, verify actual controls, responsive layouts, motion and product claims, then review for release.

This planning baseline was followed by an explicitly authorized full-page wireframe. That review implements the section structure with illustrative content and a local-only signup preview; it does not add AI behavior, backend form integration or a public launch. See `full-page-wireframe.md`.
