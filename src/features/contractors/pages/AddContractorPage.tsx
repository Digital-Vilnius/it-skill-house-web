import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContractorForm from '../hoc/ContractorForm';

const AddContractorPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10} xl={8}>
            <div className='header my-5'>
              <div className='header-body'>
                <Row className='align-items-center'>
                  <Col>
                    <h6 className='header-pretitle'>New contractor</h6>
                    <h1 className='header-title'>Add a new contractor</h1>
                  </Col>
                </Row>
              </div>
            </div>
            <ContractorForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddContractorPage;
