# Changelog

## 1.3.0 (2026-09-14)

### Added
- First-class ChatGPT/Codex support through `skills/design-expert/harnesses.md`, which resolves the skill root, structured-choice tool, optional personal state, visual workspace, and parallel-seat mechanism per harness.
- `skills/design-expert/agents/openai.yaml` with Codex display metadata, default `$design-expert` prompt, brand color, and implicit invocation enabled.
- A one-prompt ChatGPT/Codex installation path through `$skill-installer` in the README.

### Changed
- Skill-relative files resolve from the directory containing `SKILL.md`; `${CLAUDE_SKILL_DIR}` is now an optional Claude Code optimization rather than a requirement.
- Discovery reads design sections in both `AGENTS.md` and `CLAUDE.md`, and treats connected design workspaces generically.
- Output targeting uses the visual capabilities actually available in the session: Figma, a conversation workspace, repository-native preview, code prototype, static image, or prose fallback.
- Structured questions map to `request_user_input` in ChatGPT/Codex and `AskUserQuestion` in Claude Code, with the existing inline orange-question fallback.
- Council seats use the active harness's parallel-agent mechanism when available and allowed; otherwise the skill downgrades to a capsule consultation without blocking the design task.
- Personal memory and consultation logs are optional writes under the active agent's state directory. Project memory remains `.design-expert/project.md`.

### Preserved
- Claude Code marketplace installation and `/design-expert` behavior remain intact.

## 1.2.1 (2026-09-07)

### Changed
- One entry point. `/design-expert` triages every request (memory, explicit override, role and handoff and deploy target, design-system discovery, register, size, intent, output target, council tier) and runs the right mode. The four sub-commands `/design-expert:plan`, `:build`, `:review`, `:write` are removed without aliases; `/design-expert plan …` and friends force a mode.
- Layout follows current Claude Code conventions: `skills/design-expert/SKILL.md` with `modes/` and sibling reference files; `agents/` for the council seat; no `commands/`.
- The pantheon is a council. Plan convenes all eighteen designers as parallel seats, each reading only its own file, with a chair in the main context turning verdicts into rulings, contested points, and recorded dissent. Redesign-size builds and full reviews convene a tag-seated room; medium work gets capsule consultation; trivial work gets none.
- Briefs stay briefs: `PRODUCT.md` (at most 1,500 words) and `DESIGN.md` (at most 2,500 words) hold current state; dated decisions append to `DECISIONS.md`. Plan offers *distill* for oversized briefs.

### Added
- `memory.md`: a personal profile (role) and a per-project record (handoff, deploy target, Figma file, design-system pointers, mandated patterns, register). Asked once, never re-asked.
- `discovery.md`: ordered probes that find the project's design system in briefs, system files, `CLAUDE.md`, tokens in code, component folders, Figma variables and libraries, and Claude Design projects, with a 1,500-word cap and the mandated-pattern exemption.
- `targets.md`: the output-target matrix. Designers with Figma work in Figma for concepts and build; others see concepts on the Claude Design canvas and build in code or briefs; touch-ups and polish never open a surface.
- `handoff.md`: designer → developer, developer → designer, and product → either handoff formats.
- `council.md` and `agents/council-member.md`: the tier table, seat prompt, nine-key verdict block, chair rules with domain veto, output table, and the one-call log write.
- `design-gods/paula-scher.md`, `design-gods/alan-cooper.md`, and `design-gods/johannes-itten.md` (with a new `#color` tag); the pantheon is eighteen everywhere it is counted.
- `anti-slop.md` § Structural and rhetorical tells: numbered section markers, decorative side-stripes, fragment triads, reversal formulas, dash-label headers, with the design-system exemption and grep recipes.

### Fixed
- `output-format.md` no longer recommends "numbered chapter anchors (01/02/03)" as a fix.
- The README no longer headlines its own commands with a fragment triad.
- The May edits that were pending in the working tree (full-pantheon consultation at plan Gate 3½, scaled consultation floors) are included.
- Usage-log keys are canonical filename stems; the log gains `tier` and `verdict`; the legacy log is migrated once with a backup.

## 1.2.0 (2026-05-03)
- Editorial and expressive style registers, the 32-pattern layout catalog, `grids.md`, iteration sizing in `craft.md`, `self-review.md`, the voices taxonomy with four marketing voices, register and layout gates in plan and build, per-surface `PRODUCT.md` and `DESIGN.md` naming.

## 1.0.0 (2026-04-30)
- Initial plugin release: four commands, twelve reference files, thirteen designer files.
