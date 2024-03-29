import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { patchNickname } from '../api/patchNickname';
import {
  patchNicknameProps,
  usePatchNicknameProps,
} from '../types/editNicknameTypes';

const usePatchNickname = (props: usePatchNicknameProps) => {
  const { handleSetIsValid, handleSetIsActive, token, nickname } = props;

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ token, nickname }: patchNicknameProps) => {
      return await patchNickname(token, nickname);
    },
    onError: (err: AxiosError) => {
      const code = err.response?.status;
      if (code === 409) {
        // 닉네임 중복코드 : 409
        handleSetIsValid('duplicate');
        handleSetIsActive(false);
      } else if (code === 400) {
        handleSetIsValid('space');
        handleSetIsActive(false);
      } else {
        navigate('/error');
      }
    },
    onSuccess: () => {
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('nickname', nickname);
      navigate('/');
    },
  });

  return mutation;
};

export default usePatchNickname;
