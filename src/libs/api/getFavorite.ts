import { api } from '../../libs/api';

const getFavorite = async () => {
  const { data } = await api().get('/api/favorite', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.data;
};

export default getFavorite;
