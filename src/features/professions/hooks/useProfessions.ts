import { ProfessionsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setProfessions } from '../slice';
import { selectProfessionsLastUpdated } from '../selectors';
import { useEffect } from 'react';

export const getQueryKey = () => {
  return ['professions'];
};

const useProfessions = () => {
  const dispatch = useAppDispatch();
  const lastUpdated = useAppSelector(selectProfessionsLastUpdated);

  const { isLoading, refetch } = useQuery(getQueryKey(), ProfessionsClient.getProfessions, {
    onSuccess: (response) => dispatch(setProfessions(response)),
  });

  useEffect(() => {
    refetch();
  }, [lastUpdated, refetch]);

  return { isLoading };
};

export default useProfessions;
