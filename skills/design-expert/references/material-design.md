# Material Design 3

Design System (Google)

URL: https://m3.material.io/

## Why this is a quality reference

Material is the most-studied alternative to Apple's HIG and the only design system at comparable scale that ships across a third-party ecosystem as varied as Android's. It arrived in 2014 with strong opinions — paper as a metaphor for layered surfaces, elevation as a measurable property, motion as a first-class citizen — and the discipline has held through three major versions. Material 3 is the current iteration, and it introduced dynamic color extracted from a user's wallpaper, which is the first attempt at large scale to make a design system personalize itself to its user rather than the other way around. Whether or not you agree with the metaphor, the seriousness about motion and the documentation depth on density and accessibility make Material a working reference for anyone designing across Android or for anyone designing a system that must scale across third parties.

The position worth borrowing is the rigor about motion. Most design systems treat motion as decoration — a fade-in, an ease-out, a "delight" animation. Material treats motion as information: which curves communicate causality, which durations match perceived response, how choreography sequences a state change so the user can follow what just happened. The motion documentation is among the best in the industry, and the principles transfer cleanly to systems that look nothing like Material.

## What to study

Open the motion section first — easing curves, duration tokens, choreography patterns, the difference between standard and emphasized transitions. It is denser and more rigorous than most design systems' equivalent pages. Then the density specifications — Material documents compact, standard, and comfortable variants for the same components, and the reasoning behind when to switch is portable to any system that has to serve dense and spacious surfaces from the same kit. Then the accessibility documentation. Then the component anatomy pages, particularly the data table, the app bar, the navigation rail, and the bottom sheet.

## What NOT to copy blindly

Material's color tokens are tied to the Material identity. The Material You dynamic color extraction, the specific accent palettes, the surface-tinting model — they make Material apps look like Material apps, which is wrong if you are not building one. Material's elevation-and-shadow model is also opinionated and increasingly dated; the paper metaphor was a 2014 design statement and many modern interfaces have moved to subtler layering or flat surfaces with hairline borders. The bottom-navigation pattern is Android-native and uncomfortable on iOS or web. Take the motion, the density specs, the documentation discipline. Bring your own color, depth model, and navigation choices.

## Where this reference informs design-expert

Material's motion documentation maps directly to the 100/300/500 millisecond framework and the easing taxonomy in `interaction.md`. Its density specifications inform the brand-versus-product register split in `craft.md` — the way Material documents three densities for the same component is the model for how product surfaces should scale from comfortable to compact without rewriting their kit. The component anatomy pages set a documentation standard that surfaces in `components.md` and `output-format.md`.

## Sources

- Material Design 3 — https://m3.material.io/
- Material motion — https://m3.material.io/styles/motion/overview
- Material Theme Builder — https://material-foundation.github.io/material-theme-builder/
- Google Design — https://design.google/
- Material on GitHub — https://github.com/material-components
