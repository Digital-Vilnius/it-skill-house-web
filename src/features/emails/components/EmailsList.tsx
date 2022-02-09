import { FC } from 'react';
import { Email } from '../types';
import { Card, ListGroup } from 'react-bootstrap';
import EmailsListItem from './EmailsListItem';

interface Props {
  emails: Email[];
}

const EmailsList: FC<Props> = (props) => {
  const { emails } = props;

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Emails</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush list-group-activity my-n3'>
          {emails.map((email) => (
            <EmailsListItem email={email} key={email.id} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default EmailsList;
