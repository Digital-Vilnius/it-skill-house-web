import React, { FC } from 'react';
import { Button, Container } from 'react-bootstrap';
import {
  ContractorsSearch,
  ColumnsSelect,
  ContractorsDataTable,
  ContractorsActions,
  ContractorsFilter,
  ContractorForm,
} from '../hoc';
import { useModal } from 'core/modal/hooks';
import { Filter, UserPlus } from 'react-feather';

const ContractorsPage: FC = () => {
  const { showModal } = useModal();

  const openContractorAddForm = () => {
    showModal(ContractorForm, { title: 'Add contractor', size: 'xl' });
  };

  const openContractorsFilter = () => {
    showModal(ContractorsFilter, { title: 'Filter', size: 'lg' });
  };

  return (
    <Container fluid>
      <div className='page-header'>
        <h1 className='page-title'>Contractors</h1>
        <div className='page-actions'>
          <ColumnsSelect />
          <Button onClick={openContractorsFilter} className='button button-secondary'>
            <Filter />
            Filter
          </Button>
          <Button onClick={openContractorAddForm} className='button button-primary'>
            <UserPlus />
            Add contractor
          </Button>
        </div>
      </div>
      {/* <ContractorsSearch />*/}
      <ContractorsDataTable />
      <ContractorsActions />
    </Container>
  );
};

export default ContractorsPage;
