import { api } from '../../libs/api';

const deleteFavorite = async (bookId: number) => {
  const { data } = await api().delete('/api/favorite', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: { bookId: bookId },
  });

  return data;
};

export default deleteFavorite;
