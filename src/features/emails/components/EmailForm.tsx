import React, { FC } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormControl, FormInput, FormTextEditor } from 'components';
import { EmailFormData } from '../types';
import { Contractor } from 'features/contractors/types';
import { mapContractorToOption } from 'features/contractors/map';
import Select from 'react-select';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  control: Control<EmailFormData>;
  contractors: Contractor[];
  disabled?: boolean;
}

const EmailForm: FC<Props> = (props) => {
  const { onClose, onSubmit, control, contractors, disabled } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-2'>
          <Col>
            <FormControl required label='Contractors'>
              <Select
                isMulti
                isDisabled
                value={contractors.map(mapContractorToOption)}
                options={contractors.map(mapContractorToOption)}
              />
            </FormControl>
          </Col>
        </Row>
        <Row className='mb-2'>
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
        <button disabled={disabled} onClick={onSubmit} className='button button-primary'>
          Send
        </button>
      </Modal.Footer>
    </>
  );
};

export default EmailForm;
