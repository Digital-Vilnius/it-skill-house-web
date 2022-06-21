import { Configuration, PopupRequest } from '@azure/msal-browser';

export const configuration: Configuration = {
  auth: {
    clientId: '96f79a7d-a51c-40de-b73c-7897e8cb0ffd',
    redirectUri: 'http://localhost:3000/',
  },
};

export const authRequest: PopupRequest = {
  scopes: ['openid', 'Mail.Send', 'User.Read'],
};
