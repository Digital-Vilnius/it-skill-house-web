import { Recruiter as ApiRecruiter } from 'api/clients/recruiters/types';
import { Recruiter } from './types';
import { Option } from 'components/Select/types';

export const mapRecruiter = (recruiter: ApiRecruiter): Recruiter => ({
  ...recruiter,
  email: recruiter.user.email,
  firstName: recruiter.user.firstName,
  lastName: recruiter.user.lastName,
});

export const mapRecruiterOption = (recruiter: Recruiter): Option => ({
  label: `${recruiter.firstName} ${recruiter.lastName} (${recruiter.email})`,
  value: recruiter.id,
});
