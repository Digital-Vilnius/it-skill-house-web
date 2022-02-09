import React, { FC } from 'react';
import { Alert, Button, CloseButton, Col, Row, Form } from 'react-bootstrap';

interface Props {
  selectedCount: number;
  onClose: () => void;
  onSendEmail: () => void;
  onDelete: () => void;
}

const ContractorsActions: FC<Props> = (props) => {
  const { selectedCount, onClose, onSendEmail, onDelete } = props;

  if (selectedCount === 0) return null;

  return (
    <Alert variant='dark' className='list-alert alert-dismissible border'>
      <Row className='align-items-center'>
        <Col>
          <Form.Check type='checkbox' label={`${selectedCount} selected`} checked disabled />
        </Col>
        <Col xs='auto' className='me-n3'>
          <Button onClick={onSendEmail} variant='white-20' size='sm'>
            Send email
          </Button>
          <Button onClick={onDelete} variant='white-20' size='sm' className='ms-1'>
            Delete
          </Button>
        </Col>
      </Row>
      <CloseButton onClick={onClose} />
    </Alert>
  );
};

export default ContractorsActions;