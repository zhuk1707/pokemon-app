import { Header } from '../../components/Header/Header.tsx'
import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { fetchPokemonList } from '../../features/pokemonList/pokemonSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect, useState } from 'react'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { Loader } from '../../components/Loader/Loader.tsx'
import { Card } from '../../components/Card/Card.tsx'
import Modal from '../../components/Modal/Modal.tsx'
import { closeModal } from '../../features/comparedPokemonsSlice/comparedPokemonsSlice.ts'

export const PokemonListScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pokemonList, loading, error, totalPages } = useSelector((state: RootState) => state.pokemon)
  const {
    isModalOpen,
    errorMessage
  } = useSelector((state: RootState) => state.comparedPokemons)

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchPokemonList(currentPage))
  }, [dispatch, currentPage])

  useEffect(() => {

  }, [])

  return (
    <>
      <Header subtitle={'List'} />

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
          <h1>Oops!</h1>
          <h2>{errorMessage}</h2>
        </Modal>
      )}

      {loading
        ? (<Loader />)
        : error
          ? (
            <Card>
              <h1>{error}</h1>
            </Card>)
          : (<PokemonList list={pokemonList} />)
      }

      <Pagination
        pageCount={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage} />
    </>
  )
}