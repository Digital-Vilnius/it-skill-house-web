import { Profile as ApiProfile } from 'api/clients/profile/types';
import { Profile } from './types';

export const mapProfile = (profile: ApiProfile): Profile => profile;
