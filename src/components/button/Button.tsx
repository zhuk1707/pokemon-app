import classes from './Button.module.css'
import React from 'react'

interface ButtonProps {
  icon?: React.ReactNode
  title?: string
  disabled?: boolean
  active?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (
  {
    icon,
    title,
    disabled = false,
    active = false,
    onClick = () => {
    }
  }) => {
  const className: string = `${classes.button}
   ${disabled && classes.button_disabled}
   ${active && classes.button_active}`

  return (
    <button
      type="button"
      disabled={disabled}
      className={className}
      onClick={!disabled ? onClick : undefined}
    >
      {icon && <span className={classes.button__icon}>{icon}</span>}
      {title && <span className="button__title">{title}</span>}
    </button>
  )
}
