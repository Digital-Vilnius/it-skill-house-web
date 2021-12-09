import React, { FC } from 'react';
import { Select } from 'components';
import { useTechnologies } from '../hooks';
import { mapTechnologyOption } from '../map';
import { SelectProps } from 'components/Select/Select';

type Props = Omit<SelectProps, 'options' | 'id'>;

const TechnologiesSelect: FC<Props> = (props) => {
  const { value, onChange, ...rest } = props;
  const { technologies } = useTechnologies();

  return (
    <Select
      options={technologies.map(mapTechnologyOption)}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TechnologiesSelect;
