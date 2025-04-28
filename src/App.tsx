import { FavoritePokemonScreen } from './screens/FavoritePokemonScreen.tsx'
import { ComparisonPokemonScreen } from './screens/ComparisonPokemonScreen.tsx'
// import { PokemonListScreen } from './screens/PokemonListScreen.tsx'
// import { PokemonListItemDetailsScreen } from './screens/PokemonListItemDetailsScreen.tsx'

export const App = () => {
  return (<>
      <FavoritePokemonScreen/>
      <ComparisonPokemonScreen/>

      {/*<PokemonListScreen/>*/}
      {/*<PokemonListItemDetailsScreen />*/}
  </>
  )
}

