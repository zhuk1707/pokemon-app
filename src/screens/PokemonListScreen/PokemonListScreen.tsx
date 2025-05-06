import { Header } from '../../components/Header/Header.tsx'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { Pagination } from '../../components/Pagination/Pagination.tsx'

interface Pokemon {
  pokemonName: string;
  periodicNumber: number;
  isFavorite: boolean;
  isInComparison: boolean;
  dimensions: {
    height: number,
    weight: number,
  }
}


export const fakePokeApi: Pokemon[] = [
  {
    pokemonName: 'Pikachu',
    periodicNumber: 25,
    isFavorite: true,
    isInComparison: true,
    dimensions: {
      height: 0.4,
      weight: 6
    }
  },
  {
    pokemonName: 'Raichu',
    periodicNumber: 26,
    isFavorite: false,
    isInComparison: true,
    dimensions: {
      height: 0.75,
      weight: 9.5
    }
  },
  {
    pokemonName: 'Charmander',
    periodicNumber: 4,
    isFavorite: false,
    isInComparison: false,
    dimensions: {
      height: 0.6,
      weight: 8.3
    }
  },
  {
    pokemonName: 'Bulbasaur',
    periodicNumber: 1,
    isFavorite: true,
    isInComparison: false,
    dimensions: {
      height: 0.55,
      weight: 7.8
    }
  },
  {
    pokemonName: 'Squirtle',
    periodicNumber: 7,
    isFavorite: false,
    isInComparison: true,
    dimensions: {
      height: 0.35,
      weight: 6.9
    }
  },
  {
    pokemonName: 'Jigglypuff',
    periodicNumber: 39,
    isFavorite: true,
    isInComparison: true,
    dimensions: {
      height: 0.5,
      weight: 5.5
    }
  },
  {
    pokemonName: 'Meowth',
    periodicNumber: 52,
    isFavorite: false,
    isInComparison: false,
    dimensions: {
      height: 0.4,
      weight: 6.4
    }
  },
  {
    pokemonName: 'Psyduck',
    periodicNumber: 54,
    isFavorite: true,
    isInComparison: false,
    dimensions: {
      height: 0.7,
      weight: 8.2
    }
  },
  {
    pokemonName: 'Snorlax',
    periodicNumber: 143,
    isFavorite: false,
    isInComparison: true,
    dimensions: {
      height: 1.4,
      weight: 30.5
    }
  },
  {
    pokemonName: 'Gengar',
    periodicNumber: 94,
    isFavorite: true,
    isInComparison: false,
    dimensions: {
      height: 1.1,
      weight: 13.3
    }
  }
];


export const PokemonListScreen = () => {
  return (
    <>
      <Header subtitle={'List'} />
      <PokemonList list={fakePokeApi} />
      <Pagination />
    </>
  )
}