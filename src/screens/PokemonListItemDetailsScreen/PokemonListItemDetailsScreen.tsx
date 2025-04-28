import { PokemonDetails } from '../../components/PokemonListItemDetails/PokemonDetails.tsx'
import { Header } from '../../components/Header/Header.tsx'
import { useParams } from 'react-router'
import ImagePlaceholder from '../../assets/placeholder.png'
import { fakePokeApi } from '../PokemonListScreen/PokemonListScreen.tsx'

type StatItem = {
  statLabel: string;
  value: number;
};

const mockStats: StatItem[] = [
  {
    statLabel: 'HP',
    value: 35
  },
  {
    statLabel: 'Attack',
    value: 55
  },
  {
    statLabel: 'Defense',
    value: 40
  },
  {
    statLabel: 'Sp.Atk',
    value: 50
  },
  {
    statLabel: 'Sp.Def',
    value: 50
  },
  {
    statLabel: 'Speed',
    value: 90
  }
]

export const PokemonListItemDetailsScreen = () => {
  const { id } = useParams<{ id: string }>()

  const currentPokemon = fakePokeApi
    .find(item => item.periodicNumber.toString() === id);

  return (
    <>
      <Header subtitle={'Details'}/>
      {currentPokemon && <PokemonDetails
        imageURL={ImagePlaceholder}
        name={currentPokemon.pokemonName}
        periodicNumber={currentPokemon.periodicNumber}
        height={currentPokemon.dimensions.height}
        weight={currentPokemon.dimensions.weight}
        stats = {mockStats}
      />}

    </>
  )
}