import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postBook } from '../utils/api';

interface usePostBookProps {
  favoriteName: string;
  favoriteImage: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const usePostBook = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({
      favoriteName,
      favoriteImage,
      title,
      description,
      backgroundColor,
    }: usePostBookProps) => {
      return postBook({
        favoriteName,
        favoriteImage,
        title,
        description,
        backgroundColor,
      });
    },
    onError: () => navigate('/error'),
    onSuccess: (data) => {
      const { bookUuid } = data;
      navigate(`/lecue-book/${bookUuid}`);
    },
  });
  return mutation;
};

export default usePostBook;
