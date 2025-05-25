import { PokemonDetailsTypes } from '../features/pokemonDetails/pokemonDetailsSlice.ts'

const getStatsComparisonResults =
  (comparedDetailsData: PokemonDetailsTypes[]): number[] => {
    return comparedDetailsData[0].stats.map((el, index) => {
      const opponentStat = comparedDetailsData[1].stats[index]?.base_stat ?? 0

      return el.base_stat > opponentStat ? 1
        : el.base_stat === opponentStat ? 0
          : -1
    })
  }

export default getStatsComparisonResults