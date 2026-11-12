import { useState } from "react";
import { HeaderProps } from "../utils/constants";
import { isMuted, setMuted } from "../lib/sound";
import ModeLever from "./ModeLever";
import StreakGauge from "./StreakGauge";

const Header = ({ mode, onModeChange, streak, subtitle }: HeaderProps) => {
  const [muted, setMutedState] = useState(isMuted)

  const toggleMuted = () => {
    setMuted(!muted)
    setMutedState(!muted)
  }

  return (
    <header className="site-header relative bg-soot/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[78rem] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-3 md:px-8 lg:grid-cols-[auto_1fr_auto]">
        <div className="flex items-center gap-4">
          <h1 className="flex items-center gap-2.5">
            <span className="brand-mark" aria-hidden="true" />
            <span className="font-display text-[1.25rem] leading-none tracking-[0.14em] text-ivory uppercase md:text-[1.5rem]">Checkmate<span className="wordmark-cursor" aria-hidden="true" /></span>
          </h1>
          <p className="hidden max-w-[16rem] border-l border-verdigris/40 pl-3 font-mono text-[0.75rem] leading-snug text-verdigris xl:block">{subtitle}</p>
        </div>

        <div className="col-span-2 row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:justify-self-center">
          <ModeLever mode={mode} onModeChange={onModeChange} />
        </div>

        <div className="flex items-center gap-2 justify-self-end sm:gap-3 md:gap-5">
          <StreakGauge streak={streak} />
          <label className="toggle">
            <input type="checkbox" role="switch" checked={!muted} onChange={toggleMuted} className="sr-only" />
            <span className="toggle-base" aria-hidden="true">
              <span className="toggle-bat" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="label-cab">Sound</span>
              <span className="font-mono text-xs font-medium text-ivory-dim" aria-hidden="true">{muted ? 'OFF' : 'ON'}</span>
            </span>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header;
