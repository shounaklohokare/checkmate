import { PuzzleMetaProps } from "../utils/constants.ts"
import { problemPrompt } from "../utils/utils.ts"
import Pips from "./Pips.tsx"

// The diagram caption, set the way problem books set it: number, then the stipulation.
const PuzzleMeta = ({ puzzle, solved, inColumn = false, compact = false }: PuzzleMetaProps) => {
  if (!puzzle) return null
  const Heading = inColumn ? "h3" : "h2"
  return (
    <div className={inColumn ? "relative" : `panel relative px-4 py-3 md:px-5 ${compact ? "max-sm:px-3.5 max-sm:py-2.5" : ""}`}>
      <Heading className={`pr-16 text-[1.1875rem] leading-snug text-balance md:text-[1.3125rem] ${compact ? "max-sm:text-[1.0625rem]" : ""}`}>
        <span className="font-semibold text-fg">{problemPrompt(puzzle)}</span>
      </Heading>
      <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.875rem] font-medium whitespace-nowrap text-fg-muted">
        <Pips difficulty={puzzle.difficulty} />
        <span>Rated <span className="font-mono">{puzzle.rating}</span></span>
      </p>
      {solved && (
        <span className={`badge-solved absolute right-3 ${inColumn ? "top-0" : "top-3"}`}>Solved</span>
      )}
    </div>
  )
}

export default PuzzleMeta;
