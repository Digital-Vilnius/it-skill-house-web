import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { useEventForm } from '../hooks';
import { DatePicker, TextEditor } from 'components';
import ToastService from 'core/toast';

interface Props {
  onClose: () => void;
  visible: boolean;
  contractorId: number;
  id?: number;
}

const EventForm: FC<Props> = (props) => {
  const { onClose, visible, id, contractorId } = props;

  const successCallback = () => {
    ToastService.showSuccess('Contractor successfully saved');
    onClose();
  };

  const { control, handleSubmit, save } = useEventForm({ successCallback, id, contractorId });

  return (
    <Modal size='lg' centered show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='title'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Title</Form.Label>
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
          <Col>
            <Controller
              control={control}
              name='date'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Date</Form.Label>
                  <DatePicker
                    isInvalid={!!fieldState.error}
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
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='content'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Content</Form.Label>
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
            <Controller
              control={control}
              name='location'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Location</Form.Label>
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
          <Col>
            <Controller
              control={control}
              name='link'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Link</Form.Label>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={handleSubmit(save)} type='submit'>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventForm;
