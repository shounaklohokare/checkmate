import { PuzzleMetaProps } from "../utils/constants.ts"
import { problemPrompt, themeLabel } from "../utils/utils.ts"
import Pips from "./Pips.tsx"

// The diagram caption, set the way problem books set it: number, then the stipulation.
const PuzzleMeta = ({ puzzle, solved, inColumn = false }: PuzzleMetaProps) => {
  if (!puzzle) return null
  const Heading = inColumn ? "h3" : "h2"
  return (
    <div className={inColumn ? "relative" : "paper relative px-4 py-3.5 md:px-5"}>
      <Heading className="pr-16 text-[1.1875rem] leading-snug text-balance md:text-[1.3125rem]">
        <span className="font-semibold">{problemPrompt(puzzle)}</span>
      </Heading>
      <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.875rem] font-medium whitespace-nowrap text-ink-soft">
        <span>{themeLabel(puzzle.theme)}</span>
        <Pips difficulty={puzzle.difficulty} />
        <span>Rated <span className="font-mono">{puzzle.rating}</span></span>
      </p>
      <p className="mt-1.5 max-w-prose text-[0.9375rem] leading-relaxed text-ink-soft">{puzzle.description}</p>
      {solved && (
        <span className={`badge-solved absolute right-3 ${inColumn ? "top-0" : "top-3"}`}>Solved</span>
      )}
    </div>
  )
}

export default PuzzleMeta;
