import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Users } from '../hoc';

const UsersPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Users />
      </Container>
    </div>
  );
};

export default UsersPage;
