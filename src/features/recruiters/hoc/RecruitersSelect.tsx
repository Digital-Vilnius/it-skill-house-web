import React, { FC } from 'react';
import { Select } from 'components';
import { useRecruiters } from '../hooks';
import { mapRecruiterOption } from '../map';
import { SelectProps } from 'components/Select/Select';

type Props = Omit<SelectProps, 'options'>;

const RecruitersSelect: FC<Props> = (props) => {
  const { value, onChange, ...rest } = props;
  const { recruiters } = useRecruiters({});

  return (
    <Select
      options={recruiters.map(mapRecruiterOption)}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default RecruitersSelect;
