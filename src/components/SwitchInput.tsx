import React, { ChangeEvent, FC } from 'react';
import { SwitchControlProps } from './types';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

const SwitchInput: FC<SwitchControlProps> = (props) => {
  const { className, onChange, value, label, ...rest } = props;

  const handleOnChange = ($event: ChangeEvent<HTMLInputElement>) => {
    onChange($event.target.checked);
  };

  return (
    <div className={classNames('form-control-container d-flex align-items-center', className)}>
      <Form.Switch {...rest} checked={value ?? false} onChange={handleOnChange} />
      {!!label && <small className='text-muted'>{label}</small>}
    </div>
  );
};

export default SwitchInput;
