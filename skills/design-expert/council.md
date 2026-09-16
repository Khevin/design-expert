# Council

How the design-gods are consulted, how they disagree, and how a disagreement becomes a decision. This file is the single source for every shape the council uses: the tier table, the brief, the seat prompt, the verdict block, the chair's rules, the output table, and the log line. `SKILL.md` points here; the modes call the council at one named gate each.

---

## Why a board that does not deliberate is a checklist

The first version of this skill consulted the pantheon by reading every designer file into the working context, extracting one principle per designer, and printing a table. It looked like a board. It behaved like a reading list. Fifteen files entered the same context that was about to make the decision, so the voices blurred into the reader's own; nothing was ever refused; no two designers were ever recorded disagreeing; and the log written afterwards counted consultations that had changed nothing. The usage log from four months of daily use shows the shape of the failure: two hundred and forty plan runs, each one loading fourteen thousand words of designers, each one producing agreement.

A council is different in three ways. Each seat reads only its own designer and the brief, so Tufte does not soften because Rams spoke first. Each seat must return a verdict in a fixed shape, so "I consulted Vignelli" cannot pass for a consultation. And a chair with written rules turns the verdicts into rulings, contested points, and recorded dissent, so the user is asked about the two things the room could not settle instead of being shown eighteen paragraphs of praise. The cost moves out of the working context and into parallel seats that cost little and finish together.

The council is also sized. Convening eighteen designers to approve a hover color is theater, and theater trains the user to skip the output. The tier table below is the whole discipline: small work gets a glance at the capsules, large work gets the room, and nothing in between gets to pretend.

---

## Tiers

`none` means no consultation. `capsule` means the main context reads the capsules in `design-gods.md` and speaks for the seats itself. `council` means parallel subagents and a chair when the active harness exposes delegation and its current instructions allow it. When parallel seats are unavailable or disallowed, downgrade `council` to `capsule` and continue; record the fallback in the trace.

| mode \ size | touch-up | polish | iteration | surface redesign | system redesign |
|---|---|---|---|---|---|
| plan | council, scoped to decisions | council, scoped to decisions | council, scoped to decisions | council, broad coverage | council, broad coverage |
| build | none | capsule 0–1 | capsule 3–5 | council | route to plan first; the build that follows runs capsule |
| review | none (light) | capsule 1 (light) | capsule 3 (sub-surface) | council (full) | council (full) |
| write / other | none | none | capsule 1–2 | capsule 3 | capsule 3 |

**Defaults, not quotas.** The counts in the table are starting points. Seat count, depth of reading, and response length are separate choices: a broad capsule pass can use more than five designers, while a narrow council can use fewer than seven. Expand when another seat covers an unresolved decision, a distinct user risk, or a meaningful opposing principle; stop when the next seat would repeat an existing contribution. Honor the user's time, output, and resource budget. State the scope and any consequential coverage gap in the trace.

**Seat selection.** For `capsule`, begin with the most relevant designers, often one to five. Load full designer files wherever the capsules leave important uncertainty, a load-bearing decision, or disagreement; there is no two-file ceiling. Keep the reading targeted. Capsule consultation does not spawn subagents or claim independent review.

For `council`, map the decisions to relevant expertise before dispatch. Rams, Norman, and Nielsen are useful starting lenses for restraint, mental models, and usability, not mandatory votes on every topic. Add specialists and a credible counterpoint where the tradeoff warrants one; do not fill empty chairs by index order. Broad plans may warrant the entire current pantheon; a scoped plan need not. Use only designers with maintained files and evidence for the relevant principle, not invented experts to reach a count.

The project setting `council: auto` (also the default when absent) follows this coverage rule. `council: tagged` keeps selection focused on the relevant tags and their documented aliases. `council: full` requests the whole current pantheon. Preserve an existing explicit setting; a smaller room or capsule fallback required by the user's budget or environment must be disclosed, not passed off as a full council.

**Surface tags.** Start with two to four discriminating tags, adding others when the brief crosses disciplines. These are retrieval aids, not an exhaustive vocabulary or proof of expertise. Use the vocabulary and routing aliases in `design-gods.md`; explain any semantic match not already documented there. Common routes: chart or metric → `#data-viz #information-design`; type → `#typography #typeface-design`; grid or layout → `#grid #systems`; icon, status, or empty state → `#icons #cognition`; identity or brand hero → `#branding #typography`; form, flow, settings, or errors → `#cognition #usability #heuristics`; live control or motion → `#interaction #direct-manipulation`; long-form → `#editorial #typography #grid`; token system or library → `#minimalism #systems #principles`; color, palette, or contrast → `#color #cognition`. A generic tag such as `#principles` alone does not establish domain authority for a veto.

---

## The brief

Before any seat is convened the main context assembles one brief. It is short on purpose: a seat that receives the whole project reads the project instead of the decision.

- `mode`: plan, build, or review.
- `size`: touch-up, polish, iteration, surface-redesign, system-redesign, or plan when a plan spans sizes.
- `register`: brand, product, or editorial.
- `surface`: one noun phrase.
- `surface_tags`: the relevant tags and any explicit alias mapping.
- `scene`: the scene sentence.
- `decisions`: stable numbered items, usually three to six per round. State each concisely, retaining the constraints needed to judge it; thirty words is a useful target, not a cutoff. A narrow brief can have one decision. Split a large brief by decision group without dropping unresolved issues.
- `focus_decision` (optional per seat): a specific `Dn` to assess when coverage would otherwise cluster around the same issue.
- `detail` (optional): compact, standard, or deep; a guide to useful explanation, not a word quota.
- `artifact`: `kind` (file, screenshot, or summary) and `ref` (an absolute path, or a focused summary, usually around three hundred words). Add explicitly named companion artifacts when comparison requires them; never send a directory to explore. Do not shorten away evidence needed for a sound verdict.

The initial decisions follow the mode. **Plan:** D1 the visual direction picked at Gate 3; D2 the layout candidates drafted for Gate 4 (the user's pick stays at Gate 4); D3 the type posture; D4 the density and elevation posture; D5 the proposed restrictions. **Build:** the Gate 8 directions, the layout pick, the signature element, the defaults to reject. **Review:** the HOW of each Blocker and Major, highest severity first. Add or omit decisions to match the actual brief and retain their IDs across rounds. When a consequential decision is unaddressed, assign it to an appropriate seat in a focused follow-up or explicitly mark it unreviewed; silence is not approval.

---

## Convening

Use the parallel-seat mechanism resolved in `harnesses.md`. In Claude Code, send one `Agent` call per seat with `subagent_type: "design-expert:council-member"` and `run_in_background: false`. In ChatGPT/Codex, spawn one subagent per seat within the concurrency budget and give each the seat prompt below plus the verdict rules; use the active collaboration tool without forcing a model override. Resolve the designer file to an absolute path before sending. Dispatch independent seats concurrently where capacity allows; independence comes from isolated briefs and evidence, not from pretending that every environment can run the whole room at once.

Do not exceed the active environment's concurrency limit. Dispatch independent seats together where possible. When the relevant room is larger, use bounded waves if the user's resource budget permits; keep the brief unchanged and withhold earlier verdicts from later seats to preserve independence. Otherwise use a smaller coverage-based room or capsule fallback and disclose the coverage difference. Do not spawn agents simply to satisfy a count.

The seat prompt, fields in this order:

```
COUNCIL SEAT
god_key: dieter-rams
god_file: <absolute path>/design-gods/dieter-rams.md
god_tags: #minimalism #principles #manifesto #materiality

BRIEF
mode: plan | build | review
size: touch-up | polish | iteration | surface-redesign | system-redesign | plan
register: brand | product | editorial
surface: <one noun phrase>
surface_tags: <relevant tags; aliases if needed>
scene: <scene sentence>
decisions:
  D1: <concise statement with material constraints>
  D2: ...

ARTIFACT
kind: file | screenshot | summary
ref: <absolute path> | <focused summary>

DEPTH
focus_decision: <Dn, or omit to let the seat choose>
detail: compact | standard | deep

RETURN exactly one verdict block. No prose outside it.
```

---

## The verdict

Each seat returns exactly one fenced block per round, with the same nine keys in this order. Keep a simple verdict compact; a nuanced tradeoff can use roughly 150–250 words, and a deep verdict around 400 words when needed. These are depth guides, not minimums or rejection thresholds. Expand further only to preserve decision-critical reasoning or evidence, never to fill a quota. Put the additional reasoning in `principle_applied`, `change`, and `evidence`, using indented continuation lines as needed; do not add decorative sections or change the schema.

```verdict
god: dieter-rams
decision_addressed: D4
verdict: revise
domain_match: false
principle_applied: As little design as possible
change: Drop surface-300; keep canvas, surface-100, surface-200 only.
evidence: Rams, Ten Principles for Good Design (Vitsoe), principle 10
confidence: 80
dissent_ok: true
```

`god` is the filename stem. `decision_addressed` is one `Dn`, or `none`, in which case `verdict` is `approve` and `change` is `none`; this is an abstention, not approval of the whole brief. Address `focus_decision` when assigned. `verdict` is one of `approve`, `revise`, `block`. `domain_match` requires a relevant specific tag or documented alias match supported by the designer's actual principles; explain that match in `principle_applied`. A broad tag alone is insufficient. `change` leads with an implementable action and a concrete value, behavior, or acceptance criterion; add necessary rationale and tradeoffs without a forty-word cap. `evidence` names the source in the designer file's Quotes or Sources and connects it to the decision; add citations when one cannot support the whole claim. Distinguish the documented principle from this seat's application of it. `confidence` is an integer from 0 to 100, a judgment rather than a measured probability. `dissent_ok: false` means "if I am outvoted, preserve my substantive dissent". A seat whose `god_file` cannot be read returns `verdict: approve`, `confidence: 0`, `evidence: file-missing`.

---

## The chair

The chair is the main context. Apply the protocol per decision D, with A, R, and B the counts of approve, revise, and block verdicts that address D, and n their sum. Count at most one current verdict per designer per decision; a follow-up replaces that designer's earlier verdict on the same decision, rather than creating another vote. Different decisions can receive separate blocks in separate focused rounds. The nine required fields are stable even when their text spans multiple lines.

1. A result that does not contain exactly one valid nine-key block, names an unknown decision, or carries `confidence: 0`, is excluded from every tally and listed under *Not counted*. Check the field types and allowed values; length alone does not invalidate a verdict. `decision_addressed: none` is an abstention and contributes to no decision's tally.
2. If n is zero, D is *Unaddressed*. If n is one, the lone verdict rules only at confidence 75 or above; below that it is recorded as *Advisory*, neither adopted nor asked, and the mode decides D by its own gates.
3. A domain veto is a `block` whose `domain_match` is true. If a veto is present, no domain-matched seat approved D, and no other change is incompatible with the veto's change, the ruling is **veto adopted**, marked as such. If a veto is present under any other condition, D is **Contested**.
4. If A is at least ⌈2n/3⌉, the ruling is **stands**.
5. If R plus B is at least ⌈2n/3⌉ and every change can be applied together (two values for one property are never merged), the ruling is **revised** with the merged changes.
6. Otherwise, ties included, D is **Contested**. Present a small set of meaningfully distinct options, usually two to four including "keep as stated". Group equivalent proposals, not incompatible ones. If confidence-weighted percentages help, label them as shares of council backing, not probabilities of correctness. Keep materially different minority options discoverable in the dissent or details instead of deleting them to fit the shortlist.
7. Seats on the losing side of a ruling are **Dissents**. A seat with `dissent_ok: false` prints its key, confidence, and change; a seat with `dissent_ok: true` prints its key only.
8. Ask about Contested decisions in manageable batches using the active question tool's limits, highest-impact first. Keep remaining decisions explicitly pending; never silently approve an option because the question UI ran out of space. Unaffected work may proceed within the user's scope, but a dependent change waits for the required choice. A user who overrules a veto is logged as `overruled-by-user`.

Print the result before the question, usually as a compact table. Around 250 words often suffices for a simple round, but expand to preserve material rulings, uncertainty, and dissent. Put extended seat reasoning in a detail section or the permitted decision log, rather than forcing the reader through every verdict. A longer council does not require a longer headline summary.

```
## Council: plan, product register, 18 seated, 2026-09-06

| Decision | Ruling | Tally |
|---|---|---|
| D1 warm-editorial direction | stands | 11 approve, 2 revise |
| D4 elevation | revised: drop surface-300 | 9 revise, compatible |
| D3 share-of-wallet pie | veto adopted (edward-tufte): ranked bars | 1 block, domain |

Contested (your call; share of council backing): D2 layout: rail-and-body 55% (6 seats), bento 30% (3), keep 15% (2).
Dissents: D1 massimo-vignelli (70): one display face, not two. D4 jonathan-ive.
Advisory: D5 tobias-frere-jones (68): Red Hat Text in cells, Display for the headline only.
Unaddressed: D6. Not counted: paula-scher (file-missing).
```

Rulings are adopted into the work without a question. Contested items become the question. Dissents are recorded in the output and, in plan mode, in `DECISIONS.md`, so a later reader knows the room was not unanimous.

---

## Capsule consultation

The light tier keeps the discipline without the room. Read the relevant capsules in `design-gods.md` and name the principle and decision each shapes: "Per Kare's warmth at low resolution, the status pill keeps a two-pixel inset so it reads at 11px." A sentence is often enough; use a short paragraph when the evidence, tradeoff, or exception needs it. Combine overlapping contributions without claiming they were independent verdicts. A designer's name without a concrete decision is not a consultation. Read deeper whenever the capsule cannot support the decision. Log consulted seats with `tier: capsule` and `verdict: none` when logging is permitted.

---

## Logging

Logging is optional operational memory, never a gate. Resolve the personal state root through `harnesses.md`; write only when that location is already writable within the active environment's permissions. The log is honest only when the keys are canonical and a consultation is appended atomically. The key is always the designer's filename stem. On a POSIX shell, the write can be one `printf`:

```bash
mkdir -p <personal-state-root> && printf '%s\n' \
'{"ts":"2026-09-06T14:02:11Z","god":"dieter-rams","command":"plan","project":"skill-tracker","tier":"council","verdict":"revise"}' \
'{"ts":"2026-09-06T14:02:11Z","god":"don-norman","command":"plan","project":"skill-tracker","tier":"council","verdict":"approve"}' \
>> <personal-state-root>/usage-log.jsonl
```

Line schema: `ts` ISO 8601 UTC; `god` stem; `command` one of plan, build, iterate, review, write, other; `project` the basename of the working directory; `tier` capsule or council; `verdict` approve, revise, block, none, or malformed. Inspect without jq:

```bash
grep -o '"god":"[^"]*"' <personal-state-root>/usage-log.jsonl | sort | uniq -c | sort -rn
```

The eighteen stems: `alan-cooper`, `bret-victor`, `charles-and-ray-eames`, `dieter-rams`, `don-norman`, `edward-tufte`, `jakob-nielsen`, `jan-tschichold`, `johannes-itten`, `jonathan-corum`, `jonathan-ive`, `massimo-vignelli`, `muller-brockmann`, `muriel-cooper`, `paul-rand`, `paula-scher`, `susan-kare`, `tobias-frere-jones`.

---

## Cost

Cost grows with the number of seats, artifact size, verdict depth, and follow-up rounds; parallel execution reduces elapsed time, not token cost. Start with the coverage and depth the decision needs, honor explicit user budgets, and expand only to answer a remaining question. Claude Code can use the dedicated `council-member` agent; ChatGPT/Codex uses bounded general subagents with the same narrow prompt. When delegation is unavailable or disallowed, use capsules and state that the review was not independent. The useful property is grounded disagreement and decision coverage, not a particular seat count or word count.
