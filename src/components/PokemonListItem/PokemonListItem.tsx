import classes from './PokemonListItem.module.css'
import React from 'react'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router'
import heartIcon from '../../assets/heart.svg'
import scalesIcon from '../../assets/scales.svg'

interface PokemonListItemProps {
  pokemonName?: string;
  periodicNumber?: number | string;
  isFavorite?: boolean;
  toggleFavorite?: (string: string) => void;
  isInComparison?: boolean;
  toggleCompared?: (string: string) => void;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = (
  {
    pokemonName,
    periodicNumber = 0,
    isFavorite = false,
    toggleFavorite,
    isInComparison = false,
    toggleCompared,
  }) => {

  const navigate = useNavigate()

  const handlePokemonClick = (pokemonId: string) => {
    navigate(`/details/${pokemonId}`)
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
          active={isInComparison}
          round
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            toggleCompared?.(periodicNumber.toString())
          }}
        />
      </div>
    </div>
  )
}
