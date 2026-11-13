import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chess, Square, PieceSymbol } from "chess.js";
import { GameState, GameStatus, HintSquares, INITIAL_MOVE_DELAY, LastMove, REPLAY_DELAY, REPLY_DELAY, type Puzzle } from "../utils/constants.ts";

export const usePuzzleGame = ( puzzle: Puzzle | null): GameState => {
    const chessRef = useRef<Chess>(new Chess());

    const replayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [fen, setFen] = useState<string>(() => puzzle?.initialFen ?? new Chess().fen());

    const [moveIndex, setMoveIndex] = useState<number>(0);

    const [status, setStatus] = useState<GameStatus>("playing");

    const [hintLevel, setHintLevel] = useState<number>(0);

    const [attempts, setAttempts] = useState<number>(0);

    const [lastMove, setLastMove] =  useState<LastMove | null>(null);

    // True once "Show solution" was used, so the solved state isn't celebrated as the player's own.
    const [revealed, setRevealed] = useState<boolean>(false);

    const solverColor: "white" | "black" = puzzle?.fen.split(" ")[1] === "b"  ? "black" : "white";

  
    const playInitialMove = useCallback(

      (chess: Chess) => {
        if (!puzzle?.preMove) {
          setStatus("playing");
          return;
        }

        setStatus("replaying");

        replayTimer.current = setTimeout(() => {
          const mv = chess.move(puzzle.preMove);

          setFen(chess.fen());

          setLastMove(mv ? { from: mv.from, to: mv.to } : null);

          setStatus("playing");
        }, INITIAL_MOVE_DELAY);
      },[puzzle]);


    const playOpponentReply = useCallback((idx: number) => {
        if (!puzzle) return;

        const san = puzzle.solution[idx];

        if (!san) return;

        setStatus("replaying");

        replayTimer.current = setTimeout(() => {
          const chess = chessRef.current;

          const mv = chess.move(san);

          setFen(chess.fen());

          setLastMove(mv ? { from: mv.from, to: mv.to,}: null);

          const nextIdx = idx + 1;

          setMoveIndex(nextIdx);

          setStatus(nextIdx >= puzzle.solution.length ? "solved" : "playing");

        }, REPLY_DELAY);

    }, [puzzle]);

  
    const attemptMove = useCallback(

      (sourceSquare: Square,targetSquare: Square, promotion: PieceSymbol = "q"): boolean => {

        if (!puzzle || status === "solved" ||status === "replaying") {
          return false;
        }

        const chess = chessRef.current;

        const expectedSan = puzzle.solution[moveIndex];

        if (!expectedSan) return false;

        const snapshotFen = chess.fen();

        // The board has no promotion picker: on the solution's from/to squares, promote to the solution's piece (some puzzles underpromote).
        const expected = chess.moves({ verbose: true }).find((m) => m.san === expectedSan);
        if (expected?.promotion && expected.from === sourceSquare && expected.to === targetSquare) {
          promotion = expected.promotion;
        }

        let mv = null;

        try {
          mv = chess.move({from: sourceSquare, to: targetSquare, promotion });
        } catch {
          mv = null;
        }

        if (!mv) return false;

        if (mv.san !== expectedSan) {
          chess.load(snapshotFen);

          setStatus("wrong-flash");

          setAttempts((a) => a + 1);

          // Only end the flash: a quick correct move, a reset or a new puzzle may have moved the status on already.
          setTimeout(() => { setStatus((s) => (s === "wrong-flash" ? "playing" : s)); }, 550);

          return false;
        }

        const nextIdx = moveIndex + 1;

        setFen(chess.fen());

        setLastMove({from: mv.from, to: mv.to,});

        setHintLevel(0);

        setMoveIndex(nextIdx);

        if (nextIdx >= puzzle.solution.length) {
          setStatus("solved");
        } else {
          // Sets "replaying"; GameControls shows that as the correct-move state.
          playOpponentReply(nextIdx);
        }

        return true;
      },[puzzle, moveIndex, status, playOpponentReply]
    );
  
    const requestHint = useCallback((): void => {
      setHintLevel((lvl) => Math.min(lvl + 1, 2));
    }, []);

    const hintSquares = useMemo<HintSquares | null>(() => {
      if (!puzzle || hintLevel === 0 ||status === "solved") {
        return null;
      }

      const expectedSan = puzzle.solution[moveIndex];

      if (!expectedSan) return null;

      const temp = new Chess(fen);

      const found = temp.moves({ verbose: true }).find((m) => m.san === expectedSan);

      if (!found) return null;

      return hintLevel >= 2 ? { from: found.from, to: found.to } : { from: found.from};

    }, [puzzle, hintLevel, moveIndex,fen, status,]);


    const reset = useCallback((): void => {
      if (!puzzle) return;

      if (replayTimer.current) {
        clearTimeout(replayTimer.current);
      }

      const chess = new Chess(puzzle.initialFen);

      chessRef.current = chess;

      setFen(chess.fen());
      setMoveIndex(0);
      setStatus("playing");
      setHintLevel(0);
      setAttempts(0);
      setLastMove(null);
      setRevealed(false);

      playInitialMove(chess);
    }, [puzzle, playInitialMove]);

    useEffect(() => {
      reset();

      return () => {
        if (replayTimer.current) {
          clearTimeout(replayTimer.current);
        }
      };
    }, [reset]);


    const replaySolution = useCallback((): void => {
      if (!puzzle) return;

      if (replayTimer.current) {
        clearTimeout(replayTimer.current);
      }

      const chess = new Chess(puzzle.initialFen);

      chessRef.current = chess;

      setFen(chess.fen());
      setStatus("replaying");
      setRevealed(true);
      setHintLevel(0);
      setMoveIndex(0);
      setLastMove(null);

      const sequence = [
        puzzle.preMove,
        ...puzzle.solution,
      ];

      let i = 0;

      const step = () => {
        const san = sequence[i];

        if (!san) {
          setStatus("solved");
          setMoveIndex(puzzle.solution.length);
          return;
        }

        const mv = chess.move(san);

        setFen(chess.fen());

        setLastMove(mv ? { from: mv.from, to: mv.to, } : null);

        if (i > 0) {
          setMoveIndex(i);
        }

        i++;

        replayTimer.current = setTimeout(step,REPLAY_DELAY);

      };

      replayTimer.current = setTimeout(step, 400);
    }, [puzzle]);

    return { 
      fen, status,attempts,hintLevel,hintSquares, lastMove, moveIndex, solverColor, isSolved: status === "solved", revealed, attemptMove, requestHint,
      reset, replaySolution
    };
    
}