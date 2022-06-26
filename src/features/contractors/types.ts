import { BaseModel } from 'api/types';
import { Event } from 'features/events/types';
import { Note } from 'features/notes/types';
import { Profession } from 'api/clients/professions/types';
import { Recruiter } from 'api/clients/recruiters/types';
import { Tag } from 'api/clients/tags/types';
import { Technology } from 'api/clients/technologies/types';

export interface Contractor extends BaseModel {
  linkedInUrl: string | null;
  codaId: number | null;
  cinodeId: number | null;
  userId: number;
  firstName: string;
  reference: string | null;
  mailed: string | null;
  lastName: string;
  email: string;
  phone: string | null;
  countryCode: string;
  city: string | null;
  rate: number | null;
  currency: string | null;
  availableFrom: string | null;
  experienceSince: number | null;
  isAvailable: boolean;
  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;
  lastEmail: string | null;
  nearestEvent: Event | null;
  profession: Profession | null;
  recruiter: Recruiter;
  lastNote: Note | null;
  tags: Tag[];
  technologies: Technology[];
  mainTechnologies: Technology[];
}
