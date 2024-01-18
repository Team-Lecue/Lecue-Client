import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { deleteMyBook } from '../api/deleteMyBook';

const useDeleteMyBook = () => {
  const mutation = useMutation({
    mutationFn: (noteId: number) => {
      return deleteMyBook(noteId);
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default useDeleteMyBook;
