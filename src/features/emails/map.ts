import { EmailRecipient, SendEmailRequest } from 'api/clients/emails/types';
import { EmailFormData } from './types';

export const mapSendEmailRequest = (formData: EmailFormData, emails: string[]): SendEmailRequest => {
  const toRecipients: EmailRecipient[] = emails.map((email) => ({
    emailAddress: { address: email },
  }));

  return {
    message: {
      subject: formData.subject,
      body: {
        contentType: 'Html',
        content: formData.body,
      },
      toRecipients,
    },
  };
};
