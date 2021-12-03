import React, { FC } from 'react';
import { useRecruiters } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { Column } from 'components/DataTable';
import { Recruiter } from '../types';
import { DataTable, Pagination } from 'components';
import { Card, Form, InputGroup } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import { Paging } from 'api/types';
import { setRecruitersPagingAction } from '../actions';

export const columns: Column<Recruiter>[] = [
  { id: 'email', label: 'Email', sortable: true },
  { id: 'phone', label: 'Phone', sortable: true },
  { id: 'firstName', label: 'First name', sortable: true },
  { id: 'lastName', label: 'Last name', sortable: true },
  { id: 'updated', label: 'Updated', className: 'text-center', sortable: true },
  { id: 'created', label: 'Created', className: 'text-center', sortable: true },
];

const Recruiters: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { recruiters, count } = useRecruiters({ filter, paging, sort });

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setRecruitersPagingAction({ paging: newPaging }));
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
      <DataTable columns={columns} data={recruiters} />
      <Card.Footer className='d-flex justify-content-between'>
        <Pagination paging={paging} count={count} onChange={handlePagingChange} />
      </Card.Footer>
    </Card>
  );
};

export default Recruiters;
