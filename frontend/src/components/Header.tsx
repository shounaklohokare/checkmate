import { HeaderProps, Mode } from "../utils/constants";

const Header = ({ mode, onModeChange, streak, subtitle }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-4 px-4 md:px-8 py-4 border-b border-ivory/10">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            src="/chess.svg"
            alt="Chess logo"
            className="h-5 w-5 md:h-9.5 md:w-9.5 mb-[0.5px]"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ivory">
              Checkmate
            </span>
            <span className="hidden md:block text-[11px] text-ivory/40 tracking-wide -mt-0.5">
                {subtitle}
            </span>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-1 bg-ivory/10 rounded-full p-1">
          {(
            [
              { id: 'daily', label: 'Daily' },
              { id: 'library', label: 'Library' },
            ] as { id: Mode; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onModeChange(tab.id)}
              className={`px-3 py-1 text-sm rounded-full font-medium transition-colors ${
                mode === tab.id
                  ? 'bg-brass text-ink'
                  : 'text-ivory/60 hover:text-ivory'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1.5 font-mono text-sm text-brass bg-ivory/5 px-2.5 py-1 rounded-full"
          title={`${streak} day streak`}
        >
          <span aria-hidden>🔥</span>{streak}
        </div>
      </div>
    </header>
  )
}

export default Header;