
import type { Square, PieceSymbol } from 'chess.js'

export type Difficulty = "Easy" | "Medium" | "Hard" | "Expert";

export interface Puzzle {
  id: string;
  title: string;
  theme: string;
  difficulty: Difficulty;
  rating: number;
  popularity: number;
  description: string;
  initialFen: string;
  fen: string;
  preMove: string;
  solution: string[];
}

export interface PuzzleMetaProps {
  puzzle: Puzzle | null | undefined
  solved: boolean   
}

export const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Easy: 'bg-sage/20 text-sage border-sage/40',
  Medium: 'bg-brass/20 text-brass border-brass/50',
  Hard: 'bg-burgundy/20 text-burgundy border-burgundy/40 dark:text-[#e08a8a]',
  Expert: 'bg-ink/20 text-ink border-ink/40 dark:bg-ivory/20 dark:text-ivory dark:border-ivory/40',
}

export type GameStatus = 'playing' | 'correct-flash' | 'wrong-flash' | 'solved' | 'replaying'
export type SolverColor = 'white' | 'black'

export const STATUS_TEXT: Record<GameStatus, string> = {
  playing: 'Your move.',
  'correct-flash': 'Correct!',
  'wrong-flash': 'Not quite — try again.',
  solved: 'Puzzle solved! 🎉',
  replaying: 'Playing it out…',
}

export const STATUS_COLOR: Record<GameStatus, string> = {
  playing: 'text-ink/70 dark:text-ivory/70',
  'correct-flash': 'text-sage',
  'wrong-flash': 'text-burgundy dark:text-[#e08a8a]',
  solved: 'text-brass',
  replaying: 'text-ink/50 dark:text-ivory/50',
}

export interface GameState {
  status: GameStatus
  hintLevel: number
  requestHint: () => void
  replaySolution: () => void
  reset: () => void
  isSolved: boolean
  attempts: number
  solverColor: SolverColor
}

export interface GameControlsProps {
  game: GameState
  onNext: () => void
  hasNext: boolean
}

export type Mode = 'daily' | 'library'

export interface HeaderProps {
  mode: Mode
  onModeChange: (mode: Mode) => void
  streak: number
  darkMode: boolean
  onToggleDark: () => void
}

export interface LastMove {
  from: Square
  to: Square
}

export interface HintSquares {
  from: Square
  to?: Square
}

export interface SquareStyle {
  backgroundColor?: string
  boxShadow?: string
}

export type SquareStyles = Partial<Record<Square, SquareStyle>>

export interface GameState {
  fen: string
  status: GameStatus
  hintSquares: HintSquares | null
  lastMove: LastMove | null
  attemptMove: (from: Square, to: Square, promotion?: PieceSymbol) => boolean
  solverColor: SolverColor
}

export interface PuzzleBoardProps {
  game: GameState
  boardSize?: number
}

export const STATUS_RING: Record<GameStatus, string> = {
  playing: 'ring-transparent',
  'correct-flash': 'ring-sage',
  'wrong-flash': 'ring-burgundy',
  solved: 'ring-brass',
  replaying: 'ring-transparent',
}

export type Filter = 'All' | Difficulty

export interface PuzzleLibraryProps {
  puzzles: Puzzle[]
  activeId: string
  solvedIds: Set<string>
  onSelect: (id: string) => void
}

export const FILTERS: Filter[] = ['All', 'Easy', 'Medium', 'Hard', 'Expert']

export const STORAGE_KEY = "gambit-progress-v1";

export interface SavedProgress {
  solvedIds: string[];
  streak: number;
  lastSolvedDate: string | null;
  darkMode: boolean;
}

export interface ProgressState {
  solvedIds: Set<string>;
  streak: number;
  lastSolvedDate: string | null;
  darkMode: boolean;
}

export type Status =
  | "playing"
  | "replaying"
  | "solved"
  | "correct-flash"
  | "wrong-flash";

export interface LastMove {
  from: Square;
  to: Square;
}

export interface HintSquares {
  from: Square;
  to?: Square;
}

export interface UsePuzzleGameReturn {
  fen: string;
  status: Status;
  attempts: number;
  hintLevel: number;
  hintSquares: HintSquares | null;
  lastMove: LastMove | null;
  moveIndex: number;
  solverColor: "white" | "black";
  isSolved: boolean;
  attemptMove: (
    from: Square,
    to: Square,
    promotion?: PieceSymbol
  ) => boolean;
  requestHint: () => void;
  reset: () => void;
  replaySolution: () => void;
}

export const INITIAL_MOVE_DELAY = 600;
export const REPLY_DELAY = 500;
export const REPLAY_DELAY = 700;

