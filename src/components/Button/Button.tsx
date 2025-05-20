import { motion } from 'motion/react'
import classes from './Button.module.css'
import React from 'react'

interface ButtonProps {
  icon?: React.ReactNode
  title?: string
  disabled?: boolean
  active?: boolean
  hiddenTittle?: boolean
  round?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = (
  {
    icon,
    title,
    disabled = false,
    active = false,
    hiddenTittle = false,
    round = false,
    onClick
  }) => {
  const className: string = `${classes.button}
   ${round && classes.button_round}
   ${disabled && classes.button_disabled}
   ${active && classes.button_active}`

  return (
    <motion.button
      type="button"
      disabled={disabled}
      className={className}
      onClick={!disabled ? onClick : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: .99 }}
      transition={{ duration: .1}}
    >
      {icon && <span className={classes.buttonIcon}>{icon}</span>}
      {title &&
        <span className={`${classes.buttonTitle} ${hiddenTittle && classes.buttonTitle__hidden}`}>
          {title}
        </span>}
    </motion.button>
  )
}
