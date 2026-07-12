import { GameControlsProps, STATUS_COLOR, STATUS_TEXT } from "../utils/constants"
import { hintLabel } from "../utils/utils"

const GameControls = ({ game, onNext, hasNext }: GameControlsProps) => {
  const { status, hintLevel, requestHint, replaySolution, reset, isSolved, attempts, solverColor } = game

  return (
    <div className="space-y-3">
      <p className={`font-mono text-sm ${STATUS_COLOR[status] ?? ''}`}>
        {STATUS_TEXT[status] ?? ''}
        {attempts > 0 && status === 'playing' && (
          <span className="text-ink/40 dark:text-ivory/40"> · {attempts} attempt{attempts > 1 ? 's' : ''}</span>
        )}
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={requestHint}
          disabled={isSolved || status === 'replaying' || hintLevel >= 2}
          className="px-3 py-1.5 rounded-lg text-sm font-medium border border-brass/40 text-brass hover:bg-brass/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {hintLabel(hintLevel, solverColor)}
        </button>
        <button
          type="button"
          onClick={replaySolution}
          disabled={status === 'replaying'}
          className="px-3 py-1.5 rounded-lg text-sm font-medium border border-ink/20 dark:border-ivory/20 text-ink/70 dark:text-ivory/70 hover:bg-ink/5 dark:hover:bg-ivory/10 disabled:opacity-40 transition-colors"
        >
          Show solution
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={status === 'replaying'}
          className="px-3 py-1.5 rounded-lg text-sm font-medium border border-ink/20 dark:border-ivory/20 text-ink/70 dark:text-ivory/70 hover:bg-ink/5 dark:hover:bg-ivory/10 disabled:opacity-40 transition-colors"
        >
          Reset
        </button>
        {isSolved && hasNext && (
          <button
            type="button"
            onClick={onNext}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-brass text-ink hover:bg-brass-bright transition-colors ml-auto"
          >
            Next puzzle →
          </button>
        )}
      </div>
    </div>
  )
}

export default GameControls;