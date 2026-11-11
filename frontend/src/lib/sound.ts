const MUTE_KEY = "gambit-sound-muted";

let ctx: AudioContext | null = null;

export const isMuted = (): boolean => {
  try {
    return localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
};

export const setMuted = (muted: boolean): void => {
  try {
    localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  } catch {
    // ignore: sound preference just won't persist
  }
};

const tone = (
  freq: number,
  start: number,
  duration: number,
  type: OscillatorType,
  volume: number,
  endFreq?: number
): void => {
  ctx ??= new AudioContext();
  const t = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.05);
};

/** Heavy "thunk" for the mating move, then a rising C–E–G chime pitched up one semitone per streak day (max 6). */
export const playSolved = (streak: number): void => {
  if (isMuted()) return;
  tone(140, 0, 0.2, "triangle", 0.4, 55);
  const shift = 2 ** (Math.min(streak, 6) / 12);
  [523.25, 659.25, 783.99].forEach((f, i) => tone(f * shift, 0.15 + i * 0.09, 0.45, "sine", 0.15));
};

/** Same shape as playSolved — a "thunk" then a three-note chime — but a falling G–Eb–C minor arpeggio. */
export const playWrong = (): void => {
  if (isMuted()) return;
  tone(140, 0, 0.2, "triangle", 0.3, 55);
  [392.0, 311.13, 261.63].forEach((f, i) => tone(f, 0.15 + i * 0.09, 0.45, "sine", 0.15));
};
