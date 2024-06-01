import axios from 'axios';

export const api = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
  });

  const token = sessionStorage.getItem('token');
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return api;
};
