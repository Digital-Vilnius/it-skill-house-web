import React, { FC } from 'react';
import { useRecruitersColumns } from '../hooks';
import DataGrid from 'react-data-grid';
import { Recruiter } from '../types';

interface Props {
  recruiters: Recruiter[];
  total: number;
}

const RecruitersTable: FC<Props> = (props) => {
  const { recruiters } = props;
  const { columns } = useRecruitersColumns();

  return <DataGrid columns={columns} rows={recruiters} />;
};

export default RecruitersTable;
