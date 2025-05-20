import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../pokemonList/pokemonSlice.ts';

interface FavoritePokemonsSlice {
  favoriteIds: string[];
  favoritePokemonsList: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: FavoritePokemonsSlice = {
  favoriteIds: [],
  favoritePokemonsList: [],
  loading: false,
  error: null,
};

export const fetchFavoritePokemons = createAsyncThunk<
  Pokemon[],
  string[],
  { rejectValue: string }
>(
  'favoritePokemons/fetchFavoritePokemons',
  async (favoritePokemonIds, { rejectWithValue }) => {
    try {
      const responses = await Promise.all(
        favoritePokemonIds.map(async (pokemonId) => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

            if (!response.ok) {
              throw new Error(`Failed to fetch Pokémon with ID: ${pokemonId}`);
            }

            return await response.json();
          } catch (error) {
            return rejectWithValue(`Failed to load Pokémon details for ID: ${pokemonId}`);
          }
        })
      );
      return responses.map(({ name, id }): Pokemon => ({
        name,
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      }));
    } catch (error) {
      return rejectWithValue('Failed to fetch Pokémon details');
    }
  }
);

const favoritePokemonsSlice = createSlice({
  name: 'favoritePokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const pokemonId = action.payload;
      if (state.favoriteIds.includes(pokemonId)) {
        state.favoriteIds = state.favoriteIds.filter((id) => id !== pokemonId);
      } else {
        state.favoriteIds.push(pokemonId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritePokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoritePokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritePokemonsList = action.payload;
      })
      .addCase(fetchFavoritePokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { toggleFavorite } = favoritePokemonsSlice.actions;
export default favoritePokemonsSlice.reducer;
