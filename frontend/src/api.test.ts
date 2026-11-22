import { afterEach, describe, expect, it, vi } from 'vitest'

import { api, fetchDaily } from './api'
import { ALT_MATE } from './test/fixtures'

afterEach(() => vi.restoreAllMocks())

describe('fetchDaily', () => {
  it('requests the daily for the local date', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ data: ALT_MATE })
    expect(await fetchDaily()).toEqual(ALT_MATE)
    expect(get).toHaveBeenCalledTimes(1)
    expect(get.mock.calls[0][0]).toBe('/puzzles/daily')
    expect((get.mock.calls[0][1] as { params: { date: string } }).params.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('retries without a date when the server rejects it with 422', async () => {
    const get = vi
      .spyOn(api, 'get')
      .mockRejectedValueOnce({ response: { status: 422 } })
      .mockResolvedValueOnce({ data: ALT_MATE })
    expect(await fetchDaily()).toEqual(ALT_MATE)
    expect(get).toHaveBeenCalledTimes(2)
    expect(get.mock.calls[1]).toEqual(['/puzzles/daily'])
  })

  it('propagates other errors without retrying', async () => {
    const get = vi.spyOn(api, 'get').mockRejectedValue({ response: { status: 500 } })
    await expect(fetchDaily()).rejects.toEqual({ response: { status: 500 } })
    expect(get).toHaveBeenCalledTimes(1)
  })
})
