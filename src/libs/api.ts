import axios, { AxiosInstance } from 'axios';

let apiInstance: AxiosInstance;

export const api = () => {
  const token = sessionStorage.getItem('token');

  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_URL,
    });
  }

  const headerToken =
    apiInstance.defaults.headers.common.Authorization?.toString();

  if (!headerToken || token !== headerToken.split(' ')[1]) {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return apiInstance;
};
