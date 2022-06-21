export interface EmailRecipient {
  emailAddress: {
    address: string;
  };
}

export interface SendEmailRequest {
  message: {
    subject: string;
    body: {
      contentType: 'Html';
      content: string;
    };
    toRecipients: EmailRecipient[];
  };
}
