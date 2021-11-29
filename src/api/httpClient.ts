import axios from 'axios';
import { store } from 'core/store';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

httpClient.interceptors.response.use(async (response) => response.data);

export default httpClient;
