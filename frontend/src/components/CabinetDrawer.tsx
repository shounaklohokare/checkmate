import { useEffect, useRef } from 'react'
import { CabinetDrawerProps } from '../utils/constants'

// On wide screens the side compartment sits beside the board. On phones it becomes a drawer that pulls up from the cabinet's base.
const CabinetDrawer = ({ label, isDesktop, open, onOpenChange, fill = false, children }: CabinetDrawerProps) => {
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
    return <aside aria-label={label} className="flex min-h-0 w-full flex-col lg:w-[clamp(20rem,30vw,27rem)] lg:shrink-0">{children}</aside>
  }

  return (
    <>
      <button
        ref={handleRef}
        type="button"
        aria-expanded={open}
        aria-controls="cabinet-drawer"
        onClick={() => onOpenChange(true)}
        className="fixed inset-x-0 bottom-0 z-30 flex min-h-14 items-center justify-center gap-3 border-t border-line bg-surface px-4 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_16px_oklch(0.05_0.01_260/0.6)]"
      >
        <span className="drawer-pull absolute top-0 left-1/2 -translate-x-1/2" aria-hidden="true" />
        <span className="text-[0.9375rem] font-semibold text-fg">{label}</span>
      </button>

      {open && (
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close drawer"
          onClick={() => onOpenChange(false)}
          className="fixed inset-0 z-40 bg-sunken/70"
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
        className={`drawer-sheet fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-[14px] border-t border-line bg-surface shadow-[0_-8px_24px_oklch(0.05_0.01_260/0.7)] max-h-[max(86svh,calc(100svh-4rem))] ${fill ? "h-[max(86svh,calc(100svh-4rem))]" : ""} overflow-y-auto px-3 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] outline-none ${
          open ? 'visible translate-y-0' : 'invisible translate-y-full'
        }`}
      >
        <div className="sticky top-0 z-10 -mx-3 mb-1 flex shrink-0 items-center justify-end bg-surface px-4 py-1.5">
          <button type="button" onClick={() => onOpenChange(false)} className="btn min-h-11 px-3 text-sm">
            Close
          </button>
        </div>
        {children}
      </div>
    </>
  )
}

export default CabinetDrawer
