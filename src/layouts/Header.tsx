import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import { useLogout } from 'features/auth/hooks';

const Header: FC = () => {
  const { logout } = useLogout();

  return (
    <header className='header'>
      <Container fluid className='header-container'>
        <Link to='/admin'>
          <img className='header-logo' src={logo} alt='It Skill House' />
        </Link>
        <a className='header-item' onClick={logout}>
          Logout
        </a>
      </Container>
    </header>
  );
};

export default Header;
