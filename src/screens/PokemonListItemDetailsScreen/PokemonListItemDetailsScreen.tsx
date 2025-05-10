// import { PokemonDetails } from '../../components/PokemonListItemDetails/PokemonDetails.tsx'
import { useParams } from 'react-router'
// import ImagePlaceholder from '../../assets/placeholder.png'
// import { Card } from '../../components/Card/Card.tsx'





export const PokemonListItemDetailsScreen = () => {
  const { id } = useParams<{ id: string }>()


  return (
    <div>
      <div>id = {id}</div>

      {/*+++++++++++++*/}
      {/*<PokemonDetails*/}
      {/*  imageURL={ImagePlaceholder}*/}
      {/*  name={'currentPokemon.pokemonName'}*/}
      {/*  periodicNumber={Number(id)}*/}
      {/*  height={10}*/}
      {/*  weight={1}*/}
      {/*  stats={mockStats}*/}
      {/*/>*/}

      {/*<Card>*/}
      {/*  <h1>Oops!</h1>*/}
      {/*  <h2>There are no Pokémon with this ID.</h2>*/}
      {/*</Card>*/}

    </div>
  )
}