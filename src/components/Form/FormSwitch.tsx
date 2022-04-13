import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import SwitchInput from './SwitchInput';
import { SwitchControlProps } from './types';
import classNames from 'classnames';

interface Props extends SwitchControlProps {
  label?: string;
  help?: string;
  error?: string;
  className?: string;
  switchClassName?: string;
}

const FormSwitch: FC<Props> = (props) => {
  const { label, error, help, className, switchClassName, ...rest } = props;

  return (
    <div className={classNames('form-group d-flex align-items-center', className)}>
      {label && (
        <div>
          <Form.Label>{label}</Form.Label>
          <Form.Text className='small text-muted'>{help}</Form.Text>
        </div>
      )}
      <div className={classNames('flex-grow-1 d-flex', switchClassName)}>
        <SwitchInput {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};

export default FormSwitch;
