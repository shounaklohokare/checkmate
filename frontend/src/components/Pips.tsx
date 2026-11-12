import { Difficulty, DIFFICULTY_PIPS } from '../utils/constants'

// Difficulty as stamped pips out of three, with the word beside it so colour and shape are never the only signal.
const Pips = ({ difficulty }: { difficulty: Difficulty }) => {
  const on = DIFFICULTY_PIPS[difficulty]
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex gap-[3px]" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <span key={i} className={`pip ${i <= on ? 'pip-on' : ''}`} />
        ))}
      </span>
      <span>{difficulty}</span>
    </span>
  )
}

export default Pips
