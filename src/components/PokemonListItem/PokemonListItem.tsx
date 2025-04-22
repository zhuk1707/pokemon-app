import classes from './PokemonListItem.module.css'
import React from 'react'
import { Button } from '../button/Button.tsx'

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
        <Button
          icon={<img src="src/assets/heart.svg" alt="" />}
          active={isFavorite}
        />
        <Button
          icon={<img src="src/assets/scales.svg" alt="" />}
          active={isInComparison}
        />
      </div>
    </div>
  )
}


/*
Should be clickable (we can just log the name of Pokémon
 in the console for now. Later we’ll add navigation to a details page)
*/
