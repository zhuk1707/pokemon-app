import classes from './Button.module.css'


export function Button({...props }) {
  return (
    <button type="button" {...props} className={classes.Button}>
      {props.children}
    </button>
  )
}