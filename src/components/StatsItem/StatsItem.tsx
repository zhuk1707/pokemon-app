import classes from './StatsItem.module.css'
import React from 'react'
import { Stat } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'

interface statsItemDisplayProps{
  display?: 'default' | 'alternative';
  comparisonFlag?: number
}

export interface statsItemProps extends Stat, statsItemDisplayProps {}

export const StatsItem: React.FC<statsItemProps> = (
  {
    base_stat,
    stat,
    display,
    comparisonFlag = 0
  }) => {


  return (
    <div className={
      `${classes.statsItem} ${
        display === 'default'
          ? classes.statsItem_default
          : classes.statsItem_alternative}
      `
    }>
      <div className={classes.statsLabel}>
        {stat.name.replace('-', ' ').toUpperCase()}
      </div>
      <div className={
        `${classes.statsValue} ${
          comparisonFlag === 1
            ? classes.color_green
            : comparisonFlag === 0
              ? ''
              : classes.color_red
        }`
      }>
        {base_stat}
      </div>
    </div>
  )
}