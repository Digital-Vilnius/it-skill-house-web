import React, { FC } from 'react';
import { SelectControlProps } from './types';
import { default as ReactDatePicker } from 'react-datepicker';
import { DateUtils } from 'utils';
import { Form, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '@ailibs/feather-react-ts';

type ValueType = string | null;

const DatePicker: FC<SelectControlProps<ValueType>> = (props) => {
  const { value, onChange, onBlur, className, isInvalid, name } = props;

  const handleOnChange = (date: Date | null) => {
    if (!onChange) return;
    onChange(DateUtils.formatDate(date));
  };

  const renderInput = () => (
    <InputGroup>
      <Form.Control
        name={name}
        onChange={console.log}
        className={classNames('form-control', className)}
        value={value ?? ''}
        isInvalid={isInvalid}
      />
      <InputGroup.Text>
        <Icon name='calendar' size={16} />
      </InputGroup.Text>
    </InputGroup>
  );

  return (
    <div className={classNames({ 'is-invalid': isInvalid })}>
      <ReactDatePicker
        dateFormat='yyyy-MM-dd'
        name={name}
        onBlur={onBlur}
        selected={DateUtils.parseDate(value)}
        onChange={handleOnChange}
        customInput={renderInput()}
      />
    </div>
  );
};

export default DatePicker;
