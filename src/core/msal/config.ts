export const config = {
  auth: {
    clientId: '6c2f85c2-0405-4ce2-bb8a-22f521fcb759',
    authority: 'https://login.microsoftonline.com/b5883439-ab4c-4cb2-910c-3a0a651bd74f',
    redirectUri: 'http://localhost:3000/',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const scopes = ['api://6c2f85c2-0405-4ce2-bb8a-22f521fcb759/access_as_user'];
