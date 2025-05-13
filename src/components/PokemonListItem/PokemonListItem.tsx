import classes from './PokemonListItem.module.css'
import React, { useState } from 'react'
import { Button } from '../button/Button'
import { useNavigate } from 'react-router'
import heartIcon from '../../assets/heart.svg'
import scalesIcon from '../../assets/scales.svg'

interface PokemonListItemProps {
  pokemonName?: string;
  periodicNumber?: number | string;
  isFavorite?: boolean;
  toggleFavorite?: (string: string) => void;
  isInComparison?: boolean;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = (
  {
    pokemonName,
    periodicNumber = 0,
    isFavorite = false,
    toggleFavorite,
    isInComparison = false
  }) => {


  const [isElementInComparison, setIsElementInComparison] = useState<boolean>(isInComparison)

  const navigate = useNavigate()

  const handlePokemonClick = (pokemonId: string) => {
    navigate(`/details/${pokemonId}`)
  }

  // const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation()
  //   setIsElementFavorite((prev) => !prev)
  // }

  const handleComparisonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsElementInComparison((prev) => !prev)
  }

  return (
    <div
      key={periodicNumber}
      className={classes.listItem}
      onClick={() => handlePokemonClick(periodicNumber.toString())}
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
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            toggleFavorite?.(periodicNumber.toString())
          }}
        />
        <Button
          icon={<img src={scalesIcon} alt="" />}
          disabled
          active={isElementInComparison}
          round
          onClick={() => handleComparisonClick}
        />
      </div>
    </div>
  )
}
