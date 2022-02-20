import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import Select, { SelectProps } from '../Select';

export type FormSelectProps = SelectProps & {
  label: string;
  error?: string;
};

const FormSelect: FC<FormSelectProps> = (props) => {
  const { label, error, ...rest } = props;

  return (
    <div className='form-group d-flex'>
      <Form.Label>{label}</Form.Label>
      <div className='flex-grow-1'>
        <Select isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};

export default FormSelect;
