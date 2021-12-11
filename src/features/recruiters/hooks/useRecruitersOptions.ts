import { RecruitersClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapRecruiter, mapRecruiterOption } from '../map';

export const getQueryKey = () => {
  return ['recruiters'];
};

const useRecruitersOptions = () => {
  const getRecruitersFn = () => RecruitersClient.getRecruiters();

  const { isLoading, data } = useQuery(getQueryKey(), getRecruitersFn);

  const recruiters = data?.result?.map(mapRecruiter) ?? [];
  const recruitersOptions = recruiters.map(mapRecruiterOption);
  const count = data?.count ?? 0;

  return {
    isLoading,
    count,
    recruiters,
    recruitersOptions,
  };
};

export default useRecruitersOptions;
