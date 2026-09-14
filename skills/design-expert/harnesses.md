# Harness adapter

How design-expert resolves the few capabilities that coding-agent harnesses name differently. Read this file once at the start of a run. The design method and the mode gates stay identical across harnesses.

---

## Resolve the environment

Use the first matching row. Do not require a harness-specific tool when the active environment does not expose it, and do not imitate a missing tool with shell commands.

| Capability | ChatGPT / Codex | Claude Code | Portable fallback |
|---|---|---|---|
| Skill root | The directory containing this `SKILL.md` | `${CLAUDE_SKILL_DIR}` when set, otherwise this file's directory | This file's directory |
| Structured choices | `request_user_input` when available | `AskUserQuestion` when available | Ask one concise inline question with the orange-question convention |
| Personal state root | `$CODEX_HOME/design-expert`, or `~/.codex/design-expert` when `CODEX_HOME` is unset | `~/.claude/design-expert` | Session memory only |
| Parallel seats | Codex collaboration/subagent tools such as `spawn_agent` | `Agent` with `subagent_type: "design-expert:council-member"` | Downgrade the council to a capsule consultation |
| Concept surface | Figma when connected and appropriate; otherwise a conversation visualization, repository-native preview, or code prototype | Figma when connected and appropriate; otherwise Claude Design canvas or a code prototype | Repository-native preview, static image, or concise prose directions |

Active environment instructions decide whether delegation and writes outside the project are allowed. This skill never grants itself extra authority. If parallel subagents are unavailable or disallowed, use the capsule tier and say so in the trace; do not block the design task.

## Skill-relative files

Resolve every sibling path from the directory containing `SKILL.md`. For example, `modes/build.md`, `design-gods/dieter-rams.md`, and `targets.md` are skill-relative paths. Never assume `${CLAUDE_SKILL_DIR}` exists, and never search the user's machine to rediscover a file already packaged with the skill.

## Questions

Use a structured-choice tool only when it is present and the user is selecting among two to four mutually exclusive options. Otherwise ask inline. Keep the first-run question budget from `SKILL.md`; a missing question tool changes presentation, not the questions or their order.

## Personal state

Read an existing personal profile when the resolved personal state root is accessible. Create or update personal state only when the current environment permits that write without broadening the user's request. If it does not, keep the answer in the conversation and continue. Project state in `.design-expert/project.md` remains the durable default when the work has a repository.

Logging follows the same rule. A consultation may be logged to `<personal-state-root>/usage-log.jsonl` when that location is writable. An unavailable log never cancels a consultation or the user's work.

## Visual surfaces

Use the actual visual capability available in the session. Preserve explicit user choices: a named Figma file stays Figma; a requested repository implementation stays in the repository; a requested written review stays notes-only. When several concept surfaces are available, use the matrix in `targets.md`. Do not claim a Claude Design canvas exists in ChatGPT/Codex, and do not claim a Codex visualization exists in Claude Code.
