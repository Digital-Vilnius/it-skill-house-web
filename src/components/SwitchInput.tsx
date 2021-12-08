import React, { ChangeEvent, FC } from 'react';
import { SwitchControlProps } from './types';
import { Form } from 'react-bootstrap';

type ValueType = boolean | null;

const SwitchInput: FC<SwitchControlProps<ValueType>> = (props) => {
  const { className, onChange, value, ...rest } = props;

  const handleOnChange = ($event: ChangeEvent<HTMLInputElement>) => {
    onChange($event.target.checked ?? null);
  };

  return <Form.Switch {...rest} checked={value ?? false} onChange={handleOnChange} />;
};

export default SwitchInput;
