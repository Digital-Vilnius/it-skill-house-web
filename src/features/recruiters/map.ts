import { Recruiter as ApiRecruiter } from 'api/clients/recruiters/types';
import { Recruiter } from './types';
import { SelectOption } from 'components/Select';

export const mapRecruiter = (recruiter: ApiRecruiter): Recruiter => recruiter;

export const mapRecruiterOption = (recruiter: Recruiter): SelectOption => ({
  label: `${recruiter.firstName} ${recruiter.lastName}`,
  value: recruiter.id,
});
