import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import postFavorite from '../api/postFavorite';

const usePostFavorite = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (bookId: number) => {
      return postFavorite(bookId);
    },
    onError: () => navigate('/error'),
    onSuccess: () => {
      queryClient.refetchQueries(['get-my-lecueBook'], {
        exact: true,
      });
    },
  });
  return mutation;
};

export default usePostFavorite;
