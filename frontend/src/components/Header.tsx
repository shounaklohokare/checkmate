import { useState } from "react";
import { HeaderProps } from "../utils/constants";
import { isMuted, setMuted } from "../lib/sound";
import ModeLever from "./ModeLever";
import StreakGauge from "./StreakGauge";
import { KingIcon } from "./Icons";

// Brand, mode control, streak and sound in one row. On phones the wordmark and the switch's label are visually hidden
// (screen readers still get them) so the row fits and the board keeps the height.
const Header = ({ mode, onModeChange, streak }: HeaderProps) => {
  const [muted, setMutedState] = useState(isMuted)

  const toggleMuted = () => {
    setMuted(!muted)
    setMutedState(!muted)
  }

  return (
    <header className="site-header">
      <div className="mx-auto grid max-w-[78rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 px-3 py-2 sm:gap-x-4 sm:px-4 sm:py-2.5 md:grid-cols-[1fr_auto_1fr] md:px-8 md:py-3">
        <h1 className="flex items-center gap-2.5">
          <KingIcon className="size-7 shrink-0 text-accent md:size-8" />
          <span className="font-display text-[1.375rem] leading-none text-fg max-sm:sr-only md:text-[1.5rem]">Checkmate</span>
        </h1>

        <div className="min-w-0 [&_.segmented]:max-sm:min-w-0">
          <ModeLever mode={mode} onModeChange={onModeChange} />
        </div>

        <div className="flex items-center gap-2 justify-self-end sm:gap-4 md:gap-6">
          <StreakGauge streak={streak} />
          <label className="toggle">
            <input type="checkbox" role="switch" checked={!muted} onChange={toggleMuted} className="sr-only" />
            <span className="toggle-base" aria-hidden="true">
              <span className="toggle-bat" />
            </span>
            <span className="text-[0.8125rem] font-medium text-fg-muted max-sm:sr-only">Sound</span>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header;
