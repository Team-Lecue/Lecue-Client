import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import deleteFavorite from '../api/deleteFavorite';

const useDeleteFavorite = (state: string, bookUuid?: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleRefetchQueries = (state: string, bookUuid?: string) => {
    switch (state) {
      case 'home':
        queryClient.refetchQueries(QUERY_KEY.favorite.getHomeFavorite, {
          exact: true,
        });
        break;

      case 'mypage':
        queryClient.refetchQueries(QUERY_KEY.favorite.getMypageFavorite, {
          exact: true,
        });
        break;

      case 'lecueBook':
        queryClient.refetchQueries(QUERY_KEY.favorite.getLecueBookFavorite, {
          exact: true,
        });
        break;

      case 'lecueBookDetail':
        queryClient.refetchQueries(['get-bookDetail-login', bookUuid], {
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
      handleRefetchQueries(location, bookUuid);
    },
  });
  return mutation.mutate;
};

export default useDeleteFavorite;
