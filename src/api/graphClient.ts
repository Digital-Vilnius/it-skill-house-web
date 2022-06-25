import axios from 'axios';
import { store } from 'core/store';
import ToastService from 'core/toast';
import { logout } from 'features/auth/slice';
import { refreshMsalAccessTokenAction } from 'features/auth/actions';

const graphClient = axios.create({
  baseURL: process.env.REACT_APP_GRAPH_API_URL,
});

graphClient.interceptors.request.use(
  async (request) => {
    const token = store.getState().auth.msalAccessToken;

    if (token) {
      request.headers = request.headers ?? {};
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => Promise.reject(error)
);

graphClient.interceptors.response.use(
  async (response) => response.data,
  async (error) => {
    const { isMsalRefreshing } = store.getState().auth;
    const { response, config } = error;
    const { status } = response;

    switch (status) {
      case 400: {
        ToastService.showError('Bad request');
        return Promise.reject(error);
      }

      case 401: {
        if (!isMsalRefreshing) {
          await store.dispatch(refreshMsalAccessTokenAction()).unwrap();
          return graphClient(config);
        }

        ToastService.showError('Token expired');
        store.dispatch(logout());
        break;
      }

      default: {
        ToastService.showError('Error has occurred');
        return Promise.reject(error);
      }
    }
  }
);

export default graphClient;
