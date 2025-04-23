import { Header } from '../components/Header/Header.tsx'
import { PokemonList } from '../components/PokemonList/PokemonList.tsx'

export const FavoritePokemonScreen = () => {
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

  return (
    < >
      <Header subtitle={'Favorites'} />
      <PokemonList list={fakePokeApi} variant={'favorite'}/>
    </>
  )
}