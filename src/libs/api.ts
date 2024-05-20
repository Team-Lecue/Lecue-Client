import axios from 'axios';

const token = sessionStorage.getItem('token');

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
