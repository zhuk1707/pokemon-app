import classes from './ErrorScreen.module.css'
import { Button } from '../../components/Button/Button.tsx'
import { useNavigate } from 'react-router'

export const ErrorScreen = () => {
  const navigate = useNavigate()

  return (
    <section className={classes.errorScreenWrap}>
      <div className="container">
        <div className={classes.errorScreen}>
          <h1 className={classes.header}>Oops!</h1>
          <p className={classes.paragraph}>Sorry, an unexpected error has occurred.</p>
          <Button
            title="Go Home"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </section>
  )
}