import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout, AdminLayout } from 'layouts';
import { LoginPage } from 'features/auth/pages';
import { AddContractorPage, ContractorsPage } from 'features/contractors/pages';
import { TransactionsPage } from 'features/transactions/pages';
import RequireAuth from './RequireAuth';

const RootNavigator: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/admin/' element={<AdminLayout />}>
          <Route
            path='contractors'
            element={
              <RequireAuth>
                <ContractorsPage />
              </RequireAuth>
            }
          />
          <Route
            path='contractors/add'
            element={
              <RequireAuth>
                <AddContractorPage />
              </RequireAuth>
            }
          />
          <Route
            path='transactions'
            element={
              <RequireAuth>
                <TransactionsPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
