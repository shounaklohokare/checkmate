import { HeaderProps, Mode } from "../utils/constants";


const Header = ({ mode, onModeChange, streak, darkMode, onToggleDark }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-4 px-4 md:px-8 py-4 border-b border-ink/10 dark:border-ivory/10">
      <div className="flex items-center gap-3">
        <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink dark:text-ivory">
          ♞ Gambit
        </span>
        <nav className="hidden sm:flex items-center gap-1 bg-ink/5 dark:bg-ivory/10 rounded-full p-1">
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
                  : 'text-ink/60 dark:text-ivory/60 hover:text-ink dark:hover:text-ivory'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1.5 font-mono text-sm text-brass"
          title={`${streak} day streak`}
        >
          <span aria-hidden>🔥</span>
          {streak}
        </div>
        <button
          type="button"
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
          className="w-9 h-9 rounded-full border border-ink/20 dark:border-ivory/20 flex items-center justify-center text-sm hover:bg-ink/5 dark:hover:bg-ivory/10 transition-colors"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header;