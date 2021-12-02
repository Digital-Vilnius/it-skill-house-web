import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserForm from '../hoc/UserForm';

const AddUserPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10} xl={8}>
            <div className='header mt-md-5'>
              <div className='header-body'>
                <Row className='align-items-center'>
                  <Col>
                    <h6 className='header-pretitle'>New user</h6>
                    <h1 className='header-title'>Add a new user</h1>
                  </Col>
                </Row>
              </div>
            </div>
            <UserForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddUserPage;
