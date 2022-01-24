import { Email as ApiEmail } from 'api/clients/emails/types';
import { Email, Recipient } from './types';
import { SelectOption } from 'components/Select';

export const mapEmail = (email: ApiEmail): Email => email;

export const mapRecipientToOption = (recipient: Recipient): SelectOption => ({
  value: recipient.id,
  label: recipient.email,
});
