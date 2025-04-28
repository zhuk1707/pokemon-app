import { Route, Routes } from 'react-router'
import { PokemonListScreen } from './screens/PokemonListScreen/PokemonListScreen.tsx'
import { PokemonListItemDetailsScreen } from './screens/PokemonListItemDetailsScreen/PokemonListItemDetailsScreen.tsx'
import { FavoritePokemonScreen } from './screens/FavoritePokemonScreen/FavoritePokemonScreen.tsx'
import { ComparisonPokemonScreen } from './screens/ComparisonPokemonScreen/ComparisonPokemonScreen.tsx'
import { ErrorScreen } from './screens/ErrorScreen/ErrorScreen.tsx'

export const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<PokemonListScreen />} />
      <Route path="*" element={<ErrorScreen />} />
      <Route path="/details/:id" element={<PokemonListItemDetailsScreen />} />
      <Route path="favorite" element={<FavoritePokemonScreen />} />
      <Route path="comparison" element={<ComparisonPokemonScreen />} />
    </Routes>
  )
}

