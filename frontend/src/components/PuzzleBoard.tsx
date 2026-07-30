import { useMemo } from 'react'
import { Chessboard } from 'react-chessboard'

import type { PieceDropHandlerArgs } from 'react-chessboard'
import { PuzzleBoardProps, SquareStyles, STATUS_RING } from '../utils/constants'
import { Square } from 'chess.js'

const PuzzleBoard = ({ game, boardSize = 480 }: PuzzleBoardProps) => {
  const { fen, status, hintSquares, lastMove, attemptMove, solverColor } = game
  const isSolved = status === 'solved'

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
    return styles
  }, [lastMove, hintSquares])

  const options = {
    id: 'puzzle-board',
    position: fen,
    boardOrientation: solverColor,
    animationDurationInMs: 200,
    showNotation: true,
    squareStyles,
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
    <div className="relative" style={{ width: boardSize + 16 }}>
      <div
        className={`rounded-2xl p-2 ring-4 transition-colors duration-300 bg-felt-deep ${
          STATUS_RING[status] ?? 'ring-transparent'
        } ${isSolved ? 'animate-solved-glow' : ''}`}
      >
        <Chessboard options={options} />
      </div>

      {isSolved && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sage text-ink shadow-lg animate-solved-pop">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default PuzzleBoard