import React, { FC } from 'react';
import { Select } from 'components';
import { useRecruiters } from '../hooks';
import { mapRecruiterOption } from '../map';

interface Props {
  onChange: (value: string | number) => void;
  value: string;
}

const RecruitersSelect: FC<Props> = (props) => {
  const { value, onChange } = props;
  const { recruiters } = useRecruiters({});

  return <Select options={recruiters.map(mapRecruiterOption)} value={value} onChange={onChange} />;
};

export default RecruitersSelect;
