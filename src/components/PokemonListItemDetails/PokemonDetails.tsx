import classes from './PokemonDetails.module.css'
import React from 'react'
import { Button } from '../button/Button.tsx'
import { StatsItem } from '../StatsItem/StatsItem.tsx'

type StatItem = {
  statLabel: string;
  value: number;
};

interface PokemonDetailsProps {
  imageURL: string,
  name: string,
  height: number,
  weight: number,
  stats: StatItem[]
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = (
  {
    imageURL,
    name,
    height,
    weight,
    stats
  }) => {
  return (
    <div className={classes.details}>
      <div className="container">
        <div className={classes.card}>

          <div className={classes.image_n_controls}>
            <div className={classes.image}>
              <img src={imageURL} alt="" />
            </div>
            <div className={classes.controls}>
              <Button
                title={'Favorite'}
                icon={<img src="/src/assets/heart.svg" alt="" />}
              />
              <Button
                title={'Compare'}
                icon={<img src="/src/assets/scales.svg" alt="" />}
              />
            </div>
          </div>

          <div className={classes.pokedata}>
            <h2 className={classes.h2}>Pokédex data</h2>
            <h1 className="pokedata__name">{name}</h1>
            <div className="pokedata__height">Height: {height}m</div>
            <div className="pokedata__weight">Weight: {weight}kg</div>
          </div>

          <div className={`${classes.stats}`}>
            <h2 className={classes.h2}>Stats</h2>
            {stats.map((el: StatItem, index) => (
              <StatsItem
                statLabel={el.statLabel}
                value={el.value}
                key={index}
              />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}


