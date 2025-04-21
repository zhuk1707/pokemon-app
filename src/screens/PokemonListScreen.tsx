import { Header } from '../components/Header/Header.tsx'
import { PokemonList } from '../components/PokemonList/PokemonList.tsx'
import { Pagination } from '../components/Pagination/Pagination.tsx'


export const PokemonListScreen = () => {
  return (
    <>
      <Header />
      <PokemonList />
      <Pagination />
    </>
  )
}