# UX Copy

Buttons, notifications, labels, cells, titles, descriptions, errors, empty states, loading states, confirmations — the micro-copy that fills the interfaces design-expert builds and reviews. UX copy is the voice of the system speaking to the user during the work itself: short, clear, evidence-respecting, never marketing.

---

## The discipline

UX copy answers two questions at every touch: what is this, and what happens if I act on it. If either question is unanswered, the copy has failed. If either question requires more than a glance to answer, the copy is too long. The discipline is to do these two jobs with the fewest words and the most concrete verbs, in the user's vocabulary, never in the system's.

Strunk and White's "omit needless words" applies in full force here. Every preposition, every adjective, every modifier earns its place or gets cut. *"Submit your application"* loses to *"Apply."* *"Are you sure you want to delete this item?"* loses to *"Delete this item permanently."* The shorter version is rarely shorter for its own sake; it is shorter because every word in the longer version was carrying explanation the user didn't need to ask for.

UX copy is rarely allowed to be witty. Wit belongs to marketing copy and editorial work, where the reader has chosen to engage with the voice. UX copy lives inside the user's task — they're trying to do something, and the system's wit becomes friction. Save warmth for moments where the user is exploring (empty states) or celebrating (success states); use neutral, useful language everywhere else. Never use humor for failures, errors, or destructive confirmations.

---

## Patterns

The full pattern catalog with formulas and examples lives in `commands/write.md` as a numbered Steps workflow. Each Step describes a UX-copy pattern:

- **Button labels — verb plus object.** *"Save changes"* beats *"Save."* Never *"OK / Cancel / Submit / Continue."*
- **Error messages — WHAT / WHY / HOW.** What happened, why in user terms, how to recover. Three pieces, all required.
- **Empty states — acknowledge / explain / act.** Acknowledge the empty state, explain what fills it, give the verb that triggers filling.
- **Loading states — contextual copy.** *"Pulling June reports…"* beats *"Loading…"* beats *"Please wait…"*
- **Confirmations — only for irreversible actions.** Confirm destructive actions; trust the click everywhere else.
- **Length discipline.** Buttons under 20 chars. Headings under 60. Body under 280. The cap is calibrated to scanning attention, not absolute readability.

Load `commands/write.md` for the full Step-by-Step UX copy workflow with examples.

---

## Strunk and White applied to UX copy

The Elements of Style applies to UX copy with almost no caveats. The book's principles fit the UX-copy discipline exactly because UX copy is the most rule-honoring of the three voices.

**Where Strunk and White directly applies:**

- *"Use definite, specific, concrete language."* UX copy lives by this. Buttons name verbs; labels name objects; error messages name what happened. Abstractions kill UX copy.
- *"Omit needless words."* The single most-violated principle in template UX copy. Every "please," every "kindly," every "Are you sure that you want to," every "the following" is a candidate for cutting.
- *"Use the active voice."* UX copy is even stricter than Strunk and White on this. Every label, every error, every confirmation: active subject, active verb, named object. Passive voice in UX copy reads as evasion (*"Your account was suspended"* — by whom?), and evasion erodes trust.
- *"Do not break sentences in two."* UX copy benefits from short sentences but should still be grammatically complete sentences, not fragments-as-decoration.

**Where Strunk and White bends for UX copy:**

- *"Avoid contractions."* UX copy embraces them. *"You're"* beats *"You are."* *"Don't"* beats *"Do not."* Contractions read as the user's voice; non-contracted forms read as the system's voice. Modern UX copy uses contractions almost without exception unless the brand is explicitly formal.
- *"Use orthodox spelling."* UX copy sometimes uses brand-specific styling — Apple's *"iPhone"* (lowercase i), GitHub's *"GitHub"* (camel-case) — that violates orthodox capitalization but is required for brand consistency.
- *"Place a comma before a conjunction introducing an independent clause."* In short UX strings (button labels, alerts) commas often disappear because the string is short enough that pacing replaces punctuation. *"Save and continue"* doesn't need a comma; *"Save, and continue"* would feel formal-and-old.

The book is the discipline. The voice file is how the discipline gets applied to the writing context.

---

## Anti-slop reminders

UX copy is where AI-generated defaults are most visible. Strike from the vocabulary:

- *"Streamline,"* *"elevate,"* *"unleash,"* *"unlock,"* *"harness,"* *"transform,"* *"empower,"* *"leverage."* These are marketing verbs and they don't belong on buttons or in inline help. Replace with concrete domain verbs.
- *"Submit"* on every form button. Replace with the verb-plus-object pattern: *"Send invoice,"* *"Save changes,"* *"Create account."*
- *"Loading…"* and *"Please wait…"* as default placeholders. Replace with contextual loading copy: *"Pulling June reports…"* *"Generating your invoice…"*
- Em-dashes used as a rhythm crutch. UX copy should be short enough that em-dashes are rare; one per string at most. Excessive em-dashes are an AI-default tell.
- Title Case On Every Header. Switch to sentence case unless the brand explicitly chose Title Case.
- Round numbers in placeholder content. *"$1,000"* / *"100 users"* / *"50%"* / *"99.99% uptime"* — replace with specific irregular numbers.

See `anti-slop.md` § Content tells for the full catalog of UX-copy slop patterns.

---

## See also

- `commands/write.md` — the Step-by-Step UX copy workflow with full formulas and examples
- `anti-slop.md` § Content tells — the catalog of AI-generated UX-copy defaults to refuse
- `voices/long-form.md` — when the writing is editorial / case-study rather than micro-copy
- `voices/marketing/` — when the writing is advertising or brand voice (a landing page with a hero + CTAs uses marketing voice for the hero and UX-copy voice for the CTAs)
