import classes from './PokemonListItem.module.css'
import React from 'react'
import { Button } from '../button/Button.tsx'
import { useNavigate } from 'react-router'
import heartIcon from '../../assets/heart.svg'
import scalesIcon from '../../assets/scales.svg'

type PokemonListItemProps = {
  pokemonName?: string;
  periodicNumber?: number | string;
  isFavorite?: boolean;
  isInComparison?: boolean;
};

export const PokemonListItem: React.FC<PokemonListItemProps> = (
  {
    pokemonName,
    periodicNumber = 10,
    isFavorite,
    isInComparison
  }) => {

  const navigate = useNavigate()

  const handlePokemonClick = (pokemonId: string) => {
    navigate(`/details/${pokemonId}`)
  }

  return (
    <div key={periodicNumber}
         className={classes.listItem}
         onClick={() => {
           handlePokemonClick(periodicNumber.toString())
         }}
    >
      <div className={classes.desc}>
        <div className={classes.name}>{pokemonName}</div>
        <div className={classes.index}>#{periodicNumber}</div>
      </div>

      <div className={classes.buttons}>
        <Button
          icon={<img src={heartIcon} alt="" />}
          active={isFavorite}
          round
          onClick={() => {
            console.log('btn clicked')
          }}
        />
        <Button
          icon={<img src={scalesIcon} alt="" />}
          active={isInComparison}
          round
          onClick={() => {
            console.log('btn clicked')
          }}
        />
      </div>
    </div>
  )
}


/*
Should be clickable (we can just log the name of Pokémon
 in the console for now. Later we’ll add navigation to a details page)
*/
