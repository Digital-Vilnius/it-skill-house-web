import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout, AdminLayout } from 'layouts';

const RootNavigator: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={<AuthLayout />} />
        <Route path='/admin/*' element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
