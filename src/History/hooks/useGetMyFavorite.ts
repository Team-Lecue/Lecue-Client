import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import { getMyFavorite } from '../api/getMyFavorite';

export default function useGetMyFavorite() {
  const navigate = useNavigate();
  const { data: myFavoriteList, isLoading } = useQuery(
    [QUERY_KEY.favorite.getMypageFavorite],
    () => getMyFavorite(),
    {
      onError: () => {
        navigate('/error');
      },
      refetchOnWindowFocus: false,
    },
  );

  return { myFavoriteList, isLoading };
}
