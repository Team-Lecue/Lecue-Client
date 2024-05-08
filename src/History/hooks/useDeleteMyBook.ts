import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import { deleteMyBook } from '../api/deleteMyBook';

const useDeleteMyBook = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (noteId: number) => {
      return deleteMyBook(noteId);
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

export default useDeleteMyBook;
