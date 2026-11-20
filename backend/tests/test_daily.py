import sqlite3
from datetime import date, datetime, timedelta, timezone

from app.daily import POOLS, pick_daily
from app.db import SessionLocal
from tests.conftest import DB_PATH


def _query(sql):
    conn = sqlite3.connect(f"{DB_PATH.as_uri()}?mode=ro", uri=True)
    try:
        return conn.execute(sql).fetchall()
    finally:
        conn.close()


def _schedule():
    return [(date.fromisoformat(d), slug) for d, slug in _query("select day, puzzle_slug from daily_schedule order by day")]


def test_schedule_has_1095_distinct_days_and_puzzles():
    assert _query("select count(*), count(distinct puzzle_slug) from daily_schedule") == [(1095, 1095)]


def test_every_scheduled_puzzle_fits_its_weekday_pool():
    rows = _query(
        "select d.day, p.mate_in, p.rating from daily_schedule d "
        "left join puzzles p on p.slug = d.puzzle_slug"
    )
    for day, mate_in, rating in rows:
        want_mate, lo, hi = POOLS[date.fromisoformat(day).weekday()]
        assert mate_in == want_mate and lo <= rating <= hi, day


def test_pick_daily_returns_the_scheduled_puzzle():
    day, slug = _schedule()[0]
    with SessionLocal() as db:
        assert pick_daily(db, day).slug == slug


def test_pick_daily_falls_back_to_a_beginner_puzzle_after_the_schedule():
    last_day, _ = _schedule()[-1]
    with SessionLocal() as db:
        puzzle = pick_daily(db, last_day + timedelta(days=3652))
    assert puzzle.mate_in <= 2 and puzzle.rating < 1500


def test_daily_endpoint(client):
    res = client.get("/api/puzzles/daily")
    assert res.status_code == 200
    today = datetime.now(timezone.utc).date().isoformat()
    assert client.get(f"/api/puzzles/daily?date={today}").json()["id"] == res.json()["id"]


def test_daily_rejects_far_or_invalid_dates(client):
    assert client.get("/api/puzzles/daily?date=2000-01-01").status_code == 422
    assert client.get("/api/puzzles/daily?date=garbage").status_code == 422
