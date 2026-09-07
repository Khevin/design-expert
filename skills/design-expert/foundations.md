# Foundations

A manifesto for the design-expert skill. Read this before reviewing or building anything. The rest of the skill points back to it.

---

## Why principles outlive patterns

Patterns change every eighteen months. Glassmorphism arrives, neumorphism arrives, bento grids arrive, then leave. None of them tell you whether your interface is good — only whether it looks contemporary, which is a smaller and stranger question. A design built on patterns ages on the schedule of the patterns it borrowed. A design built on principles ages on the schedule of human cognition, which has not noticeably updated in fifty thousand years.

Nielsen published his ten usability heuristics in 1994. They still hold. The Universal Design seven principles were drafted in 1997, before mobile, before touch, before voice, before AR. They still hold. They hold because they are not statements about screens — they are statements about how people perceive, decide, recover from mistakes, and tolerate friction. The interface is not the website or the app or the watch face; the interface is the contract between the human's working memory and the system's response time.

This file is the floor of the design-expert skill. The ten heuristics give you the vocabulary of usability — every review tags failures by number. The Universal Design principles give you the floor of inclusivity — fail three and the design is broken regardless of polish. The ten-lens framework is the gating tool that prevents "it's clean" from substituting for a reason. The R/G/RoT/OPN/EX/R&D tags keep you honest about claim strength. Together they let you cite an article, name a principle, and survive the question "why." If a recommendation cannot be tied to one of these foundations, it is taste, and taste is not a citation.

---

## The 10 Nielsen Usability Heuristics

The heuristics are not commandments. They are the failure modes most likely to make a real human curse at a real screen. Use them in two ways: as a checklist when reviewing existing work, and as guard rails when proposing new work. When citing a violation, prefix the line with the heuristic number and name in brackets, name the specific element that fails, and propose the cheapest fix. One actionable issue per line. Do not dump all ten on every review — only the ones that fail.

The heuristics apply across all three registers — brand, product, and editorial — but their weight differs. A **brand** surface — a campaign, a launch page, a marketing hero — can deliberately violate consistency and standards (heuristic 4) for memorability. A **product** surface — a dashboard, a settings panel, a bulk-edit table — cannot. An **editorial** surface — a case study, a long-form essay, a museum-grade informative page — applies the heuristics with the reading-attention contract in mind: aesthetic-and-minimalist (heuristic 8) lifts heavily because the type and grid carry meaning; consistency (heuristic 4) holds within the piece (one chapter format, one figure caption format) but is not required across pieces (each piece can have its own typographic personality). Where the register changes the weight of a rule, this file says so explicitly. See `styles/editorial.md` for the editorial-register discipline; see `commands/build.md` Gate 2 for the register-detection procedure.

### 1. Visibility of system status

Humans tolerate latency only if they know the system heard them. A spinner is not status; "uploading 3 of 7 files, 2.4 MB remaining" is status. Silent UI is broken UI — the user's working memory is now occupied tracking whether the click registered, displacing whatever they were trying to do. The heuristic links directly to Nielsen's response-time research: under one second, no special feedback needed; under ten seconds, show a determinate progress indicator with an estimate; over ten seconds, give the user something else to do. The classic failure is a button that visibly does nothing for two seconds — every user clicks it again, and now a duplicate-submission bug masquerades as a UX bug.

The rule: every action longer than one perceived second must show progress; every state change must be announced. Loading skeletons beat blank screens; determinate progress beats indeterminate spinners.

### 2. Match between system and the real world

The system speaks the user's language, not the developer's. "Workflow node" is developer language; "approval step" is user language. Vocabulary, metaphors, and conventions should match the user's domain — accountant, teacher, broker, nurse — not the engineering team's data model. The failure mode is the database leaking through the UI: surfaces named after tables ("entities," "objects," "records"), errors that quote stack traces, navigation that mirrors the API rather than the task. When the user has to translate between their mental model and yours, you have introduced a tax that compounds across every interaction.

The rule: borrow the vocabulary of the user's industry. If a real estate agent says "listing" and the product says "asset," the product is wrong no matter how cleanly the data model justifies "asset."

### 3. User control and freedom

Humans make mistakes constantly. The interface either treats this as normal or punishes the user for being human. Undo, redo, exits, cancellable destructive actions, "back" buttons that actually go back — these are not features, they are the baseline of respecting agency. A modal with no obvious dismiss is a small prison. A bulk-delete with no undo is a trapdoor. A wizard that forgets your inputs when you press back is sadism.

The rule: every action is reversible until explicitly committed; every committed action that cannot be reversed must be flagged before commitment with friction proportional to the consequences. Cite: NNg, "User Control and Freedom (Heuristic #3)" [G].

### 4. Consistency and standards

The same word means the same thing across the product. The same component looks the same on every surface. Platform conventions are honored unless there is a strong reason. Consistency is not a rule about beauty — it is a rule about working memory. Labeling "Save" on one screen and "Confirm" on another forces the user to learn a dialect twice. Putting the primary action bottom-right on Tuesday and top-right on Wednesday forces the user to look. Looking is friction.

This is where brand and product registers diverge most sharply. A brand surface — launch page, campaign — can break consistency deliberately, because memorability outranks efficiency. A product surface cannot. If you find yourself violating heuristic 4 in a dashboard, you are making the product more brand, and the user is paying the cost. Cite: NNg, "Maintain Consistency and Adhere to Standards (Heuristic #4)" [G].

### 5. Error prevention

The best error message is the one that never had to be shown. Confirmations on destructive actions, type-to-confirm on irreversible actions, format validation before submit, sensible defaults that make the safe path the easy path. The failure mode is the system that accepts garbage input and explodes on the next screen — or worse, propagates the bad data silently, leaving someone weeks later to figure out how it got in.

The rule: validate at the moment of input, not the moment of submit. Make destructive actions look destructive — different color, different placement, mandatory confirmation. "Delete" should never be one pixel away from "Save."

### 6. Recognition rather than recall

Recognition (seeing a familiar option) is far easier than recall (typing or remembering). Working memory holds about four items reliably; every recall task spends one of those slots. Show the options, show the previous selection, surface the recently used, the saved, the suggested — anything that converts a recall task into a recognition task.

The trade-off is aesthetic minimalism (heuristic 8). Showing every option always is recognition, but it is also noise. The usual answer is progressive disclosure: surface the common, defer the rare. Cite: NNg, "Memory Recognition and Recall in User Interfaces" [G].

### 7. Flexibility and efficiency of use

Power users diverge from novices within weeks. The interface that serves both has accelerators invisible to the novice and discoverable to the expert: keyboard shortcuts, command palettes, bulk actions, saved filters, configurable views. The failure is two failures — either a "simple" interface that infuriates the daily user, or a "powerful" interface that frightens the new user. The good interface puts the simple path on the main road and the power path one keystroke off it.

The rule: every frequent action gets a keyboard shortcut; every batchable multi-step task gets a bulk action; every repeatedly filtered list view gets a saved filter. Cite: NNg, "Flexibility and Efficiency of Use (Heuristic #7)" [G].

### 8. Aesthetic and minimalist design

Every visual element competes for attention. Decoration with no informational role is noise, and noise taxes the user's ability to find what they came for. This is the heuristic that justifies removing the gradient, killing the second accent color, deleting the icon that adds nothing. It is also the heuristic polish-obsessed designers over-apply, stripping useful affordances in the name of cleanliness. The rule is not "less" — the rule is "every element earns its place."

The companion bias is the Aesthetic-Usability Effect: users perceive aesthetically pleasing design as more usable than it actually is. Treat it as a warning, not a permission slip — beauty can mask broken usability, but it cannot fix it. Cite: NNg, "The Aesthetic-Usability Effect" [R&D].

### 9. Help users recognize, diagnose, and recover from errors

"Something went wrong" is broken. An error message must name what happened, why, and what the user can do — in plain language, in the user's domain, with concrete next steps. The failure modes are blaming the user ("Invalid input"), blaming the system in unactionable ways ("ERR_RPC_TIMEOUT_5092"), and describing the symptom without proposing a fix. Every error is a moment of frustration; the message is the difference between recovery and abandonment.

The rule: name the problem in user terms, name the cause if useful, name the next action. "We could not save your invoice because the payment date is in the past. Pick a date today or later, then try again." Cite: NNg, "10 Design Guidelines for Reporting Errors in Forms" [G].

### 10. Help and documentation

The best help is contextual: a tooltip on the field that needs explaining, an inline definition where jargon appears, a "what is this?" link that opens a focused panel. Searchable, task-focused, with concrete steps. The failure mode is the standalone help center that documents features instead of tasks — the user does not want to know how the "filter component" works, they want to know how to find unpaid invoices from last quarter. Feature-language documentation fails the user even when the prose is well-crafted.

The rule: in-context tooltips beat separate help pages; task-organized articles beat feature-organized articles. Cite: NNg, "Help and Documentation (Heuristic #10)" [G].

### Using the heuristics in practice

Walk the heuristics in order during a review, but do not produce ten-bullet recaps. Surface only the failures, prefix each with `[Heuristic N (Name)]`, name the element, propose the fix. The canonical articles for deeper reading are "10 Usability Heuristics for User Interface Design," "How to Conduct a Heuristic Evaluation," and "10 Usability Heuristics Applied to Complex Applications." Cite article URLs from the index, not from memory.

---

## The Universal Design 7 Principles, translated to digital

Universal Design is the floor of inclusivity, not the ceiling. Ronald Mace and a working group at North Carolina State drafted the principles in 1997, targeting physical product and architectural design — door handles, faucets, sidewalks. They predate the iPhone, the touchscreen, the screen reader as a mainstream tool. They still apply because they describe how diverse human bodies and minds approach a designed thing, not how a particular display medium renders it. If a design fails three or more of these, it is broken regardless of how polished it looks. Surface that directly to the user.

The most-invoked principle in real reviews is 4a — Perceptible Information through redundant modalities. "Color alone for status" is the single most common accessibility failure in product UI, and the fix (add an icon and a text label alongside the color) is cheap and immediate. Whenever you see a red dot meaning "overdue," a green dot meaning "active," or any color-only state cue, cite 4a and propose the redundant encoding. When citing, name the principle by number and sub-letter, as in "fails 4b — insufficient contrast" or "fails 7c — touch target under 44 by 44 pixels."

### Principle 1: Equitable Use

The design is useful and marketable to people with diverse abilities. Provide identical means of use whenever possible, equivalent when not. Do not segregate or stigmatize. The digital failure mode is the "accessibility mode" toggle that moves screen-reader users to a degraded UI — separate is not equal, and the equitable path should be the default path. CAPTCHA puzzles with no audio or cognitive alternative fail this principle. The cheapest fix is to design the equitable path first and stop treating accessibility as an opt-in second-class experience.

### Principle 2: Flexibility in Use

The design accommodates a wide range of preferences and abilities — choice in methods of use, left- and right-handed access, facilitated accuracy, and adaptability to the user's pace. The digital failure mode is the form that auto-advances and prevents re-checking, the modal with a countdown that forces a fast decision, the touch target placed for one-handed reach on only one side. Adaptability to pace is the most-violated sub-principle in modern UI — interfaces increasingly assume the user is fast, attentive, and uninterrupted, which describes no actual user.

### Principle 3: Simple and Intuitive Use

The design is easy to understand regardless of experience, knowledge, language skills, or current concentration. Eliminate unnecessary complexity. Be consistent with user expectations. Accommodate a wide range of literacy. Arrange information by importance. Provide effective prompting and feedback. Digital failures: jargon-heavy labels, decorative animations that overshadow the primary action, silent success states, "innovative" navigation patterns that violate platform convention without payoff. Innovation in navigation is almost always a tax on the user; reserve it for cases where the conventional pattern truly fails.

### Principle 4: Perceptible Information

The design communicates necessary information regardless of ambient conditions or sensory ability. Use redundant modalities — pictorial, verbal, tactile. Provide adequate contrast. Maximize legibility. Differentiate elements describably. Provide compatibility with assistive technology. This is the most-cited principle in real reviews. The most common failure is color-only status indication: a red dot meaning "overdue" with no icon and no text label. Color-blind users, monochrome printers, grayscale captures, and ambient-light failures all break this encoding. The fix is redundancy — color plus label plus icon.

Body text below WCAG AA contrast (4.5:1 normal, 3:1 large and graphical) fails 4b. Icon-only navigation with no label or tooltip fails 4a and 4d. Custom controls that do not expose ARIA roles fail 4e — the screen reader cannot announce them, so they do not exist for blind users.

### Principle 5: Tolerance for Error

The design minimizes hazards and the adverse consequences of accidental or unintended actions. Arrange most-used elements for easy access; isolate or shield hazardous ones. Provide warnings. Provide fail-safe features. Discourage unconscious action in tasks that require vigilance. The digital failure is destructive actions placed adjacent to common actions, in the same color and the same size — "delete" six pixels from "save," both gray, both small. Confirmation dialogs that train the user to click through (one appears for every action, including innocuous ones) fail 5d; reserve confirmation friction for truly destructive actions, and use type-to-confirm for the truly irreversible.

### Principle 6: Low Physical Effort

The design can be used efficiently and comfortably with minimum fatigue. Translated to digital: bulk actions for repeated work, keyboard alternatives to drag-and-drop, autosave on long forms, no hover-only menus on touch devices. The most common failure is the table that hides bulk actions behind per-row menus, forcing N clicks instead of one. The cheapest fix is a multi-select with a bulk-action toolbar.

### Principle 7: Size and Space for Approach and Use

Appropriate size and space for approach, reach, manipulation, and use, regardless of body size, posture, or mobility. Translated to digital: touch targets at minimum 44 by 44 pixels (Apple HIG and WCAG 2.5.5); critical CTAs within thumb reach on mobile, not in the top corners; modals that allow keyboard and screen-reader navigation around them; toasts that do not vanish in three seconds with a tiny dismiss button. Tiny targets fail 7c. Top-right CTAs on tall mobile screens fail 7b.

### Translating physical principles to digital

The original principles target physical objects and architecture. The translation below maps the most common physical concepts to their digital counterparts so that "right-handed access" or "grip size" do not get dismissed as irrelevant on a screen.

| Physical concept | Digital equivalent |
|---|---|
| Right- or left-handed access (2b) | Touch target placement for both thumb-zones; left- and right-aligned variants |
| Reach (7b) | Thumb-zone and pointer distance; Fitts's Law applied to pointer travel |
| Grip size (7c) | Touch target ≥ 44 × 44 px; spacing between adjacent targets |
| Neutral body position (6a) | Avoid forced precision; allow long-press, voice, keyboard, mouse equivalents |
| Sensory limitations (4e) | Screen reader, switch control, voice control, high-contrast modes — never disabled by custom controls |
| Stigma (1b) | "Easy mode" toggles that visibly degrade the UI are stigmatizing — design the equitable path as the default |

---

## The 10-Lens Decision Framework

A checklist exists because defaults sneak in when you skip questions. Without one, every decision collapses to "it's clean" or "it's standard" — the two phrases mediocrity uses to smuggle itself into a product. The ten lenses below force reasoning to be explicit and traceable. Each lens is a question, a surface to inspect, a test to confirm, and a citation to reach for.

The lenses are ordered; each gates the next. If you cannot answer lens 3 (user goal), do not move to lens 6 (effort) — go back and ask. Lenses 3, 4, and 10 are mandatory gates: if you cannot answer them, stop. Lenses 1, 2, 5, 6, 7, 8, 9 are required for any non-trivial change but can sometimes be answered with documented assumptions when the user is unavailable.

### Lens 1: Information Architecture

Ask what the structure of the space is and why it is the right structure. Surface the top-level groupings, their relationships (sibling, parent-child, cross-cutting), and the vocabulary used to label each. Test by reading the IA aloud as a sentence — "Customers, then Subscriptions, then Plans" works; "Workspace, then Modules, then Hub" probably does not. Run a card sort with five plausible items; if they are not findable in three clicks, the IA is wrong. Cite Rosenfeld and Morville's *Information Architecture for the Web* and NNg's "3 Common IA Mistakes (All Due to Low Information Scent)."

### Lens 2: Information Hierarchy

Ask what is first, what is last, and why the visual order matches cognitive priority. Surface the first thing the user's eye lands on, the visual weights (biggest, boldest, most colored), the implicit reading path. Test with the squint test — blur your eyes; if a less-important element wins, the hierarchy is broken. Test with the remove test — cover the top third of the screen and check whether the user can still understand what to do. Cite "F-Shaped Pattern of Reading: Misunderstood, But Still Relevant" and Hick's Law for primary action choice.

### Lens 3: Main user goal — mandatory gate

Ask what verb the user is here to do. Surface the single sentence: "The user opens this surface to ___." If the answer is "use the dashboard" or "manage their account," you have not found it — push deeper. *Approve a pending invoice. Diagnose why a campaign underperformed. Schedule the next standup.* The verb test: the primary action button's label should match the verb. If the verb is "approve" and the button says "Submit," either the IA or the verb is wrong. If you cannot articulate the verb, stop and ask.

### Lens 4: Main pain points pre-solution — mandatory gate

Ask what was painful or broken before this design existed. Surface the one to three most-cited user complaints from research, support tickets, sales calls, or stakeholder interviews, and the current workaround — the spreadsheet, the Slack message, the manual export, the call to a colleague. The "would they uninstall a competitor for this?" test: if the new solution does not materially relieve the named pain, the design is decoration. If you cannot name the pain, you have not talked to enough users — stop and ask.

### Lens 5: Business context

Ask why this is being built now, what the constraint is, who the stakeholder is. Surface the deadline and what is driving it; team capacity; the strategic narrative ("ship to keep customer X" versus "explore a new market"); the blast radius if it goes wrong. If the proposal would take six weeks and the team has two, the proposal is wrong even if it is beautiful — go back to scope. Internal and disposable means the bar is "useful enough"; customer-facing and load-bearing means the bar is much higher.

### Lens 6: Development effort and human validation cost

Ask how many hours of build, review, QA, and sign-off this consumes. Surface an effort score — S (under one day), M (one week), L (one month), XL (a quarter); who needs to validate before merge (design review, accessibility audit, legal, product, customer success); whether automated tests can cover it. An XL design with no clear customer outcome is almost always a defaultism trap dressed as ambition. Ask "what is the smallest thing that ships?" and propose that first.

### Lens 7: Impact versus effort

Ask whether this is leverage or churn. Surface a 2×2: high impact + low effort means ship now; high + high means stage and ship the smallest viable slice first; low + low means ship if truly low-effort, otherwise skip; low + high means do not ship and document why. If you cannot articulate the impact concretely — "better UX" is not an articulation — the impact is unmeasured. Push for a measurable proxy: time-to-task, error rate, support-ticket volume, NPS, conversion.

### Lens 8: Strategy fit

Ask how this connects to the broader roadmap. Surface the strategic theme; adjacent surfaces this design must coexist with — IA, type, color, density should harmonize; the next two or three surfaces likely to be built. Test with the "two-surfaces-from-now" test: will the patterns established here scale, or will they need to be rewritten?

### Lens 9: Agent harmony

Ask whether this contradicts any other skill, agent, or convention already in the user's environment. Look in `~/.claude/skills/` for installed skills; read their SKILL.md files. Look in `~/.claude/projects/<project>/memory/MEMORY.md` for accumulated preferences. If the recommendation contradicts an installed skill, defer to the installed skill unless there is a documented reason to override, and surface the conflict. Specific conflicts to watch for: fonts that conflict with the project's brand standards; visual treatments that violate the `interface-design` skill's surface-elevation rules; mixed icon families on the same product; emojis as UI; pie or donut charts; anything other than IBM Carbon for enterprise or dense-data surfaces.

### Lens 10: Objective justification per design decision — mandatory gate

For *every* placement, color, font, icon, size, position, and interaction, ask what the reason is. This is the hardest lens, and the one that catches the most generic output. Apply this filter to every visible decision in the proposal. "It's clean" is not a reason — clean compared to what, and why is clean correct here? "It's standard" is not a reason — standard for whom, and why is standard correct here? "It works" is not a reason — works for what, compared to what alternatives?

A valid reason connects the decision to a user goal (lens 3), a pain point (lens 4), an NNg article, a Universal Design principle, an empirical research finding, a stated intent (warm/cold, dense/spacious, calm/loud), or a constraint from business context (lens 5). If you cannot justify a decision through one of those lenses, do not make it yet. Either gather more context, or surface the uncertainty as an options list with confidence percentages.

### Proposal output structure

When proposing a design, structure the response so the lenses are visible and reasoning is auditable. The same structure is used for post-build reviews.

```
## Context
1. IA            5. Business context
2. Hierarchy     6. Effort (S/M/L/XL)
3. User goal     7. Impact vs. effort
4. Pain points   8. Strategy fit
                 9. Agent harmony

## Proposal
[Direction]

## Decisions and reasoning
- [Decision]: [reason — cited to NNg / UD / interface-design rule]

## Open questions
- [Where confidence < 70%, list options with %]
```

---

## Citation strength: R / G / RoT / OPN / EX / R&D

Claim strength matters because quoting an opinion as a rule destroys credibility. NNg publishes at different strength levels, and the citation format should reflect which one you are leaning on. When the user asks "where did this rule come from?" and you have tagged it correctly, the answer is one click away. When you have miscited a Norman opinion piece as if it were the ten heuristics, the user notices and the rest of your review loses weight.

**R — Rule.** Essentially non-negotiable. The ten heuristics, Response Time Limits (0.1s / 1s / 10s), Trustworthiness's four credibility factors, Mental Models. Cite as authority.

**G — Guideline.** A strong recommendation backed by NNg research, with caveats for context. Most NNg articles fall here. "Maintain Consistency and Adhere to Standards (Heuristic #4)" is G — strong, but a brand surface can deliberately violate it for memorability.

**RoT — Rule of Thumb.** A useful default that fails in specific contexts. Apply unless there is a documented reason not to. "Primary action bottom-right of the form" is RoT — usually correct, but locale and platform can flip it.

**OPN — Opinion or Argument.** Norman or Nielsen advocating a position, sometimes against an industry trend. The Mobile-First critique and the Liquid Glass critique are OPN. Cite as expert opinion, not as proven research.

**EX — Example or Case Study.** Demonstrative, not prescriptive. "Usability Heuristics Applied to Board Games" is EX — illustrates the heuristics outside screens but does not define a new rule.

**R&D — Research finding or quantitative data.** Empirical results from eyetracking, usability tests, surveys. Often the backbone of a Guideline or Rule but not itself a directive. The Aesthetic-Usability Effect is R&D.

When uncertain, default to `G?` with a question mark suffix, and verify before quoting it as a hard rule. Citation format in a review:

```
[Heuristic 4 (Consistency and Standards)] The "Save" button is labeled "Save" on the
form view but "Confirm" on the modal. Pick one.
Cite: NNg, "Maintain Consistency and Adhere to Standards (Heuristic #4)" —
https://www.nngroup.com/articles/consistency-and-standards/ [G]
```

Universal Design principles use the same format: `[Universal Design 4a]` followed by the issue and the fix.

---

## How these compose in practice

The ten heuristics are the floor of usability. The Universal Design seven principles are the floor of inclusivity. The ten-lens framework is the gating tool that converts both into a defensible proposal. Together they turn a design review from a taste argument into an evidence-based critique.

A real review walks the lenses in order, surfacing only the heuristics and Universal Design principles that fail, citing each by number and by article. The proposal section names a direction. The decisions-and-reasoning section ties every visible choice — placement, color, font, icon, size, interaction — back to a user goal, a pain point, a cited principle, a stated intent, or a business constraint. Where confidence drops below 70 percent, list options with percentages and ask the user to pick.

The hard rules in the user's environment compose with these foundations rather than competing with them. One icon library at the system level. IBM Carbon is the component baseline for enterprise and dense-data interfaces. The project's locked typeface (if any) holds across every surface unless explicitly overridden. No emojis as UI, ever — emojis as state indicators fail Universal Design 4a (meaning does not survive grayscale or screen readers) and Nielsen heuristic 4 (emoji rendering varies per platform). No pie or donut charts — angular comparison is harder than linear, and a horizontal bar chart almost always beats a pie.

The brand-versus-product register is the final compositional move. Both honor the heuristics and Universal Design floors. Both run the ten-lens framework. The difference is weight: brand surfaces can deliberately violate consistency (heuristic 4) and aesthetic-minimalist (heuristic 8) for memorability, because the user's task on a brand surface is to remember and feel. Product surfaces cannot — the user's task is to find and act, and every cycle spent on memorability is stolen from efficiency. When in doubt about the register, ask. When in doubt about a citation, default to `G?` and verify the article before presenting.

This is the floor. Build above it. Never below it.
