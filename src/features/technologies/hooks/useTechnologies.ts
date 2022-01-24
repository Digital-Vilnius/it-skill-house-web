import { ListResponse, Paging, Sort } from 'api/types';
import { TechnologiesClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapTechnology } from '../map';
import { Technology } from '../types';
import { TechnologiesFilter } from 'api/clients/technologies/types';

interface Props {
  filter: TechnologiesFilter;
  paging: Paging;
  sort: Sort;
}

export const getQueryKey = (filter: TechnologiesFilter, paging: Paging, sort: Sort) => {
  return ['users', filter, paging, sort];
};

const useTechnologies = (props: Props) => {
  const { filter, paging, sort } = props;

  const getTechnologiesFn = () => TechnologiesClient.getTechnologies({ filter, paging, sort });
  const { isLoading, data } = useQuery<ListResponse<Technology>>(
    getQueryKey(filter, paging, sort),
    getTechnologiesFn,
    { keepPreviousData: true }
  );

  return {
    isLoading,
    count: data?.count ?? 0,
    technologies: data?.result?.map(mapTechnology) ?? [],
  };
};

export default useTechnologies;
