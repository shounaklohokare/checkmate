from datetime import date

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.config import settings
from app.db import get_db
from app.models import Puzzle
from app.schemas import PuzzleListRes, PuzzleRes

router = APIRouter(prefix="/api/puzzles", tags=["puzzles"])

@router.get("/daily", response_model=PuzzleRes)
def get_daily_puzzle(db: Session = Depends(get_db)):
    total = db.execute(select(func.count()).select_from(Puzzle)).scalar_one()
    if total == 0:
        raise HTTPException(status_code=404, detail="No puzzles available")

    index = date.today().toordinal() % total
    puzzle = db.execute(select(Puzzle).order_by(Puzzle.id).offset(index).limit(1)).scalar_one()
    return puzzle

@router.get("", response_model=PuzzleListRes)
def list_puzzles(
    difficulty: str | None = Query(None, description="Easy | Medium | Hard"),
    theme: str | None = None,
    min_rating: int | None = None,
    max_rating: int | None = None,
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

    total = db.execute(select(func.count()).select_from(query.subquery())).scalar_one()
    rows = db.execute(query.order_by(Puzzle.rating, Puzzle.id).offset(offset).limit(limit)).scalars().all()

    return PuzzleListRes(items=rows, total=total, limit=limit, offset=offset)

@router.get("/{puzzle_id}", response_model=PuzzleRes)
def get_puzzle(puzzle_id: str, db: Session = Depends(get_db)):
    puzzle = db.execute(select(Puzzle).where(Puzzle.slug == puzzle_id)).scalar_one_or_none()
    if puzzle is None:
        raise HTTPException(status_code=404, detail=f"No puzzle with id '{puzzle_id}'")
    return puzzle
