import { Header } from '../../components/Header/Header.tsx'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'

interface Pokemonn {
  name: string,
  url: string
}

export const FavoritePokemonScreen = () => {
  const fakePokeApi: Pokemonn[] = [
    {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }
  ]

  return (
    < >
      <Header subtitle={'Favorites'} />
      <PokemonList list={fakePokeApi} />
    </>
  )
}