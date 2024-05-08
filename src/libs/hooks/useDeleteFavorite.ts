import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import deleteFavorite from '../api/deleteFavorite';

const useDeleteFavorite = (state: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleRefetchQueries = (state: string) => {
    switch (state) {
      case 'home':
        queryClient.refetchQueries([QUERY_KEY.favorite.getFavoriteHome], {
          exact: true,
        });
        break;

      case 'favoriteBook':
        queryClient.refetchQueries([QUERY_KEY.favorite.getFavoriteMypage], {
          exact: true,
        });
        break;

      case 'myLecueBook':
        queryClient.refetchQueries([QUERY_KEY.favorite.getFavoriteLecueBook], {
          exact: true,
        });
        break;
    }
  };

  const mutation = useMutation({
    mutationFn: (bookId: number) => {
      return deleteFavorite(bookId);
    },
    onError: () => navigate('/error'),
    onSuccess: () => {
      handleRefetchQueries(state);
    },
  });
  return mutation.mutate;
};

export default useDeleteFavorite;
