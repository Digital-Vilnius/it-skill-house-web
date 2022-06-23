import { Configuration, RedirectRequest } from '@azure/msal-browser';

export const configuration: Configuration = {
  auth: {
    clientId: '96f79a7d-a51c-40de-b73c-7897e8cb0ffd',
    redirectUri: process.env.REACT_APP_MSAL_REDIRECT,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

export const authRequest: RedirectRequest = {
  scopes: ['openid', 'Mail.Send', 'User.Read'],
};
