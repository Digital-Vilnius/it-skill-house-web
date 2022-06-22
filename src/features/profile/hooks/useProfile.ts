import { ProfileClient } from 'api/clients';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setProfile } from '../slice';
import { selectProfile } from '../selectors';
import { selectIsAuthenticated } from 'features/auth/selectors';

export const getQueryKey = () => {
  return ['profile'];
};

const useProfile = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const { isLoading } = useQuery(getQueryKey(), ProfileClient.getProfile, {
    onSuccess: (data) => dispatch(setProfile({ profile: data })),
    enabled: isAuthenticated,
  });

  return { isLoading, profile };
};

export default useProfile;
