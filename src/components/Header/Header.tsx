import { Button } from '../button/Button.tsx'
import classes from './Header.module.css'

export const Header = ({ subtitle }: { subtitle?: string }) => {
  return (
    <header className={classes.headerOuter}>
      <div className="container">

        <div className={classes.header}>
          <div className="logo">
            <h1>
              <span>Pokémon</span>
              <span className={classes.subtitle}>{subtitle && subtitle}</span>
            </h1>
          </div>

          <div className={classes.buttons}>
            <Button title={'Favorites'} icon={<img src="./src/assets/heart.svg" alt="" />} />
            <Button title={'Comparison'} icon={<img src="src/assets/scales.svg" alt="" />} />
          </div>
        </div>
      </div>
    </header>
  )
}
