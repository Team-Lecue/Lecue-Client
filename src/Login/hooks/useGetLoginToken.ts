import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getLoginToken } from '../api/getLoginToken';

interface useGetLoginTokenProps {
  handleLoginToken: (token: string) => void;
}

const useGetLoginToken = (props: useGetLoginTokenProps) => {
  const { handleLoginToken } = props;

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async () => {
      return await getLoginToken();
    },
    onError: (error: AxiosError) => {
      console.error('로그인 토큰을 가져오는 중 에러 발생 : ', error);
      navigate('/error');
    },
    onSuccess: (data) => {
      handleLoginToken(data.access_token);
    },
  });
  return mutation;
};

export default useGetLoginToken;
