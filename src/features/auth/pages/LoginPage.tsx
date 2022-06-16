import { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginForm } from '../hoc';
import Illustration from 'assets/img/illustrations/happiness.svg';
import { useAppSelector } from 'core/store';
import { selectIsLoggedIn } from '../selectors';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/admin/contractors');
  }, [isLoggedIn, navigate]);

  return (
    <div className='login-page'>
      <Container>
        <Row className='align-items-center'>
          <Col xl={4}>
            <h1 className='login-page-title mb-4'>Sign In</h1>
            <LoginForm />
          </Col>
          <Col className='text-center' xl={8}>
            <img className='login-page-image' src={Illustration} alt='Sign in illustration' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
