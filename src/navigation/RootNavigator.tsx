import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout, AdminLayout } from 'layouts';
import { LoginPage } from 'features/auth/pages';
import { ContractorPage, ContractorsPage } from 'features/contractors/pages';
import RequireAuth from './RequireAuth';

const RootNavigator: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route
            path='contractors'
            element={
              <RequireAuth>
                <ContractorsPage />
              </RequireAuth>
            }
          />
          <Route
            path='contractors/:id'
            element={
              <RequireAuth>
                <ContractorPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Navigate replace to='/admin/contractors' />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
