# Handoff

What the finished work is handed over as, shaped by who receives it. Runs at build Gate 11, at review's Next Steps, and at plan Gate 8, whenever `handoff_to` in memory is not `self`.

---

## Why the handoff is part of the work

Work that is finished but not handed over is finished for one person. A developer who receives a screenshot rebuilds the spacing by eye; a designer who receives a pull request opens the deployed page and measures it back into Figma; a stakeholder who receives a canvas link without the brief approves a picture. The receiving side's first hour is spent reconstructing decisions the skill already made. The handoff writes those decisions down in the receiver's medium, and it does so with the four principles the format below inherits: don't assume, because whatever is unspecified will be guessed; tokens, not values, because `spacing-md` survives a retheme and `16px` does not; show all states, because the happy path is the one state nobody needs help with; and describe the why, because a rule without its reason is the first thing cut under deadline.

---

## Designer → developer

Produced as a spec page in the same Figma file through `use_figma` (after `figma:figma-use`) when the destination is a Figma file, and as a Markdown spec attached to the pull request when the deploy target is a repository; mirrored in chat either way so it survives outside the file. Sections, in order, each at most ten lines:

- **Overview.** What the surface is, who uses it, the scene sentence.
- **Frames.** A link per screen and per state.
- **Layout.** Grid, container, breakpoints, and what reflows at each.
- **Design tokens used.** Token, value, usage. New tokens proposed, marked new.
- **Components.** Library instances used; new components with props and variants.
- **States and interactions.** The eight states per interactive element, with behavior.
- **Responsive behavior.** Desktop, tablet, mobile, stated as what changes.
- **Copy.** Final strings, with the i18n slack the container must hold.
- **Motion.** Element, trigger, duration, easing, and the reduced-motion behavior.
- **Accessibility.** Focus order, roles and names, contrast, targets at 44px.
- **Edge cases.** Long text, zero, one and a thousand rows, RTL, offline.
- **Open questions.** Each with an owner and the `DECISIONS.md` date it traces to.

---

## Developer → designer

Produced as the pull request description, with an optional Figma push after `figma:figma-generate-design` when the designer wants frames to annotate.

- **Title.** The surface and the size of the change.
- **Before and after.** Screenshots at three viewports.
- **Deviations from the spec**, each with why.
- **Tokens** added or changed.
- **Components** added or changed, with paths.
- **States** done and pending.
- **Accessibility** results: keyboard walk, contrast, reduced motion.
- **Figma push** link, if made.
- **Preview URL.**
- **Decisions.** The `DECISIONS.md` entries this change adds.

---

## Product → either

Produced as the brief bundle plus a share link to whatever was approved.

- `PRODUCT.md`, `DESIGN.md`, and the new `DECISIONS.md` entries.
- The canvas or Figma link the concepts were approved on.
- The scene sentence and the personas.
- The chosen layout pattern, by its `layouts.md` name.
- The sequenced build plan from plan Gate 8.
- The restrictions, stated as bans.
- Success criteria per persona.
- An owner per open question.
- Deploy target and date.

---

## What the handoff never does

It never restates the whole brief; it links to it. It never ships a value where a token exists. It never leaves a state to be inferred. And it never invents a receiver: when `handoff_to` is `self`, the handoff is skipped and the build's own rationale is the record.
