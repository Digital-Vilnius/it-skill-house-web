import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormTextEditor, TextEditor } from 'components';
import { NoteFormData } from '../types';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  control: Control<NoteFormData>;
}

const NoteForm: FC<Props> = (props) => {
  const { onClose, control, onSubmit } = props;

  return (
    <>
      <Modal.Body>
        <Row>
          <Col>
            <Controller
              control={control}
              name='content'
              render={({ field, fieldState }) => (
                <FormTextEditor
                  label='Content'
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Close
        </button>
        <button onClick={onSubmit} type='submit' className='button button-primary'>
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default NoteForm;
