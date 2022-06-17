import React, { FC } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormDatePicker, FormInput, FormTextEditor } from 'components';
import { EventFormData } from '../types';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  control: Control<EventFormData>;
}

const EventForm: FC<Props> = (props) => {
  const { onClose, control, onSubmit } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='title'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='Title' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='date'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormDatePicker label='Date' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='content'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormTextEditor required label='Content' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Close
        </button>
        <button onClick={onSubmit} className='button button-primary'>
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default EventForm;
