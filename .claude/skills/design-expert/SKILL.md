---
name: design-expert
description: Build, review, plan, and write interfaces with craft and evidence. Use for design reviews, UX critiques, accessibility audits, dashboard or admin builds, brand surfaces, and any product surface where defaults are unacceptable. Catches AI-generated slop; cites NNg heuristics, Universal Design 7, and a curated pantheon of historical designers; teaches the WHY of design before the HOW. Never uses emojis as UI.
version: 0.1.0
---

# design-expert

design-expert is a paragraph-first, evidence-grounded skill for interface design. It builds, reviews, plans, and writes — every action backed by Nielsen Norman Group heuristics, the Universal Design seven principles, and a curated pantheon of designers whose work survives the medium. Use it when defaults are not acceptable. Use it when "clean and modern" is not a brief. Use it when the difference between competent and signature is the difference between shipping and shipping well.

---

## The WHY of design

Design is the practice of understanding human behavior, not the practice of arranging pixels. Most of what passes for design is decoration applied to defaults — pixels first, intent later, a typeface picked because it was the last typeface picked, a color chosen because it was already in the file. Real design starts with how a specific human, in a specific moment, with a specific cognitive, emotional, and physical state, will use this thing. Pixels follow. Reverse the order and you have not designed; you have decorated a template. The interface is not the screen. The interface is the contract between the human's working memory and the system's response.

Principles outlive trends because patterns rotate every eighteen months and humans do not. Glassmorphism arrives, neumorphism arrives, bento grids arrive, brutalism arrives, then the cycle returns. None of these tell you whether your interface is good — only whether it looks contemporary, which is a smaller and stranger question. Nielsen's ten heuristics from 1994 still hold. The Universal Design seven principles from 1997 still hold. The Vignelli Canon's six-typefaces doctrine from 2010 still holds. They hold because they describe how people perceive, decide, recover from mistakes, and tolerate friction — and people have not been redesigned in fifty thousand years. Build on principles and your work ages on the schedule of human cognition. Build on patterns and your work ages on the schedule of the patterns it borrowed.

"Less is more" and "keep it simple" are not instructions. They are slogans — compressed wisdom that loses its meaning the moment a real decision shows up. The principles in this skill name that wisdom in detail: what cognitive load actually is (a working memory cap of about four items), what affordance actually requires (a signifier the user can perceive without prior training), what slop actually looks like at the CSS level (the purple-blue gradient at 135 degrees, the `transition: all 0.3s`, the rocket icon next to "Launch"). The detail survives contact with real decisions. The slogan does not.

Interface design is harder than industrial or graphic design because it must respect cognitive load, attention, motor capability, and emotional state simultaneously, across two registers — brand and product — that demand opposite things. A brand surface trades familiarity for memorability; a product surface trades memorability for earned familiarity. Get the register wrong and every rule applies wrong. The same heuristic carries different weight on a launch hero than on a settings panel.

Generic equals failure. If another model, given a similar prompt, produces substantially the same output, this skill failed. Sameness is the AI default failure mode; signature is the goal. Every rule downstream — the four craft tests, the ten lenses, the named anti-slop replacements, the iconography discipline, the type system — exists in service of producing work that could only be *this* product, for *this* person, doing *this* job. The interface that survives the next year of generative tooling will be the interface that could not have come from anywhere else.

---

## What good design looks like vs. what bad design looks like

Good design is felt as inevitable. The user closes the laptop and says "that was nice to use" without being able to articulate why. The why was the craft — the whisper-quiet surface elevation, the four-step text hierarchy, the empty state that taught instead of stalled, the focus ring that earned its place, the error message that named the recovery in the user's words. Bad design draws attention to itself. Good design says nothing and the user gets their work done. The squint test sorts the two: blur the screen and watch what survives.

Good design has signature. Bad design is interchangeable. A great interface has at least five elements that could only exist in this product, for this domain, for these users — the shape of the status pill, the temperature of the empty inbox, the chip pattern for filters, the way the metric card encodes a delta. A generic interface has none. It is a template with this particular logo on it. The four craft tests in `craft.md` — swap, squint, signature, token — are how you tell the difference before the user has to.

| Good | Bad |
|---|---|
| Specific colors drawn from the product's domain | Purple-blue gradient at 135 degrees |
| Five elements that could only exist in this product | Five elements that look like every dashboard |
| One status pill per row in its own column | Status crammed next to the title |
| Empty states with WHAT / WHY / ACTION | "No data available." centered in a card |
| Verb-plus-object button labels ("Approve invoice") | OK / Cancel / Submit |
| Inline validation on blur, with WHAT / WHY / HOW errors | Validation on submit, "Invalid input." |
| Icons at one stroke weight | Emojis, mixed icon families, sparkle for AI |
| Subtle layering — each level a few percent off the last | Glassmorphism on a static dashboard |
| Off-black `#09090b` background | Pure `#000000` background |
| Tinted neutrals leaning toward the brand hue | Pure gray with zero chroma |

---

## How to use this skill

The skill is a layered system. The index files — this `SKILL.md`, `design-gods.md`, `references.md`, `library.md` — are the fast scan layer; you read them to know what is available and which depth file to load next. The depth files — `foundations.md`, `craft.md`, `anti-slop.md`, `typography.md`, `components.md`, `interaction.md`, `output-format.md` — are the substance; you load them when a current decision touches their territory. The sub-skills — `/design-expert:build`, `:review`, `:plan`, `:write` — orchestrate workflows that load the right depth files in the right order, gating each step against the foundations so the discipline sticks. When in doubt about where to start, run a sub-skill. The sub-skill enforces what loose work forgets.

Context economy matters. The full skill is dense and loading it all for every task is wasteful. The sub-skills load the minimum required files for their workflow. When working freely without a sub-skill, load this `SKILL.md` plus the most relevant depth file or two for the surface — `craft.md` plus `anti-slop.md` for visual review, `components.md` for atomic patterns, `output-format.md` for review formatting, the relevant `library/<category>/README.md` when the surface type has a curated do-and-don't file. Skim the index, deepen on demand. Carrying every file in working memory dilutes attention; loading the wrong file dilutes craft.

---

## File index

The full set of files in this skill, with paths, one-line descriptions, and tags. Tags are canonical across the index files so cross-referencing works in one pass.

### Manifesto and foundation files

| File | What it covers | Tags |
|---|---|---|
| `SKILL.md` | This file. The manifesto, the index, and the how-to-use. | `#manifesto` `#index` |
| `foundations.md` | The ten NNg heuristics, the Universal Design 7 principles, and the 10-Lens decision framework. | `#principles` `#heuristics` `#accessibility` |
| `craft.md` | Composition, layering, density, color, the four craft tests, distillation, polish. | `#craft` `#visual` `#layering` |
| `anti-slop.md` | Detecting and replacing AI-generated defaults; the six tells; named replacements; grep recipes. | `#anti-defaultism` `#patterns` |
| `typography.md` | Type system, hierarchy levels, 38 pairings, brand-vs-product type rules. | `#typography` `#fonts` |
| `components.md` | Atomic patterns: cells, status pills, icons, charts, forms, navigation. | `#components` `#patterns` |
| `interaction.md` | The eight states, motion timing, responsive design, onboarding, delight, reduced motion. | `#interaction` `#motion` `#states` |
| `output-format.md` | Review template, confidence framework, five-dimension audit format, citation format. | `#review` `#format` |
| `nng-articles-index.md` | 270+ NNg articles indexed by topic for fast citation lookup. | `#lookup` `#nng` |

### Pantheon — historical designers

| File | What it covers | Tags |
|---|---|---|
| `design-gods.md` | The pantheon index — thirteen designers with capsules and tags pointing into per-designer files. | `#history` `#principles` |
| `design-gods/<slug>.md` | One file per designer: Rams, Vignelli, Ive, Kare, Rand, Norman, Nielsen, Eames, Victor, Corum, Tufte, Cooper, Frere-Jones, Muriel Cooper. Tags vary per designer. | `#history` |

### Curated references — quality exemplars

| File | What it covers | Tags |
|---|---|---|
| `references.md` | The references index — eight working systems and canonical texts with rationale. | `#references` `#exemplars` |
| `references/<slug>.md` | One file per reference: Pentagram, IBM Carbon, Apple HIG, Linear, Stripe, Refactoring UI, Vignelli Canon, Material 3. | `#reference` |

### Curated library — Do / Don't research

| File | What it covers | Tags |
|---|---|---|
| `library.md` | The library index — what good and bad versions of specific surfaces look like. | `#library` `#patterns` |
| `library/dashboards/README.md` | Do / Don't dashboards. | `#dashboards` |
| `library/navbars/README.md` | Do / Don't navbars. | `#navbars` |
| `library/components/tables/README.md` | Do / Don't tables. | `#tables` |
| `library/components/forms/README.md` | Do / Don't forms. | `#forms` |
| `library/components/empty-states/README.md` | Do / Don't empty states. | `#empty-states` |
| `library/components/cards/README.md` | Do / Don't cards. | `#cards` |

### Sub-skills — slash commands

| Command | What it does | When to use |
|---|---|---|
| `/design-expert:build` | Build new UI from intent. Gate-driven workflow with Shape, Register, Domain, and Test gates. | Building a new screen, flow, or component. |
| `/design-expert:review` | Review existing UI for craft, accessibility, and anti-slop. Walks the 10 lenses, UD7, heuristic scoring, and hardening. | Reviewing a Figma frame, a deployed surface, or a PR diff. |
| `/design-expert:plan` | Generate `PRODUCT.md` and `DESIGN.md` for a project. Loader check is mandatory — never silent overwrite. | Starting a new project; refreshing a stale brief. |
| `/design-expert:write` | Write or refine UX copy with the WHAT/WHY/HOW error formula and the acknowledge/explain/act empty-state formula. | Writing button labels, error messages, empty states, confirmations, microcopy. |

---

## Hard rules — non-negotiable

These rules never bend. They exist because each one prevents a specific class of failure observed at scale across thousands of AI-generated interfaces. The reasons are mechanical, not aesthetic; the reasons are documented in the depth files cited beside each rule.

- **No emojis as UI.** Emojis render differently across OS, browser, and font; they cannot be tinted to match the type color; their stroke weight is not yours to set; they announce inconsistently to screen readers. They are also the single loudest "AI made that" tell on a product surface. Use a single, consistent icon library. See `components.md`.
- **One icon library, one stroke weight.** Pick Lucide, Heroicons, Phosphor, Tabler, or Material Symbols at the system level and stick to it. Mixed icon families fragment the system. The canonical concept-to-icon mapping lives in `components.md`.
- **IBM Carbon defaults for enterprise and dense-data UIs.** Adapt the patterns; never blind-copy the colors. The Carbon discipline is the floor, not the ceiling. See `references/ibm-carbon.md`.
- **No pie or donut charts.** Cleveland and McGill (1984) — humans read length more accurately than angle. Bar charts win for category comparison every time. See `components.md`.
- **`prefers-reduced-motion: reduce` is mandatory.** Roughly thirty-five percent of adults over forty prefer reduced motion. Animations that ignore the preference are an accessibility failure, not a stylistic choice. See `interaction.md`.
- **44 by 44 pixel minimum touch targets** on any interactive mobile element (WCAG 2.5.5). Smaller targets fail Universal Design 7c.
- **Native `<dialog>` plus `inert` for modals.** Do not ship custom focus-trap JavaScript when the platform already does it correctly. Custom controls that do not expose ARIA roles fail Universal Design 4e.
- **Validate on blur**, never on every keystroke (annoying false errors), never only on submit (forces re-scan). The error formula is WHAT happened / WHY in user terms / HOW to fix. See `interaction.md` and `commands/write.md`.
- **Never use humor for failures, errors, or destructive confirmations.** Save warmth for empty states and celebrations. A joke at the moment of an error is the moment the user loses trust in the system. See `commands/write.md`.
- **No silent overwrite of `PRODUCT.md` or `DESIGN.md`.** The loader check in `/design-expert:plan` is mandatory. Erasing a brief is erasing the project's memory.

---

## Brand vs. product register

Every interface lives in one of two registers, and the same rules apply differently across them. Brand surfaces — landing pages, marketing sites, pitch decks, campaigns, launch heroes — exist to be distinctive; they trade familiarity for memorability, and they can deliberately violate consistency (Heuristic 4) and aesthetic-minimalism (Heuristic 8) for the sake of being remembered. Product surfaces — dashboards, admin panels, settings, in-app flows, authenticated tools — exist to disappear; they trade memorability for earned familiarity and cognitive ease, and consistency is non-negotiable because the user will be in this surface for hours and any inconsistency becomes a tax compounded across every interaction. Wrong register equals wrong everything downstream. The Register check is the second gate in `/design-expert:build` and surfaces throughout the depth files; if the register is uncertain at the start of any work, stop and ask.

---

## Closing

Design is felt, not enforced. The principles in this skill exist not to constrain but to liberate — when the floor is solid, the ceiling lifts. Read the foundations. Apply the craft. Refuse the defaults. Cite the source. Ship work that could only be yours, for this user, in this world, on this surface. That is the bar. Anything less is retrieval dressed as design.
