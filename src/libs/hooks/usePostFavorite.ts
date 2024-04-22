import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import postFavorite from '../api/postFavorite';

const usePostFavorite = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (bookId: number) => {
      return postFavorite(bookId);
    },
    onError: () => navigate('/error'),
  });
  return mutation;
};

export default usePostFavorite;
