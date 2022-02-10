import React, { FC } from 'react';
import { useRecruiters } from '../hooks';
import { mapRecruiterOption } from '../map';
import { FormSelect } from 'components';
import { FormSelectProps } from 'components/Form/FormSelect';

const RecruitersSelect: FC<FormSelectProps> = (props) => {
  const { isLoading, recruiters } = useRecruiters();

  return <FormSelect {...props} loading={isLoading} options={recruiters.map(mapRecruiterOption)} />;
};

export default RecruitersSelect;
