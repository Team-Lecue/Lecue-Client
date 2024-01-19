import { AxiosResponse } from 'axios';

import { api } from '../../libs/api';

interface ApiResponse {
  code: number;
  message: string;
  data: {
    bookUuid: string;
  };
}

interface PostBookData {
  favoriteName: string;
  favoriteImage: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const getAuthorizationToken = (): string | null => {
  return localStorage.getItem('token');
};

const postBook = async (data: PostBookData): Promise<{ bookUuid: string }> => {
  const token = getAuthorizationToken();

  const response: AxiosResponse<ApiResponse> = await api.post(
    '/api/books',
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const bookUuid = response.data.data.bookUuid;
  return { bookUuid };
};

export { postBook };
