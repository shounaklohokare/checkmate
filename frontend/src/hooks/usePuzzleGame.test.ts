import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { usePuzzleGame } from './usePuzzleGame'
import { ALT_MATE, MATE_IN_2 } from '../test/fixtures'
import { INITIAL_MOVE_DELAY, REPLY_DELAY, type Puzzle } from '../utils/constants'

/** Renders the hook and plays the opponent's setup move. */
const setup = (puzzle: Puzzle) => {
  const view = renderHook(() => usePuzzleGame(puzzle))
  act(() => { vi.advanceTimersByTime(INITIAL_MOVE_DELAY) })
  return view
}

describe('usePuzzleGame', () => {
  beforeEach(() => { vi.useFakeTimers() })
  afterEach(() => { vi.useRealTimers() })

  it('plays the setup move', () => {
    const { result } = setup(ALT_MATE)
    expect(result.current.fen).toBe(ALT_MATE.fen)
    expect(result.current.status).toBe('playing')
  })

  it('accepts the stored mate', () => {
    const { result } = setup(ALT_MATE)
    let ok = false
    act(() => { ok = result.current.attemptMove('f4', 'g6') })
    expect(ok).toBe(true)
    expect(result.current.isSolved).toBe(true)
    expect(result.current.attempts).toBe(0)
  })

  it('accepts an alternative mate on the final move', () => {
    const { result } = setup(ALT_MATE)
    let ok = false
    act(() => { ok = result.current.attemptMove('f4', 'e6') })
    expect(ok).toBe(true)
    expect(result.current.isSolved).toBe(true)
    expect(result.current.attempts).toBe(0)
  })

  it('rejects a legal move that is not mate', () => {
    const { result } = setup(ALT_MATE)
    let ok = true
    act(() => { ok = result.current.attemptMove('h7', 'h8') })
    expect(ok).toBe(false)
    expect(result.current.status).toBe('wrong-flash')
    expect(result.current.attempts).toBe(1)
    expect(result.current.fen).toBe(ALT_MATE.fen)
    act(() => { vi.advanceTimersByTime(550) })
    expect(result.current.status).toBe('playing')
  })

  it('requires the stored move before the final move', () => {
    const { result } = setup(MATE_IN_2)
    let ok = true
    act(() => { ok = result.current.attemptMove('f7', 'd8') })
    expect(ok).toBe(false)
    expect(result.current.attempts).toBe(1)
  })

  it('plays the reply and accepts the mate in two', () => {
    const { result } = setup(MATE_IN_2)
    let ok = false
    act(() => { ok = result.current.attemptMove('f7', 'h6') })
    expect(ok).toBe(true)
    act(() => { vi.advanceTimersByTime(REPLY_DELAY) })
    expect(result.current.moveIndex).toBe(2)
    expect(result.current.status).toBe('playing')
    act(() => { ok = result.current.attemptMove('f1', 'f8') })
    expect(ok).toBe(true)
    expect(result.current.isSolved).toBe(true)
  })
})
