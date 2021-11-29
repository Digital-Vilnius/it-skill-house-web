import { useAppSelector } from 'core/store';

const useAuth = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return { isLoggedIn };
};

export default useAuth;
