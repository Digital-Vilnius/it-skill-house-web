import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { TextEditor } from 'components';
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={onSubmit} type='submit'>
          Save
        </Button>
      </Modal.Footer>
    </>
  );
};

export default NoteForm;
