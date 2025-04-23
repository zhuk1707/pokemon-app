import { PokemonListItem } from '../PokemonListItem/PokemonListItem.tsx'
import classes from './PokemonList.module.css'

interface Pokemon {
  pokemonName: string;
  periodicNumber: number;
  isFavorite: boolean;
  isInComparison: boolean;
}

interface PokemonListProps {
  list: Pokemon[]
  variant?: 'default' | 'favorite'
}


export const PokemonList = ({ list, variant = 'default'}: PokemonListProps) => {
  const filteredList = variant === 'favorite'
    ? list .filter((item) => {return item.isFavorite && item})
    : list

  return (
    <div className={classes.listOuter}>
      <div className="container">
        <div className={classes.list}>
          {filteredList
            .map((pokemon) => (
              <PokemonListItem
                key={pokemon.periodicNumber}
                pokemonName={pokemon.pokemonName}
                periodicNumber={pokemon.periodicNumber}
                isFavorite={pokemon.isFavorite}
                isInComparison={pokemon.isInComparison}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
