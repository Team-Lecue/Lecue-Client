import { api } from '../../libs/api';
import { postedStickerParams } from '../type/postStickerType';

export async function postStickerState({
  postedStickerId,
  bookId,
  positionX,
  positionY,
}: postedStickerParams) {
  const token = localStorage.getItem('token');
  const data = await api.post(
    '/api/stickers',
    {
      bookId: bookId,
      stickerId: postedStickerId,
      positionX: positionX,
      positionY: positionY,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data?.data?.data;
}
