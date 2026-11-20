import { api } from "../api";
import { localDay } from "./streak";
import type { Puzzle, PuzzleList } from "./constants";

/** Today's pick on this device, `{ day, id }`, so solving the daily doesn't swap in a new one on reload. */
export const DAILY_PIN_KEY = "checkmate-daily-v1";

/** The server's `max_page_size`. */
const PAGE_SIZE = 200;

const readPin = (today: string): string | null => {
  try {
    const pin = JSON.parse(localStorage.getItem(DAILY_PIN_KEY) ?? "null");
    return pin?.day === today && typeof pin.id === "string" ? pin.id : null;
  } catch {
    return null;
  }
};

const writePin = (today: string, id: string): void => {
  try {
    localStorage.setItem(DAILY_PIN_KEY, JSON.stringify({ day: today, id }));
  } catch {
    // Storage unavailable: the pick still shows, it just isn't remembered.
  }
};

/** The first puzzle in the list endpoint's order (rating, then id) that `skip` doesn't rule out. */
const firstUnskipped = async (params: Record<string, string | number>, skip: (id: string) => boolean): Promise<Puzzle | null> => {
  for (let offset = 0, total = 1; offset < total; offset += PAGE_SIZE) {
    const { data } = await api.get<PuzzleList>("/puzzles", { params: { ...params, limit: PAGE_SIZE, offset } });
    const found = data.items.find((p) => !skip(p.id));
    if (found) return found;
    total = data.total;
  }
  return null;
};

/**
 * Today's daily for this device: today's pin, else the shared daily unless already solved, else the first
 * unsolved backup (same mate length and difficulty from the daily's rating up, then same mate length at any
 * rating, then the whole catalogue). The search order
 * never depends on the user, so everyone who has solved the daily gets the same backup.
 */
export const loadDaily = async (solvedIds: ReadonlySet<string>, today: string = localDay()): Promise<Puzzle> => {
  const pinned = readPin(today);
  if (pinned) {
    try {
      return (await api.get<Puzzle>(`/puzzles/${encodeURIComponent(pinned)}`)).data;
    } catch (err) {
      // The pinned puzzle left the catalogue: pick again.
      if ((err as { response?: { status?: number } } | null)?.response?.status !== 404) throw err;
    }
  }

  const shared = (await api.get<Puzzle>("/puzzles/daily")).data;
  if (!solvedIds.has(shared.id)) {
    writePin(today, shared.id);
    return shared;
  }

  const skip = (id: string) => id === shared.id || solvedIds.has(id);
  let backup: Puzzle | null;
  try {
    backup =
      (await firstUnskipped({ mate_in: shared.mateIn, difficulty: shared.difficulty, min_rating: shared.rating }, skip)) ??
      (await firstUnskipped({ mate_in: shared.mateIn }, skip)) ??
      (await firstUnskipped({}, skip));
  } catch {
    // Show the shared daily rather than an error, unpinned so the next load searches again.
    return shared;
  }

  const pick = backup ?? shared;
  writePin(today, pick.id);
  return pick;
};
