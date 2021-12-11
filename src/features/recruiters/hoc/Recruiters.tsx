import React, { FC } from 'react';
import { useRecruiters } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { Column } from 'components/DataTable';
import { Recruiter } from '../types';
import { DataTable } from 'components';
import { Card, Form, InputGroup } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import { Paging, Sort } from 'api/types';
import { setRecruitersPagingAction, setRecruitersSortAction } from '../actions';
import { RecruiterKeys } from '../constants';

export const columns: Column<Recruiter>[] = [
  {
    id: RecruiterKeys.fullName,
    label: 'Full name',
    Cell: (cell) => `${cell.firstName} ${cell.lastName}`,
    sortable: true,
  },
  { id: RecruiterKeys.email, label: 'Email', sortable: true },
  { id: RecruiterKeys.phone, label: 'Phone', sortable: true },
  { id: RecruiterKeys.updated, label: 'Updated', className: 'text-center', sortable: true },
  { id: RecruiterKeys.created, label: 'Created', className: 'text-center', sortable: true },
];

const Recruiters: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort } = useAppSelector((state) => state.recruiters);
  const { recruiters, count } = useRecruiters({ filter, paging, sort });

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setRecruitersPagingAction({ paging: newPaging }));
  };

  const handleSortChange = (newSort: Sort) => {
    dispatch(setRecruitersSortAction({ sort: newSort }));
  };

  return (
    <Card>
      <Card.Header>
        <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
          <Form.Control type='search' placeholder='Search' />
          <InputGroup.Text>
            <Icon name='search' size={16} />
          </InputGroup.Text>
        </InputGroup>
      </Card.Header>
      <DataTable
        paging={paging}
        count={count}
        onPaging={handlePagingChange}
        onSort={handleSortChange}
        sort={sort}
        columns={columns}
        data={recruiters}
      />
    </Card>
  );
};

export default Recruiters;
