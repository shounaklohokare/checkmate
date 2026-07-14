from sqlalchemy import JSON, Column, Integer, String, Text
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Puzzle(Base):
    __tablename__ = "puzzles"

    id = Column(Integer, primary_key=True)
    slug = Column(String(50), unique=True, nullable=False, index=True)  
    title = Column(String(200), nullable=False)
    theme = Column(String(100), index=True)
    difficulty = Column(String(10), nullable=False, index=True)
    rating = Column(Integer, nullable=False)
    popularity = Column(Integer)
    description = Column(Text, nullable=False)
    initial_fen = Column(String(100))
    pre_move = Column(String(10))
    fen = Column(String(100), nullable=False)
    solution = Column(JSON, nullable=False)  
