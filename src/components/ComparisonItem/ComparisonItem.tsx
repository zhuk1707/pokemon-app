import classes from './ComparisonItem.module.css'
import { StatsItem } from '../StatsItem/StatsItem.tsx'
import { Button } from '../button/Button.tsx'

type StatItem = {
  statLabel: string;
  value: number;
};

interface ComparisonItemProps {
  imageUrl: string,
  name: string,
  height: string,
  weight: string,
  stats: StatItem[],
  comparisonResult: number[]
  display?: 'default' | 'alternative'
}

export const ComparisonItem = (
  {
    imageUrl,
    name,
    height,
    weight,
    stats,
    comparisonResult,
    display = 'default'
  }: ComparisonItemProps) => {
  return (
    <div className={classes.card}>
      <div className={
        display === 'default'
          ? classes.header
          : classes.header_alternative
      }>
        <div className={classes.image}>
          <img src={imageUrl} alt="" />
        </div>

        <div className={
          display === 'default'
            ? classes.details
            : classes.details_alternative
        }>
          <h1 className={classes.name}> {name} </h1>
          <div className={classes.detailsHeight}>Height: {height}m</div>
          <div className={classes.detailsWeight}>Weight: {weight}kg</div>
        </div>
      </div>


      <div className={classes.stats}>
        {stats.map((stat: StatItem, index) => {
          return (
            <StatsItem
              key={index}
              statLabel={stat.statLabel}
              value={stat.value}
              display={display === 'default'
                ? 'default'
                : 'alternative'}
              comparisonFlag={comparisonResult[index]}
            />
          )
        })}

        <div className={classes.buttonWrapper}>
          <Button
            title={'Delete From Comparison'}
            active={true}
          />
        </div>

      </div>
    </div>
  )
}