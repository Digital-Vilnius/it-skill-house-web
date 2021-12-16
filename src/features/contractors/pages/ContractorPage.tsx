import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Contractor } from '../hoc';
import { useNavigate, useParams } from 'react-router-dom';

const ContractorPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  if (!id) {
    navigate('/contractors');
    return <></>;
  }

  return (
    <div className='main-content'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col md={8} xs={12}>
            <div className='header mt-md-5'>
              <div className='header-body'>
                <Row className='align-items-center'>
                  <Col>
                    <h6 className='header-pretitle'>Overview</h6>
                    <h1 className='header-title text-truncate'>Contractor</h1>
                  </Col>
                </Row>
              </div>
            </div>
            <Contractor id={Number(id)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContractorPage;
