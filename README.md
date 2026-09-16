![design-expert](./design-expert-github-img.png)

# design-expert

A paragraph-first, evidence-grounded skill for interface design in Claude Code and ChatGPT/Codex. One command that plans, builds, reviews, iterates, and writes UI with the discipline of NNg heuristics, the Universal Design seven principles, anti-AI-slop patterns, a 32-pattern layout catalog, register-aware style files, voice taxonomies, self-review, and an eighteen-designer pantheon that sits as a council when the work is large enough to deserve one.

> Design is felt, not enforced. The principles in this skill exist not to constrain but to liberate: when the floor is solid, the ceiling lifts.

[khevin.com/design-expert.html](https://khevin.com/design-expert.html)

## Install in Claude Code

design-expert ships as a Claude Code plugin under the khev-tools marketplace. It needs a current Claude Code build; update if `/plugin` is not recognized.

```bash
/plugin marketplace add https://github.com/Khevin/khev-tools
/plugin install design-expert@khev-tools
```

## Install in ChatGPT / Codex

Ask the built-in skill installer to install the skill folder from this repository:

```text
$skill-installer Install design-expert from https://github.com/Khevin/design-expert/tree/main/skills/design-expert
```

The installed skill appears as **Design Expert**, activates automatically for design work, and can be invoked explicitly with `$design-expert`.

## One command

Describe the work. The skill reads who you are, where the work will land, how the project's design system is implemented, how big the change is, and what you asked for, then it runs the right mode.

```text
/design-expert a billing-settings page for a subscription SaaS   # Claude Code
$design-expert make it better                                    # ChatGPT / Codex
$design-expert critique src/billing/, notes only
$design-expert write the error when a payment fails to send
```

Force a mode when you already know which one you want: `/design-expert plan …` in Claude Code or `$design-expert plan …` in ChatGPT/Codex, with the same `build`, `review`, `write`, and `iterate` modes.

### How it decides

Every run prints one trace line before it works, so you can see each decision and correct it:

`Triage: role designer (profile) · handoff → developer · deploy figma-file · DS system.md + CLAUDE.md § tokens · register product · size iteration · mode iterate · target figma (prereq figma-use) · tier capsule`

- Who you are is asked once and remembered under the active agent's state directory when permitted. The project's handoff direction, deploy target, Figma file, and design-system pointers live in `.design-expert/project.md`, safe to commit or ignore.
- The design system comes before any judgment. The skill looks in briefs, `system.md`, the design sections of `AGENTS.md` and `CLAUDE.md`, tokens in code, component folders, Figma variables and libraries, and connected design workspaces. A pattern your system mandates is never filed as slop.
- The size of the change is read from its scope, not its phrasing. Touch-up, polish, iteration, surface redesign, system redesign. "Make it better" on a button is polish; on a dashboard it is iteration.
- The output target follows the role and the tools actually available. Designers with Figma connected work in Figma. Repository work uses native code and previews. Product work gets briefs plus the best available visual workspace. Small changes never open a surface.
- The pantheon is a council. When the harness permits parallel seats, plan convenes the designers independently and a chair turns their verdicts into rulings, contested points, and recorded dissent. When delegation is unavailable, the skill uses a proportional capsule consultation and keeps moving.

## Modes

**Plan** writes `PRODUCT.md`, `DESIGN.md`, and `DECISIONS.md` through a discovery interview, direction probes on your concept surface, a coverage-based council, a layout walk, and personas. Briefs stay within word budgets; dated decisions go to the decision log. It never overwrites a brief silently.

**Build** takes a brief to real screens through gates: shape, layout exploration, references, intent, domain, inventory, proposal, the council at redesign size, build on your target, iteration on the rendered result, then presentation and handoff. Every iterate request enters here at its size.

**Review** walks anti-defaultism with the mandated-pattern check first, the ten-lens checklist, Universal Design 7, Nielsen scoring, the five-dimension audit, the grid audit, hardening, distillation, and onboarding, and produces the eight-section document with citations. The council rules on the fixes at full depth.

**Write** produces copy in three contexts, UX micro-copy, long-form, and marketing, each in its voice file, and sweeps the result for the tells that turn copy into wallpaper.

## Updates

### v1.3.3, September 16, 2026

Seats run on the session's model rather than a pinned lighter one. Large rooms keep their three to five lead seats on it and may step the supporting seats down one model, to Opus, at high effort throughout; small rooms spawn real seats instead of capsules read in context. The chair never rules on a stepped-down block or dissent without re-running it.

### v1.3.1, September 15, 2026

A few core files and canon libraries were reviewed against the outputs they produce and tightened where results drifted. Consultation scales with the decision: no five-capsule ceiling, no filler seats, and room for deeper verdicts around 400 words when needed. The nine-key verdict and evidence/dissent discipline remain stable. Capsules and tags are extensible, unresolved choices stay pending, and the reference index now links directly to 18 local resources, including eight new depth files.

### v1.3.0, September 14, 2026

ChatGPT/Codex becomes a first-class host. A harness adapter resolves skill-relative paths, structured questions, optional memory, concept surfaces, and parallel council seats without changing the design method. The skill ships Codex UI metadata, reads `AGENTS.md` alongside `CLAUDE.md`, uses the active visual workspace instead of assuming Claude Design, and documents a one-prompt install through `$skill-installer`. Claude Code keeps its marketplace install and `/design-expert` command.

### v1.2.1, September 7, 2026

One entry point. `/design-expert` triages every request and picks the mode; the four sub-commands are gone. The pantheon became a council with parallel seats and a chair. The skill now discovers the project's design system before judging, remembers who you are and where the work lands, chooses Figma, canvas, or code by role, and hands off in the receiver's medium. Briefs gained word budgets and a `DECISIONS.md` log. Paula Scher, Alan Cooper, and Johannes Itten joined the pantheon. A ninth anti-slop category names the structural and rhetorical tells: numbered section markers, decorative side-stripes, fragment triads, reversal formulas, dash-label headers. The plugin follows the current `skills/` layout. Full notes in `CHANGELOG.md`.

### v1.2.0, May 3, 2026

Editorial and expressive style registers, the 32-pattern layout catalog, `grids.md`, iteration sizing in `craft.md`, `self-review.md`, the voices taxonomy with four marketing voices, register and layout gates in plan and build, per-surface brief naming.

### v1.0.0, April 30, 2026

Initial plugin release with four commands, a twelve-file reference library, and thirteen designer files.

### v0.9 beta, April 22, 2026

`anti-slop.md` graduated with thirty named patterns; brand and product registers separated.

### v0.5 alpha, April 8, 2026

First public alpha: `SKILL.md`, foundations, craft, and a single review command.

## Sources

design-expert is a standalone evolution of three predecessor skills:

- `nng-agent`: Nielsen Norman Group heuristics, Universal Design 7, anti-defaultism, IBM Carbon, font pairings, the decision checklist, the review template, the confidence framework, the data-viz tree.
- `interface-design` by [Damola Akinleye](https://github.com/Dammyjay93): manifesto voice, Intent-First, the swap, squint, signature, and token tests, subtle layering.
- `impeccable` by [Patrick Bakaus](https://github.com/pbakaus): brand vs. product register, 0–4 heuristic scoring, the shape, teach, and document workflow, ux-writing patterns.

Plus original research on the eighteen-designer pantheon (Rams, Vignelli, Ive, Kare, Rand, Norman, Nielsen, Eames, Victor, Corum, Tufte, Muriel Cooper, Frere-Jones, Tschichold, Müller-Brockmann, Scher, Alan Cooper, Itten), an expandable [reference index](skills/design-expert/references.md) spanning design systems, canonical texts, accessibility, service design, visualization, internationalization, and web implementation, the layout catalog, the style taxonomy, the marketing voices, and the council protocol.

## License

MIT. See [LICENSE](./LICENSE).
