import classes from './PokemonDetails.module.css'
import heartIcon from '../../assets/heart.svg'
import scalesIcon from '../../assets/scales.svg'
import { Button } from '../Button/Button.tsx'
import React from 'react'
import { PokemonDetailsTypes, PokemonType } from '../../features/pokemonDetails/pokemonDetailsSlice.ts'
import { StatsItem, statsItemProps } from '../StatsItem/StatsItem.tsx'
import { motion } from 'motion/react'


export const PokemonDetails: React.FC<PokemonDetailsTypes> = (
  {
    id,
    name,
    height,
    weight,
    sprites,
    stats,
    types,
    isFavorite,
    toggleFavorite,
    isInComparison,
    toggleCompared
  }) => {
  return (
    <div className={classes.details}>
      <div className="container">
        <motion.div
          className={classes.card}
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .2 }}
        >
          <div className={classes.image_n_controls}>
            <div className={classes.image}>
              <img src={sprites.other['official-artwork'].front_default} alt="" />
            </div>
            <div className={classes.controls}>
              <Button
                title={'Favorite'}
                icon={<img src={heartIcon} alt="" />}
                active={isFavorite}
                onClick={() => {
                  toggleFavorite?.(id.toString())
                }}
              />
              <Button
                title={'Compare'}
                icon={<img src={scalesIcon} alt="" />}
                active={isInComparison}
                onClick={() => {
                  toggleCompared?.(id.toString())
                }}
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
        </motion.div>
      </div>
    </div>
  )
}


