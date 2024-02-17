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
    onError: () => {
      navigate('/error');
    },
    onSuccess: (data) => {
      handleLoginToken(data.access_token);
    },
  });
  return mutation;
};

export default useGetLoginToken;
