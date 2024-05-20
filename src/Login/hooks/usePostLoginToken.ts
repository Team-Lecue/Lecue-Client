import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginState } from '../../atom';
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
        sessionStorage.setItem('token', tokenDto.accessToken);
        localStorage.setItem('nickname', nickname);
        setLoginState(true);

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
