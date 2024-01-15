import { api } from '../../libs/api';

interface postedStickerParams {
  postedStickerId: number;
  bookId: number;
  positionX: number;
  positionY: number;
}

export async function postStickerState({
  postedStickerId,
  bookId,
  positionX,
  positionY,
}: postedStickerParams) {
  console.log('api', postedStickerId, bookId, positionX, positionY);

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
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      },
    },
  );
  console.log(data.data.data);
  return data?.data?.data;
}
