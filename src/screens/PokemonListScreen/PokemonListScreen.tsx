import { Header } from '../../components/Header/Header.tsx'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { fakePokeApi, fetchPokemonList } from '../../features/pokemonList/pokemonSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'

export const PokemonListScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { list, loading, error, pages } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  console.log({ list, loading, error, pages })

  return (
    <>
      <Header subtitle={'List'} />
      {loading
        ? <p>Загрузка...</p>
        : error
          ? <p>{error}</p>
          : <p>ВСЁ</p>
      }
      <PokemonList list={fakePokeApi} />
      <Pagination pageCount={9} currentPage={2}/>
    </>
  )
}