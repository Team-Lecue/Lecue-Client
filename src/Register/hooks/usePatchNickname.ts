import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginState } from '../../atom';
import { patchNickname } from '../api/patchNickname';
import {
  patchNicknameProps,
  usePatchNicknameProps,
} from '../types/registerTypes';

const usePatchNickname = (props: usePatchNicknameProps) => {
  const { handleSetIsValid, handleSetIsActive, nickname } = props;
  const { state } = useLocation();

  const navigate = useNavigate();
  const setLoginState = useSetRecoilState(loginState);

  const mutation = useMutation({
    mutationFn: async ({ nickname }: patchNicknameProps) => {
      return await patchNickname(nickname);
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
      sessionStorage.setItem('token', state);
      localStorage.setItem('nickname', nickname);
      setLoginState(true);
      navigate('/', { state: { step: 1 } });
    },
  });

  return mutation;
};

export default usePatchNickname;
