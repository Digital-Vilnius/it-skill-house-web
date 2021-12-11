import { Profession as ApiProfession } from 'api/clients/professions/types';
import { Profession } from './types';
import { SelectOption } from 'components/Select';

export const mapProfession = (profession: ApiProfession): Profession => profession;

export const mapProfessionOption = (profession: Profession): SelectOption => ({
  value: profession.id,
  label: profession.name,
  count: profession.count,
});
