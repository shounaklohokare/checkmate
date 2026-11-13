# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Casual players and beginners learning checkmate patterns. They drop in for a short session, usually to do the one Daily problem and keep their streak alive, and sometimes browse the Library for more, mostly on the Easy shelf. They lean on hints and "Show solution", and they need the board, the prompt ("White to mate in 2") and what to do next to be obvious without chess-site jargon.

## Product Purpose

Checkmate is a checkmate-puzzle trainer. Daily mode serves one deterministic puzzle per day; Library mode is a filterable, paginated archive of 1,000 mating puzzles. Progress (solved puzzles and the daily streak) lives only in the visitor's browser. Success is a visitor who comes back tomorrow: they solve or learn from today's problem, see their streak grow, and feel like they got a little better at spotting mates.

## Positioning

Only forced checkmates, nothing else: every puzzle ends in mate, so each solve has a single, unambiguous payoff. No account, no sign-up, no server-side profile: open it and play.

## Operating Context

- Short, often daily sessions, on desktop and phone.
- Puzzles are played by dragging pieces (react-chessboard) with move checking by exact SAN match.
- Daily problem is picked server-side by `date.today().toordinal() % count`; the streak date is UTC on the client.
- Library is sorted by rating and filterable by difficulty (Easy 800–1499, Medium 1500–1999, Hard 2000–2199) and by theme (14 tactical themes, e.g. BackRankMate, Deflection, DiscoveredCheck). Pages of 30.

## Capabilities and Constraints

- Read-only FastAPI backend; no auth; the frontend talks to it only over `/api/puzzles*`.
- Puzzle titles are "Mate in N"; ids are short slugs (e.g. `i5qhQ`). There is no human-friendly puzzle number in the API.
- Game logic, daily selection, and the localStorage keys and shape (`gambit-progress-v1`, `gambit-sound-muted`) must not change.
- Sound effects are synthesized with Web Audio (no audio files) and can be muted.

## Brand Commitments

- Name: "Checkmate".
- Footer credit to the developer (github.com/shounaklohokare) stays.

## Evidence on Hand

- 1,000 puzzles in `backend/puzzles.db` with title, theme, difficulty, rating, description, FENs, and SAN solution.
- No user counts, testimonials, or ratings exist; do not invent them.

## Product Principles

1. The board comes first: legibility of the position beats every ornament.
2. One clear next step at all times: your move, try again, take a hint, next puzzle.
3. Reward the solve: the checkmate moment is the emotional payoff and should feel earned.
4. Gentle with beginners: hints and the solution are always one press away, and mistakes are never punishing.
5. Nothing to sign up for; progress is the visitor's own.

## Accessibility & Inclusion

WCAG 2.2 AA contrast for all text and controls, visible focus, full keyboard play on the board, real form controls behind any custom-looking control, and `prefers-reduced-motion` honored.
