import { motion } from 'motion/react'
import classes from './Card.module.css'
import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={'container'}>
      <motion.div
        className={classes.card}
        initial={{ opacity: 0, scale: 0, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: .3 }}
      >
        {children}
      </motion.div>
    </div>
  )
}