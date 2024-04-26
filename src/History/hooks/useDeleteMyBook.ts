import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

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
      queryClient.refetchQueries(['get-my-lecueBook'], {
        exact: true,
      });
    },
  });
  return mutation.mutate;
};

export default useDeleteMyBook;
