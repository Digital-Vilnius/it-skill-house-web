import { Profession } from 'api/clients/professions/types';

export const professionToString = (profession: Profession | undefined): string => {
  return profession?.name ?? 'Unknown';
};
