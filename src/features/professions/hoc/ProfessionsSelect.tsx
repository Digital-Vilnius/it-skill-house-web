import React, { FC } from 'react';
import { useProfessions } from '../hooks';
import { mapProfessionOption } from '../map';
import { FormSelect } from 'components';
import { FormSelectProps } from 'components/Form/FormSelect';

const ProfessionsSelect: FC<FormSelectProps> = (props) => {
  const { isLoading, professions, addProfession } = useProfessions();

  return (
    <FormSelect
      {...props}
      loading={isLoading}
      onCreate={addProfession}
      options={professions.map(mapProfessionOption)}
    />
  );
};

export default ProfessionsSelect;
