# Don Norman

Wrote *The Design of Everyday Things*. Mental models, affordances, signifiers, the gulf of execution and evaluation. Every time you ask "what does the user expect to happen here," you are using his vocabulary.

Tags: `#cognition` `#principles` `#usability`

## Why they matter

Norman is the reason your discipline has a vocabulary at all. Before *The Design of Everyday Things* — first published in 1988 as *The Psychology of Everyday Things* — designers argued about beauty and engineers argued about function and the seam between the two was paved with adjectives. Norman closed the seam. He showed that the question "is this design good" can be answered, and the answer turns on whether the object's behavior matches the user's mental model of how it should behave. Once you can name the gap, you can close it. Once you can name the gap, you can refuse to ship until it is closed.

The other reason he matters is that he is the person who invented the term that names what you do. While at Apple in 1993, his title was "User Experience Architect" — and the modern usage of "user experience" traces to him. The phrase has since been diluted into a synonym for "anything a user touches," but Norman's original meaning was specific: the total felt experience of a product, including the parts that happen before purchase and after disposal. The seriousness of that framing is what your work inherits, even when the LinkedIn version of the title has lost it.

The third reason is the Norman door — a push door that visually signals "pull," or vice versa. The Norman door is the canonical example of bad design because it does not require literacy in design to recognize. Anyone who has ever pulled a push door has lived the failure. He turned that lived failure into a teaching object. That move — taking an everyday humiliation and treating it as evidence that design is a moral practice — is what gives his work its weight.

## Principles they brought

Norman's vocabulary is the conceptual engine behind interface critique. He coined or popularized affordance (a property of an object that suggests how it can be used — a door handle's shape affords pulling), signifier (the perceptual cue that communicates the affordance — the visible "push" sign), mental model (the user's internal model of how the system works), and the twin gulfs of execution and evaluation (the distance between user intent and system action, and between system response and user understanding). He gave you forcing functions — constraints that prevent errors before they happen — and he insisted that error recovery is design, not failure. The framework he and Jakob Nielsen built into the Nielsen Norman Group, founded in 1998, is the reason heuristic evaluation is a discipline rather than a panel of opinions.

The portable principles for interface work:

- **Affordance is the question, not the answer.** Every interactive element must telegraph what it does. A button must look pressable; a link must look clickable; a draggable item must signal draggability before the user touches it.
- **Signifier is the visible part of affordance.** An object can afford a behavior and still be invisible. The signifier — color, shape, label, icon — is what carries the affordance from object to user.
- **Mental models are sticky.** Users carry models from elsewhere — operating systems, prior products, physical objects. Fight a mental model at your peril. If the user expects "save" to commit immediately and your system saves on close, you have not built a clever feature; you have built a confusion.
- **Map the gulfs.** The gulf of execution is "how do I do this." The gulf of evaluation is "did it work." Every interaction has both, and both must be small.
- **Forcing functions are not punishment.** A type-to-confirm on account deletion is not friction for its own sake; it is a constraint that prevents an error whose cost is unrecoverable.
- **Errors are the design surface, not its failure.** Most products design the happy path and treat errors as exceptions. Norman flips it: error states are where trust is won or lost.
- **Recovery is sacred.** Undo, redo, back, cancel — these are not features but the baseline of respecting that the user is human and humans make mistakes constantly.

## Quotes

> Two of the most important characteristics of good design are discoverability and understanding.
> — Don Norman, *The Design of Everyday Things*

## Categories of interest

This designer's principles surface in:
- `foundations.md` — his vocabulary anchors heuristic 6 (recognition vs recall) and the entire 10-Lens framework's "what does the user expect" mode.
- `interaction.md` — affordances and signifiers are the conceptual engine behind the eight mandatory interactive states.
- `components.md` — icon affordances and the "does this read as interactive" question are direct Norman lineage.
- `craft.md` — forcing functions and error-recovery design map onto craft tests for destructive actions.
- `anti-slop.md` — generic affordances ("a gray rectangle that might be a button") are the slop signal Norman spent forty years naming.

## Sources

- jnd.org — Norman's personal site, archive of essays and talks.
- *The Design of Everyday Things*, revised 2013 edition — https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/
- Nielsen Norman Group archive of Norman's articles — https://www.nngroup.com/people/don-norman/
- "3 Ways Good Design Makes You Happy" — https://www.ted.com/talks/don_norman_3_ways_good_design_makes_you_happy
- Norman's UX Conference keynotes via NNg — https://www.nngroup.com/
