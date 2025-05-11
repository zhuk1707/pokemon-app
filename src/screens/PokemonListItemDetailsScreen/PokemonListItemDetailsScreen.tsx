import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'
import { fetchPokemonDetails } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'
import { Loader } from '../../components/Loader/Loader.tsx'
import { Card } from '../../components/Card/Card.tsx'
import { PokemonDetails } from '../../components/PokemonListItemDetails/PokemonDetails.tsx'
import capitalizeWord from '../../utils/capitalizeWord.ts'
import { Button } from '../../components/button/Button.tsx'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'
import classes from '../../components/PokemonListItemDetails/PokemonDetails.module.css'


export const PokemonListItemDetailsScreen = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useDispatch<AppDispatch>()
  const { pokemonDetailsData, loading, error } = useSelector((state: RootState) => state.pokemonDetails)

  useEffect(() => {
    dispatch(fetchPokemonDetails(id as string))
  }, [dispatch, id])

  const navigate = useNavigate()
  return (
    <div>
      <div className="container">
        <div className={classes.navigation}>
          <Button
            title={'Prev'}
            hiddenTittle
            disabled={!id || Number(id) - 1 === 0}
            icon={<img src={arrowLeftIcon} alt="" />}
            onClick={() => {
              if (id) {
                navigate(`/details/${String(Number(id) - 1)}`)
              }
            }}
          />
          <Button
            title={'Next'}
            hiddenTittle
            icon={<img src={arrowRightIcon} alt="" />}
            onClick={() => {
              if (id) {
                navigate(`/details/${String(Number(id) + 1)}`)
              }
            }}
          />

        </div>
      </div>


      {loading && <Loader />}

      {error &&
        <Card>
          <h1>Oops!</h1>
          <h2>{error}</h2>
        </Card>}

      {pokemonDetailsData &&
        <PokemonDetails
          id={id as string}
          name={capitalizeWord(pokemonDetailsData.name)}
          height={pokemonDetailsData.height}
          weight={pokemonDetailsData.weight}
          sprites={{
            front_default: pokemonDetailsData.sprites.other['official-artwork'].front_default
          }}
          stats={pokemonDetailsData.stats}
          types={pokemonDetailsData.types}
        />
      }


    </div>
  )
}