import classes from './PokemonListItem.module.css'
import React from 'react'
import { Button } from '../button/Button.tsx'
import { useNavigate } from 'react-router'

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
    isInComparison,
  }) => {

  const navigate = useNavigate()

  const handlePokemonClick = (pokemonId: string) => {
    navigate(`/details/${pokemonId}`);
  };

  return (
    <div key={periodicNumber}
         className={classes.listItem}
         onClick={() => { handlePokemonClick(periodicNumber.toString())}}
    >
      <div className={classes.desc}>
        <div className={classes.name}>{pokemonName}</div>
        <div className={classes.index}>#{periodicNumber}</div>
      </div>

      <div className={classes.buttons}>
        <Button
          icon={<img src="src/assets/heart.svg" alt="" />}
          active={isFavorite}
          round
        />
        <Button
          icon={<img src="src/assets/scales.svg" alt="" />}
          active={isInComparison}
          round
        />
      </div>
    </div>
  )
}


/*
Should be clickable (we can just log the name of Pokémon
 in the console for now. Later we’ll add navigation to a details page)
*/
