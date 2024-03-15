import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import getFavorite from '../api/getFavorite';

const useGetFavorite = () => {
  const navigate = useNavigate();

  const { isLoading: isLoadingFavorite, data: favorite } = useQuery({
    queryKey: ['get-favorite'],
    queryFn: () => getFavorite(),
    onError: () => navigate('/error'),
    refetchOnWindowFocus: false,
  });

  return { isLoading: isLoadingFavorite, data: favorite };
};

export default useGetFavorite;
