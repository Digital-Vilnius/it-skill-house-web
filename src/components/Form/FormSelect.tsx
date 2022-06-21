import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import Select, { SelectProps } from '../Select';
import classNames from 'classnames';

export type FormSelectProps = SelectProps & {
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

const FormSelect: FC<FormSelectProps> = (props) => {
  const { label, error, required, disabled = false, ...rest } = props;

  return (
    <Form.Group className='form-group'>
      {!!label && <Form.Label className={classNames({ required })}>{label}</Form.Label>}
      <div className='flex-grow-1'>
        <Select disabled={disabled} clearable isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default FormSelect;
