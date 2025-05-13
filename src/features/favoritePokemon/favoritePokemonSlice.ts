import { createSlice } from '@reduxjs/toolkit'

const initialState: string[] = []

const favoritePokemonsSlice = createSlice({
  name: 'favoritePokemons',
  initialState,
  reducers: {},
  extraReducers: () => {
  }
})

export default favoritePokemonsSlice.reducer