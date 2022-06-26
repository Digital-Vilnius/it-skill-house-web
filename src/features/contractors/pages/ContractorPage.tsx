import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContractorDetails } from '../hoc';
import ContractorForm, { ContractorFormProps } from '../hoc/ContractorForm';
import { useModal } from 'core/modal/hooks';
import { EmailForm } from 'features/emails/hoc';
import ContractorDeleteConfirmation, {
  ContractorDeleteConfirmationProps,
} from '../hoc/ContractorDeleteConfirmation';
import { Trash, Mail, Edit } from 'react-feather';
import { useContractor } from '../hooks';

const ContractorPage: FC = () => {
  const params = useParams();
  const { showModal } = useModal();
  const id = Number(params.id);

  const { contractor, isLoading } = useContractor(id);

  if (!contractor || isLoading) return <div>Loading</div>;

  const openContractorEditForm = () => {
    showModal<ContractorFormProps>(
      ContractorForm,
      { title: 'Edit contractor', size: 'xl' },
      { id }
    );
  };

  const openSendEmailForm = () => {
    showModal(EmailForm, { title: 'Send email', size: 'lg' }, { contractors: [contractor] });
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
      <div className='page-header mb-4'>
        <h1 className='page-title'>Contractor</h1>
        <div className='page-actions'>
          <button
            onClick={openContractorDeleteConfirmation}
            className='button button-danger-outline'
          >
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
      <ContractorDetails contractor={contractor} />
    </Container>
  );
};

export default ContractorPage;
