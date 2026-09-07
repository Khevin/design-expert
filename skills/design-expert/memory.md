# Project memory

What the skill remembers between invocations, where it lives, and the rule that a persisted answer is never asked again.

---

## Why memory comes first

Every invocation of this skill needs to know five things before a single design decision is defensible: who is asking, who receives the work, where it will land, how the project's design system is implemented, and which register the surface lives in. Asked every time, those five questions turn a one-line request into a form, and users learn to skip the skill. Never asked, they get guessed, and a designer's Figma-bound work ships as HTML, or a developer's repo work is reviewed against a system that lives somewhere the skill never looked. The answer is to ask once, write it down, and read it back at the top of every run. Triage step (a) in `SKILL.md` is that read.

---

## Two records

**The profile** is personal and crosses projects. It lives at `~/.claude/design-expert/profile.md`, beside the usage log, and holds the answer to "which describes you" once for all projects:

```yaml
---
schema: design-expert/profile v1
role: designer                  # designer | developer | product
role_source: asked              # asked | inferred:figma-mcp+no-repo | inferred:repo+no-figma
asked_on: 2026-09-06
---
```

**The project record** lives at `.design-expert/project.md` in the project root and holds the facts that belong to the project rather than the person. Its first line is a comment saying the file is safe to commit and safe to ignore, and the skill never edits the repository's git configuration to hide it; that choice belongs to the owner.

```yaml
---
schema: design-expert/project v1
role_override: null             # set only when this project differs from the profile
handoff_to: developer           # developer | designer | stakeholders | self
deploy_target: figma-file       # repo-pr | figma-file | hosted-url | canvas-only
deploy_detail: github.com/khev-lastro/design-subagents
figma_file: https://www.figma.com/design/<key>/<name>
design_system:
  source: repo                  # repo | figma | claude-design | none
  pointer: lais-notifications/system.md
  also: [CLAUDE.md § AI Suggestion / Lais Patterns]
  mandated_patterns: ["3px left accent border on AI suggestion cards (CLAUDE.md § AI Suggestion / Lais Patterns)"]
register: product
briefs: [root, lais-inicio/funil-fluxo]
asked_on: 2026-09-06
---
```

When there is no project directory (a conversation with no repository), keep the project record in `~/.claude/design-expert/projects/<name>.md`, named after the surface the user described.

---

## Reading and writing

Read both records at triage step (a), at most sixty lines each. A field that is present is a fact; do not re-ask it, do not re-infer it, do not "confirm" it in passing. A field that is absent is asked or inferred at the step that needs it, then written back immediately, so a run that stops halfway still leaves the next run better informed.

Write with the smallest edit that adds the field. Never rewrite a record wholesale, and never remove a field the user gave. When the design-system probes in `discovery.md` find a mandated pattern, append it to `mandated_patterns` with its section cite; the review mode reads that list before filing any anti-slop finding.

Re-ask only when the user says so, or when `asked_on` is older than ninety days, and then as a one-line confirmation of the stored values rather than the full set of questions.

---

## What memory is not

It is not the brief. `PRODUCT.md` and `DESIGN.md` hold what the product is and how it looks; `DECISIONS.md` holds what changed and why. The project record holds only the facts about the person, the destination, and where the system lives. Keep them apart, or the record grows into a second brief and the brief grows into a journal.
