import { PublicClientApplication } from '@azure/msal-browser';
import { configuration } from './constants';
import { store } from '../store';
import { setMsalAccessToken } from '../../features/auth/slice';

const msalInstance = new PublicClientApplication(configuration);

msalInstance.handleRedirectPromise().then((data) => {
  if (!data) return;
  store.dispatch(setMsalAccessToken({ msalAccessToken: data.accessToken }));
});

export default msalInstance;
