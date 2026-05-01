---
description: Generate PRODUCT.md and DESIGN.md for a project, following the Google DESIGN.md / impeccable convention. Runs Discovery interview, Visual probe, Persona selection, then writes the two files. Does not silently overwrite existing files; loader check is mandatory.
---

# /design-expert:plan

This command produces the project state files that every subsequent `/design-expert:build` and `/design-expert:review` invocation depends on. It writes `PRODUCT.md` and `DESIGN.md` at the user's project root, and optionally a `DESIGN.json` sidecar. The command does not implement, render, or generate components. It plans. The hard stop after the brief is non-negotiable, and the loader check at the front is non-negotiable, because the most destructive thing a planner can do is silently overwrite institutional knowledge that took weeks to gather.

## When to use this command

Run `/design-expert:plan` when starting a brand-new project, when encountering an existing project that has neither `PRODUCT.md` nor `DESIGN.md` at the root, or when refreshing a brief that has visibly drifted from the actual product. Do not run it for everyday building — that is what `/design-expert:build` is for. Plan is the upstream act. It is the work that makes everything downstream defensible. If you find yourself reaching for plan to fix a single component, stop and reach for build instead. Plan owns the system; build owns the surface.

## The plan workflow — gate-driven

The workflow is eight gates in fixed order. Each gate is a checkpoint that either advances or sends you back. The two most important are the first and the last. Gate 1 is the loader check — never silently overwrite project state. Gate 8 is the hard stop after the brief — never bleed planning into implementation in the same response. The middle gates produce the substance: a scene sentence, two to four direction probes, two to three personas, the brand pillars, the tokens. Skip a gate and the brief is decoration. Walk every gate and the brief is a contract.

### Gate 1: Loader check (NEVER silently overwrite)

Before doing anything else, look at the project root for `PRODUCT.md` and `DESIGN.md`. If either file already exists, STOP. Read what is there. The user's previous decisions about register, users, brand pillars, tokens, do's and don'ts are now sitting in front of you, and they may not be reproducible if you overwrite them. Confirm with the user, in chat, before changing a single byte. Silent overwrite of project state is the most destructive thing a planner can do — it loses real institutional knowledge, and the user often does not notice until weeks later when the design system mysteriously stops matching what was agreed to.

If the files exist, ask the user whether to refresh from scratch, augment what is there, or leave the files alone. If they choose refresh, proceed through the gates but show a diff before writing — the user reviews what is being lost. If they choose augment, treat existing content as the floor and only fill in gaps. If the files do not exist, proceed to Gate 2. Never assume the answer.

### Gate 2: Discovery interview

Discovery is two rounds, minimum. Each round is two or three questions, conversational tone, focused on the specific gap in your understanding. Do not dump ten questions at once — that is a form, not a conversation, and the answers come back shallow. Round one surfaces the surface-level: what is this project, who is it for, what does it solve, what is the rough scope. The questions are open and physical. "Tell me about the user encountering this product for the first time. What were they doing five minutes before they opened it? What did they want to be different by the time they closed it?"

Round two deepens into what impeccable calls the scene sentence — a single physical-context line that captures the use case in concrete detail. *"A first-year teacher at 7am, coffee on the desk, ten minutes before her first class, trying to find the lesson she ran last year on photosynthesis."* That sentence determines theme, density, color, type, motion, every downstream choice. Without it, every decision later is a guess dressed up as taste. If the user cannot produce the scene sentence in round two, run a third round. Do not proceed past discovery without it. The scene sentence is the foundation; everything else is rendered from it.

### Gate 3: Visual direction probe

Before writing the brief, show two to four directionally-distinct visual probes. Probes are not designs — they are mood references. Each probe goes in a different direction: warm-editorial, cool-technical, minimalist-monochrome, expressive-color. The point is contrast, not refinement. The user picks the lane that matches the scene sentence, and that pick is now a constraint that shapes every token, every component, every component-level rule downstream.

Use native image generation if the harness supports it. If it does not, describe the four directions in prose with named real-world references — actual products, brands, printed objects, never adjectives like "modern" or "clean." If two probes feel close, kill one and replace it with something further away; the value is in distance, not in detail. The user pick is the visual north star for everything that follows.

### Gate 4: Persona selection

Pick two to three personas from the five archetypes. Power User knows the product cold, uses every shortcut, lives in it daily. First-Timer has never opened the product before and assumes nothing. Accessibility-Dependent uses a screen reader, keyboard only, or low-vision settings, and exposes every encoding-by-color failure in the system. Stress Tester arrives on a slow connection with edge-case data — a thousand rows, emoji names, RTL text, paste-from-Excel — and finds the gaps the happy path hides. Mobile is touch-only, small screen, often interrupted, often one-handed.

Two to three is the sweet spot. One persona is too narrow — the design optimizes for a single behavior and crumbles for everyone else. Four or more becomes incoherent — the personas contradict each other and the design has no center. The selected personas drive every gate's success criteria. Every screen built later must work for all two or three. If the work cannot serve all the chosen personas at once, the personas were wrong, not the work — go back to Gate 4 and re-pick.

### Gate 5: Write `PRODUCT.md`

`PRODUCT.md` is the strategic file. Four sections. Users — the personas selected in Gate 4, named with their scene sentences, in the user's own domain vocabulary. Brand personality — three pillars, adjectives, that drive every voice and visual decision downstream. *Expert, decisive, editorial.* Three is the cap. Four pillars become incoherent because each pillar pulls the design in a slightly different direction and the result is mush. Restrictions — what this product is NOT, the explicit bans. *No casual humor. No exclamation marks. No emojis as UI. No motion that does not communicate state.* The bans are at least as load-bearing as the pillars; without them, the design drifts toward whatever default the model retrieved last.

Register — brand or product. This single field drives type, density, motion, color saturation, and every downstream rule. Brand surfaces can violate consistency for memorability; product surfaces cannot. Brand can use clamp-scaled type and asymmetric layouts; product holds the grid for trust. The register is a hypothesis from the codebase scan plus a confirmation from the user, never an assumption. Write `PRODUCT.md` to the project root only after the user has confirmed all four sections in chat. Do not infer and ship.

### Gate 6: Write `DESIGN.md`

`DESIGN.md` is the visual file. It opens with YAML frontmatter carrying the machine-readable tokens — colors as hex or OKLCH (pick one source of truth, do not split), typography keyed by role with family/size/weight/line-height/letter-spacing, spacing on a 4pt base scale of 4/8/12/16/24/32/48/64/96, radius tokens at sm/md/lg, elevation tokens with the percentage adjustments from craft.md (canvas, surface-100 at +7%, surface-200 at +9%, surface-300 at +12%), and motion tokens at 100/300/500ms with named easing curves. Token names should sound like this product's world — `--ink`, `--parchment`, `--rule` — not generic placeholders that could belong to any project.

Below the frontmatter, six prose sections in fixed order, paragraph-first not bullet-first. Overview frames the system in two or three paragraphs anchored on the brand register and the personas. Colors describes the palette and its semantics, justifying why these colors and not others. Typography describes the type system and hierarchy levels with the brand-vs-product justification spelled out. Elevation describes the depth strategy — borders-only, subtle shadows, layered, color shifts — with the surface percentages from craft.md. Components describes anatomy and rules for each canonical primitive. Do's and Don'ts gives explicit rules and explicit refusals, with each refusal linked to the anti-slop categories where relevant. Optionally write `DESIGN.json` as a sidecar — generated from the YAML frontmatter, machine-readable for token-export tools and live-render panels. Write `DESIGN.md` to the project root only after the user has confirmed the frontmatter and the prose.

### Gate 7: Sequenced build plan

Once `PRODUCT.md` and `DESIGN.md` are written, produce a sequenced build plan — what gets built first, what comes next, where the gates apply. The plan answers the question "where do we start," and it answers it concretely, not aspirationally. A typical sequence: build the core component library before any specific screen; gate the dashboard build behind component-library completion; gate any custom signature component behind two of the core primitives shipping cleanly. The point is order. Without it, the user starts with the most exciting screen, hardcodes a dozen tokens that should have been primitives, and the design system is born corrupt.

### Gate 8: HARD stop after brief confirmation

Once the brief is confirmed, STOP. Do not implement in the same response. The shape is the deliverable. Implementation is `/design-expert:build`, run later, in a separate turn, against the freshly-written `PRODUCT.md` and `DESIGN.md`. This is not a polite suggestion. A planner who keeps planning into implementation produces brittle decisions, because the same response that decided the brand pillars also decided the button radius, and now neither got the attention it deserved.

Why hard-stop. Each phase deserves its own attention. The user reviews the plan, lives with it for a moment, possibly comes back with a revision. Then `/design-expert:build` runs against the plan as if for the first time. This is also how senior designers actually work — sketch, brief, gate, build. Conflating phases is the AI-default failure mode. The brief is precious because the brief is rare; do not bury it under a hundred lines of generated CSS in the same turn.

## Hard rules across the workflow

Never silently overwrite `PRODUCT.md` or `DESIGN.md` — the loader check is mandatory and the user's confirmation is in chat, never inferred. Two-round minimum on discovery, with a scene sentence as the explicit deliverable of round two. Two to four visual probes before the brief, never zero, never one, never seven. Two to three personas only — one is too narrow, four is incoherent. Brand pillars capped at three. Hard stop after brief confirmation, no implementation in the same response.

## What this command produces

The output is two files in the user's project root — `PRODUCT.md` and `DESIGN.md` — plus an optional `DESIGN.json` sidecar. These are not artifacts of this skill; they live in the user's repo, owned by the user, version-controlled with the project. They become the canonical inputs to every subsequent `/design-expert:build` and `/design-expert:review`. Every decision downstream cites them. They are the constitution of the design system, amended carefully and rarely, never overwritten.

## Closing

Planning is the most-skipped phase of design work, because it does not ship pixels. It is also the phase where the design either succeeds or fails, before a single component is rendered. Spend the time here. The build is the easy part if the brief is right, and the build is impossible if the brief is wrong. A scene sentence, three brand pillars, two or three personas, a chosen visual lane, a token system named for this product's world — these are the inputs that make every later decision defensible. Without them, the design is taste. With them, the design is a contract. Write the contract first. Build against it second. Never the reverse.
