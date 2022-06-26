import { TechnologiesClient } from 'api/clients';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setTechnologies } from '../slice';
import { selectTechnologiesLastUpdated } from '../selectors';
import { useEffect } from 'react';

export const getQueryKey = () => {
  return ['technologies'];
};

const useTechnologies = () => {
  const dispatch = useAppDispatch();
  const lastUpdated = useAppSelector(selectTechnologiesLastUpdated);

  const { isLoading, refetch } = useQuery(getQueryKey(), TechnologiesClient.getTechnologies, {
    onSuccess: (response) => dispatch(setTechnologies(response)),
  });

  useEffect(() => {
    refetch();
  }, [lastUpdated, refetch]);

  return { isLoading };
};

export default useTechnologies;
