import { useMemo } from 'react'
import { Chessboard } from 'react-chessboard'

import type { PieceDropHandlerArgs } from 'react-chessboard'
import { PuzzleBoardProps, SquareStyles, STATUS_RING } from '../utils/constants'
import { Square } from 'chess.js'

const PuzzleBoard = ({ game, boardSize = 480 }: PuzzleBoardProps) => {
  const { fen, status, hintSquares, lastMove, attemptMove, solverColor } = game

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
    <div
      className={`rounded-2xl p-2 ring-4 transition-colors duration-300 bg-felt-deep ${STATUS_RING[status] ?? 'ring-transparent'}`}
      style={{ width: boardSize + 16 }}
    >
      <Chessboard options={options} />
    </div>
  )
}

export default PuzzleBoard;