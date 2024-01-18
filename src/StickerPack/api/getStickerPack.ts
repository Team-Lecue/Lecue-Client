import { api } from '../../libs/api';

export async function getStickerPack(bookId: number) {
  const data = await api.get(`/api/stickers/${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return data.data.data;
}
