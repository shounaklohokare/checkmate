import { StreakGaugeProps } from '../utils/constants'
import Odometer from './Odometer'

// The streak as a compact stat chip: a bolt, the count rolling on an odometer, and a unit.
const StreakGauge = ({ streak }: StreakGaugeProps) => {
  const days = streak === 1 ? 'day' : 'days'

  return (
    <div className="streak-chip" role="img" aria-label={`Streak: ${streak} ${days}`}>
      <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden="true">
        <path d="M9.2 1 3.5 9h3.8l-.5 6 5.7-8H8.7Z" fill="var(--color-brass-bright)" />
      </svg>
      <span className="flex items-baseline gap-1.5 text-ivory" aria-hidden="true">
        <span className="text-[1.0625rem]"><Odometer value={streak} digits={1} /></span>
        <span className="hidden text-[0.8125rem] text-ivory-dim sm:inline">day streak</span>
      </span>
    </div>
  )
}

export default StreakGauge
