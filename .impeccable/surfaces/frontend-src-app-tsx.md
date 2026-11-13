---
version: 1
slug: "frontend-src-app-tsx"
primary_target: "frontend/src/App.tsx"
related_targets: ["frontend/src/components"]
---

# Surface: Checkmate app (Daily + Library)

Scope: the whole single-page app (frontend/src/App.tsx and components). Visitor mode: Operate.
Audience: casual players and beginners; short daily sessions on desktop and phone.
Task: solve the Daily problem or pick one from the Library; keep the streak.
Constraints: no changes to game logic, daily selection, or localStorage keys/shape. WCAG AA, keyboard play, real form controls, reduced motion. Library gains a theme filter and paged navigation (30 per page), confirmed by the user. Sounds re-voiced (tick, clunk, bell), confirmed.
Memorable moment: the checkmate sequence (gears lock, steam, bell, SOLVED stamp) under 1.2 s.

## Direction contract

THESIS: The app is a Victorian chess automaton's cabinet: a lit inlaid board in a brass bezel, a problem caption below it, and a paper column or card-catalogue drawer beside it. It refuses the flat dark dashboard with pill tabs and rounded cards.

OWN-WORLD: The cabinet palette in a contemporary build (revised at the user's request, "slightly more modern while keeping the shades of colors"). Flat mahogany ground and panels with hairline borders and soft shadows from above; a brass bezel and brass primary actions; parchment for paper (captions, column, cards); verdigris for correct and keyboard focus; oxblood for error, check and the one SOLVED stamp; all OKLCH, warm-tinted. Hanken Grotesk for UI and display, JetBrains Mono for IDs, ratings and counters. No textures, rivets or bevels; segmented controls and a switch over real radios and a checkbox.

STORY: The visitor sees today's problem on the board, reads "White to play and mate in two", plays it by drag, tap or keyboard, and the machine answers with lamps, a gear and a bell. Streak gauge and ledger show progress; the catalogue offers more.

FIRST VIEWPORT: Header band: riveted nameplate on the left, Daily/Library lever in the middle, streak gauge and sound switch on the right. The board is the hero, sized to the viewport height (max 38rem), with the status/controls strip directly beneath it. The right column (27rem) sits beside it as one block and holds The Daily Problem (split-flap date, column with the problem caption, ledger) or the catalogue (caption, control panel with dial, theme select and page counter, then index cards). On mobile the board is full width, the caption sits under the board, and the column becomes a pull-out drawer.
Adaptation (cited): on desktop the problem caption lives in the column, not under the board, to keep the board and the controls above the fold at 1440x900.

FORM: Brief-pinned direction ("The Automaton's Cabinet"). Concept roll not run: per new-work, a brief-pinned direction beats the roll. seed: none (brief-pinned)
Signature move: the status strip's indicator cluster (lamp, gear, bell) is the machine's voice: the gear turns while the machine moves, ticks on a correct move, and locks with steam and a bell on mate, and a SOLVED stamp lands on the slip.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
