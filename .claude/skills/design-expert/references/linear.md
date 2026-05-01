# Linear

Type — Product / SaaS Application

URL: https://linear.app

## Why this is a quality reference

Linear is what happens when a project management tool is designed by people who refuse to ship a project management tool. Founded in 2019, it became the modern SaaS gold standard inside four years — not by adding features, but by refusing them. The product reads as a single mind designing it. Not consensus, not committee, not "the design team aligned with PM on the roadmap." One opinion, held with discipline, repeated across every surface. The Linear Method is published openly at linear.app/method, and it is one of the few pieces of public design writing where the principles match the artifact. Most companies write a design philosophy and then ship something that contradicts it; Linear writes a design philosophy and then makes it harder to violate.

The position is keyboard-first, monochrome-with-a-signature-accent, density without density-fatigue, command palette as a first-class navigation surface, and lightning performance treated as a design value rather than an engineering one. They are opinionated about which views exist, how cycles work, how triage operates. The discipline is in what is *not* there: no gradient hero, no marketing-style empty states, no nine-color status pills, no decorative depth. The restraint is not minimalist as an aesthetic — it is minimalist as an operating principle.

## What to study

Open the command palette (cmd+k or ctrl+k after signing in) and study it for ten minutes. It is the gold standard for power-user navigation in SaaS — fuzzy search, contextual actions, keyboard hints inline, no modal trap. Then study the issue list view: count how many pieces of metadata land on a single row without producing scan fatigue. The cycle and sprint UIs show how to compress progress into a glanceable visualization without resorting to the donut-chart cliche. The empty states are consistently great and almost always teach the user something rather than apologize for absence. Finally, read linear.app/method end to end — the sections on opinionated software, focus, and quality are the manifesto.

## What NOT to copy blindly

The monochrome palette is signature for Linear and a default for anyone who copies it directly. Cloning Linear's color usage produces a Linear-shaped product that has not earned Linear's discipline — the absence of color reads as restraint when the rest of the product earns it, and reads as laziness when the rest of the product is generic. The keyboard-first model is right for power users on a tool they live inside daily and wrong for casual consumer apps where users will not learn shortcuts. Take the discipline; bring your own register.

## Where this reference informs design-expert

Linear is the working example referenced in `craft.md` for subtle layering, density discipline, and signature elements at scale; in `anti-slop.md` as the antidote to gradient-heavy SaaS templates; and in `interaction.md` for command palettes, keyboard navigation patterns, and empty-state writing.

## Sources

- linear.app — the product itself, free workspace
- linear.app/method — the documented design philosophy
- linear.app/blog — regular design and engineering writing
- linear.app/changelog — release notes treated as a design surface
- Karri Saarinen on Twitter (@karrisaarinen) — Linear co-founder, posts design thinking openly
