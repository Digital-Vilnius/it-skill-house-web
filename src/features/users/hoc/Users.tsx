import React, { FC, useState } from 'react';
import { useUsers } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { DataTable, Pagination } from 'components';
import { Column } from 'components/DataTable';
import { User } from '../types';
import { Paging, Sort } from 'api/types';
import { setUsersPagingAction, setUsersSortAction } from '../actions';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import UserForm from './UserForm';

export const columns: Column<User>[] = [
  { id: 'id', label: 'Id', sortable: true },
  { id: 'firstName', label: 'First name', sortable: true },
  { id: 'lastName', label: 'Last name', sortable: true },
  { id: 'email', label: 'Email', sortable: true },
  { id: 'phone', label: 'Phone', sortable: true },
  { id: 'lastLoginDate', label: 'Last login', className: 'text-center', sortable: true },
  { id: 'created', label: 'Created', className: 'text-center', sortable: true },
];

const Users: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort } = useAppSelector((state) => state.users);
  const { users, count } = useUsers({ filter, paging, sort });
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setUsersPagingAction({ paging: newPaging }));
  };

  const handleSortChange = (newSort: Sort) => {
    dispatch(setUsersSortAction({ sort: newSort }));
  };

  return (
    <>
      <Row className='justify-content-center'>
        <Col>
          <div className='header mt-md-5'>
            <div className='header-body'>
              <Row className='align-items-center'>
                <Col>
                  <h6 className='header-pretitle'>Overview</h6>
                  <h1 className='header-title text-truncate'>Users</h1>
                </Col>
                <Col xs='auto'>
                  <Button onClick={() => setFormVisible(true)} className='ms-2'>
                    Add user
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
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
        </Col>
      </Row>
      <UserForm onClose={() => setFormVisible(false)} visible={formVisible} />
    </>
  );
};

export default Users;
