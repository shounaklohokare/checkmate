import { StreakGaugeProps } from '../utils/constants'
import Odometer from './Odometer'

// The streak as a quiet pill: a flame that is lit only while a streak is alive, the count on an odometer, and the unit.
const StreakGauge = ({ streak }: StreakGaugeProps) => {
  const days = streak === 1 ? 'day' : 'days'
  const alive = streak > 0

  return (
    <div className="streak-pill" data-alive={alive} role="img" aria-label={`Streak: ${streak} ${days}`}>
      <svg viewBox="0 0 16 16" className="streak-flame size-4 shrink-0" aria-hidden="true">
        <path d="M8.3 1.2c.3 2.3 3.6 4 3.6 7.7A3.9 3.9 0 0 1 8 14.8a3.9 3.9 0 0 1-3.9-3.9c0-1.6.8-2.8 1.7-3.7.1 1 .6 1.7 1.2 2C6.8 6.8 7 3.4 8.3 1.2Z" />
      </svg>
      <span className="flex items-baseline gap-1.5" aria-hidden="true">
        <span className="text-[0.9375rem] text-fg"><Odometer value={streak} digits={1} /></span>
        <span className="hidden text-[0.8125rem] text-fg-muted sm:inline">{days}</span>
      </span>
    </div>
  )
}

export default StreakGauge
