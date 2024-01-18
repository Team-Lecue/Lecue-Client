import { api } from '../../libs/api';

export async function deleteMyBook(bookId: number) {
  const data = await api.delete(`/api/books/${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
  });

  return data;
}
