import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../features/pokemonList/pokemonSlice.ts'
import pokemonDetailsReducer from '../features/pokemonDetails/pokemonDetailsSlice.ts'
import favoritePokemonsReducer from '../features/favoritePokemon/favoritePokemonSlice.ts'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer,
    favoritePokemons: favoritePokemonsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch