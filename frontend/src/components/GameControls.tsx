import { GameControlsProps, GameStatus, STATUS_COLOR, STATUS_LAMP, STATUS_TEXT } from "../utils/constants"
import { hintLabel, hintText } from "../utils/utils"
import { ArrowIcon, BellIcon, GearIcon } from "./Icons"

const TOOTH = 30 // degrees the gear advances per correct move

const STEAM = [
  { delay: 60, dx: -8 },
  { delay: 140, dx: 7 },
  { delay: 220, dx: -2 },
  { delay: 300, dx: 4 },
]

// The machine's voice: a lamp, a status line, a gear and a bell, with the keys beneath.
const GameControls = ({ game, onNext, hasNext }: GameControlsProps) => {
  const { status, hintLevel, requestHint, replaySolution, reset, isSolved, revealed, attempts, moveIndex, solverColor } = game

  // After the solver's move the machine is replying; say so as a correct move.
  const shown: GameStatus = status === 'replaying' && moveIndex % 2 === 1 && !revealed ? 'correct-flash' : status
  const celebrate = isSolved && !revealed
  const gearAngle = revealed ? 0 : Math.ceil(moveIndex / 2) * TOOTH
  const hint = !isSolved ? hintText(hintLevel, solverColor) : ''

  return (
    <section aria-label="Controls" className="panel px-4 py-3.5">
      <div className="flex items-center gap-3">
        <span className={`lamp ${STATUS_LAMP[shown]}`} aria-hidden="true" />
        <p role="status" aria-live="polite" className={`min-w-0 flex-1 text-[0.9375rem] font-semibold ${STATUS_COLOR[shown]}`}>
          {STATUS_TEXT[shown]}
          {attempts > 0 && status === 'playing' && (
            <span className="font-normal text-ivory-dim"> · {attempts} wrong {attempts > 1 ? 'tries' : 'try'}</span>
          )}
        </p>

        <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="relative block size-8">
            <span className="block size-8" style={{ transform: `rotate(${gearAngle}deg)`, transition: 'transform 160ms var(--ease-mech)' }}>
              <GearIcon
                className={`gear block size-8 ${status === 'replaying' ? 'gear-spin' : ''} ${celebrate ? 'gear-lock' : ''}`}
              />
            </span>
            {celebrate &&
              STEAM.map((s) => (
                <span
                  key={s.delay}
                  className="steam"
                  style={{ animationDelay: `${s.delay}ms`, ['--dx' as string]: `${s.dx}px` }}
                />
              ))}
          </span>
          <BellIcon className={`bell block size-8 ${celebrate ? 'bell-ring' : 'opacity-60'}`} />
        </div>
      </div>

      {hint && <p className="mt-1.5 pl-[1.375rem] text-[0.9375rem] text-brass-bright">{hint}</p>}

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={requestHint}
          disabled={isSolved || status === 'replaying' || hintLevel >= 2}
          className="key"
        >
          {hintLabel(hintLevel)}
        </button>
        <button type="button" onClick={replaySolution} disabled={status === 'replaying'} className="key">
          Show solution
        </button>
        <button type="button" onClick={reset} disabled={status === 'replaying'} className="key">
          Reset
        </button>
        {isSolved && hasNext && (
          <button type="button" onClick={onNext} className="key key-brass ml-auto">
            Next puzzle <ArrowIcon direction="right" />
          </button>
        )}
      </div>
    </section>
  )
}

export default GameControls;
