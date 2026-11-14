const MUTE_KEY = "gambit-sound-muted";

let ctx: AudioContext | null = null;
let noiseBuffer: AudioBuffer | null = null;

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

const audio = (): AudioContext => (ctx ??= new AudioContext());

const tone = (
  freq: number,
  start: number,
  duration: number,
  type: OscillatorType,
  volume: number,
  endFreq?: number
): void => {
  const ac = audio();
  const t = ac.currentTime + start;
  const osc = ac.createOscillator();
  const gain = ac.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  osc.connect(gain).connect(ac.destination);
  osc.start(t);
  osc.stop(t + duration + 0.05);
};

/** A filtered burst of noise: the metallic part of a click or the body of a clunk. */
const noise = (start: number, duration: number, filter: BiquadFilterType, freq: number, volume: number): void => {
  const ac = audio();
  if (!noiseBuffer) {
    noiseBuffer = ac.createBuffer(1, ac.sampleRate * 0.25, ac.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }
  const t = ac.currentTime + start;
  const src = ac.createBufferSource();
  const biquad = ac.createBiquadFilter();
  const gain = ac.createGain();

  src.buffer = noiseBuffer;
  biquad.type = filter;
  biquad.frequency.value = freq;
  gain.gain.setValueAtTime(volume, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  src.connect(biquad).connect(gain).connect(ac.destination);
  src.start(t);
  src.stop(t + duration + 0.02);
};

const gearClick = (start: number, volume: number): void => {
  noise(start, 0.025, "bandpass", 3200, volume);
  tone(2300, start, 0.02, "square", volume * 0.25);
};

/** A gear tooth engaging: two quick metallic ticks. */
export const playTick = (): void => {
  if (isMuted()) return;
  gearClick(0, 0.22);
  gearClick(0.045, 0.12);
};

/** A piece set down on the board: a soft wooden knock. */
export const playMove = (): void => {
  if (isMuted()) return;
  noise(0, 0.05, "lowpass", 1800, 0.35);
  tone(220, 0, 0.08, "sine", 0.3, 120);
};

/** A muted mechanical clunk. */
export const playWrong = (): void => {
  if (isMuted()) return;
  tone(150, 0, 0.22, "triangle", 0.35, 48);
  noise(0, 0.07, "lowpass", 700, 0.3);
  tone(95, 0.06, 0.16, "sine", 0.18, 60);
};

/** Gears lock with a thunk, then a brass bell pitched up one semitone per streak day (max 6). */
export const playSolved = (streak: number): void => {
  if (isMuted()) return;
  gearClick(0, 0.2);
  gearClick(0.05, 0.16);
  tone(140, 0.08, 0.2, "triangle", 0.35, 55);

  const shift = 2 ** (Math.min(streak, 6) / 12);
  const base = 880 * shift;
  // Inharmonic partials give the bell its brassy ring.
  const partials: [number, number, number][] = [
    [1, 0.16, 1.4],
    [2.0, 0.07, 1.0],
    [2.76, 0.06, 0.8],
    [4.07, 0.03, 0.5],
    [5.4, 0.02, 0.35],
  ];
  partials.forEach(([ratio, volume, duration]) => tone(base * ratio, 0.24, duration, "sine", volume));
};
