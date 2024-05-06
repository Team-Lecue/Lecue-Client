import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import deleteFavorite from '../api/deleteFavorite';

const useDeleteFavorite = (state: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleRefetchQueries = (state: string) => {
    switch (state) {
      case 'home':
        queryClient.refetchQueries(['get-favorite'], {
          exact: true,
        });
        break;

      case 'favoriteBook':
        queryClient.refetchQueries(['get-mypage-favorite'], {
          exact: true,
        });
        break;

      case 'myLecueBook':
        queryClient.refetchQueries(['get-my-lecueBook'], {
          exact: true,
        });
        break;

      case 'lecueBookDetail':
        queryClient.refetchQueries(['get-bookDetail-login'], {
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
