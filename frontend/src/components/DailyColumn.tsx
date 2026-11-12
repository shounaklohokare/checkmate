import { DailyColumnProps } from '../utils/constants'
import Odometer from './Odometer'
import PuzzleMeta from './PuzzleMeta'

// The Daily Problem: today's caption and how-to on paper, with the ledger beneath.
const DailyColumn = ({ puzzle, showCaption, solvedCount, streak, solvedToday }: DailyColumnProps) => {
  const now = new Date()
  const longDate = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="flex flex-col gap-4">
      <article className="paper px-5 pt-5 pb-5">
        <h2 className="font-display text-[1.5rem] leading-tight">The Daily Problem</h2>
        <p className="mt-1 flex flex-wrap items-center justify-between gap-x-3 text-[0.875rem] font-medium text-ink-soft">
          <time dateTime={now.toISOString().slice(0, 10)}>{longDate}</time>
          <span>{solvedToday ? 'Solved today' : 'Awaiting a solver'}</span>
        </p>

        {showCaption && (
          <div className="mt-4 border-y border-ink/15 py-4">
            <PuzzleMeta puzzle={puzzle} solved={solvedToday} inColumn />
          </div>
        )}

        <p className="mt-3 text-[1rem] leading-relaxed">
          One new problem is set each day. Solve it to keep your streak; a hint is always at hand, and asking for one costs you nothing.
        </p>

        <h3 className="mt-4 text-[0.9375rem] font-semibold">How to move</h3>
        <ul className="mt-1 space-y-1 text-[0.9375rem] leading-snug text-ink-soft">
          <li>Drag a piece, or tap it and then tap a lit square.</li>
          <li>
            By keyboard: <kbd className="font-mono font-semibold text-ink">Tab</kbd> to the board, arrow keys to move,{' '}
            <kbd className="font-mono font-semibold text-ink">Enter</kbd> to pick up and put down.
          </li>
        </ul>
      </article>

      <section aria-labelledby="ledger-title" className="panel px-5 py-4">
        <h2 id="ledger-title" className="label-cab">
          Your progress
        </h2>
        <dl className="mt-2 divide-y divide-white/[0.06] text-[0.9375rem]">
          <div className="flex items-center justify-between py-2">
            <dt className="text-ivory-dim">Problems solved</dt>
            <dd className="text-ivory">
              <Odometer value={solvedCount} digits={1} />
              <span className="sr-only">{solvedCount}</span>
            </dd>
          </div>
          <div className="flex items-center justify-between py-2">
            <dt className="text-ivory-dim">Current streak</dt>
            <dd className="text-ivory">
              <Odometer value={streak} digits={1} />
              <span className="sr-only">{streak} {streak === 1 ? 'day' : 'days'}</span>
            </dd>
          </div>
          <div className="flex items-center justify-between py-2">
            <dt className="text-ivory-dim">Today's problem</dt>
            <dd className={`font-semibold ${solvedToday ? 'text-verdigris' : 'text-ivory'}`}>{solvedToday ? 'Solved' : 'Open'}</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}

export default DailyColumn
