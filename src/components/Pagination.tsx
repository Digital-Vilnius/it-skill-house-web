import { FC } from 'react';
import { Paging } from 'api/types';
import range from 'lodash/range';

interface Props {
  count: number;
  paging: Paging;
  onChange: (paging: Paging) => void;
}

const Pagination: FC<Props> = (props) => {
  const { count, paging, onChange } = props;

  const currentPage = paging.skip / paging.take;
  const pagesCount = Math.ceil(count / paging.take);
  const canGoBack = currentPage > 0;
  const canGoNext = currentPage < pagesCount - 1;

  const gotToPage = (page: number) => {
    onChange({ ...paging, skip: page * paging.take });
  };

  return (
    <div className='pagination'>
      <span className='pagination-meta'>
        Showing {paging.skip} to {paging.take} of {count} entries
      </span>
      <div className='pagination-controls'>
        <button
          disabled={!canGoBack}
          onClick={() => gotToPage(currentPage - 1)}
          className='pagination-item'
        >
          <span>Prev</span>
        </button>
        {range(pagesCount).map((page) => (
          <button
            key={page}
            className='pagination-item'
            disabled={page === currentPage}
            onClick={() => gotToPage(page)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className='pagination-item'
          disabled={!canGoNext}
          onClick={() => gotToPage(currentPage + 1)}
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
