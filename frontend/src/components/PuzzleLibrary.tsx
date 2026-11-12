import { useEffect, useState } from 'react'
import { Filter, FILTERS, Puzzle, PuzzleLibraryProps, THEMES } from '../utils/constants'
import { themeLabel } from '../utils/utils'
import { api } from "../api.ts";
import Odometer from './Odometer'
import Pips from './Pips'
import { ArrowIcon, GearIcon } from './Icons'

const PAGE_SIZE = 30

// The catalogue: filters and a page counter over a list of puzzle cards.
const PuzzleLibrary = ({ activeId, solvedIds, onSelect }: PuzzleLibraryProps) => {
  const [filter, setFilter] = useState<Filter>('All')
  const [theme, setTheme] = useState('')
  const [page, setPage] = useState(0)

  const [items, setItems] = useState<Puzzle[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [retry, setRetry] = useState(0)

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError(false)

    api.get('/puzzles', {
      params: {
        difficulty: filter === 'All' ? undefined : filter,
        theme: theme || undefined,
        limit: PAGE_SIZE,
        offset: page * PAGE_SIZE,
      },
    }).then((res) => {
      if (cancelled) return
      setItems(res.data.items)
      setTotal(res.data.total)
    }).catch(() => {
      if (!cancelled) setError(true)
    }).finally(() => !cancelled && setLoading(false))

    return () => { cancelled = true }
  }, [filter, theme, page, retry])

  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const summary = [filter === 'All' ? 'All difficulties' : filter, theme ? themeLabel(theme) : 'All themes'].join(' · ')

  const chooseFilter = (f: Filter) => {
    setFilter(f)
    setPage(0)
  }

  return (
    <div className="flex flex-col gap-4">
      <section aria-labelledby="catalogue-title" className="panel px-4 pt-4 pb-5">
        {/* Drawer front: the brass label holder names what the drawer holds. */}
        <div className="flex items-baseline justify-between gap-3">
          <h2 id="catalogue-title" className="font-display text-[1.375rem] leading-tight text-ivory">The Catalogue</h2>
          <p className="text-[0.875rem] text-ivory-dim" aria-live="polite">
            <span className="font-mono">{total.toLocaleString('en-GB')}</span> {total === 1 ? 'problem' : 'problems'}
            <span className="sr-only"> · {summary}</span>
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4">
        <fieldset>
          <legend className="label-cab">Difficulty</legend>
          <div className="lever mt-1.5" style={{ ['--n' as string]: FILTERS.length, ['--i' as string]: FILTERS.indexOf(filter) }}>
            <span className="lever-shoe" aria-hidden="true" />
            {FILTERS.map((f) => (
              <label key={f} className="lever-option">
                <input
                  type="radio"
                  name="difficulty"
                  value={f}
                  checked={filter === f}
                  onChange={() => chooseFilter(f)}
                  className="sr-only"
                />
                {f}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="label-cab mb-1.5 block">Theme</span>
          <select
            className="select-window"
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value)
              setPage(0)
            }}
          >
            <option value="">All themes</option>
            {THEMES.map((t) => (
              <option key={t} value={t}>{themeLabel(t)}</option>
            ))}
          </select>
        </label>
        </div>
        <nav aria-label="Catalogue pages" className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
          <button
            type="button"
            className="key key-square"
            aria-label="Previous page"
            disabled={page === 0 || loading}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <ArrowIcon direction="left" />
          </button>
          <p className="flex items-center gap-2 text-[1.0625rem]">
            <span className="text-[0.875rem] text-ivory-dim">Page</span>
            <Odometer value={page + 1} digits={1} />
            <span className="text-[0.875rem] text-ivory-dim">of</span>
            <Odometer value={pages} digits={1} />
            <span className="sr-only" aria-live="polite">Page {page + 1} of {pages}</span>
          </p>
          <button
            type="button"
            className="key key-square"
            aria-label="Next page"
            disabled={page >= pages - 1 || loading}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
          >
            <ArrowIcon direction="right" />
          </button>
        </nav>
      </section>

      <div className="well relative p-2.5">
        {error ? (
          <div className="flex flex-col items-center gap-3 px-4 py-10 text-center">
            <p className="font-display text-[1.25rem] text-oxblood-bright">The mechanism jammed.</p>
            <p className="text-[0.9375rem] text-ivory-dim">The catalogue couldn't be fetched. Check that the server is running.</p>
            <button type="button" className="key" onClick={() => setRetry((r) => r + 1)}>Try again</button>
          </div>
        ) : !loading && items.length === 0 ? (
          <div className="px-4 py-10 text-center">
            <p className="font-display text-[1.25rem] text-brass-bright">No problems match these settings.</p>
            <p className="mt-1 text-[0.9375rem] text-ivory-dim">Adjust the dials: try another theme or difficulty.</p>
          </div>
        ) : (
          <ul className={`space-y-2 transition-opacity duration-200 ${loading ? 'opacity-50' : ''}`}>
            {items.map((p) => {
              const isActive = p.id === activeId
              const isSolved = solvedIds.has(p.id)
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(p)}
                    aria-current={isActive ? 'true' : undefined}
                    className="index-card px-4 py-3"
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[1.0625rem] font-semibold text-ink">{p.title}</span>
                      {isSolved && <span className="badge-solved">Solved</span>}
                    </span>
                    <span className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[0.875rem] text-ink-soft">
                      <span>{themeLabel(p.theme)}</span>
                      <span aria-hidden="true">·</span>
                      <Pips difficulty={p.difficulty} />
                      <span aria-hidden="true">·</span>
                      <span>Rated <span className="font-mono">{p.rating}</span></span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {loading && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex items-center gap-2 rounded-md bg-soot/85 px-3 py-2 text-[0.875rem] font-semibold text-ivory">
              <GearIcon className="gear gear-spin size-6" /> Fetching cards…
            </span>
          </div>
        )}
      </div>

    </div>
  )
}

export default PuzzleLibrary
