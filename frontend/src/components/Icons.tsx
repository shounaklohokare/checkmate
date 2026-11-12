// Authored icons: flat brass, one weight.

const gearPath = (teeth: number, outer: number, inner: number, cx = 16, cy = 16): string => {
  const step = (Math.PI * 2) / teeth
  const pts: string[] = []
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    const corners: [number, number][] = [
      [a - step * 0.32, inner],
      [a - step * 0.18, outer],
      [a + step * 0.18, outer],
      [a + step * 0.32, inner],
    ]
    for (const [ang, r] of corners) pts.push(`${(cx + Math.cos(ang) * r).toFixed(2)},${(cy + Math.sin(ang) * r).toFixed(2)}`)
  }
  return `M${pts.join('L')}Z`
}

const GEAR = gearPath(12, 14.5, 11.4)

export const GearIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
    <path d={GEAR} fill="var(--color-brass)" />
    <circle cx="16" cy="16" r="4.2" fill="var(--color-mahogany-900)" />
  </svg>
)

export const BellIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
    <path d="M16 5.5c-5 0-8 3.9-8 9.5v4.8l-2.4 3.5h20.8L24 19.8V15c0-5.6-3-9.5-8-9.5Z" fill="var(--color-brass)" />
    <circle cx="16" cy="26.4" r="2.3" fill="var(--color-brass)" />
  </svg>
)

export const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
    <path
      d={direction === 'left' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
