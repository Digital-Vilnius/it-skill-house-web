import React, { FC } from 'react';
import { useRecruiters } from '../hooks';
import { mapRecruiterOption } from '../map';
import { Select } from 'components';
import { SelectProps } from 'components/Select';

const RecruitersSelect: FC<SelectProps> = (props) => {
  const { isLoading, recruiters } = useRecruiters();

  return <Select {...props} loading={isLoading} options={recruiters.map(mapRecruiterOption)} />;
};

export default RecruitersSelect;
