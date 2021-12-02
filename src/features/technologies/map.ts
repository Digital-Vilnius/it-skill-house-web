import { Technology as ApiTechnology } from 'api/clients/technologies/types';
import { Technology } from './types';
import { Option } from 'components/Select/types';

export const mapTechnology = (technology: ApiTechnology): Technology => technology;

export const mapTechnologyOption = (technology: Technology): Option => ({
  value: technology.id,
  label: technology.name,
});
