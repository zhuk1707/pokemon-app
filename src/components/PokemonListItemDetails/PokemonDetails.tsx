import classes from './PokemonDetails.module.css'
import { Button } from '../button/Button.tsx'
import React from 'react'
import { PokemonDetailsTypes, PokemonType } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'
// import { useNavigate } from 'react-router'
import { StatsItem, statsItemProps } from '../StatsItem/StatsItem.tsx'


export const PokemonDetails: React.FC<PokemonDetailsTypes> = (
  {
    id,
    name,
    height,
    weight,
    sprites,
    stats,
    types
  }) => {
  return (
    <div className={classes.details}>
      <div className="container">
        <div className={classes.card}>

          <div className={classes.image_n_controls}>
            <div className={classes.image}>
              <img src={sprites.other['official-artwork'].front_default} alt="" />
            </div>
            <div className={classes.controls}>
              {/*todo add toggle favorite */}
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

          <div className={classes.pokeData}>
            <h2 className={classes.h2}>Pokédex data</h2>
            <h1 className={classes.name}>
              {name}
              <span className={classes.periodicNumber}>
                #{id}
              </span>
            </h1>

            <div className={classes.data}>
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


