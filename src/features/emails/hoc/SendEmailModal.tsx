import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { Select, TextEditor } from 'components';
import ToastService from 'core/toast';
import { useEmailForm } from '../hooks';
import { Recipient } from '../types';
import { mapRecipientToOption } from '../map';

interface Props {
  visible: boolean;
  recipients: Recipient[];
  onClose: () => void;
}

const SendEmailModal: FC<Props> = (props) => {
  const { visible, onClose, recipients } = props;

  const successCallback = () => {
    ToastService.showSuccess('Email is successfully send');
    onClose();
  };

  const { control, handleSubmit, save } = useEmailForm({
    successCallback,
    recipients,
  });

  return (
    <Modal size='lg' centered show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>Send email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='recipientsIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Recipients</Form.Label>
                  <Select
                    multi
                    clearable
                    options={recipients.map(mapRecipientToOption)}
                    searchable
                    name={field.name}
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='subject'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='body'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Body</Form.Label>
                  <TextEditor
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={handleSubmit(save)} type='submit'>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendEmailModal;
