import { useEffect, useMemo, useRef } from 'react'
import { Chessboard } from 'react-chessboard'

import type { PieceDropHandlerArgs, PieceHandlerArgs, SquareHandlerArgs } from 'react-chessboard'
import type { ReactNode } from 'react'
import { PuzzleBoardProps } from '../utils/constants'
import { Chess, Square } from 'chess.js'
import { useBoardInput } from '../hooks/useBoardInput'

const FILES = 'abcdefgh'
const RANKS = '12345678'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const PuzzleBoard = ({ game, children }: PuzzleBoardProps) => {
  const { fen, status, hintSquares, lastMove, attemptMove, solverColor, revealed } = game
  const isSolved = status === 'solved'
  const celebrate = isSolved && !revealed
  const canPlay = status !== 'solved' && status !== 'replaying'

  const input = useBoardInput(fen, solverColor, canPlay, attemptMove)
  const boardRef = useRef<HTMLDivElement>(null)

  const position = useMemo(() => new Chess(fen), [fen])

  // On checkmate: the mated king's square and the squares of the pieces giving check.
  const mate = useMemo(() => {
    if (!isSolved || !position.isCheckmate()) return null
    const turn = position.turn()
    const king = position.findPiece({ type: 'k', color: turn })[0]
    if (!king) return null
    return { king, checkers: position.attackers(king, turn === 'w' ? 'b' : 'w') }
  }, [isSolved, position])

  // A king in check (not mated) glows oxblood.
  const checkedKing = useMemo(() => {
    if (mate || !position.inCheck()) return null
    return position.findPiece({ type: 'k', color: position.turn() })[0] ?? null
  }, [mate, position])

  const squareClasses = useMemo(() => {
    const cls: Partial<Record<Square, string[]>> = {}
    const add = (sq: Square | null | undefined, c: string) => {
      if (!sq) return
      ;(cls[sq] ??= []).push(c)
    }
    if (lastMove) {
      add(lastMove.from, 'sq-last')
      add(lastMove.to, 'sq-last')
    }
    add(checkedKing, 'sq-check')
    if (hintSquares) {
      add(hintSquares.from, 'sq-hint')
      add(hintSquares.to, 'sq-hint')
    }
    add(input.selected, 'sq-selected')
    for (const t of input.targets) add(t.to, t.capture ? 'sq-capture' : 'sq-target')
    if (isSolved && mate) {
      const lit = new Set<Square>(mate.checkers)
      for (const f of FILES) {
        for (const r of RANKS) {
          const sq = `${f}${r}` as Square
          if (sq === mate.king) add(sq, 'sq-mated')
          else if (lit.has(sq)) add(sq, 'sq-checker')
          else if (celebrate) add(sq, 'sq-dim')
        }
      }
    }
    add(input.cursor, 'sq-cursor')
    return cls
  }, [lastMove, checkedKing, hintSquares, input.selected, input.targets, input.cursor, isSolved, mate, celebrate])

  // react-chessboard makes every piece a tab stop; the board itself is the single keyboard control here.
  useEffect(() => {
    const root = boardRef.current
    if (!root) return
    const quiet = () => {
      root.querySelectorAll<HTMLElement>('[aria-roledescription="draggable"]').forEach((el) => {
        if (el.tabIndex !== -1) el.tabIndex = -1
        if (el.getAttribute('aria-hidden') !== 'true') el.setAttribute('aria-hidden', 'true')
      })
    }
    quiet()
    const obs = new MutationObserver(quiet)
    obs.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ['tabindex'] })
    return () => obs.disconnect()
  }, [])

  const own = solverColor === 'white' ? 'w' : 'b'

  const options = {
    id: 'puzzle-board',
    position: fen,
    boardOrientation: solverColor,
    animationDurationInMs: prefersReducedMotion ? 0 : 220,
    showNotation: false,
    allowDrawingArrows: false,
    arrows: mate
      ? mate.checkers.map((sq) => ({ startSquare: sq, endSquare: mate.king, color: 'oklch(0.86 0.11 90 / 0.9)' }))
      : [],
    allowDragging: canPlay,
    canDragPiece: ({ piece }: PieceHandlerArgs) => piece.pieceType[0] === own,
    lightSquareStyle: { backgroundColor: 'var(--color-maple)' },
    darkSquareStyle: { backgroundColor: 'var(--color-walnut)' },
    dropSquareStyle: { boxShadow: 'inset 0 0 0 3px var(--color-brass-bright)' },
    squareRenderer: ({ square, children: piece }: SquareHandlerArgs & { children?: ReactNode }) => (
      <div className={`sq ${(squareClasses[square as Square] ?? []).join(' ')}`}>{piece}</div>
    ),
    onSquareClick: ({ square }: SquareHandlerArgs) => input.pick(square as Square),
    onPieceDrop: ({ sourceSquare, targetSquare }: PieceDropHandlerArgs) => {
      input.clear()
      if (!targetSquare) return false
      return attemptMove(sourceSquare as Square, targetSquare as Square)
    },
  }

  const files = solverColor === 'white' ? FILES.split('') : FILES.split('').reverse()
  const ranks = solverColor === 'white' ? RANKS.split('').reverse() : RANKS.split('')

  return (
    <div className={`bezel board-size ${status === 'wrong-flash' ? 'animate-clunk' : ''}`}>
      <div className="coords coords-files" aria-hidden="true">
        {files.map((f) => <span key={f}>{f}</span>)}
      </div>
      <div className="coords coords-ranks" aria-hidden="true">
        {ranks.map((r) => <span key={r}>{r}</span>)}
      </div>

      <div className={`inlay ${celebrate ? 'solved-fx' : ''}`}>
        <div
          ref={boardRef}
          className="board-input"
          tabIndex={0}
          role="application"
          aria-label={`Chessboard, playing ${solverColor === 'white' ? 'White' : 'Black'}`}
          aria-describedby="board-help"
          {...input.handlers}
        >
          <Chessboard options={options} />
        </div>
        {children}
      </div>

      <p id="board-help" className="sr-only">
        Arrow keys move around the board. Enter or Space picks up a piece and puts it down. Escape cancels.
      </p>
      <p className="sr-only" aria-live="polite">{input.announcement}</p>
    </div>
  )
}

export default PuzzleBoard
