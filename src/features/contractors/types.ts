import { Recruiter } from 'features/recruiters/types';
import { Technology } from 'features/technologies/types';
import { BaseModel } from 'api/types';
import { Tag } from 'features/tags/types';

export interface Contractor extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  isRemote: boolean;
  technologies: Technology[];
  mainTechnology: Technology;
  recruiter: Recruiter;
  rate: number;
  isPublic: boolean;
  availableFrom: string;
  experienceSince: string;
  codaId: number;
  cinodeId: number;
  tags: Tag[];
}

export interface ContractorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  technologiesIds: number[];
  tagsIds: number[];
  recruiterId: number;
  rate: number;
  location: string;
  isRemote: boolean;
  isPublic: boolean;
  availableFrom: string;
  mainTechnologyId: number;
  experienceSince: string;
  codaId: number;
  cinodeId: number;
}

export interface ContractorsFilter {
  keyword: string | null;
  rateFrom: number | null;
  rateTo: number | null;
  availableFrom: string | null;
  availableTo: string | null;
  experienceFrom: string | null;
  experienceTo: string | null;
  recruitersIds: number[];
  technologiesIds: number[];
  tagsIds: number[];
  isRemote: boolean | null;
  isPublic: boolean | null;
  isAvailable: boolean | null;
}
