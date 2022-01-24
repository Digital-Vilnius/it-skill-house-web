import httpClient from '../../httpClient';
import { ResultResponse } from '../../types';
import { Email, SendEmailRequest } from './types';

const baseUrl = '/emails';

export const sendEmail = async (request: SendEmailRequest) => {
  return httpClient.post<SendEmailRequest, ResultResponse<Email>>(baseUrl, request);
};
