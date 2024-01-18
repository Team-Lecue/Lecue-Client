import { api } from '../../libs/api';

export async function getMyBookList() {
  const token = localStorage.getItem('token');
  const data = await api.get(`/api/mypage/book`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data.data.bookList;
}
