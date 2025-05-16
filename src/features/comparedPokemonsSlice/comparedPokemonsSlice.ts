import { createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../pokemonList/pokemonSlice.ts'
import { PokemonDetailsTypes } from '../pokemonDetails/pokemonDetailsSlice.ts'

interface comparisonState {
  comparedIds: string[],
  comparedPokemonsList: Pokemon[] | null,
  comparedPokemonsDetailsData: PokemonDetailsTypes[] | null,
  loading: boolean,
  error: string | null,
  isModalOpen: boolean,
  errorMessage: string | null,
}

const initialState: comparisonState = {
  comparedIds: [],
  comparedPokemonsList: [],
  comparedPokemonsDetailsData: [],
  loading: false,
  error: null,
  isModalOpen: false,
  errorMessage: ''
}

const comparedPokemonsSlice = createSlice({
  name: 'comparedPokemons',
  initialState,

  reducers: {
    toggleCompared: (state, action) => {
      const pokemonId = action.payload

      if (state.comparedIds.includes(pokemonId)) {
        state.comparedIds = state.comparedIds.filter((id) => id !== pokemonId)
      } else {
        if (state.comparedIds.length >= 2) {
          state.errorMessage = 'Only 2 Pokemon can be compared!'
          state.isModalOpen = true
          return
        }
        state.comparedIds.push(pokemonId)
        state.isModalOpen = false
        state.errorMessage = ''
      }
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.errorMessage = ''
    }
  },

  extraReducers: () => {
  }
})


export const { toggleCompared, closeModal } = comparedPokemonsSlice.actions
export default comparedPokemonsSlice.reducer
