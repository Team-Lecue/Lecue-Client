import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import getFavorite from '../api/getFavorite';

const useGetFavorite = () => {
  const navigate = useNavigate();

  const { isLoading: isLoadingFavorite, data: favorite } = useQuery({
    queryKey: [QUERY_KEY.favorite.getHomeFavorite],
    queryFn: () => getFavorite(),
    onError: () => navigate('/error'),
    refetchOnWindowFocus: false,
  });

  return { isLoading: isLoadingFavorite, data: favorite };
};

export default useGetFavorite;
