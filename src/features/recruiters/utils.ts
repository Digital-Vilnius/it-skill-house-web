import { Recruiter } from 'api/clients/recruiters/types';

export const recruiterToString = (recruiter: Recruiter | undefined): string => {
  if (!recruiter) return 'Unknown';
  return `${recruiter.firstName} ${recruiter.lastName}`;
};
