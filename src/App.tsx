import { Header } from './components/Header/Header.tsx'
import { PokemonList } from './components/PokemonList/PokemonList.tsx'
import { Pagination } from './components/Pagination/Pagination.tsx'


export const App = () => {
  return (
    <div className='container'>
      <Header/>
      <PokemonList/>
      <Pagination/>
    </div>
  )
}
