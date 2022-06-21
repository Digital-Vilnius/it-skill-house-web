import { SendEmailRequest } from 'api/clients/emails/types';
import { EmailFormData } from './types';
import { Contractor } from '../contractors/types';

export const mapSendEmailRequest = (
  formData: EmailFormData,
  contractor: Contractor
): SendEmailRequest => ({
  message: {
    subject: formData.subject,
    body: {
      contentType: 'Html',
      content: `Labas, ${contractor.firstName}\n\n${formData.body}`,
    },
    toRecipients: [
      {
        emailAddress: { address: contractor.email },
      },
    ],
  },
});
