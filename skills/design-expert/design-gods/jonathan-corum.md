# Jonathan Corum

NYT science graphics editor. Treats data viz as journalism — every chart answers a specific question, nothing more. His "Style and Substance in Data Visualization" is the cleanest brief on chart-making yet written.

Tags: `#data-viz` `#information-design` `#editorial`

## Why they matter

Most charts in software are decorative. They exist because the spec said "add a chart here," not because anyone wrote down the question the chart was meant to answer. The result is a dashboard full of shapes the user has to interpret on their own — pretty geometry that demands work to extract a sentence from. Corum's contribution is to refuse that whole practice. He treats data visualization the same way the rest of the newsroom treats reporting: a chart is a published claim, the headline is the claim, the picture is the proof. If you cannot say what you are claiming, you have nothing to publish.

The discipline this produces is severe. Before any pixel is drawn, the question is stated in words. Before any encoding is chosen, the answer is written as a sentence. The chart is then designed to make that sentence visible at a glance, and every element that doesn't help the sentence land is cut. This sounds obvious until you try to apply it to your own work; almost every chart you have ever shipped will fail it. Corum is the patron saint of refusing to ship the failure.

The reason this transfers from newspaper graphics to product UI is structural. A dashboard is a newsroom edition the user opens every morning. They scan it the way a commuter scans a front page — looking for the thing that matters today, the change since yesterday, the anomaly worth their attention. Charts that don't answer questions in that scan are wasting the front page. Corum's brief is the operating manual for designers who want their dashboards to function as journalism rather than as wall art that happens to contain numbers.

## Principles they brought

The principles below are the working version of his talk, translated into rules you can apply at the moment of designing a chart cell or a dashboard tile. Each one is a refusal as much as a recommendation — refusing to ship the chart until the constraint is met.

- **State the question before drawing the chart.** If you cannot finish the sentence "this chart answers the question of ___" in fewer than fifteen words, the chart is not designed yet. Go back to the question.
- **The headline is the answer, not a label.** "Revenue by quarter" is a label; "Q3 launch lifted weekly revenue 32 percent" is a headline. Charts in product UI almost always need a real headline, not a category title.
- **Labels live on the chart, never bouncing to a separate legend.** Forcing the user to translate between a colored line and a legend swatch is friction multiplied by every read. Inline labels at the data point are the rule; a separate legend is the exception.
- **Hierarchy is enforced by visual weight, not by chart type.** The most important data point should pull the eye first — bolded, colored, annotated. Supporting data should support, never compete. If the chart has three series and they are all the same color, the chart has no hierarchy.
- **Show uncertainty when uncertainty is part of the answer.** Error bars, ranges, distributions — anything that prevents the user from over-reading a point estimate as a fact. False precision is a worse failure than visible doubt.
- **Every chart earns its place by answering a question no other element on the screen answers.** If a number, a sparkline, or a sentence would do the same job in less space, the chart loses.
- **Treat each chart as a published claim.** You are willing to defend the question, the encoding, and the headline as a journalist would defend a story. If you cannot defend any of the three, the chart isn't ready.

## Quotes

> Charts are not illustrations. They are answers to specific questions.
> — Jonathan Corum, "Style and Substance in Data Visualization"

## Categories of interest

This designer's principles surface in:
- `components.md` — the data-viz decision tree, the "headline is the annotation" rule, the no-pies discipline; Corum's brief is the working logic behind that whole section.
- `foundations.md` — heuristic 1 (visibility of system status) at the chart scale: a chart's headline is its status; an unlabeled chart is a silent system.
- `output-format.md` — the demand to state the question explicitly before answering it applies one-for-one to the structure of design reviews and proposals.
- `references.md` — NYT Graphics is one of the canonical references for what editorial-grade data visualization looks like in the wild.
- `craft.md` — the "every element earns its place" filter is Corum applied to chart space the same way Rams applies it to product space.

## Sources

- 13pt.com — Corum's personal site, an ongoing cabinet of curiosities and a working portfolio: https://13pt.com
- "Style and Substance in Data Visualization" — Tapestry conference talk, transcript widely circulated: https://style.org/ut/
- NYT Science Graphics archive — the working portfolio, decades deep: https://www.nytimes.com/section/science
- Tapestry Conference talks — the venue where the brief was first articulated publicly: https://www.tapestryconference.com/
