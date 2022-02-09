import React, { FC } from 'react';
import { useEmails } from '../hooks';
import { EmailsList as ControlledEmailsList } from '../components';
import { EmailsFilter } from 'api/clients/emails/types';

interface Props {
  filter: EmailsFilter;
}

const EventsList: FC<Props> = (props) => {
  const { filter } = props;
  const { emails } = useEmails({ filter });

  return <ControlledEmailsList emails={emails} />;
};

export default EventsList;
