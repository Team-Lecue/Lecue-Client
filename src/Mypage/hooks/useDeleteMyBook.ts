import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { deleteMyBook } from '../api/deleteMyBook';

const useDeleteMyBook = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (noteId: number) => {
      return deleteMyBook(noteId);
    },
    onError: () => navigate('/error'),
  });
  return mutation;
};

export default useDeleteMyBook;
