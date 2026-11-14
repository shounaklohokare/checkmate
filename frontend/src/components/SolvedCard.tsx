import { useEffect, useMemo, useState } from 'react'
import { Chess } from 'chess.js'
import Odometer from './Odometer'
import { ArrowIcon, CheckIcon } from './Icons'

interface SolvedCardProps {
  fen: string
  attempts: number
  revealed: boolean
  streak: number
  hasNext: boolean
  onNext: () => void
  onBrowse: () => void
}

// The result card that rises over the lower board; a success chip lands on it.
const SolvedCard = ({ fen, attempts, revealed, streak, hasNext, onNext, onBrowse }: SolvedCardProps) => {
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
    ? 'Reset to try it yourself.'
    : attempts === 0
      ? 'Solved first try.'
      : `Solved after ${attempts} wrong ${attempts > 1 ? 'tries' : 'try'}.`

  return (
    <div
      role="status"
      aria-live="polite"
      className="slip-out absolute inset-x-2 bottom-2 z-30 rounded-xl border border-line-strong bg-raised px-3.5 py-3 shadow-[0_16px_36px_-12px_oklch(0.05_0.01_260/0.85)] sm:inset-x-3 sm:bottom-3 sm:px-5 sm:py-4"
    >
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-[1.375rem] leading-tight text-fg sm:text-[1.875rem]">{title}</p>
            {!revealed && (
              <span className="solved-chip chip-in pointer-events-none shrink-0">
                <CheckIcon className="size-3.5" /> Solved
              </span>
            )}
          </div>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[0.9375rem] text-fg-muted">
            <span>{detail}</span>
            {!revealed && (
              <span className="inline-flex items-center gap-1.5 font-semibold">
                Streak <Odometer value={streak} digits={1} /> {streak === 1 ? 'day' : 'days'}
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {hasNext ? (
            <button type="button" onClick={onNext} className="btn btn-primary">
              Next puzzle <ArrowIcon direction="right" />
            </button>
          ) : (
            !revealed && (
              <button type="button" onClick={onBrowse} className="btn btn-primary">
                Open the Library <ArrowIcon direction="right" />
              </button>
            )
          )}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="min-h-6 px-1 text-[0.9375rem] text-fg-muted underline decoration-1 underline-offset-[3px] hover:text-fg"
          >
            Review board
          </button>
        </div>
      </div>
      {hasNext && <p className="mt-2 text-xs text-fg-subtle max-sm:hidden">Press Enter for the next puzzle.</p>}
    </div>
  )
}

export default SolvedCard
