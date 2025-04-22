import { PokemonListItem } from '../PokemonListItem/PokemonListItem.tsx'
import classes from './PokemonList.module.css'

interface Pokemon {
  pokemonName: string;
  periodicNumber: number;
  isFavorite: boolean;
  isInComparison: boolean;
}

const fakePokeApi: Pokemon[] = [
  {
    pokemonName: 'Pikachu',
    periodicNumber: 25,
    isFavorite: true,
    isInComparison: true
  },
  {
    pokemonName: 'Raichu',
    periodicNumber: 26,
    isFavorite: false,
    isInComparison: true
  },
  {
    pokemonName: 'Charmander',
    periodicNumber: 4,
    isFavorite: false,
    isInComparison: false
  },
  {
    pokemonName: 'Bulbasaur',
    periodicNumber: 1,
    isFavorite: true,
    isInComparison: false
  },
  {
    pokemonName: 'Squirtle',
    periodicNumber: 7,
    isFavorite: false,
    isInComparison: true
  },
  {

    pokemonName: 'Jigglypuff',
    periodicNumber: 39,
    isFavorite: true,
    isInComparison: true
  },
  {
    pokemonName: 'Meowth',
    periodicNumber: 52,
    isFavorite: false,
    isInComparison: false
  },
  {
    pokemonName: 'Psyduck',
    periodicNumber: 54,
    isFavorite: true,
    isInComparison: false
  },
  {
    pokemonName: 'Snorlax',
    periodicNumber: 143,
    isFavorite: false,
    isInComparison: true
  },
  {
    pokemonName: 'Gengar',
    periodicNumber: 94,
    isFavorite: true,
    isInComparison: false
  }
]


export const PokemonList = () => {
  return (
    <div className={classes.listOuter}>
      <div className="container">
        <div className={classes.list}>
          {fakePokeApi
            .map((pokemon) => (
              <PokemonListItem
                key={pokemon.periodicNumber}
                pokemonName={pokemon.pokemonName}
                periodicNumber={pokemon.periodicNumber}
                isFavorite={pokemon.isFavorite}
                isInComparison={pokemon.isInComparison}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
