import { api } from '../../libs/api';

export async function getMyFavorite() {
  const data = await api().get(`/api/mypage/favorite`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data.data;
}
