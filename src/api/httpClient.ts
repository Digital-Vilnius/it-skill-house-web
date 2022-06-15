import axios from 'axios';
import ToastService from 'core/toast';
import { stringify } from 'qs';
import { store } from '../core/store';

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
    const { response } = error;
    const { status } = response;

    switch (status) {
      case 400: {
        ToastService.showError('Bad request');
        return Promise.reject(error);
      }

      default: {
        ToastService.showError('Error has occurred');
        return Promise.reject(error);
      }
    }
  }
);

export default httpClient;
