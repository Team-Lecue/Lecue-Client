import { api } from '../../libs/api';

const deleteFavorite = async (bookId: number) => {
  const token = localStorage.getItem('token');
  const { data } = await api.delete('/api/favorite', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: { bookId: bookId },
  });

  return data;
};

export default deleteFavorite;
