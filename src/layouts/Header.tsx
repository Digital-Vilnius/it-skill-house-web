import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import { useLogout } from 'features/auth/hooks';
import { useAppSelector } from 'core/store';
import { selectProfile } from 'features/profile/selectors';
import { LogOut, User } from 'react-feather';

const Header: FC = () => {
  const profile = useAppSelector(selectProfile);
  const { logout } = useLogout();

  return (
    <header className='header'>
      <Container fluid className='header-container'>
        <Link to='/admin/contractors'>
          <img className='header-logo' src={logo} alt='It Skill House' />
        </Link>
        <div className='d-flex align-items-center'>
          <User className='profile' />
          <span className='header-person'>{`Logged in as ${profile?.firstName} ${profile?.lastName}`}</span>
          <LogOut onClick={logout} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
