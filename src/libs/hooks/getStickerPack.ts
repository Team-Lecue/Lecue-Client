import { api } from '../api';

export async function getStickerPack() {
  const data = await api.get(`/api/stickers/1`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
  });

  return data;
}
