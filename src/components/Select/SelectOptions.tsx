import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SelectOption, ValueType } from './types';
import { StringUtils } from 'utils';
import classNames from 'classnames';

interface SelectOptionsProps {
  visible: boolean;
  searchable?: boolean;
  creatable?: boolean;
  options: SelectOption[];
  renderOption: (option: SelectOption) => React.ReactNode;
  onCreate?: (name: string) => Promise<ValueType>;
  onCreated?: (value: ValueType) => void;
}

const SelectOptions: FC<SelectOptionsProps> = (props) => {
  const { options, renderOption, searchable, onCreate, creatable, visible, onCreated } = props;
  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>(options);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (!query) setFilteredOptions(options);
    setFilteredOptions(options.filter((option) => StringUtils.compare(option.label, query)));
  }, [query, options]);

  const handleQueryChange = ($event: ChangeEvent<HTMLInputElement>) => {
    const { value } = $event.target;
    setQuery(value);
  };

  const getMatch = () => {
    return options.find((option) => StringUtils.equal(option.label, query));
  };

  const handleOnCreateClick = async () => {
    if (!onCreate) throw new Error('onCreate property is missing');
    const createdOptionValue = await onCreate(query);
    if (onCreated) onCreated(createdOptionValue);
    setQuery('');
  };

  return (
    <div className={classNames('select-options', { visible })}>
      {searchable && (
        <div className='select-options-search'>
          <Form.Control value={query} onChange={handleQueryChange} placeholder='Search...' />
        </div>
      )}
      <div className='select-options-list'>{filteredOptions.map(renderOption)}</div>
      {filteredOptions.length === 0 && <span className='select-options-no-data'>No options found</span>}
      {creatable && !!query && !getMatch() && (
        <div className='select-options-create'>
          <span>{`Create "${query}"`}</span>
          <Button onClick={handleOnCreateClick} size='sm'>
            Create
          </Button>
        </div>
      )}
    </div>
  );
};

export default SelectOptions;
