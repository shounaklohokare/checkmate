from datetime import date, datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Query, Response
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.config import settings
from app.daily import pick_daily
from app.db import get_db
from app.models import Puzzle
from app.schemas import PuzzleListRes, PuzzleRes

router = APIRouter(prefix="/api/puzzles", tags=["puzzles"])

@router.get("/daily", response_model=PuzzleRes)
def get_daily_puzzle(response: Response, day: date | None = Query(None, alias="date"), db: Session = Depends(get_db)):
    today = datetime.now(timezone.utc).date()
    if day is None:
        day = today
    if abs((day - today).days) > 1:
        raise HTTPException(status_code=422, detail="date must be within one day of the server's UTC date")

    puzzle = pick_daily(db, day)
    if puzzle is None:
        raise HTTPException(status_code=404, detail="No puzzles available")
    response.headers["Cache-Control"] = "public, max-age=300"
    return puzzle

@router.get("", response_model=PuzzleListRes)
def list_puzzles(
    response: Response,
    difficulty: str | None = Query(None, description="Easy | Medium | Hard"),
    theme: str | None = None,
    min_rating: int | None = None,
    max_rating: int | None = None,
    mate_in: int | None = Query(None, ge=1, le=5, description="1-4 exact; 5 means 5 or more"),
    limit: int = Query(50, ge=1, le=settings.max_page_size),
    offset: int = Query(0, ge=0),
    db: Session = Depends(get_db),
):
    query = select(Puzzle)
    if difficulty:
        query = query.where(Puzzle.difficulty == difficulty)
    if theme:
        query = query.where(Puzzle.theme == theme)
    if min_rating is not None:
        query = query.where(Puzzle.rating >= min_rating)
    if max_rating is not None:
        query = query.where(Puzzle.rating <= max_rating)
    if mate_in is not None:
        query = query.where(Puzzle.mate_in >= 5 if mate_in == 5 else Puzzle.mate_in == mate_in)

    total = db.execute(select(func.count()).select_from(query.subquery())).scalar_one()
    rows = db.execute(query.order_by(Puzzle.rating, Puzzle.id).offset(offset).limit(limit)).scalars().all()

    response.headers["Cache-Control"] = "public, max-age=3600"
    return PuzzleListRes(items=rows, total=total, limit=limit, offset=offset)

@router.get("/{puzzle_id}", response_model=PuzzleRes)
def get_puzzle(puzzle_id: str, response: Response, db: Session = Depends(get_db)):
    puzzle = db.execute(select(Puzzle).where(Puzzle.slug == puzzle_id)).scalar_one_or_none()
    if puzzle is None:
        raise HTTPException(status_code=404, detail=f"No puzzle with id '{puzzle_id}'")
    response.headers["Cache-Control"] = "public, max-age=3600"
    return puzzle
