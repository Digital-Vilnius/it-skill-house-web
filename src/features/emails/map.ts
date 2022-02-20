import { Email as ApiEmail } from 'api/clients/emails/types';
import { Email } from './types';

export const mapEmail = (email: ApiEmail): Email => email;
