import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chess, Square, PieceSymbol } from "chess.js";
import { HintSquares, INITIAL_MOVE_DELAY, LastMove, REPLAY_DELAY, REPLY_DELAY, Status, UsePuzzleGameReturn, type Puzzle } from "../utils/constants.ts";

export const usePuzzleGame = ( puzzle: Puzzle | null): UsePuzzleGameReturn => {
  const chessRef = useRef<Chess>(new Chess());

  const replayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [fen, setFen] = useState<string>(  puzzle?.initialFen ?? new Chess().fen() );

  const [moveIndex, setMoveIndex] = useState<number>(0);

  const [status, setStatus] = useState<Status>("playing");

  const [hintLevel, setHintLevel] = useState<number>(0);

  const [attempts, setAttempts] = useState<number>(0);

  const [lastMove, setLastMove] =  useState<LastMove | null>(null);

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

  useEffect(() => {   
    
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

    playInitialMove(chess);

    return () => {
      if (replayTimer.current) {
        clearTimeout(replayTimer.current);
      }
    };
  }, [puzzle, playInitialMove]);

  useEffect(() => {
    return () => {
      if (replayTimer.current) {
        clearTimeout(replayTimer.current);
      } };}, 
  []);


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

        setTimeout(() => { setStatus("playing"); }, 550);

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
        setStatus("correct-flash");

        setTimeout(() => {
          setStatus("playing");
        }, 300);

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

    playInitialMove(chess);
  }, [puzzle, playInitialMove]);


  const replaySolution = useCallback((): void => {
    if (!puzzle) return;

    if (replayTimer.current) {
      clearTimeout(replayTimer.current);
    }

    const chess = new Chess(puzzle.initialFen);

    chessRef.current = chess;

    setFen(chess.fen());
    setStatus("replaying");
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
    fen, status,attempts,hintLevel,hintSquares, lastMove, moveIndex, solverColor, isSolved: status === "solved", attemptMove, requestHint,
    reset, replaySolution
  };
    
}