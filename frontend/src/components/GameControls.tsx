import { GameControlsProps, GameStatus, STATUS_COLOR, STATUS_LAMP, STATUS_TEXT } from "../utils/constants"
import { hintLabel, hintText } from "../utils/utils"
import { ArrowIcon, EyeIcon, HintIcon, ResetIcon } from "./Icons"

// A lamp and a status line beside the action buttons (they wrap beneath it when the panel is narrow); a hint line spans the panel.
// On phones it is one slim row: the actions become 44px icon buttons (their text stays as the accessible name) so the board keeps the room.
const GameControls = ({ game, onNext, hasNext }: GameControlsProps) => {
  const { status, hintLevel, requestHint, replaySolution, reset, isSolved, revealed, attempts, moveIndex, solverColor } = game

  // After the solver's move the machine is replying; say so as a correct move.
  const shown: GameStatus = status === 'replaying' && moveIndex % 2 === 1 && !revealed ? 'correct-flash' : status
  const hint = !isSolved ? hintText(hintLevel, solverColor) : ''

  const action = "btn whitespace-nowrap px-2.5 text-[0.875rem] max-sm:size-11 max-sm:p-0"
  const icon = "size-[1.125rem] sm:hidden"

  return (
    <section aria-label="Controls" className="panel px-3 py-1.5 sm:px-4 sm:py-3 lg:[@media(max-height:50rem)]:py-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3 lg:[@media(max-height:43.5rem)]:gap-y-2">
      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:min-w-[7rem] sm:gap-3 lg:[@media(max-height:43.5rem)]:basis-full">
        <span className={`lamp ${STATUS_LAMP[shown]}`} aria-hidden="true" />
        <p role="status" aria-live="polite" className={`min-w-0 flex-1 text-[0.875rem] leading-snug font-semibold sm:text-[0.9375rem] ${STATUS_COLOR[shown]}`}>
          {STATUS_TEXT[shown]}
          {attempts > 0 && status === 'playing' && (
            <span className="font-normal text-fg-muted"> · {attempts} wrong {attempts > 1 ? 'tries' : 'try'}</span>
          )}
        </p>
      </div>

      <div className={`flex flex-wrap items-center justify-end gap-2 ${isSolved && hasNext ? 'max-sm:w-full' : ''}`}>
        <div role="group" aria-label="Puzzle actions" className="flex gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={requestHint}
            disabled={isSolved || status === 'replaying' || hintLevel >= 2}
            title={hintLabel(hintLevel)}
            className={`${action} ${hintLevel > 0 && !isSolved ? 'max-sm:text-accent' : ''}`}
          >
            <HintIcon className={icon} />
            <span className="max-sm:sr-only">{hintLabel(hintLevel)}</span>
          </button>
          <button type="button" onClick={replaySolution} disabled={status === 'replaying'} title="Show solution" className={action}>
            <EyeIcon className={icon} />
            <span className="max-sm:sr-only">Show solution</span>
          </button>
          <button type="button" onClick={reset} disabled={status === 'replaying'} title="Reset" className={action}>
            <ResetIcon className={icon} />
            <span className="max-sm:sr-only">Reset</span>
          </button>
        </div>
        {isSolved && hasNext && (
          <button type="button" onClick={onNext} className="btn px-3 max-sm:w-full">
            Next puzzle <ArrowIcon direction="right" />
          </button>
        )}
      </div>
      </div>

      {hint && <p className="mt-1 mb-1 pl-5 text-[0.875rem] leading-snug text-accent sm:mt-2 sm:mb-0 sm:text-[0.9375rem]">{hint}</p>}
    </section>
  )
}

export default GameControls;
