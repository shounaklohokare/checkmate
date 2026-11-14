import { useCallback, useEffect, useState } from "react";
import { api } from "../api.ts";
import type { Filter, LibraryState, Puzzle, PuzzleList } from "../utils/constants.ts";

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

  const key = `${filter}|${page}|${size}|${retryKey}`;

  useEffect(() => {
    let cancelled = false;

    api.get<PuzzleList>("/puzzles", {
      params: {
        difficulty: filter === "All" ? undefined : filter,
        limit: size,
        offset: page * size,
      },
    }).then((res) => {
      if (!cancelled) setData({ key, items: res.data.items, total: res.data.total });
    }).catch(() => {
      if (!cancelled) setErrorKey(key);
    });

    return () => { cancelled = true; };
  }, [filter, page, size, key]);

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

  return {
    filter,
    page,
    pages: Math.max(1, Math.ceil(data.total / size)),
    items: data.items,
    total: data.total,
    loading: data.key !== key && !error,
    error,
    setFilter,
    setPage,
    setPageSize,
    retry,
  };
};
