import React, { FC, useEffect, useState } from 'react';
import Icon from '@ailibs/feather-react-ts';
import { Dropdown, Form } from 'react-bootstrap';
import xor from 'lodash/xor';
import classNames from 'classnames';
import { Option } from './types';

interface Props {
  id: string;
  options: Option[];
  value: (string | number)[];
  onChange: (value: (string | number)[]) => void;
  onOptionAdd: (value: string) => void;
}

export const getOption = (value: string | number, options: Option[]): Option => {
  const option = options.find((item) => item.value === value);
  if (option) return option;
  return { value, label: 'Unknown' };
};

export const getIsSelected = (value: string | number, selectedValues: (string | number)[]): boolean => {
  return !!selectedValues.find((id) => id === value);
};

const MultiSelect: FC<Props> = (props) => {
  const { value, options, onChange, id, onOptionAdd } = props;
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  useEffect(() => {
    if (!query) setFilteredOptions(options);
    setFilteredOptions(options.filter((option) => option.label.includes(query)));
  }, [query, options]);

  const clearOption = (optionValue: string | number) => {
    onChange(value.filter((val) => val !== optionValue));
  };

  const selectOption = (optionValue: string | number) => {
    onChange(xor(value, [optionValue]));
  };

  const renderSelectedOption = (optionValue: string | number, index: number) => {
    const option = getOption(optionValue, options);

    return (
      <div key={index} className='it-select-selected-option'>
        <span className='it-select-selected-option-label'>{option.label}</span>
        <span onClick={() => clearOption(option.value)} className='it-select-selected-option-clear'>
          <Icon name='x' size={12} />
        </span>
      </div>
    );
  };

  const renderOption = (option: Option, index: number) => {
    const selected = getIsSelected(option.value, value);

    return (
      <Form.Check key={index} className={classNames('it-select-option my-3', { selected })} type='checkbox'>
        <Form.Check.Input
          id={`${id}-${index}`}
          onChange={() => selectOption(option.value)}
          checked={selected}
          type='checkbox'
          className='me-3'
        />
        <Form.Check.Label htmlFor={`${id}-${index}`}>{option.label}</Form.Check.Label>
      </Form.Check>
    );
  };

  const isOptionCreateAvailable = () => {
    return !options.find((option) => option.label === query) && !!query;
  };

  return (
    <Dropdown className='it-select-container'>
      <Dropdown.Toggle as='div' className='it-select-control'>
        <div className='form-control'>{value.map(renderSelectedOption)}</div>
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-100'>
        <div className='px-3 pt-2'>
          <Form.Control value={query} onChange={($event) => setQuery($event.target.value)} type='text' placeholder='Search...' />
          <div className='it-select-options mt-2 px-1'>
            {filteredOptions.map(renderOption)}
            {isOptionCreateAvailable() && <span onClick={() => onOptionAdd(query)}>{`Add "${query}"`}</span>}
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MultiSelect;
