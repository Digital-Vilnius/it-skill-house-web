import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { Dropzone, Select, TextEditor } from 'components';
import { EmailFormData } from '../types';
import { Contractor } from 'features/contractors/types';
import { mapContractorToOption } from 'features/contractors/map';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  control: Control<EmailFormData>;
  contractors: Contractor[];
}

const EmailForm: FC<Props> = (props) => {
  const { onClose, onSubmit, control, contractors } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='contractorsIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Contractors</Form.Label>
                  <Select
                    multi
                    clearable
                    options={contractors.map(mapContractorToOption)}
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
        <Row className='mb-4'>
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
        <Row>
          <Col>
            <div className='form-group'>
              <Form.Label>Attachments</Form.Label>
              <Dropzone multiple onDrop={console.log} />
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={onSubmit} type='submit'>
          Send
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EmailForm;
