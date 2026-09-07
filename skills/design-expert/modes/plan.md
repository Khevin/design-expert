# Plan mode

Loaded by `SKILL.md` triage when the mode is plan: a new project, a system-size request, a stale brief, or an explicit `/design-expert plan …`. Triage has already read memory, discovered the design system, and confirmed the register where it could; this mode does not repeat those steps, it builds on them.

This mode produces the project state files that every later build and review depends on. It writes `PRODUCT.md`, `DESIGN.md`, and `DECISIONS.md` at the project root (or beside the surface, per the scoping convention in Gate 6), and optionally a `DESIGN.json` sidecar. The mode does not implement, render, or generate components. It plans. The hard stop after the brief is non-negotiable, and the loader check at the front is non-negotiable, because the most destructive thing a planner can do is silently overwrite institutional knowledge that took weeks to gather.

## When triage picks this mode

Plan runs when starting a brand-new project, when an existing project has neither `PRODUCT.md` nor `DESIGN.md` at its scope, when a brief has visibly drifted from the product, or when a build request arrives at system size (the design system, the brand, several surfaces at once). It does not run for everyday building; build mode owns the surface, plan owns the system. A request to fix a single component that somehow reached this mode is routed back to build.

## The plan workflow, gate-driven

Eleven gates in fixed order, numbered 0 through 9 with the council at 3½. Each gate is a checkpoint that either advances or sends you back. The most consequential: Gate 0 confirms the register for a new project; Gate 1 never silently overwrites project state and now watches the word budget; Gate 3½ convenes the full council, every plan, no exception; Gate 4 walks the layout catalog before personas or `PRODUCT.md`; Gate 9 stops hard after the brief. The middle gates produce the substance: a scene sentence, two to four direction probes, three to five layout candidates, two to three personas, the brand pillars, the tokens. Skip a gate and the brief is decoration. Walk every gate and the brief is a contract.

### Gate 0: Register

Triage confirms the register from an existing `PRODUCT.md` or from strong cues. When it did, state the register here and move on; a persisted answer is never re-asked. When it did not (a fresh project has no brief and often no cues), ask cold with `AskUserQuestion`, three options with inline definitions so the user can answer without reading anything else:

- **Brand**: distinctive, memorable, in and out under a minute. Campaigns, marketing sites, launch heroes, pitch decks. Type can be loud, color expressive, the grid asymmetric; consistency can flex for memorability.
- **Product**: earned familiarity, in for hours. Dashboards, admin panels, settings, in-app flows, authenticated tools. Type at fixed scales, density for scanning, a rigid grid, consistency non-negotiable.
- **Editorial**: twenty minutes of attention. Case studies, long-form essays, magazine pieces, museum sites, design-agency project pages. Type does the containment work that cards do in product, density inverts, color recedes, the rail-and-body grid replaces the symmetric twelve columns.

If the answer is "unsure", load the openings of `styles/editorial.md` and `SKILL.md` § Brand vs. product vs. editorial register and re-ask. Do not proceed past Gate 0 without a register. It lands in `PRODUCT.md` as the `register:` field at Gate 6, and every later mode reads that field as canonical. The reason this gate is hard: a brand-register brief applied to a case study produces marketing-page cargo cult; a product-register brief applied to a campaign produces a dashboard pretending to sell something.

### Gate 1: Loader check and budget check

Before anything else, look at the scope for `PRODUCT.md`, `DESIGN.md`, and `DECISIONS.md`. If either brief exists, stop and read it. The user's previous decisions about register, users, pillars, tokens, and bans are now in front of you and may not be reproducible. Confirm in chat before changing a byte.

Then count. `PRODUCT.md` holds at most 1,500 words and `DESIGN.md` at most 2,500 words excluding its YAML token frontmatter. A brief over budget, or a brief with dated section headings, has become a journal: it records what changed instead of describing what is. Offer four paths with `AskUserQuestion`: **refresh** (walk the gates again; show a diff before writing so the user sees what is lost), **augment** (existing content is the floor; fill gaps only; every change becomes a `DECISIONS.md` entry, and the brief never gains a section), **leave** (the files stay as they are), and, only when a budget is exceeded, **distill** (move every dated section into `DECISIONS.md` as entries, newest last, and leave the brief describing today). If no brief exists, proceed to Gate 2. Never assume the answer.

`DECISIONS.md` is created at Gate 6 if it does not exist. Its entry format lives in `memory.md`'s sibling, `SKILL.md` § Hard rules, and in the example at Gate 6 below.

### Gate 2: Discovery interview

Discovery is two rounds, minimum. Each round is two or three questions, conversational, aimed at the specific gap in your understanding. Do not dump ten questions at once; that is a form, and the answers come back shallow. Round one surfaces the shape: what is this, who is it for, what does it solve, what is the rough scope. The questions are open and physical. "Tell me about the user encountering this product for the first time. What were they doing five minutes before they opened it? What did they want to be different by the time they closed it?"

Round two deepens into the scene sentence, a single physical-context line that captures the use case in concrete detail. *"A first-year teacher at 7am, coffee on the desk, ten minutes before her first class, trying to find the lesson she ran last year on photosynthesis."* That sentence determines theme, density, color, type, motion, every downstream choice. If the user cannot produce it in round two, run a third round. Do not proceed without it.

When triage found a design system, round one names it ("I'm reading `lais-notifications/system.md` as the system of record; tell me if that's wrong") so the interview does not re-derive tokens the project already has. When triage found none, round two adds one question about the first tokens the project will need, because Gate 7 will propose them.

### Gate 3: Visual direction probe

Before writing the brief, show two to four directionally distinct visual probes. Probes are not designs; they are mood references. Each goes in a different direction: warm-editorial, cool-technical, minimalist-monochrome, expressive-color. The point is contrast. The user picks the lane that matches the scene sentence, and that pick shapes every token downstream.

Render the probes on the concept surface triage chose in `targets.md`. For a designer with the Figma MCP, that is two to four frames on one page of the project's Figma file, made through `use_figma` after `figma:figma-use`, bound to the library's variables where a library exists. For everyone else, it is the Claude Design canvas, invoked through the `design` skill with the brief, the register, and the named directions, one artboard per direction. Only when neither surface is available describe the directions in prose with named real-world references, actual products and printed objects, never adjectives like "modern" or "clean". If two probes feel close, kill one and replace it with something further away; the value is in distance.

### Gate 3½: Council

Every plan convenes the full council, no sizing exception. Planning is the highest-leverage moment in the workflow: a voice skipped here is a constraint the brief never encodes and the build never inherits. The procedure is in `council.md`; this gate applies it.

First draft the layout candidates Gate 4 will present (walk `layouts.md` for the register and pick three to five), so the room can rule on them. Then assemble the brief: mode plan, register, the surface, two to four surface tags, the scene sentence, the artifact (the picked probe as a screenshot or a summary), and five decisions: D1 the visual direction picked at Gate 3; D2 the drafted layout candidates; D3 the type posture; D4 the density and elevation posture; D5 the proposed restrictions. Convene all eighteen seats in one message, run the chair, print the table, and ask the user only about Contested decisions, in one `AskUserQuestion` call. Write the log in one call.

Rulings feed the next gates directly: D2's ruling or the user's answer shapes Gate 4; D3 and D4 shape `DESIGN.md` at Gate 7; D5 becomes the restrictions section at Gate 6; dissents are recorded in `DECISIONS.md` at Gate 6 so a later reader knows the room was not unanimous.

### Gate 4: Layout exploration

Right after the council and before personas or `PRODUCT.md`, present the layout candidates from `layouts.md`, filtered to the register (brand → landing-page table; product → dashboard or interface table; editorial → editorial table). Three candidates is the floor; five is the bar. For each: the pattern name as cited in the catalog, a one-line when-to-use filtered to this project's verb, a one-line trade-off, and an exemplar matching the visual direction picked at Gate 3. Fold the council's D2 ruling in: a candidate the room revised is presented with its revision; a candidate the room vetoed is named as vetoed with the seat that vetoed it. State a single-pattern inference only if confidence is genuinely above eighty percent, rare on a first plan. Otherwise `AskUserQuestion` and wait for the pick. The chosen pattern lands in `PRODUCT.md` as the `layout:` field and constrains build mode's Gate 3.

Redesigns count as early. When the brief is "redesign this surface", do not preserve the existing layout by default. Walk the catalog cold, open the existing layout on the table as one candidate the user can keep consciously, and let the user veto that framing if they have a reason.

### Gate 5: Persona selection

Pick personas from the five archetypes, with room to flex up when constraints justify it. Power User knows the product cold and lives in it daily. First-Timer has never opened it and assumes nothing. Accessibility-Dependent uses a screen reader, keyboard only, or low-vision settings, and exposes every encoding-by-color failure. Stress Tester arrives on a slow connection with edge-case data: a thousand rows, emoji names, RTL text, paste-from-Excel. Mobile is touch-only, small screen, often interrupted, often one-handed. Project-specific personas are added when the audience warrants them: a junior designer reading a case study as a learning reference, a customer-success agent who escalates from the same surface, an investor reading a launch page once.

Two to three is the sweet spot, not a hard cap. One persona is too narrow. Four is acceptable when the personas' constraints are additive rather than contradictory. Five is the practical ceiling; beyond it the design has too many masters and synthesis collapses into competent for everyone, signature for no one. The soft cap reflects rising synthesis cost, and the friction at four and five is the signal. Prefer separate personas over fused ones when the constraints they drive are distinct: "this decision serves the Power User's evidence density, this one serves the junior designer's reasoning visibility" is traceable; "for the engaged reader" is not. Personas are constraints, not aspirations. Every screen built later must work for all of them; if it cannot, either the personas were wrong or they are pulling against each other, and the set is revised until it is coherent.

### Gate 6: Write `PRODUCT.md`

`PRODUCT.md` is the strategic file, and it describes the product as it is today, in at most 1,500 words. Five sections plus a frontmatter block. **Users**: the personas from Gate 5, named with their scene sentences, in the domain's own vocabulary. **Brand personality**: three pillars, adjectives, that drive every voice and visual decision. Three is the cap; a fourth pulls the design in a slightly different direction and the result is mush. **Restrictions**: what this product is not, the explicit bans, inheriting the council's D5 ruling. *No casual humor. No exclamation marks. No emojis as UI. No motion that does not communicate state.* Bans are as load-bearing as pillars. **Register**: the field `register: brand|product|editorial` from Gate 0. **Layout**: the field `layout: <catalog name>` from Gate 4.

Write it only after the user has confirmed all five sections in chat. Do not infer and ship. Dated section headings are forbidden in the brief; anything dated belongs in `DECISIONS.md`.

Per-surface scoping applies when a project ships several distinct surfaces: each carries its own `<scope>.PRODUCT.md`, `<scope>.DESIGN.md`, and `<scope>.DECISIONS.md` in the directory closest to the surface, for example `lais-inicio/leads-semanais.PRODUCT.md`. A project-wide trio at the root is the default for single-surface projects. Record the chosen scoping in memory's `briefs` list.

Create `DECISIONS.md` at the same scope if it does not exist, and write the first entry: the brief itself, with the council's dissents. Entries are at most 120 words, newest last, with a plain dated heading:

```markdown
## 2026-09-06 Brief written for leads-semanais
Scope lais-inicio/leads-semanais. Mode plan. By owner.
Decision: product register, rail-and-body layout, pillars calm, direct, useful.
Why: the scene sentence puts the corretora between two visits with four minutes to triage; density and predictability beat expression.
Dissent: massimo-vignelli (70) wanted one display face, not two; recorded, not adopted.
Touches: PRODUCT.md; DESIGN.md § Typography.
```

### Gate 7: Write `DESIGN.md`

`DESIGN.md` is the visual file, at most 2,500 words beyond its frontmatter. The YAML frontmatter carries the machine-readable tokens: colors as hex or OKLCH (one source of truth, never both), typography keyed by role with family, size, weight, line-height, and letter-spacing, spacing on a 4pt scale, radius tokens, elevation tokens with the surface percentages from `craft.md`, motion tokens at 100/300/500ms with named easing. When triage found a design system, the tokens come from it: reuse its names and values, extend in its naming dialect, and mark every new token as new. Do not create a second token set beside the one the project already has. Token names sound like this product's world, `--ink`, `--parchment`, `--rule`, not placeholders that could belong to any project.

Below the frontmatter, six prose sections in fixed order, paragraph-first: Overview (two or three paragraphs anchored on register and personas), Colors (the palette and its semantics, and why not others), Typography (the type system and hierarchy, with the register justification), Elevation (the depth strategy with the surface percentages), Components (anatomy and rules for each canonical primitive), Do's and Don'ts (explicit rules and refusals, each refusal linked to its `anti-slop.md` category, and inheriting the council's D3 and D4 rulings). Optionally write `DESIGN.json` as a sidecar generated from the frontmatter. Write only after the user has confirmed the frontmatter and the prose.

### Gate 8: Sequenced build plan

With the briefs written, produce a sequenced build plan: what gets built first, what next, where the gates apply. Concretely, not aspirationally. A typical sequence builds the core component library before any screen, gates the dashboard behind component completion, and gates any signature component behind two core primitives shipping cleanly. Without order, the user starts with the most exciting screen, hardcodes a dozen tokens that should have been primitives, and the system is born corrupt.

When memory says the work is handed to someone else, produce the handoff bundle for a product owner from `handoff.md` here: the three files, the concept link, the scene sentence and personas, the layout by name, the sequence, the restrictions, the success criteria, an owner per open question, and the deploy target and date.

### Gate 9: Hard stop after brief confirmation

Once the brief is confirmed, stop. Do not implement in the same response. The shape is the deliverable. Implementation is build mode, run later, in a separate turn, against the freshly written briefs. A planner who plans into implementation produces brittle decisions, because the same response that decided the brand pillars also decided the button radius, and neither got the attention it deserved.

Before stopping, run the light form of `self-review.md`: pillars over three? Restrictions wishy-washy? Persona constraints contradictory? A dated heading that slipped into the brief? Word counts within budget? Catch these here, because downstream they become constraints on every build.

## Hard rules across the workflow

Register confirmed before discovery, asked cold only when triage could not confirm it. Loader check and budget check at Gate 1; never silently overwrite; distill offered when a brief is over budget. Two rounds minimum on discovery with the scene sentence as round two's deliverable. Two to four probes on the concept surface triage chose, never zero, never one, never seven. The full council at Gate 3½, eighteen seats, one message, one log write, dissents recorded. Three to five layout candidates at Gate 4 with redesigns opened cold. Two to three personas by default. Pillars capped at three. `PRODUCT.md` at most 1,500 words and `DESIGN.md` at most 2,500, current state only, dated material in `DECISIONS.md`. Tokens from the discovered system when one exists. Hard stop after confirmation.

## What this mode produces

Three files at the scope: `PRODUCT.md`, `DESIGN.md`, and `DECISIONS.md`, plus an optional `DESIGN.json`. They live in the user's repository, version-controlled with the project, and every later build and review cites them. They are the constitution of the design system: amended carefully, appended often, never overwritten.

## Closing

Planning is the most-skipped phase of design work, because it does not ship pixels. It is also where the design succeeds or fails, before a component is rendered. Spend the time here. A scene sentence, three pillars, two or three personas, a chosen lane, a token system named for this product's world, a room that disagreed on the record: these are the inputs that make every later decision defensible. Write the contract first. Build against it second. Never the reverse.
