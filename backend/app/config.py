import os


class Settings:
    database_url: str = os.environ.get("DATABASE_URL", "sqlite:///./puzzles.db")

    cors_origins: list[str] = [
        origin.strip()
        for origin in os.environ.get("CORS_ORIGINS", "http://localhost:5173").split(",")
        if origin.strip()
    ]

    max_page_size: int = int(os.environ.get("MAX_PAGE_SIZE", "200"))

    docs_enabled: bool = os.environ.get("ENABLE_DOCS", "1") == "1"


settings = Settings()
