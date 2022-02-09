import httpClient from '../../httpClient';
import { ListRequest, ListResponse, ResultResponse } from '../../types';
import { Email, EmailsFilter, SendEmailRequest } from './types';

const baseUrl = '/emails';

export const sendEmail = async (request: SendEmailRequest) => {
  return httpClient.post<SendEmailRequest, ResultResponse<Email>>(baseUrl, request);
};

export const getEmails = async (request: ListRequest<EmailsFilter>) => {
  const params = { ...request.filter };
  return httpClient.get<ListRequest<EmailsFilter>, ListResponse<Email>>(baseUrl, { params });
};
