import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { SwitchControlProps } from './types';
import SwitchInput from './SwitchInput';

interface Props extends SwitchControlProps {
  label: string;
  error?: string;
}

const FormSwitch: FC<Props> = (props) => {
  const { label, error, value, ...rest } = props;

  return (
    <div className='form-group d-flex align-items-center'>
      <div>
        <Form.Label>{label}</Form.Label>
        <Form.Text className='small text-muted'>
          This contact will be shown to others publicly, so choose it carefully.
        </Form.Text>
      </div>
      <div className='flex-grow-1 d-flex justify-content-end'>
        <SwitchInput {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};

export default FormSwitch;
