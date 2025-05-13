import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonSprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface PokemonDetailsTypes {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  stats: Stat[];
  types: PokemonType[];
}

export interface PokemonDetailsState {
  pokemonDetailsData: PokemonDetailsTypes | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonDetailsState = {
  pokemonDetailsData: null,
  loading: false,
  error: null
}

export const fetchPokemonDetails = createAsyncThunk<
  PokemonDetailsTypes,
  string,
  { rejectValue: string }
>(
  'pokemon/fetchPokemonDetails',
  async (pokemonId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

      if (!response.ok) {
        throw new Error('Loading error')
      }

      return await response.json()
    } catch (error) {
      return rejectWithValue('Failed to load Pokémon details')
    }
  }
)

const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loading = false
        state.pokemonDetailsData = action.payload
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'There are no Pokémon with this ID.'
      })
  }
})

export default pokemonDetailsSlice.reducer
