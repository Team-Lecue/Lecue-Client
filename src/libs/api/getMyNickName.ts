import { api } from '../../libs/api';

export async function getMyNickName() {
  const data = await api().get(`/api/mypage`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.data.data.memberNickname;
}
