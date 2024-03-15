import { api } from '../../libs/api';

const getFavorite = async () => {
  const token = localStorage.getItem('token');
  const { data } = await api.get('/api/favorite', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data;
};

export default getFavorite;
