import axios from 'axios';

console.log(import.meta.env.VITE_APP_BASE_URL);
export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
