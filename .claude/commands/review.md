---
description: Review an existing interface for craft, accessibility, and AI slop. Walks the 10-Lens checklist, anti-defaultism scan, Universal Design 7 audit, Nielsen heuristic scoring, grid audit, hardening, distillation, and onboarding audit. Produces a structured review using the output-format.md template.
---

# /design-expert:review

This command reviews existing UI — a Figma frame, deployed surface, PR diff, component, or screenshot. It produces a structured document with severity tiers, citations to Nielsen heuristics and Universal Design principles, an anti-defaultism scan against `anti-slop.md`, and a numeric audit score across five dimensions. A review is not feedback — feedback is hallway walk-by; a review is evidence-grounded evaluation that survives the conversation. Six months from now, someone reads it and either trusts the recommendation or starts over. Trust is earned by the structure below.

## When to use this command

Reach for `/design-expert:review` when the work exists and the question is "is this good enough to ship, and if not, what must change." Triggers: a deployed URL the team is uncertain about, a Figma frame ready for sign-off, a PR diff with new UI, a stakeholder screenshot, a component being promoted into the system. Use `/design-expert:build` when the surface does not yet exist; use `/design-expert:plan` for project-level scope rather than craft on a built thing. Running this on a sketch produces noise; running it on a shipped surface produces gold.

## Review modes

Pick the mode by stakes, not time pressure. A light-mode review covers a single component, microcopy edit, or small PR diff — three sections (Context, Issues with severity tiers, References) at two to five hundred words. A sub-surface review covers one screen inside a larger flow — four sections (Context, Issues, anti-defaultism scan, Next Steps) at five hundred to twelve hundred words, citing the parent audit. A full review covers a primary user flow, new feature, or brand launch — all eight sections from `output-format.md` with full citation discipline, the numeric score, and the confidence framework. A bad full-template review on a microcopy edit teaches the team that reviews are bureaucratic; a light-mode review on a primary user flow ships broken work. When unsure, ask.

## The review workflow — ordered

The order matters because each step gates the next. Anti-defaultism runs first — if the design is fundamentally generic, polishing slop only produces polished slop. The 10-Lens checklist comes next to confirm the design is justified at all, not merely decorated. Universal Design 7 follows because failing three principles means the design is broken regardless of polish. Nielsen heuristic scoring layers usability evidence on top. The five-dimension audit collapses everything into a numeric snapshot. The grid audit checks the foundation underneath all of the above — almost every craft failure roots in a grid that was never committed to or quietly abandoned. Hardening, distillation, and the onboarding audit are passes for "what breaks under stress," "what can be removed," and "what's missing." Citations bind the document together; the output template is the container. Skip a step and the review loses signal; reorder and you waste effort polishing a design anti-defaultism would have flagged for structural rethinking.

### Step 0: Recognize the actual intent — review or iteration?

Before opening any review file, read the user's request against the sizing taxonomy in `craft.md` § Iteration as a category. Users frequently say *"review this"* or *"critique this"* when they actually want **iteration** — a proposed change, not just notes. The phrasing signals to look for:

- *"Review this"* + an existing file or component → may be review-only OR iteration; check whether the user wants notes vs change
- *"Critique this"* → typically review-only (text output)
- *"What do you think"* → review-only
- *"What would you change"* → iteration (review + proposed changes, often with implementation expected)
- *"Make it better"* → iteration (implementation expected)
- *"Make it prettier"* → iteration (often polish-sized)
- *"I don't like this"* → iteration (diagnosis + proposed change)
- *"Fix this"* → polish or iteration depending on scope
- *"Could be better"* → iteration

If the intent is iteration, route to `/design-expert:build` with the appropriate size (polish / iteration / surface redesign per the sizing taxonomy in `craft.md`). The build command will run the gates appropriate to the size — polish runs an abbreviated workflow; iteration runs the middle path; redesign runs the full workflow. Don't run the full review workflow against an iteration request and produce text-only output when the user wanted a change.

If the intent is genuinely review-only (text output requested with no implementation expected), proceed with Step 1 below. When the intent is genuinely ambiguous, ask: *"Do you want a written review, or do you want me to propose and implement changes?"* The answer sets the rest of the workflow.

### Step 1: Anti-defaultism scan (FIRST) — register-conditional

**Confirm the register before scanning.** Read `PRODUCT.md` for the `register:` field, or read the project brief for explicit cues (case study / long-form / magazine → editorial; marketing landing / campaign / launch hero → brand; dashboard / admin / settings / data table → product). If confidence is ≥80%, state the register inference and proceed. If confidence is below 80%, **call `AskUserQuestion`** with the three register options before opening `anti-slop.md`. The same tell triggers different verdicts in different registers: a purple-blue gradient is a Blocker on product, a Note on brand, a Major on editorial; a centered hero is acceptable on brand, broken on editorial; a three-equal-cards layout is a default on product, a cargo cult on editorial; Carbon-density rows are required on product, oppressive on editorial. Without register confirmation, every verdict is wrong half the time.

Open `anti-slop.md` after register is confirmed. The gating question: would a stranger walking past the screen register this as machine-shaped before registering the product? If yes, no heuristic tagging will rescue it — the design needs structural rethinking, not polish. Walk the categories. Visual and CSS tells: pure black backgrounds, purple-blue gradients, untinted shadows, glassmorphism on non-fixed surfaces, 9999px-rounded cards holding dense data. Color tells: violet gradients (the AI-art tell), cyan-on-dark dark mode, gradient text on metrics, default-to-dark-mode aesthetic retreat. Typography tells: Inter on a brief that called for personality, flat hierarchies, all-caps eyebrows with brand color, gradient text on display headers, H1 wrapping to six lines because the container is `max-w-md`. Layout tells: three equal feature cards repeated down a page, centered hero on a product or editorial surface, cards inside cards, hero metric layouts (big number + three stats + gradient), sidebar a different color from the canvas. Motion tells: `transition: all 0.3s ease`, bounce/elastic easing, animations on `top` and `left`, scroll listeners instead of `IntersectionObserver`, bounce on a financial dashboard. Content tells: John Doe, $1,000, 99.99%, "Elevate," "Streamline your workflow," Lorem Ipsum, redundant headings restated in intros. Iconography tells: rocket for "launch," shield for "security," sparkle for "AI."

If reviewing code, run the grep recipes from section seven of `anti-slop.md` — they catch substring-falsifiable defaults in seconds. If reviewing a Figma frame or screenshot, scan visually. Note tells by category and cite both the anti-slop section AND the register-conditional verdict ("[anti-slop, Color tells; editorial register; Major]"). Threshold rule: three or more categories with major tells in the wrong register means the design is generic — surface as a Blocker in the executive summary. One or two categories means file each tell as Major or Minor by register. The AI assistant card cliché — purple left stroke, sparkle tile, uppercase eyebrow, brand-colored CTA — is an automatic Blocker on any AI-attribution surface; cite the project-specific section and propose the editorial-byline replacement.

For editorial register, also load `styles/editorial.md` § Anti-patterns — the four named patterns (marketing-page cargo cult, card-everywhere template, one font for all three jobs, dashboard density on a reading surface) are register-specific tells that the general anti-slop categories miss.

### Step 2: 10-Lens Decision Checklist

Walk the ten lenses from `foundations.md`: IA, hierarchy, user goal as a verb, pre-solution pain, business context, effort, impact-versus-effort, strategy fit, agent harmony, and objective justification per visible decision. Surface only lenses that fail or cannot be answered with confidence — a clean dashboard with a clear goal does not need ten paragraphs.

Lenses 3, 4, and 10 are mandatory gates. If you cannot articulate the user's verb (lens 3), the design is decorated rather than designed — surface as a Blocker and stop. If you cannot name the pre-solution pain (lens 4), the recipient has not talked to enough users — file as Major and request research. If a visible decision (color, font, placement, icon, size) cannot be justified through a user goal, pain point, NNg article, Universal Design principle, stated intent, or business constraint (lens 10), it is taste — and taste is not a citation. Lenses you cannot answer without user input belong in Open Questions, not Issues.

### Step 3: Universal Design 7 audit

Walk the seven principles from `foundations.md` with a per-principle pass / fail / N-A line. Principle 1 (Equitable Use): does the equitable path equal the default, or is accessibility a degraded toggle? Principle 2 (Flexibility): does the design adapt to the user's pace, or force speed through countdowns and auto-advance? Principle 3 (Simple and Intuitive): is jargon kept out, is information arranged by importance, are platform conventions honored? Principle 4 (Perceptible Information): are status cues redundantly encoded — color plus label plus icon, never color alone? Principle 5 (Tolerance for Error): are destructive actions visually distinct from safe ones, with friction proportional to consequences? Principle 6 (Low Physical Effort): bulk actions where work is repetitive, autosave on long forms, keyboard alternatives to drag? Principle 7 (Size and Space): touch targets at least 44 by 44 pixels, CTAs in thumb-zone reach, modals that do not vanish in three seconds?

Three or more failures means the design is broken regardless of polish — surface in the executive summary, not as a footnote. Principle 4a (color + label + icon redundancy) is the most-invoked failure in product UI; check it carefully. Cite by sub-letter: "fails 4a — color-only status on the inbox row" or "fails 7c — 32-pixel checkbox target." Universal Design failures compound silently — a color-only indicator looks fine in screenshots and quietly excludes color-vision users who never file a ticket. Non-negotiable on product surfaces.

### Step 4: Nielsen heuristic scoring (0–4)

Walk the ten heuristics from `foundations.md`, scoring each on the 0–4 scale from `output-format.md`. Anchors: 0 fails fundamentally — not attempted; 1 significant problems — breaks at the first edge case; 2 works but unrefined — competent in the happy path, weak elsewhere; 3 clearly competent — solid throughout; 4 genuinely excellent — defensible in any senior review. Sum the ten scores for a heuristic-compliance subtotal out of forty, feeding dimension one of the five-dimension audit. Note which heuristics are most violated — patterns matter more than isolated failures. A surface failing heuristics 1, 4, and 9 has a "no feedback, inconsistent labels, useless errors" character that names a systemic problem, not three unrelated bugs.

Honesty enforcement is the hardest discipline here. A 4 means genuinely excellent, not "good enough." A 2 is the median — most product surfaces score in the 2 to 3 range per heuristic and that is normal. If you score everything 3 to 4 across the board, you are being polite, not honest, and the scores have lost their signal. The point of a numeric score is differentiation across versions and surfaces; if the next reviewer cannot tell from your score whether this is better or worse than the last one, the score has failed. Recalibrate downward when in doubt.

### Step 5: 5-dimension audit framework

Score five dimensions, each 0 to 4, summing to a total out of twenty. Dimension one — heuristic compliance — is the step-four sum normalized to 0–4 (0–8 = 0; 9–16 = 1; 17–24 = 2; 25–32 = 3; 33–40 = 4). Dimension two — anti-defaultism — measures distance from generic AI-generated patterns; a 4 means a signature element is locatable, typography and color come from the product's domain, and a swap test (replace typeface and accent with boring defaults) would meaningfully degrade the design. Dimension three — craft — covers composition, layering, density, type rhythm, spacing rigor, surface elevation under the squint test; a 4 means hierarchy holds when blurred and elevation reads as intentional. Dimension four — accessibility — covers keyboard navigation, focus management, ARIA roles, WCAG AA contrast, reduced-motion respect; a 4 means the design passes a keyboard-only walkthrough at AA throughout. Dimension five — hardening — is detailed in step six and scored here.

Score bands from `output-format.md`: 18–20 Excellent (rare; suspect overscoring if you reach it often), 13–17 Good (structurally sound; ships), 8–12 Adequate (functional but not signature; common ground for shipped product), 4–7 Poor (significant issues), 0–3 Critical (complete revision warranted). Surface the band, total, and per-dimension scores in the executive summary. The numeric score forces specificity ("a 2 here because color-only status fails 4a in three places") and enables trend tracking across versions.

### Step 6: Grid audit

Open `grids.md` before this step and `design-gods/muller-brockmann.md` if the surface is system-level. The grid is the deepest layer of design; almost every craft failure roots in a grid that was either never committed to or quietly abandoned. A review without a grid lens is a review that polished the surface and missed the foundation.

Walk the seven checks, in order, and surface failures with the citations below. The full failure catalog lives in `grids.md` § Common failures.

**Check 1 — Was a grid committed to?** Look for explicit grid declarations: a column count documented somewhere (system.md, design tokens, design notes), a stated container max-width, named gutter and margin tokens, a baseline value. If none of these exist, the design is improvising. Surface as a Blocker for any medium-or-larger surface — improvised grids do not survive the second screen. Cite `[grids.md, Common failures: No grid at all]`.

**Check 2 — Is the grid honored?** Even when a grid is declared, components often abandon it. Look for inline pixel values in the rendered code or design files: `padding: 18px`, `gap: 22px`, `margin: 14px`. None of these snap to an 8-point baseline; all of them are receipts that the token system was bypassed. Run the grep `grep -rE '(margin|padding|gap):\s*[0-9]+px' src/` (excluding tokens file). Every match is an issue. File as Major when count exceeds five; file as Minor when count is one or two and the token equivalent is obvious. Cite `[grids.md, Common failures: Grid declared, grid abandoned]`.

**Check 3 — Is the column count right for the content?** Twelve columns is the universal default and the wrong answer for surfaces that only ever use halves and quarters. If the layout uses thirds, twelve is right; if it never uses thirds, the grid is wearing a costume of flexibility it does not need. Suggest simplification to 6 or 4 if the content shape supports it. Cite `[grids.md, The 12-column dialect (and its alternatives)]`.

**Check 4 — Is the register correct?** Brand surfaces should use fluid grids and asymmetric layouts where one element clearly leads; product surfaces should use fixed pixel grids that don't drift between viewport widths. A marketing landing with a fixed pixel grid reads as cold and cheap; a settings panel with a fluid clamp-based grid reads as toy software. Cite `[grids.md, Brand vs. product register]` and pair with `[design-gods/muller-brockmann.md]` for the symmetric case or `[design-gods/jan-tschichold.md]` for the asymmetric.

**Check 5 — Off-grid alignment.** This is the single loudest grid tell on a deployed surface. Hero images that don't align to a column edge. Cards that are 1px off from each other. Buttons that are not vertically centered against their input. Headings that float between baseline grid lines. Spot it by overlaying a grid (browser devtools `Show grid overlay`, Figma's grid feature) and looking for the 4–7 pixel drift. Every drift is an issue. File at Major severity when alignment fails on primary surfaces (hero, nav, primary action); Minor when on secondary content. Cite `[grids.md, Common failures: Off-grid alignment by 4–7 pixels]`.

**Check 6 — Are the breakpoints content-driven or device-driven?** Look at the breakpoint values. If they are 375 / 768 / 1024 / 1280, the team chose them by phone/tablet/laptop/desktop, not by where the layout actually needs to reflow. The result is awkward intermediate widths — the content reflows at 920 but the breakpoint is 768, so for 152 pixels of viewport range the layout is wrong. File as Major when the in-between widths produce visible problems. Recommend renaming breakpoints by what changes (`stack`, `expand`, `dense`) so the team starts thinking in reflow rather than device. Cite `[grids.md, Common failures: Breakpoints chosen by device, not content]`.

**Check 7 — Are grid breaks deliberate and documented?** Some surfaces should break the grid — a hero image that bleeds into the canvas margin, a pull quote that overlaps two columns. The question is whether the break is the design or the design is sloppy. Deliberate breaks are accompanied by a comment in the component, a note in `BREAKS.md`, or an entry in the system docs. Undeliberate breaks have no documentation and are inconsistent across pages. File undocumented breaks as Major; recommend either documenting them or pulling them back into the grid. Cite `[grids.md, When to break the grid (and how)]`.

The grid lens contributes to Dimension 3 (craft) of the 5-dimension audit. A surface failing three or more grid checks scores no higher than 1 on craft, regardless of typography or color quality. The grid is foundational; the surfaces above it cannot compensate for an absent foundation.

### Step 7: Hardening review

Walk the dimensions from `harden.md`. Text overflow: will the longest username break the row? Are flex children given `min-width: 0`? Does multi-line text use `text-overflow: ellipsis` or `-webkit-line-clamp` where layout demands fixed height? Internationalization: 30 to 40 percent layout slack for German, 15 to 20 percent for Portuguese? Logical CSS properties (`margin-inline-start`) so RTL flips work? `Intl.DateTimeFormat` and `Intl.NumberFormat` rather than hardcoded formats? Error handling: does each HTTP status code get a designed state — 401 to login, 403 explaining the permission gap, 404 offering a way back, 429 naming the rate limit, 500 offering support? Edge cases: 100-plus-character names, emoji, RTL, 1000-plus rows, offline state.

Validation: is search debounced? Are double-submit buttons disabled while loading? Accessibility resilience: keyboard navigation across the whole flow, not just the primary path? `prefers-reduced-motion` honored? Performance: `backdrop-blur` confined to fixed and sticky elements rather than scrolling containers? Perpetual-motion components — pulses, shimmers, marquees — wrapped in `React.memo` and isolated as leaf Client Components? Note any hardening dimension that fails. A surface that works only on the happy path is a demo, not a product.

### Step 8: Distillation pass

Apply the question from `distill.md`: what can be removed without loss? Decoration that does not carry meaning. The third color when two would do. The animation that does not communicate. The card that is a `div` pretending to organize. The icon that adds nothing to a title. The all-caps eyebrow shouting "FEATURES" above a section obviously about features. The nested container holding a "section" that already had a heading. Cite the elements and what removing them would simplify. The squint test catches most — blur your eyes; if a hierarchy element is invisible in the blur and the page still reads, it was noise. Distillation is not minimalism for its own sake; it is removing obstacles between users and their goals so every remaining element has earned its pixel.

### Step 9: Onboarding and empty-state audit

Are empty states present, with WHAT-WHY-ACTION rather than "No data available" centered in a card? Empty states are onboarding views; a blank canvas with no guidance is a missed teaching moment. Are tooltips contextual and dismissable, not auto-shown on every load? Are guided tours capped at three to seven steps? Is first-encounter discovery considered — can a new user begin without reading documentation? The "happy path screenshot" failure mode is most visible here: the design works for a returning power user with data already loaded, then breaks the moment a new user opens it cold. Surface every state designed only for the happy path and propose the missing variants.

### Step 10: Citations

Every claim links to a heuristic, a Universal Design principle, a `references/nng-articles-index.md` entry, or an `anti-slop.md` category. Without citations, claims are taste; with them, claims are checkable. Cite by short form inline: `[Heuristic 4]`, `[UD 4a]`, `[NNg, "Modal Dialogs in Forms"]`, `[anti-slop, Layout tells]`. Include the strength tag from `foundations.md` where it matters — `[G]` guideline, `[R]` rule, `[OPN]` opinion, `[R&D]` research. The recipient who disagrees can follow the link, read the source, and form their own view. Reviews are not commands; they are arguments with their evidence attached.

### Step 11: Output in review-template format

Render the review in the canonical eight-section format from `output-format.md` for a full review, or the appropriate light-mode subset. Section one is Context — what was reviewed, by whom, against what brief, in what mode, against which register (brand or product). Section two is What Works — three to five concrete positives in plain prose; "the empty-state copy explains the value before asking for action" beats "looks good." Section three is Issues, each as a structured block: severity tier and one-line title in the heading; one or two sentences of WHAT; one sentence of WHY with citation; one sentence of WHERE naming surface, component, line of code; one sentence of HOW to fix it. Section four is Open Questions — decisions to be made, using the confidence framework when surfacing two to four options with rough percentages. Section five is the Universal Design 7 audit. Section six is the anti-defaultism scan summary. Section seven is Next Steps in P0 through P3 order. Section eight is References.

Severity tiers cross-walk with priority: Blocker is P0 (cannot ship), Major is P1 (significant friction, fix this sprint), Minor is P2 (cosmetic, can wait), Note is P3 (backlog or future-relevant). Label every issue with both so designers reading "Blocker" and PMs reading "P0" both know what to do. The dual labeling is translation, not redundancy. A review that files a Blocker as P2 ships broken work because the recipient triages by the wrong axis.

## What this command produces

A structured review document, ready to share with the designer who built it, the PM who scoped it, the engineer who will fix it, and the next reviewer six months from now who needs to understand what was decided and why. The document survives the conversation. It is the artifact, not the dialog.

## Closing

The review is the artifact. Six months later, someone reads what you wrote and either trusts it or dismisses it. Trust comes from structure, citations, severity tiers, named tradeoffs, the open questions you were honest enough to flag, and the score you were brave enough to write down even when it was a 9 out of 20. Reviews that ground claims in heuristics and principles, admit uncertainty, reinforce what works, and triage with both Blocker–Note and P0–P3 — those reviews compound. The recipient learns to read them carefully because the format has earned it. Write reviews that age well.
