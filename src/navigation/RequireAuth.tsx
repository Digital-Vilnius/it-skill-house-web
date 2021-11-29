import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
