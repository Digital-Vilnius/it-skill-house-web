import React, { FC } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {
  ContractorsSearch,
  ColumnsSelect,
  ContractorsDataTable,
  ContractorsActions,
  ContractorsFilter,
  ContractorForm,
} from '../hoc';
import { useModal } from 'core/modal/hooks';

const ContractorsPage: FC = () => {
  const { showModal } = useModal();

  const openContractorAddForm = () => {
    showModal(ContractorForm, { title: 'Add contractor', size: 'xl' });
  };

  const openContractorsFilter = () => {
    showModal(ContractorsFilter, { title: 'Filter' });
  };

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
                    <Button onClick={openContractorAddForm} className='ms-2'>
                      Add contractor
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
            <Card>
              <Card.Header>
                <ContractorsSearch />
                <ColumnsSelect />
                <Button onClick={openContractorsFilter} className='ms-2' size='sm'>
                  Filter
                </Button>
              </Card.Header>
              <ContractorsDataTable />
            </Card>
          </Col>
        </Row>
      </Container>
      <ContractorsActions />
    </div>
  );
};

export default ContractorsPage;
