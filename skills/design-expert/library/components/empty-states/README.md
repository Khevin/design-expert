# Empty states

Empty states are where most products lose their users. The user opens a feature for the first time, or filters a list to nothing, or arrives at a surface that has not yet earned data — and the screen says "No data available." That string is the most expensive five letters in software: it teaches nothing, gives no path forward, trains the user to leave. `interaction.md` is explicit: empty is not "No data available." Empty is an onboarding moment dressed as an absence — the clearest onboarding surface in the product, and the team that treats it as an afterthought has already lost the first sixty seconds, the only onboarding metric that matters.

## What good looks like

Three pieces are non-negotiable. WHAT will appear here, in the user's vocabulary. WHY it matters, in one sentence. ACTION to start, as a single primary button with a real verb. `interaction.md` makes this concrete: "No projects yet. Projects help you organize work and collaborate with your team. [Create your first project]" — the user understands the surface, sees the value, knows the next move. Skip any of the three and the user falls back to inference, which is friction.

The variants matter. Filtered-to-empty is not the same surface as never-had-data. A user who filtered "status: cancelled" needs the filter explained and a one-click "Clear filters" — not a pep talk about what subscriptions are. A first-encounter empty state needs the pep talk and zero filter UI. Error-empty needs the three-piece error formula from `interaction.md` — what happened, why in user terms, how to recover — not a cheerful "Looks like nothing's here yet!" that lies.

Tone is warm without humor. `interaction.md` is firm: humor for failures is forbidden because the user is frustrated and humor compounds frustration. Empty states sit closer to onboarding than to error, so warmth is earned — but the line between "warm" and "ghost-town joke" is the line between a colleague's note and a chatbot. Brand surfaces (a celebration after the first project ships) can be theatrical; product surfaces (an inbox opened twelve times a day) must be efficient — one primary action, no monologue. Touch the empty state with the same care as the populated state. The populated dashboard is where the user lives; the empty one is where they decide whether to return.

## Quality examples (Do)

### Linear's empty inbox
URL: linear.app — open Inbox after triaging everything.

"All caught up." Sentence-case headline. One line of copy explaining what will appear here ("New issues will appear here when you're tagged in or assigned to them"). One secondary action ("Browse all issues"). Three required pieces honored without ceremony — what, why, action — and not a single sparkle or illustration. `interaction.md`'s empty-state template, executed verbatim.

### GitHub's empty repository
URL: github.com — create a new repo and don't push anything.

Four primary paths visible: clone in CLI, create a README in browser, push an existing repo, import from another repository. Each is given as copy-pasteable shell commands. The page teaches Git mechanics for users who need them and stays out of the way for users who don't. WHAT, WHY, HOW — `interaction.md`'s onboarding principle, the product's value visible, not described.

### Notion's blank page
URL: notion.com — create a new page.

Cursor blinks at the top. Below it, faint suggestions: "Press '/' for commands," "Add a template." Nothing forced — the canvas is blank, affordances are recessive. The user who knows what they're doing sees a clean page; the user who doesn't sees, on demand, a way in. `interaction.md`'s contextual-tooltip rule — shown once, dismissed permanently.

### Stripe's empty events log
URL: stripe.com — fresh test-mode account, Developers > Events.

When no events have fired, Stripe shows expected event types as preview rows: `payment_intent.succeeded`, `charge.refunded`, `customer.subscription.created`. The empty state teaches the API by showing what the populated state will look like — the user learns the vocabulary. `interaction.md`'s onboarding tutorial principle embedded directly in the empty state.

### Slack's empty channel
URL: slack.com — create a brand-new channel.

The header explains the channel ("This is the very beginning of #channel-name"), surfaces the purpose, and offers two primary actions: invite people, set a topic. Both verbs are tied to the actual blocker — an empty channel is empty because nobody's there yet.

## Anti-patterns (Don't)

### "No data available."
The literal string, centered, gray, no action. `interaction.md` calls this failure out: a blank panel with "No data" trains the user to leave. Replace with the three-piece template.

### The full-page Lottie with no copy
Animated cloud or confused robot — zero instructions, zero actions. The user admires an animation and learns nothing. This is `anti-slop.md`'s "marketing illustration on a working surface" — costume on a dashboard, decoration in place of utility. Custom illustration is justified for high-stakes moments; on every minor list it becomes a tell.

### The forced 12-step tour as empty state
The screen launches a full product tour with twelve modals. `interaction.md` caps tours at three to seven steps because users skip past seven. The empty state is not the place to teach the entire product — it's the place to teach this surface. Replace with one tooltip, one primary action, and a separate dismissible tour entry.

### The humor-on-empty-state
"Looks like a ghost town in here!" Cute on first encounter, infuriating on the fiftieth. `interaction.md` is unambiguous: never use humor for failures, and empty states drift toward failure register every time the user expected data and didn't get it. The warmth that works lives in copy specificity, not jokes.

## How to use this category

Write the three sentences out loud — what appears here, why it matters, what to do — before opening the design tool. If any is hard to write, the surface upstream is unclear, and the empty state is exposing that. Distinguish first-encounter from filtered-to-empty from error-empty in the spec, and design all three; the populated state alone is half the work. Use illustration only when the moment is high-stakes enough to earn the cost. When in doubt, ask whether a colleague or a chatbot would write this copy — colleagues win.
