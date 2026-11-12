import { useEffect, useState } from 'react'
import { OdometerProps } from '../utils/constants'

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// A mechanical counter: each digit is a drum that rolls to its value.
const Odometer = ({ value, digits = 3, label }: OdometerProps) => {
  // Start at zero so the drums visibly roll up to the value on mount.
  const [shown, setShown] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(value))
    return () => cancelAnimationFrame(id)
  }, [value])

  const text = String(Math.max(0, Math.floor(shown))).padStart(digits, '0')

  return (
    <span className="odometer" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {text.split('').map((d, i) => (
        <span key={text.length - i} className="odo-digit" aria-hidden="true">
          <span className="odo-strip" style={{ transform: `translateY(-${Number(d) * 1.3}em)` }}>
            {DIGITS.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  )
}

export default Odometer
