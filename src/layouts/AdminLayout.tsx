import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import ModalProvider from 'core/modal/ModalProvider';

const AdminLayout: FC = () => {
  return (
    <ModalProvider>
      <Header />
      <main className='page'>
        <Outlet />
      </main>
    </ModalProvider>
  );
};

export default AdminLayout;
