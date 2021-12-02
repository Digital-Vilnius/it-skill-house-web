import { Contractor as ApiContractor } from 'api/clients/contractors/types';
import { Contractor } from './types';
import { mapRecruiter } from 'features/recruiters/map';

export const mapContractor = (contractor: ApiContractor): Contractor => ({
  ...contractor,
  recruiter: mapRecruiter(contractor.recruiter),
});
