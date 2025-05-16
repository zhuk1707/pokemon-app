import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'
import { fetchPokemonDetails } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'
import { Loader } from '../../components/Loader/Loader.tsx'
import { Card } from '../../components/Card/Card.tsx'
import { PokemonDetails } from '../../components/PokemonListItemDetails/PokemonDetails.tsx'
import capitalizeWord from '../../utils/capitalizeWord.ts'
import { Button } from '../../components/Button/Button.tsx'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'
import classes from '../../components/PokemonListItemDetails/PokemonDetails.module.css'
import { fetchFavoritePokemons, toggleFavorite } from '../../features/favoritePokemon/favoritePokemonSlice.ts'


export const PokemonListItemDetailsScreen = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useDispatch<AppDispatch>()
  const {
    pokemonDetailsData,
    loading,
    error
  } = useSelector((state: RootState) => state.pokemonDetails)

  const {
    favoriteIds,
    loading: favLoading,
    error: favError
  } = useSelector((state: RootState) => state.favoritePokemons)

  const allPokemonsCount = useSelector((state:RootState) => state.pokemon.count)
  console.log(allPokemonsCount ? allPokemonsCount : 'error')

  useEffect(() => {
    dispatch(fetchPokemonDetails(id as string))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(fetchFavoritePokemons(favoriteIds))
  }, [dispatch, favoriteIds])

  const periodicNumber = pokemonDetailsData && pokemonDetailsData.id

  const navigate = useNavigate()
  return (
    <div>
      <div className="container">
        <div className={classes.navigation}>
          <Button
            title={'Prev'}
            hiddenTittle
            disabled={!id || Number(periodicNumber) - 1 === 0}
            icon={<img src={arrowLeftIcon} alt="" />}
            onClick={() => {
              if (periodicNumber) {
                navigate(`/details/${String(Number(periodicNumber) - 1)}`)
              }
            }}
          />
          <Button
            title={'Next'}
            hiddenTittle
            disabled={!id || Number(periodicNumber) + 1 > 1024}
            icon={<img src={arrowRightIcon} alt="" />}
            onClick={() => {
              if (periodicNumber) {
                navigate(`/details/${String(Number(periodicNumber) + 1)}`)
              }
            }}
          />

        </div>
      </div>

      {(loading || favLoading) ? (
        <Loader />
      ) : (error || favError) ? (
        <Card>
          <h1>Oops!</h1>
          <h2>{error ?? favError}</h2>
        </Card>
      ) : pokemonDetailsData && (
        <PokemonDetails
          id={pokemonDetailsData.id}
          name={capitalizeWord(pokemonDetailsData.name)}
          height={pokemonDetailsData.height}
          weight={pokemonDetailsData.weight}
          sprites={{
            other: {
              'official-artwork': {
                front_default: pokemonDetailsData.sprites.other['official-artwork'].front_default
              }
            }
          }}
          stats={pokemonDetailsData.stats}
          types={pokemonDetailsData.types}
          isFavorite={favoriteIds.includes(pokemonDetailsData.id.toString())}

          toggleFavorite={(periodicNumberStr: string) => dispatch(toggleFavorite(periodicNumberStr))}
        />
      )
      }
    </div>
  )
}