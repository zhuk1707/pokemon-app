import { Header } from '../../components/Header/Header.tsx'
import { PokemonList } from '../../components/PokemonList/PokemonList.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'
import { fetchFavoritePokemons } from '../../features/favoritePokemon/favoritePokemonSlice.ts'
import { Card } from '../../components/Card/Card.tsx'
import { Loader } from '../../components/Loader/Loader.tsx'


export const FavoritePokemonScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    favoriteIds,
    favoritePokemonsList,
    loading,
    error
  } = useSelector((state: RootState) => state.favoritePokemons)


  useEffect(() => {
    dispatch(fetchFavoritePokemons(favoriteIds))
  }, [dispatch, favoriteIds])

  return (
    < >
      <Header subtitle={'Favorites'} />

      {loading
        ? (<Loader />)
        : error
          ? (<Card><h1>Oops!</h1><h2>{error}</h2></Card>)
          : favoriteIds.length
            ? (<PokemonList list={favoritePokemonsList} />)
            : (<Card>
                <h1>No favorite Pokémons</h1>
              </Card>
            )
      }
    </>
  )
}