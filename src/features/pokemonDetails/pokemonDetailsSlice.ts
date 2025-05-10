import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonList } from '../pokemonList/pokemonSlice.ts'

const initialState = {}

const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, () => {

      })
      .addCase(fetchPokemonList.fulfilled, () => {

      })
      .addCase(fetchPokemonList.rejected, () => {

      })
  }
})

// export const { } = pokemonSlice.actions
export default pokemonDetailsSlice.reducer