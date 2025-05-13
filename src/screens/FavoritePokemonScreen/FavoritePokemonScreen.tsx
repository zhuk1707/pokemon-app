import { Header } from '../../components/Header/Header.tsx'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'
import { fetchFavoritePokemons } from '../../features/favoritePokemon/favoritePokemonSlice.ts'


export const FavoritePokemonScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    favoriteIds,
    favoritePokemonsList,
    // loading,
    // error
  } = useSelector((state: RootState) => state.favoritePokemons)


  useEffect(() => {
    dispatch(fetchFavoritePokemons(favoriteIds))
  }, [dispatch, favoriteIds, favoritePokemonsList])

  return (
    < >
      <Header subtitle={'Favorites'} />
      <PokemonList list={favoritePokemonsList} />
    </>
  )
}