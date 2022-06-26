import { TagsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setTags } from '../slice';
import { selectTagsLastUpdated } from '../selectors';
import { useEffect } from 'react';

export const getQueryKey = () => {
  return ['tags'];
};

const useTags = () => {
  const dispatch = useAppDispatch();
  const lastUpdated = useAppSelector(selectTagsLastUpdated);

  const { isLoading, refetch } = useQuery(getQueryKey(), TagsClient.getTags, {
    onSuccess: (response) => dispatch(setTags(response)),
  });

  useEffect(() => {
    refetch();
  }, [lastUpdated, refetch]);

  return { isLoading };
};

export default useTags;
