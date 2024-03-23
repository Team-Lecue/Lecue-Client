import { api } from '../../libs/api';

export async function getMyNoteList() {
  const token = localStorage.getItem('token');
  const data = await api.get(`/api/mypage/note`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data.data.noteList;
}
