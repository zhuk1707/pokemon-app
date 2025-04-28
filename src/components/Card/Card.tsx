import classes from './Card.module.css'
import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={'container'}>
      <div className={classes.card}>
        {children}
      </div>
    </div>
  )
}