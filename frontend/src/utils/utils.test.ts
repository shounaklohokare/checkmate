import { describe, it, expect } from 'vitest'
import { ALT_MATE, MATE_IN_2 } from '../test/fixtures'
import { hintLabel, mateIn, problemPrompt } from './utils'

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
