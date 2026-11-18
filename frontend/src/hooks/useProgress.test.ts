import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useProgress } from './useProgress'
import { STORAGE_KEY, type SavedProgress } from '../utils/constants'

const seed = (streak: number, lastSolvedDate: string, solvedIds: string[] = []) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ solvedIds, streak, lastSolvedDate, darkMode: true }))
}

const stored = (): SavedProgress => JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')

describe('useProgress', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 10, 15, 12))
  })

  afterEach(() => {
    expect(Object.keys(stored()).sort()).toEqual(['darkMode', 'lastSolvedDate', 'solvedIds', 'streak'])
    vi.useRealTimers()
  })

  it('shows a lapsed streak as 0 without rewriting it', () => {
    seed(5, '2026-11-12')
    const { result } = renderHook(() => useProgress())
    expect(result.current.streak).toBe(0)
    expect(stored().streak).toBe(5)
  })

  it('does not count a re-solve, extends on a new solve, then holds it the same day', () => {
    seed(5, '2026-11-14', ['a'])
    const { result } = renderHook(() => useProgress())

    act(() => { result.current.markSolved('a') })
    expect(result.current.streak).toBe(5)
    expect(stored().lastSolvedDate).toBe('2026-11-14')

    act(() => { result.current.markSolved('b') })
    expect(result.current.streak).toBe(6)
    expect(stored().lastSolvedDate).toBe('2026-11-15')

    act(() => { result.current.markSolved('c') })
    expect(result.current.streak).toBe(6)
    expect([...result.current.solvedIds].sort()).toEqual(['a', 'b', 'c'])
  })

  it('restarts at 1 after a missed day', () => {
    seed(5, '2026-11-13')
    const { result } = renderHook(() => useProgress())
    act(() => { result.current.markSolved('b') })
    expect(result.current.streak).toBe(1)
  })
})
