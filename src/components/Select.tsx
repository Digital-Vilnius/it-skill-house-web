import React, { FC } from 'react';
import SelectAlias, { ControlProps, MenuProps, OptionProps, Props, components } from 'react-select';
import classNames from 'classnames';

const Option: FC<OptionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <components.Option className='dropdown-item' {...rest}>
      {children}
    </components.Option>
  );
};

const Menu: FC<MenuProps> = (props) => <components.Menu className='dropdown-menu' {...props} />;

const Control: FC<ControlProps> = (props) => {
  const { isMulti, selectProps, ...rest } = props;
  const selectClassName = selectProps.className;

  const isValid = selectClassName && selectClassName.includes('is-valid');
  const isInvalid = selectClassName && selectClassName.includes('is-invalid');

  const classes = classNames(isMulti ? 'form-control' : 'form-select', isValid && 'is-valid', isInvalid && 'is-invalid');

  return <components.Control className={classes} {...props} {...rest} />;
};

const Select: FC<Props> = (props) => {
  return <SelectAlias classNamePrefix='select' components={{ Control, Menu, Option }} styles={{}} {...props} />;
};

export default Select;
