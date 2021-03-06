import React, { FC, MouseEvent } from 'react';
import { DatePickerProps } from './types';
import { default as ReactDatePicker } from 'react-datepicker';
import { DateUtils } from 'utils';
import { Form, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '@ailibs/feather-react-ts';

export type ValueType = string | null;

const DatePicker: FC<DatePickerProps<ValueType>> = (props) => {
  const { value, onChange, onBlur, className, isInvalid, name, showYearPicker } = props;

  const handleOnChange = (date: Date | null) => {
    if (!onChange) return;
    onChange(DateUtils.formatDate(date));
  };

  const handleOnClear = ($event: MouseEvent<HTMLDivElement>) => {
    $event.stopPropagation();
    onChange?.(null);
  };

  const renderInput = () => (
    <InputGroup>
      <Form.Control
        name={name}
        autoComplete='none'
        className={classNames('form-control', className)}
        value={value ?? ''}
        isInvalid={isInvalid}
      />
      {value && (
        <div onClick={handleOnClear} className='date-picker-clear'>
          <Icon name='x' size={15} />
        </div>
      )}
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
        showYearPicker={showYearPicker}
        selected={value ? DateUtils.parseDate(value) : undefined}
        onChange={handleOnChange}
        customInput={renderInput()}
      />
    </div>
  );
};

export default DatePicker;
