import { api } from '../../libs/api';

export async function getMyBookList() {
  const data = await api().get(`/api/mypage/book`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.data.data;
}
