import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import Icon from '@ailibs/feather-react-ts';
import { SideNavigationItems } from 'navigation/constants';
import { useLogout } from 'features/auth/hooks';

const SideNav: FC = () => {
  const location = useLocation();
  const { logout } = useLogout();

  return (
    <Navbar expand='md' className='navbar-vertical fixed-start' collapseOnSelect={true}>
      <Container fluid>
        <Navbar.Toggle />
        <Link to='/admin'>
          <Navbar.Brand className='mb-4'>
            <img className='navbar-brand-img' src={logo} alt='It Skill House' />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          <Nav className='d-flex flex-grow-1 justify-content-between'>
            {SideNavigationItems.map((item, index) => (
              <Link key={index} to={item.url}>
                <Nav.Link as='span' disabled active={location.pathname === item.url}>
                  {<Icon className='feather' name={item.icon} size='17' />}
                  {item.title}
                </Nav.Link>
              </Link>
            ))}
            <Nav.Link as='span' className='mb-3' onClick={logout}>
              <Icon className='feather' name='log-out' size='17' />
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SideNav;
