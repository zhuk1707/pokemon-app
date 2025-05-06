import { Button } from '../button/Button.tsx'
import classes from './Header.module.css'
import favoriteIcon from '../../assets/heart.svg'
import comparisonIcon from '../../assets/scales.svg'
import { Link, useLocation, useNavigate } from 'react-router'

export const Header = ({ subtitle }: { subtitle?: string }) => {
  const navigate = useNavigate()
  const location = useLocation();

  return (
    <header className={classes.headerOuter}>
      <div className="container">

        <div className={classes.header}>
          <h1 className={classes.headerLogo}>
            <Link
              className={classes.logoLink}
              to="/">Pokémon</Link>
            <span className={classes.subtitle}>{subtitle && subtitle}</span>
          </h1>


          <div className={classes.buttons}>
            <Button
              title={'Favorites'}
              icon={<img src={favoriteIcon} alt="" />}
              onClick={() => navigate('/favorite')}
              active={location.pathname === '/favorite'}
            />
            <Button
              title={'Comparison'}
              icon={<img src={comparisonIcon} alt="" />}
              onClick={() => navigate('/comparison')}
              active={location.pathname === '/comparison'}

            />
          </div>
        </div>
      </div>
    </header>
  )
}
