import { describe, expect, test } from 'vitest'
import getStatsComparisonResults from '../utils/getStatsComparisonResults.ts'

describe('happy', () => {
  test('same stats, expects [0, 0, 0, 0, 0, 0]', () => {
    expect(getStatsComparisonResults(
      [
        { base_stat: 80, stat: { name: 'hp' } },
        { base_stat: 82, stat: { name: 'attack' } },
        { base_stat: 83, stat: { name: 'defense' } },
        { base_stat: 100, stat: { name: 'special-attack' } },
        { base_stat: 100, stat: { name: 'special-defense' } },
        { base_stat: 80, stat: { name: 'speed' } }
      ],
      [
        { base_stat: 80, stat: { name: 'hp' } },
        { base_stat: 82, stat: { name: 'attack' } },
        { base_stat: 83, stat: { name: 'defense' } },
        { base_stat: 100, stat: { name: 'special-attack' } },
        { base_stat: 100, stat: { name: 'special-defense' } },
        { base_stat: 80, stat: { name: 'speed' } }
      ]
    )).toEqual([0, 0, 0, 0, 0, 0])
  })

  test('first opp stats greater, expects [1, 1, 1, 1, 1, 1]', () => {
    expect(getStatsComparisonResults(
      [
        { base_stat: 100, stat: { name: 'hp' } },
        { base_stat: 100, stat: { name: 'attack' } },
        { base_stat: 100, stat: { name: 'defense' } },
        { base_stat: 100, stat: { name: 'special-attack' } },
        { base_stat: 100, stat: { name: 'special-defense' } },
        { base_stat: 100, stat: { name: 'speed' } }
      ],
      [
        { base_stat: 10, stat: { name: 'hp' } },
        { base_stat: 10, stat: { name: 'attack' } },
        { base_stat: 10, stat: { name: 'defense' } },
        { base_stat: 10, stat: { name: 'special-attack' } },
        { base_stat: 10, stat: { name: 'special-defense' } },
        { base_stat: 10, stat: { name: 'speed' } }
      ]
    )).toEqual([1, 1, 1, 1, 1, 1])
  })

  test('second opp stats greater, expects [-1, -1, -1, -1, -1, -1]', () => {
    expect(getStatsComparisonResults(
      [
        { base_stat: 10, stat: { name: 'hp' } },
        { base_stat: 10, stat: { name: 'attack' } },
        { base_stat: 10, stat: { name: 'defense' } },
        { base_stat: 10, stat: { name: 'special-attack' } },
        { base_stat: 10, stat: { name: 'special-defense' } },
        { base_stat: 10, stat: { name: 'speed' } }
      ],
      [
        { base_stat: 100, stat: { name: 'hp' } },
        { base_stat: 100, stat: { name: 'attack' } },
        { base_stat: 100, stat: { name: 'defense' } },
        { base_stat: 100, stat: { name: 'special-attack' } },
        { base_stat: 100, stat: { name: 'special-defense' } },
        { base_stat: 100, stat: { name: 'speed' } }
      ]
    )).toEqual([-1, -1, -1, -1, -1, -1])
  })

  test('both opp stats is 0, expects [0, 0, 0, 0, 0, 0]', () => {
    expect(getStatsComparisonResults(
      [
        { base_stat: 0, stat: { name: 'hp' } },
        { base_stat: 0, stat: { name: 'attack' } },
        { base_stat: 0, stat: { name: 'defense' } },
        { base_stat: 0, stat: { name: 'special-attack' } },
        { base_stat: 0, stat: { name: 'special-defense' } },
        { base_stat: 0, stat: { name: 'speed' } }
      ],
      [
        { base_stat: 0, stat: { name: 'hp' } },
        { base_stat: 0, stat: { name: 'attack' } },
        { base_stat: 0, stat: { name: 'defense' } },
        { base_stat: 0, stat: { name: 'special-attack' } },
        { base_stat: 0, stat: { name: 'special-defense' } },
        { base_stat: 0, stat: { name: 'speed' } }
      ]
    )).toEqual([0, 0, 0, 0, 0, 0])
  })
})

describe('edge', () => {
  test('first opp stats are negative, expects [-1, -1, -1, -1, -1, -1]', () => {
    expect(getStatsComparisonResults(
      [
        { base_stat: -10, stat: { name: 'hp' } },
        { base_stat: -10, stat: { name: 'attack' } },
        { base_stat: -10, stat: { name: 'defense' } },
        { base_stat: -10, stat: { name: 'special-attack' } },
        { base_stat: -10, stat: { name: 'special-defense' } },
        { base_stat: -10, stat: { name: 'speed' } }
      ],
      [
        { base_stat: 100, stat: { name: 'hp' } },
        { base_stat: 100, stat: { name: 'attack' } },
        { base_stat: 100, stat: { name: 'defense' } },
        { base_stat: 100, stat: { name: 'special-attack' } },
        { base_stat: 100, stat: { name: 'special-defense' } },
        { base_stat: 100, stat: { name: 'speed' } }
      ]
    )).toEqual([-1, -1, -1, -1, -1, -1])
  })

  test('both opp stats are negative, first opp stats greater, expects [1, 1, 1, 1, 1, 1]', () => {
    expect(getStatsComparisonResults(
      [
        { base_stat: -10, stat: { name: 'hp' } },
        { base_stat: -10, stat: { name: 'attack' } },
        { base_stat: -10, stat: { name: 'defense' } },
        { base_stat: -10, stat: { name: 'special-attack' } },
        { base_stat: -10, stat: { name: 'special-defense' } },
        { base_stat: -10, stat: { name: 'speed' } }
      ],
      [
        { base_stat: -100, stat: { name: 'hp' } },
        { base_stat: -100, stat: { name: 'attack' } },
        { base_stat: -100, stat: { name: 'defense' } },
        { base_stat: -100, stat: { name: 'special-attack' } },
        { base_stat: -100, stat: { name: 'special-defense' } },
        { base_stat: -100, stat: { name: 'speed' } }
      ]
    )).toEqual([1, 1, 1, 1, 1, 1])
  })
})