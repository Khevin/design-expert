# Voices

A curated set of writing-discipline files describing the voices the design-expert plugin uses for different kinds of copy. Three categories — UX copy (interfaces), long-form (editorial / case studies / journalism), and marketing (advertising / landing heroes / brand work) — with the marketing category branching into multiple flavor sub-files keyed to canonical ad voices. Each voice is a discipline named so that the rules that apply because of the writing context can be cited, audited, and applied consistently.

---

## Why a voices taxonomy

Different writing contexts demand different disciplines. A button label and a magazine pull quote are not the same writing problem; trying to use one voice for both produces button labels that read like marketing slogans, or pull quotes that read like form-field validation. The voices taxonomy makes the context-specific discipline explicit so the model and the user can match the writing register to the surface the writing lives on.

The taxonomy mirrors `styles/`. Where a style file describes the discipline that applies because of the intent register (editorial / dashboard / brand-marketing), a voice file describes the discipline that applies because of the writing context (UX copy / long-form / marketing). Most surfaces use multiple voices: a brand-marketing landing page has UX copy in its CTAs and marketing copy in its hero. The voices taxonomy lets each kind of copy on a single surface be governed by its own rules.

---

## How to use a voice file

Loaded by `/design-expert:write` based on the writing brief. The command first determines what kind of copy is being written, then loads the appropriate voice file. The voice file is authoritative for that copy; the foundationals (`anti-slop.md`, `output-format.md`) still apply but the voice file's rules govern any conflict.

For surfaces with multiple voices on one page (e.g., a landing page with a hero + CTAs), the writer composes each piece in its own voice rather than averaging the rules. The CTA stays in UX-copy voice (verb-plus-object, no marketing tone). The hero stays in marketing voice (clever, brief, reader-respecting). The body stays in long-form voice (peer-to-peer, evidence-led).

---

## The voices

| Voice | What it covers | Path |
|---|---|---|
| UX copy | Buttons, notifications, labels, cells, titles, descriptions, errors, empty states, loading states, confirmations — micro-copy for interfaces | `voices/ux-copy.md` |
| Long-form | Case studies, blog posts, magazines, articles, journalism — the Work&Co / Pentagram / NYT Magazine voice | `voices/long-form.md` |
| Marketing | Landing-page heroes, advertising, brand work, captions, puns — multi-flavor by canonical ad voices | `voices/marketing/` |

The marketing voice is multi-flavor because advertising is a craft with strong individual voices. Each ad-lord file in `voices/marketing/` describes that voice's specific discipline. Today's four:

- **`voices/marketing/george-lois.md`** — bold image-and-line, Mad-Men-era spectacle. *"I Want My MTV."* Esquire covers. Tommy Hilfiger.
- **`voices/marketing/bill-bernbach.md`** — honest, witty, reader-respecting. DDB Creative Revolution. *"Think Small."* *"We Try Harder."*
- **`voices/marketing/howard-gossage.md`** — conversational, intimate, anti-hard-sell. The Socrates of San Francisco. Eagle Shirts interactive campaigns.
- **`voices/marketing/david-ogilvy.md`** — research-led, long-copy, gentleman-British evidence. *"At 60 miles an hour the loudest noise…"* Hathaway shirts. Dove. Schweppes.

The four cover the modern ad-voice spectrum: spectacle (Lois), honest restraint (Bernbach), intimate conversation (Gossage), considered evidence (Ogilvy). All four prioritize reader intelligence; each does it differently. More ad-lords can be added when their voice earns its file (Mary Wells Lawrence, Lee Clow, John Hegarty, Dan Wieden are likely candidates).

---

## Strunk and White as the floor

A canonical writing reference applies across all three voices: Strunk and White's *The Elements of Style*. The book's discipline — "omit needless words," "use definite specific concrete language," "prefer the active voice," "place yourself in the background" — is the floor for all written work. Each voice file calls out where Strunk and White's rules apply directly, and where the voice's discipline diverges or relaxes the rules.

A note of caution: Strunk and White is a discipline, not a contract. The book is occasionally too rigid for editorial rhythm or for marketing wit, and slavish adherence produces prose that reads correctly but lifelessly. Use the book to load the discipline; let the voice file's specifics override when the writing context earns the override. *Read the rules. Know when to bend them. Never break them by accident.*

---

## Closing

Voices are how the design-expert plugin encodes the rule that the same words behave differently in different writing contexts. A button label cannot read like a magazine pull quote; a magazine pull quote cannot read like a button label. With voice files loaded explicitly, the conditional becomes auditable: "this surface uses UX-copy voice for the CTA and marketing voice for the hero — both follow Strunk and White as a floor, but each enforces its own ceiling." Without voice files, the model averages everything into a generic "good copy" register that fits no surface particularly well.
