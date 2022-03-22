import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { DatePickerProps } from './types';
import DatePicker, { ValueType } from './DatePicker';

interface Props extends DatePickerProps<ValueType> {
  label: string;
  error?: string;
}

const FormDatePicker: FC<Props> = (props) => {
  const { label, error, ...rest } = props;

  return (
    <div className='form-group d-flex align-items-center'>
      <Form.Label>{label}</Form.Label>
      <div className='flex-grow-1'>
        <DatePicker isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};

export default FormDatePicker;
