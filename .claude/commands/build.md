---
description: Build a new interface or component from intent. Loads the design-expert craft, anti-slop, components, typography, interaction, and foundations files; runs Shape, Register, Domain, and Test gates before showing output.
---

# /design-expert:build

This command is the entry point for building a new interface or component from intent — a fresh dashboard, a new flow, a component that did not exist yesterday. It is not for editing existing UI. Editing has its own discipline and lives in `/design-expert:review`. Build is for the moment when there is nothing on the screen yet, when the first decision is the heaviest one, when every default in the model is leaning forward to fill the void with the most common dashboard the training set has ever seen. The job of this command is to keep that from happening.

## When to use this command

Reach for build when the work is net-new. A new screen, a new flow, a new component, or a redesign that throws the existing artifact away rather than tuning it. Build is generative. If the surface already exists and the user is asking for fixes, sharpening, or critique, that is review — `/design-expert:review` is the right command and it skips most of the early gates because the structure is already on the page. If the project has no `PRODUCT.md` yet — no agreed-on user, no agreed-on register, no agreed-on signature — that is a planning problem, not a building one, and `/design-expert:plan` runs first. Build assumes the project is set up and the brief is fresh.

## The build workflow — gate-driven

The workflow runs as ten gates in order. Each gate is a stop point. You cannot proceed past a gate without passing it, and you do not get to argue with the gate — the gate is the discipline. Skip Intent-First and you ship a generic dashboard. Skip Register and you ship marketing-hero typography on a settings screen. Skip the swap, squint, signature, or token tests and you ship slop dressed as competence. The gates feel slow on the first run and stop feeling slow once the user sees what the build looks like with all of them passed.

### Gate 1: Shape

Confirm a `PRODUCT.md` exists for this project and that a user-approved task brief exists for this build. If either is missing, stop and route to `/design-expert:plan` first. Building without a brief is building from defaults — the brief is the constraint that lets craft happen, and skipping it means the model fills the gap with the average of every dashboard it has ever seen. Read `PRODUCT.md` if it is present so the project's user, register, and signature decisions are loaded into context. If the user already supplied a confirmed brief in the conversation, that is sufficient; restate it back in one sentence so you and the user agree on the same artifact before any pixel decision happens.

### Gate 2: Register

Decide whether this surface is brand or product, then load the relevant section of `craft.md`. The same craft rules apply differently across registers and getting this wrong poisons every later decision. Brand surfaces are distinctive and memorable — fluid type, expressive color, ambitious motion, signature hero moments, asymmetric composition, single-purpose folds. Product surfaces are familiar and forgettable — fixed rem type scale, restrained color, motion that carries state and nothing more, repeatable patterns, predictable grids that the user learns and trusts over an eight-hour session.

If the surface is a marketing landing page, a campaign, an about page, a portfolio, a long-form story, the register is brand. If the surface is an admin panel, a dashboard, a settings screen, a data table, a tool, anything authenticated where the user is in a task, the register is product. If you cannot decide, ask the user before going further. A wrong register is wrong everything downstream and there is no salvaging it with polish.

### Gate 3: Load references

Load the relevant files in this order so the constraints are warm before the first decision:

- `SKILL.md` — the manifesto and the index over the rest
- `foundations.md` — NNg heuristics, the Universal Design 7 principles, the 10-Lens audit
- `craft.md` — composition, layering, density, the four tests
- `anti-slop.md` — the named defaults you will not ship
- `typography.md` — the type system and the brand-vs-product type rules
- `components.md` — the atomic patterns: cells, icons, charts
- `interaction.md` — states, motion, responsive behavior, onboarding
- The relevant `library/<category>/README.md` for the surface being built — dashboards, navbars, tables, forms, empty states, cards
- A relevant `references/<exemplar>.md` if a specific exemplar applies — Pentagram for brand, Linear for product, Carbon for enterprise dense data
- Optionally `design-gods/<designer>.md` if a specific principle source informs the work — Vignelli for type, Tufte for charts, Rams for restraint

You are not memorizing all of these. You are pulling the constraints into working memory so they apply by reflex when the build starts. The four tests cannot catch defaults you never knew were defaults.

### Gate 4: Intent-First (WHO / WHAT / HOW)

You must answer all three questions before any visual decision. Not approximately — specifically. **WHO is this human?** Not "users." The actual person. A teacher at 7am with cold coffee is not a developer debugging at midnight is not a founder between investor meetings. Their world shapes the interface. **WHAT must they accomplish?** The verb. Grade these submissions. Find the broken deployment. Approve the payment. The verb determines what leads, what follows, what hides. **HOW should this feel?** Concrete adjectives only. Warm like a notebook. Cold like a terminal. Dense like a trading floor. Calm like a reading app. Quiet like a museum caption. Not "clean and modern" — that is the universal AI default and it means nothing.

If you cannot answer with specifics, stop and ask the user. Do not guess. Saying "warm" and then shipping cool blue tokens is intent-as-decoration, not intent-as-constraint. Check your answers against your downstream decisions at every later gate. The intent is a constraint on every token, every spacing value, every weight. If a single later choice contradicts the stated intent, the intent has not actually been applied — it has been quoted.

### Gate 5: Domain exploration

Three required outputs before any direction is proposed. **Signature elements** — at least one element that could only exist for this product, this user, this verb. Not the overall vibe — an actual component or motif you can name. The shape of the assignment-status pill on the grading screen. The temperature of the empty inbox illustration. The chip pattern for assignee filters. **Color world** — five or more colors that exist naturally in this product's domain. Not "warm" or "cool" but the actual material colors of the world this product serves. A bakery tool's palette has flour and crust in it. A hospital tool's does not. **Defaults to reject** — three obvious choices for this surface type that you will not make, named explicitly, with what replaces each.

You cannot avoid patterns you have not named. Without an explicit list of rejected defaults, the design will drift to the obvious answer the moment your attention is elsewhere. Writing the rejections down is what turns avoidance from a wish into a rule.

### Gate 6: Mock-fidelity inventory

Before code, list every section, motif, hero, nav item, CTA, and image need on the screen, with the implementation method per item. Semantic HTML/CSS/SVG, generated asset, sourced project asset, icon from Lucide, an explicitly accepted omission. This forces you to plan the build instead of improvising it section by section, which is the fastest path to a screen that loses its hero by the time you reach the footer. The inventory is short. It does not need to be elegant. It needs to exist.

### Gate 7: Propose

If multiple valid directions exist for this brief, surface them with confidence percentages following the format in `output-format.md`. Two to four options, each with a one-line description, a stated trade-off, and a confidence number. Force the user to pick. Do not pick silently and call it preference — silent picks are how the model's bias becomes the project's direction without anyone noticing. If only one direction is genuinely defensible from the brief, say so and explain why; do not invent fake alternates to satisfy the format.

### Gate 8: Build

Build the interface. As you build, hold the four craft tests open as a live checklist instead of a final review:

- **Swap test:** would swapping the typeface for your usual default change the product's identity? If no, the type was a default.
- **Squint test:** when the screen is blurred, can you still see the hierarchy? If no, hierarchy is incidental.
- **Signature test:** can you point to five elements that only exist on this product? If no, the design is interchangeable.
- **Token test:** do the variable names sound like this product's world, or like any product? Generic names are the receipt that intent never made it to the implementation layer.

Plus the impeccable test: would a viewer say "AI made that"? If yes — even a maybe — the work is not done. If any test fails, iterate before showing the user. The user is not the proofreader.

### Gate 9: Browser iteration

Open the result. Inspect screenshots, not just DOM. Walk it through mobile narrow, tablet or small laptop, and desktop wide at minimum. Look for overlap, clipping, weak hierarchy, off-grid alignment, awkward whitespace, cramped controls, unreadable type, hover-only functionality, layout shift, text overflow. Patch defects. Re-inspect. Repeat until no material defect appears at any breakpoint. Most AI-generated UI ships looking acceptable on the desktop the agent rendered against and breaks at every other size, because the inspection step was skipped or done once instead of looped. The exit bar is not "it works" — it is "the rendered result looks intentional at every checked viewport, every state is handled, no placeholder remains."

### Gate 10: Present and offer to save

Present the work with a short rationale grounded in the gates that were passed — the brief, the register, the named defaults rejected, the signature elements that landed, the tests the build now passes. Walk the user through the key states. Note honestly any limitation or follow-up risk. Then offer to save the patterns the build introduced to the project's `system.md`. Saved patterns compound — each pattern saved makes the next build faster, more consistent, and more recognizably this product's work.

## Hard rules — non-negotiable across the workflow

- No emojis as UI under any circumstance.
- Lucide icons only; no mixed icon families.
- IBM Carbon defaults for any enterprise or dense-data product UI.
- No pie charts, no donut charts.
- Red Hat Display, Red Hat Text, and Red Hat Mono on Lastro and Lais brand surfaces unless the project explicitly overrides.
- `prefers-reduced-motion` is mandatory.
- 44 by 44 pixel minimum touch targets on any interactive element.
- Native `<dialog>` plus `inert` for modals — never a div masquerading as a dialog.

## What this command produces

The output is a built interface or component, plus a short rationale tied to the gates passed and the tests cleared, plus optional `system.md` updates that capture the patterns the build introduced so the next build inherits them. The build is presentable to a senior designer without apology. If it is not, a gate was skipped — go back and find which one.

## Closing

The gates are not bureaucracy. They are the discipline that separates signature from template, this product from any product, craft from retrieval. Skip them and you ship the same design every other AI would ship from the same prompt — competent, average, indistinguishable, forgotten. Run them and you ship work that could only have come from this brief, for this user, doing this verb, in this world. That is the bar. That is the only output worth shipping.
