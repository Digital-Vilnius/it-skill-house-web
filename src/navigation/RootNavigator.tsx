import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout, AdminLayout } from 'layouts';
import { LoginPage } from 'features/auth/pages';
import { ContractorsPage } from 'features/contractors/pages';
import RequireAuth from './RequireAuth';
import { RecruitersPage, AddRecruiterPage } from 'features/recruiters/pages';
import { UsersPage, AddUserPage } from 'features/users/pages';

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
            path='recruiters'
            element={
              <RequireAuth>
                <RecruitersPage />
              </RequireAuth>
            }
          />
          <Route
            path='recruiters/add'
            element={
              <RequireAuth>
                <AddRecruiterPage />
              </RequireAuth>
            }
          />
          <Route
            path='users'
            element={
              <RequireAuth>
                <UsersPage />
              </RequireAuth>
            }
          />
          <Route
            path='users/add'
            element={
              <RequireAuth>
                <AddUserPage />
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
