---
description: Generate PRODUCT.md and DESIGN.md for a project, following the Google DESIGN.md / impeccable convention. Runs Discovery interview, Visual probe, Persona selection, then writes the two files. Does not silently overwrite existing files; loader check is mandatory.
---

# /design-expert:plan

This command produces the project state files that every subsequent `/design-expert:build` and `/design-expert:review` invocation depends on. It writes `PRODUCT.md` and `DESIGN.md` at the user's project root, and optionally a `DESIGN.json` sidecar. The command does not implement, render, or generate components. It plans. The hard stop after the brief is non-negotiable, and the loader check at the front is non-negotiable, because the most destructive thing a planner can do is silently overwrite institutional knowledge that took weeks to gather.

## When to use this command

Run `/design-expert:plan` when starting a brand-new project, when encountering an existing project that has neither `PRODUCT.md` nor `DESIGN.md` at the root, or when refreshing a brief that has visibly drifted from the actual product. Do not run it for everyday building — that is what `/design-expert:build` is for. Plan is the upstream act. It is the work that makes everything downstream defensible. If you find yourself reaching for plan to fix a single component, stop and reach for build instead. Plan owns the system; build owns the surface.

## The plan workflow — gate-driven

The workflow is ten gates in fixed order (numbered 0 through 9). Each gate is a checkpoint that either advances or sends you back. The first four are the most consequential: Gate 0 is the register hard-ask (everything downstream depends on the register being right); Gate 1 is the loader check (never silently overwrite project state); Gate 4 is the layout exploration (the catalog walk that picks the named layout pattern before personas or `PRODUCT.md`); Gate 9 is the hard stop after the brief (never bleed planning into implementation in the same response). The middle gates produce the substance: a scene sentence, two to four direction probes, three to five layout candidates, two to three personas, the brand pillars, the tokens. Skip a gate and the brief is decoration. Walk every gate and the brief is a contract.

### Gate 0: Register (HARD ASK)

Before any other discovery, confirm the register. Use `AskUserQuestion` with three options and inline definitions so the user can answer cold:

- **Brand** — distinctive, memorable, in-and-out under a minute. Campaigns, marketing sites, launch heroes, pitch decks. Type can be loud, color can be expressive, the grid can be asymmetric, consistency can flex for memorability.
- **Product** — earned familiarity, in for hours. Dashboards, admin panels, settings, in-app flows, authenticated tools. Type stays at fixed scales, density compresses for scanning, the grid is rigid, consistency is non-negotiable.
- **Editorial** — twenty minutes of attention. Case studies, long-form essays, magazine pieces, museum sites, design-agency project pages, blog posts that aspire. Type does the work of containment that cards do in product, density inverts (whitespace becomes the design), color recedes (monochrome chrome with color confined to artwork), and the rail-and-body grid replaces the symmetric 12-col.

If the user picks "unsure" or the answer is genuinely ambiguous, load the openings of `styles/editorial.md` and `SKILL.md § Brand vs. product vs. editorial` and re-ask. Do not proceed past Gate 0 without an explicit register pick. The register lands in `PRODUCT.md` as the `register:` field at Gate 5; downstream gates and downstream sub-skills (`/design-expert:build`, `/design-expert:review`) read that field as the canonical source.

The reason Gate 0 is non-negotiable: the most consequential failure of `/design-expert:plan` is producing a `PRODUCT.md` that picks the wrong register and locks every downstream decision into the wrong frame. A brand-register PRODUCT.md applied to a case study produces marketing-page cargo cult. A product-register PRODUCT.md applied to a campaign produces a dashboard pretending to sell something. The hard ask up front prevents both.

### Gate 1: Loader check (NEVER silently overwrite)

Before doing anything else, look at the project root for `PRODUCT.md` and `DESIGN.md`. If either file already exists, STOP. Read what is there. The user's previous decisions about register, users, brand pillars, tokens, do's and don'ts are now sitting in front of you, and they may not be reproducible if you overwrite them. Confirm with the user, in chat, before changing a single byte. Silent overwrite of project state is the most destructive thing a planner can do — it loses real institutional knowledge, and the user often does not notice until weeks later when the design system mysteriously stops matching what was agreed to.

If the files exist, ask the user whether to refresh from scratch, augment what is there, or leave the files alone. If they choose refresh, proceed through the gates but show a diff before writing — the user reviews what is being lost. If they choose augment, treat existing content as the floor and only fill in gaps. If the files do not exist, proceed to Gate 2. Never assume the answer.

### Gate 2: Discovery interview

Discovery is two rounds, minimum. Each round is two or three questions, conversational tone, focused on the specific gap in your understanding. Do not dump ten questions at once — that is a form, not a conversation, and the answers come back shallow. Round one surfaces the surface-level: what is this project, who is it for, what does it solve, what is the rough scope. The questions are open and physical. "Tell me about the user encountering this product for the first time. What were they doing five minutes before they opened it? What did they want to be different by the time they closed it?"

Round two deepens into what impeccable calls the scene sentence — a single physical-context line that captures the use case in concrete detail. *"A first-year teacher at 7am, coffee on the desk, ten minutes before her first class, trying to find the lesson she ran last year on photosynthesis."* That sentence determines theme, density, color, type, motion, every downstream choice. Without it, every decision later is a guess dressed up as taste. If the user cannot produce the scene sentence in round two, run a third round. Do not proceed past discovery without it. The scene sentence is the foundation; everything else is rendered from it.

### Gate 3: Visual direction probe

Before writing the brief, show two to four directionally-distinct visual probes. Probes are not designs — they are mood references. Each probe goes in a different direction: warm-editorial, cool-technical, minimalist-monochrome, expressive-color. The point is contrast, not refinement. The user picks the lane that matches the scene sentence, and that pick is now a constraint that shapes every token, every component, every component-level rule downstream.

Use native image generation if the harness supports it. If it does not, describe the four directions in prose with named real-world references — actual products, brands, printed objects, never adjectives like "modern" or "clean." If two probes feel close, kill one and replace it with something further away; the value is in distance, not in detail. The user pick is the visual north star for everything that follows.

### Gate 4: Layout exploration

Right after the visual direction is picked and well before personas or `PRODUCT.md`, walk the layout pattern catalog in `layouts.md`. Filter to the register confirmed at Gate 0 (brand → landing-page table; product → dashboard or interface table; editorial → editorial table). Read all eight patterns in the relevant table. Pick three to five candidates that genuinely fit the brief — not the first three you read, but the ones whose when-to-use clauses match the project's verb (the verb you surfaced in the discovery scene sentence at Gate 2).

Present the candidates to the user with:

- **Pattern name** (cited from `layouts.md`)
- **One-line "when to use"** filtered to this brief's verb (not the generic clause)
- **One-line trade-off** (what this pattern costs, what it gains)
- **Exemplar matching the visual direction** picked at Gate 3 (preferred) or the canonical exemplar from the table

Three candidates is the floor; five is the bar. Below three you have not enumerated; you have defaulted. State a single-pattern inference only if confidence is genuinely above 80% (rare on a first plan). Otherwise call `AskUserQuestion` and wait for the pick. The chosen pattern lands in `PRODUCT.md` at Gate 6 as the `layout:` field; it is read by `/design-expert:build` Gate 3 as a constraint on every later decision.

**Redesigns count as early.** When the brief is "redesign this surface" rather than a fresh project, do not preserve the existing layout by default. Walk the catalog cold, as if the project were brand new. The most common redesign failure mode is treating the original layout as the constraint when the original layout is precisely what the redesign needs to escape. Open the layout exploration with that explicit framing — *"the existing surface uses pattern X; the redesign opens that on the table. Here are three to five alternatives to consider, including X as a candidate if you want to keep it consciously."* Let the user veto the layout-on-the-table framing if they have a reason; otherwise proceed with the catalog walk.

The layout choice is the third high-leverage decision after register and visual direction. It cascades into every grid, type, density, color, and motion choice that downstream gates make, and into every screen `/design-expert:build` produces against this plan. Get it right at the brief level; everything later is filling in the chosen frame.

### Gate 5: Persona selection

Pick personas from the five archetypes (with room to flex up when constraints justify it). Power User knows the product cold, uses every shortcut, lives in it daily. First-Timer has never opened the product before and assumes nothing. Accessibility-Dependent uses a screen reader, keyboard only, or low-vision settings, and exposes every encoding-by-color failure in the system. Stress Tester arrives on a slow connection with edge-case data — a thousand rows, emoji names, RTL text, paste-from-Excel — and finds the gaps the happy path hides. Mobile is touch-only, small screen, often interrupted, often one-handed. Beyond the five archetypes, project-specific personas can be defined when the project's audience genuinely warrants them — a Junior Designer reading a portfolio case study as a learning reference, a Power User's manager spot-checking the team's work, a customer-success agent who escalates from the same surface, an investor reading a launch page once.

**Two to three is the sweet spot, not a hard cap.** One persona is too narrow — the design optimizes for a single behavior and crumbles for everyone else. Two or three is where most projects land: enough constraint to shape the surface, few enough that synthesis stays coherent. Four is acceptable when the personas' constraints are *additive* rather than *contradictory* — when each persona adds a distinct requirement to the design without pulling against the others. Five is the practical ceiling; beyond that the design has too many masters and synthesis collapses into "competent for everyone, signature for no one."

**The soft cap reflects increasing cost, not a binary rule.** Each persona added beyond three makes the build harder: more constraints to satisfy in parallel, more review-time lenses, more edge cases to walk. The cost compounds. The model and the user should both feel the friction at four and five — that friction is the signal that the persona set is becoming unwieldy, not a hard refusal to proceed. When the friction is real (synthesizing the brief takes noticeably longer, design decisions start contradicting each other, the brand pillars feel pulled in different directions), drop or merge until the set is coherent again. Don't aim for four or five; arrive at it only when the audience genuinely warrants it.

**Separate personas over fused personas.** When two audience types overlap (a Power User who sometimes evaluates and sometimes learns; a hiring manager who is also a designer themselves), the temptation is to merge them into one. Resist when the constraints they drive are genuinely distinct. Separation makes the design rationale traceable — "this decision serves the Power User's evidence-density, this decision serves the Junior Designer's reasoning-visibility, this decision serves both." Fusion loses that traceability and produces decisions whose justification reads as "for the engaged reader" without saying *which* engaged reader and *why*. Justification opacity is how design decisions become unfalsifiable.

The selected personas drive every gate's success criteria. Every screen built later must work for all of them. If the work cannot serve all the chosen personas at once, either the personas were wrong (go back to Gate 5 and re-pick) or the personas are pulling against each other (drop or merge until the set is coherent again). Personas are not aspirations; they are constraints, and constraints should match reality.

### Gate 6: Write `PRODUCT.md`

`PRODUCT.md` is the strategic file. Four sections. Users — the personas selected in Gate 5, named with their scene sentences, in the user's own domain vocabulary. Brand personality — three pillars, adjectives, that drive every voice and visual decision downstream. *Expert, decisive, editorial.* Three is the cap. Four pillars become incoherent because each pillar pulls the design in a slightly different direction and the result is mush. Restrictions — what this product is NOT, the explicit bans. *No casual humor. No exclamation marks. No emojis as UI. No motion that does not communicate state.* The bans are at least as load-bearing as the pillars; without them, the design drifts toward whatever default the model retrieved last.

Register — brand, product, or editorial — confirmed at Gate 0. This single field drives type, density, motion, color saturation, and every downstream rule. Brand surfaces can violate consistency for memorability; product surfaces cannot; editorial surfaces invert density and confine color to artwork. Brand can use clamp-scaled type and asymmetric layouts; product holds the grid for trust; editorial uses the rail-and-body grid and three type roles. The register lands here as the `register: brand|product|editorial` field, copied from the user's Gate 0 confirmation. Downstream sub-skills (`/design-expert:build`, `/design-expert:review`) read it directly.

Layout — the named pattern picked at Gate 4 — also lands in `PRODUCT.md` as the `layout:` field, citing the catalog entry from `layouts.md` (e.g. `layout: rail-and-body`, `layout: asymmetric-hero`, `layout: bento-grid`). `/design-expert:build` Gate 3 reads it as the layout constraint and skips the layout-exploration prompt unless the user explicitly opens the layout on the table again. Write `PRODUCT.md` to the project root only after the user has confirmed all five sections in chat (users, brand personality, restrictions, register, layout). Do not infer and ship.

**Per-surface naming convention.** When a project ships multiple distinct surfaces (a portfolio with multiple case studies, a SaaS with marketing + dashboard + settings panes, a landing-plus-app combination), each surface can carry its own brief at `<surface-name>.PRODUCT.md` and `<surface-name>.DESIGN.md` rather than a single project-wide pair. Examples: `projects/spaces2.PRODUCT.md` + `projects/spaces2.DESIGN.md` for a single case-study redesign; `dashboard.PRODUCT.md` + `dashboard.DESIGN.md` for the product-register surface inside an app that also has `landing.PRODUCT.md` for the brand-register marketing page. The naming convention is `<scope>.PRODUCT.md` and `<scope>.DESIGN.md`, sitting in the directory closest to the surface they describe. A project-wide pair at the repo root is still the default for single-surface projects; the per-surface pair is the right move when the surfaces have meaningfully different registers, layouts, or audiences. Document the chosen scoping in the project's `system.md` so future builds inherit the same convention.

### Gate 7: Write `DESIGN.md`

`DESIGN.md` is the visual file. It opens with YAML frontmatter carrying the machine-readable tokens — colors as hex or OKLCH (pick one source of truth, do not split), typography keyed by role with family/size/weight/line-height/letter-spacing, spacing on a 4pt base scale of 4/8/12/16/24/32/48/64/96, radius tokens at sm/md/lg, elevation tokens with the percentage adjustments from craft.md (canvas, surface-100 at +7%, surface-200 at +9%, surface-300 at +12%), and motion tokens at 100/300/500ms with named easing curves. Token names should sound like this product's world — `--ink`, `--parchment`, `--rule` — not generic placeholders that could belong to any project.

Below the frontmatter, six prose sections in fixed order, paragraph-first not bullet-first. Overview frames the system in two or three paragraphs anchored on the brand register and the personas. Colors describes the palette and its semantics, justifying why these colors and not others. Typography describes the type system and hierarchy levels with the brand-vs-product justification spelled out. Elevation describes the depth strategy — borders-only, subtle shadows, layered, color shifts — with the surface percentages from craft.md. Components describes anatomy and rules for each canonical primitive. Do's and Don'ts gives explicit rules and explicit refusals, with each refusal linked to the anti-slop categories where relevant. Optionally write `DESIGN.json` as a sidecar — generated from the YAML frontmatter, machine-readable for token-export tools and live-render panels. Write `DESIGN.md` to the project root only after the user has confirmed the frontmatter and the prose.

### Gate 8: Sequenced build plan

Once `PRODUCT.md` and `DESIGN.md` are written, produce a sequenced build plan — what gets built first, what comes next, where the gates apply. The plan answers the question "where do we start," and it answers it concretely, not aspirationally. A typical sequence: build the core component library before any specific screen; gate the dashboard build behind component-library completion; gate any custom signature component behind two of the core primitives shipping cleanly. The point is order. Without it, the user starts with the most exciting screen, hardcodes a dozen tokens that should have been primitives, and the design system is born corrupt.

### Gate 9: HARD stop after brief confirmation

Once the brief is confirmed, STOP. Do not implement in the same response. The shape is the deliverable. Implementation is `/design-expert:build`, run later, in a separate turn, against the freshly-written `PRODUCT.md` and `DESIGN.md`. This is not a polite suggestion. A planner who keeps planning into implementation produces brittle decisions, because the same response that decided the brand pillars also decided the button radius, and now neither got the attention it deserved.

Why hard-stop. Each phase deserves its own attention. The user reviews the plan, lives with it for a moment, possibly comes back with a revision. Then `/design-expert:build` runs against the plan as if for the first time. This is also how senior designers actually work — sketch, brief, gate, build. Conflating phases is the AI-default failure mode. The brief is precious because the brief is rare; do not bury it under a hundred lines of generated CSS in the same turn.

## Hard rules across the workflow

Register hard-ask at Gate 0 — never proceed past discovery without an explicit brand / product / editorial pick from the user. Layout exploration at Gate 4 — never proceed past visual direction with fewer than three layout candidates surfaced from `layouts.md`; redesigns count as early-in-project, with the existing layout opened to the table by default. Never silently overwrite `PRODUCT.md` or `DESIGN.md` — the loader check is mandatory and the user's confirmation is in chat, never inferred. Two-round minimum on discovery, with a scene sentence as the explicit deliverable of round two. Two to four visual probes before the brief, never zero, never one, never seven. Three to five layout candidates from the catalog at Gate 4. Two to three personas as the default, four to five when constraints are additive — the soft cap reflects increasing synthesis cost, not a hard refusal. Separate personas over fused ones for decision traceability. Brand pillars capped at three. Hard stop after brief confirmation, no implementation in the same response.

## What this command produces

The output is two files in the user's project root — `PRODUCT.md` and `DESIGN.md` — plus an optional `DESIGN.json` sidecar. These are not artifacts of this skill; they live in the user's repo, owned by the user, version-controlled with the project. They become the canonical inputs to every subsequent `/design-expert:build` and `/design-expert:review`. Every decision downstream cites them. They are the constitution of the design system, amended carefully and rarely, never overwritten.

## Closing

Planning is the most-skipped phase of design work, because it does not ship pixels. It is also the phase where the design either succeeds or fails, before a single component is rendered. Spend the time here. The build is the easy part if the brief is right, and the build is impossible if the brief is wrong. A scene sentence, three brand pillars, two or three personas, a chosen visual lane, a token system named for this product's world — these are the inputs that make every later decision defensible. Without them, the design is taste. With them, the design is a contract. Write the contract first. Build against it second. Never the reverse.
