import { configureStore } from '@reduxjs/toolkit'
import
  // pokemonReducer,
{ pokemonListApi } from '../features/pokemonList/pokemonSlice.ts'
import pokemonDetailsReducer from '../features/pokemonDetails/pokemonDetailsSlice.ts'
import favoritePokemonsReducer from '../features/favoritePokemon/favoritePokemonSlice.ts'
import comparedPokemonsReducer from '../features/comparedPokemonsSlice/comparedPokemonsSlice.ts'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist'

const favoritePokemonsPersistConfig = {
  key: 'favoritePokemons',
  storage
}

const persistedFavoritePokemonsReducer  = persistReducer (
  favoritePokemonsPersistConfig,
  favoritePokemonsReducer
)

export const store = configureStore({
  reducer: {
    // pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer,
    favoritePokemons: persistedFavoritePokemonsReducer,
    comparedPokemons: comparedPokemonsReducer,
    [pokemonListApi.reducerPath]: pokemonListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonListApi.middleware),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch