import React, { FC } from 'react';
import { useProfessions } from '../hooks';
import { mapProfessionOption } from '../map';
import { Select } from 'components';
import { SelectProps } from 'components/Select';

const ProfessionsSelect: FC<SelectProps> = (props) => {
  const { isLoading, professions, addProfession } = useProfessions();

  return (
    <Select
      {...props}
      loading={isLoading}
      onCreate={addProfession}
      options={professions.map(mapProfessionOption)}
    />
  );
};

export default ProfessionsSelect;
