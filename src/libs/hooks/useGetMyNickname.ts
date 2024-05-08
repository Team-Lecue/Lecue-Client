import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import { getMyNickName } from '../api/getMyNickName';

export default function useGetMyNickName() {
  const navigate = useNavigate();
  const { data: myNickName, isLoading } = useQuery(
    QUERY_KEY.nickname.getNickName,
    () => getMyNickName(),
    {
      onError: () => {
        navigate('/error');
      },
      refetchOnWindowFocus: false,
    },
  );

  return { myNickName, isLoading };
}
