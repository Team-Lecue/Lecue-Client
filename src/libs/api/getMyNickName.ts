import { api } from '../../libs/api';

export async function getMyNickName() {
  const token = localStorage.getItem('token');
  const data = await api.get(`/api/mypage`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data.data.memberNickname;
}
