import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { patchNickname } from '../api/patchNickname';

interface patchNicknameProps {
  token: string;
  nickname: string;
}

const usePatchNickname = () => {
  const mutation = useMutation({
    mutationFn: async ({ token, nickname }: patchNicknameProps) => {
      return await patchNickname(token, nickname);
    },
    onError: (err: AxiosError) => {
      console.error('usePatchNickname', err.response?.data);
    },
  });
  return mutation;
};

export default usePatchNickname;
