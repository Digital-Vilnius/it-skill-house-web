import React, { FC } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ContractorDetails } from '../hoc';
import ContractorForm, { ContractorFormProps } from '../hoc/ContractorForm';
import { useModal } from 'core/modal/hooks';
import { EmailForm } from 'features/emails/hoc';
import ContractorDeleteConfirmation, {
  ContractorDeleteConfirmationProps,
} from '../hoc/ContractorDeleteConfirmation';
import { Filter, UserPlus } from 'react-feather';

const ContractorPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { showModal } = useModal();
  const id = Number(params.id);

  if (!id) {
    navigate('/contractors');
    return null;
  }

  const openContractorEditForm = () => {
    showModal<ContractorFormProps>(ContractorForm, { title: 'Edit contractor', size: 'lg' }, { id });
  };

  const openSendEmailForm = () => {
    showModal(EmailForm, { title: 'Send email', size: 'lg' });
  };

  const openContractorDeleteConfirmation = () => {
    showModal<ContractorDeleteConfirmationProps>(
      ContractorDeleteConfirmation,
      { title: 'Are you sure that you want to delete this contractor?' },
      { id }
    );
  };

  return (
    <Container>
      <div className='page-header'>
        <h1 className='page-title'>Contractor</h1>
        <div className='page-actions'>
          <Button onClick={openContractorDeleteConfirmation} className='button button-secondary'>
            <Filter />
            Delete contractor
          </Button>
          <Button onClick={openContractorEditForm} className='button button-secondary'>
            <UserPlus />
            Edit contractor
          </Button>
          <Button onClick={openSendEmailForm} className='button button-primary'>
            <UserPlus />
            Send email
          </Button>
        </div>
      </div>
      <ContractorDetails id={id} />
    </Container>
  );
};

export default ContractorPage;
