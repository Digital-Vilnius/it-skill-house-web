import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Contractors } from '../hoc';
import { Link } from 'react-router-dom';

const ContractorsPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <div className='header mt-md-5'>
              <div className='header-body'>
                <Row className='align-items-center'>
                  <Col>
                    <h6 className='header-pretitle'>Overview</h6>
                    <h1 className='header-title text-truncate'>Contractors</h1>
                  </Col>
                  <Col xs='auto'>
                    <Link to='/admin/contractors/add'>
                      <Button className='ms-2'>Add contractor</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <Contractors />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContractorsPage;
