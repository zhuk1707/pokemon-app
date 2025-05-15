import classes from './Loader.module.css'
import pokeBallIcon from '../../assets/poke-ball.svg'

export const Loader = () => {
  return (
    <section className={classes.loaderOuter}>
      <div className="container">
        <div className={classes.loaderWrapper}>
          <div className={classes.loader}>
            <img src={pokeBallIcon} alt="" />
          </div>
        </div>
      </div>
    </section>

  )
}


