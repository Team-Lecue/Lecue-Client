import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
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
      queryClient.refetchQueries([QUERY_KEY.favorite.getLecueBookFavorite], {
        exact: true,
      });
    },
  });
  return mutation.mutate;
};

export default usePostFavorite;
