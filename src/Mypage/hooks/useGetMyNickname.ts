import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getMyNickName } from '../api/getMyNickName';

export default function useGetMyNickName() {
  const navigate = useNavigate();
  const { data: myNickName, isLoading } = useQuery(
    ['useGetMyNickName'],
    () => getMyNickName(),
    {
      onError: () => {
        navigate('/error');
      },
    },
  );

  return { myNickName, isLoading };
}
