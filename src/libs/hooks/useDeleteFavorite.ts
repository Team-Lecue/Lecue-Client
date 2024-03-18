import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import deleteFavorite from '../api/deleteFavorite';

const useDeleteFavorite = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (bookId: number) => {
      return deleteFavorite(bookId);
    },
    onError: () => navigate('/error'),
    onSuccess: () => {
      queryClient.refetchQueries(['get-favorite'], { exact: true });
    },
  });
  return mutation;
};

export default useDeleteFavorite;
