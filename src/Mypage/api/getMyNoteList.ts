import { api } from '../../libs/api';

export async function getMyNoteList() {
  const data = await api.get(`/api/mypage/note`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
  });
  return data.data.data.noteList;
}
