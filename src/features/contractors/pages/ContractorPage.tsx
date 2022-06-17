import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ContractorDetails } from '../hoc';
import ContractorForm, { ContractorFormProps } from '../hoc/ContractorForm';
import { useModal } from 'core/modal/hooks';
import { EmailForm } from 'features/emails/hoc';
import ContractorDeleteConfirmation, {
  ContractorDeleteConfirmationProps,
} from '../hoc/ContractorDeleteConfirmation';
import { Trash, Mail, Edit } from 'react-feather';

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
          <button onClick={openContractorDeleteConfirmation} className='button button-danger-outline'>
            <Trash />
            Delete contractor
          </button>
          <button onClick={openContractorEditForm} className='button button-secondary'>
            <Edit />
            Edit contractor
          </button>
          <button onClick={openSendEmailForm} className='button button-primary'>
            <Mail />
            Send email
          </button>
        </div>
      </div>
      <ContractorDetails id={id} />
    </Container>
  );
};

export default ContractorPage;
