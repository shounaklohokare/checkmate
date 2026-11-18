import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { api } from '../api'
import { ALT_MATE } from '../test/fixtures'
import { DAILY_PIN_KEY, loadDaily } from './daily'
import type { Difficulty, Puzzle } from './constants'

const today = '2026-11-18'

const p = (id: string, rating = 900, difficulty: Difficulty = 'Easy'): Puzzle => ({ ...ALT_MATE, id, rating, difficulty })

const D = p('D')

type Params = { difficulty?: string; limit?: number; offset?: number }

/** Routes api.get: the shared daily, the Easy-from-rating list, the unfiltered list and single puzzles by id. */
const stub = (opts: { shared?: Puzzle; easy?: Puzzle[]; all?: Puzzle[]; byId?: Record<string, Puzzle>; listError?: boolean }) =>
  vi.spyOn(api, 'get').mockImplementation((async (url: string, config?: { params?: Params }) => {
    if (url === '/puzzles/daily') return { data: opts.shared ?? D }
    if (url === '/puzzles') {
      if (opts.listError) throw new Error('Network Error')
      const { difficulty, limit = 200, offset = 0 } = config?.params ?? {}
      const list = (difficulty ? opts.easy : opts.all) ?? []
      return { data: { items: list.slice(offset, offset + limit), total: list.length, limit, offset } }
    }
    const id = url.slice('/puzzles/'.length)
    if (opts.byId?.[id]) return { data: opts.byId[id] }
    throw { response: { status: 404 } }
  }) as unknown as typeof api.get)

const pin = () => JSON.parse(localStorage.getItem(DAILY_PIN_KEY) ?? 'null')

describe('loadDaily', () => {
  beforeEach(() => { localStorage.clear() })
  afterEach(() => { vi.restoreAllMocks() })

  it('uses the unsolved shared daily and pins it', async () => {
    stub({})
    expect((await loadDaily(new Set(), today)).id).toBe('D')
    expect(pin()).toEqual({ day: today, id: 'D' })
  })

  it('replaces a solved shared daily with the next unsolved puzzle at its difficulty', async () => {
    stub({ easy: [D, p('X'), p('Y', 950)] })
    expect((await loadDaily(new Set(['D', 'X']), today)).id).toBe('Y')
    expect(pin()).toEqual({ day: today, id: 'Y' })
  })

  it('gives the same backup to users with different solved sets', async () => {
    stub({ easy: [D, p('P'), p('Q'), p('Y', 950)] })
    expect((await loadDaily(new Set(['D', 'P']), today)).id).toBe('Q')
    localStorage.clear()
    expect((await loadDaily(new Set(['D', 'Q']), today)).id).toBe('P')
    localStorage.clear()
    expect((await loadDaily(new Set(['D', 'P', 'Q']), today)).id).toBe('Y')
    localStorage.clear()
    expect((await loadDaily(new Set(['D', 'P', 'Q', 'Z']), today)).id).toBe('Y')
  })

  it('pages through the list', async () => {
    const solved = Array.from({ length: 200 }, (_, i) => p(`s${i}`))
    const get = stub({ easy: [...solved, p('Z', 1000)] })
    expect((await loadDaily(new Set(['D', ...solved.map((s) => s.id)]), today)).id).toBe('Z')
    expect(get).toHaveBeenCalledWith('/puzzles', expect.objectContaining({ params: expect.objectContaining({ offset: 200 }) }))
  })

  it('falls back to the whole catalogue', async () => {
    stub({ easy: [D, p('X')], all: [p('A', 600), D, p('W', 1500, 'Hard')] })
    expect((await loadDaily(new Set(['D', 'X', 'A']), today)).id).toBe('W')
  })

  it('returns the shared daily when everything is solved', async () => {
    stub({ easy: [D, p('X')], all: [D, p('X')] })
    expect((await loadDaily(new Set(['D', 'X']), today)).id).toBe('D')
    expect(pin()).toEqual({ day: today, id: 'D' })
  })

  it("reuses today's pin even if it is now solved", async () => {
    localStorage.setItem(DAILY_PIN_KEY, JSON.stringify({ day: today, id: 'Y' }))
    const get = stub({ byId: { Y: p('Y') } })
    expect((await loadDaily(new Set(['D', 'Y']), today)).id).toBe('Y')
    expect(get).not.toHaveBeenCalledWith('/puzzles/daily')
  })

  it("ignores yesterday's pin", async () => {
    localStorage.setItem(DAILY_PIN_KEY, JSON.stringify({ day: '2026-11-17', id: 'Y' }))
    stub({ byId: { Y: p('Y') } })
    expect((await loadDaily(new Set(), today)).id).toBe('D')
  })

  it('falls through when the pinned puzzle 404s', async () => {
    localStorage.setItem(DAILY_PIN_KEY, JSON.stringify({ day: today, id: 'Y' }))
    stub({})
    expect((await loadDaily(new Set(), today)).id).toBe('D')
  })

  it('ignores a corrupt pin', async () => {
    localStorage.setItem(DAILY_PIN_KEY, '{')
    stub({})
    expect((await loadDaily(new Set(), today)).id).toBe('D')
  })

  it('shows the shared daily without pinning when the search fails', async () => {
    stub({ listError: true })
    expect((await loadDaily(new Set(['D']), today)).id).toBe('D')
    expect(localStorage.getItem(DAILY_PIN_KEY)).toBeNull()
  })
})
