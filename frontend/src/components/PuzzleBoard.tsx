import { useMemo } from 'react'
import { Chessboard } from 'react-chessboard'

import type { PieceDropHandlerArgs } from 'react-chessboard'
import { PuzzleBoardProps, SquareStyles, STATUS_RING } from '../utils/constants'
import { Chess, Square } from 'chess.js'

const FILES = 'abcdefgh'

const PuzzleBoard = ({ game, boardSize = 480 }: PuzzleBoardProps) => {
  const { fen, status, hintSquares, lastMove, attemptMove, solverColor } = game
  const isSolved = status === 'solved'

  // On checkmate: the mated king's square and the squares of the pieces giving check.
  const mate = useMemo(() => {
    if (!isSolved) return null
    const chess = new Chess(fen)
    if (!chess.isCheckmate()) return null
    const turn = chess.turn()
    const king = chess.findPiece({ type: 'k', color: turn })[0]
    if (!king) return null
    return { king, checkers: chess.attackers(king, turn === 'w' ? 'b' : 'w') }
  }, [isSolved, fen])

  const squareStyles = useMemo<SquareStyles>(() => {
    const styles: SquareStyles = {}
    if (lastMove) {
      styles[lastMove.from] = { backgroundColor: 'rgba(199, 162, 82, 0.35)' }
      styles[lastMove.to] = { backgroundColor: 'rgba(199, 162, 82, 0.35)' }
    }
    if (hintSquares) {
      styles[hintSquares.from] = {
        ...styles[hintSquares.from],
        boxShadow: 'inset 0 0 0 3px var(--color-brass-bright)',
      }
      if (hintSquares.to) {
        styles[hintSquares.to] = {
          ...styles[hintSquares.to],
          boxShadow: 'inset 0 0 0 3px var(--color-brass-bright)',
        }
      }
    }
    if (isSolved) {
      const lit = new Set<Square>(mate ? mate.checkers : lastMove ? [lastMove.to] : [])
      for (const f of FILES) {
        for (let r = 1; r <= 8; r++) {
          const sq = `${f}${r}` as Square
          if (sq === mate?.king) {
            styles[sq] = { animation: 'mated-king 600ms ease-in-out 150ms 2 both' }
          } else if (lit.has(sq)) {
            styles[sq] = { ...styles[sq], boxShadow: 'inset 0 0 0 4px var(--color-brass-bright)' }
          } else {
            styles[sq] = { ...styles[sq], animation: 'square-dim 300ms ease-out 150ms both' }
          }
        }
      }
    }
    return styles
  }, [lastMove, hintSquares, isSolved, mate])

  const options = {
    id: 'puzzle-board',
    position: fen,
    boardOrientation: solverColor,
    animationDurationInMs: 200,
    showNotation: true,
    squareStyles,
    arrows: mate
      ? mate.checkers.map((sq) => ({ startSquare: sq, endSquare: mate.king, color: 'rgba(224, 192, 122, 0.9)' }))
      : [],
    allowDragging: status !== 'solved' && status !== 'replaying',
    lightSquareStyle: { backgroundColor: 'var(--color-parchment)' },
    darkSquareStyle: { backgroundColor: 'var(--color-felt)' },
    dropSquareStyle: { boxShadow: 'inset 0 0 0 3px var(--color-brass)' },
    alphaNotationStyle: { color: 'var(--color-brass)', fontFamily: 'var(--font-mono)' },
    numericNotationStyle: { color: 'var(--color-brass)', fontFamily: 'var(--font-mono)' },
    onPieceDrop: ({ sourceSquare, targetSquare }: PieceDropHandlerArgs) => {
      if (!targetSquare) return false
      return attemptMove(sourceSquare as Square, targetSquare as Square)
    },
  }

  return (
    <div className={`relative ${isSolved ? 'solved-fx' : ''}`} style={{ width: boardSize + 16 }}>
      {isSolved && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl animate-solved-burst" />
      )}
      <div
        className={`relative rounded-2xl p-2 ring-4 transition-colors duration-300 bg-felt-deep ${
          STATUS_RING[status] ?? 'ring-transparent'
        }`}
      >
        <Chessboard options={options} />
      </div>
    </div>
  )
}

export default PuzzleBoard
