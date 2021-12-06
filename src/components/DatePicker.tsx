import React, { FC } from 'react';
import { FormControlProps } from './types';
import { default as ReactDatePicker } from 'react-datepicker';
import { DateUtils } from 'utils';
import { Form, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '@ailibs/feather-react-ts';

type ValueType = string | null | undefined;

const DatePicker: FC<FormControlProps<ValueType>> = (props) => {
  const { value, onChange, onBlur, className, isInvalid, name } = props;

  const handleOnChange = (date: Date | null) => {
    onChange(DateUtils.formatDate(date));
  };

  const renderInput = () => (
    <InputGroup>
      <Form.Control
        readOnly
        name={name}
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
