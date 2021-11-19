import React, { FC } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useAuth } from 'features/auth/hooks';

const AuthRoute: FC<RouteProps> = (props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to='/admin' />;
  }

  return <Route {...props} />;
};

export default AuthRoute;
