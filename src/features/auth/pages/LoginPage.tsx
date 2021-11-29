import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginForm } from '../containers';
import Illustration from 'assets/img/illustrations/happiness.svg';

const LoginPage: FC = () => {
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
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
