import { useEffect, useRef } from 'react'
import { FILTERS, PuzzleLibraryProps } from '../utils/constants'
import Pips from './Pips'
import { ArrowIcon, CheckIcon } from './Icons'

const COLS = 2
const MAX_ROWS = 4

// The library: a difficulty filter, then the card grid with the pager right beneath it. The list itself lives in useLibrary.
const PuzzleLibrary = ({ activeId, solvedIds, onSelect, library }: PuzzleLibraryProps) => {
  const { filter, page, pages, items, total, loading, error, setFilter, setPage, setPageSize, retry } = library
  const summary = filter === 'All' ? 'All difficulties' : filter

  // Show as many rows of cards as fit above the pager, so the page never scrolls: 1–4 rows of two.
  const roomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const room = roomRef.current
    if (!room) return
    const measure = () => {
      const stack = room.firstElementChild as HTMLElement | null
      const list = room.querySelector('ul')
      const card = list?.querySelector('li')
      const nav = room.querySelector('nav')
      if (!stack || !list || !card || !nav) return
      const pad = parseFloat(getComputedStyle(room).paddingTop) + parseFloat(getComputedStyle(room).paddingBottom)
      const space = room.clientHeight - pad - nav.offsetHeight - (parseFloat(getComputedStyle(stack).rowGap) || 0)
      const gap = parseFloat(getComputedStyle(list).rowGap) || 0
      const rows = Math.floor((space + gap) / (card.offsetHeight + gap))
      setPageSize(Math.min(MAX_ROWS, Math.max(1, rows)) * COLS)
    }
    const ro = new ResizeObserver(measure)
    ro.observe(room)
    return () => ro.disconnect()
  }, [setPageSize])

  return (
    <section aria-labelledby="library-title" className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="library-title" className="font-display text-[1.25rem] leading-tight text-fg">Library</h2>
        <p className="text-[0.875rem] text-fg-muted" aria-live="polite">
          <span className="font-mono">{total.toLocaleString('en-GB')}</span> {total === 1 ? 'puzzle' : 'puzzles'}
          <span className="sr-only"> · {summary}</span>
        </p>
      </div>

      <fieldset className="segmented" style={{ ['--n' as string]: FILTERS.length, ['--i' as string]: FILTERS.indexOf(filter) }}>
        <legend className="sr-only">Difficulty</legend>
        <span className="segmented-thumb" aria-hidden="true" />
        {FILTERS.map((f) => (
          <label key={f} className="segmented-option">
            <input
              type="radio"
              name="difficulty"
              value={f}
              checked={filter === f}
              onChange={() => setFilter(f)}
              className="sr-only"
            />
            {f}
          </label>
        ))}
      </fieldset>

      <div ref={roomRef} className="-mx-1 min-h-0 flex-1 overflow-y-auto px-1 py-1" data-scroll>
        <div className="flex flex-col gap-3">
        {error ? (
          <div className="flex flex-col items-center gap-2 px-4 py-8 text-center">
            <p className="text-[1.0625rem] font-semibold text-danger">Couldn't load puzzles.</p>
            <p className="text-[0.9375rem] text-fg-muted">Check that the server is running, then try again.</p>
            <button type="button" className="btn mt-2" onClick={retry}>Try again</button>
          </div>
        ) : !loading && items.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-[1.0625rem] font-semibold text-fg">No puzzles at this difficulty.</p>
            <p className="mt-1 text-[0.9375rem] text-fg-muted">Pick another difficulty above.</p>
          </div>
        ) : (
          <ul
            aria-busy={loading}
            className={`grid grid-cols-2 gap-2 [@media(max-height:50rem)]:gap-1.5 transition-opacity duration-150 ${loading ? 'opacity-50' : ''}`}
          >
            {items.map((p) => {
              const isActive = p.id === activeId
              const isSolved = solvedIds.has(p.id)
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(p)}
                    aria-current={isActive ? 'true' : undefined}
                    className="puzzle-card"
                  >
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="text-[0.9375rem] font-semibold">{p.title}</span>
                      <span className="text-[0.8125rem] text-fg-muted">
                        <span className="max-sm:sr-only">Rated </span><span className="font-mono">{p.rating}</span>
                      </span>
                    </span>
                    <span className="mt-1.5 flex items-center justify-between gap-2 text-[0.8125rem] text-fg-muted [@media(max-height:50rem)]:mt-1">
                      <Pips difficulty={p.difficulty} />
                      {isSolved && (
                        <span className="inline-flex items-center gap-1 font-semibold text-success">
                          <CheckIcon className="size-3.5" />
                          <span className="max-sm:sr-only">Solved</span>
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        <nav aria-label="Library pages" className="flex items-center justify-between gap-2">
        <button
          type="button"
          className="btn px-3"
          aria-label="Previous page"
          disabled={page === 0 || loading}
          onClick={() => setPage(Math.max(0, page - 1))}
        >
          <ArrowIcon direction="left" /> <span aria-hidden="true">Previous</span>
        </button>
        <p className="text-[0.875rem] text-fg-muted" aria-live="polite">
          Page <span className="font-mono text-fg">{page + 1}</span> of <span className="font-mono text-fg">{pages}</span>
        </p>
        <button
          type="button"
          className="btn px-3"
          aria-label="Next page"
          disabled={page >= pages - 1 || loading}
          onClick={() => setPage(Math.min(pages - 1, page + 1))}
        >
          <span aria-hidden="true">Next</span> <ArrowIcon direction="right" />
        </button>
        </nav>
        </div>
      </div>
    </section>
  )
}

export default PuzzleLibrary
