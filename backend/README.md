# Chess Puzzle Trainer API

FastAPI backend that serves puzzles out of Postgres (or SQLite for local dev)
to the React frontend.

## Project layout

```
app/
  main.py          FastAPI app, CORS, router registration
  config.py        env-based settings (DATABASE_URL, CORS_ORIGINS, ...)
  db.py            engine + per-request session dependency
  models.py        Puzzle ORM model — the single source of truth for the schema
  schemas.py       Pydantic response models (camelCase, matches the frontend's Puzzle type)
  routers/
    puzzles.py     all /api/puzzles endpoints
scripts/
  convert-puzzles-to-json.mjs   TS/JS puzzle data -> JSON
  import_puzzles.py             validates with python-chess, then loads into the DB
requirements.txt
.env.example
```

`scripts/import_puzzles.py` imports `Puzzle`/`Base` from `app/models.py` rather
than defining its own copy, so the table the importer writes to and the table
the API reads from can never drift out of sync. Run it from the project root
so the `app` package is importable:

```bash
python scripts/import_puzzles.py puzzles.json
```

## Setup

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # edit DATABASE_URL / CORS_ORIGINS as needed
```

For local development without Postgres running, just point `DATABASE_URL` at
SQLite instead — everything in this project is SQLAlchemy-generic and works
against either:

```bash
export DATABASE_URL="sqlite:///./chess_puzzles.db"
```

## Seed the database

```bash
python scripts/import_puzzles.py puzzles.json
```

This creates the database and the `puzzles` table if they don't exist yet
(see the import script's own docs for details), validates every puzzle with
`python-chess`, and upserts the valid ones.

## Run the API

```bash
uvicorn app.main:app --reload --port 8000
```

Interactive docs at `http://localhost:8000/docs`.

## Endpoints

| Method | Path                  | Description                                              |
|--------|-----------------------|------------------------------------------------------------|
| GET    | `/health`              | Liveness check                                            |
| GET    | `/api/puzzles`         | List puzzles. Query params: `difficulty`, `theme`, `min_rating`, `max_rating`, `limit` (default 50, max 200), `offset` |
| GET    | `/api/puzzles/daily`   | Deterministic daily puzzle — same for everyone, changes once a day |
| GET    | `/api/puzzles/themes`  | Distinct list of themes currently in the database         |
| GET    | `/api/puzzles/{id}`    | Single puzzle by id (the human-readable slug, e.g. `p1` or `i5qhQ`) — 404 if missing |

`/api/puzzles` and `/api/puzzles/{id}` both return puzzle objects shaped like:

```json
{
  "id": "i5qhQ",
  "title": "Mate in 4",
  "theme": "Attraction",
  "difficulty": "Medium",
  "rating": 1814,
  "popularity": 95,
  "description": "Trap the king in the corner. Find the forced checkmate.",
  "initialFen": "5rk1/1p4pp/p2p2q1/2p1p1nr/2P3P1/1P1P2KP/P4P2/R1BQ1R2 w - - 3 27",
  "fen": "5rk1/1p4pp/p2p2q1/2p1p1nP/2P5/1P1P2KP/P4P2/R1BQ1R2 b - - 0 27",
  "preMove": "gxh5",
  "solution": ["Ne4+", "Kh2", "Rxf2+", "Rxf2", "Qg3+", "Kh1", "Nxf2#"]
}
```

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
themes, daily, get-by-id, 404 on missing id, 422 on an out-of-range `limit`)
were run against a real seeded SQLite database via both FastAPI's TestClient
and a live `uvicorn` server + curl, including a CORS preflight check.
