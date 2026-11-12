import { useCallback, useEffect, useMemo, useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";
import { Chess, Square, PieceSymbol } from "chess.js";
import { SolverColor } from "../utils/constants.ts";

const FILES = "abcdefgh";

const PIECE_NAMES: Record<PieceSymbol, string> = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king",
};

export interface BoardTarget {
  to: Square;
  capture: boolean;
}

/**
 * Click/tap-to-move and keyboard play on top of react-chessboard's drag and drop.
 * Pure UI state: every move still goes through the game's own attemptMove.
 */
export const useBoardInput = (
  fen: string,
  solverColor: SolverColor,
  enabled: boolean,
  attemptMove: (from: Square, to: Square) => boolean
) => {
  const [selected, setSelected] = useState<Square | null>(null);
  const [cursor, setCursor] = useState<Square>(solverColor === "white" ? "e2" : "e7");
  const [keyboardActive, setKeyboardActive] = useState(false);
  const [announcement, setAnnouncement] = useState("");

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

  const describe = useCallback(
    (sq: Square): string => {
      const p = chess.get(sq);
      if (!p) return `${sq}, empty`;
      return `${sq}, ${p.color === "w" ? "white" : "black"} ${PIECE_NAMES[p.type]}`;
    },
    [chess]
  );

  const pick = useCallback(
    (sq: Square) => {
      if (!enabled) return;
      if (selected) {
        if (sq === selected) {
          setSelected(null);
          setAnnouncement("Selection cleared.");
          return;
        }
        if (targets.some((t) => t.to === sq)) {
          setSelected(null);
          attemptMove(selected, sq);
          return;
        }
      }
      if (chess.get(sq)?.color === own) {
        const n = chess.moves({ square: sq }).length;
        setSelected(sq);
        setAnnouncement(`${describe(sq)} selected. ${n} ${n === 1 ? "move" : "moves"} available.`);
        return;
      }
      setSelected(null);
    },
    [enabled, selected, targets, chess, own, describe, attemptMove]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      const flip = solverColor === "black" ? -1 : 1;
      const step: Record<string, [number, number]> = {
        ArrowUp: [0, flip],
        ArrowDown: [0, -flip],
        ArrowLeft: [-flip, 0],
        ArrowRight: [flip, 0],
      };
      setKeyboardActive(true);

      if (step[e.key]) {
        e.preventDefault();
        const [df, dr] = step[e.key];
        const f = Math.min(7, Math.max(0, FILES.indexOf(cursor[0]) + df));
        const r = Math.min(8, Math.max(1, Number(cursor[1]) + dr));
        const next = `${FILES[f]}${r}` as Square;
        setCursor(next);
        const isTarget = targets.some((t) => t.to === next);
        setAnnouncement(`${describe(next)}${isTarget ? ", legal move" : ""}`);
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pick(cursor);
        return;
      }
      if (e.key === "Escape" && selected) {
        e.preventDefault();
        setSelected(null);
        setAnnouncement("Selection cleared.");
      }
    },
    [solverColor, cursor, targets, describe, pick, selected]
  );

  const onFocus = useCallback((e: FocusEvent<HTMLElement>) => {
    if (e.currentTarget.matches(":focus-visible")) setKeyboardActive(true);
  }, []);

  const onBlur = useCallback(() => setKeyboardActive(false), []);
  const onPointerDown = useCallback(() => setKeyboardActive(false), []);
  const clear = useCallback(() => setSelected(null), []);

  return {
    selected,
    targets,
    cursor: keyboardActive ? cursor : null,
    announcement,
    pick,
    clear,
    handlers: { onKeyDown, onFocus, onBlur, onPointerDown },
  };
};
