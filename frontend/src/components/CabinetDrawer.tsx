import { useEffect, useRef } from 'react'
import { CabinetDrawerProps } from '../utils/constants'

// On wide screens the side compartment sits beside the board. On phones it becomes a drawer that pulls up from the cabinet's base.
const CabinetDrawer = ({ label, isDesktop, open, onOpenChange, children }: CabinetDrawerProps) => {
  const sheetRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    if (isDesktop) return
    if (open) {
      sheetRef.current?.focus()
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onOpenChange(false)
      }
      window.addEventListener('keydown', onKey)
      wasOpen.current = true
      return () => window.removeEventListener('keydown', onKey)
    }
    if (wasOpen.current) handleRef.current?.focus()
    wasOpen.current = false
  }, [open, isDesktop, onOpenChange])

  if (isDesktop) {
    return <aside aria-label={label} className="w-full lg:w-[27rem] lg:shrink-0">{children}</aside>
  }

  return (
    <>
      <button
        ref={handleRef}
        type="button"
        aria-expanded={open}
        aria-controls="cabinet-drawer"
        onClick={() => onOpenChange(true)}
        className="fixed inset-x-0 bottom-0 z-30 flex min-h-14 items-center justify-center gap-3 border-t border-white/[0.08] bg-mahogany-900/95 px-4 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_16px_oklch(0.08_0.01_40/0.7)]"
      >
        <span className="drawer-pull absolute top-0 left-1/2 -translate-x-1/2" aria-hidden="true" />
        <span className="text-[0.9375rem] font-semibold text-brass-bright">{label}</span>
      </button>

      {open && (
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close drawer"
          onClick={() => onOpenChange(false)}
          className="fixed inset-0 z-40 bg-soot/70"
        />
      )}

      <div
        id="cabinet-drawer"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        data-open={open}
        inert={!open}
        className={`drawer-sheet fixed inset-x-0 bottom-0 z-50 rounded-t-[12px] bg-mahogany-900 shadow-[inset_0_2px_0_var(--color-brass-deep),0_-8px_24px_oklch(0.06_0.01_40/0.8)] max-h-[86svh] overflow-y-auto px-3 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] outline-none ${
          open ? 'visible translate-y-0' : 'invisible translate-y-full'
        }`}
      >
        <div className="sticky top-0 z-10 -mx-3 mb-3 flex items-center justify-end bg-mahogany-900/95 px-4 py-2">
          <button type="button" onClick={() => onOpenChange(false)} className="key min-h-11 px-3 text-sm">
            Close
          </button>
        </div>
        {children}
      </div>
    </>
  )
}

export default CabinetDrawer
