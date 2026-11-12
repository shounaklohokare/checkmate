import { Puzzle, SolverColor } from "./constants"

export const hintLabel = (hintLevel: number): string => {
  if (hintLevel === 0) return 'Hint'
  if (hintLevel === 1) return 'Another hint'
  return 'Hints used'
}

/** What the lit squares mean, shown under the status line once a hint is taken. */
export const hintText = (hintLevel: number, solverColor: SolverColor): string => {
  if (hintLevel === 1) return `Move the ${solverColor === 'white' ? 'White' : 'Black'} piece on the lit square.`
  if (hintLevel >= 2) return 'Both squares are lit: move from one to the other.'
  return ''
}

/** "BackRankMate" → "Back Rank Mate", "AttackingF2F7" → "Attacking f2/f7". */
export const themeLabel = (theme: string): string => {
  if (theme === 'AttackingF2F7') return 'Attacking f2/f7'
  return theme.replace(/([a-z])([A-Z])/g, '$1 $2')
}

const NUMBER_WORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

/** The solver's moves in the solution (it alternates solver/opponent, starting with the solver). */
export const mateIn = (puzzle: Puzzle): number => Math.ceil(puzzle.solution.length / 2)

/** Problem-book prompt: "White to play and mate in two moves." */
export const problemPrompt = (puzzle: Puzzle): string => {
  const n = mateIn(puzzle)
  const side = puzzle.fen.split(' ')[1] === 'b' ? 'Black' : 'White'
  if (n === 1) return `${side} to play and mate in one move.`
  return `${side} to play and mate in ${NUMBER_WORDS[n - 1] ?? n} moves.`
}
