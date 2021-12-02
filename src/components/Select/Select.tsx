import React, { FC, useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import classNames from 'classnames';
import { Option } from './types';

export interface SelectProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  isInvalid?: boolean;
}

const Select: FC<SelectProps> = (props) => {
  const { value, options, onChange, isInvalid } = props;
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const selectedOption = options.find((item) => item.value === value);

  useEffect(() => {
    if (!query) setFilteredOptions(options);
    setFilteredOptions(options.filter((option) => option.label.includes(query)));
  }, [query, options]);

  const renderOption = (option: Option, index: number) => {
    const selected = option.value === value;

    return (
      <Dropdown.Item key={index} className='p-0'>
        <Form.Check className={classNames('it-select-option my-3', { selected })}>
          <Form.Check.Label onClick={() => onChange(option.value)}>{option.label}</Form.Check.Label>
        </Form.Check>
      </Dropdown.Item>
    );
  };

  return (
    <Dropdown className={classNames('it-select-container', { 'is-invalid': isInvalid })}>
      <Dropdown.Toggle as='div' className='it-select-control'>
        <Form.Control
          isInvalid={isInvalid}
          value={selectedOption?.label ?? ''}
          readOnly
          type='text'
          placeholder='Select...'
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-100'>
        <div className='px-3 pt-2'>
          <Form.Control
            value={query}
            onChange={($event) => setQuery($event.target.value)}
            type='text'
            placeholder='Search...'
          />
          <div className='it-select-options mt-2 px-1'>{filteredOptions.map(renderOption)}</div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
