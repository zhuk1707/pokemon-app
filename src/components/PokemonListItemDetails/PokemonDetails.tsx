import classes from './PokemonDetails.module.css'
import { Button } from '../button/Button.tsx'
import React from 'react'
import { PokemonDetailsTypes } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'
// import { useNavigate } from 'react-router'
import { StatsItem, statsItemProps } from '../StatsItem/StatsItem.tsx'


export const PokemonDetails: React.FC<PokemonDetailsTypes> = (
  {
    id,
    name,
    height,
    weight,
    stats,
    sprites
  }) => {
  return (
    <div className={classes.details}>
      <div className="container">
        <div className={classes.card}>

          <div className={classes.image_n_controls}>
            <div className={classes.image}>
              <img src={sprites.front_default} alt="" />
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
            <h1 className={classes.name}>
              {name}
              <span className={classes.periodicNumber}>
                #{id}
              </span>
            </h1>
            <div className={classes.pokedataHeight}>
              <span className={classes.label}>Height</span>
              <span className={classes.number}>{(Number(height) / 10).toString()}</span>
              <span className={classes.measure}>m</span>
            </div>
            <div className={classes.pokedataWeight}>
              <span className={classes.label}>Weight</span>
              <span className={classes.number}>{(Number(weight) / 10).toString()}</span>
              <span className={classes.measure}>kg</span>
            </div>
          </div>


          <div className={`${classes.stats}`}>
            <h2 className={classes.h2}>Stats</h2>
            {stats.map((el: statsItemProps, index) => (
              <StatsItem
                key={index}
                base_stat={el.base_stat}
                stat={{
                  name: el.stat.name
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


