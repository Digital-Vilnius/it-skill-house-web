import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import ModalProvider from 'core/modal/ModalProvider';

const AdminLayout: FC = () => {
  return (
    <ModalProvider>
      <SideNav />
      <Outlet />
    </ModalProvider>
  );
};

export default AdminLayout;
