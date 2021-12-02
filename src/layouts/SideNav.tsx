import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/img/logo.svg';
import Icon from '@ailibs/feather-react-ts';
import { SideNavigationItems } from 'navigation/constants';

const SideNav: FC = () => {
  const location = useLocation();

  return (
    <Navbar expand='md' className='navbar-vertical fixed-start' collapseOnSelect={true}>
      <Container fluid>
        <Navbar.Toggle />
        <Link to='/admin'>
          <Navbar.Brand>
            <img className='navbar-brand-img' src={logo} alt='It Skill House' />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          <Nav>
            {SideNavigationItems.map((item, index) => (
              <Link key={index} to={item.url}>
                <Nav.Link as='span' disabled active={location.pathname === item.url}>
                  {<Icon className='feather' name={item.icon} size='17' />}
                  {item.title}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SideNav;
