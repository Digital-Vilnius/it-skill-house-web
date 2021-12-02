import { FC } from 'react';
import { Card, Pagination as BootstrapPagination } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';

interface Props {
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  pages: number[];
  currentPage: number;
  goToPage: (page: number) => void;
}

const Pagination: FC<Props> = (props) => {
  const { canPreviousPage, previousPage, canNextPage, nextPage, pages, currentPage, goToPage } =
    props;

  return (
    <Card.Footer className='d-flex justify-content-between'>
      <BootstrapPagination className='card-BootstrapPagination BootstrapPagination-tabs'>
        <BootstrapPagination.Item
          className='ps-0 pe-4 border-end'
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          <Icon size={16} className='me-1' name='arrow-left' />
          <span>Prev</span>
        </BootstrapPagination.Item>
      </BootstrapPagination>
      <BootstrapPagination className='card-BootstrapPagination BootstrapPagination-tabs'>
        {pages.map((page, index) => (
          <BootstrapPagination.Item
            key={index}
            active={page === currentPage}
            onClick={() => goToPage(page)}
          >
            {page + 1}
          </BootstrapPagination.Item>
        ))}
      </BootstrapPagination>
      <BootstrapPagination className='card-BootstrapPagination BootstrapPagination-tabs'>
        <BootstrapPagination.Item
          className='ps-4 pe-0 border-start'
          disabled={!canNextPage}
          onClick={nextPage}
        >
          <span>Next</span>
          <Icon size={16} className='ms-1' name='arrow-right' />
        </BootstrapPagination.Item>
      </BootstrapPagination>
    </Card.Footer>
  );
};

export default Pagination;
