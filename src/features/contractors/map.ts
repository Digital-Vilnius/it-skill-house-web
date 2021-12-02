import { Contractor as ApiContractor } from 'api/clients/contractors/types';
import { Contractor } from './types';
import { mapRecruiter } from 'features/recruiters/map';
import { mapTechnology } from 'features/technologies/map';
import { Column } from 'components/DataTable/types';

export const mapContractor = (contractor: ApiContractor): Contractor => ({
  ...contractor,
  recruiter: mapRecruiter(contractor.recruiter),
  technologies: contractor.technologies.map(mapTechnology),
});

export const mapColumnToOption = (column: Column<Contractor>) => ({
  label: column.label,
  value: column.id,
});
