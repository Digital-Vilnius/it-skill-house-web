import React, { FC } from 'react';
import { MultiSelect } from 'components';
import { useRecruiters } from '../hooks';
import { mapRecruiterOption } from '../map';
import { MultiSelectProps } from 'components/Select/MultiSelect';

type Props = Omit<MultiSelectProps, 'options'>;

const RecruitersMultiSelect: FC<Props> = (props) => {
  const { value, onChange, ...rest } = props;
  const { recruiters } = useRecruiters({});

  return (
    <MultiSelect
      options={recruiters.map(mapRecruiterOption)}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default RecruitersMultiSelect;
