PUZZLE_KEYS = {
    "id", "title", "theme", "difficulty", "rating", "popularity",
    "description", "initialFen", "fen", "preMove", "solution", "mateIn",
}


def test_health(client):
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json() == {"status": "ok"}


def test_list_defaults(client, db_count):
    res = client.get("/api/puzzles")
    assert res.status_code == 200
    body = res.json()
    assert body["limit"] == 50
    assert body["offset"] == 0
    assert body["total"] == db_count
    assert len(body["items"]) == 50
    ratings = [p["rating"] for p in body["items"]]
    assert ratings == sorted(ratings)


def test_list_difficulty_filter(client):
    res = client.get("/api/puzzles", params={"difficulty": "Easy", "limit": 5})
    assert res.status_code == 200
    items = res.json()["items"]
    assert items
    assert all(p["difficulty"] == "Easy" for p in items)


def test_list_limit_too_large(client):
    assert client.get("/api/puzzles", params={"limit": 201}).status_code == 422


def test_list_offset(client):
    first = client.get("/api/puzzles", params={"limit": 5, "offset": 0}).json()["items"][0]
    shifted = client.get("/api/puzzles", params={"limit": 5, "offset": 5}).json()["items"][0]
    assert shifted["id"] != first["id"]


def test_get_by_id(client):
    res = client.get("/api/puzzles/UPfj4")
    assert res.status_code == 200
    body = res.json()
    assert set(body) == PUZZLE_KEYS
    assert body["id"] == "UPfj4"
    assert body["mateIn"] == 4
    assert body["title"] == "Mate in 4"
    assert isinstance(body["solution"], list)
    assert body["solution"]
    assert all(isinstance(m, str) for m in body["solution"])


def test_get_by_id_not_found(client):
    assert client.get("/api/puzzles/nope").status_code == 404


def test_removed_non_mate_is_gone(client):
    assert client.get("/api/puzzles/OQFl3").status_code == 404


def test_daily(client):
    res = client.get("/api/puzzles/daily")
    assert res.status_code == 200
    assert res.json()["solution"]


def test_list_mate_in_filter(client):
    body = client.get("/api/puzzles?mate_in=1&limit=200").json()
    assert body["total"] > 0
    assert all(p["mateIn"] == 1 for p in body["items"])
    body = client.get("/api/puzzles?mate_in=5&limit=200").json()
    assert body["total"] > 0
    assert all(p["mateIn"] >= 5 for p in body["items"])


def test_list_mate_in_out_of_range(client):
    assert client.get("/api/puzzles?mate_in=6").status_code == 422
    assert client.get("/api/puzzles?mate_in=0").status_code == 422
