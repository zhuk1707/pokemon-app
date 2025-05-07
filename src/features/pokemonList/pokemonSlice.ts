import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Pokemon {
  pokemonName: string;
  periodicNumber: number;
  isFavorite: boolean;
  isInComparison: boolean;
  dimensions: {
    height: number,
    weight: number,
  }
}

export const fakePokeApi: Pokemon[] = [
  {
    pokemonName: 'Pikachu',
    periodicNumber: 25,
    isFavorite: true,
    isInComparison: true,
    dimensions: {
      height: 0.4,
      weight: 6
    }
  },
  {
    pokemonName: 'Raichu',
    periodicNumber: 26,
    isFavorite: false,
    isInComparison: true,
    dimensions: {
      height: 0.75,
      weight: 9.5
    }
  },
  {
    pokemonName: 'Charmander',
    periodicNumber: 4,
    isFavorite: false,
    isInComparison: false,
    dimensions: {
      height: 0.6,
      weight: 8.3
    }
  },
  {
    pokemonName: 'Bulbasaur',
    periodicNumber: 1,
    isFavorite: true,
    isInComparison: false,
    dimensions: {
      height: 0.55,
      weight: 7.8
    }
  },
  {
    pokemonName: 'Squirtle',
    periodicNumber: 7,
    isFavorite: false,
    isInComparison: true,
    dimensions: {
      height: 0.35,
      weight: 6.9
    }
  },
  {
    pokemonName: 'Jigglypuff',
    periodicNumber: 39,
    isFavorite: true,
    isInComparison: true,
    dimensions: {
      height: 0.5,
      weight: 5.5
    }
  },
  {
    pokemonName: 'Meowth',
    periodicNumber: 52,
    isFavorite: false,
    isInComparison: false,
    dimensions: {
      height: 0.4,
      weight: 6.4
    }
  },
  {
    pokemonName: 'Psyduck',
    periodicNumber: 54,
    isFavorite: true,
    isInComparison: false,
    dimensions: {
      height: 0.7,
      weight: 8.2
    }
  },
  {
    pokemonName: 'Snorlax',
    periodicNumber: 143,
    isFavorite: false,
    isInComparison: true,
    dimensions: {
      height: 1.4,
      weight: 30.5
    }
  },
  {
    pokemonName: 'Gengar',
    periodicNumber: 94,
    isFavorite: true,
    isInComparison: false,
    dimensions: {
      height: 1.1,
      weight: 13.3
    }
  }
]

interface InitialStateTypes {
  list: Pokemon[],
  error: string | null,
  loading: boolean,
  pages: number,
}

const initialState: InitialStateTypes = {
  list: [],
  error: null,
  loading: false,
  pages: 0
}

export const fetchPokemonList = createAsyncThunk<Pokemon[], void, { rejectValue: string }>(
  'pokemon/fetchPokemonList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
      if (!response.ok) {
        throw 'Ошибка загрузки';
      }
      return await response.json();
    } catch (error) {
      if (typeof error === "string") return rejectWithValue(error)
      return rejectWithValue('Не удалось загрузить посты');
    }
  }
);

const pokemonSlice = createSlice({
    name: 'pokemonList',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPokemonList.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchPokemonList.fulfilled, (state, action) => {
          state.loading = false
          state.list = action.payload
        })
        .addCase(fetchPokemonList.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload || 'Неизвестная ошибка'
        })
    }
  }
)

// export const { } = pokemonSlice.actions
export default pokemonSlice.reducer