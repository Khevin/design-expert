# Apple Human Interface Guidelines

Platform Design Guidelines

URL: https://developer.apple.com/design/human-interface-guidelines/

## Why this is a quality reference

The HIG is the longest continuously published platform-design document in the field. It started in 1987 with the original *Macintosh Human Interface Guidelines* and has been revised through every Apple platform that followed: System 7, OS X, iPhone OS, iPadOS, watchOS, tvOS, visionOS. Most design systems document a product. HIG documents a platform — the contract every third-party app must hold up if it wants to feel native. Touch target sizes, gesture conventions, system color semantics, motion timing, accessibility floor, modality rules, drag-and-drop choreography. All specified, all maintained, all updated when the underlying platform changes.

What makes the HIG a quality reference outside Apple's walled garden is that the principles transfer even when the pixel values do not. The reasoning behind a 44-by-44 touch target — that fingertip area, average reach error, and Fitts's Law converge on a minimum below which precision collapses — is true on the web and on Android and on a kiosk too. The reasoning behind dynamic type — that fixed type sizes fail anyone with low vision, anyone in a glare condition, anyone reading at distance — is true on every screen ever shipped. HIG codifies discipline at the platform level, and the discipline is portable.

## What to study

Open the foundations sections regardless of what platform you are targeting: Color, Typography, Layout, Materials, Motion, Accessibility. The accessibility section is among the most thorough in the industry — particularly the guidance on motion sensitivity, dynamic type, and assistive technology compatibility. Then the interaction patterns: gestures, drag-and-drop, modality, focus management. Then the controls — buttons, segmented controls, pickers, sliders — for anatomy and state behavior. The annual WWDC design videos are the secondary canon: each year a few of them go deeper than the documentation on a specific decision Apple's design team had to make.

## What NOT to copy blindly

HIG is platform-locked. Many of its specifics — the exact font metrics for San Francisco, the system iconography, the precise modal-presentation choreography, the home indicator behavior — are right for Apple's platforms and wrong for the web. Lifting iOS-specific UI into a web app makes the web app feel like a port. The HIG also occasionally prioritizes Apple's brand register over user clarity (the period of confusion around iOS 7's flat icons; the mid-2010s push toward gesture-only navigation that hid affordances behind invisible edges). Take the discipline. Examine the specifics. Translate before applying.

## Where this reference informs design-expert

HIG's eight-state interaction discipline and motion timing inform `interaction.md` directly — the rest, hover, focus, active, loading, error, success, disabled cycle is paraphrased from Apple's control documentation. The accessibility guidance maps to the Universal Design seven principles in `foundations.md`, particularly principle 4 (Perceptible Information) and principle 7 (Size and Space). San Francisco's design treatment is a model in `typography.md` for how a system font scales across registers. The control anatomy work surfaces in `components.md`.

## Sources

- Human Interface Guidelines — https://developer.apple.com/design/human-interface-guidelines/
- HIG resources and downloadable kits — https://developer.apple.com/design/resources/
- WWDC design sessions — https://developer.apple.com/videos/design
- Apple Accessibility — https://www.apple.com/accessibility/
- *Macintosh Human Interface Guidelines* (Addison-Wesley, 1992) — historical baseline
