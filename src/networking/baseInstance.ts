import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://dualpractice.devclan.io/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.request.use((request: any) => {
  request.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  request.headers['Accept-Language'] = window.navigator.language;
  return request;
});
export default instance;
