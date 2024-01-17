import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { patchNickname } from '../api/patchNickname';

interface patchNicknameProps {
  token: string;
  nickname: string;
}

const usePatchNickname = () => {
  const mutation = useMutation({
    mutationFn: ({ token, nickname }: patchNicknameProps) => {
      return patchNickname(token, nickname);
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePatchNickname;
