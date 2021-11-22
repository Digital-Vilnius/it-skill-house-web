import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TransactionsPage } from 'features/transactions/pages';
import Header from './Header';
import { Accounts } from 'features/accounts/hoc';

const AdminLayout: FC = () => {
  return (
    <div className='d-flex align-items-stretch'>
      <Accounts />
      <div className='d-flex flex-fill'>
        <Header />
        <Routes>
          <Route path='/transactions' element={<TransactionsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
