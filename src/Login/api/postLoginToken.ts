import { api } from '../../libs/api';

export const postLoginToken = async (token: string) => {
  const response = await api.post(
    '/api/login',
    {
      socialPlatform: 'KAKAO',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.data;
};
