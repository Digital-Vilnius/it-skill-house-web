import React, { FC } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormInput, FormSelect, FormTextEditor } from 'components';
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
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSelect
                  multi
                  clearable
                  label='Contractors'
                  options={contractors.map(mapContractorToOption)}
                  searchable
                  error={error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='subject'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Subject' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='body'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormTextEditor required label='Body' {...rest} error={error?.message} />
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
          Send
        </button>
      </Modal.Footer>
    </>
  );
};

export default EmailForm;
