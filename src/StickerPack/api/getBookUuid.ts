import { api } from '../../libs/api';

export async function getBookUuid(bookId: number) {
  const token = localStorage.getItem('token');
  const data = await api.get(`/api/stickers/${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return data.data.data.bookUuid;
}
