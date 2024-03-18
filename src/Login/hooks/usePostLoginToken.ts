import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postLoginToken } from '../api/postLoginToken';

const usePostLoginToken = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (token: string) => {
      return await postLoginToken(token);
    },
    onSuccess: (data) => {
      const { tokenDto, nickname } = data;

      if (nickname === null) {
        navigate('/register', { state: { token: tokenDto.accessToken } });
      } else {
        window.localStorage.setItem('token', tokenDto.accessToken);
        window.localStorage.setItem('nickname', nickname);

        if (sessionStorage.getItem('url') === '') {
          navigate('/', { state: { step: 1 } });
        } else {
          navigate(-4);
        }
      }
    },
    onError: () => {
      navigate('/error');
    },
  });
  return mutation;
};

export default usePostLoginToken;
