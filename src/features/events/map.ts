import { Event as ApiEvent } from 'api/clients/events/types';
import { Event, EventFormData } from './types';
import { DateUtils } from 'utils';

export const mapEvent = (event: ApiEvent): Event => ({
  ...event,
  date: DateUtils.formatDateStringStrict(event.date),
});

export const mapEventFormData = (event: Event): EventFormData => ({
  title: event.title,
  content: event.content,
  date: DateUtils.formatDateStringStrict(event.date),
});
