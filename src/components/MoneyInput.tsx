import React, { ChangeEvent, FC } from 'react';
import { FormControlProps } from './types';
import { Form, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '@ailibs/feather-react-ts';

type ValueType = string | string[] | number | undefined;

const MoneyInput: FC<FormControlProps<ValueType>> = (props) => {
  const { className, isInvalid, onChange, ...rest } = props;

  const handleOnChange = ($event: ChangeEvent<HTMLInputElement>) => {
    onChange($event.target.value ?? null);
  };

  return (
    <div className={classNames({ 'is-invalid': isInvalid })}>
      <InputGroup>
        <Form.Control
          {...rest}
          type='number'
          onChange={handleOnChange}
          className={classNames('form-control', className)}
          isInvalid={isInvalid}
        />
        <InputGroup.Text>
          <Icon name='calendar' size={16} />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default MoneyInput;
