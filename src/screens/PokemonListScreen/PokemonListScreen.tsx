import { Header } from '../../components/Header/Header.tsx'
import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { fetchPokemonList } from '../../features/pokemonList/pokemonSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect, useState } from 'react'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import Loader from '../../components/Loader/Loader.tsx'

export const PokemonListScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pokemonList, loading, error, totalPages } = useSelector((state: RootState) => state.pokemon)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchPokemonList(currentPage))
  }, [dispatch, currentPage])


  return (
    <>
      <Header subtitle={'List'} />

      {loading
        ? <Loader />
        : <PokemonList list={pokemonList} />
      }
      {error && <p>{error}</p>}

      <Pagination
        pageCount={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage} />
    </>
  )
}