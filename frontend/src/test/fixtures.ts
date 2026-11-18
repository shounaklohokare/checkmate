import type { Puzzle } from '../utils/constants'

/** f4→g6 is the stored mate; f4→e6 (Nxe6#) also mates; h7→h8 is legal and not mate. */
export const ALT_MATE: Puzzle = {
  id: '1gmp7',
  title: 'Mate in 1',
  theme: 'CornerMate',
  difficulty: 'Easy',
  rating: 882,
  popularity: 82,
  description: 'Trap the king in the corner. Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move.',
  initialFen: '4qkr1/r2n3R/p3p3/1p1pP3/3P1N2/2P2Q2/PP4PP/6K1 b - - 4 29',
  preMove: 'Nxe5',
  fen: '4qkr1/r6R/p3p3/1p1pn3/3P1N2/2P2Q2/PP4PP/6K1 w - - 0 30',
  solution: ['Ng6#'],
}

/** Solver f7→h6, reply g8→h8, solver f1→f8. */
export const MATE_IN_2: Puzzle = {
  id: 'jj2u7',
  title: 'Mate in 2',
  theme: 'BackRankMate',
  difficulty: 'Easy',
  rating: 918,
  popularity: 87,
  description: 'Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.',
  initialFen: '5rk1/5Npp/p7/1p6/6P1/1BP1b2P/PP1r4/5R1K b - - 0 26',
  preMove: 'Rxb2',
  fen: '5rk1/5Npp/p7/1p6/6P1/1BP1b2P/Pr6/5R1K w - - 0 27',
  solution: ['Nh6+', 'Kh8', 'Rxf8#'],
}
