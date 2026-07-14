from pydantic import BaseModel, ConfigDict, Field

class PuzzleRes(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

    id: str = Field(validation_alias="slug")
    title: str
    theme: str | None = None
    difficulty: str
    rating: int
    popularity: int | None = None
    description: str
    initialFen: str | None = Field(default=None, validation_alias="initial_fen")
    fen: str
    preMove: str | None = Field(default=None, validation_alias="pre_move")
    solution: list[str]


class PuzzleListRes(BaseModel):
    items: list[PuzzleRes]
    total: int
    limit: int
    offset: int
