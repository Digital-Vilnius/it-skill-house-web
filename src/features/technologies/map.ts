import { Technology as ApiTechnology } from 'api/clients/technologies/types';
import { Technology } from './types';
import { SelectOption } from 'components/Select';

export const mapTechnology = (technology: ApiTechnology): Technology => technology;

export const mapTechnologyOption = (technology: Technology): SelectOption => ({
  value: technology.id,
  label: technology.name,
});
