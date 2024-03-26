import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getMyFavorite } from '../api/getMyFavorite';

export default function useGetMyFavorite() {
  const navigate = useNavigate();
  const { data: myFavoriteList, isLoading } = useQuery(
    ['useGetMyFavorite'],
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
