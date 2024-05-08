import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import deleteFavorite from '../api/deleteFavorite';

const useDeleteFavorite = (location: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleRefetchQueries = (location: string) => {
    switch (location) {
      case 'home':
        queryClient.refetchQueries([QUERY_KEY.favorite.getHomeFavorite], {
          exact: true,
        });
        break;

      case 'mypage':
        queryClient.refetchQueries([QUERY_KEY.favorite.getMypageFavorite], {
          exact: true,
        });
        break;

      case 'lecueBook':
        queryClient.refetchQueries([QUERY_KEY.favorite.getLecueBookFavorite], {
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
      handleRefetchQueries(location);
    },
  });
  return mutation.mutate;
};

export default useDeleteFavorite;
