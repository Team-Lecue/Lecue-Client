import { api } from '../../libs/api';

export async function getMyNoteList() {
  const data = await api().get(`/api/mypage/note`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.data.data;
}
