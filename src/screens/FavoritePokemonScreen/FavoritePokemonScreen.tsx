import { Header } from '../../components/Header/Header.tsx'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { Pokemon } from '../../features/pokemonList/pokemonSlice.ts'

export const FavoritePokemonScreen = () => {
  const fakePokeApi: Pokemon[] = [
    {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/"
    },
  ]

  return (
    < >
      <Header subtitle={'Favorites'} />
      <PokemonList list={fakePokeApi}/>
    </>
  )
}