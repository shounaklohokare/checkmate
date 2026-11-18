import { describe, it, expect } from 'vitest'
import { daysBetween, liveStreak, localDay, streakAfterSolve } from './streak'

describe('localDay', () => {
  it('formats the local date, zero-padded', () => {
    expect(localDay(new Date(2026, 0, 5, 23, 59))).toBe('2026-01-05')
  })
})

describe('daysBetween', () => {
  it('counts whole days across a daylight-saving change', () => {
    expect(daysBetween('2026-03-28', '2026-03-30')).toBe(2)
  })

  it('is negative when to is earlier', () => {
    expect(daysBetween('2026-11-15', '2026-11-14')).toBe(-1)
  })
})

describe('liveStreak', () => {
  it('is 0 once a day has been missed', () => {
    expect(liveStreak(5, '2026-11-12', '2026-11-15')).toBe(0)
  })

  it('keeps the streak when the last solve was yesterday', () => {
    expect(liveStreak(5, '2026-11-14', '2026-11-15')).toBe(5)
  })

  it('is 0 with no solve on record', () => {
    expect(liveStreak(5, null, '2026-11-15')).toBe(0)
  })
})

describe('streakAfterSolve', () => {
  it('starts at 1 with no solve on record', () => {
    expect(streakAfterSolve(0, null, '2026-11-15')).toEqual({ streak: 1, lastSolvedDate: '2026-11-15' })
  })

  it('leaves a streak already counted today unchanged', () => {
    expect(streakAfterSolve(3, '2026-11-15', '2026-11-15')).toEqual({ streak: 3, lastSolvedDate: '2026-11-15' })
  })

  it('extends the streak the day after', () => {
    expect(streakAfterSolve(3, '2026-11-14', '2026-11-15')).toEqual({ streak: 4, lastSolvedDate: '2026-11-15' })
  })

  it('keeps the date when the clock moved back', () => {
    expect(streakAfterSolve(3, '2026-11-16', '2026-11-15')).toEqual({ streak: 3, lastSolvedDate: '2026-11-16' })
    expect(streakAfterSolve(0, '2026-11-16', '2026-11-15')).toEqual({ streak: 1, lastSolvedDate: '2026-11-16' })
  })

  it('restarts at 1 after a missed day', () => {
    expect(streakAfterSolve(5, '2026-11-13', '2026-11-15')).toEqual({ streak: 1, lastSolvedDate: '2026-11-15' })
  })
})
