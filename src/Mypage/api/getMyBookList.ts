import { api } from '../../libs/api';

export async function getMyBookList() {
  const data = await api.get(`/api/mypage/book`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
  });
  return data.data.data.bookList;
}
