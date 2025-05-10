import { Button } from '../button/Button.tsx'
import classes from './Pagination.module.css'
import getPages from '../../utils/getPages.ts'

interface PaginationProps {
  pageCount: number
  currentPage: number,
  onPageChange: (page: number) => void;
}

export const Pagination = (
  { pageCount, currentPage, onPageChange }: PaginationProps) => {

  if (pageCount) return (
    <section className={classes.paginationOuter}>
      <div className="container">
        <div className={classes.pagination}>
          <Button
            title={'Prev'}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!(currentPage > 1)}
          />

          {getPages(pageCount, currentPage).map((page) => (
            <Button
              key={page}
              title={page.toString()}
              onClick={() => onPageChange(page)}
              active={currentPage === page}
            />
          ))}

          <Button
            title={'Next'}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!(currentPage < pageCount)}
          />

        </div>

      </div>
    </section>

  )
}