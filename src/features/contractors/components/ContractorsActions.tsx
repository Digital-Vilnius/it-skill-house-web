import React, { FC } from 'react';
import { CloseButton, Form, Container } from 'react-bootstrap';

interface Props {
  selectedCount: number;
  onClose: () => void;
  onSendEmail: () => void;
}

const ContractorsActions: FC<Props> = (props) => {
  const { selectedCount, onClose, onSendEmail } = props;

  if (selectedCount === 0) return null;

  return (
    <div className='table-actions'>
      <Container className='h-100' fluid>
        <div className='table-actions-content'>
          <Form.Check type='checkbox' label={`${selectedCount} selected`} checked disabled />
          <div className='d-flex align-items-center'>
            <button onClick={onSendEmail} className='button button-primary'>
              Send email
            </button>
            <CloseButton onClick={onClose} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContractorsActions;
