import React, { ChangeEvent, FC } from 'react';
import { InputControlProps } from './types';
import { Form, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';

type ValueType = number | null;

const MoneyInput: FC<InputControlProps<ValueType>> = (props) => {
  const { className, isInvalid, onInput, value, ...rest } = props;

  const handleOnChange = ($event: ChangeEvent<HTMLInputElement>) => {
    if (!onInput) return;
    onInput(Number($event.target.value) ?? null);
  };

  return (
    <div className={classNames({ 'is-invalid': isInvalid })}>
      <InputGroup>
        <Form.Control
          {...rest}
          value={value ?? ''}
          type='number'
          onInput={handleOnChange}
          className={classNames('form-control', className)}
          isInvalid={isInvalid}
        />
        <InputGroup.Text>€</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default MoneyInput;
