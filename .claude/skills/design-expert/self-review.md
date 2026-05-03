# Self-Review

A discipline for reviewing your own work before declaring it done. Loaded at the end of medium-to-long iterations, builds, and reviews to catch the failures that the gate-driven workflow missed and to ship work that survives a senior designer's scrutiny. Adapted from Impeccable's polish, review, and critique skills, plus the design-expert plugin's own assessment patterns.

The principle: the version of you that produced the work is not the right reviewer for it. The version of you who reads the work an hour later is closer; the version who reads it tomorrow is closer still. Self-review is the discipline of becoming that later version on demand — through a structured walk through anti-slop tells, the four craft tests, register-conditional verdicts, and an honest cut-list.

---

## When to run self-review

Run self-review at the end of:

- **Iteration** (3–5 alternatives explored, one picked, executed)
- **Surface redesign** (full screen rebuilt)
- **System redesign** (multiple surfaces, design system)
- **Long-form writing** (case studies, blog posts, magazine pieces)

Skip self-review for:

- **Touch-up** (single property change)
- **Polish** (one component refined) — the polish IS itself the review

For polish-sized work, the four craft tests (swap, squint, signature, token) from `craft.md` are sufficient. Self-review adds layers above those tests for when the work touches more than a single component. See `craft.md` § Iteration as a category for the sizing taxonomy.

---

## The self-review walk

Walk through these in order. Each step is a separate question; each question deserves a real answer, not a default *"yes."*

**1. The anti-slop self-scan.**
Run the grep recipes from `anti-slop.md` § Self-audit grep recipes against the output you just produced. Pure black backgrounds, purple-violet 135-degree gradients, glassmorphism on non-fixed surfaces, three-equal-cards layouts, *"Lorem ipsum,"* *"John Doe,"* round numbers like 99.99%, marketing verbs like *"Streamline / Elevate / Unleash,"* em-dash overuse, Title Case On Every Header. Each match deserves either a justification or a cut. If you can't justify against user goal, brand register, or data semantics, it's a default; cut it.

**2. The four craft tests.**
Apply the tests from `craft.md` § The four craft tests:

- *Swap test:* replace the typography with your usual default (Inter, San Francisco, etc.). Does anything change? If no, the type is a placeholder, not a decision.
- *Squint test:* blur the screen. Does hierarchy still read? If no, hierarchy is incidental, not visual.
- *Signature test:* name five elements that could only exist on this product. If you can't name five, the design is interchangeable.
- *Token test:* read your variable names. Do they sound like this product's world or like any product? Generic names mean intent didn't reach the implementation layer.

Each test is fast (under 60 seconds). Each is also unforgiving — these are the same tests a senior designer would apply during code review. Failing any one is recoverable; failing two is the signal that the work needs another pass before shipping.

**3. Register-conditional verdict.**
Check the work against the register declared in `PRODUCT.md` (or implied by the brief). The same tell triggers different verdicts in different registers — purple gradient is acceptable on brand, disqualifying on product, misguided on editorial. If you're not sure what register the work is in, that itself is a finding: register ambiguity poisons every other verdict, and shipping work without a confident register classification means the user's design decisions can't be audited consistently afterward.

**4. Voice consistency.**
If the work includes copy, check the voice against the relevant `voices/<voice>.md` file. UX copy follows the verb-plus-object pattern, errors follow WHAT/WHY/HOW, never humor for failures. Long-form follows Work&Co tone — plain, active, evidence-led, decision-walks visible. Marketing follows the chosen ad-lord file (Lois for spectacle, Bernbach for honesty, Gossage for conversation, Ogilvy for research). Mixed surfaces (landing page with hero + CTAs + body) compose three voices on one page; check each piece against its own voice rules, not against a generic *"good copy"* register.

**5. Image-rhythm honesty.**
If the work uses images, check actual aspect ratios against the rhythm you planned. Has the inventory shifted materially since the brief was written? (Per `layouts.md` § Layout is iterative.) If yes, return to Gate 3 and re-run the layout-pattern filter. The most common image-rhythm failure: filename suggested one ratio (mock5 looked like a horizontal hero based on its name), reality was different (mock5 was actually vertical). Catching this at self-review time is recoverable; missing it means shipping a layout that fights its imagery.

**6. Honest cut-list.**
Walk the work and ask: *what would a senior designer cut?* List the candidates explicitly. The most common honest cuts:

- A figure that adds nothing the prose didn't already say
- A KPI metric that isn't a real outcome (*"0 → 1 design system documented"* reads as filler)
- A pull quote that's an aphorism rather than a real quote
- A section header that announces what the body is about to say
- An animation that the page works fine without
- A color that's there because the brand has the color, not because the content needed it
- A paragraph that opens with *"So,"* or *"Look,"* or *"Here's the thing"*
- A buzzword the brief didn't ask for (*"seamless," "elevate," "transform"*)

Cut three things. If you can't cut three things, the work is either truly tight or you're not looking honestly. Try again.

**7. Final polish — the micro-improvements.**
With everything above passed, walk the work one more time looking for the small things only the third reading would catch: a misaligned element by 1–2 pixels, a hover state that doesn't quite match the active state, a focus ring that's the wrong color, a gap that should be 16px and is 14px, a typo, a hyphenation issue, a color that prints OK on white but fails on the darker section. Polish is what separates *"done"* from *"shipped."* Most failed work fails not because of structural mistakes but because of an accumulation of micro-failures the third reading would catch and the first reading missed.

---

## What self-review produces

A short report — three bullet lists, no paragraph wrapping:

- **Cuts** — three or more things cut from the work, named explicitly with reason
- **Holds** — three or more things held against expected pushback, named with rationale
- **Risks** — one or two things you're shipping that you're aware aren't quite right, named with the trade-off and the follow-up plan

The report is for the user to read alongside the work. It demonstrates that the self-review actually happened and surfaces decisions the user might want to revisit before signing off. Without the report, self-review becomes a private discipline that the user can't verify.

Example report from a recent case-study build:

- *Cuts:* (1) The "0 → 1 documented design system" KPI — not a real measurable outcome; pulled. (2) The decorative section divider in chapter 2 — added length without adding meaning. (3) The hero subtitle's third sentence — over-explained what the visual already said.
- *Holds:* (1) The 5-row KPI block (vs. trimming to 3) — each KPI carries a distinct outcome category and the block is the chapter's evidence anchor. (2) The cinematic break with full-bleed paper-warm band — adds vertical scroll cost but earns the reveal. (3) The peer-voiced "we picked the slower path" decision-walk in chapter 2 — risks reading as humble-brag but earns the trust the trade-off claim depends on.
- *Risks:* (1) The image-rhythm assumes the user has one strong vertical mockup; if they swap to a horizontal one, the chapter-1 split breaks. Follow-up: monitor image inventory at iteration time per `layouts.md` § Layout is iterative.

---

## When to skip parts of the walk

The walk is a maximum, not a minimum. For shorter work:

- **Iteration size:** run steps 1, 2, 6 only (anti-slop, four tests, cut-list). Steps 3–5 apply only when register / voice / images are explicit parts of the work.
- **Surface redesign:** run all seven steps.
- **System redesign:** run all seven steps and add a cross-surface consistency check (does the design system hold across all rebuilt screens? Are tokens, components, and patterns reused as designed, or did the build accidentally introduce one-off variants?).

For pure code refactor work without visual output, only step 1 (anti-slop scan, applied to the code) is mandatory. Other steps fold into normal code-review discipline.

---

## How self-review fits into the sub-skills

`commands/build.md` Gate 11 (Present and offer to save) — runs self-review before presenting the work, surfaces the cuts/holds/risks alongside the build output. The build is not "done" until self-review has happened.

`commands/review.md` final step — adds self-review even when the user-facing output is review-only. The reviewer reviews their own review for anti-defaultism, register confusion, voice mismatch, and honest cut-candidates before delivering it to the user.

`commands/plan.md` Gate 9 (HARD stop after brief confirmation) — self-review applies a lighter form: scan PRODUCT.md and DESIGN.md for honest cuts before declaring the brief done. Pillars over three? Restrictions wishy-washy? Persona constraints contradictory? Catch these before they become downstream constraints in the build.

`commands/write.md` Step 10 (Final sweep against anti-slop) — already overlaps with self-review step 1; the rest of the self-review walk applies when the writing is long-form (case study, blog post, manifesto) rather than micro-copy.

---

## See also

- `craft.md` § The four craft tests — the source of step 2.
- `craft.md` § Iteration as a category — sets the size threshold for whether self-review applies.
- `anti-slop.md` § Self-audit grep recipes — the source of step 1.
- `output-format.md` — for review-time formatting; self-review uses simpler bullet-list output.
- Impeccable plugin's `polish.md`, `review.md`, `critique.md` — the source material this file synthesizes. Read those files for adjacent disciplines (the impeccable polish/review/critique trio operates at a slightly different abstraction; this file collapses them into one workflow specific to design-expert's sizing taxonomy).
