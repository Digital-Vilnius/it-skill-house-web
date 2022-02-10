import React, { FC } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';

interface Props extends Omit<FormControlProps, 'value'> {
  label: string;
  error?: string;
  value?: string | string[] | number | null;
}

const FormInput: FC<Props> = (props) => {
  const { label, error, value, ...rest } = props;

  return (
    <div className='form-group d-flex'>
      <Form.Label>{label}</Form.Label>
      <div className='flex-grow-1'>
        <Form.Control value={value ?? ''} isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};

export default FormInput;
