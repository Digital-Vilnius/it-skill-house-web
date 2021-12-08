import React, { FC, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Contractors, ContractorForm } from '../hoc';

const ContractorsPage: FC = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);

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
                    <Button onClick={() => setFormVisible(true)} className='ms-2'>
                      Add contractor
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
            <Contractors />
          </Col>
        </Row>
      </Container>
      <ContractorForm onClose={() => setFormVisible(false)} visible={formVisible} />
    </div>
  );
};

export default ContractorsPage;
