import { useEffect, useMemo, useState } from 'react'
import { Chess } from 'chess.js'

interface SolvedCardProps {
  fen: string
  attempts: number
  revealed: boolean
  streak: number
  hasNext: boolean
  onNext: () => void
}

// Ticks from the streak shown at mount up to the new value (streak updates one render after solving).
const StreakCount = ({ value }: { value: number }) => {
  const [shown, setShown] = useState(value)
  useEffect(() => {
    if (shown === value) return
    const id = setTimeout(() => setShown((s) => s + (value > s ? 1 : -1)), 150)
    return () => clearTimeout(id)
  }, [shown, value])
  return <span key={shown} className="inline-block animate-pop">{shown}</span>
}

const SolvedCard = ({ fen, attempts, revealed, streak, hasNext, onNext }: SolvedCardProps) => {
  const [open, setOpen] = useState(true)
  const isMate = useMemo(() => new Chess(fen).isCheckmate(), [fen])

  useEffect(() => {
    if (!open || !hasNext) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.repeat) return
      if ((e.target as HTMLElement).closest('button, input, textarea, select')) return
      onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, hasNext, onNext])

  if (!open) return null

  const title = revealed ? 'Solution shown' : isMate ? 'Checkmate!' : 'Puzzle solved!'
  const detail = revealed
    ? 'Reset to try it yourself'
    : attempts === 0
      ? 'Solved first try'
      : `Solved after ${attempts} wrong ${attempts > 1 ? 'tries' : 'try'}`

  return (
    <div
      role="status"
      aria-live="polite"
      className="solved-fx animate-card-in absolute inset-x-2 bottom-2 rounded-xl border-t border-brass/50 bg-ink/80 backdrop-blur-sm px-5 py-4 text-ivory shadow-2xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-display text-3xl font-semibold text-brass-bright">{title}</p>
          <p className="mt-1 font-mono text-xs text-ivory/70">
            {detail} · 🔥 Streak <StreakCount value={streak} />
          </p>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          {hasNext && (
            <button
              type="button"
              onClick={onNext}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-brass text-ink hover:bg-brass-bright transition-colors"
            >
              Next puzzle →
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xs text-ivory/60 hover:text-ivory underline underline-offset-2"
          >
            Review board
          </button>
        </div>
      </div>
      {hasNext && <p className="mt-2 font-mono text-[10px] text-ivory/40">Press Enter for next puzzle</p>}
    </div>
  )
}

export default SolvedCard
