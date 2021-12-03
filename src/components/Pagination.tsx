import { FC } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
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
    <>
      <BootstrapPagination className='card-pagination pagination-tabs'>
        <BootstrapPagination.Item
          className='ps-0 pe-4 border-end'
          disabled={!canGoBack}
          onClick={() => gotToPage(currentPage - 1)}
        >
          <Icon size={16} className='me-1' name='arrow-left' />
          <span>Prev</span>
        </BootstrapPagination.Item>
      </BootstrapPagination>
      <BootstrapPagination className='card-pagination pagination-tabs'>
        {range(pagesCount).map((page) => (
          <BootstrapPagination.Item
            key={page}
            disabled={page === currentPage}
            active={page === currentPage}
            onClick={() => gotToPage(page)}
          >
            {page + 1}
          </BootstrapPagination.Item>
        ))}
      </BootstrapPagination>
      <BootstrapPagination className='card-pagination pagination-tabs'>
        <BootstrapPagination.Item
          className='ps-4 pe-0 border-start'
          disabled={!canGoNext}
          onClick={() => gotToPage(currentPage + 1)}
        >
          <span>Next</span>
          <Icon size={16} className='ms-1' name='arrow-right' />
        </BootstrapPagination.Item>
      </BootstrapPagination>
    </>
  );
};

export default Pagination;
