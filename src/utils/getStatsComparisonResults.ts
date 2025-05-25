import { Stat } from '../features/pokemonDetails/pokemonDetailsSlice.ts'

const getStatsComparisonResults =
  (firstOpp: Stat[], secondOpp: Stat[]): number[] => {
    return firstOpp.map((el, index) => {
      const secondOppStat = secondOpp[index]?.base_stat ?? 0

      return el.base_stat > secondOppStat ? 1
        : el.base_stat === secondOppStat ? 0
          : -1
    })
  }

export default getStatsComparisonResults