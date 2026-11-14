import { useEffect, useMemo, useState } from 'react'
import { Chess } from 'chess.js'
import Odometer from './Odometer'
import { ArrowIcon, CheckIcon, CloseIcon, EnterIcon, EyeIcon, ResetIcon } from './Icons'

interface SolvedCardProps {
  fen: string
  attempts: number
  revealed: boolean
  streak: number
  hasNext: boolean
  onNext: () => void
  onBrowse: () => void
  onRetry: () => void
}

// The result card that rises over the lower board: a status badge, the verdict and the next step.
// It is a size container: on a wide board everything sits on one row; on a narrow one the actions span beneath.
const SolvedCard = ({ fen, attempts, revealed, streak, hasNext, onNext, onBrowse, onRetry }: SolvedCardProps) => {
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
    ? 'Now try it yourself.'
    : attempts === 0
      ? 'Solved first try'
      : `Solved after ${attempts} wrong ${attempts > 1 ? 'tries' : 'try'}`

  const action = 'btn flex-1 gap-1.5 px-3 whitespace-nowrap @min-[38rem]:flex-none @min-[38rem]:gap-2 @min-[38rem]:px-3.5'

  return (
    <div className="slip-out @container absolute inset-x-2 bottom-2 z-30 rounded-xl border border-line-strong bg-raised shadow-[inset_0_1px_0_oklch(1_0_0/0.05),0_2px_6px_oklch(0.05_0.01_260/0.35),0_20px_44px_-16px_oklch(0.05_0.01_260/0.9)] sm:inset-x-3 sm:bottom-3">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3.5 p-3.5 @min-[38rem]:grid-cols-[auto_minmax(0,1fr)_auto_auto] @min-[38rem]:gap-x-4 @min-[38rem]:py-4 @min-[38rem]:pl-4 @min-[38rem]:pr-3">
        <span
          aria-hidden="true"
          className={`relative col-start-1 row-start-1 grid size-9 place-items-center rounded-full @min-[38rem]:size-10 ${
            revealed ? 'border border-line-strong bg-raised-hover text-fg-muted' : 'solved-fx chip-in bg-success text-accent-fg'
          }`}
        >
          {revealed ? <EyeIcon className="size-[1.125rem]" /> : <CheckIcon className="size-5" />}
          {!revealed && <span className="solved-fx animate-ring absolute inset-0 rounded-full border-2 border-success" />}
        </span>

        <div role="status" aria-live="polite" className="col-start-2 row-start-1 min-w-0">
          <p className="font-display text-[1.1875rem] leading-tight text-fg @min-[38rem]:text-[1.375rem]">{title}</p>
          {/* The streak takes its own line on a narrow card, so a separator never dangles at a wrap. */}
          <p className="mt-0.5 flex flex-col text-[0.875rem] leading-snug text-fg-muted @md:flex-row @md:flex-wrap @md:items-center @md:gap-x-1.5">
            <span>{detail}</span>
            {!revealed && (
              <span className="flex items-center">
                <span aria-hidden="true" className="hidden pr-1.5 text-fg-subtle @md:inline">·</span>
                <span className="flex text-fg"><Odometer value={streak} digits={1} /></span>
                <span className="sr-only">{streak}</span>-day streak
              </span>
            )}
          </p>
        </div>

        <div className="col-span-full row-start-2 flex flex-wrap gap-2 @min-[38rem]:col-span-1 @min-[38rem]:col-start-3 @min-[38rem]:row-start-1">
          {revealed && (
            <button type="button" onClick={onRetry} className={`${action} ${hasNext ? '' : 'btn-primary'}`}>
              <ResetIcon className="size-4" /> Try again
            </button>
          )}
          {hasNext ? (
            <button type="button" onClick={onNext} aria-keyshortcuts="Enter" className={`${action} btn-primary`}>
              Next puzzle
              {/* An arrow on touch, the Enter key with a mouse; dropped on a phone-narrow card to make room for two buttons. */}
              <span className="contents @max-xs:hidden">
                <span className="flex pointer-fine:hidden"><ArrowIcon direction="right" /></span>
                <kbd className="hidden h-5 min-w-5 place-items-center rounded-[5px] bg-accent-fg/12 px-1 text-accent-fg/80 pointer-fine:grid">
                  <EnterIcon className="size-3.5" />
                </kbd>
              </span>
            </button>
          ) : (
            !revealed && (
              <button type="button" onClick={onBrowse} className={`${action} btn-primary`}>
                Open the Library <ArrowIcon direction="right" />
              </button>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Review board"
          title="Review board"
          className="col-start-3 row-start-1 -m-1.5 grid size-10 cursor-pointer place-items-center self-start rounded-lg text-fg-subtle transition-colors hover:bg-raised-hover hover:text-fg @min-[38rem]:col-start-4 @min-[38rem]:m-0 @min-[38rem]:self-center"
        >
          <CloseIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}

export default SolvedCard
