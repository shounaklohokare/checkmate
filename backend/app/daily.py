from datetime import date

from sqlalchemy import Select, func, select
from sqlalchemy.orm import Session

from app.models import DailySchedule, Puzzle

# Weekday (Monday = 0) -> (mate_in, min_rating, max_rating), inclusive.
POOLS: dict[int, tuple[int, int, int]] = {
    0: (1, 800, 999),
    1: (1, 1000, 1199),
    2: (2, 800, 1199),
    3: (2, 1200, 1399),
    4: (2, 1400, 1799),
    5: (3, 800, 1399),
    6: (3, 1400, 1799),
}


def _pick_by_ordinal(db: Session, query: Select, day: date) -> Puzzle | None:
    count = db.execute(select(func.count()).select_from(query.subquery())).scalar_one()
    if count == 0:
        return None
    return db.execute(query.order_by(Puzzle.id).offset(day.toordinal() % count).limit(1)).scalar_one()


def pick_daily(db: Session, day: date) -> Puzzle | None:
    scheduled = db.execute(
        select(Puzzle).join(DailySchedule, DailySchedule.puzzle_slug == Puzzle.slug).where(DailySchedule.day == day)
    ).scalar_one_or_none()
    if scheduled is not None:
        return scheduled
    beginner = select(Puzzle).where(Puzzle.mate_in <= 2, Puzzle.rating < 1500)
    return _pick_by_ordinal(db, beginner, day) or _pick_by_ordinal(db, select(Puzzle), day)
