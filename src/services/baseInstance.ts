import axios from 'axios';
import { BASE_URL } from './api';

const instance = axios.create({
  baseURL: `${BASE_URL}api/`,
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.request.use((request: any) => {
  request.headers['SehaSession'] = `${localStorage.getItem('token')}`;
  request.headers['Accept-Language'] = `ar`;
  return request;
});
export default instance;
