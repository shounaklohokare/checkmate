import sqlite3
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from app.main import app

DB_PATH = Path(__file__).resolve().parents[1] / "puzzles.db"


@pytest.fixture
def client():
    return TestClient(app)


@pytest.fixture
def db_count():
    conn = sqlite3.connect(f"{DB_PATH.as_uri()}?mode=ro", uri=True)
    try:
        return conn.execute("select count(*) from puzzles").fetchone()[0]
    finally:
        conn.close()
