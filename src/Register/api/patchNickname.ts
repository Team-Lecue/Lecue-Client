import { api } from '../../libs/api';

export const patchNickname = async (token: string, nickname: string) => {
  const response = await api.patch(
    '/api/nickname',
    { nickname: nickname },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(response.data);

  return { code: response.data.code };
};
