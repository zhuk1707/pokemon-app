import classes from './ComparisonItem.module.css'
import { StatsItem, statsItemDisplayProps, statsItemProps } from '../StatsItem/StatsItem.tsx'
import { Button } from '../button/Button.tsx'
import trashIcon from '../../assets/trash.svg'
import {
  PokemonDetailsTypes, PokemonType
} from '../../features/pokemonDetails/pokemonDetailsSlice.ts'

export interface ComparisonItemProps extends PokemonDetailsTypes, statsItemDisplayProps {
  comparisonResult: number []
}

export const ComparisonItem = (
  {
    id,
    name,
    height,
    weight,
    sprites,
    stats,
    types,
    display,

  }: ComparisonItemProps) => {
  return (
    <div className={classes.card}>
      <div className={
        display === 'default'
          ? classes.header
          : classes.header_alternative
      }>
        <div className={classes.image}>
          <img src={sprites.other['official-artwork'].front_default} alt="" />
        </div>

        <div className={
          display === 'default'
            ? classes.details
            : classes.details_alternative
        }>
          <h1>
            <span className={classes.name}>{name}</span>
            <span className={classes.periodicNumber}>#{id}</span>
          </h1>
          <div className={classes.detailsHeight}>Height {height}m</div>
          <div className={classes.detailsWeight}>Weight {weight}kg</div>
        </div>

        <div className={classes.pokedataType}>
          <span className={classes.label}>Type</span>
          {types &&
            types.map((el: PokemonType) => {
              return (
                <span
                  className={`${classes.type} ${classes[el.type.name]}`}
                >
                      {el.type.name.toUpperCase()}
                    </span>
              )
            })
          }

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
            title={'Delete From Comparison'}
            hiddenTittle
            icon={<img src={trashIcon} alt="" />}
            active={true}
          />
        </div>

      </div>
    </div>
  )
}