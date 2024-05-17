import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginState } from '../../atom';
import { api } from '../../libs/api';
import { postLoginToken } from '../api/postLoginToken';

const usePostLoginToken = () => {
  const navigate = useNavigate();
  const setLoginState = useSetRecoilState(loginState);

  const mutation = useMutation({
    mutationFn: async (token: string) => {
      return await postLoginToken(token);
    },
    onSuccess: (data) => {
      const { tokenDto, nickname } = data;

      if (nickname === null) {
        navigate('/register', { state: tokenDto.accessToken });
      } else {
        api.defaults.headers.common['Authorization'] =
          `Bearer ${tokenDto.accessToken}`;
        setLoginState(true);
        window.localStorage.setItem('nickname', nickname);
        navigate('/', { state: { step: 1 } });
      }
    },
    onError: () => {
      navigate('/error');
    },
  });
  return mutation;
};

export default usePostLoginToken;
