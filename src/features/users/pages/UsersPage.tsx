import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Users } from '../hoc';
import { Link } from 'react-router-dom';

const UsersPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
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
                    <Link to='/admin/users/add'>
                      <Button className='ms-2'>Add user</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <Users />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UsersPage;
