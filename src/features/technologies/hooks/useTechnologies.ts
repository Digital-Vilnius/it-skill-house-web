import { TechnologiesClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapTechnology } from '../map';

export const getQueryKey = () => {
  return ['technologies'];
};

const useTechnologies = () => {
  const getTechnologiesFn = () => TechnologiesClient.getTechnologies();
  const { isLoading, data } = useQuery(getQueryKey(), getTechnologiesFn, { keepPreviousData: true });

  return {
    isLoading,
    total: data?.total ?? 0,
    technologies: data?.result?.map(mapTechnology) ?? [],
  };
};

export default useTechnologies;
