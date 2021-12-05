import React, { FC } from 'react';
import { useUsers } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { DataTable, Pagination } from 'components';
import { Column } from 'components/DataTable';
import { User } from '../types';
import { Paging, Sort } from 'api/types';
import { setUsersPagingAction, setUsersSortAction } from '../actions';
import { Card, Form, InputGroup } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';

export const columns: Column<User>[] = [
  { id: 'email', label: 'Email', sortable: true },
  { id: 'phone', label: 'Phone', sortable: true },
  { id: 'firstName', label: 'First name', sortable: true },
  { id: 'lastName', label: 'Last name', sortable: true },
  { id: 'lastLoginDate', label: 'Last login', className: 'text-center', sortable: true },
  { id: 'updated', label: 'Updated', className: 'text-center', sortable: true },
  { id: 'created', label: 'Created', className: 'text-center', sortable: true },
];

const Users: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort } = useAppSelector((state) => state.users);
  const { users, count } = useUsers({ filter, paging, sort });

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setUsersPagingAction({ paging: newPaging }));
  };

  const handleSortChange = (newSort: Sort) => {
    dispatch(setUsersSortAction({ sort: newSort }));
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
      <DataTable onSort={handleSortChange} sort={sort} columns={columns} data={users} />
      <Card.Footer className='d-flex justify-content-between'>
        <Pagination paging={paging} count={count} onChange={handlePagingChange} />
      </Card.Footer>
    </Card>
  );
};

export default Users;
