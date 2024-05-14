import axios from 'axios';
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
      axios.defaults.headers.common['Authorization'] =
        `Bearer ${tokenDto.accessToken}`;

      if (nickname === null) {
        navigate('/register');
      } else {
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
