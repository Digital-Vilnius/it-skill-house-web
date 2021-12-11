import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Contractors } from '../hoc';

const ContractorsPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <Contractors />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContractorsPage;
