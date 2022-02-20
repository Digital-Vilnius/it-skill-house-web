import React, { FC, MouseEvent } from 'react';
import Icon from '@ailibs/feather-react-ts';
import { InputGroup } from 'react-bootstrap';
import classNames from 'classnames';

interface SelectValueProps {
  clearable?: boolean;
  isInvalid?: boolean;
  onClick: () => void;
  onClear: () => void;
  hasValue: boolean;
}

const SelectValue: FC<SelectValueProps> = (props) => {
  const { clearable, children, onClick, onClear, hasValue, isInvalid } = props;

  const handleOnClear = ($event: MouseEvent<HTMLDivElement>) => {
    $event.stopPropagation();
    onClear();
  };

  return (
    <InputGroup onClick={onClick}>
      <div className={classNames('select-value-container form-control', { 'is-invalid': isInvalid })}>
        <div className='select-value'>{children}</div>
        {clearable && hasValue && (
          <div onClick={handleOnClear} className='select-value-clear'>
            <Icon name='x' size={15} />
          </div>
        )}
      </div>
      <InputGroup.Text className={classNames({ 'is-invalid': isInvalid })}>
        <Icon name='chevron-down' size={15} />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default SelectValue;
