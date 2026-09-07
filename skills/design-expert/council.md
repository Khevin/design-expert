# Council

How the design-gods are consulted, how they disagree, and how a disagreement becomes a decision. This file is the single source for every shape the council uses: the tier table, the brief, the seat prompt, the verdict block, the chair's rules, the output table, and the log line. `SKILL.md` points here; the modes call the council at one named gate each.

---

## Why a board that does not deliberate is a checklist

The first version of this skill consulted the pantheon by reading every designer file into the working context, extracting one principle per designer, and printing a table. It looked like a board. It behaved like a reading list. Fifteen files entered the same context that was about to make the decision, so the voices blurred into the reader's own; nothing was ever refused; no two designers were ever recorded disagreeing; and the log written afterwards counted consultations that had changed nothing. The usage log from four months of daily use shows the shape of the failure: two hundred and forty plan runs, each one loading fourteen thousand words of designers, each one producing agreement.

A council is different in three ways. Each seat reads only its own designer and the brief, so Tufte does not soften because Rams spoke first. Each seat must return a verdict in a fixed shape, so "I consulted Vignelli" cannot pass for a consultation. And a chair with written rules turns the verdicts into rulings, contested points, and recorded dissent, so the user is asked about the two things the room could not settle instead of being shown seventeen paragraphs of praise. The cost moves out of the working context and into parallel seats that cost little and finish together.

The council is also sized. Convening seventeen designers to approve a hover color is theater, and theater trains the user to skip the output. The tier table below is the whole discipline: small work gets a glance at the capsules, large work gets the room, and nothing in between gets to pretend.

---

## Tiers

`none` means no consultation. `capsule` means the main context reads the capsules in `design-gods.md` and speaks for the seats itself. `council` means parallel subagents and a chair.

| mode \ size | touch-up | polish | iteration | surface redesign | system redesign |
|---|---|---|---|---|---|
| plan | council (all 17) | council (all 17) | council (all 17) | council (all 17) | council (all 17) |
| build | none | capsule 0–1 | capsule 3–5 | council | route to plan first; the build that follows runs capsule |
| review | none (light) | capsule 1 (light) | capsule 3 (sub-surface) | council (full) | council (full) |
| write / other | none | none | capsule 1–2 | capsule 3 | capsule 3 |

**Seat selection.** For `capsule`, seat the designers whose `Tags:` line intersects the brief's `surface_tags`, up to five. Load a full designer file only when the decision is load-bearing (it sets a token, grid, layout, or type role that later work inherits) or when two capsules disagree, and never more than two full files. No subagents. For `council` in build and review, always seat `dieter-rams`, `don-norman`, and `jakob-nielsen`; add every designer whose tags intersect `surface_tags`; if the room is under seven, add seats in index order until it reaches seven; the cap is seventeen. For `council` in plan, seat all seventeen unless the project record says `council: tagged`, in which case plan uses the same tag-filtered room as build and review. Plan surfaces are broad, a tag filter would save several seats, and a filter is a place where the working context can talk itself down; the record setting exists so the owner makes that trade once, on purpose, rather than the room making it under pressure.

**Surface tags.** Fix two to four in the brief from this map: chart or metric → `#data-viz #information-design`; type → `#typography #typeface-design`; grid or layout → `#grid #systems`; icon, status, or empty state → `#icons #cognition`; identity or brand hero → `#branding #typography`; form, flow, settings, or errors → `#cognition #usability #heuristics`; live control or motion → `#interaction #direct-manipulation`; long-form → `#editorial #typography #grid`; token system or library → `#minimalism #systems #principles`.

---

## The brief

Before any seat is convened the main context assembles one brief. It is short on purpose: a seat that receives the whole project reads the project instead of the decision.

- `mode`: plan, build, or review.
- `size`: plan, iteration, surface-redesign, or system-redesign.
- `register`: brand, product, or editorial.
- `surface`: one noun phrase.
- `surface_tags`: two to four tags from the map above.
- `scene`: the scene sentence.
- `decisions`: three to six numbered items, each as stated and under thirty words.
- `artifact`: `kind` (file, screenshot, or summary) and `ref` (an absolute path, or a summary of at most three hundred words). Never a directory.

The decisions are fixed per mode. **Plan:** D1 the visual direction picked at Gate 3; D2 the layout candidates the main context drafted for Gate 4 (draft them before convening; the user's pick stays at Gate 4); D3 the type posture; D4 the density and elevation posture; D5 the proposed restrictions. **Build:** the Gate 8 directions, the layout pick, the signature element, the defaults to reject. **Review:** the HOW of each Blocker and Major, highest severity first, at most six.

---

## Convening

Send every seat in one message, one `Agent` call per seat, `subagent_type: "design-expert:council-member"`, `run_in_background: false`. Resolve the designer file to an absolute path before sending; a seat cannot expand `${CLAUDE_SKILL_DIR}`. Seats spawned one message at a time are a serial read wearing a costume; the point of the room is that it finishes together.

The seat prompt, fields in this order:

```
COUNCIL SEAT
god_key: dieter-rams
god_file: <absolute path>/design-gods/dieter-rams.md
god_tags: #minimalism #principles #manifesto #materiality

BRIEF
mode: plan | build | review
size: plan | iteration | surface-redesign | system-redesign
register: brand | product | editorial
surface: <one noun phrase>
surface_tags: <2–4 tags>
scene: <scene sentence>
decisions:
  D1: <as stated, <=30 words>
  D2: ...

ARTIFACT
kind: file | screenshot | summary
ref: <absolute path> | <<=300-word summary>

RETURN exactly one verdict block. No prose outside it.
```

---

## The verdict

Each seat returns exactly one fenced block, nine keys in this order, under one hundred and twenty words:

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

`god` is the filename stem. `decision_addressed` is one `Dn`, or `none`, in which case `verdict` is `approve` and `change` is `none`. `verdict` is one of `approve`, `revise`, `block`. `domain_match` is true when any tag in `god_tags` appears in `surface_tags`; the seat computes it. `change` is imperative, at most forty words, and names a value rather than a mood. `evidence` is one citation drawn from the designer file's Quotes or Sources. `confidence` is an integer from 0 to 100. `dissent_ok: false` means "if I am outvoted, print my dissent in full". A seat whose `god_file` cannot be read returns `verdict: approve`, `confidence: 0`, `evidence: file-missing`.

---

## The chair

The chair is the main context. The verdict blocks land there as `Agent` results; a separate chair agent would need them sent again and would add a serial hop before the one thing that must happen in the main context anyway, which is asking the user. The protocol is arithmetic on at most seventeen ten-line records. Apply it per decision D, with A, R, and B the counts of approve, revise, and block verdicts that address D, and n their sum.

1. A result that does not contain exactly one nine-key block, or that carries `confidence: 0`, is excluded from every tally and listed under *Not counted*.
2. If n is zero, D is *Unaddressed*. If n is one, the lone verdict rules only at confidence 75 or above; below that it is recorded as *Advisory*, neither adopted nor asked, and the mode decides D by its own gates.
3. A domain veto is a `block` whose `domain_match` is true. If a veto is present, no domain-matched seat approved D, and no other change is incompatible with the veto's change, the ruling is **veto adopted**, marked as such. If a veto is present under any other condition, D is **Contested**.
4. If A is at least ⌈2n/3⌉, the ruling is **stands**.
5. If R plus B is at least ⌈2n/3⌉ and every change can be applied together (two values for one property are never merged), the ruling is **revised** with the merged changes.
6. Otherwise, ties included, D is **Contested**. Options are the distinct changes, clustered by the chair, plus "keep as stated", two to four in total. Each option's percentage is the sum of the confidence behind it divided by the total confidence on D, rounded to the nearest five, summing to about one hundred. More than four positions → the top three by backing, plus keep.
7. Seats on the losing side of a ruling are **Dissents**. A seat with `dissent_ok: false` prints its key, confidence, and change; a seat with `dissent_ok: true` prints its key only.
8. One `AskUserQuestion` call carries every Contested decision, at most four. Overflow defaults to "keep as stated" and is named in the output so the user can reopen it. A user who overrules a veto is logged as `overruled-by-user`.

Print the result before the question, as a table, in under two hundred and fifty words even at seventeen seats:

```
## Council: plan, product register, 17 seated, 2026-09-06

| Decision | Ruling | Tally |
|---|---|---|
| D1 warm-editorial direction | stands | 11 approve, 2 revise |
| D4 elevation | revised: drop surface-300 | 9 revise, compatible |
| D3 share-of-wallet pie | veto adopted (edward-tufte): ranked bars | 1 block, domain |

Contested (your call): D2 layout: rail-and-body 55% (6 seats), bento 30% (3), keep 15% (2).
Dissents: D1 massimo-vignelli (70): one display face, not two. D4 jonathan-ive.
Advisory: D5 tobias-frere-jones (68): Red Hat Text in cells, Display for the headline only.
Unaddressed: D5. Not counted: paula-scher (file-missing).
```

Rulings are adopted into the work without a question. Contested items become the question. Dissents are recorded in the output and, in plan mode, in `DECISIONS.md`, so a later reader knows the room was not unanimous.

---

## Capsule consultation

The light tier keeps the discipline without the room. Read the capsules in `design-gods.md`, seat by tag intersection, and for each seat write one sentence of the form "Per Kare's warmth at low resolution, the status pill keeps a two-pixel inset so it reads at 11px", naming the principle and the decision it shapes. A sentence that names a designer without naming a decision is not a consultation. Load a full designer file only under the two conditions above. Log each seat with `tier: capsule` and `verdict: none`.

---

## Logging

The log is honest only when the keys are canonical and the write is one call. The key is always the designer's filename stem. Write every line of a council or capsule consultation with one `printf`:

```bash
mkdir -p ~/.claude/design-expert && printf '%s\n' \
'{"ts":"2026-09-06T14:02:11Z","god":"dieter-rams","command":"plan","project":"skill-tracker","tier":"council","verdict":"revise"}' \
'{"ts":"2026-09-06T14:02:11Z","god":"don-norman","command":"plan","project":"skill-tracker","tier":"council","verdict":"approve"}' \
>> ~/.claude/design-expert/usage-log.jsonl
```

Line schema: `ts` ISO 8601 UTC; `god` stem; `command` one of plan, build, iterate, review, write, other; `project` the basename of the working directory; `tier` capsule or council; `verdict` approve, revise, block, none, or malformed. Inspect without jq:

```bash
grep -o '"god":"[^"]*"' ~/.claude/design-expert/usage-log.jsonl | sort | uniq -c | sort -rn
```

The seventeen stems: `alan-cooper`, `bret-victor`, `charles-and-ray-eames`, `dieter-rams`, `don-norman`, `edward-tufte`, `jakob-nielsen`, `jan-tschichold`, `jonathan-corum`, `jonathan-ive`, `massimo-vignelli`, `muller-brockmann`, `muriel-cooper`, `paul-rand`, `paula-scher`, `susan-kare`, `tobias-frere-jones`.

---

## Cost

Plan mode under the old procedure cost about twenty-one thousand tokens of designer prose in the working context and thirty tool calls before the layout walk could begin. A council keeps the working-context cost near thirteen thousand tokens (writing the seat prompts, reading the verdict blocks, running the chair and the log) regardless of the seat count. The seats themselves are the expense: the first live test measured roughly ninety thousand tokens per seat when a seat ran as a general-purpose agent, most of it fixed per-agent overhead, in one wave of one to four minutes. The dedicated `council-member` agent carries a single tool and a short body and should cost a fraction of that; measure it, and if a seventeen-seat plan stays expensive, set `council: tagged` in the project record. The room moves the cost out of the working context, finishes in one wave, and produces disagreement, which the old procedure could not.
