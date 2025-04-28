import classes from './ErrorScreen.module.css'
import { Button } from '../../components/button/Button.tsx'

export const ErrorScreen = () => {

  return (
    <section className={classes.errorScreenWrap}>
      <div className="container">
        <div className={classes.errorScreen}>
          <h1 className={classes.header}>Oops!</h1>
          <p className={classes.paragraph}>Sorry, an unexpected error has occurred.</p>
          <Button title="Go Home" />
        </div>
      </div>
    </section>
  )
}