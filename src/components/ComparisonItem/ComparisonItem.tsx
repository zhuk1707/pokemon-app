import classes from './ComparisonItem.module.css'
import { StatsItem, statsItemDisplayProps, statsItemProps } from '../StatsItem/StatsItem.tsx'
import { Button } from '../Button/Button.tsx'
import trashIcon from '../../assets/trash.svg'
import heartIcon from '../../assets/heart.svg'

import { PokemonDetailsTypes, PokemonType } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'
import capitalizeWord from '../../utils/capitalizeWord.ts'
import { FC } from 'react'

export interface ComparisonItemProps extends PokemonDetailsTypes, statsItemDisplayProps {
  comparisonResult?: number []
}

export const ComparisonItem: FC<ComparisonItemProps> = (
  {
    id,
    name,
    height,
    weight,
    sprites,
    stats,
    types,
    display,
    isFavorite = false,
    toggleFavorite,
    isInComparison = false,
    toggleCompared
  }) => {
  return (
    <div className={classes.card}>

      <div className={display === 'default'
        ? classes.header : classes.header_alternative
      }>
        <div className={classes.image}>
          <img src={sprites.other['official-artwork'].front_default} alt="" />
        </div>

        <div className={display === 'default'
          ? classes.details : classes.details_alternative
        }>
          <div className={classes.nameAndPeriodicNumber}>
            <span className={classes.name}>{capitalizeWord(name)}</span>
            <span className={classes.periodicNumber}>#{id}</span>
          </div>

          <div className={classes.pokeDataType}>
            <div className={classes.label}>Type</div>

            <div className={classes.allTypes}>
              {types && types.map((el: PokemonType) => {
                return (
                  <span className={`${classes.type} ${classes[el.type.name]}`}>
                  {el.type.name.toUpperCase()}
                </span>)
              })}
            </div>
          </div>

          <div className={classes.detailsHeight}>
            <div className={classes.label}>Height</div>
            <div>
              <span className={classes.number}>
                {(Number(height) / 10).toString()}
              </span>
              <span className={classes.measure}>m</span>
            </div>
          </div>
          <div className={classes.detailsWeight}>
            <div className={classes.label}>Weight</div>
            <div>
              <span className={classes.number}>
                {(Number(weight) / 10).toString()}
              </span>
              <span className={classes.measure}>kg</span></div>
          </div>

        </div>
      </div>


      <div className={classes.stats}>
        {stats.map((stat: statsItemProps, index) => {
          return (
            <StatsItem
              key={index}
              base_stat={stat.base_stat}
              stat={{
                name: stat.stat.name
              }}
              display={display === 'default'
                ? 'default'
                : 'alternative'}

            />
          )
        })}

        <div className={classes.buttonWrapper}>
          <Button
            title={'Favorite'}
            icon={<img src={heartIcon} alt="" />}
            active={isFavorite}
            onClick={() => toggleFavorite?.(id.toString())}
          />

          <Button
            title={'Delete'}
            icon={<img src={trashIcon} alt="" />}
            active={isInComparison}
            onClick={() => toggleCompared?.(id.toString())}
          />
        </div>

      </div>
    </div>
  )
}