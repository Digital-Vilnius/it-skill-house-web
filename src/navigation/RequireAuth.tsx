import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'core/store';
import { selectIsLoggedIn } from 'features/auth/selectors';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
