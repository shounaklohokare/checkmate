import { useCallback, useEffect, useState } from "react";
import { ProgressState, SavedProgress, STORAGE_KEY } from "../utils/constants";

const todayStr = (d: Date = new Date()): string => {
  return d.toISOString().slice(0, 10);
}

const isYesterday = (dateStr: string, today: Date = new Date()): boolean => {
  const y = new Date(today);
  y.setDate(y.getDate() - 1);
  return dateStr === todayStr(y);
}

const loadInitial = (): ProgressState => {
  let saved: SavedProgress | null = null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    saved = raw ? (JSON.parse(raw) as SavedProgress) : null;
  } catch {
    saved = null;
  }

  const prefersDark = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;

  return {
    solvedIds: new Set(saved?.solvedIds ?? []),
    streak: saved?.streak ?? 0,
    lastSolvedDate: saved?.lastSolvedDate ?? null,
    darkMode: saved?.darkMode ?? prefersDark,
  };
}

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressState>(loadInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", progress.darkMode);
  }, [progress.darkMode]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY,
        JSON.stringify({
          solvedIds: Array.from(progress.solvedIds),
          streak: progress.streak,
          lastSolvedDate: progress.lastSolvedDate,
          darkMode: progress.darkMode,
        })
      );
    } catch {
      
    }
  }, [progress]);

  const markSolved = useCallback((puzzleId: string): void => {
    setProgress((prev) => {
      if (prev.solvedIds.has(puzzleId)) {
        return prev;
      }

      const today = todayStr();
      const alreadyCountedToday = prev.lastSolvedDate === today;

      const nextStreak = alreadyCountedToday
        ? prev.streak
        : prev.lastSolvedDate && isYesterday(prev.lastSolvedDate)
        ? prev.streak + 1
        : 1;

      const nextSolved = new Set(prev.solvedIds);
      nextSolved.add(puzzleId);

      return {
        ...prev,
        solvedIds: nextSolved,
        streak: nextStreak,
        lastSolvedDate: alreadyCountedToday
          ? prev.lastSolvedDate
          : today,
      };
    });
  }, []);

  const toggleDarkMode = useCallback((): void => {
    setProgress((prev) => ({
      ...prev,
      darkMode: !prev.darkMode,
    }));
  }, []);

  return {
    solvedIds: progress.solvedIds,
    streak: progress.streak,
    darkMode: progress.darkMode,
    markSolved,
    toggleDarkMode,
  };
}