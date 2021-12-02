import React, { FC } from 'react';
import { Badge, Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Contractors } from '../hoc';
import { Link } from 'react-router-dom';

const ContractorsPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10} xl={8}>
            <div className='header'>
              <div className='header-body'>
                <Row className='align-items-center'>
                  <Col>
                    <h6 className='header-pretitle'>Overview</h6>
                    <h1 className='header-title text-truncate'>Contractors</h1>
                  </Col>
                  <Col xs='auto'>
                    <Link to='/admin/contractors/add'>
                      <Button className='ms-2'>Add contact</Button>
                    </Link>
                  </Col>
                </Row>
                <Row className='align-items-center'>
                  <Col>
                    <Nav variant='tabs' className='header-tabs nav-overflow'>
                      <Nav.Item>
                        <Nav.Link className='text-nowrap' role='button' active>
                          All contacts{' '}
                          <Badge bg='secondary-soft' className='rounded-pill'>
                            823
                          </Badge>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='text-nowrap' role='button'>
                          Your contacts{' '}
                          <Badge bg='secondary-soft' className='rounded-pill'>
                            231
                          </Badge>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='text-nowrap' role='button'>
                          Deleted{' '}
                          <Badge bg='secondary-soft' className='rounded-pill'>
                            22
                          </Badge>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
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
