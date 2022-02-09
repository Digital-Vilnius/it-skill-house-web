import React, { FC } from 'react';
import { useTechnologies } from '../hooks';
import { mapTechnologyOption } from '../map';
import { Select } from 'components';
import { SelectProps } from 'components/Select';

const TechnologiesSelect: FC<SelectProps> = (props) => {
  const { isLoading, addTechnology, technologies } = useTechnologies();

  return (
    <Select
      {...props}
      onCreate={addTechnology}
      loading={isLoading}
      options={technologies.map(mapTechnologyOption)}
    />
  );
};

export default TechnologiesSelect;
