# Alan Cooper

Invented personas and goal-directed design; wrote *About Face* and *The Inmates Are Running the Asylum*. Named cognitive friction, excise, and posture. Read him when a flow serves the system's convenience instead of the user's goal.

Tags: `#interaction` `#cognition` `#usability` `#principles`

## Why they matter

Alan Cooper built Visual Basic before he built personas, and the order matters. In May 1994 Bill Gates handed him a Windows Pioneer Award for making Windows programmable by ordinary developers; he is widely credited as the father of Visual Basic. He spent three decades arguing against the instinct that made him famous — that software should serve the convenience of the people who build it. In 1992 he and his wife Sue founded Cooper, the first interaction design consultancy, to ask a question the industry had rarely asked: who, specifically, is this for. Not "the user," a fiction elastic enough to justify whatever a team already wanted to build, but a named, researched person with a goal the interface either serves or obstructs.

His work outlived its decade because he renamed the unit of analysis. Teams before Cooper argued about tasks, because tasks are what a ticket can hold: what does the user click, in what order. Cooper argued for goals instead: the end condition a user is trying to reach, not the steps to get there, exposing how much software optimizes the task while ignoring the goal. He gave that goal a face by inventing the persona, a researched stand-in for a class of real user, precise enough that a team can ask whether Chuck would want this feature rather than debate a faceless abstraction. *About Face*, first published in 1995 and now in its fourth edition with Reimann, Cronin, and Noessel, is the textbook that resulted; *The Inmates Are Running the Asylum* (1999) is the polemic explaining why it was necessary.

Keep him in the room now because his diagnosis has a new delivery mechanism. Generative tooling produces a flow in minutes, not enough time to ask whose goal it serves, so the flow defaults to the system's, because the system is what the tool can see. An onboarding wizard marching through every schema field in database order is Cooper's nightmare at machine speed; a settings panel organized by backend service instead of user decision is the same failure. His vocabulary, goal versus task, persona versus stakeholder guess, excise versus feature, is still the fastest way to catch it.

## Principles they brought

Each principle below was extracted from watching specific software fail specific people, and lands on a surface shipped in 2026: settings panels, onboarding flows, confirmation dialogs, dashboards, forms.

- **Goal-directed design.** Design toward the outcome, not the click sequence that reaches it: a form asking three questions and inferring the rest serves a goal; one marching through every schema field serves a task.
- **The primary persona is a constraint, not a decoration.** A real persona carries a stated goal and frustration that are load-bearing: when a dashboard's default view contradicts it, the persona wins the argument, not the loudest stakeholder.
- **Excise is the tax users pay for the software's convenience.** Re-entering data the system already has, re-authenticating mid-task, confirming what the system could infer: none of it serves the goal; it exists because the alternative was harder to build.
- **Cognitive friction is measurable, not vibes.** Defined as the resistance a human intellect meets when it collides with a complex system of rules, it shows up as a settings panel with fourteen unsorted, engineering-language toggles.
- **Application posture sets density, chrome, and motion before a pixel is drawn.** A sovereign app earns dense information and persistent navigation; a transient dialog earns sparse content, no chrome, and fast motion; a daemonic or auxiliary status widget earns almost none of either.
- **Replace the confirmation dialog with an undoable action.** "Are you sure?" trains users to click through unread by the third dialog. An undo toast lets the action happen immediately and stays open, reversible, for several seconds; reserve true confirmation for the rare irreversible action.
- **Watch for dancing bearware.** Cooper's term for a feature that exists because it was possible to build, not because anyone needed it — the bear only has to dance, not dance well. A dashboard widget nobody asked for is dancing bearware with a chart library attached.
- **Design for perpetual intermediates, not beginners or experts.** Most users plateau at a comfortable competence and stay there; over-explaining forever insults them, and front-loading every shortcut abandons them. Progressive disclosure exists for this population.
- **Design before code, as a pact, not a handoff.** Interaction design is its own discipline, resolved before engineering starts — a dashboard whose architecture is decided by whichever API endpoint shipped first is a pact broken at the first commit.

## Quotes

> Cognitive friction is the resistance encountered by a human intellect when it engages with a complex system of rules.
> — Alan Cooper, *About Face: The Essentials of Interaction Design*

> A goal is an expectation of an end condition, whereas both activities and tasks are intermediate steps (at different levels of organization) that help someone to reach a goal or set of goals.
> — Alan Cooper, *About Face: The Essentials of Interaction Design*

> Users only care about achieving their goals.
> — Alan Cooper, *The Inmates Are Running the Asylum*

## Categories of interest

This designer's principles surface in:
- `modes/plan.md` — Gate 5, persona selection, treats personas as hard constraints every screen must satisfy, not aspirations.
- `interaction.md` — the rule that an undo toast beats a confirmation dialog is Cooper's forcing-function argument against "Are you sure?" culture.
- `foundations.md` — Heuristic 3, User Control and Freedom, with reversible actions and a "back" button, codifies the respect-for-agency argument Cooper made in *Inmates*.
- `components.md` — a status pill reporting the system's internal state instead of the user's goal-state is excise wearing a UI.

## Sources

- Alan Cooper et al., *About Face: The Essentials of Interaction Design*, 4th ed. (Wiley, 2014); 1st ed. published as *About Face: The Essentials of User Interface Design* (IDG Books, 1995)
- Alan Cooper, *The Inmates Are Running the Asylum: Why High-Tech Products Drive Us Crazy and How to Restore the Sanity* (Sams, 1999; 2nd ed. 2004)
- Alan Cooper, "The Origin of Personas," *Cooper Journal*, 2008; originally published in *INNOVATION*, IDSA, 2003 — https://www.idsa.org/innovation_article/origin-personas/
- Computer History Museum, "2017 CHM Fellow Alan Cooper: Father of Visual Basic" — https://computerhistory.org/blog/2017-chm-fellow-alan-cooper-father-of-visual-basic/
- "Windows Pioneers," Wikipedia — https://en.wikipedia.org/wiki/Windows_Pioneers
- Fast Company, "A UX Legend On The Much-Rumored Death Of The Design Firm" — https://www.fastcompany.com/3051871/a-ux-legend-on-the-much-rumored-death-of-the-design-firm
- "Alan Cooper (software designer)," Wikipedia — https://en.wikipedia.org/wiki/Alan_Cooper_(software_designer)
