import { RecruitersFilter } from 'api/clients/recruiters/types';
import { Paging, Sort } from 'api/types';
import { RecruitersClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapRecruiter } from '../map';

interface Props {
  filter?: RecruitersFilter;
  paging?: Paging;
  sort?: Sort;
}

export const getQueryKey = (filter?: RecruitersFilter, paging?: Paging, sort?: Sort) => {
  return ['recruiters', filter, paging, sort];
};

const useRecruiters = (props: Props) => {
  const { filter, paging, sort } = props;

  const getRecruitersFn = () => RecruitersClient.getRecruiters({ filter, paging, sort });
  const { isLoading, data } = useQuery(getQueryKey(filter, paging, sort), getRecruitersFn, { keepPreviousData: true });

  return {
    isLoading,
    total: data?.total ?? 0,
    recruiters: data?.result?.map(mapRecruiter) ?? [],
  };
};

export default useRecruiters;
