import { DailyColumnProps } from '../utils/constants'
import Odometer from './Odometer'
import PuzzleMeta from './PuzzleMeta'

// Today's puzzle: the stipulation with a one-line how-to, and the progress ledger as two figures beneath.
// Kept short so the whole Daily screen fits one viewport without scrolling.
const DailyColumn = ({ puzzle, showCaption, solvedCount, streak, solvedToday }: DailyColumnProps) => {
  return (
    <div className="flex flex-col gap-3">
      <article className="panel px-5 py-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="label">Today's puzzle</h2>
          {solvedToday && <span className="badge-solved shrink-0">Solved</span>}
        </div>

        {showCaption && (
          <div className="mt-4 border-t border-line pt-4">
            <PuzzleMeta puzzle={puzzle} solved={false} inColumn />
          </div>
        )}

        {/* Short desktop windows drop the how-to so the column fits beside the board. */}
        <div className="mt-4 border-t border-line pt-4 lg:[@media(max-height:46rem)]:hidden">
          <h3 className="label">How to move</h3>
          <p className="mt-1.5 text-[0.9375rem] leading-snug text-fg-muted">Drag a piece, or tap it to see its moves, then tap where it should go.</p>
        </div>
      </article>

      <section aria-labelledby="ledger-title" className="panel px-5 py-4">
        <h2 id="ledger-title" className="label">
          Your progress
        </h2>
        <dl className="mt-2 grid grid-cols-2 divide-x divide-line">
          <div className="flex flex-col-reverse gap-0.5 pr-3">
            <dt className="text-[0.8125rem] text-fg-muted">Solved</dt>
            <dd className="text-[1.375rem] leading-[1.3] text-fg">
              <Odometer value={solvedCount} digits={1} />
              <span className="sr-only">{solvedCount}</span>
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-0.5 px-3">
            <dt className="text-[0.8125rem] text-fg-muted">Day streak</dt>
            <dd className="text-[1.375rem] leading-[1.3] text-fg">
              <Odometer value={streak} digits={1} />
              <span className="sr-only">{streak} {streak === 1 ? 'day' : 'days'}</span>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}

export default DailyColumn
