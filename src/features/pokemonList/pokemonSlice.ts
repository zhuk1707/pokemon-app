import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  pokemonList: Pokemon[];
  count: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const itemsPerPage = 20

const initialState: PokemonState = {
  pokemonList: [],
  count: 0,
  totalPages: 0,
  loading: false,
  error: null
}

export const fetchPokemonList = createAsyncThunk<
  { results: Pokemon[]; count: number },
  number, { rejectValue: string }>(
  'pokemon/fetchPokemonList',
  async (page, { rejectWithValue }) => {
    try {
      const limit = itemsPerPage
      const offset = (page - 1) * limit
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)


      if (!response.ok) {
        throw new Error('Ошибка загрузки')
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue('Не удалось загрузить покемонов')
    }

  }
)

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false
        state.pokemonList = action.payload.results
        state.count = action.payload.count
        state.totalPages = Math.ceil(action.payload.count / itemsPerPage)
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Неизвестная ошибка'
      })
  }
})

// export const { } = pokemonSlice.actions
export default pokemonSlice.reducer