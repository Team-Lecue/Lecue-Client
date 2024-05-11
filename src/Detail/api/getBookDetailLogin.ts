import { api } from '../../libs/api';

export async function getBookDetailLogin(bookUuid: string) {
  const token = localStorage.getItem('token');
  const data = await api.get(`/api/books/favorite/${bookUuid}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return data.data.data;
}
