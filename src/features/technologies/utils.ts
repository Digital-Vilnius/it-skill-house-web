import { Technology } from 'api/clients/technologies/types';

export const technologyToString = (technology: Technology | undefined): string => {
  return technology?.name ?? 'Unknown';
};
