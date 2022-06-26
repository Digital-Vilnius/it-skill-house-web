import React, { FC, ReactNode } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

interface Props {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

const FormControl: FC<Props> = (props) => {
  const { label, error, required, children } = props;

  return (
    <Form.Group className='form-group'>
      <Form.Label className={classNames({ required })}>{label}</Form.Label>
      <div className='flex-grow-1'>
        {children}
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default FormControl;
