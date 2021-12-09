import React, { FC } from 'react';
import { MultiSelect } from 'components';
import { useTechnologies, useTechnologyAdd } from '../hooks';
import { mapTechnologyOption } from '../map';
import { queryClient } from 'core/query';
import { getQueryKey } from '../hooks/useTechnologies';
import { MultiSelectProps } from 'components/Select/MultiSelect';

type Props = Omit<MultiSelectProps, 'options' | 'id' | 'onOptionAdd'>;

const TechnologiesMultiSelect: FC<Props> = (props) => {
  const { value, onChange, ...rest } = props;
  const { technologies } = useTechnologies();
  const { addTechnology } = useTechnologyAdd();

  const handleOptionAdd = (name: string) => {
    addTechnology({ name }).then(async (technology) => {
      await queryClient.refetchQueries(getQueryKey());
      onChange([...value, technology.id]);
    });
  };

  return (
    <MultiSelect
      onOptionAdd={handleOptionAdd}
      id='technologies'
      options={technologies.map(mapTechnologyOption)}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TechnologiesMultiSelect;
