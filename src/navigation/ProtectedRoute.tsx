import React, { FC } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useAuth } from 'features/auth/hooks';

const ProtectedRoute: FC<RouteProps> = (props) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to='/auth' />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
