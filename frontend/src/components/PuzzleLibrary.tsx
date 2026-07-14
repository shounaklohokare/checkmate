import { useMemo, useState } from 'react'
import { Filter, FILTERS, PuzzleLibraryProps } from '../utils/constants'


const PuzzleLibrary = ({ puzzles, activeId, solvedIds, onSelect }: PuzzleLibraryProps) => {
  
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(() => (filter === 'All' ? puzzles : puzzles.filter((p) => p.difficulty === filter)),  [puzzles, filter])

  return (
    <aside className="w-full md:w-72 shrink-0 space-y-3">
      <div className="flex gap-1.5 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-colors ${
              filter === f
                ? 'bg-brass text-ink border-brass'
                : 'border-ink/20 dark:border-ivory/20 text-ink/60 dark:text-ivory/60 hover:bg-ink/5 dark:hover:bg-ivory/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
        {filtered.map((p) => {
          const isActive = p.id === activeId
          const isSolved = solvedIds.has(p.id)
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => onSelect(p.id)}
                className={`w-full text-left px-3 py-2 rounded-xl border transition-colors ${
                  isActive
                    ? 'bg-brass/15 border-brass/50'
                    : 'border-transparent hover:bg-ink/5 dark:hover:bg-ivory/10'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-ink dark:text-ivory truncate">
                    {p.title}
                  </span>
                  {isSolved && <span className="text-sage text-xs shrink-0">✓</span>}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-xs text-ink/50 dark:text-ivory/50">
                    {p.rating}
                  </span>
                  <span className="text-xs text-ink/40 dark:text-ivory/40">·</span>
                  <span className="text-xs text-ink/50 dark:text-ivory/50">{p.difficulty}</span>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default PuzzleLibrary;