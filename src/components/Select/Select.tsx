import React, { FC, useRef, useState } from 'react';
import { SelectOption, SelectProps, ValueType } from './types';
import { useOnClickOutside } from 'core/hooks';
import SelectValue from './SelectValue';
import Option from './Option';
import SelectOptions from './SelectOptions';
import xor from 'lodash/xor';
import ClearableBadge from '../ClearableBadge';
import classNames from 'classnames';

const Select: FC<SelectProps> = (props) => {
  const {
    clearable,
    creatable,
    searchable,
    options = [],
    multi,
    onCreate,
    isInvalid,
    disabledOptionsValues = [],
  } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref, callback: () => setVisible(false) });

  const handleOnClear = () => {
    if (props.multi) props.onChange([]);
    else props.onChange(null);
  };

  const handleOnClick = (clickedValue: ValueType) => {
    if (!props.multi) {
      props.onChange(clickedValue);
      setVisible(false);
    } else {
      const currentValue = props.value ?? [];
      const newValue = xor(currentValue, [clickedValue]);
      if (props.maxSelected && newValue.length > props.maxSelected) return;
      props.onChange(newValue);
    }
  };

  const hasValue = () => {
    if (props.multi) return (props.value ?? []).length > 0;
    else return !!props.value;
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
      <ClearableBadge
        key={option.value}
        onClear={() => handleOnClick(option.value)}
        label={option.label}
      />
    );
  };

  return (
    <div className={classNames('position-relative', { 'is-invalid': isInvalid })} ref={ref}>
      <SelectValue
        isInvalid={isInvalid}
        hasValue={hasValue()}
        onClick={() => setVisible((focus) => !focus)}
        onClear={handleOnClear}
        clearable={clearable}
      >
        {!props.multi && props.value ? getOption(props.value)?.label : null}
        {props.multi && (props.value ?? []).map(renderMultiSelectOption)}
      </SelectValue>
      <SelectOptions
        visible={visible}
        creatable={creatable}
        onCreate={onCreate}
        searchable={searchable}
        options={options.filter((option) => !disabledOptionsValues.includes(option.value))}
        onCreated={handleOnClick}
        renderOption={(option: SelectOption) => (
          <Option
            multi={multi}
            key={option.value}
            selected={isSelected(option.value)}
            onClick={() => handleOnClick(option.value)}
            {...option}
          />
        )}
      />
    </div>
  );
};

export default Select;
