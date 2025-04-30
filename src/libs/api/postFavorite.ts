import { api } from '../../libs/api';

const postFavorite = async (bookId: number) => {
  const { data } = await api().post(
    '/api/favorite',
    { bookId: bookId },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data;
};

export default postFavorite;
