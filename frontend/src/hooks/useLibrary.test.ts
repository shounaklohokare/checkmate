import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, renderHook, waitFor } from '@testing-library/react'
import { api } from '../api'
import { clearLibraryCache, useLibrary } from './useLibrary'
import { ALT_MATE } from '../test/fixtures'

type Params = { difficulty?: string; limit: number; offset: number }

/** Answers each list request with a page of `limit` puzzles out of 40, ids `p<offset + i>`. */
const stub = () =>
  vi.spyOn(api, 'get').mockImplementation((async (_url: string, config?: { params?: Params }) => {
    const { limit, offset } = config!.params!
    const items = Array.from({ length: limit }, (_, i) => ({ ...ALT_MATE, id: `p${offset + i}` }))
    return { data: { items, total: 40, limit, offset } }
  }) as typeof api.get)

const offsets = (get: ReturnType<typeof stub>) => get.mock.calls.map(([, config]) => (config as { params: Params }).params.offset)

/** Lets resolved requests (including the prefetch) settle into the cache. */
const flush = () => act(async () => {})

describe('useLibrary', () => {
  beforeEach(() => clearLibraryCache())
  afterEach(() => vi.restoreAllMocks())

  it('loads page 0 on mount, then prefetches page 1', async () => {
    const get = stub()
    const { result } = renderHook(() => useLibrary())
    await waitFor(() => expect(offsets(get)).toEqual([0, 8]))
    expect(result.current.loading).toBe(false)
    expect(result.current.items[0].id).toBe('p0')
  })

  it('shows a prefetched page without a request, then prefetches the one after', async () => {
    const get = stub()
    const { result } = renderHook(() => useLibrary())
    await waitFor(() => expect(offsets(get)).toEqual([0, 8]))
    await flush()

    act(() => result.current.setPage(1))
    expect(result.current.loading).toBe(false)
    expect(result.current.items[0].id).toBe('p8')
    await waitFor(() => expect(offsets(get)).toEqual([0, 8, 16]))
    await flush()

    act(() => result.current.setPage(0))
    expect(result.current.loading).toBe(false)
    expect(result.current.items[0].id).toBe('p0')
    await flush()
    expect(offsets(get)).toEqual([0, 8, 16])
  })

  it('sets error on a failed request and clears it when retry succeeds', async () => {
    const get = stub()
    get.mockRejectedValueOnce(new Error('offline'))
    const { result } = renderHook(() => useLibrary())
    await waitFor(() => expect(result.current.error).toBe(true))
    expect(offsets(get)).toEqual([0])

    act(() => result.current.retry())
    await waitFor(() => expect(result.current.error).toBe(false))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(offsets(get).slice(0, 2)).toEqual([0, 0])
    expect(result.current.items[0].id).toBe('p0')
  })

  it('requests the filtered list from offset 0', async () => {
    const get = stub()
    const { result } = renderHook(() => useLibrary())
    await waitFor(() => expect(offsets(get)).toEqual([0, 8]))
    await flush()

    act(() => result.current.setPage(1))
    act(() => result.current.setFilter('Easy'))
    await waitFor(() => expect(result.current.loading).toBe(false))
    const easy = get.mock.calls.map(([, config]) => (config as { params: Params }).params).filter((p) => p.difficulty === 'Easy')
    expect(easy[0]).toMatchObject({ difficulty: 'Easy', offset: 0 })
  })
})
