import React, { FC } from 'react';
import { useTechnologies } from '../hooks';
import { mapTechnologyOption } from '../map';
import { FormSelect } from 'components';
import { FormSelectProps } from 'components/Form/FormSelect';

const TechnologiesSelect: FC<FormSelectProps> = (props) => {
  const { isLoading, addTechnology, technologies } = useTechnologies();

  return (
    <FormSelect
      {...props}
      onCreate={addTechnology}
      loading={isLoading}
      options={technologies.map(mapTechnologyOption)}
    />
  );
};

export default TechnologiesSelect;
