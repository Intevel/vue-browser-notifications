import { describe, expect, it } from 'vitest'
import { useTestComposable } from '../src'

describe('useTestComposable', () => {
  const { test } = useTestComposable()
  it('returns true in test', () => {
    expect(test()).toBe(true)
  })
})
