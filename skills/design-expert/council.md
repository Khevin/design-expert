# Council

How the design-gods are consulted, how they disagree, and how a disagreement becomes a decision. This file is the single source for every shape the council uses: the tier table, the brief and its file, the seat prompt, the seat report and its verdict block, the chair's rules, the output table, the record, and the log line. `SKILL.md` points here; the modes call the council at one named gate each.

---

## Why a board that does not deliberate is a checklist

The first version of this skill consulted the pantheon by reading every designer file into the working context, extracting one principle per designer, and printing a table. It looked like a board. It behaved like a reading list. Fifteen files entered the same context that was about to make the decision, so the voices blurred into the reader's own; nothing was ever refused; no two designers were ever recorded disagreeing; and the log written afterwards counted consultations that had changed nothing. The usage log from four months of daily use shows the shape of the failure: two hundred and forty plan runs, each one loading fourteen thousand words of designers, each one producing agreement.

A council is different in three ways. Each seat reads only its own designer and the brief, so Tufte does not soften because Rams spoke first. Each seat must return a verdict in a fixed shape, so "I consulted Vignelli" cannot pass for a consultation. And a chair with written rules turns the verdicts into rulings, contested points, and recorded dissent, so the user is asked about the two things the room could not settle instead of being shown eighteen paragraphs of praise. The cost moves out of the working context and into parallel seats that cost little and finish together.

The council is also sized. Convening eighteen designers to approve a hover color is theater, and theater trains the user to skip the output. The tier table below is the whole discipline: small work gets a glance at the capsules, large work gets the room, and nothing in between gets to pretend.

---

## Tiers

`none` means no consultation. `capsule` means a small room: when the active harness exposes delegation and its instructions allow it, the one to five most relevant seats are spawned as real agents, on the seat model in § Seats and models, because a few seats cost little and their independence is real; when it does not, the main context reads the capsules in `design-gods.md` and speaks for the seats itself, and says so in the trace. `council` means a larger room of parallel seats and a chair under the same condition. When parallel seats are unavailable or disallowed, both tiers fall back to capsules read in context; record the fallback in the trace.

| mode \ size | touch-up | polish | iteration | surface redesign | system redesign |
|---|---|---|---|---|---|
| plan | council, scoped to decisions | council, scoped to decisions | council, scoped to decisions | council, broad coverage | council, broad coverage |
| build | none | capsule 0–1 | capsule 3–5 | council | route to plan first; the build that follows runs capsule |
| review | none (light) | capsule 1 (light) | capsule 3 (sub-surface) | council (full) | council (full) |
| write / other | none | none | capsule 1–2 | capsule 3 | capsule 3 |

**Defaults, not quotas.** The counts in the table are starting points. Seat count, depth of reading, and response length are separate choices: a broad capsule pass can use more than five designers, while a narrow council can use fewer than seven. Expand when another seat covers an unresolved decision, a distinct user risk, or a meaningful opposing principle; stop when the next seat would repeat an existing contribution. Honor the user's time, output, and resource budget. State the scope and any consequential coverage gap in the trace.

**Seat selection.** For `capsule`, begin with the most relevant designers, often one to five. Load full designer files wherever the capsules leave important uncertainty, a load-bearing decision, or disagreement; there is no two-file ceiling. Keep the reading targeted. A capsule read in the main context does not claim independent review; a small room of real seats may.

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
- `detail` (optional per seat): the length of the seat's report. Compact gives each part its shortest honest form; standard is a page of about 1,000 words and the default; deep gives each part its full reasoning, up to 2,000 words. Deep is for the decisions the room cannot settle without a seat's full reasoning.
- `artifact`: the evidence the room may need, one entry per file: `kind` (file, screenshot, or summary), `ref` (an absolute path, or a focused summary, usually around three hundred words), and a note on what it shows. Never a directory to explore. Do not shorten away evidence needed for a sound verdict.

The initial decisions follow the mode. **Plan:** D1 the visual direction picked at Gate 3; D2 the layout candidates drafted for Gate 4 (the user's pick stays at Gate 4); D3 the type posture; D4 the density and elevation posture; D5 the proposed restrictions. **Build:** the Gate 8 directions, the layout pick, the signature element, the defaults to reject. **Review:** the HOW of each Blocker and Major, highest severity first. Add or omit decisions to match the actual brief and retain their IDs across rounds. When a consequential decision is unaddressed, assign it to an appropriate seat in a focused follow-up or explicitly mark it unreviewed; silence is not approval.

**The brief file.** Write the brief once, as Markdown with the fields above as headings, to `.design-expert/reviews/<date>-<slug>-brief.md` in the project root, and give every seat its path instead of a copy. A room of eighteen would otherwise get the same thousand tokens eighteen times, and the chair would type every copy: in a September 2026 run, seven copies took the chair 87 seconds to write while the seats themselves needed about 25. A seat spends the same tokens reading the file as reading an inline brief, so what the seats cost is unchanged; what falls is the chair's dispatch, to a few lines per seat. The file holds the brief only, with no verdicts, rulings, or earlier votes, so seats stay independent. A follow-up round appends its new decisions to the same file and keeps every earlier ID. When the project directory cannot be written, put the brief in each seat prompt as a `BRIEF` block with the same fields.

**Evidence per seat.** The brief lists all the evidence; each seat prompt names the part its focus decision needs. Give the full page for a decision about layout, hierarchy, or density, and a crop at native size or the one option in question for a decision about a single component. A screenshot is the heaviest thing a seat opens, about 5,000 tokens each in measured runs, so three of them outweigh a seat's designer file and report together. A file left off a seat's list is never reported as examined.

---

## Convening

Use the parallel-seat mechanism resolved in `harnesses.md`, after writing the brief file (§ The brief). In Claude Code, send one `Agent` call per seat with `subagent_type: "design-expert:council-member"` and `run_in_background: false`, and no `model` parameter. In ChatGPT/Codex, spawn one subagent per seat within the concurrency budget and give each the seat prompt below plus § The seat report; let the seats run on the active model unless the user names another. Resolve the designer file, the brief file, and every evidence file to absolute paths before sending. Dispatch independent seats concurrently where capacity allows; independence comes from isolated briefs and evidence, not from pretending that every environment can run the whole room at once.

Do not exceed the active environment's concurrency limit. Dispatch independent seats together where possible. When the relevant room is larger, use bounded waves if the user's resource budget permits; keep the brief unchanged and withhold earlier verdicts from later seats to preserve independence. Otherwise use a smaller coverage-based room or capsule fallback and disclose the coverage difference. Do not spawn agents simply to satisfy a count.

## Seats and models

The chair is the main context and runs on the session's model. Every seat, in a council or in a capsule's small room, runs on Sonnet 5.5 at high effort. A seat reads one designer file and one brief and returns one bounded block, which is work that model does well at high effort, and one model for every seat keeps a large room affordable without ranking some votes below others.

In Claude Code the agent file pins both, `model: claude-sonnet-5-5` and `effort: high`. Pass no `model` on the `Agent` call: a per-call model overrides the file, and the call accepts only aliases, which name a family rather than a version (`sonnet` resolves to Sonnet 5 in current Claude Code, not 5.5). There are no lead or supporting seats and no step-down; every seat is equal, so every vote carries the same weight. When the user names another model for the seats, honor it and name it in the trace. To move every seat at once, change the pin in `agents/council-member.md`.

The seat prompt, fields in this order:

```
COUNCIL SEAT
god_key: dieter-rams
god_file: <absolute path>/design-gods/dieter-rams.md
god_tags: #minimalism #principles #manifesto #materiality
brief_file: <absolute path>/.design-expert/reviews/<date>-<slug>-brief.md
focus_decision: <Dn, or omit to let the seat choose>
detail: compact | standard | deep
evidence: <absolute paths of the files this seat's focus decision needs>

REPORT: write the seven-part report your instructions describe, then the verdict block. Length follows detail.
```

When the brief file cannot be written, a `BRIEF` block carrying the brief's fields replaces the `brief_file` line; `evidence` stays.

---

## The seat report

Each seat returns one report per round, written for a reader who has not seen the seat's work and ending in one fenced block. The block is the vote and the report is the argument: the chair tallies from the block, and the user reads the report. A bare block gave the user nothing to understand and gave the seat nowhere to put what it saw, so the reasoning was squeezed into three YAML values or left out.

The report has seven parts in this order. The headline is a `##` line and every other part sits under a `###` heading of the name given here.

1. **Headline.** `## <Designer name> · <Dn> · <Approve, Revise, or Block>`, then one sentence saying what should happen and the strongest reason. The chair quotes it to the user.
2. **What I examined.** Each file or screen opened, by name, and anything the brief lists that was not opened.
3. **What I see.** The design as it stands through this lens: what works and should be kept, then what breaks the principle, each tied to a place on the artifact.
4. **The principle.** The named principle in the designer's documented words, cited to the file's Quotes or Sources; then the step from the principle to this artifact, marked as the seat's own application; and why the domain match holds.
5. **What to change.** Numbered, highest impact first. Each item opens with an action and carries a concrete value, behavior, or acceptance criterion. For `approve`, what to keep and the guard that keeps it.
6. **Tradeoffs and doubts.** What the change costs, what would make the verdict wrong, and the strongest case against it.
7. **Beyond my decision.** One line for each other decision on which the lens has a view: the view itself, marked *not voted*. A decision with no view has no line.

Length follows `detail`: compact gives each part its shortest honest form, standard is a page of about 1,000 words, deep gives each part its full reasoning up to 2,000 words. In six test seats on one brief, reports ran 830 to 1,370 words, about 1,200 to 2,000 tokens, or 5% to 7% of the roughly 27,000 tokens a seat spends (§ Cost). The tiers moved the length less than the wording suggests, so treat `detail` as a nudge and ask for `deep` on the decisions that need the full argument.

The report ends with the block, nine keys in this order, one key per line:

```verdict
god: dieter-rams
decision_addressed: D4
verdict: revise
domain_match: false
principle_applied: As little design as possible
change: Drop surface-300, keeping canvas, surface-100 and surface-200 only; reuse surface-200 for the raised card
evidence: Rams, Ten Principles for Good Design (Vitsoe), principle 10
confidence: 80
dissent_ok: true
```

`god` is the filename stem. `decision_addressed` is one `Dn`, or `none`, in which case `verdict` is `approve` and `change` is `none`; this is an abstention, not approval of the whole brief. Address `focus_decision` when assigned. `verdict` is one of `approve`, `revise`, `block`; block only when shipping the decision as stated would violate the designer's principle in a way a user would feel. `domain_match` requires a relevant specific tag or documented alias match supported by the designer's actual principles, explained in the report's principle part. A broad tag alone is insufficient. `principle_applied` names one principle. `change` lists the numbered changes as action and value only, joined by semicolons, so the chair can check that they apply together. `evidence` names the sources only; the report's principle part connects them to the decision and separates the documented principle from the seat's application. `confidence` is an integer from 0 to 100, a judgment rather than a measured probability. `dissent_ok: false` means "if I am outvoted, preserve my substantive dissent". A seat whose `god_file` cannot be read sends a one-sentence report and a block with `verdict: approve`, `confidence: 0`, `evidence: file-missing`.

The report and its block travel in one message, the block last. Where the harness delivers a seat's result through a hand-over tool, the whole report goes through it; text written anywhere else never reaches the chair. In Claude Code the seat's instructions are `agents/council-member.md`; in ChatGPT/Codex the chair gives each subagent this section with the seat prompt. The two describe the same report, so change them together.

---

## The chair

The chair is the main context. Apply the protocol per decision D, with A, R, and B the counts of approve, revise, and block verdicts that address D, and n their sum. Count at most one current verdict per designer per decision; a follow-up replaces that designer's earlier verdict on the same decision, rather than creating another vote. Different decisions can receive separate blocks in separate focused rounds. The nine required fields are stable even when their text spans multiple lines.

1. A result is valid when its report ends in exactly one `verdict` fence holding the nine keys with allowed values and a known decision. A report with no valid block that still states its verdict, decision, and confidence in its headline is repaired once: the chair sends that seat a one-line message asking for the block (`SendMessage` to the seat's agent ID in Claude Code, a follow-up message elsewhere), because the seat's reading is already paid for. Where the harness cannot continue a seat, or the repair fails, the result is not counted. An unrepaired result, a result naming an unknown decision, or a result with `confidence: 0` is excluded from every tally and listed under *Not counted*, and its report still goes into the record. Length alone never invalidates a report. When the block and the headline disagree, the block is the vote and the record says so. `decision_addressed: none` is an abstention and contributes to no decision's tally.
2. If n is zero, D is *Unaddressed*. If n is one, the lone verdict rules only at confidence 75 or above; below that it is recorded as *Advisory*, neither adopted nor asked, and the mode decides D by its own gates.
3. A domain veto is a `block` whose `domain_match` is true. If a veto is present, no domain-matched seat approved D, and no other change is incompatible with the veto's change, the ruling is **veto adopted**, marked as such. If a veto is present under any other condition, D is **Contested**.
4. If A is at least ⌈2n/3⌉, the ruling is **stands**.
5. If R plus B is at least ⌈2n/3⌉ and every change can be applied together (two values for one property are never merged), the ruling is **revised** with the merged changes.
6. Otherwise, ties included, D is **Contested**. Present a small set of meaningfully distinct options, usually two to four including "keep as stated". Group equivalent proposals, not incompatible ones. If confidence-weighted percentages help, label them as shares of council backing, not probabilities of correctness. Keep materially different minority options discoverable in the dissent or details instead of deleting them to fit the shortlist.
7. Seats on the losing side of a ruling are **Dissents**. A seat with `dissent_ok: false` prints its key, confidence, and change; a seat with `dissent_ok: true` prints its key only.
8. Ask about Contested decisions in manageable batches using the active question tool's limits, highest-impact first. Keep remaining decisions explicitly pending; never silently approve an option because the question UI ran out of space. Unaffected work may proceed within the user's scope, but a dependent change waits for the required choice. A user who overrules a veto is logged as `overruled-by-user`.

Print the result before the question, in this order: the table; one line per seat, its headline sentence quoted as written and led by the designer's name and the decision; then the Contested, Dissents, Advisory, Unaddressed, and Not counted lines. The reader hears every voice in one line each, and never receives the chair's paraphrase in place of a seat's own words. Around 250 words of table and rulings plus a line per seat suffices for a simple round; expand to preserve material rulings, uncertainty, and dissent. A longer council does not require a longer headline summary. The full reports go to the record, below, and the summary links it.

```
## Council: plan, product register, 18 seated, 2026-09-06

| Decision | Ruling | Tally |
|---|---|---|
| D1 warm-editorial direction | stands | 11 approve, 2 revise |
| D4 elevation | revised: drop surface-300 | 9 revise, compatible |
| D3 share-of-wallet pie | veto adopted (edward-tufte): ranked bars | 1 block, domain |

What each seat said
- dieter-rams · D4: Drop surface-300; three tonal levels carry a page this dense.
- edward-tufte · D3: Replace the share-of-wallet pie with ranked bars on one zero baseline.
- massimo-vignelli · D1: Keep the direction, and use one display face for the whole system.
- (one line for each remaining seat)

Contested (your call; share of council backing): D2 layout: rail-and-body 55% (6 seats), bento 30% (3), keep 15% (2).
Dissents: D1 massimo-vignelli (70): one display face, not two. D4 jonathan-ive.
Advisory: D5 tobias-frere-jones (68): Red Hat Text in cells, Display for the headline only.
Unaddressed: D6. Not counted: paula-scher (file-missing).
Full reports: .design-expert/reviews/2026-09-06-skill-tracker-council.md
```

Rulings are adopted into the work without a question. Contested items become the question. Dissents are recorded in the output and, in plan mode, in `DECISIONS.md`, so a later reader knows the room was not unanimous.

### The record

The chair writes one record per round beside the brief, `.design-expert/reviews/<date>-<slug>-council.md`, and links it in the summary. It holds the table and rulings first, then every seat's report verbatim in seat order, block included, then the dissents. The reports are what the user needs in order to understand what the room thought, and the seats were paid to write them, so a summary that keeps only the tally leaves that reasoning unread. The record is written after the last seat returns, so no seat can read another's report. When the project directory cannot be written, the chair keeps the reports in context and prints any of them in full when the user asks.

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

Cost grows with the number of seats, the evidence each one opens, the length of the report asked for, and follow-up rounds; parallel execution reduces elapsed time, not token cost. A seat's context in the September 2026 runs was about 8,000 tokens of floor set by the harness and the agent file, about 2,000 for its designer file, about 5,000 for each screenshot it opened, and its report. The floor is not ours to trim, and the screenshots are usually the largest share, so the saving that counts is handing each seat only the evidence its focus decision needs (§ The brief). The brief file changes what the chair writes, not what a seat reads. Every seat runs on the one pinned model whatever the session runs on, so the levers are the room's size, the evidence, the depth asked for, and the rounds. Start with the coverage and depth the decision needs, honor explicit user budgets, and expand only to answer a remaining question. Claude Code can use the dedicated `council-member` agent; ChatGPT/Codex uses bounded general subagents with the same seat prompt and § The seat report. When delegation is unavailable or disallowed, use capsules and state that the review was not independent. The useful property is grounded disagreement and decision coverage, not a particular seat count or word count.
