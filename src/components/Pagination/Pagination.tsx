import { Button } from '../button/Button.tsx'
import classes from './Pagination.module.css'


export const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <Button>Prev</Button>
      <Button>1</Button>
      <Button> Next</Button>
    </div>
  )
}