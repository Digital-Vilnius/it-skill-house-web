import { PublicClientApplication } from '@azure/msal-browser';
import { configuration } from './constants';

const msalInstance = new PublicClientApplication(configuration);

export default msalInstance;
