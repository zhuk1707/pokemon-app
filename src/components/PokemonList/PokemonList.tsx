import classes from './PokemonList.module.css'
import { Pokemon } from '../../features/pokemonList/pokemonSlice.ts'
import { PokemonListItem } from '../PokemonListItem/PokemonListItem.tsx'
import capitalizeWord from '../../utils/capitalizeWord.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store.ts'
import { toggleFavorite } from '../../features/favoritePokemon/favoritePokemonSlice.ts'
import { toggleCompared } from '../../features/comparedPokemonsSlice/comparedPokemonsSlice.ts'
import { motion } from 'motion/react'
import getPeriodicNumberFromUrl from '../../utils/getPeriodicNumberFromUrl.ts'


interface PokemonListProps {
  list?: Pokemon[]
}

export const PokemonList = ({ list = [] }: PokemonListProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { favoriteIds } = useSelector((state: RootState) => state.favoritePokemons)
  const { comparedIds } = useSelector((state: RootState) => state.comparedPokemons)

  return (
    <div className={classes.listOuter}>
      <div className="container">
        <motion.div
          className={classes.list}
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .2 }}
        >

          {list.length >= 1 && list
            .map((pokemon) => {
              const periodicNumber = getPeriodicNumberFromUrl(pokemon.url)

              return (
                <PokemonListItem
                  key={periodicNumber}
                  pokemonName={capitalizeWord(pokemon.name)}
                  periodicNumber={periodicNumber}
                  isFavorite={favoriteIds.includes(periodicNumber.toString())}
                  toggleFavorite={
                    (periodicNumberStr: string) => dispatch(toggleFavorite(periodicNumberStr))
                  }
                  isInComparison={comparedIds.includes(periodicNumber.toString())}
                  toggleCompared={
                    (periodicNumberStr: string) => dispatch(toggleCompared(periodicNumberStr))
                  }
                />
              )
            })}
        </motion.div>
      </div>
    </div>
  )
}
