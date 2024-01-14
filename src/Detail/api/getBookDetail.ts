import { api } from '../../libs/api';

export async function getBookDetail() {
  const data = await api.get(
    `/api/books/detail/ee4f66f9-9cf4-4b28-90f4-f71d0ecba024`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data.data.data;
}
