import { api } from '../../libs/api';

export async function getStickerPack(bookId: number) {
  const data = await api().get(`/api/stickers/${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data.data.stickerPackList;
}
