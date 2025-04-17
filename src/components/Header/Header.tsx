import { Button } from '../button/Button.tsx'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className="logo">
        <h1>
          Pokémon List
        </h1>
      </div>

      <div className={classes.buttons}>
        <Button>Favorites</Button>
        <Button>Comparison</Button>
      </div>
    </header>
  )
}
