# Output targets

Where concepts are shown, where the build lands, and what the handoff artifact is, decided by who is asking, what tools are connected, and how big the change is.

---

## Why the target is a triage decision

The same brief produces different deliverables for different people. A designer with a Figma library wants frames bound to that library's variables, because the frames are what their developer will read. A developer wants code in the repository's framework, because a Figma frame is a picture of work they still have to do. A product owner wants briefs and something to approve, because they will hand the work to one of the other two. Picking the target late means building the wrong thing well; picking it by reflex means always building HTML. The target is decided at triage step (g), from the role in memory, the tools available in the session, the mode, and the size.

---

## The matrix

| Role | Figma MCP | Concept stage | Build stage | Handoff artifact |
|---|---|---|---|---|
| Designer | yes | Figma via MCP: direction probes and layout variations as frames on one page | Figma via MCP, bound to library variables and components | Figma spec page (see `handoff.md`) |
| Designer | no | Claude Design canvas (the `design` skill) | HTML+CSS prototype on the discovered tokens, or canvas | Markdown spec plus canvas share |
| Developer | yes | Claude Design canvas (Figma only if the user names a file) | HTML+CSS plus the repository's framework | Repo PR; optional `generate_figma_design` push |
| Developer | no | Claude Design canvas | HTML+CSS plus framework | Repo PR |
| Product | yes | Claude Design canvas; Figma only if the receiving designer asks | Briefs (PRODUCT, DESIGN, DECISIONS) | Brief bundle plus canvas share, or Figma spec |
| Product | no | Claude Design canvas | Briefs | Brief bundle plus canvas share |

"Figma MCP" means the `mcp__figma__*` tools are present in the session. When they are absent the designer path falls back to the canvas for concepts and to a token-faithful prototype for the build, and the handoff says so.

---

**The deploy target decides the handoff column.** When memory carries a `deploy_target`, the handoff artifact follows it regardless of role: `repo-pr` is the pull-request description from `handoff.md`; `figma-file` is the Figma spec page; `hosted-url` is the pull-request description plus the preview URL; `canvas-only` is the canvas share plus a Markdown spec. The concept and build columns still follow the role row, so a designer without Figma who ships to a repository sees concepts on the canvas, builds a token-faithful prototype, and hands off as a pull request.

## The size rule

Touch-up and polish never open a concept surface: no `create_new_file`, no `design` skill. They edit in place, with `use_figma` on the linked file or in code. Iteration opens the concept surface only when the layout shifts or the user asks to see alternatives; its default is three to five inline proposals, then the pick. Surface redesign always shows concepts before the build. System redesign shows its concepts inside plan mode's Gate 3. Write and review never open a surface; review reads Figma through `get_screenshot`, `get_metadata`, and `get_variable_defs`.

A canvas is for the broad picture: first directions, layout variations, a flow seen whole. It is the wrong tool for a hover state, and opening one for small work teaches the user that the skill is slow.

---

## Figma mechanics

The Figma plugin's own skills own the mechanics; this skill does not restate them. Every Figma write is preceded by its prerequisite skill, and the triage trace prints the prerequisite so a skipped one is visible:

- `figma:figma-use` before any `use_figma` call (frames, variables, components, spec pages).
- `figma:figma-generate-design` before `generate_figma_design`. That tool captures a rendered web page, so a Figma-first build still renders HTML locally, captures it into the file, then refines the result with the library's components found through `search_design_system`.
- `figma:figma-create-new-file` before `create_new_file`, and only when the user said "new" or no `figma_file` is known and the user has not supplied one.

Variables before frames: `get_variable_defs` runs before the first frame is created, so every fill and gap binds to the library rather than to a hex value.

---

## Canvas mechanics

Invoke the `design` skill by name through the Skill tool. Pass the brief, the register, the two to four directions or three to five layout candidates, and the intended viewports. Label each artboard with the direction or pattern name it shows so the user's pick can be named back. The canvas exists for approval; once the user picks, the build proceeds on the build-stage target above. The canvas format is part of the app, not of this skill; never try to extend or reproduce it.
