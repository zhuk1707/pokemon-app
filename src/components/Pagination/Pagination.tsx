import { Button } from '../button/Button.tsx'
import classes from './Pagination.module.css'
import getPages from '../../utils/getPages.ts'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'


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
            hiddenTittle
            icon ={<img src={arrowLeftIcon} alt="" />}
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
            hiddenTittle
            icon ={<img src={arrowRightIcon} alt="" />}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!(currentPage < pageCount)}
          />

        </div>

      </div>
    </section>

  )
}