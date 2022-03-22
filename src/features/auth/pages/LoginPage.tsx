import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Illustration from 'assets/img/illustrations/happiness.svg';
import { msalInstance } from 'core/msal';
import { useNavigate } from 'react-router-dom';
import { scopes } from 'core/msal/config';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    await msalInstance.loginPopup({ scopes, redirectUri: process.env.REACT_APP_URL });
    navigate('/admin/contractors');
  };

  return (
    <div className='d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} className='offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0'>
            <div className='text-center'>
              <img className='img-fluid' src={Illustration} alt='Sign in illustration' />
            </div>
          </Col>
          <Col xs={12} md={5} xl={4} className='order-md-1 my-5'>
            <h1 className='display-4 text-center mb-3'>Sign in</h1>
            <p className='text-muted text-center mb-5'>Free access to our dashboard.</p>
            <Button onClick={signIn} size='lg' className='w-100 mb-3'>
              Sign in
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
