import { useEffect, useMemo, useState } from "react";

import { usePuzzleGame } from "./hooks/usePuzzleGame";
import { useProgress } from "./hooks/useProgress";
import Header from "./components/Header.tsx";
import PuzzleBoard from "./components/PuzzleBoard.tsx";
import PuzzleMeta from "./components/PuzzleMeta.tsx";
import GameControls from "./components/GameControls.tsx";
import PuzzleLibrary from "./components/PuzzleLibrary.tsx";
import type { Puzzle } from "./utils/constants.ts";
import Footer from "./components/Footer.tsx";
import { api } from "./api.ts";

type Mode = "daily" | "library";

const App = () => {
  const [mode, setMode] = useState<Mode>("daily");

  const [dailyPuzzle, setDailyPuzzle] = useState<Puzzle | null>(null);
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle | null>(null);

  const handleLibrarySelect = (puzzle: Puzzle) => {
    setSelectedId(puzzle.id);
    setSelectedPuzzle(puzzle);
  };

  useEffect(() => {
    async function loadPuzzles() {
      try {
        const [dailyRes, puzzlesRes] = await Promise.all([
          api.get<Puzzle>("/puzzles/daily"),
          api.get<{
            items: Puzzle[];
            total: number;
            limit: number;
            offset: number;
          }>("/puzzles"),
        ]);

        setDailyPuzzle(dailyRes.data);
        setPuzzles(puzzlesRes.data.items);

        if (puzzlesRes.data.items.length > 0) {
          setSelectedId(puzzlesRes.data.items[0].id);
        }
      } catch (err) {
        console.error("Failed to load puzzles:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPuzzles();
  }, []);

  const { solvedIds, streak, markSolved } = useProgress();

  const activePuzzle = useMemo<Puzzle | null>(() => {
    if (mode === "daily") return dailyPuzzle;
    return selectedPuzzle ?? puzzles[0] ?? null;
  }, [mode, dailyPuzzle, selectedPuzzle, puzzles]);

  const game = usePuzzleGame(activePuzzle);

  useEffect(() => {
    if (game.isSolved && activePuzzle) {
      markSolved(activePuzzle.id);
    }
  }, [game.isSolved, activePuzzle?.id, markSolved]);

  const currentLibraryIndex = puzzles.findIndex(
    (p) => p.id === activePuzzle?.id
  );

  const nextPuzzle = currentLibraryIndex >= 0 ? puzzles[currentLibraryIndex + 1] : undefined;

  const handleNext = (): void => {
  if (!nextPuzzle) return;
  setMode("library");
  setSelectedId(nextPuzzle.id);
  setSelectedPuzzle(nextPuzzle);
};

  const boardSize = 440;

  if (loading || !dailyPuzzle || puzzles.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-ink">
        <div className="w-8 h-8 border-2 border-brass border-t-transparent rounded-full animate-spin" />
        <span className="text-ivory/50 text-sm tracking-wide">Loading today's puzzle…</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-ink transition-colors">
      <Header
        mode={mode}
        onModeChange={setMode}
        streak={streak}
        subtitle="Checkmate puzzles, sharpen your tactics."
      />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-8">
  

        <div className="flex sm:hidden gap-1 bg-ivory/10 rounded-full p-1 mb-6 w-fit">
          {(["daily", "library"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3 py-1 text-sm rounded-full font-medium capitalize transition-colors ${
                mode === m ? "bg-brass text-ink" : "text-ivory/60"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center gap-5 mx-auto md:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-black/30 ring-1 ring-ivory/10">
              <PuzzleBoard game={game} boardSize={boardSize} />
            </div>

            <div style={{ width: boardSize }} className="w-full">
              <PuzzleMeta puzzle={activePuzzle} solved={activePuzzle ? solvedIds.has(activePuzzle.id) : false} />
              <GameControls game={game} onNext={handleNext} hasNext={Boolean(nextPuzzle)} />
            </div>
          </div>

          {mode === "library" && (
            <PuzzleLibrary
              activeId={activePuzzle?.id ?? ""}
              solvedIds={solvedIds}
              onSelect={handleLibrarySelect}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;