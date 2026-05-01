# Refactoring UI

Type — Book / Companion Site

URL: https://www.refactoringui.com/

## Why this is a quality reference

Refactoring UI is a book by Adam Wathan (founder of Tailwind CSS) and Steve Schoger (designer), published 2018 as a self-published PDF and printed book. It is the single most useful document a developer can read to ship a credibly-designed product without becoming a designer. The position it occupies is rare and important: most design books are written by designers for designers and assume taste as a starting condition. Refactoring UI assumes the opposite — that the reader can ship working software but cannot yet see why their interface looks generic — and walks them, technique by technique, to the specific moves that make a screen look intentional. It is pragmatic to a fault. It teaches what works before it explains why, which is the right order for a developer audience and the wrong order for a principles audience.

This is a *light-touch* reference for design-expert v1. We cite it from public sample chapters, talks, and Schoger's articles, not from the full PDF. The companion site has a free preview, articles, and tweet-sized design tips; Schoger's @steveschoger Twitter feed remains the field's most popular working source of practical design tips.

## What to study

The book's chapters on hierarchy (size, weight, color, position), depth (shadow systems, elevation), color systems (HSL palette construction, semantic colors), and typography (sans-serif workhorses, scale construction) are the load-bearing ones. The free preview chapter is the right entry point — search for "refactoring ui sample" — and Schoger's "7 Practical Tips for Cheating at Design" article is the best free distillation of the book's instinct. Watch his "10 Tips to Improve Your Designs" talk on YouTube once, then return to it after you have shipped a screen, and you will hear it differently. The before/after pairs in the book are the actual teaching mechanism; read them as exercises, not illustrations.

## What NOT to copy blindly

The book's examples are SaaS-specific — CRM dashboards, billing tables, settings pages — and the palette is consistently cool-toned. Lifting the exact aesthetic into a consumer or lifestyle product reads as wrong-register; a meditation app should not look like a billing dashboard. The book is also pragmatic, not principled — it teaches what works, sometimes at the expense of explaining why. Cross-reference with `foundations.md` for the principles behind the techniques, and with the per-designer files for the lineage. Refactoring UI is the practical layer; it is not a substitute for the discipline underneath it.

## Where this reference informs design-expert

The hierarchy, depth, and color sections directly inform `craft.md` material on composition and subtle layering. The "tweaks that make designs look more designed" tips are the practical reverse of `anti-slop.md` anti-defaultism — useful as a flip-side reference, not a contradiction. The sans-serif type discipline informs hierarchy levels in `typography.md`.

## Sources

- refactoringui.com — book site, free preview, articles
- Steve Schoger on Twitter (@steveschoger) — the best free working design-tips feed
- Adam Wathan on Twitter (@adamwathan) — Tailwind context, occasional design writing
- "7 Practical Tips for Cheating at Design" — Schoger's free article, widely linked
- Steve Schoger, "10 Tips to Improve Your Designs" — talk on YouTube
