import { Contractor as ApiContractor } from 'api/clients/contractors/types';
import { Contractor } from './types';

export const mapContractor = (contractor: ApiContractor): Contractor => contractor;
