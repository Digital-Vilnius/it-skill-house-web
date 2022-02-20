import { User as ApiUser } from 'api/clients/users/types';
import { User } from './types';
import { SelectOption } from 'components/Select';

export const mapUser = (user: ApiUser): User => user;

export const mapUserOption = (user: User): SelectOption => ({
  label: `${user.firstName} ${user.lastName}`,
  value: user.id,
});
