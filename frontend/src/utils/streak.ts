/** The device's local date as YYYY-MM-DD. */
export const localDay = (d: Date = new Date()): string => {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const toUtc = (day: string): number => {
  const [y, m, d] = day.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
};

/** Whole days from `from` to `to`; positive when `to` is later. Immune to daylight-saving changes. */
export const daysBetween = (from: string, to: string): number => {
  return Math.round((toUtc(to) - toUtc(from)) / 86_400_000);
};

/** The streak to show today: 0 once a day has been missed. */
export const liveStreak = (streak: number, lastSolvedDate: string | null, today: string): number => {
  return lastSolvedDate !== null && daysBetween(lastSolvedDate, today) <= 1 ? streak : 0;
};

export const streakAfterSolve = (
  streak: number,
  lastSolvedDate: string | null,
  today: string,
): { streak: number; lastSolvedDate: string } => {
  if (lastSolvedDate === null) return { streak: 1, lastSolvedDate: today };

  const diff = daysBetween(lastSolvedDate, today);

  if (diff === 0) return { streak, lastSolvedDate };
  if (diff === 1) return { streak: streak + 1, lastSolvedDate: today };
  // The device clock moved back: keep the streak alive and the later date.
  if (diff < 0) return { streak: Math.max(streak, 1), lastSolvedDate };
  return { streak: 1, lastSolvedDate: today };
};
