import { useEffect, useState, useCallback } from 'react'
import { Filter, FILTERS, Puzzle, PuzzleLibraryProps } from '../utils/constants'
import { api } from "../api.ts"; 

const PAGE_SIZE = 30

const PuzzleLibrary = ({ activeId, solvedIds, onSelect }: PuzzleLibraryProps) => {
  
    const [filter, setFilter] = useState<Filter>('All')

    const [items, setItems] = useState<Puzzle[]>([])
    const [total, setTotal] = useState(0)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
          let cancelled = false

          setLoading(true)
          
          api.get('/puzzles', {
            params: { difficulty: filter === 'All' ? undefined : filter, limit: PAGE_SIZE, offset: 0 },
          }).then((res) => {
            if (cancelled) return
            setItems(res.data.items)
            setTotal(res.data.total)
            setOffset(res.data.items.length)
          }).finally(() => !cancelled && setLoading(false))
          return () => { cancelled = true }
    }, [filter])

    const loadMore = useCallback(() => {

      if (loading || offset >= total) return
      setLoading(true)
      api.get('/puzzles', {
        params: { difficulty: filter === 'All' ? undefined : filter, limit: PAGE_SIZE, offset },
      }).then((res) => {
        setItems((prev) => [...prev, ...res.data.items])
        setOffset((o) => o + res.data.items.length)
      }).finally(() => setLoading(false))

    }, [filter, offset, total, loading])


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
                      : 'border-ivory/20 text-ivory/60 hover:bg-ivory/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <ul
              className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1"
              onScroll={(e) => {
                const el = e.currentTarget
                if (el.scrollHeight - el.scrollTop - el.clientHeight < 100) loadMore()
              }}
            >
              {items.map((p) => {
                const isActive = p.id === activeId
                const isSolved = solvedIds.has(p.id)
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => onSelect(p)}
                      className={`w-full text-left px-3 py-2 rounded-xl border transition-colors ${
                        isActive
                          ? 'bg-brass/15 border-brass/50'
                          : 'border-transparent hover:bg-ivory/10'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-ivory truncate">
                          {p.title}
                        </span>
                        {isSolved && <span className="solved-fx animate-pop inline-block text-sage text-xs shrink-0">✓</span>}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-xs text-ivory/50">
                          {p.rating}
                        </span>
                        <span className="text-xs text-ivory/40">·</span>
                        <span className="text-xs text-ivory/50">{p.difficulty}</span>
                      </div>
                    </button>
                  </li>
                )
              })}
              {loading && <li className="text-xs text-center text-ink/40 py-2">Loading…</li>}
            </ul>

            <div className="text-xs text-ink/40 text-center">
              {items.length} of {total}
            </div>
          </aside>
        )
}

export default PuzzleLibrary