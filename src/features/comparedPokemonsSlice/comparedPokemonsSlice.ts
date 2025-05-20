import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PokemonDetailsTypes } from '../pokemonDetails/pokemonDetailsSlice.ts'

interface ComparisonState {
  comparedIds: string[]
  comparedPokemonsDetailsData: PokemonDetailsTypes[] | null
  loading: boolean
  error: string | null
  isModalOpen: boolean
  errorMessage: string | null
}

const initialState: ComparisonState = {
  comparedIds: [],
  comparedPokemonsDetailsData: [],
  loading: false,
  error: null,
  isModalOpen: false,
  errorMessage: ''
}

export const fetchComparedPokemons = createAsyncThunk<
  PokemonDetailsTypes[],
  string[],
  { rejectValue: string }
>(
  'comparedPokemons/fetchComparedPokemons',
  async (comparedPokemonIds, { rejectWithValue }) => {
    try {
      return await Promise.all(
        comparedPokemonIds.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          if (!response.ok) throw new Error('Loading error')
          return response.json()
        })
      )
    } catch (error) {
      return rejectWithValue('Failed to load Pokémon details')
    }
  }
)

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
          state.errorMessage = 'Only 2 Pokémon can be compared!'
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchComparedPokemons.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchComparedPokemons.fulfilled, (state, action) => {
        state.loading = false
        state.comparedPokemonsDetailsData = action.payload
      })
      .addCase(fetchComparedPokemons.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Unknown error'
      })
  }
})

export const { toggleCompared, closeModal } = comparedPokemonsSlice.actions
export default comparedPokemonsSlice.reducer
