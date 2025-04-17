import classes from './PokemonListItem.module.css'
import React from 'react'

type PokemonListItemProps = {
  pokemonName: string;
  periodicNumber: number | string;
  isFavorite: boolean;
  isInComparison: boolean;
};

export const PokemonListItem: React.FC<PokemonListItemProps> = (
  {
    pokemonName,
    periodicNumber,
    isFavorite,
    isInComparison
  }) => {
  return (
    <div key={periodicNumber}
         className={classes.listItem}
         onClick={() => {
           console.log('Clicked on a list item')
         }}
    >
      <div className={classes.desc}>
        <div className={classes.name}>{pokemonName}</div>
        <div className={classes.index}>#{periodicNumber}</div>
      </div>

      <div className={classes.buttons}>
        <button className={
          !isFavorite
            ? classes.button
            : `${classes.button} ${classes.favorite}`
        }>
          <img src="src/assets/heart.svg" alt="" />
        </button>
        <button className={
          !isInComparison
            ? classes.button
            : `${classes.button} ${classes.favorite}`
        }>
          <img src="src/assets/scales.svg" alt="" />
        </button>
      </div>
    </div>
  )
}


/*
Should be clickable (we can just log the name of Pokémon
 in the console for now. Later we’ll add navigation to a details page)
*/
