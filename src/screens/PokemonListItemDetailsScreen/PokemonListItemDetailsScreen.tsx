import { PokemonDetails } from '../../components/PokemonListItemDetails/PokemonDetails.tsx'
import { Header } from '../../components/Header/Header.tsx'

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
  return (
    <>
      <Header subtitle={'Details'}/>
      <PokemonDetails
        imageURL={'/src/assets/pikachu.png'}
        name={'Pikachu'}
        height={0.4}
        weight={6}
        stats = {mockStats}
      />
    </>
  )
}