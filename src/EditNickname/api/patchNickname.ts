import { api } from '../../libs/api';

export const patchNickname = async (nickname: string) => {
  const response = await api.patch(
    '/api/nickname',
    { nickname: nickname },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return { code: response.data.code };
};
