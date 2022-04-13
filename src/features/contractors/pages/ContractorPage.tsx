import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ContractorDetails } from '../hoc';
import ContractorForm, { ContractorFormProps } from '../hoc/ContractorForm';
import { useModal } from 'core/modal/hooks';
import { EmailForm } from 'features/emails/hoc';
import ContractorDeleteConfirmation, {
  ContractorDeleteConfirmationProps,
} from '../hoc/ContractorDeleteConfirmation';

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
    showModal<ContractorFormProps>(ContractorForm, { title: 'Edit contractor', size: 'xl' }, { id });
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
                  <Col xs='auto'>
                    <Button variant='danger' onClick={openContractorDeleteConfirmation} className='ms-2'>
                      Delete contractor
                    </Button>
                    <Button onClick={openContractorEditForm} className='ms-2'>
                      Edit contractor
                    </Button>
                    <Button onClick={openSendEmailForm} className='ms-2'>
                      Send email
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
            <ContractorDetails id={id} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContractorPage;
