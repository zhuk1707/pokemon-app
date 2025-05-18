import classes from './ComparisonItems.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'
import { Loader } from '../Loader/Loader.tsx'
import { Card } from '../Card/Card.tsx'
import { fetchComparedPokemons, toggleCompared } from '../../features/comparedPokemonsSlice/comparedPokemonsSlice.ts'
import { ComparisonItem, ComparisonItemProps } from '../ComparisonItem/ComparisonItem.tsx'
import { toggleFavorite } from '../../features/favoritePokemon/favoritePokemonSlice.ts'


export const ComparisonItems = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    comparedIds, comparedPokemonsDetailsData, loading, error
  } = useSelector((state: RootState) => state.comparedPokemons)

  const { favoriteIds } = useSelector((state: RootState) => state.favoritePokemons)


  useEffect(() => {
    if (comparedIds.length) dispatch(fetchComparedPokemons(comparedIds))
    if (favoriteIds.length) dispatch(fetchComparedPokemons(comparedIds))
  }, [dispatch, comparedIds, favoriteIds])

  return (
    <section className={classes.comparisonWrapper}>
      <div className="container">

        {loading
          ? (<Loader />)
          : error
            ? (<Card><h1>Oops!</h1><h2>{error}</h2></Card>)
            : comparedIds.length
              ? (<div className={classes.comparison}>
                  {comparedPokemonsDetailsData?.map((element: ComparisonItemProps, index) => {
                    return (
                      <ComparisonItem
                        id={element.id}
                        name={element.name}
                        height={element.height}
                        weight={element.weight}
                        sprites={element.sprites}
                        stats={element.stats}
                        types={element.types}
                        display={index % 2 === 0 ? 'alternative' : 'default'}
                        isFavorite={favoriteIds.includes(element.id.toString())}
                        toggleFavorite={
                          (periodicNumberStr: string) => dispatch(toggleFavorite(periodicNumberStr))
                        }

                        isInComparison={comparedIds.includes(element.id.toString())}
                        toggleCompared={
                          (periodicNumberStr: string) => dispatch(toggleCompared(periodicNumberStr))

                        }
                      />
                    )
                  })}
                </div>
              )
              : (<Card>
                  <h1>No Pokémons in comparison</h1>
                </Card>
              )
        }

      </div>
    </section>
  )
}