import { useEffect, useState } from "react";

import { usePuzzleGame } from "./hooks/usePuzzleGame";
import { useProgress } from "./hooks/useProgress";
import { useLibrary } from "./hooks/useLibrary";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Header from "./components/Header.tsx";
import PuzzleBoard from "./components/PuzzleBoard.tsx";
import PuzzleMeta from "./components/PuzzleMeta.tsx";
import GameControls from "./components/GameControls.tsx";
import PuzzleLibrary from "./components/PuzzleLibrary.tsx";
import DailyColumn from "./components/DailyColumn.tsx";
import CabinetDrawer from "./components/CabinetDrawer.tsx";
import { SpinnerIcon } from "./components/Icons.tsx";
import type { Mode, Puzzle } from "./utils/constants.ts";
import Footer from "./components/Footer.tsx";
import { api } from "./api.ts";
import SolvedCard from "./components/SolvedCard.tsx";
import { playMove, playSolved, playTick, playWrong } from "./lib/sound.ts";

const App = () => {
  const [mode, setMode] = useState<Mode>("daily");

  const [dailyPuzzle, setDailyPuzzle] = useState<Puzzle | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const library = useLibrary();
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle | null>(null);
  // Set while "Next puzzle" waits for the following catalogue page: the page whose first puzzle to select.
  const [awaitedPage, setAwaitedPage] = useState<number | null>(null);

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
        const dailyRes = await api.get<Puzzle>("/puzzles/daily");
        if (cancelled) return;

        setDailyPuzzle(dailyRes.data);
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

  // The library's default puzzle is the first one of the first page to arrive; later filter changes don't swap the board.
  useEffect(() => {
    if (!selectedPuzzle && !library.loading && library.items[0]) setSelectedPuzzle(library.items[0]);
  }, [selectedPuzzle, library.loading, library.items]);

  // "Next puzzle" across a page boundary: select the new page's first puzzle once it arrives.
  // Dropped if the fetch failed or the user moved to another page or filter meanwhile.
  useEffect(() => {
    if (awaitedPage === null || library.loading) return;
    if (!library.error && library.page === awaitedPage && library.items[0]) setSelectedPuzzle(library.items[0]);
    setAwaitedPage(null);
  }, [awaitedPage, library.loading, library.error, library.page, library.items]);

  const activePuzzle = mode === "daily" ? dailyPuzzle : selectedPuzzle;

  const game = usePuzzleGame(activePuzzle);

  useEffect(() => {
    if (game.isSolved && !game.revealed && activePuzzle) {
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

  // A knock for every move that lands on the board: setup move, player, opponent and replays.
  useEffect(() => {
    if (game.lastMove) playMove();
  }, [game.lastMove]);

  // A gear tick for each correct move the machine then answers (the mating move gets the bell instead).
  useEffect(() => {
    if (game.moveIndex % 2 === 1 && !game.revealed && activePuzzle && game.moveIndex < activePuzzle.solution.length) playTick();
    // Only on move-index changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.moveIndex]);

  // "Next puzzle" follows the catalogue's current list. If the active puzzle isn't in it
  // (the daily, or the filter/page changed since), next is the list's first other puzzle.
  const currentLibraryIndex = library.items.findIndex(
    (p) => p.id === activePuzzle?.id
  );

  const nextPuzzle = currentLibraryIndex >= 0
    ? library.items[currentLibraryIndex + 1]
    : library.items.find((p) => p.id !== activePuzzle?.id);

  const hasNextPage = currentLibraryIndex >= 0 && library.page < library.pages - 1;
  const hasNext = Boolean(nextPuzzle) || hasNextPage;

  const handleNext = (): void => {
    if (awaitedPage !== null) return;
    if (nextPuzzle) {
      setMode("library");
      setSelectedPuzzle(nextPuzzle);
    } else if (hasNextPage) {
      setMode("library");
      library.setPage(library.page + 1);
      setAwaitedPage(library.page + 1);
    }
  };

  if (loadError || (library.error && !selectedPuzzle)) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="panel max-w-md px-8 py-6">
          <p className="font-display text-[1.5rem] text-fg">Couldn't reach the puzzles.</p>
          <p className="mt-1 text-[1rem] text-fg-muted">The puzzle server didn't answer. Check that it's running, then try again.</p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => { setReloadKey((k) => k + 1); library.retry(); }}>
          Try again
        </button>
      </div>
    );
  }

  if (loading || !dailyPuzzle || !selectedPuzzle) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4" role="status">
        <SpinnerIcon className="size-10 animate-spin" />
        <span className="text-[1rem] font-medium text-fg-muted">Loading puzzles…</span>
      </div>
    );
  }

  const caption = (
    <PuzzleMeta
      puzzle={activePuzzle}
      solved={activePuzzle ? solvedIds.has(activePuzzle.id) : false}
      compact
      showDescription={mode === "library"}
    />
  );

  const controls = <GameControls game={game} onNext={handleNext} hasNext={hasNext} />;

  const drawerLabel = mode === "daily" ? "Today's puzzle" : "Library";
  const behindDrawer = drawerOpen && !isDesktop;

  return (
    <div className="flex h-dvh flex-col overflow-hidden max-lg:pb-14">
      <div inert={behindDrawer} className="shrink-0">
        <Header
          mode={mode}
          onModeChange={setMode}
          streak={streak}
        />
      </div>

      <main
        className="mx-auto min-h-0 w-full max-w-[78rem] flex-1 overflow-y-auto px-3 py-3 sm:px-4 md:px-8 md:pt-4 lg:pb-4"
      >
        <div
          className="flex h-full flex-col gap-3 lg:flex-row lg:items-stretch lg:justify-center lg:gap-10"
        >
          <section
            aria-label="Puzzle"
            className="play-area board-col-fit mx-auto flex min-h-0 flex-1 flex-col gap-3 max-lg:w-full lg:mx-0 lg:min-w-0 lg:flex-initial"
            inert={behindDrawer}
          >
            <div className="board-fit">
              <PuzzleBoard game={game}>
                {game.isSolved && (
                  <SolvedCard
                    key={activePuzzle?.id}
                    fen={game.fen}
                    attempts={game.attempts}
                    revealed={game.revealed}
                    streak={streak}
                    hasNext={hasNext}
                    onNext={handleNext}
                    onBrowse={() => setMode("library")}
                  />
                )}
              </PuzzleBoard>
            </div>

            {!isDesktop && controls}
            {!isDesktop && caption}
          </section>

          <CabinetDrawer label={drawerLabel} isDesktop={isDesktop} open={drawerOpen} onOpenChange={setDrawerOpen} fill>
            <div className="flex min-h-0 flex-1 flex-col gap-3">
              {/* Desktop: the controls head the side column so the board can take the full height. */}
              {isDesktop && controls}
              {mode === "daily" ? (
                <DailyColumn
                  puzzle={dailyPuzzle}
                  showCaption={isDesktop}
                  solvedCount={solvedIds.size}
                  streak={streak}
                  solvedToday={solvedIds.has(dailyPuzzle.id)}
                />
              ) : (
                <>
                  {isDesktop && caption}
                  <PuzzleLibrary
                    activeId={activePuzzle?.id ?? ""}
                    solvedIds={solvedIds}
                    onSelect={handleLibrarySelect}
                    library={library}
                  />
                </>
              )}
              {/* On phones the drawer handle owns the bottom edge, so the credit rides at the foot of the drawer. */}
              {!isDesktop && (
                <div className="mt-auto">
                  <Footer />
                </div>
              )}
            </div>
          </CabinetDrawer>
        </div>
      </main>

      {isDesktop && (
        <div className="shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
