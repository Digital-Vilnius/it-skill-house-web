import axios from 'axios';
import { store } from 'core/store';

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

export default graphClient;
