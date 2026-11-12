import { useEffect, useMemo, useState } from 'react'
import { Chess } from 'chess.js'
import Odometer from './Odometer'
import { ArrowIcon } from './Icons'

interface SolvedCardProps {
  fen: string
  attempts: number
  revealed: boolean
  streak: number
  hasNext: boolean
  onNext: () => void
  onBrowse: () => void
}

// The slip the machine ejects over the board; the SOLVED stamp lands on it.
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
      className="paper slip-out absolute inset-x-2 bottom-2 z-10 px-4 py-3.5 sm:inset-x-3 sm:bottom-3 sm:px-5 sm:py-4"
    >
      {!revealed && (
        <span className="stamp stamp-slam pointer-events-none absolute -top-4 right-4 text-[1.375rem] sm:right-6 sm:text-[1.625rem]">
          Solved
        </span>
      )}
      <div className="flex flex-col gap-3">
        <div>
          <p className="font-display text-[1.75rem] leading-tight text-ink sm:text-[2.125rem]">{title}</p>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[0.9375rem] text-ink-soft">
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
            <button type="button" onClick={onNext} className="key key-brass">
              Next puzzle <ArrowIcon direction="right" />
            </button>
          ) : (
            !revealed && (
              <button type="button" onClick={onBrowse} className="key key-brass">
                Open the Library <ArrowIcon direction="right" />
              </button>
            )
          )}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="min-h-6 px-1 text-[0.9375rem] text-ink-soft underline decoration-1 underline-offset-[3px] hover:text-ink"
          >
            Review board
          </button>
        </div>
      </div>
      {hasNext && <p className="mt-2 text-xs text-ink-soft">Press Enter for the next puzzle.</p>}
    </div>
  )
}

export default SolvedCard
