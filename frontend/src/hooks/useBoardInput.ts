import { useCallback, useEffect, useMemo, useState } from "react";
import { Chess, Square } from "chess.js";
import { SolverColor } from "../utils/constants.ts";

export interface BoardTarget {
  to: Square;
  capture: boolean;
}

/**
 * Click/tap-to-move on top of react-chessboard's drag and drop.
 * Pure UI state: every move still goes through the game's own attemptMove.
 */
export const useBoardInput = (
  fen: string,
  solverColor: SolverColor,
  enabled: boolean,
  attemptMove: (from: Square, to: Square) => boolean
) => {
  const [selected, setSelected] = useState<Square | null>(null);

  const chess = useMemo(() => new Chess(fen), [fen]);
  const own = solverColor === "white" ? "w" : "b";

  useEffect(() => {
    setSelected(null);
  }, [fen, enabled]);

  const targets = useMemo<BoardTarget[]>(() => {
    if (!selected) return [];
    return chess
      .moves({ square: selected, verbose: true })
      .map((m) => ({ to: m.to as Square, capture: Boolean(m.captured) }));
  }, [chess, selected]);

  const pick = useCallback(
    (sq: Square) => {
      if (!enabled) return;
      if (selected) {
        if (sq === selected) {
          setSelected(null);
          return;
        }
        if (targets.some((t) => t.to === sq)) {
          setSelected(null);
          attemptMove(selected, sq);
          return;
        }
      }
      if (chess.get(sq)?.color === own) {
        setSelected(sq);
        return;
      }
      setSelected(null);
    },
    [enabled, selected, targets, chess, own, attemptMove]
  );

  const clear = useCallback(() => setSelected(null), []);

  return { selected, targets, pick, clear };
};
