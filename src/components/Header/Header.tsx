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
        <Button title={'Favorites'} icon={<img src="./src/assets/heart.svg" alt="" />} />
        <Button title={'Comparison'} icon={<img src="src/assets/scales.svg" alt="" />}/>
      </div>
    </header>
  )
}
