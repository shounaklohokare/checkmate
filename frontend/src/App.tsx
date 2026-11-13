import { useEffect, useMemo, useState } from "react";

import { usePuzzleGame } from "./hooks/usePuzzleGame";
import { useProgress } from "./hooks/useProgress";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Header from "./components/Header.tsx";
import PuzzleBoard from "./components/PuzzleBoard.tsx";
import PuzzleMeta from "./components/PuzzleMeta.tsx";
import GameControls from "./components/GameControls.tsx";
import PuzzleLibrary from "./components/PuzzleLibrary.tsx";
import DailyColumn from "./components/DailyColumn.tsx";
import CabinetDrawer from "./components/CabinetDrawer.tsx";
import { GearIcon } from "./components/Icons.tsx";
import type { Mode, Puzzle, PuzzleList } from "./utils/constants.ts";
import Footer from "./components/Footer.tsx";
import { api } from "./api.ts";
import SolvedCard from "./components/SolvedCard.tsx";
import { playSolved, playTick, playWrong } from "./lib/sound.ts";

const App = () => {
  const [mode, setMode] = useState<Mode>("daily");

  const [dailyPuzzle, setDailyPuzzle] = useState<Puzzle | null>(null);
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle | null>(null);

  const isDesktop = useMediaQuery("(min-width: 64rem)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLibrarySelect = (puzzle: Puzzle) => {
    setSelectedPuzzle(puzzle);
    setDrawerOpen(false);
  };

  useEffect(() => {
    let cancelled = false;

    async function loadPuzzles() {
      setLoading(true);
      setLoadError(false);
      try {
        const [dailyRes, puzzlesRes] = await Promise.all([
          api.get<Puzzle>("/puzzles/daily"),
          api.get<PuzzleList>("/puzzles"),
        ]);
        if (cancelled) return;

        setDailyPuzzle(dailyRes.data);
        setPuzzles(puzzlesRes.data.items);
      } catch (err) {
        console.error("Failed to load puzzles:", err);
        if (!cancelled) setLoadError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPuzzles();
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

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
    // Only on the transition to solved. Right after a puzzle switch the game still reports the previous puzzle's
    // solved state for one render, so reacting to the puzzle changing would mark the new puzzle solved unplayed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.isSolved]);

  useEffect(() => {
    if (game.status === "solved" && !game.revealed) playSolved(streak);
    if (game.status === "wrong-flash") playWrong();
    // Only react to status transitions; streak changes right after solving and must not replay the chime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.status]);

  // A gear tick for each correct move the machine then answers (the mating move gets the bell instead).
  useEffect(() => {
    if (game.moveIndex % 2 === 1 && !game.revealed && activePuzzle && game.moveIndex < activePuzzle.solution.length) playTick();
    // Only on move-index changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.moveIndex]);

  const currentLibraryIndex = puzzles.findIndex(
    (p) => p.id === activePuzzle?.id
  );

  const nextPuzzle = currentLibraryIndex >= 0 ? puzzles[currentLibraryIndex + 1] : undefined;

  const handleNext = (): void => {
  if (!nextPuzzle) return;
  setMode("library");
  setSelectedPuzzle(nextPuzzle);
};

  if (loadError) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="plate px-8 py-6">
          <p className="engraved font-display text-[1.625rem]">The mechanism jammed.</p>
          <p className="engraved mt-1 text-[1rem]">The puzzle archive couldn't be reached. Check that the server is running.</p>
        </div>
        <button type="button" className="key" onClick={() => setReloadKey((k) => k + 1)}>
          Try again
        </button>
      </div>
    );
  }

  if (loading || !dailyPuzzle || puzzles.length === 0) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4" role="status">
        <GearIcon className="gear gear-spin size-14" />
        <span className="font-mono text-[1rem] font-bold text-ivory-dim">The machine is winding…</span>
      </div>
    );
  }

  const caption = (
    <PuzzleMeta puzzle={activePuzzle} solved={activePuzzle ? solvedIds.has(activePuzzle.id) : false} />
  );

  const drawerLabel = mode === "daily" ? "The Daily Problem" : "The Catalogue";
  const behindDrawer = drawerOpen && !isDesktop;

  return (
    <div className="flex min-h-svh flex-col">
      <div inert={behindDrawer}>
        <Header
          mode={mode}
          onModeChange={setMode}
          streak={streak}
          subtitle="Checkmate puzzles, sharpen your tactics."
        />
      </div>

      <main className="mx-auto w-full max-w-[78rem] flex-1 px-3 pt-5 pb-24 sm:px-4 md:px-8 md:pt-7 lg:pb-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
          <section aria-label="Puzzle" className="board-size mx-auto flex flex-col gap-4 lg:mx-0" inert={behindDrawer}>
            <PuzzleBoard game={game}>
              {game.isSolved && (
                <SolvedCard
                  key={activePuzzle?.id}
                  fen={game.fen}
                  attempts={game.attempts}
                  revealed={game.revealed}
                  streak={streak}
                  hasNext={Boolean(nextPuzzle)}
                  onNext={handleNext}
                  onBrowse={() => setMode("library")}
                />
              )}
            </PuzzleBoard>

            <GameControls game={game} onNext={handleNext} hasNext={Boolean(nextPuzzle)} />
            {!isDesktop && caption}
          </section>

          <CabinetDrawer label={drawerLabel} isDesktop={isDesktop} open={drawerOpen} onOpenChange={setDrawerOpen}>
            {mode === "daily" ? (
              <DailyColumn
                puzzle={dailyPuzzle}
                showCaption={isDesktop}
                solvedCount={solvedIds.size}
                streak={streak}
                solvedToday={solvedIds.has(dailyPuzzle.id)}
              />
            ) : (
              <div className="flex flex-col gap-4">
                {isDesktop && caption}
                <PuzzleLibrary
                  activeId={activePuzzle?.id ?? ""}
                  solvedIds={solvedIds}
                  onSelect={handleLibrarySelect}
                />
              </div>
            )}
          </CabinetDrawer>
        </div>
      </main>
      <div inert={behindDrawer}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
