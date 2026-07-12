import  { PuzzleMetaProps, DIFFICULTY_STYLES } from "../utils/constants.ts"


const PuzzleMeta = ({ puzzle, solved }: PuzzleMetaProps) => {
  
  if (!puzzle) return null
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-xs tracking-widest uppercase text-brass">
          {puzzle.theme}
        </span>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${DIFFICULTY_STYLES[puzzle.difficulty]}`}
        >
          {puzzle.difficulty}
        </span>
        <span className="font-mono text-xs text-ink/50 dark:text-ivory/50">
          {puzzle.rating} rating
        </span>
        {solved && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sage/20 text-sage border border-sage/40">
            ✓ Solved
          </span>
        )}
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-ivory">
        {puzzle.title}
      </h2>
      <p className="text-sm text-ink/70 dark:text-ivory/70 max-w-prose">{puzzle.description}</p>
    </div>
  )
}

export default PuzzleMeta;