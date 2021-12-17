import { EventsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { EventsFilter } from 'api/clients/events/types';
import { mapEvent } from '../../events/map';

interface Props {
  contractorId: number;
}

export const getQueryKey = (filter: EventsFilter) => {
  return ['contractor-events', filter];
};

const useContractorEvents = (props: Props) => {
  const { contractorId } = props;
  const filter = { contractorId };

  const getContractorEventsFn = () => EventsClient.getEvents({ filter });
  const { isLoading, data } = useQuery(getQueryKey(filter), getContractorEventsFn);

  return {
    isLoading,
    count: data?.count ?? 0,
    events: data?.result?.map(mapEvent) ?? [],
  };
};

export default useContractorEvents;
