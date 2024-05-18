import { api } from '../../libs/api';

export async function getBookDetailLogin(bookUuid: string) {
  const data = await api.get(`/api/books/favorite/${bookUuid}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data.data;
}
