import classes from './ComparisonItems.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { useEffect } from 'react'
import { Loader } from '../Loader/Loader.tsx'
import { Card } from '../Card/Card.tsx'
import { fetchComparedPokemons, toggleCompared } from '../../features/comparedPokemonsSlice/comparedPokemonsSlice.ts'
import { ComparisonItem, ComparisonItemProps } from '../ComparisonItem/ComparisonItem.tsx'
import { toggleFavorite } from '../../features/favoritePokemon/favoritePokemonSlice.ts'
import { AnimatePresence } from 'motion/react'


export const ComparisonItems = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    comparedIds, comparedPokemonsDetailsData, loading, error
  } = useSelector((state: RootState) => state.comparedPokemons)

  let comparisonResult: number[] = []

  if (comparedPokemonsDetailsData?.length === 2) {
    comparisonResult = comparedPokemonsDetailsData[0].stats.map((el, index) => {
      const opponentStat = comparedPokemonsDetailsData[1].stats[index].base_stat

      return el.base_stat > opponentStat ? 1
        : el.base_stat === opponentStat ? 0
          : -1
    })
  }


  const { favoriteIds } = useSelector((state: RootState) => state.favoritePokemons)


  useEffect(() => {
    if (comparedIds.length) dispatch(fetchComparedPokemons(comparedIds))
    if (favoriteIds.length) dispatch(fetchComparedPokemons(comparedIds))
  }, [dispatch, comparedIds, favoriteIds])


  return (
    <section className={classes.comparisonWrapper}>

      <AnimatePresence>
        {loading
          ? (<Loader />)
          : error
            ? (<Card><h1>Oops!</h1>{error ? <h2>{error}</h2> : null}</Card>)
            : comparedIds.length

              ? (<div className="container">
                  <div className={classes.comparison}>
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
                          comparisonResult={index % 2 === 0
                            ? comparisonResult
                            : comparisonResult.map(el => el * -1)}
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
                </div>
              )
              : (<Card>
                  <h1>No Pokémons in comparison</h1>
                </Card>
              )

        }
      </AnimatePresence>
    </section>
  )
}