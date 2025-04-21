import classes from './StatsItem.module.css'
import React from 'react'

type StatItem = {
  statLabel: string;
  value: number;
};

export const StatsItem: React.FC<StatItem> = (
  {
    statLabel,
    value
  }) => {
  return (
    <div className={classes.stats__item}>
      <div className={classes.stats__labels}>
        {statLabel}
      </div>
      <div className={classes.stats__value}>
        {value}
      </div>
    </div>
  )
}