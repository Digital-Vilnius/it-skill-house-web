import axios from 'axios';
import { store } from 'core/store';
import ToastService from 'core/toast';
import { logoutAction, refreshTokenAction } from 'features/auth/actions';
import { stringify } from 'qs';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
});

httpClient.interceptors.request.use(
  async (request) => {
    const token = store.getState().auth.token;
    if (token) {
      request.headers = request.headers ?? {};
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  async (response) => response.data,
  async (error) => {
    const { isRefreshing, refreshToken, token } = store.getState().auth;
    const { response, config } = error;
    const { status } = response;

    switch (status) {
      case 400: {
        ToastService.showError('Bad request');
        return Promise.reject(error);
      }

      case 401: {
        if (!isRefreshing && refreshToken && token) {
          await store.dispatch(refreshTokenAction({ refreshToken, token })).unwrap();
          return httpClient(config);
        }

        ToastService.showError('Token expired');
        store.dispatch(logoutAction());
        break;
      }

      default: {
        ToastService.showError('Error has occurred');
        return Promise.reject(error);
      }
    }
  }
);

export default httpClient;
