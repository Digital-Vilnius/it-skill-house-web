import { EventsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapEvent } from '../map';
import { EventsFilter } from 'api/clients/events/types';

interface Props {
  filter: EventsFilter;
}

export const getQueryKey = (filter: EventsFilter) => {
  return ['events', filter];
};

const useEvents = (props: Props) => {
  const { filter } = props;

  const getEventsFn = () => EventsClient.getEvents({ filter });
  const { isLoading, data } = useQuery(getQueryKey(filter), getEventsFn);

  return {
    isLoading,
    count: data?.count ?? 0,
    events: data?.result?.map(mapEvent) ?? [],
  };
};

export default useEvents;
