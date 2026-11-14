
import type { ReactNode } from 'react'
import type { Square, PieceSymbol } from 'chess.js'

export type Difficulty = "Easy" | "Medium" | "Hard";

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

/** The list endpoint's paginated response. */
export interface PuzzleList {
  items: Puzzle[];
  total: number;
  limit: number;
  offset: number;
}

export interface PuzzleMetaProps {
  puzzle: Puzzle | null | undefined
  solved: boolean
  /** Set inside The Daily Problem column: no paper of its own, and a level-3 heading. */
  inColumn?: boolean
}

/** Stamped pips out of three. */
export const DIFFICULTY_PIPS: Record<Difficulty, number> = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
}

export type GameStatus = 'playing' | 'correct-flash' | 'wrong-flash' | 'solved' | 'replaying'
export type SolverColor = 'white' | 'black'

export const STATUS_TEXT: Record<GameStatus, string> = {
  playing: 'Your move.',
  'correct-flash': 'Correct. The machine replies…',
  'wrong-flash': 'Not that one. Try again.',
  solved: 'Checkmate. Problem solved.',
  replaying: 'The machine is moving…',
}

export const STATUS_COLOR: Record<GameStatus, string> = {
  playing: 'text-fg',
  'correct-flash': 'text-success',
  'wrong-flash': 'text-danger',
  solved: 'text-success',
  replaying: 'text-fg-muted',
}

/** Indicator lamp beside the status line. */
export const STATUS_LAMP: Record<GameStatus, string> = {
  playing: 'lamp-idle',
  'correct-flash': 'lamp-ok',
  'wrong-flash': 'lamp-bad',
  solved: 'lamp-solved',
  replaying: 'lamp-idle lamp-busy',
}

export interface LastMove {
  from: Square
  to: Square
}

export interface HintSquares {
  from: Square
  to?: Square
}

/** What usePuzzleGame returns; components receive it as `game`. */
export interface GameState {
  fen: string
  status: GameStatus
  attempts: number
  hintLevel: number
  hintSquares: HintSquares | null
  lastMove: LastMove | null
  moveIndex: number
  solverColor: SolverColor
  isSolved: boolean
  revealed: boolean
  attemptMove: (from: Square, to: Square, promotion?: PieceSymbol) => boolean
  requestHint: () => void
  reset: () => void
  replaySolution: () => void
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
  subtitle: string
}

export interface PuzzleBoardProps {
  game: GameState
  /** Overlay rendered over the board inside the bezel (the solved slip). */
  children?: ReactNode
}

export type Filter = 'All' | Difficulty

export interface PuzzleLibraryProps {
  activeId: string
  solvedIds: Set<string>
  onSelect: (puzzle: Puzzle) => void
}


export const FILTERS: Filter[] = ['All', 'Easy', 'Medium', 'Hard']

/** Themes present in the puzzle database (the API has no /themes endpoint). */
export const THEMES: string[] = [
  'AdvancedPawn',
  'Advantage',
  'ArabianMate',
  'AttackingF2F7',
  'Attraction',
  'BackRankMate',
  'BalestraMate',
  'BlindSwineMate',
  'Clearance',
  'CollinearMove',
  'CornerMate',
  'Deflection',
  'DiscoveredAttack',
  'DiscoveredCheck',
]

export interface ModeLeverProps {
  mode: Mode
  onModeChange: (mode: Mode) => void
}

export interface StreakGaugeProps {
  streak: number
}

export interface OdometerProps {
  value: number
  digits?: number
}

export interface DailyColumnProps {
  puzzle: Puzzle
  /** Typeset the problem caption inside the column (desktop, where the caption isn't under the board). */
  showCaption: boolean
  solvedCount: number
  streak: number
  solvedToday: boolean
}

export interface CabinetDrawerProps {
  label: string
  isDesktop: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

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

export const INITIAL_MOVE_DELAY = 600;
export const REPLY_DELAY = 500;
export const REPLAY_DELAY = 700;

