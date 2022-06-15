import { RecruitersClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapRecruiter } from '../map';

export const getQueryKey = () => {
  return ['recruiters'];
};

const useRecruiters = () => {
  const { isLoading, data } = useQuery(getQueryKey(), RecruitersClient.getRecruiters);

  const recruiters = data?.result?.map(mapRecruiter) ?? [];
  const count = data?.count ?? 0;

  return {
    isLoading,
    count,
    recruiters,
  };
};

export default useRecruiters;
