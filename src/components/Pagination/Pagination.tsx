import { Button } from '../button/Button.tsx'
import classes from './Pagination.module.css'


export const Pagination = () => {
  return (
    <section className={classes.paginationOuter}>
      <div className="container">
        <div className={classes.pagination}>

          <Button title={'Prev'} disabled />
          <Button title={'1'} active />
          <Button title={' Next'} />

        </div>
      </div>
    </section>
  )
}