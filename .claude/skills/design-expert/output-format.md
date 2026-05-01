# Output Format

How design reviews and proposals from this skill are structured. Read after `foundations.md` — the foundations give you the vocabulary and citations; this file gives you the container they live in.

---

## Why review structure matters

An ad-hoc review reads as "here are the things I noticed in the order I noticed them." That is not a review — it is a stream. The reader cannot tell which issues block the ship and which are cosmetic, which are systemic and which are one-off, which are grounded in evidence and which are taste. They cannot triage; they have to triage everything from scratch. Most give up and act on the first item, or the loudest. The design either ships broken because the blocker was buried on line forty-seven, or stalls for a week because the team mistook a Note for a Major.

Reviews are documents that survive the conversation that produced them. Six months later, a new designer opens the project's review log and either trusts what is written or dismisses it. They were not in the room. They cannot ask follow-up questions. They have the words on the page, the citations, the severity tiers, and the open questions you were honest enough to flag. If the review is well-structured, they pick up the work. If it is a stream of opinions, they re-do the review from scratch — or ship around it.

Structure is also a form of intellectual honesty. It forces the reviewer to admit what they don't know (Open Questions), to separate evidence-grounded claims from taste (citations and Universal Design audit), and to acknowledge what works, not just what's wrong (What Works). Reviews that name only problems train recipients to dismiss reviews; reviews that ground every claim in a heuristic, a principle, or an article earn trust over time. Trust is the asset; the format is the receipt.

---

## The eight review sections

The review has eight sections, ordered, and the order matters. A reader scanning top-to-bottom should be able to stop at any section and have understood everything they needed up to that point. Context grounds the document. What Works earns enough goodwill to read what follows. Issues carry the substance. Open Questions force the conversation forward. The two audits — Universal Design 7 and anti-defaultism — provide the evidentiary floor. Next Steps tell the recipient what to do tomorrow. References make the whole thing checkable. Drop a section and you damage the others; reorder them and you damage the reader.

### Context

The review opens with what was reviewed, by whom, against what brief, in what mode. One or two paragraphs. Without context, the rest is unmoored — a reader cannot tell whether the review is judging a sketch, a Figma frame, a staging build, or a production surface, and the same critique reads completely differently against each. Name the surface (one screen, one component, one flow), the channel (Figma file, deployed URL, screenshot, code diff), the brief if there is one (ticket title, design problem in one sentence), the reviewer's role, and the review mode (full, light, sub-surface). The point is not bureaucracy — it is to inoculate the reader against misreading the rest.

### What Works

Three to five concrete observations about what is working, in plain prose. Not generic praise — "looks good" is noise. The point is specificity: "the empty-state copy on the inbox correctly explains the value before asking for action," or "the table's frozen-first-column behavior survives narrow viewports without horizontal-scroll jank." Naming what works is reinforcement; it tells the recipient which patterns to repeat. Skipped, the recipient learns that good work goes unnoticed and only mistakes generate feedback, which over time makes them defensive readers who dismiss the rest of your review. Short — one or two paragraphs — but not optional.

### Issues

The heart of the review. Each issue is a structured block, not a bullet — bullets compress reasoning out of existence. The block: a heading combining the severity tier and a one-line title (`[Blocker] Modal traps keyboard focus inappropriately`); one or two sentences of WHAT; one sentence of WHY, with a citation to a Nielsen heuristic, a Universal Design principle, an NNg article, or an anti-slop category; one sentence of WHERE — surface, component, line of code if relevant; one sentence of HOW to fix it, concrete enough that an engineer or designer could pick it up tomorrow.

```
[Blocker] Modal traps keyboard focus inappropriately
WHAT: The "Confirm purchase" modal does not return focus to the trigger button on
dismiss; tabbing inside the modal escapes to the page beneath.
WHY: Fails Heuristic 3 (User Control and Freedom) and Universal Design 4e — keyboard
and screen reader users cannot reliably exit the modal context. Cite: NNg, "User
Control and Freedom (Heuristic #3)" [G].
WHERE: components/Modal.tsx, lines 84–112; affects all confirmation modals app-wide.
HOW: Trap focus within the modal while open; restore focus to the original trigger on
close. Use a tested utility (focus-trap-react or equivalent) — do not roll a custom
trap.
```

One issue per block. No abstractions ("the spacing feels off"); no compounding ("several issues with hierarchy and color"). If two issues share a root cause, write the root-cause issue once; do not split it across three vague observations.

### Open Questions

What the reviewer cannot answer without more information. This is where the confidence framework lives — see section five. Open Questions are decisions to be made, not problems to be fixed, and they belong in their own section because conflating them with Issues distorts both. Issues are findings; Open Questions are forks. A review with no Open Questions is suspicious — either the reviewer is omniscient (unlikely) or pretending to be (more common). Even small reviews usually have one or two genuine forks.

### Universal Design 7 audit

The seven principles get an explicit walk. One paragraph framing the audit, then a per-principle pass / fail / not-applicable line citing failures by sub-letter (`fails 4a — color-only status indication`, `fails 7c — touch targets under 44 by 44 pixels`). The audit is non-negotiable on product surfaces because Universal Design failures are inclusivity failures and they compound silently — a color-only status indicator looks fine in screenshots and quietly excludes everyone with color-vision differences who never files a ticket. If three or more principles fail, the design is broken regardless of polish — surface that to the reader directly, not as a footnote.

### Anti-defaultism scan

One paragraph stating which categories of AI-generated defaults were scanned: visual and CSS (gradients, glass, default shadows), typography (Inter or Geist on every brand surface, generic sans on every product surface), layout (hero-stat-stat-stat-stat dashboard, sidebar-with-icons-and-labels, blue accent on white), motion (default ease, equal-duration transitions), content (the "Streamline your workflow" hero, the "Built for teams" subhead), and iconography (mixed-set Material-and-Heroicons leakage, emoji as state indicator). If tells were detected, name them and reference the anti-slop category. If none were detected, say so — silence reads as "I did not check."

### Next Steps

What the recipient should do next, in priority order, mapped to P0 / P1 / P2 / P3. One paragraph, then a short ordered list. The point is to remove the question "okay, where do I start tomorrow morning?" — every review should answer it. If the answer is "do not ship," say so plainly in the first sentence; do not bury a no-go in section seven.

### References

The reviewer's bibliography. Every NNg article URL cited; every Universal Design principle invoked; every anti-slop category referenced; every interface-design rule applied. Without references, claims are taste; with them, claims are checkable. The recipient who disagrees can follow the citation, read the source, and form their own view — which is the point. Reviews are not commands; they are arguments with their evidence attached.

---

## Severity tiers crossed with P0–P3 triage

Not all issues are equal, and a review that lists them as if they were forces the reader to estimate priority themselves — they will get it wrong. Tiering exists so the recipient can scan headings and triage in seconds. Use two tiering systems in parallel because they travel to different audiences. Blocker / Major / Minor / Note travels well to designers. P0 / P1 / P2 / P3 travels well to PMs and engineers, who think in release cycles. In cross-functional reviews, label every issue with both.

**Blocker — P0.** Cannot ship. An accessibility violation that excludes a real population; a destructive action with no undo; a primary user goal blocked by a broken interaction; a hard rule violated (R-tagged citation in foundations). Must be fixed before the next release. If multiple Blockers exist, the design is not in review state — send it back. Examples: a delete with no confirmation; a form that loses inputs on validation error; a modal whose Esc key does nothing; status communicated by color alone; a destructive button rendered identically to the safe button next to it.

**Major — P1.** Hurts usability noticeably. The user can still complete the task, but with friction that will generate support tickets. Should ship a fix this sprint. Examples: an inconsistent label across two surfaces; a primary action below the fold; an error message that names the symptom but not the recovery; a touch target at 32 pixels on mobile; a spinner instead of progress on an upload over three seconds.

**Minor — P2.** Cosmetic or low-frequency. Does not block usability but should be addressed when convenient. Can ship with a ticket filed. Examples: a border-radius mismatch between two card variants; microcopy that is correct but not in the user's domain vocabulary; a generic animation easing; a tooltip with a slightly slower delay than the rest of the product.

**Note — P3.** Backlog or future. Not actionable now but worth recording. Examples: a token-system inconsistency that will compound on the next surface; a pattern that is fine in isolation but will not scale; an open question about whether the IA accommodates an upcoming feature; a stylistic choice worth revisiting if the product rebrands.

The dual labeling exists for translation. Designers reading "Blocker" know they cannot ship. PMs reading "P0" know it tops the queue. Engineers reading "P0" know it lands this week. Cross-walk: Blocker maps to P0, Major to P1, Minor to P2, Note to P3. Do not split them, or you will file Blockers as P2 and ship broken.

---

## The 5-dimension audit framework

Severity tiers tell you which issues matter most. They do not tell you how the design as a whole is doing. For that, score across five dimensions. The numeric score forces specificity ("a 2 here because color-only status fails Universal Design 4a in three places"), enables trend tracking across versions of the same surface ("we moved from 9 to 14 between v1 and v2"), and separates "I have a feeling" from "this dimension scores low for these named reasons." Without numeric scores, reviews drift toward vibes; with them, drift becomes harder to hide.

Each dimension is scored 0 to 4. Sum is 0 to 20.

**Heuristic compliance.** Adherence to Nielsen's ten heuristics and the Universal Design seven principles. A 4 means no heuristic failures and no Universal Design failures across a non-trivial surface — rare. A 0 means the design fails six or more heuristics, or three or more Universal Design principles.

**Anti-defaultism.** Distance from generic AI-generated and template patterns. A 4 means a signature element is present and locatable, typography and color world come from the product's domain, and a swap test (replace typeface and accent with boring defaults) would meaningfully degrade the design. A 0 means the design could be generated by any model with the prompt "make a dashboard."

**Craft.** Composition, layering, density, type rhythm, spacing system, surface elevation, the squint test. A 4 means the design holds up under squint, the hierarchy is calm, the spacing system is internally consistent, and surface elevation reads as intentional. A 0 means harsh borders, dramatic surface jumps, and visual chaos.

**Accessibility.** Keyboard navigation, focus management, ARIA roles on custom components, contrast at WCAG AA, reduced-motion respect, screen-reader compatibility. A 4 means the design passes a keyboard-only walkthrough, focus rings are visible and logical, all interactive elements expose roles, and contrast is at AA throughout. A 0 means custom controls without ARIA, color-only status, contrast failures on body text, and motion that ignores `prefers-reduced-motion`.

**Hardening.** Behavior under stress — text overflow, i18n slack (German runs thirty percent longer than English; Arabic flips direction), error handling, edge cases, empty states, network failures. A 4 means the design specifies and survives all of these. A 0 means the design works only at the happy path.

**Score bands (sum 0–20).** 18–20: Excellent. Defensible in a senior design review anywhere. Rare; suspect overscoring if you reach it often. 13–17: Good. Some craft details could improve; structurally sound; ships. 8–12: Adequate. Functional but not signature. Common ground for shipped product. 4–7: Poor. Significant issues; would not recommend. 0–3: Critical. Probably should not have shipped; complete revision warranted.

**Honesty enforcement.** A 4 means genuinely excellent, not "good enough." A 2 is the median, not a failing grade — most product surfaces score in the 2 to 3 range per dimension and that is normal. If you find yourself scoring everything 3 to 4, recalibrate — you are being polite, not honest, and your scores are about to lose their signal. The point of a numeric score is to make differentiation legible; if you cannot bring yourself to score below 3, drop the framework and just write prose.

---

## The confidence framework

Some decisions have multiple valid answers, and presenting one as the answer hides the actual decision under "the AI's preference." When the user later wants to change direction, they do not know which assumption is in play, which alternative was rejected, or why. The fix is to surface options with confidence percentages and force the user to pick. This is not hedging — it is being honest about which decisions are deterministic (primary buttons need a `<button>` element with a focus ring) and which are genuinely open (should the primary navigation be a sidebar, a top nav, or command-palette-first?).

The confidence framework lives in the Open Questions section of the review. It does not belong in Issues — Open Questions are decisions to be made; Issues are problems to be fixed.

**When to use.** Token-system decisions (one accent or two; warm-neutral or cool). Primary navigation where multiple are defensible (sidebar vs top nav vs command-palette-first). Information architecture (group by entity or by workflow). Brand expression (warm-handmade or cold-precise; serif or sans for headlines). Hard-to-test interactions (drag-drop vs select-then-action; cmd-K vs a search input). The pattern: when reasonable senior designers could disagree and the choice meaningfully shapes downstream work, surface it.

**When not to use.** Trivial calls inside an established system (the system already says 16-pixel body text — do not surface options). Overwhelmingly correct answers (`<button type="submit">` is a hard rule; color-only status fails Universal Design 4a — these are not options). Decisions the user has already made. The threshold: if your top option is at 80 percent or higher and alternatives are clearly weaker, just pick.

**Format.** Two to four options, each with a rough confidence percentage that sums to roughly 100. Each option lists pros and cons in plain prose, not bullets — the reasoning is the point.

```
Open question: which navigation pattern fits this product?

Option A — Left sidebar with grouped sections (60% confidence)
  Pros: Familiar to admin and dense-product users; supports many sections without
  hiding them; standard pattern for the user's industry.
  Cons: Takes width away from the content; risks reading as a default if not
  signature-treated.

Option B — Top nav plus command palette (cmd+K) (30% confidence)
  Pros: Returns full width to content; signals "power user" register; reduces
  vertical real estate spent on navigation.
  Cons: Command palette must be discoverable for new users; not the right register
  for casual or weekly users.

Option C — Hybrid: minimal sidebar with command palette as primary action (10%)
  Pros: Combines the strengths of A and B.
  Cons: Two ways to do the same thing; more components to design and maintain;
  risks reading as indecisive.
```

**Calibration rule.** Percentages must be calibrated against outcomes, not assigned at random. If the user redirects on options you rated 80 percent or higher, you are overconfident — recalibrate the next batch downward. If the user accepts 30-percent options without question, you are underconfident — rate the next batch higher. Track this across the project. Calibrated confidence makes the framework useful; uncalibrated confidence is just numbers next to opinions.

---

## Light-mode review versus the full template

Not every review needs all eight sections. A two-line copy change does not need a Universal Design audit; a primary user flow does. Context-fit the format to the surface. Three modes:

**Light-mode review.** Single component, PR diff, tooltip copy, microcopy edit. Three sections: Context, Issues with severity tiers, References. Two hundred to five hundred words. Skip the audits, the score, the anti-defaultism scan. Running the full template on a microcopy edit teaches the team that reviews are bureaucratic, and they will avoid them.

**Sub-surface review.** A single screen inside a larger flow, a redesigned table inside a dashboard, a new modal inside an existing app. Four sections: Context, Issues, anti-defaultism scan, Next Steps. Skip the Universal Design audit if the surface is a small fragment of a larger flow audited recently — but cite the parent audit. Five hundred to twelve hundred words.

**Full template.** Primary user flow, new feature, system-level change, redesign, brand surface launch. All eight sections. Full citation discipline. Numeric score. Confidence framework where forks exist. Use when stakes are high and the surface will outlive the conversation.

Choose the level based on stakes and surface, not on how busy you are. A bad full-template review is worse than a good light-mode review — but a good full-template review is the gold standard for high-stakes work, and shortening it on the wrong surface is false economy. When unsure, ask.

---

## Brand versus product register

The eight sections are the same on a brand surface and a product surface. The dimension weights differ. On a brand surface — launch page, campaign landing, marketing hero — anti-defaultism and craft carry more weight because the user's task is to remember and feel; a generic-looking brand surface fails its job even if every Nielsen heuristic passes. On a product surface — dashboard, settings panel, bulk-edit table — heuristic compliance, accessibility, and hardening carry more weight because the user's task is to find and act, and a memorable but inefficient surface taxes every interaction. Surface the register in Context so the recipient knows which dimensions you weighted.

---

## Closing — the review is the artifact

The review is what survives the conversation. The screenshare ends, the Slack thread scrolls away, the meeting notes get filed in a Notion no one revisits. The review remains. Six months from now, a designer reading what you wrote will either trust the recommendation and act on it, or dismiss it and start over. Trust is earned by structure, citations, severity tiering, named tradeoffs, and the open questions you were honest enough to flag. Reviews that ground claims in heuristics and principles, admit uncertainty in Open Questions, reinforce what works, and triage with both Blocker–Note and P0–P3 — those reviews compound. The recipient learns to read them carefully because the format has earned it.

Write reviews that age well.
