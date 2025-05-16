import { createSlice } from '@reduxjs/toolkit'

interface comparisonState {
  some: boolean
}

const initialState: comparisonState = {
  some: false
}

const comparedPokemonsSlice = createSlice({
  name: "comparedPokemons",
  initialState,
  reducers: {},
  extraReducers: () => {}
})

// export const { toggleFavorite } = favoritePokemonsSlice.actions;
export default comparedPokemonsSlice.reducer;
