import { api } from '../../libs/api';

export async function getBookUuid(bookId: number) {
  const data = await api().get(`/api/stickers/${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data.data.bookUuid;
}
