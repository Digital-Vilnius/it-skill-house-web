import React, { FC } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Email } from '../types';

interface Props {
  email: Email;
}

const EmailsListItem: FC<Props> = (props) => {
  const { email } = props;

  return (
    <ListGroup.Item>
      <Row>
        <Col xs='auto'>
          <small className='text-muted date'>{email.created}</small>
        </Col>
        <Col className='ms-n2'>
          <h3 className='mb-4'>{email.subject}</h3>
          <p dangerouslySetInnerHTML={{ __html: email.body }} className='small html-content mb-2' />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmailsListItem;
