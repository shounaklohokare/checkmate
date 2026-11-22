import { useCallback, useEffect, useState } from "react";
import { api } from "../api.ts";
import type { Filter, LibraryState, Puzzle, PuzzleList } from "../utils/constants.ts";

type Page = { items: Puzzle[]; total: number };

// Pages already fetched, keyed `${filter}|${page}|${size}`. Only successful responses go in.
const cache = new Map<string, Page>();

/** Empties the page cache (tests). */
export const clearLibraryCache = (): void => cache.clear();

const fetchPage = async (filter: Filter, page: number, size: number): Promise<Page> => {
  const res = await api.get<PuzzleList>("/puzzles", {
    params: {
      difficulty: filter === "All" ? undefined : filter,
      limit: size,
      offset: page * size,
    },
  });
  const fetched = { items: res.data.items, total: res.data.total };
  cache.set(`${filter}|${page}|${size}`, fetched);
  return fetched;
};

// The catalogue's list: difficulty filter, page, and the fetched page of puzzles.
// Lives in App so it survives mode switches and feeds "Next puzzle".
export const useLibrary = (): LibraryState => {
  const [filter, setFilterState] = useState<Filter>("All");
  // Page size follows the room the catalogue has (PuzzleLibrary measures it): up to a 2×4 grid.
  const [paging, setPaging] = useState({ page: 0, size: 8 });
  const { page, size } = paging;
  const [retryKey, setRetryKey] = useState(0);

  // What was fetched, tagged with the request it answers, so `loading` is never a render behind.
  const [data, setData] = useState<{ key: string; items: Puzzle[]; total: number }>({ key: "", items: [], total: 0 });
  const [errorKey, setErrorKey] = useState("");

  const cacheKey = `${filter}|${page}|${size}`;
  const key = `${cacheKey}|${retryKey}`;
  const cached = cache.get(cacheKey);

  useEffect(() => {
    let cancelled = false;

    // Warm the next page so paging and "Next puzzle" don't wait. A failed prefetch is ignored.
    const prefetch = (total: number) => {
      if ((page + 1) * size < total && !cache.has(`${filter}|${page + 1}|${size}`)) {
        fetchPage(filter, page + 1, size).catch(() => {});
      }
    };

    const hit = cache.get(cacheKey);
    if (hit) {
      // Keep it as the list shown while a later, uncached page loads.
      setData({ key, ...hit });
      prefetch(hit.total);
    } else {
      fetchPage(filter, page, size).then((fetched) => {
        if (cancelled) return;
        setData({ key, ...fetched });
        prefetch(fetched.total);
      }).catch(() => {
        if (!cancelled) setErrorKey(key);
      });
    }

    return () => { cancelled = true; };
  }, [filter, page, size, cacheKey, key]);

  const setFilter = useCallback((f: Filter): void => {
    setFilterState(f);
    setPaging((p) => ({ ...p, page: 0 }));
  }, []);

  const setPage = useCallback((n: number): void => setPaging((p) => ({ ...p, page: n })), []);

  // A new page size keeps the first visible puzzle on screen.
  const setPageSize = useCallback((n: number): void => {
    setPaging((p) => (p.size === n ? p : { size: n, page: Math.floor((p.page * p.size) / n) }));
  }, []);

  const retry = useCallback((): void => setRetryKey((k) => k + 1), []);

  const error = errorKey === key;
  const shown = cached ?? data;

  return {
    filter,
    page,
    pages: Math.max(1, Math.ceil(shown.total / size)),
    items: shown.items,
    total: shown.total,
    loading: !cached && data.key !== key && !error,
    error,
    setFilter,
    setPage,
    setPageSize,
    retry,
  };
};
