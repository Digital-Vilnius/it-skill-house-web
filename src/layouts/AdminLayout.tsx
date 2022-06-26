import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import ModalProvider from 'core/modal/ModalProvider';
import { useTechnologies } from 'features/technologies/hooks';
import { useTags } from 'features/tags/hooks';
import { useRecruiters } from 'features/recruiters/hooks';
import { useProfessions } from 'features/professions/hooks';

const AdminLayout: FC = () => {
  useTechnologies();
  useTags();
  useRecruiters();
  useProfessions();

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
