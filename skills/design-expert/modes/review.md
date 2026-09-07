# Review mode

Loaded by `SKILL.md` triage when the mode is review: the work exists and the user wants notes, not changes. This mode reviews a Figma frame, a deployed surface, a PR diff, a component, or a screenshot, and produces a structured document with severity tiers, citations to Nielsen heuristics and Universal Design principles, an anti-defaultism scan against `anti-slop.md` that honors the project's own design system, and a numeric audit across five dimensions. A review is not feedback; feedback is a hallway walk-by. A review is evidence-grounded evaluation that survives the conversation. Six months from now someone reads it and either trusts the recommendation or starts over. Trust is earned by the structure below.

Triage has already read memory, discovered the design system, confirmed the register, sized the request, and settled the one question this mode used to ask itself: notes or change. A request that wanted change went to build mode. What arrives here wants a document.

## When triage picks this mode

Review runs when the question is "is this good enough to ship, and if not, what must change" and the user wants the answer in writing. Triggers: a deployed URL the team is uncertain about, a Figma frame ready for sign-off, a PR diff with new UI, a stakeholder screenshot, a component being promoted into the system, "critique this", "what do you think", "notes only". Running this on a sketch produces noise; running it on a shipped surface produces gold.

## Review depth

Depth follows the scope of what is reviewed, which triage sets in place of a change size, never time pressure. **Light** (one component, a microcopy edit, a small diff) is three sections, Context, Issues with severity tiers, References, at two to five hundred words, with a capsule consultation of one seat at most. **Sub-surface** (one screen inside a larger flow) is four sections, Context, Issues, anti-defaultism scan, Next Steps, at five hundred to twelve hundred words, citing the parent audit, with a capsule consultation of three seats. When no parent audit exists, walk Universal Design 7 in one line per principle rather than skipping it, and say in Context that no parent audit exists. **Full** (a primary flow, a new feature, a brand launch, a system-level change) is all eight sections from `output-format.md` with full citation discipline, the numeric score, the confidence framework, and the council at Step 5½. A bad full review on a microcopy edit teaches the team that reviews are bureaucratic; a light review on a primary flow ships broken work.

## The review workflow, ordered

The order matters because each step gates the next. Anti-defaultism runs first, after the design system is honored, because polishing generic work only produces polished slop. The ten lenses confirm the design is justified at all. Universal Design 7 follows because three failures mean the design is broken regardless of polish. Heuristic scoring layers usability evidence on top. The five-dimension audit collapses everything into a numeric snapshot. The council, at full depth, rules on the fixes. The grid audit checks the foundation under all of it. Hardening, distillation, and onboarding are passes for what breaks under stress, what can be removed, and what is missing. Citations bind the document; the template is the container.

### Step 0: Intent

Resolved in triage. "Review this" with an artifact and no change verb was asked once (a written review, or proposals then the change); "critique", "what do you think", and "notes only" came here without a question; "make it better" and "what would you change" went to build mode as iterate. If, while reviewing, the user asks for the change to be made, stop, hand back to triage as iterate at the same size, and let build mode run the proposals; do not start editing from inside a review.

### Step 1: Design system, register, then the anti-defaultism scan

Register is resolved in triage; state it in one line with its source ("register: product, per `leads-semanais.PRODUCT.md`"). The same tell triggers different verdicts in different registers: a purple-blue gradient is a Blocker on product, a Note on brand, a Major on editorial; a centered hero is acceptable on brand and broken on editorial; Carbon-density rows are required on product and oppressive on editorial. Without the register every verdict is wrong half the time.

Before opening `anti-slop.md`, read the mandated patterns triage collected from the discovered design system (memory's `mandated_patterns`, sourced from `CLAUDE.md`, `system.md`, or `DESIGN.md`). A pattern the system mandates is never a finding against the surface. When the scan meets one, file a single Note per project, addressed to the system's owner and citing the mandate ("3px left accent per `CLAUDE.md` § AI Suggestion / Lais Patterns; system-mandated; consider whether the system still wants it"), and move on. The exemption covers the mandated form only; the numbered eyebrow beside a mandated stroke is filed normally. The AI-assistant-card cliché (stroke, icon tile, uppercase eyebrow, brand CTA, sparkle) is an automatic Blocker on any AI-attribution surface unless the system mandates its traits, in which case it is the Note above.

Then open `anti-slop.md` and walk all nine categories. The gating question: would a stranger walking past register this as machine-shaped before registering the product? If yes, no heuristic tagging rescues it; the design needs structural rethinking. Visual and CSS tells, color tells, typography tells, layout tells, grid tells, motion tells, content tells, iconography tells, and the structural and rhetorical tells: numbered section markers, decorative side-stripes, fragment triads, reversal formulas, dash-label headers. If reviewing code, run the grep recipes from `anti-slop.md`; if reviewing a frame or screenshot, scan visually. Cite category and register-conditional verdict together ("[anti-slop, Structural tells; product register; Major]"). Three or more categories with major tells in the wrong register means the design is generic; surface it as a Blocker in the executive summary. For editorial register, also load `styles/editorial.md` § Anti-patterns.

### Step 2: The ten-lens decision checklist

Walk the ten lenses from `foundations.md`: information architecture, hierarchy, the user goal as a verb, pre-solution pain, business context, effort, impact versus effort, strategy fit, agent harmony, and objective justification per visible decision. Surface only lenses that fail or cannot be answered with confidence. Lenses 3, 4, and 10 are mandatory gates: no verb means the design is decorated, not designed (Blocker); no named pain means not enough users were talked to (Major, request research); a visible decision that cannot be justified through a goal, a pain, an NNg article, a Universal Design principle, a stated intent, or a business constraint is taste, and taste is not a citation. Lenses that need user input belong in Open Questions.

### Step 3: Universal Design 7 audit

Walk the seven principles from `foundations.md` with a per-principle pass, fail, or not-applicable line, citing failures by sub-letter: "fails 4a, color-only status on the inbox row"; "fails 7c, 32-pixel checkbox target". Three or more failures means the design is broken regardless of polish; say so in the executive summary. Principle 4a, redundancy of color plus label plus icon, is the most-invoked failure in product UI. Universal Design failures compound silently: a color-only indicator looks fine in screenshots and quietly excludes the people who never file a ticket.

### Step 4: Nielsen heuristic scoring

Score each of the ten heuristics from `foundations.md` on the 0–4 scale in `output-format.md`: 0 fails fundamentally, 1 breaks at the first edge case, 2 works but unrefined, 3 clearly competent, 4 genuinely excellent. Sum to a subtotal out of forty. Name the pattern across violations: a surface failing 1, 4, and 9 has a "no feedback, inconsistent labels, useless errors" character that names one systemic problem, not three bugs. Honesty is the hard part. A 2 is the median. If everything scores 3 to 4 you are being polite, and the score has lost its signal; recalibrate downward when in doubt.

### Step 5: The five-dimension audit

Score heuristic compliance (the Step 4 sum normalized), anti-defaultism, craft, accessibility, and hardening, each 0–4, per `output-format.md`. Surface the band, the total, and the per-dimension scores in the executive summary. Bands: 18–20 excellent (suspect overscoring if reached often), 13–17 good, 8–12 adequate, 4–7 poor, 0–3 critical.

### Step 5½: Council

Full depth only, per `council.md`. Assemble the brief: mode review, size, register, the surface, two to four surface tags, the scene sentence if a brief exists, the artifact (the file, the screenshot, or a summary, never a directory), and the decisions: the HOW of each Blocker and Major found so far, highest severity first, at most six. Seat the three permanent seats plus every designer whose tags intersect the surface tags, seven at minimum, in one message. Run the chair. Rulings become the HOW of the corresponding Issues, cited with the seat ("HOW, per council: ranked bars; veto adopted, edward-tufte"). Contested decisions become Open Questions carrying the chair's percentages as the confidence framework. Dissents are recorded in the References section. Write the log in one call. At light and sub-surface depth, a capsule consultation at Step 1 replaces the room: seats by tag, one sentence per seat.

### Step 6: Grid audit

Open `grids.md`, and `design-gods/muller-brockmann.md` if the surface is system-level. The grid is the deepest layer; almost every craft failure roots in a grid that was never committed to or quietly abandoned. Walk the seven checks in order and cite each failure to `grids.md` § Common failures. **Was a grid committed to?** No documented column count, container width, gutter and margin tokens, or baseline means improvisation; Blocker on any medium-or-larger surface. **Is it honored?** Inline pixel values (`padding: 18px`, `gap: 22px`) are receipts that the token system was bypassed; `grep -rE '(margin|padding|gap):\s*[0-9]+px' src/` excluding the tokens file; Major over five hits, Minor at one or two. **Is the column count right for the content?** Twelve is the default and the wrong answer for surfaces that only use halves and quarters. **Is the register right?** Fluid grids on brand, fixed on product; cite `design-gods/muller-brockmann.md` for the symmetric case, `design-gods/jan-tschichold.md` for the asymmetric. **Off-grid alignment** by four to seven pixels: overlay a grid and look for drift; Major on primary surfaces, Minor on secondary. **Breakpoints by content or by device?** 375/768/1024/1280 were chosen by device; recommend renaming by what changes. **Are grid breaks deliberate and documented?** Undocumented breaks are Major. A surface failing three or more checks scores no higher than 1 on craft.

### Step 7: Hardening

Walk the stress dimensions from `output-format.md` § The 5-dimension audit (hardening) and `interaction.md` § states and responsive behavior. Text overflow: the longest username, `min-width: 0` on flex children, clamping where fixed height demands it. Internationalization: thirty to forty percent slack for German, fifteen to twenty for Portuguese, logical properties so RTL flips, `Intl` formatting over hardcoded formats. Error handling: a designed state per HTTP class, 401 to login, 403 explaining the gap, 404 with a way back, 429 naming the limit, 500 offering support. Edge cases: hundred-character names, emoji, RTL, a thousand rows, offline. Validation: debounced search, disabled double-submit. Accessibility resilience: keyboard across the whole flow, reduced motion honored. Performance: `backdrop-blur` confined to fixed and sticky elements; perpetual-motion components isolated. A surface that works only on the happy path is a demo.

### Step 8: Distillation

Apply the question from `craft.md` § Distillation: what can be removed without loss? Decoration that carries no meaning. The third color when two would do. The animation that does not communicate. The card that is a `div` pretending to organize. The icon that adds nothing to its title. The eyebrow shouting the section's name above a section that plainly is that. The `01` beside a heading that already leads. Cite the elements and what removing them simplifies. The squint test catches most: blur, and if an element vanishes and the page still reads, it was noise.

### Step 9: Onboarding and empty states

Are empty states present, with WHAT, WHY, and ACTION rather than "No data available" centered in a card? Are tooltips contextual and dismissable? Are tours capped at three to seven steps? Can a new user begin without documentation? The happy-path-screenshot failure is most visible here: the design works for a returning power user with data loaded and breaks when a new user opens it cold. Surface every state designed only for the happy path and propose the missing variants.

### Step 10: Citations

Every claim links to a heuristic, a Universal Design principle, an entry in `references/nng-articles-index.md`, an `anti-slop.md` category, or the project's own design system by file and section. Cite inline in short form: `[Heuristic 4]`, `[UD 4a]`, `[NNg, "Modal Dialogs in Forms"]`, `[anti-slop, Structural tells]`, `[system.md § Depth]`. Include the strength tag from `foundations.md` where it matters. Reviews are not commands; they are arguments with their evidence attached.

### Step 11: Output

Render in the eight-section format from `output-format.md` for a full review, or the light or sub-surface subset. Context names what was reviewed, in what channel, against what brief, at what depth, in which register, and against which design system. What Works gives three to five concrete positives. Issues are structured blocks: severity and title, WHAT, WHY with citation, WHERE, HOW. Open Questions carry the confidence framework, including the council's contested items. Then the Universal Design audit, the anti-defaultism summary (naming the system-mandated Notes separately), Next Steps in P0 through P3, and References including council dissents. Severity and priority travel together: Blocker is P0, Major P1, Minor P2, Note P3. A review that files a Blocker as P2 ships broken work.

Before delivering, run `self-review.md` on the review itself: anti-defaultism in the recommendations (no `01/02/03` in any HOW, no side-stripe suggested as a fix, no fragment triads in the prose), register confusion, voice mismatch, honest cut candidates. When triage routed here from a "handoff" request, append the handoff artifact from `handoff.md` for the direction memory names.

## What this mode produces

A structured review document, ready for the designer who built the surface, the PM who scoped it, the engineer who will fix it, and the reviewer six months from now. It cites the project's own system as readily as it cites Nielsen. It is the artifact, not the dialog.

## Closing

The review is the artifact. Six months later, someone reads what you wrote and either trusts it or dismisses it. Trust comes from structure, citations, severity tiers, named trade-offs, the open questions you flagged, the system you honored, and the score you were brave enough to write down even when it was a 9 out of 20. Write reviews that age well.
