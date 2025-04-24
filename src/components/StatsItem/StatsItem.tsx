import classes from './StatsItem.module.css'
import React from 'react'

interface StatItemProps {
  statLabel: string;
  value: number;
  display?: 'default' | 'alternative';
  comparisonFlag?: number
}

export const StatsItem: React.FC<StatItemProps> = (
  {
    statLabel,
    value,
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
        {statLabel.replace('.', '. ').toUpperCase()}
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
        {value}
      </div>
    </div>
  )
}