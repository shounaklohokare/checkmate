import { describe, it, expect } from 'vitest'
import { ALT_MATE, MATE_IN_2 } from '../test/fixtures'
import { hintLabel, mateIn, problemPrompt, viewState } from './utils'

describe('mateIn', () => {
  it('counts solver moves', () => {
    expect(mateIn(ALT_MATE)).toBe(1)
    expect(mateIn(MATE_IN_2)).toBe(2)
  })
})

describe('problemPrompt', () => {
  it('words a mate in one', () => {
    expect(problemPrompt(ALT_MATE)).toBe('White to play and mate in one move.')
  })

  it('words a mate in two', () => {
    expect(problemPrompt(MATE_IN_2)).toBe('White to play and mate in two moves.')
  })
})

describe('hintLabel', () => {
  it('labels the hint button by level', () => {
    expect(hintLabel(0)).toBe('Hint')
    expect(hintLabel(2)).toBe('Hints used')
  })
})

describe('viewState', () => {
  const daily = { puzzle: ALT_MATE, loading: false, error: false }
  const library = { selected: MATE_IN_2, error: false }

  it('shows the daily while the library has failed with nothing selected', () => {
    expect(viewState('daily', daily, { selected: null, error: true })).toBe('ready')
  })
  it('shows the error when the daily fails', () => {
    expect(viewState('daily', { puzzle: null, loading: false, error: true }, library)).toBe('error')
  })
  it('waits for the daily', () => {
    expect(viewState('daily', { puzzle: null, loading: true, error: false }, library)).toBe('loading')
  })
  it('waits for the library until a puzzle is selected', () => {
    expect(viewState('library', daily, { selected: null, error: false })).toBe('loading')
  })
  it('shows the error when the library fails with nothing selected', () => {
    expect(viewState('library', daily, { selected: null, error: true })).toBe('error')
  })
  it('keeps the library ready once a puzzle is selected despite a later error', () => {
    expect(viewState('library', daily, { selected: MATE_IN_2, error: true })).toBe('ready')
  })
})
