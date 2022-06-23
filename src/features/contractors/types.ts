import { Recruiter } from 'features/recruiters/types';
import { Technology } from 'features/technologies/types';
import { BaseModel } from 'api/types';
import { Tag } from 'features/tags/types';
import { Event } from 'features/events/types';
import { Profession } from 'features/professions/types';
import { Note } from 'features/notes/types';

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
