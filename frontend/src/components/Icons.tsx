// Authored icons: one stroke weight, drawn in currentColor unless noted.

export const SpinnerIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" fill="none" stroke="var(--color-line-strong)" strokeWidth="2.5" />
    <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

// The brand mark: a king, the piece every puzzle here ends by trapping.
export const KingIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
    <g fill="currentColor">
      <rect x="11" y="1" width="2" height="6" rx="0.6" />
      <rect x="9" y="2.75" width="6" height="2" rx="0.6" />
      <path d="M12 9.6C10.4 8.1 8.9 7.3 7.4 7.3 5.5 7.3 4 8.7 4 10.6c0 2.6 2 4.2 2.6 7.4h10.8c.6-3.2 2.6-4.8 2.6-7.4 0-1.9-1.5-3.3-3.4-3.3-1.5 0-3 .8-4.6 2.3Z" />
      <rect x="6" y="18.9" width="12" height="1.4" rx="0.5" />
      <rect x="4.75" y="21" width="14.5" height="2" rx="0.8" />
    </g>
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

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const HintIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true" focusable="false">
    <path {...stroke} d="M6 12.25h4M6.75 14.5h2.5M8 1.5a4.5 4.5 0 0 0-2.6 8.17c.37.27.6.68.6 1.13v.2h4v-.2c0-.45.23-.86.6-1.13A4.5 4.5 0 0 0 8 1.5Z" />
  </svg>
)

export const EyeIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true" focusable="false">
    <path {...stroke} d="M1.25 8S3.75 3.25 8 3.25 14.75 8 14.75 8 12.25 12.75 8 12.75 1.25 8 1.25 8Z" />
    <circle {...stroke} cx="8" cy="8" r="2.1" />
  </svg>
)

export const ResetIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true" focusable="false">
    <path {...stroke} d="M2.5 2.75v3.5H6" />
    <path {...stroke} d="M2.9 10a5.4 5.4 0 1 0 .45-4.55L2.5 6.25" />
  </svg>
)

export const CheckIcon =({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true" focusable="false">
    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
