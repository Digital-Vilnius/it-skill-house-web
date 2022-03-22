export const config = {
  auth: {
    clientId: '0ad07529-d422-4250-b56c-43e8f28a4d6a',
    authority: 'https://login.microsoftonline.com/5fb7994c-41af-49dc-ad39-ecbddf4f27aa',
    redirectUri: process.env.REACT_APP_URL,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const scopes = ['api://0ad07529-d422-4250-b56c-43e8f28a4d6a/access_as_user'];
