import { PokemonListItem } from '../PokemonListItem/PokemonListItem.tsx'
import classes from './PokemonList.module.css'
import { Pokemon } from '../../features/pokemonList/pokemonSlice.ts'
import capitalizeWord from '../../utils/capitalizeWord.ts'


interface PokemonListProps {
  list?: Pokemon[]
}

export const PokemonList = ({ list = [] }: PokemonListProps) => {
  const getPeriodicNumberFromUrl = (url: string): number => {
    return Number(url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', ''))
  }

  return (
    <div className={classes.listOuter}>
      <div className="container">
        <div className={classes.list}>

          {list.length >= 1 && list
            .map((pokemon) => {
              const periodicNumber = getPeriodicNumberFromUrl(pokemon.url)

              return (
                <PokemonListItem
                  key={periodicNumber}
                  pokemonName={capitalizeWord(pokemon.name)}
                  periodicNumber={periodicNumber}
                  isFavorite={false}
                  isInComparison={false}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
