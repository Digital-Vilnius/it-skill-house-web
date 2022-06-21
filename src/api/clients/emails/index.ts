import graphClient from '../../graphClient';
import { SendEmailRequest } from './types';

const baseUrl = '/me';

export const sendEmail = async (request: SendEmailRequest) => {
  return graphClient.post<SendEmailRequest>(`${baseUrl}/sendMail`, request);
};
