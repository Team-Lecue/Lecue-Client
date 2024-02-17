import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { patchNickname } from '../api/patchNickname';
import {
  patchNicknameProps,
  usePatchNicknameProps,
} from '../types/registerTypes';

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
        console.error('usePatchNickname', err.response?.data);
        navigate('/error');
      }
    },
    onSuccess: () => {
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('nickname', nickname);
      if (sessionStorage.getItem('url') === '') {
        navigate('/', { state: { step: 1 } });
      } else {
        navigate(-4);
      }
    },
  });

  return mutation;
};

export default usePatchNickname;
