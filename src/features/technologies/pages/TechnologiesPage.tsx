import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Technologies } from '../hoc';

const TechnologiesPage: FC = () => {
  return (
    <div className='main-content'>
      <Container fluid>
        <Technologies />
      </Container>
    </div>
  );
};

export default TechnologiesPage;
