import { useEffect, useMemo, useState } from "react";
import { puzzles, getPuzzleOfTheDay } from "./data/puzzles.ts";
import { usePuzzleGame } from "./hooks/usePuzzleGame";
import { useProgress } from "./hooks/useProgress";
import Header from "./components/Header.tsx";
import PuzzleBoard from "./components/PuzzleBoard.tsx";
import PuzzleMeta from "./components/PuzzleMeta.tsx";
import GameControls from "./components/GameControls.tsx";
import PuzzleLibrary from "./components/PuzzleLibrary.tsx";
import type { Puzzle } from "./utils/constants.ts";
import Footer from "./components/Footer.tsx";

type Mode = "daily" | "library";

const dailyPuzzle: Puzzle = getPuzzleOfTheDay();

const App = () => {
  const [mode, setMode] = useState<Mode>("daily");
  const [selectedId, setSelectedId] = useState<string>(puzzles[0].id);

  const {
    solvedIds,
    streak,
    darkMode,
    markSolved,
    toggleDarkMode,
  } = useProgress();

  const activePuzzle = useMemo<Puzzle>(() => {
    if (mode === "daily") return dailyPuzzle;

    return puzzles.find((p) => p.id === selectedId) ?? puzzles[0];
  }, [mode, selectedId]);

  const game = usePuzzleGame(activePuzzle);

  useEffect(() => {
    if (game.isSolved) {
      markSolved(activePuzzle.id);
    }
  }, [game.isSolved, activePuzzle.id, markSolved]);

  const currentLibraryIndex = puzzles.findIndex(
    (p) => p.id === activePuzzle.id
  );

  const nextPuzzle = currentLibraryIndex >= 0 ? puzzles[currentLibraryIndex + 1] : undefined;

  const handleNext = (): void => {
    if (!nextPuzzle) return;

    setMode("library");
    setSelectedId(nextPuzzle.id);
  };

  const boardSize = 440;

  return (
    <div className="min-h-screen flex flex-col bg-parchment dark:bg-ink transition-colors">
      <Header
        mode={mode}
        onModeChange={setMode}
        streak={streak}
        darkMode={darkMode}
        onToggleDark={toggleDarkMode}
      />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-8">
        <div className="flex sm:hidden gap-1 bg-ink/5 dark:bg-ivory/10 rounded-full p-1 mb-6 w-fit">
          {(["daily", "library"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3 py-1 text-sm rounded-full font-medium capitalize ${
                mode === m
                  ? "bg-brass text-ink"
                  : "text-ink/60 dark:text-ivory/60"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center gap-5 mx-auto md:mx-0">

            <PuzzleBoard game={game} boardSize={boardSize} />

            <div style={{ width: boardSize }} className="w-full">

              <PuzzleMeta puzzle={activePuzzle} solved={solvedIds.has(activePuzzle.id)} />

              <GameControls game={game} onNext={handleNext} hasNext={Boolean(nextPuzzle)}/>
            </div>
          </div>

          {mode === "library" && (
            <PuzzleLibrary
              puzzles={puzzles}
              activeId={activePuzzle.id}
              solvedIds={solvedIds}
              onSelect={setSelectedId}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;