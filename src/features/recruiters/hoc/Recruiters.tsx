import React, { FC } from 'react';
import { useRecruiters } from '../hooks';
import { useAppSelector } from 'core/store';
import { RecruitersTable } from '../components';

const Recruiters: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { recruiters, total } = useRecruiters({ filter, paging, sort });

  return <RecruitersTable recruiters={recruiters} total={total} />;
};

export default Recruiters;
