import { RecruitersClient } from 'api/clients';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setRecruiters } from '../slice';
import { selectRecruitersLastUpdated } from '../selectors';
import { useEffect } from 'react';

export const getQueryKey = () => {
  return ['recruiters'];
};

const useRecruiters = () => {
  const dispatch = useAppDispatch();
  const lastUpdated = useAppSelector(selectRecruitersLastUpdated);

  const { isLoading, refetch } = useQuery(getQueryKey(), RecruitersClient.getRecruiters, {
    onSuccess: (response) => dispatch(setRecruiters(response)),
  });

  useEffect(() => {
    refetch();
  }, [lastUpdated, refetch]);

  return { isLoading };
};

export default useRecruiters;
