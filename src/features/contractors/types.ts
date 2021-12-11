import { Recruiter } from 'features/recruiters/types';
import { Technology } from 'features/technologies/types';
import { BaseModel } from 'api/types';
import { Tag } from 'features/tags/types';
import { Profession } from 'features/professions/types';

export interface Contractor extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  isRemote: boolean;
  isPublic: boolean;
  isAvailable: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  location: string;
  rate: number;

  profession: Profession;
  recruiter: Recruiter;
  mainTechnology: Technology;

  technologies: Technology[];
  tags: Tag[];

  availableFrom: string;
  experienceSince: string;

  linkedInUrl: string;
  codaId: number;
  cinodeId: number;
}

export interface ContractorAddFormData extends ContractorEditFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rate: number;
}

export interface ContractorEditFormData {
  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  location: string;
  rate: number;

  professionId: number;
  recruiterId: number;
  mainTechnologyId: number;

  technologiesIds: number[];
  tagsIds: number[];

  availableFrom: string;
  experienceSince: string;

  linkedInUrl: string;
  codaId: number;
  cinodeId: number;
}

export interface ContractorsFilter {
  keyword: string | null;

  isRemote: boolean | null;
  isPublic: boolean | null;
  isAvailable: boolean | null;
  hasContract: boolean | null;
  isOnSite: boolean | null;

  professionsIds: number[];
  recruitersIds: number[];
  technologiesIds: number[];
  tagsIds: number[];

  rateFrom: number | null;
  rateTo: number | null;

  experienceFrom: string | null;
  experienceTo: string | null;

  availableFrom: string | null;
  availableTo: string | null;
}
