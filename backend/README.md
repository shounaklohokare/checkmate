# Chess Puzzle Trainer API

FastAPI backend that serves puzzles out of Postgres (or SQLite for local dev)
to the React frontend.

## Project layout

```
app/
  main.py          FastAPI app, CORS, router registration
  config.py        env-based settings (DATABASE_URL, CORS_ORIGINS, ...)
  db.py            engine + per-request session dependency
  models.py        Puzzle and DailySchedule ORM models — the single source of truth for the schema
  daily.py         daily puzzle selection: weekday pools and pick_daily
  schemas.py       Pydantic response models (camelCase, matches the frontend's Puzzle type)
  routers/
    puzzles.py     all /api/puzzles endpoints
tests/             pytest suite (API and daily schedule)
puzzles.db         committed SQLite database: the puzzles and the daily schedule
requirements.txt
requirements-dev.txt
.env.example
```

## Setup

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

Settings come only from real environment variables (`DATABASE_URL`,
`CORS_ORIGINS`, `MAX_PAGE_SIZE`; see `.env.example`). Nothing loads a `.env`
file, so export them in your shell.

With no `DATABASE_URL` set, the API reads the committed SQLite database
`./puzzles.db` (run from `backend/`). To use Postgres instead:

```bash
export DATABASE_URL="postgresql://puzzle_admin:changeme@localhost:5432/chess_puzzles"
```

## Data

The committed `puzzles.db` holds 3,397 puzzles and the `daily_schedule` table,
so there is nothing to seed for local development.

Each scheduled date has one puzzle from its weekday's pool in `app/daily.py`
(Monday mate in 1 rated 800–999 up to Sunday mate in 3 rated 1400–1799). A date
with no row falls back to a mate-in-1–2 puzzle rated under 1500.

## Run the API

```bash
uvicorn app.main:app --reload --port 8000
```

Interactive docs at `http://localhost:8000/docs`.

## Endpoints

| Method | Path                  | Description                                              |
|--------|-----------------------|------------------------------------------------------------|
| GET    | `/health`              | Liveness check                                            |
| GET    | `/api/puzzles`         | List puzzles. Query params: `difficulty`, `theme`, `min_rating`, `max_rating`, `mate_in` (1–4 exact, 5 means 5 or more), `limit` (default 50, max 200), `offset` |
| GET    | `/api/puzzles/daily`   | Today's puzzle from the stored schedule, same for everyone. Optional `date` (`YYYY-MM-DD`, within one day of the server's UTC date, else 422) |
| GET    | `/api/puzzles/{id}`    | Single puzzle by id (the human-readable slug, e.g. `p1` or `i5qhQ`) — 404 if missing |

`/api/puzzles` and `/api/puzzles/{id}` both return puzzle objects shaped like:

```json
{
  "id": "i5qhQ",
  "title": "Mate in 4",
  "theme": "cornerMate",
  "difficulty": "Medium",
  "rating": 1814,
  "popularity": 95,
  "description": "Trap the king in the corner. Find the forced checkmate.",
  "initialFen": "5rk1/1p4pp/p2p2q1/2p1p1nr/2P3P1/1P1P2KP/P4P2/R1BQ1R2 w - - 3 27",
  "fen": "5rk1/1p4pp/p2p2q1/2p1p1nP/2P5/1P1P2KP/P4P2/R1BQ1R2 b - - 0 27",
  "preMove": "gxh5",
  "solution": ["Ne4+", "Kh2", "Rxf2+", "Rxf2", "Qg3+", "Kh1", "Nxf2#"],
  "mateIn": 4
}
```

`theme` is the puzzle's primary named mate pattern in camelCase (for
example `backRankMate`), or `null` when it has none. `mateIn` is the mate
length.

This is the same shape as the frontend's existing `Puzzle` TS type (`id` maps
from the DB's `slug` column; `initialFen`/`preMove` map from
`initial_fen`/`pre_move`) — swapping the React app from its hardcoded
`puzzles.ts` array to fetching from this API shouldn't require changing the
`Puzzle` type or any component that already consumes it.

The list endpoint wraps results for pagination:

```json
{ "items": [ ... ], "total": 5, "limit": 50, "offset": 0 }
```

## CORS

Set `CORS_ORIGINS` to a comma-separated list of allowed origins (defaults to
`http://localhost:5173`, Vite's default dev server). Add your deployed
frontend's origin here in production.

## Tested

All endpoints (list with each filter individually and combined, pagination,
daily, get-by-id, 404 on missing id, 422 on an out-of-range `limit`)
were run against a real seeded SQLite database via both FastAPI's TestClient
and a live `uvicorn` server + curl, including a CORS preflight check.
