import { useIsAuthenticated } from '@azure/msal-react';

const useAuth = () => {
  const isLoggedIn = useIsAuthenticated();

  return { isLoggedIn };
};

export default useAuth;
