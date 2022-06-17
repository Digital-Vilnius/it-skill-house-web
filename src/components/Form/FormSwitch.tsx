import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import SwitchInput from './SwitchInput';
import { SwitchControlProps } from './types';

interface Props extends SwitchControlProps {
  label?: string;
  help?: string;
  error?: string;
}

const FormSwitch: FC<Props> = (props) => {
  const { label, error, help, ...rest } = props;

  return (
    <Form.Group className='form-group'>
      {label && (
        <div>
          <Form.Label>{label}</Form.Label>
          <Form.Text className='small text-muted'>{help}</Form.Text>
        </div>
      )}
      <div className='flex-grow-1 d-flex justify-content-end'>
        <SwitchInput {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default FormSwitch;
