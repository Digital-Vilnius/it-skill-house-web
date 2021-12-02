import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const AdminLayout: FC = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
};

export default AdminLayout;
