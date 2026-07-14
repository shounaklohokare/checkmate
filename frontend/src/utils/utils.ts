import { SolverColor } from "./constants"

export const hintLabel = (hintLevel: number, solverColor: SolverColor): string => {
  if (hintLevel === 0) return 'Hint'
  if (hintLevel === 1) return `Hint: move the ${solverColor === 'white' ? 'White' : 'Black'} piece on the lit square`
  return 'Hint: now find the target square'
}
