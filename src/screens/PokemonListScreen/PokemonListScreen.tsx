import { Header } from '../../components/Header/Header.tsx'
import { Pagination } from '../../components/Pagination/Pagination.tsx'
import useGetPokemonListQuery from '../../features/pokemonList/pokemonSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect, useState } from 'react'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { Loader } from '../../components/Loader/Loader.tsx'
import { Card } from '../../components/Card/Card.tsx'
import Modal from '../../components/Modal/Modal.tsx'
import { closeModal } from '../../features/comparedPokemonsSlice/comparedPokemonsSlice.ts'
import { AnimatePresence } from 'motion/react'

export const PokemonListScreen = () => {
  const dispatch = useDispatch<AppDispatch>()

  const {
    isModalOpen, errorMessage
  } = useSelector((state: RootState) => state.comparedPokemons)

  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 20
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  const {
    data: listData, error: listError, isLoading: listLoading
  } = useGetPokemonListQuery(offset)

  const totalPages = (!listLoading && !listError)
    ? Math.ceil(listData.count / ITEMS_PER_PAGE)
    : 0

  useEffect(() => {

  }, [currentPage])

  console.log(listData)

  return (
    <>
      <Header subtitle={'List'} />

      <AnimatePresence>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
            <h1>Oops!</h1>
            <h2>{errorMessage}</h2>
          </Modal>
        )}
      </AnimatePresence>

      {listLoading
        ? (<Loader />)
        : listError
          ? (
            <Card>
              <h1>{'Fetch Error'}</h1>
            </Card>)
          : (<PokemonList list={listData.results} />)
      }

      <Pagination
        pageCount={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage} />
    </>
  )
}