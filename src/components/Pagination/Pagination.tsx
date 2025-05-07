import { Button } from '../button/Button.tsx'
import classes from './Pagination.module.css'


interface PaginationProps {
  currentPage?: number,
  pageCount?: number
}

export const Pagination = ({ pageCount = 0, currentPage = 0 }: PaginationProps) => {

  if (pageCount) return (

    <section className={classes.paginationOuter}>
      <div className="container">
        <div className={classes.pagination}>

          <Button title={'Prev'} disabled={!(currentPage > 1)} />

          <Button title={currentPage.toString()} active />

          <Button title={'Next'} disabled={!(currentPage < pageCount)} />


        </div>
      </div>
    </section>
  )
}