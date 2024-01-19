import { api } from '../../libs/api';

export async function deleteMyBook(bookId: number) {
  const token = localStorage.getItem('token');
  const data = await api.delete(`/api/books/${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
