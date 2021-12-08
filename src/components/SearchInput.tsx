import React, { FC, FormEvent } from 'react';
import { InputControlProps } from './types';
import { Form, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '@ailibs/feather-react-ts';

type ValueType = string | null;

const SearchInput: FC<InputControlProps<ValueType>> = (props) => {
  const { className, isInvalid, onInput, value, ...rest } = props;

  const handleOnInput = ($event: FormEvent<HTMLInputElement>) => {
    onInput($event.currentTarget.value ?? null);
  };

  return (
    <div className={classNames({ 'is-invalid': isInvalid })}>
      <InputGroup>
        <InputGroup.Text>
          <Icon name='search' size={16} />
        </InputGroup.Text>
        <Form.Control
          {...rest}
          value={value ?? ''}
          placeholder='Search...'
          onInput={handleOnInput}
          className={classNames('form-control', className)}
          isInvalid={isInvalid}
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
