import { api } from '../../libs/api';

export async function getBookDetail(bookUuid: string) {
  const data = await api.get(`/api/books/detail/${bookUuid}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data.data;
}
