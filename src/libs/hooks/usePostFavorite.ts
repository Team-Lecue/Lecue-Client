import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import postFavorite from '../api/postFavorite';

const usePostFavorite = (state: string, bookUuid?: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleRefetchQueries = (state: string, bookUuid?: string) => {
    switch (state) {
      case 'mypage':
        queryClient.refetchQueries(['get-my-lecueBook'], {
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
      return postFavorite(bookId);
    },
    onError: () => navigate('/error'),
    onSuccess: () => {
      handleRefetchQueries(state, bookUuid);
    },
  });
  return mutation.mutate;
};

export default usePostFavorite;
