import { api } from '../../libs/api';

const postFavorite = async (bookId: number) => {
  const token = localStorage.getItem('token');
  const { data } = await api.post(
    '/api/favorite',
    { bookId: bookId },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export default postFavorite;
