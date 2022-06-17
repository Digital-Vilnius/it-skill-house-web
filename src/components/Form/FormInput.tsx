import React, { FC } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import classNames from 'classnames';

interface Props extends Omit<FormControlProps, 'value'> {
  label: string;
  error?: string;
  required?: boolean;
  value?: string | string[] | number | null;
}

const FormInput: FC<Props> = (props) => {
  const { label, error, value, required, ...rest } = props;

  return (
    <Form.Group className='form-group'>
      <Form.Label className={classNames({ required })}>{label}</Form.Label>
      <div className='flex-grow-1'>
        <Form.Control value={value ?? ''} isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default FormInput;
