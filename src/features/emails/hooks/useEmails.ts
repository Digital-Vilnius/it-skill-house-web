import { EmailsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapEmail } from '../map';
import { EmailsFilter } from 'api/clients/emails/types';

interface Props {
  filter: EmailsFilter;
}

export const getQueryKey = (filter: EmailsFilter) => {
  return ['emails', filter];
};

const useEmails = (props: Props) => {
  const { filter } = props;

  const getEmailsFn = () => EmailsClient.getEmails({ filter });
  const { isLoading, data } = useQuery(getQueryKey(filter), getEmailsFn);

  return {
    isLoading,
    count: data?.count ?? 0,
    emails: data?.result?.map(mapEmail) ?? [],
  };
};

export default useEmails;
