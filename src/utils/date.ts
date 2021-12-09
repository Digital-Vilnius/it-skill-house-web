import moment from 'moment';

type DateStringType = string | null;
type DateType = Date | null;
const dateTimeFormat = 'YYYY-MM-DD hh:mm:ss';
const dateFormat = 'YYYY-MM-DD';

export const formatDate = (date: DateType): DateStringType => {
  if (!date) return null;

  return moment(date).format(dateFormat);
};

export const formatDateStringStrict = (date: string): string => {
  return moment(date).format(dateFormat);
};

export const formatDateString = (date: DateStringType): string | null => {
  if (!date) return null;

  return formatDateStringStrict(date);
};

export const formatDateTime = (date: DateType): DateStringType => {
  if (!date) return null;

  return moment(date).format(dateTimeFormat);
};

export const parseDate = (date: DateStringType): DateType => {
  if (!date) return null;

  return moment(date).toDate();
};
