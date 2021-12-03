import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Recruiters } from '../hoc';
import { Link } from 'react-router-dom';

const RecruitersPage: FC = () => {
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
                    <h1 className='header-title text-truncate'>Recruiters</h1>
                  </Col>
                  <Col xs='auto'>
                    <Link to='/admin/recruiters/add'>
                      <Button className='ms-2'>Add recruiter</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <Recruiters />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecruitersPage;
