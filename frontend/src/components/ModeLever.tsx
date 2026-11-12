import { Mode, ModeLeverProps } from '../utils/constants'

const OPTIONS: { id: Mode; label: string }[] = [
  { id: 'daily', label: 'Daily' },
  { id: 'library', label: 'Library' },
]

// A two-position segmented control with a brass thumb. Underneath it is a plain radio group, so arrow keys and screen readers work as usual.
const ModeLever = ({ mode, onModeChange }: ModeLeverProps) => {
  return (
    <fieldset className="lever" style={{ ['--n' as string]: 2, ['--i' as string]: mode === 'library' ? 1 : 0 }}>
      <legend className="sr-only">Mode</legend>
      <span className="lever-shoe" aria-hidden="true" />
      {OPTIONS.map((o) => (
        <label key={o.id} className="lever-option">
          <input
            type="radio"
            name="mode"
            value={o.id}
            checked={mode === o.id}
            onChange={() => onModeChange(o.id)}
            className="sr-only"
          />
          {o.label}
        </label>
      ))}
    </fieldset>
  )
}

export default ModeLever
