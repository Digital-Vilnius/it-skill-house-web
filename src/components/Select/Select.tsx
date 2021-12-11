import React, { FC, useRef, useState } from 'react';
import { SelectOption, SelectProps, ValueType } from './types';
import { useOnClickOutside } from 'core/hooks';
import SelectValue from './SelectValue';
import Option from './Option';
import SelectOptions from './SelectOptions';
import xor from 'lodash/xor';
import ClearableBadge from '../ClearableBadge';

const Select: FC<SelectProps> = (props) => {
  const { value, clearable, creatable, searchable, options, multi, onCreate } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref, callback: () => setVisible(false) });

  const handleOnCreate = (query: string) => {
    if (!onCreate) throw new Error('onCreate property is missing');
    return onCreate(query);
  };

  const handleOnClear = () => {
    if (props.multi) props.onChange([]);
    else props.onChange(null);
  };

  const handleOnClick = (option: SelectOption) => {
    if (!props.multi) {
      props.onChange(option.value);
      setVisible(false);
    } else {
      const currentValue = props.value ?? [];
      const newValue = xor(currentValue, [option.value]);
      props.onChange(newValue);
    }
  };

  const hasValue = () => {
    if (props.multi) return props.value.length > 0;
    else return !!value;
  };

  const isSelected = (optionValue: ValueType) => {
    if (!props.multi) return props.value === optionValue;
    else return !!props.value?.find((item) => item === optionValue);
  };

  const getOption = (optionValue: ValueType) => {
    return options.find((option) => option.value === optionValue);
  };

  const renderMultiSelectOption = (optionValue: ValueType) => {
    const option = getOption(optionValue) ?? { value: optionValue, label: 'Unknown' };

    return (
      <ClearableBadge key={option.value} onClear={() => handleOnClick(option)} label={option.label} />
    );
  };

  return (
    <div className='position-relative' ref={ref}>
      <SelectValue
        hasValue={hasValue()}
        onClick={() => setVisible((focus) => !focus)}
        onClear={handleOnClear}
        clearable={clearable}
      >
        {!props.multi && props.value ? getOption(props.value)?.label : null}
        {props.multi && props.value.map(renderMultiSelectOption)}
      </SelectValue>
      <SelectOptions
        visible={visible}
        creatable={creatable}
        onCreate={handleOnCreate}
        searchable={searchable}
        options={options}
        renderOption={(option: SelectOption) => (
          <Option
            multi={multi}
            key={option.value}
            selected={isSelected(option.value)}
            onClick={() => handleOnClick(option)}
            {...option}
          />
        )}
      />
    </div>
  );
};

export default Select;
