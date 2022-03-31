import './pagination.scss';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import RightArrow from '../../Assets/Images/right-arrow.svg';

function Pagination(props) {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('pagination-container p-0', { [className]: className }, 'd-pagination')}>
      <li
        className={classnames('page-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <img src={RightArrow} alt='right arrow' className='left-arrow' />
        <p className='m-0'>Prev</p>
      </li>

      {/* Render page pills */}
      <div className='pills'>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className='pagination-item dots ' key={index}>
                &#8230;
              </li>
            );
          }
          return (
            <li
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
              key={index}
            >
              {pageNumber}
            </li>
          );
        })}
      </div>

      <li
        className={classnames('page-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <p className='m-0'>Next</p>
        <img src={RightArrow} alt='right arrow' className='right-arrow' />
      </li>
    </ul>
  );
}

export default Pagination;
