import { Button } from '../button/Button.tsx'
import classes from './Pagination.module.css'


export const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <Button title={'Prev'} disabled />
      <Button title={'1'} active />
      <Button title={' Next'} />
    </div>
  )
}