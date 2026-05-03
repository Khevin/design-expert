# design-expert

A paragraph-first, evidence-grounded skill for interface design. Build, review, plan, and write UI with the discipline of NNg heuristics, the Universal Design seven principles, IBM Carbon, anti-AI-slop patterns, and a curated pantheon of historical designers.

> Design is felt, not enforced. The principles in this skill exist not to constrain but to liberate — when the floor is solid, the ceiling lifts.

## Install

```
/plugin marketplace add Khevin/design-expert
/plugin install design-expert@design-expert
```

After install, four commands become available:

| Command | What it does |
|---|---|
| `/design-expert:build` | Build a new UI from intent. Gate-driven workflow with Shape, Register, Domain, and Test gates. |
| `/design-expert:review` | Review existing UI for craft, accessibility, and AI slop. Walks 10-Lens, Universal Design 7, Nielsen heuristic scoring, hardening, distillation, onboarding. |
| `/design-expert:plan` | Generate `PRODUCT.md` and `DESIGN.md` for a project, in the Google `DESIGN.md` standard. |
| `/design-expert:write` | Write or refine UX copy with the WHAT/WHY/HOW error formula and the acknowledge/explain/act empty-state formula. |

Plus the skill itself, invoked freely as `design-expert`.

## What's inside

```
.claude-plugin/
  marketplace.json     # marketplace metadata
  plugin.json          # plugin metadata
.claude/
  commands/            # the four slash-commands
  skills/design-expert/
    SKILL.md           # the central manifesto + file index
    foundations.md     # NNg 10 + Universal Design 7 + 10-Lens decision framework
    craft.md           # composition, layering, density, color, the four craft tests
    anti-slop.md       # detecting and replacing AI-generated defaults; six tells; grep recipes
    typography.md      # type system, hierarchy, 38 pairings, brand-vs-product type rules
    components.md      # cells, icons, charts (no pie / donut)
    interaction.md     # eight states, motion timing, responsive, onboarding, delight
    output-format.md   # review template, confidence framework, 5-dimension audit framework
    self-review.md     # end-of-work review discipline (anti-slop scan + craft tests + cuts/holds/risks)
    design-gods.md     # the pantheon: 13 historically influential designers
    design-gods/       # one file per designer
    references.md      # the 8 quality references
    references/        # one file per reference + nng-articles-index.md (270+ NNg articles indexed)
    library.md         # the curated library of Do/Don't patterns
    styles.md          # styles index (editorial, expressive)
    styles/            # editorial.md, expressive.md
    voices.md          # voices index (UX copy, long-form, marketing)
    voices/            # ux-copy.md, long-form.md, marketing/{lois,bernbach,gossage,ogilvy}
    library/           # category READMEs: dashboards, navbars, tables, forms, empty-states, cards
README.md
LICENSE
```

44 markdown files, ~74,000 words of content. No emojis (mechanical reasons — see `components.md`).

## Voice

The skill is written paragraph-first, manifesto-style. Every file leads with WHY before HOW. Bullets, tables, and ASCII diagrams complement paragraphs — they do not replace them.

The canonical voice reference is the interface-design plugin by Damola Akinleye, which design-expert evolves alongside.

## Hard rules (non-negotiable)

- No emojis as UI — one consistent icon library
- IBM Carbon defaults for enterprise / dense data UIs
- No pie or donut charts (Cleveland & McGill 1984)
- `prefers-reduced-motion: reduce` is mandatory
- 44×44 px minimum touch targets (WCAG 2.5.5)
- Native `<dialog>` + `inert` for modals
- Validate on blur, never on keystroke or submit
- Never use humor for failures, errors, or destructive confirmations

## Sources

design-expert is a standalone evolution of three predecessor skills:

- **`nng-agent`** — Nielsen Norman Group heuristics, Universal Design 7, anti-defaultism, IBM Carbon, font pairings, decision checklist, review template, confidence framework, data-viz tree
- **`interface-design`** by [Damola Akinleye](https://github.com/Dammyjay93) — manifesto voice, Intent-First, swap/squint/signature/token tests, subtle layering
- **`impeccable`** by [Patrick Bakaus](https://github.com/pbakaus) — brand vs product register, 0–4 heuristic scoring, shape/teach/document workflow, ux-writing patterns

Plus original research on a curated pantheon of historical designers (Rams, Vignelli, Ive, Kare, Rand, Norman, Nielsen, Eames, Victor, Corum, Tufte, Cooper, Frere-Jones), eight quality reference systems (Pentagram, IBM Carbon, Apple HIG, Linear, Stripe, Refactoring UI, Vignelli Canon, Material Design 3), and a curated library of Do / Don't examples across six interface categories.

## Status

**v0.1.0** — initial release.

## License

MIT — see [LICENSE](./LICENSE).
