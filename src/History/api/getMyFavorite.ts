import { api } from '../../libs/api';

export async function getMyFavorite() {
  const token = localStorage.getItem('token');
  const data = await api.get(`/api/mypage/favorite`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return data.data.data;
}
