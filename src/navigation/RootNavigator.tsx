import React, { FC } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import { AuthLayout, AdminLayout } from 'layouts';

const RootNavigator: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <AuthRoute path='/auth' children={AuthLayout} />
        <ProtectedRoute path='/admin' children={AdminLayout} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
